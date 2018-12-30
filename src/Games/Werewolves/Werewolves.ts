import _ from 'lodash'

import Game from '../Game'
import Lobby from '../../Lobby'
import Player from '../../Player'
import GameData from './GameData'
import WerewolvesPhase from './Contracts/Phase'
import VictimsObject from './Contracts/VictimsObject'

import { info, randomNumber, after } from 'helpers'

const defaultRoles = {
	amor: 1,
	// spy: 3,
	// witch: 3,
	// hunter: 3,
	// protector: 3,
	// investigator: 3,
	// lycanthrope: 3,
	// elder: 3,
}

const unfriendlyRoles = [
	'werewolf',
	'lycanthrope',
]

export default class Werewolves extends Game {
	protected playersByRole: Map<string, Player[]>

	protected phase: WerewolvesPhase

	protected inLove?: Player[]

	protected victims: VictimsObject

	public constructor(lobby: Lobby) {
		super(lobby)

		this.playersByRole = new Map()

		for (const role in defaultRoles) {
			this.playersByRole.set(role, [])
		}

		this.resetVictims()
		this.assignRoles()
		this.emitRoles()

		this.phase = {
			night: true,
			round: 0,
			part: 0,
		}

		after(5, () => {
			this.nextRound()
		})
	}

	public get name() {
		return 'werewolves'
	}

	protected initialGameData() {
		return new GameData()
	}

	protected async nextRound() {
		this.resetVictims()
		.increaseRound()
		.emitPhase()

		await this.runNight()

		const deaths = this.handleDeaths()

		this.runDay(deaths)
	}

	protected assignRoles() : void {
		const allRoles = Object.assign(defaultRoles) // TODO apply config

		let roles = this.getAssigningRoles(allRoles)

		for (let player of _.shuffle(this.lobby.players)) {
			const role = roles.shift() || 'citizen'

			player.gameData.set('role', role)

			const playersWithRole = this.playersByRole.get(role)

			if (! playersWithRole) this.playersByRole.set(role, [player])
 			else playersWithRole.push(player)
		}
	}

	protected emitRoles() : void {
		for (const player of this.lobby.players) {
			player.emit('action', {
				view: 'role-interstitial',
				data: {
					role: player.gameData.get('role'),
				},
			})
		}
	}

	protected getWerewolfCount() : number {
		if (this.lobby.players.length <= 4) return 1
		if (this.lobby.players.length <= 7) return 2
		if (this.lobby.players.length <= 11) return 3
		if (this.lobby.players.length <= 14) return 4
		if (this.lobby.players.length <= 17) return 5

		return 6
	}

	protected getAssigningRoles(allRoles: object) : string[] {
		let roles: string[] = []
		let werewolves: string[] = []

		for (let i = 0; i < this.getWerewolfCount(); i++) {
			werewolves.push('werewolf')
		}

		for (const role in allRoles) {
			for (let i = 0; i < allRoles[role]; i++) {
				roles.push(role)
			}
		}

		return werewolves.concat(_.shuffle(roles))
	}

	protected emitPhase() : this {
		this.lobby.emit('phase', { phase: this.phase })

		return this
	}

	protected increaseRound() : this {
		this.phase = {
			night: true,
			round: this.phase.round + 1,
			part: 1,
		}

		return this
	}

	protected increasePart() : this {
		this.phase.part++

		return this
	}

	protected async runNight() {
		this.phase.night = true
		this.phase.part = 1

		await this.runNightPartOne()
		this.increasePart()

		await this.runNightPartTwo()
		this.increasePart()

		await this.runNightPartThree()
		this.increasePart()

		await this.runNightPartFour()
	}

	protected runNightPartOne() : Promise<any> {
		let promises = this.getAutoresolvingPromiseArray()

		// amor
		if (this.phase.round === 1 && this.anyPlayersAre('amor')) {
			const amor = this.playersOfRole('amor')[0]

			promises.push(new Promise((resolve, reject) => {
				amor.emit('action', { view: 'amor choose' })
				.once('amor choice', ({ players }: { players: string[] }) => {
					if (players.length !== 2) return resolve()

					const playerOne = this.getPlayerById(players[0])
					const playerTwo = this.getPlayerById(players[1])

					if (! playerOne || ! playerTwo) return resolve()

					playerOne.gameData.set('inLoveWith', playerTwo)
					playerTwo.gameData.set('inLoveWith', playerOne)
					this.inLove = [ playerOne, playerTwo ]

					resolve()
				})

				// TODO force resolve after some time
			}))
		}

		// spy
		if (this.anyPlayersAre('spy')) {
			for (const spy of this.playersOfRole('spy')) {
				promises.push(new Promise((resolve, reject) => {
					spy.emit('action', { view: 'spy choose' })
					.once('spy choice', ({ player: targetId }: { player: string }) => {
						const target = this.getPlayerById(targetId)
						if (! target) return resolve()

						const friendly = ! unfriendlyRoles.includes(target.gameData.get('role'))

						spy.emit('action', {
							view: 'spy result',
							data: {
								friendly,
								target: target.forPublic,
							},
						})

						after(4, resolve)
					})

					// TODO force resolve after some time
				}))
			}
		}

		// TODO protector
		// TODO investigator

		return Promise.all(promises)
	}

