<template>
	<div class="lobby-join-join">
		<h1>Join a Lobby</h1>

		<form action="/app" method="post" @submit.prevent="joinLobby">
			<input type="text" name="name" v-model="name" required>

			<button type="submit">Join</button>
		</form>

		<p v-if="cannotJoinReason">
			Could not join lobby: {{ cannotJoinReason }}
		</p>
	</div>
</template>

<script lang="ts">
import Connection from '~Connection'
import StoresRememberedNickname from './Concerns/StoresRememberedNickname'
import ListensForConnectionEvents from '~Mixins/ListensForConnectionEvents'

import Component, { mixins } from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class LobbyJoinJoin extends mixins(ListensForConnectionEvents, StoresRememberedNickname) {
	@Prop({ required: true })
	public lobbyId!: any

	public cannotJoinReason: any = null

	public events: any = {
		'cannot join lobby': this.onCannotJoinLobby,
	}

	public joinLobby() : void {
		Connection.emit('join lobby', {
			name: this.name,
			lobbyId: this.lobbyId,
		}, (res: any) => {
			this.$emit('joinedLobby', res)
		})
	}

	public onCannotJoinLobby({ reason }: { reason: any }) : void {
		this.cannotJoinReason = reason
	}
}
</script>
