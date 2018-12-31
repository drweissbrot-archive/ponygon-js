<template>
	<div class="ponygon">
		<template v-if="! game">
			<pg-lobby-create v-if="! lobbyId"
				@createdLobby="onCreatedOrJoinedLobby"
			/>

			<pg-lobby-join v-else-if="lobbyId && ! auth"
				:lobbyId="lobbyId"
				@joinedLobby="onCreatedOrJoinedLobby"
			/>

			<pg-lobby v-if="lobbyId && auth"
				:auth="auth"
				:id="lobbyId"
				@leave="lobbyId = auth = ''"
			/>
		</template>

		<template v-else>
			<pg-werewolves v-if="game === 'werewolves'"
				:auth="auth"
				:lobbyId="lobbyId"
			/>
		</template>
	</div>
</template>

<script>
import Connection from 'connection'

import PgLobby from './Lobby/Lobby'
import PgLobbyCreate from './Lobby/Join/Create'
import PgLobbyJoin from './Lobby/Join/Join'
import PgWerewolves from './Games/Werewolves/Werewolves'

export default {
	components: {
		PgLobby,
		PgLobbyCreate,
		PgLobbyJoin,

		PgWerewolves,
	},

	data() {
		return {
			auth: window.localStorage.getItem('auth'),
			lobbyId: window.location.hash.replace(/^#/, ''),
			game: null,
		}
	},

	mounted() {
		Connection.on('game starting', this.onGameStarting)
	},

	methods: {
		onCreatedOrJoinedLobby({ lobbyId, authString }) {
			this.auth = authString
			this.lobbyId = lobbyId
		},

		onGameStarting({ name }) {
			this.game = name
		},
	},

	watch: {
		auth(newAuth, oldAuth) {
			window.localStorage.setItem('auth', newAuth)
			Connection.auth = newAuth
		},

		lobbyId(newLobbyId, oldLobbyId) {
			if (newLobbyId) window.location.hash = `#${newLobbyId}`
		},
	},
}
</script>
