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
				:playerId="playerId"
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

<script lang="ts">
import Connection from '~Connection'

import Vue from 'vue'
import Component from 'vue-class-component'
import { Watch } from 'vue-property-decorator'

import PgLobby from './Lobby/Lobby'
import PgLobbyCreate from './Lobby/Join/Create'
import PgLobbyJoin from './Lobby/Join/Join'
import PgWerewolves from './Games/Werewolves/Werewolves'

@Component({
	components: {
		PgLobby,
		PgLobbyCreate,
		PgLobbyJoin,

		PgWerewolves,
	},
})
export default class ComponentsApp extends Vue {
	protected auth: string | null = window.localStorage.getItem('auth')

	protected lobbyId: string = window.location.hash.replace(/^#/, '')

	protected game: string | null = null

	protected playerId: string | null = null

	protected mounted() : void {
		Connection.on('game starting', this.onGameStarting)
	}

	protected onCreatedOrJoinedLobby({ lobbyId, authString }: any) : void {
		this.auth = authString
		this.lobbyId = lobbyId
	}

	protected onGameStarting({ name }: any) : void {
		this.game = name
	}

	@Watch('auth')
	protected onAuthChangedUpdateAuthAndPlayerId(newAuth: string) : void {
		window.localStorage.setItem('auth', newAuth)
		Connection.auth = newAuth

		this.playerId = newAuth.split(';')[0]
	}

	@Watch('lobbyId')
	protected onLobbyIdChangedUpdateHash(newLobbyId: string) : void {
		if (newLobbyId) window.location.hash = `#${newLobbyId}`
	}
}
</script>
