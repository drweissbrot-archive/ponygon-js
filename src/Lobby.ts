import GameList from './Games/List'
import Game from './Games/Game'
import Player from './Player'

import { info } from 'helpers'

export default class Lobby {
	public id: string

	public leader: Player

	public players: Player[]

	public game?: Game

	public constructor(id, leader) {
		this.id = id
		this.leader = leader
		this.players = [ leader ]

		leader.lobby = this

		info('L+', this.id)
	}

	public get allPlayers() : object[] {
		return this.players.map((player) => player.forPublic)
	}

	public addPlayer(player: Player) : this {
		if (this.players.some((compare) => compare === player)) return this

		this.players.push(player)

		player.lobby = this

		this.emitPlayers()
		this.emit('user joined', { name: player.name })

		return this
	}

	public emit(event: string, data: any) : this {
		for (const player of this.players) {
			player.socket.emit(event, data)
		}

		return this
	}

	public emitPlayers() : this {
		this.emit('players', { players: this.allPlayers })

		return this
	}

	public isEmpty() : boolean {
		return this.players.length > 0
	}

	public startGame(name: string) : this {
		const className = GameList[name].base

		this.game = new className(this)

		return this
	}
}
