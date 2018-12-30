import pg from 'pg'
import SocketIoResolver from '../Contracts/SocketIoResolver'
import AuthStringObject from '../Contracts/AuthStringObject'
import { info } from 'helpers'

export default function ({ auth }: AuthStringObject, resolve: SocketIoResolver) {
	info('?P', this.id, 'getting players')

	const player = pg.authorize(auth)

	if (! player) return resolve()

	resolve({
		players: player.lobby.allPlayers,
	})
}
