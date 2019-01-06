import Socket from 'socket.io/lib/socket'
import randomWords from 'random-words'

import Lobby from './Lobby'
import Player from './Player'
import { info, byteIdFor, wordIdFor } from 'helpers'

export default class Ponygon {
	protected lobbies: Map<string, Lobby>

	protected players: Map<string, Player>

	protected playersBySocket: Map<string, Player>

	public constructor() {
		this.lobbies = new Map()
		this.players = new Map()
		this.playersBySocket = new Map()
	}

	public authorize(authString: string) : Player | false {
	 	const parsedAuthString = Player.parseAuthString(authString)

		if (parsedAuthString === null) return false

		const { id, secret } = parsedAuthString

		const player = this.players.get(id)

		return (player && player.secret === secret)
			? player
			: false
	}

	public createPlayer(name: string, socket: Socket) : Player {
		const id = byteIdFor(this.players)

		const player = new Player(id, name || randomWords({ exactly: 2, join: ' ' }), socket)

		this.players.set(id, player)
		this.playersBySocket.set(socket.id, player)

		return player
	}

	public createLobby(leader: Player) : Lobby {
		const id = wordIdFor(this.lobbies) // TODO
		// const id = 'nest-quiet-method' // TODO this is useful for debugging

		const lobby = new Lobby(id, leader)

		this.lobbies.set(id, lobby)

		return lobby
	}

	public getPlayerBySocket(socket: any) : Player | undefined {
		let socketId = (socket instanceof Socket) ? socket.id : socket

		return this.playersBySocket.get(socketId)
	}

	public attachPlayerToLobby(player: Player, lobby: Lobby) : this {
		if (player.lobby) {
			info('P>L', player.id, 'tried to join lobby', `${lobby.id}, but was already member of a lobby`)
		} else {
			info('P>L', player.id, 'joins lobby', lobby.id)

			lobby.addPlayer(player)
		}

		return this
	}

	public getLobby(lobby: string) : Lobby | undefined {
		return this.lobbies.get(lobby)
	}

	public deleteLobby(lobbyId: any) : this {
		const lobby = (lobbyId instanceof Lobby) ? lobbyId : this.lobbies.get(lobbyId)

		if (lobby) this.lobbies.delete(lobby.id)

		return this
	}
}
