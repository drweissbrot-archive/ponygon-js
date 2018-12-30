<template>
	<div class="werewolf --result">
		<h3>
			The Werewolves will attack {{ data.victim.name }} tonight.
		</h3>
	</div>
</template>

<script>
export default {
	props: {
		data: { required: true },
		players: { required: true },
	},

	data() {
		return {
			chosen: null,
			submitted: false,

			allChoices: this.getInitialAllChoices(),
		}
	},

	methods: {
		getInitialAllChoices() {
			let allChoices = {}

			for (const wolf in this.data.werewolves) {
				allChoices[wolf.name] = null
			}

			return allChoices
		},

		choosePlayer(player) {
			if (this.chosen === player) return

			Connection.emit('werewolf choice', {
				player: player.id,
			})
		},
	},

	computed: {
		summary() {
			return (this.chosen === null)
				? 'Please choose the victim.'
				: `You want to kill ${this.chosen.name}.`
		},
	},
}
</script>
