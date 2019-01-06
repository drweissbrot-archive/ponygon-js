<template>
	<div class="werewolf --chose">
		<h3>
			Who will be your victim?
		</h3>

		<div class="grid">
			<div class="wolf" v-for="choice in choices">
				<div class="name">
					{{ choice.wolf.name }}
				</div>

				<div class="victim">
					<template v-if="choice.choice === null">
						has not yet chosen a victim
					</template>

					<template v-else>
						{{ choice.choice.name }}
					</template>
				</div>
			</div>
		</div>

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
		</div>
	</div>
</template>

<script>
import Connection from 'connection'
import ListensForConnectionEvents from 'mixins/ListensForConnectionEvents'

export default {
	mixins: [ ListensForConnectionEvents ],

	props: {
		data: { required: true },
		alivePlayers: { required: true },
	},

	data() {
		return {
			chosen: null,
			choices: this.getInitialAllChoices(),

			events: {
				'werewolf choices': this.onWerewolfChoices,
			},
		}
	},

	methods: {
		getInitialAllChoices() {
			return this.data.werewolves.map((wolf) => {
				return { wolf, choice: null }
			})
		},

		choose(player) {
			if (this.chosen === player) return

			Connection.emit('werewolf choice', {
				player: player.id,
			})
		},

		onWerewolfChoices({ choices }) {
			this.choices = choices
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
