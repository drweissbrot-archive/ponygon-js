<template>
	<div class="werewolf --chose">
		<h3>
			Who will be your victim?
		</h3>

		<div class="grid">
			<div class="wolf" v-for="(choice, wolf) in allChoices">
				<div class="name">
					{{ wolf }}
				</div>

				<div class="victim">
					<template v-if="choice === null">
						has not yet chosen a victim
					</template>

					<template v-else>
						{{ choice }}
					</template>
				</div>
			</div>
		</div>

		<div class="players">
			<a v-for="player in players"
				href="#"
				:class="[ 'player', { '--active': chosen === player } ]"
				@click.prevent="choosePlayer(player)"
			>
				{{ player.name }}
			</a>
		</div>

		<div class="summary">
			<p>
				{{ summary }}
			</p>
		</div>
	</div>
</template>

<script>
import Connection from 'connection'

export default {
	props: {
		data: { required: true },
		players: { required: true },
	},

	data() {
		return {
			chosen: null,

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
