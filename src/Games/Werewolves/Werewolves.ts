import _ from 'lodash'

import Game from '../Game'
import Lobby from '../../Lobby'
import Player from '../../Player'

const defaultRoles = {
	amor: 1,
	spy: 3,
	witch: 3,
	hunter: 3,
	protector: 3,
	investigator: 3,
	lycanthrope: 3,
	elder: 3,
}

export default class Werewolves extends Game {
	protected playersByRoles: Map<string, Array<Player>>

	public constructor(lobby: Lobby) {
		super(lobby)

		this.playersByRoles = new Map()

		for (const role in defaultRoles) {
			this.playersByRoles.set(role, [])
		}

		this.assignRoles()
	}

	public get name() {
		return 'werewolves'
	}

	protected assignRoles() : void {
		const allRoles = Object.assign(defaultRoles) // TODO apply config

		let roles = this.getAssigningRoles(allRoles)

		for (let player of _.shuffle(this.lobby.players)) {
			const role = roles.shift() || 'citizen'

			player.gameData.role = role

			const playersWithRole = this.playersByRoles.get(role)

			if (! playersWithRole) this.playersByRoles.set(role, [player])
 			else playersWithRole.push(player)
		}

		this.emitRoles()
	}

	protected emitRoles() : void {
		for (const player of this.lobby.players) {
			player.emit('action', {
				view: 'role-interstitial',
				data: {
					role: player.gameData.role,
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

	protected getAssigningRoles(allRoles: object) : Array<string> {
		let roles: Array<string> = []
		let werewolves: Array<string> = []

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
}
