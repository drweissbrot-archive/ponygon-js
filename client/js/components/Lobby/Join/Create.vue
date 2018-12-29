<template>
	<div class="lobby-join-create">
		<h1>Create a Lobby</h1>

		<form action="/app" method="post" @submit.prevent="createLobby">
			<input type="text" name="name" v-model="name" required>

			<button type="submit">Create a Lobby</button>
		</form>
	</div>
</template>

<script>
import Connection from 'connection'

export default {
	data() {
		return {
			name: '',
		}
	},

	methods: {
		createLobby() {
			Connection.emit('create lobby', {
				name: this.name,
			}, (res) => {
				this.$emit('createdLobby', res)
			})
		},
	},
}
</script>
