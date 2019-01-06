<template>
	<div class="protector --choose">
		<h3>
			Who do yo want to protect?
		</h3>

		<p>
			Please note that you cannot protect the same person two nights in a row.
		</p>

		<div class="players">
			<a v-for="player in alivePlayers"
				v-if="! data.protectedLastNight || player.id !== data.protectedLastNight.id"
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
		data: { required: true },
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
			Connection.emit('protector choice', {
				player: this.chosen.id,
			})

			this.submitted = true
			this.$emit('log', this.summary)
		},
	},

	computed: {
		summary() {
			if (this.chosen) return `You will protect ${this.chosen.name} this night.`

			return 'Please choose who you want to protect.'
		},
	},
}
</script>
