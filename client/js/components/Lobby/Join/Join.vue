<template>
	<div class="lobby-join-join">
		<h1>Join a Lobby</h1>

		<form action="/app" method="post" @submit.prevent="joinLobby">
			<input type="text" name="name" v-model="name" required>

			<button type="submit">Join</button>
		</form>
	</div>
</template>

<script>
import Connection from 'connection'
import StoresRememberedNickname from './Concerns/StoresRememberedNickname'

export default {
	mixins: [ StoresRememberedNickname ],

	props: {
		lobbyId: { required: true },
	},

	methods: {
		joinLobby() {
			Connection.emit('join lobby', {
				name: this.name,
				lobbyId: this.lobbyId,
			}, (res) => {
				this.$emit('joinedLobby', res)
			})
		},
	},
}
</script>
