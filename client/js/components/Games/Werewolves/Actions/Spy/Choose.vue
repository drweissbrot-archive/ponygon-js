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

			<button v-if="chosen && ! submitted" @click.prevent="submit">
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
			submitted: false,
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

			this.submitted = true
		},
	},

	computed: {
		summary() {
			if (this.chosen) return `You want to investigate ${this.chosen.name}.`

			return 'Please choose who you want to investigate.'
		},
	},
}
</script>
