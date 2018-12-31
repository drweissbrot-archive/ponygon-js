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

	protected mayor?: Player

	protected winners?: Player[]

	protected losers?: Player[]

	protected winner?: string

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

		// TODO Remove
		for (const player of this.lobby.players) {
			console.log(player.forFinalScoreboard)
		}
	}

	public get meta() {
		return {
			name: 'werewolves',
			allowJoiningWhileRunning: false,
		}
	}

	protected get alivePlayers() {
		return this.lobby.players.filter((player) => ! player.gameData.get('dead'))
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

		if (this.matchClinched()) return

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
		this.increasePart().emitPhase()

		await this.runNightPartTwo()
		this.increasePart().emitPhase()

		await this.runNightPartThree()
		this.increasePart().emitPhase()

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

		// TODO only a single promise should be returned (similar to mayor election)
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
					const victim = this.determineVotingWinner(choices, minVotesForVictim)
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

	protected runNightPartFour() : Promise<any> {
		// TODO witch

		return new Promise((resolve, reject) => {
			after(3, resolve)
		})
	}

	protected async runDay(deaths: Player[]) {
		this.phase.night = false
		this.phase.part = 1
		this.emitPhase()

		// deaths
		await this.runDayPartOne(deaths)
		this.increasePart().emitPhase()

		// mayor
		await this.runDayPartTwo()
		this.increasePart().emitPhase()

		// discussion/accusations
		await this.runDayPartThree()
		this.increasePart().emitPhase()

		// voting
		await this.runDayPartFour()
	}

	protected runDayPartOne(deaths: Player[]) : Promise<any> {
		this.lobby.emit('action', {
			view: 'daytime deaths',
			data: {
				deaths: deaths.map((player) => player.forPublic),
			},
		})

		return new Promise((resolve, reject) => {
			after(7.5, resolve)
		})
	}

	protected runDayPartTwo() : Promise<any> {
		const minVotesToWin = this.getMinVoteCount(this.lobby.players.length)
		let votes = this.getVotingChoicesBase()
		let promises: Promise<any>[] = []

		this.lobby.emit('action', { view: 'daytime mayor' })

		return new Promise((resolve, reject) => {
			for (const player of this.lobby.players) {
				player.on('vote for mayor', ({ player: votedFor }: { player: string }) => {
					const target = this.getPlayerById(votedFor)
					if (! target) return

					// remove previous choice this player made
					votes.forEach((voters, targetId) => {
						votes.set(targetId, voters.filter((voter) => voter !== player))
					})

					// apply current choice this player made
					let choicesForTarget = votes.get(target.id)
					if (! choicesForTarget) return

					choicesForTarget.push(player)

					// decide if the player has enough votes
					const mayor = this.determineVotingWinner(votes, minVotesToWin)
					if (! mayor) return

					resolve()

					this.mayor = mayor

					this.lobby.emit('log', `${mayor.name} was elected mayor.`)

					// for (const player of this.lobby.players) {
					// 	player.emit('log', `${mayor.name} was elected mayor.`)
					// 	.emit('action', {
					// 		view: 'daytime mayor-result',
					// 		data: { mayor: mayor.forPublic },
					// 	})
					// }
				})
			}
		})
	}

	protected runDayPartThree() : Promise<any> {
		this.lobby.emit('action', { view: 'daytime accusations' })

		return new Promise((resolve, reject) => {
			if (! this.mayor) return resolve()

			this.mayor.once('mayor go to voting', resolve)
		})
	}

	protected runDayPartFour() : Promise<any> {
		this.lobby.emit('log', 'voting would show now')

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

	protected determineVotingWinner(choices: Map<string, Player[]>, minVotesForVictim: number) : Player | false {
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

		if (this.inLove && (players.includes(this.inLove[0]) || players.includes(this.inLove[1]))) {
			players = players.concat(this.inLove)
		}

		players = _(players.concat(this.victims.witches)).uniq()

		for (const player of players) {
			player.gameData.set('dead', true)

			if (player.gameData.get('inLoveWith')) {
				player.gameData.get('inLoveWith').gameData.set('dead', true)
			}
		}

		for (const role in this.playersByRole) {
			const playersOfRole = this.playersByRole.get(role)

			if (playersOfRole) {
				this.playersByRole.set(role, playersOfRole.filter((player) => ! player.gameData.get('dead')))
			}
		}

		this.lobby.emitPlayers()

		return players
	}

	protected matchClinched() : boolean {
		const alive = this.alivePlayers

		if (alive.length === 2 && this.inLove
			&& alive[0].gameData.get('inLoveWith')
			&& alive[0].gameData.get('inLoveWith') === alive[1]) {
			return this.forceWin('lovers', this.inLove)
		}

		const werewolves = alive.filter((player) => player.gameData.get('role') === 'werewolf')

		if (werewolves.length === 0) {
			return this.forceWin('citizens', this.lobby.players.filter((player) => player.gameData.get('role') !== 'werewolf'))
		}

		if (werewolves.length === alive.length) {
			return this.forceWin('werewolves', werewolves)
		}

		return false
	}

	protected forceWin(group: string, players: Player[]) : true {
		this.winners = players
		this.losers = this.lobby.players.filter((player) => ! players.includes(player))
		this.winner = group

		this.emitWinner()
		this.end()

		return true
	}

	protected emitWinner() : void {
		if (! this.winner || ! this.winners || ! this.losers) return

		this.lobby.emit('action', {
			view: 'gg wp',
			data: {
				winner: this.winner,
				winners: this.winners.map((player) => player.forFinalScoreboard),
				losers: this.losers.map((player) => player.forFinalScoreboard),
			},
		})
	}
}
