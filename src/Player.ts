import Socket from 'socket.io/lib/socket'
import crypto from 'crypto'

import AuthInfo from './Contracts/AuthInfo'
import Lobby from './Lobby'

import { info } from 'helpers'

export default class Player {
	public id: string

	public name: string

	public lobby: Lobby

	public socket: Socket

	public secret: string

	public gameData: any

	public constructor(id: string, name: string, socket: Socket) {
		this.id = id
		this.name = name
		this.secret = crypto.randomBytes(16).toString('hex')
		this.socket = socket

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

	public forPublic() : object {
		return {
			name: this.name,
			leader: this.lobby.leader === this,
		}
	}

	public emit(event, data) : this {
		this.socket.emit(event, data)

		return this
	}
}
