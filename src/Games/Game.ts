import Lobby from '../Lobby'
import GameData from './GameData'
import GameMetaObject from './Contracts/GameMetaObject'

export default abstract class Game {
	protected lobby: Lobby

	protected finished: boolean

	public constructor(lobby: Lobby) {
		this.lobby = lobby
		this.finished = false

		this.emitStarting()

		for (const player of this.lobby.players) {
			player.gameData = this.initialGameData()
		}
	}

	public abstract get meta() : GameMetaObject

	protected abstract initialGameData() : GameData

	protected emitStarting() : this {
		this.lobby.emit('game starting', {
			name: this.meta.name,
		})

		return this
	}

	protected end() : void {
		this.finished = true

		for (const player of this.lobby.players) {
			player.gameData = new GameData()
		}
	}
}
