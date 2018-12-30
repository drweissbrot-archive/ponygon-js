import pg from 'pg'
import GameList from '../Games/List'
import { info } from 'helpers'

export default function ({ name, auth }: { name: string, auth: string }) {
	info('GO', this.id, 'starting game', name)

	const player = pg.authorize(auth)

	if (! player || ! player.lobby || player.lobby.leader !== player || ! GameList.hasOwnProperty(name)) return

	player.lobby.startGame(name)
}
