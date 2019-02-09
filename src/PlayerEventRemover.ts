import Player from './Player'

export default class PlayerEventRemover {
	protected player: Player

	protected event: string

	protected handler: any

	public constructor(player: Player, event: string, handler?: any) {
		this.player = player
		this.event = event
		this.handler = handler
	}

	public removeOnceResolved() : this {
		this.player.once(this.event, () => {
			this.player.off(this.event, this.handler)
		})

		return this
	}

	// TODO
	// public forceResolve(afterSeconds: number, handler?: () => any) : this {
	// 	setTimeout(afterSeconds / 1000, () => {
	// 		// TODO
	// 		// if (! eventResolved) {
	// 		// 	handler()
	// 		// }
	// 	})
	//
	// 	return this
	// }
}
