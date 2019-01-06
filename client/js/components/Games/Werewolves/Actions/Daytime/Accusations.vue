<template>
	<div class="daytime --accusations">
		<h2>Accusations</h2>

		<div class="continue" v-if="mayor">
			<button @click.prevent="continueToVoting">
				Continue to Voting
			</button>
		</div>

		<p>
			You may accuse another villager of being a werewolf.
		</p>

		<div class="players">
			<a v-for="player in alivePlayers" href="#" @click.prevent="accusePlayer(player)">
				{{ player.name }}
			</a>
		</div>

		<p>
			Already accused as werewolves:
		</p>

		<div class="players">
			<div v-for="player in accusations" class="player">
				{{ player.name }}
			</div>
		</div>
	</div>
</template>

<script>
import Connection from 'connection'

export default {
	props: {
		data: { required: true },
		alivePlayers: { required: true },
		mayor: Boolean,
	},

	data() {
		return {
			accusations: [],
		}
	},

	mounted() {
		Connection.on('accusations', this.onAccusations)
	},

	methods: {
		accusePlayer(player) {
			Connection.emit('accuse', { player: player.id })
		},

		continueToVoting() {
			Connection.emit('mayor continue to voting')
		},

		onAccusations({ accusations }) {
			this.accusations = accusations
		},
	},
}
</script>
