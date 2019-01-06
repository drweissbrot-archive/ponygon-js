<template>
	<div class="protector --choose">
		<h3>
			What will you do tonight?
		</h3>

		<div class="heal" v-if="data.werewolfVictim">
			<p>
				The Werewolves attacked <strong>{{ data.werewolfVictim.name }}</strong> tonight.
			</p>

			<template v-if="data.canHeal">
				<input type="checkbox" id="heal-werewolf-victim" v-model="healWerewolfVictim">
				<label for="heal-werewolf-victim">
					heal {{ data.werewolfVictim.name }}
				</label>

				<p>
					Please note that you can only heal a single person per match.
				</p>
			</template>

			<template v-else>
				<p>
					You cannot heal them.
				</p>
			</template>
		</div>

		<div class="heal" v-else>
			<p>
				The Werewolves did not attack anyone tonight.
			</p>
		</div>

		<div class="kill" v-if="data.canKill">
			<p>
				Who do you want to kill?
			</p>

			<div class="players">
				<a href="#" @click.prevent="chooseNoOne">
					no-one
				</a>

				<a v-for="player in alivePlayers"
					href="#"
					:class="[ 'player', { '--active': chosen === player } ]"
					@click.prevent="choose(player)"
				>
					{{ player.name }}
				</a>
			</div>
		</div>

		<div class="kill" v-else>
			<p>
				You cannot kill anyone.
			</p>
		</div>

		<div class="summary">
			<div>
				<p>
					{{ healSummary }}
				</p>

				<p>
					{{ killSummary }}
				</p>
			</div>

			<button v-if="(data.canHeal || data.canKill) && ! submitted" @click.prevent="submit">
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
			healWerewolfVictim: false,
			chosen: null,
			submitted: false,
		}
	},

	mounted() {
		if (this.data.werewolfVictim) this.$emit('log', `The Werewolves attacked ${this.data.werewolfVictim.name} tonight.`)
		else this.$emit('log', 'The Werewolves attacked no-one tonight.')
	},

	methods: {
		choose(player) {
			this.chosen = player
		},

		chooseNoOne() {
			this.chosen = null
		},

		submit() {
			Connection.emit('witch choice', {
				heal: this.healWerewolfVictim,
				kill: this.chosen ? this.chosen.id : null,
			})

			this.$emit('log', this.healSummary)
			this.$emit('log', this.killSummary)

			this.submitted = true
		},
	},

	computed: {
		healSummary() {
			if (! this.data.canHeal) return 'You cannot heal the werewolf victim.'

			return (this.healWerewolfVictim)
				? 'You will heal the werewolf victim.'
				: 'You will not heal the werewolf victim.'
		},

		killSummary() {
			if (! this.data.canKill) return 'You cannot kill anyone.'

			return (this.chosen)
				? `You want to kill ${this.chosen.name}.`
				: 'You will not kill anyone.'
		},
	},
}
</script>