	protected runNightPartTwo() : Promise<any> {
		return new Promise((resolve, reject) => {
			if (this.inLove) {
				this.emitInLove(this.inLove[0], this.inLove[1])
				.emitInLove(this.inLove[1], this.inLove[0])
			}

			after(6, resolve)
		})
	}

	protected runNightPartThree() : Promise<any> {
		let promises: Promise<any>[] = []

		const werewolves = this.playersOfRole('werewolf')
		const werewolvesPublic = werewolves.map((wolf) => wolf.forPublic)
		const minVotesForVictim = this.getMinVoteCount(werewolves.length)

		let choices = this.getVotingChoicesBase()

		for (const werewolf of werewolves) {
			promises.push(new Promise((resolve, reject) => {
				werewolf.emit('action', {
					view: 'werewolf choose',
					data: { werewolves: werewolvesPublic },
				})

				werewolf.on('werewolf choice', ({ player }: { player: string }) => {
					const target = this.getPlayerById(player)
					if (! target) return

					// remove previous choice this wolf made
					choices.forEach((wolves, targetId) => {
						choices.set(targetId, wolves.filter((wolf) => wolf !== werewolf))
					})

					// apply current choice this wolf made
					let choicesForTarget = choices.get(target.id)
					if (! choicesForTarget) return

					choicesForTarget.push(werewolf)

					// decide if the victim has enough votes
					const victim = this.determineVictim(choices, minVotesForVictim)
					if (! victim) return

					resolve()

					this.victims.werewolves = victim

					for (const wolf of werewolves) {
						wolf.emit('action', {
							view: 'werewolf result',
							data: { victim: victim.forPublic },
						})
					}
				})
			}))
		}

		return Promise.all(promises)
	}

	protected runNightPartFour() {
		// TODO witch
	}

	protected async runDay(deaths: Player[]) {
		this.phase.night = false
		this.phase.part = 1

		// deaths
		await this.runDayPartOne(deaths)
		this.increasePart()

		// mayor
		await this.runDayPartTwo()
		this.increasePart()

		// discussion/accusations
		await this.runDayPartThree()
		this.increasePart()

		// voting
		await this.runDayPartFour()
	}

	protected runDayPartOne(deaths: Player[]) : Promise<any> {
		this.lobby.emit('action', {
			view: 'daytime deaths',
			data: {
				players: deaths.map((player) => player.forPublic),
			},
		})

		return new Promise((resolve, reject) => {
			after(7.5, resolve)
		})
	}

	// TODO HIER FORTFAHREN
	protected runDayPartTwo() : Promise<any> {
		let votes = this.getVotingChoicesBase()

		this.lobby.emit('action', { view: 'daytime mayor' })

		return Promise.all([])
	}

	protected runDayPartThree() : Promise<any> {
		// TODO
		return Promise.all([])
	}

	protected runDayPartFour() : Promise<any> {
		// TODO
		return Promise.all([])
	}

	protected playersOfRole(role: string) : Player[] {
		return this.playersByRole.get(role) || []
	}

	protected anyPlayersAre(role: string) : boolean {
		return !! this.playersOfRole(role).length
	}

	protected getAutoresolvingPromise(min = 4, max = 15) : Promise<never> {
		return new Promise((resolve, reject) => {
			after(randomNumber(min, max), resolve)
		})
	}

	protected getAutoresolvingPromiseArray(min = 4, max = 15) : Promise<never>[] {
		return [ this.getAutoresolvingPromise(min, max) ]
	}

	protected emitInLove(to: Player, other: Player) : this {
		to.emit('action', {
			view: 'amor in-love',
			data: {
				other: Object.assign({ role: other.gameData.get('role') }, other.forPublic),
			},
		})

		return this
	}

	protected getPlayerById(id: string) : Player | undefined {
		return this.lobby.players.find((player) => player.id === id)
	}

	protected getVotingChoicesBase() : Map<string, Player[]> {
		let choices: Map<string, Player[]> = new Map()

		for (const player of this.lobby.players) {
			choices.set(player.id, [])
		}

		return choices
	}

	protected getMinVoteCount(total: number) : number {
		if (total < 2) return total

		return Math.ceil(total / 1.99) // we always need more than 50%
	}

	protected determineVictim(choices: Map<string, Player[]>, minVotesForVictim: number) : Player | false {
		for (const target of choices.entries()) {
			if (target[1].length >= minVotesForVictim) {
				return this.getPlayerById(target[0]) || false
			}
		}

		return false
	}

	protected resetVictims() : this {
		this.victims = {
			werewolves: null,
			witches: [],
		}

		return this
	}

	protected handleDeaths() : Player[] {
		let players: Player[] = []

		if (this.victims.werewolves) players.push(this.victims.werewolves)

		players = _(players.concat(this.victims.witches)).uniq()

		for (const player of players) {
			player.gameData.set('dead', true)
		}

		this.lobby.emitPlayers()

		return players
	}
}
