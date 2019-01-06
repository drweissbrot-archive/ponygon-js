<template>
	<div class="daytime --voting">
		<h2>Voting</h2>

		<p>
			Who should die?
		</p>

		<div class="players">
			<a v-for="player in data.accused" href="#" @click.prevent="voteFor(player)">
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
	},

	data() {
		return {
			votedFor: null,
		}
	},

	methods: {
		voteFor(player) {
			Connection.emit('vote', { player: player.id })
			this.votedFor = player
		},
	},

	computed: {
		summary() {
			return (this.votedFor)
				? `You want ${this.votedFor.name} to die.`
				: 'Please choose who you want to die.'
		},
	},
}
</script>
