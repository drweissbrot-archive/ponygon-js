import Lobby from '../Lobby'

export default abstract class Game {
	protected lobby: Lobby

	public abstract get name()

	public constructor(lobby: Lobby) {
		this.lobby = lobby

		this.emitStarting()

		for (const player of this.lobby.players) {
			player.gameData = this.initialGameData
		}
	}

	protected get initialGameData() {
		return {}
	}

	protected emitStarting() : this {
		this.lobby.emit('game starting', {
			name: this.name,
		})

		return this
	}
}
