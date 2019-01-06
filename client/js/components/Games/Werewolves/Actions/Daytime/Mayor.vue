<template>
	<div class="daytime --mayor">
		<h2>The Mayoral Election</h2>

		<div class="players">
			<a v-for="player in alivePlayers"
				href="#"
				:class="[ 'player', { '--active': chosen === player } ]"
				@click.prevent="choosePlayer(player)"
			>
				{{ player.name }}
			</a>
		</div>
	</div>
</template>

<script>
import Connection from 'connection'

export default {
	props: {
		data: { required: true },
		alivePlayers: { required: true },
	},

	data() {
		return {
			chosen: null,
		}
	},

	methods: {
		choosePlayer(player) {
			Connection.emit('vote for mayor', { player: player.id })

			this.chosen = player
		},
	},
}
</script>
