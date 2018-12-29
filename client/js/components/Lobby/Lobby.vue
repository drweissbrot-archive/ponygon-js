<template>
	<div class="lobby">
		<div class="title">
			<h1>
				Ponygon Lobby
				<code>{{ id }}</code>
			</h1>

			<div class="invite-link">
				Invite your friends using this link:
				<a :href="inviteUrl" @click.prevent>
					{{ inviteUrl }}
				</a>

				or

				<a href="#" @click.prevent="$emit('leave')">
					leave this lobby
				</a>
			</div>
		</div>

		<div class="player-list">
			<h2>Players in Your Lobby</h2>

			<div v-for="player in players">
				{{ player.name }}

				<template v-if="player.leader">👑</template>
			</div>
		</div>

		<div class="chat">
			<h2>Chat</h2>

			<p>chat goes here</p>
		</div>

		<div class="game-list">
			<div class="game">
				<h3>Werwolf</h3>

				<a href="#" @click.prevent="startGame('werewolves')">
					Play
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import Connection from 'connection'

export default {
	props: {
		auth: { required: true },
		id: { required: true },
	},

	data() {
		return {
			players: [],
		}
	},

	mounted() {
		this.addEventListeners()

		Connection.get('players').then((res) => {
			if (! res) return this.$emit('leave')

			this.players = res.players
		})
		.catch((err) => {
			console.error(err)
		})
	},

	methods: {
		startGame(name) {
			Connection.emit('start game', { name })
		},

		addEventListeners() {
			Connection.on('players', this.onPlayers)
			.on('user joined', this.onUserJoined)
		},

		onPlayers({ players }) {
			this.players = players
		},

		onUserJoined({ name }) {
			console.log(name, 'joined the lobby')
		},
	},

	computed: {
		inviteUrl() {
			return window.location.toString()
		},
	},
}
</script>
