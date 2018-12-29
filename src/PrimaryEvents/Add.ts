import onCreateLobby from './OnCreateLobby'
import onJoinLobby from './OnJoinLobby'
import onGetPlayers from './OnGetPlayers'
import onStartGame from './OnStartGame'

export default (socket) => {
	const events = {
		'create lobby': onCreateLobby,
		'join lobby': onJoinLobby,
		'get players': onGetPlayers,
		'start game': onStartGame,
	}

	for (const event in events) {
		socket.on(event, (...args) => {
			events[event].call(socket, ...args)
		})
	}
}
