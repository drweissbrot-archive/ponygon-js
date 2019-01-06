<template>
	<div class="spy --choose">
		<h3>
			Who do yo want to investigate?
		</h3>

		<div class="players">
			<a v-for="player in alivePlayers"
				href="#"
				:class="[ 'player', { '--active': chosen === player } ]"
				@click.prevent="choose(player)"
			>
				{{ player.name }}
			</a>
		</div>

		<div class="summary">
			<p>
				{{ summary }}
			</p>

			<button v-if="chosen" @click.prevent="submit">
				Confirm
			</button>
		</div>
	</div>
</template>

<script>
import Connection from 'connection'

export default {
	props: {
		alivePlayers: { required: true },
	},

	data() {
		return {
			chosen: null,
		}
	},

	methods: {
		choose(player) {
			this.chosen = player
		},

		submit() {
			Connection.emit('spy choice', {
				player: this.chosen.id,
			})
		},
	},

	computed: {
		summary() {
			return (this.chosen)
				? `You want to investigate ${this.chosen.name}.`
				: 'Please choose who you want to investigate.'
		},
	},
}
</script>
