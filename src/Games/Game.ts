import Lobby from '../Lobby'
import GameData from './GameData'

export default abstract class Game {
	protected lobby: Lobby

	public abstract get name()

	public constructor(lobby: Lobby) {
		this.lobby = lobby

		this.emitStarting()

		for (const player of this.lobby.players) {
			player.gameData = this.initialGameData()
		}
	}

	protected abstract initialGameData()

	protected emitStarting() : this {
		this.lobby.emit('game starting', {
			name: this.name,
		})

		return this
	}

	protected end() : void {
		for (const player of this.lobby.players) {
			player.gameData = new GameData()
		}
	}
}
