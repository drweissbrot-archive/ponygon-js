import pg from '../pg'
import SocketIoResolver from '../Contracts/SocketIoResolver'
import { info } from 'helpers'

// TODO what happens when this recieves an object without name property? does the whole app blow up? it shouldnt
export default function ({ name }: { name: string }, resolve: SocketIoResolver) {
	info('L+', this.id, 'wants to create lobby')

	const player = pg.createPlayer(name, this)
	const lobby = pg.createLobby(player)

	resolve({
		lobbyId: lobby.id,
		authString: player.authString,
	})
}
