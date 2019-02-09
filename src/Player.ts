import Socket from 'socket.io/lib/socket'
import crypto from 'crypto'

import AuthInfo from './Contracts/AuthInfo'
import Lobby from './Lobby'
import PlayerEventRemover from './PlayerEventRemover'
import GameData from './Games/GameData'

import { info } from 'helpers'

export default class Player {
	public id: string

	public name: string

	public lobby: Lobby

	public socket: Socket

	public secret: string

	public gameData: GameData

	public constructor(id: string, name: string, socket: Socket) {
		this.id = id
		this.name = name
		this.secret = crypto.randomBytes(16).toString('hex')
		this.socket = socket
		this.gameData = new GameData()

		info('P+', this.id)
	}

	public static parseAuthString(authString: string) : AuthInfo | null {
		if (typeof authString !== 'string') return null

		const segments = authString.split(';')

		return (segments.length === 2)
			? { id: segments[0], secret: segments[1] }
			: null
	}

	public get authString() : string {
		return `${this.id};${this.secret}`
	}

	public get forPublic() : object {
		let data = {
			id: this.id,
			name: this.name,
			leader: this.lobby.leader === this,
		}

		return (this.gameData)
			? Object.assign(data, this.gameData.forPublic)
			: data
	}

	public get forFinalScoreboard() : object {
		let data = this.forPublic

		return (this.gameData)
			? Object.assign(data, this.gameData.forFinalScoreboard)
			: data
	}

	public emit(event: string, data?: any) : this {
		this.socket.emit(event, data)

		return this
	}

	public on(event: string, handler?: any) : PlayerEventRemover {
		this.socket.on(event, handler)

		return new PlayerEventRemover(this, handler)
	}

	public once(event: string, handler?: any) : this {
		this.socket.once(event, handler)

		return this
	}

	public off(event: string, handler?: any) : this {
		this.socket.off(event, handler)

		return this
	}
}
