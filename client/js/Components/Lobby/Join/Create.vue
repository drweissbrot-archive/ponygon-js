<template>
	<div class="lobby-join-create">
		<h1>Create a Lobby</h1>

		<form action="/app" method="post" @submit.prevent="createLobby">
			<input type="text" name="name" v-model="name" required>

			<button type="submit">Create a Lobby</button>
		</form>
	</div>
</template>

<script lang="ts">
import Connection from '~Connection'
import StoresRememberedNickname from './Concerns/StoresRememberedNickname'
import Component, { mixins } from 'vue-class-component'

@Component
export default class LobbyJoinCreate extends mixins(StoresRememberedNickname) {
	public createLobby() : void {
		Connection.emit('create lobby', {
			name: this.name,
		}, (res: any) => {
			this.$emit('createdLobby', res)
		})
	}
}
</script>
