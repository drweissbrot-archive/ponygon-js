import _ from 'lodash'

import Game from '../Game'
import Lobby from '../../Lobby'
import Player from '../../Player'
import GameData from './GameData'
import WerewolvesPhase from './Contracts/Phase'
import VictimsObject from './Contracts/VictimsObject'

import { info, randomNumber, after } from 'helpers'

const defaultRoles = {
	// amor: 1,
	// spy: 3,
	witch: 3,
	// hunter: 3, // TODO
	// protector: 1,
	// investigator: 3, // TODO
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

	protected protected: Player[]

	public constructor(lobby: Lobby) {
		super(lobby)

		this.playersByRole = new Map()

		for (const role in defaultRoles) {
			this.playersByRole.set(role, [])
		}

		this.resetVictims()
		this.assignRoles()
		this.emitRoles()
		this.resetProtected()

		this.phase = {
			night: true,
			round: 0,
			part: 0,
		}

		after(5, () => {
			this.nextRound()
		})
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

	protected async nextRound() : Promise<any> {
		this.resetProtected()
		.speakingAllowed(false)
		.increaseRound()
		.emitPhase()

		await this.runNight()

		this.killEldersIfAppropriate()

		let deaths = this.handleDeaths()
		if (this.matchHasClinched()) return

		await this.handleMayorDeath(deaths)

		this.resetProtected()
		.speakingAllowed(true)

		await this.runDay(deaths)

		deaths = this.handleDeaths()
		await this.handleMayorDeath(deaths)

		if (! this.matchHasClinched()) return this.nextRound()
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
			player.emit('role', { role: player.gameData.get('role') })
			.emit('action', {
				view: 'role-interstitial',
				data: {
					role: player.gameData.get('role'),
				},
			})
		}
	}

	protected getWerewolfCount() : number {
		return 1 // TODO

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

		// amor lovers
		if (this.phase.round === 1) {
			await this.runNightPartTwo()
			this.increasePart().emitPhase()
		}

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
								player: target.forPublic,
							},
						})

						after(4, resolve)
					})

					// TODO force resolve after some time
				}))
			}
		}

		// protector
		if (this.anyPlayersAre('protector')) {
			for (const protector of this.playersOfRole('protector')) {
				promises.push(new Promise((resolve, reject) => {
					const protectedLastNight = protector.gameData.get('protectedLastNight')

					protector.emit('action', {
						view: 'protector choose',
						data: {
							protectedLastNight: protectedLastNight ? protectedLastNight.forPublic : null,
						},
					})
					.once('protector choice', ({ player: targetId }: { player: string }) => {
						const target = this.getPlayerById(targetId)

						if (! target || protector.gameData.get('protectedLastNight') === target) return resolve()

						protector.gameData.set('protectedLastNight', target)

						this.protected.push(target)

						resolve()
					})
				}))
			}
		}

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
		const werewolves = this.playersOfRole('werewolf')

		const werewolvesPublic = werewolves.map((wolf) => wolf.forPublic)
		const minVotesForVictim = this.getMinVoteCount(werewolves.length)

		let choices = this.getVotingChoicesBase()

		return new Promise((resolve, reject) => {
			for (const werewolf of werewolves) {
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

					if (! victim) {
						let targets: object[] = []

						for (const wolf of werewolves) {
							let data: any = { wolf: wolf.forPublic, choice: null }

							let playerId
							for (const entry of choices.entries()) {
								if (entry[1].includes(wolf)) {
									playerId = entry[0]
									break
								}
							}

							const player = this.getPlayerById(playerId)
							if (player) data.choice = player.forPublic

							targets.push(data)
						}

						for (const wolf of werewolves) {
							wolf.emit('werewolf choices', { choices: targets })
						}
					} else {
						this.victims.werewolves = victim

						for (const wolf of werewolves) {
							wolf.emit('action', {
								view: 'werewolf result',
								data: { victim: victim.forPublic },
							})
						}

						resolve()
					}
				})
			}

			// TODO force resolve after some time
		})
	}

	protected runNightPartFour() : Promise<any> {
		let promises = this.getAutoresolvingPromiseArray()

		// witch
		if (! this.anyPlayersAre('witch')) return Promise.all(promises)

		for (const witch of this.playersOfRole('witch')) {
			const canHeal = ! witch.gameData.get('hasHealed')
			const canKill = ! witch.gameData.get('hasKilled')

			witch.emit('action', {
				view: 'witch choose',
				data: {
					canHeal, canKill,
					werewolfVictim: this.victims.werewolves ? this.victims.werewolves.forPublic : null,
				},
			})

			if (! canHeal && ! canKill) {
				promises.push(this.getAutoresolvingPromise(4, 4))
				continue
			}

			promises.push(new Promise((resolve, reject) => {
				witch.once('witch choice', ({ heal, kill }: { heal: boolean, kill?: string }) => {
					if (canHeal && heal && this.victims.werewolves) {
						this.protected.push(this.victims.werewolves)
						witch.gameData.set('hasHealed', true)
					}

					if (canKill && kill) {
						const target = this.getPlayerById(kill)

						if (target) {
							this.victims.witches.push(target)
							witch.gameData.set('hasKilled', true)
						}
					}

					resolve()
				})

				// TODO force resolve after some time
			}))
		}

		return Promise.all(promises)
	}

	protected async runDay(deaths: Player[]) {
		this.phase.night = false
		this.phase.part = 1
		this.emitPhase()

		// deaths
		await this.runDayPartOne(deaths)
		this.increasePart().emitPhase()

		// mayor
		if (! this.mayor || this.mayor.gameData.get('dead')) {
			await this.runDayPartTwo()
			this.increasePart().emitPhase()
		}

		// discussion/accusations
		const accusations = await this.runDayPartThree()
		this.increasePart().emitPhase()

		// voting
		await this.runDayPartFour(accusations)
	}

	protected runDayPartOne(deaths: Player[]) : Promise<any> {
		this.emitActionToAlive('daytime deaths', {
			deaths: deaths.map((player) => player.forPublic),
		})

		return new Promise((resolve, reject) => {
			after(7.5, resolve)
		})
	}

	protected runDayPartTwo() : Promise<any> {
		const minVotesToWin = this.getMinVoteCount(this.alivePlayers.length)
		let votes = this.getVotingChoicesBase()
		let promises: Promise<any>[] = []

		this.emitActionToAlive('daytime mayor')

		return new Promise((resolve, reject) => {
			for (const player of this.alivePlayers) {
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

					this.setMayor(mayor)

					resolve()
				})
			}
		})
	}

	protected runDayPartThree() : Promise<Map<string, Player[]>> {
		this.emitActionToAlive('daytime accusations')

		let accusations = this.getVotingChoicesBase()

		for (const player of this.alivePlayers) {
			player.on('accuse', ({ player: votedFor }: { player: string }) => {
				const target = this.getPlayerById(votedFor)
				if (! target) return

				// remove previous choice this player made
				accusations.forEach((accusers, targetId) => {
					accusations.set(targetId, accusers.filter((voter) => voter !== player))
				})

				// apply current choice this player made
				let choicesForTarget = accusations.get(target.id)
				if (! choicesForTarget) return

				choicesForTarget.push(player)

				this.emitAccusations(accusations)
			})
		}

		return new Promise((resolve, reject) => {
			if (! this.mayor) return after(60, () => resolve(accusations))

			this.mayor.once('mayor continue to voting', () => resolve(accusations))
		})
	}

	protected runDayPartFour(accusations: Map<string, Player[]>) : Promise<any> {
		let accused: object[] = []

		for (const entry of accusations.entries()) {
			if (! entry[1].length) continue

			const player = this.getPlayerById(entry[0])
			if (player) accused.push(player.forPublic)
		}

		this.emitToAlive('action', {
			view: 'daytime voting',
			data: { accused },
		})

		let votes = this.getVotingChoicesBase()
		const minVotesForVictim = this.getMinVoteCount(this.alivePlayers.length)

		return new Promise((resolve, reject) => {
			for (const player of this.alivePlayers) {
				player.on('vote', ({ player: votedFor }: { player: string }) => {
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

					// decide if the victim has enough votes
					const victim = this.determineVotingWinner(votes, minVotesForVictim)
					if (! victim) return

					this.victims.village = victim

					resolve()
				})
			}
		})
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

		for (const player of this.alivePlayers) {
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
			village: null,
			werewolves: null,
			witches: [],
			elders: [],
		}

		return this
	}

	protected resetProtected() : this {
		this.protected = []

		return this
	}

	protected handleDeaths() : Player[] {
		let deaths: Player[] = []

		// add werewolf victim
		if (this.victims.werewolves) deaths.push(this.victims.werewolves)

		// add witch victims
		deaths.push(...this.victims.witches)

		// add village victim
		if (this.victims.village) deaths.push(this.victims.village)

		// TODO lovers after removing protected, eh?
		// handle lovers
		if (this.inLove && (deaths.includes(this.inLove[0]) || deaths.includes(this.inLove[1]))) {
			deaths.push(...this.inLove)
		}

		// remove any protected victims
		deaths = deaths.filter((player) => ! this.protected.includes(player))

		// add elders
		deaths.push(...this.victims.elders)

		deaths = _(deaths).uniq().value()

		// kill players
		for (const player of deaths) {
			player.gameData.set('dead', true)
			player.emit('dead')
		}

		// clean up role arrays
		for (const role of this.playersByRole.keys()) {
			const playersOfRole = this.playersByRole.get(role)
			if (! playersOfRole) continue

			this.playersByRole.set(role, playersOfRole.filter((player) => ! player.gameData.get('dead')))
		}

		if (deaths.length) this.lobby.emit('log', deaths.map((player) => player.name).join(', ') + ' died.')
		else this.lobby.emit('log', 'No-one died.')

		this.lobby.emitPlayers()
		this.resetVictims()

		return deaths
	}

	protected async handleMayorDeath(deaths: Player[]) : Promise<any> {
		const deadMayor = deaths.find((player) => player.gameData.get('mayor'))
		if (! deadMayor) return Promise.all([])

		deadMayor.emit('action', { view: 'mayor choose successor' })

		return new Promise((resolve, reject) => {
			deadMayor.once('mayor choice', ({ player: playerId }: { player: string }) => {
				deadMayor.emit('clear action')

				let target = this.getPlayerById(playerId)
				if (! target) target = this.getRandomPlayer()

				this.setMayor(target, false)

				resolve()
			})

			// TODO force resolve after some time
		})
	}

	protected matchHasClinched() : boolean {
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
			return this.forceWin('werewolves', this.lobby.players.filter((player) => player.gameData.get('role') === 'werewolf'))
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

	protected speakingAllowed(allowed: boolean) : this {
		this.lobby.emit('speaking allowed', allowed)

		return this
	}

	protected emitAccusations(accusations: Map<string, Player[]>) : this {
		let accusedPlayers: object[] = []

		for (const playerId of accusations.keys()) {
			const accusers = accusations.get(playerId)
			if (! accusers || ! accusers.length) continue

			const player = this.getPlayerById(playerId)
			if (! player) continue

			accusedPlayers.push(player.forPublic)
		}

		this.lobby.emit('accusations', { accusations: accusedPlayers })

		return this
	}

	protected emitToAlive(event: string, data?: any) : this {
		for (const player of this.alivePlayers) {
			player.emit(event, data)
		}

		return this
	}

	protected emitActionToAlive(view: string, data?: any) : this {
		this.emitToAlive('action', { view, data })

		return this
	}

	protected getRandomPlayer(includeDead: boolean = false) : Player {
		return _.sample(includeDead ? this.lobby.players : this.alivePlayers)
	}

	protected setMayor(mayor: Player, wasElected: boolean = true) : this {
		this.mayor = mayor
		this.mayor.gameData.set('mayor', true)
		this.mayor.emit('mayor')

		if (wasElected) this.lobby.emit('log', `${mayor.name} was elected mayor.`)
		else this.lobby.emit('log', `${mayor.name} was chosen as new mayor.`)

		return this
	}

	protected killEldersIfAppropriate() : this {
		if (this.phase.round === this.playersOfRole('werewolf').length + 1) {
			this.victims.elders = this.playersOfRole('elder')
		}

		return this
	}
}
