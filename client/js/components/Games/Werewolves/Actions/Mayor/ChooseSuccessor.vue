<template>
	<div class="mayor --choose-successor">
		<h2>Choose Your Successor</h2>

		<div class="players">
			<a v-for="player in alivePlayers"
				href="#"
				class="player"
				@click.prevent="choose(player)"
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
		alivePlayers: { required: true },
	},

	methods: {
		choose(player) {
			Connection.emit('mayor choice', { player: player.id })
		},
	},
}
</script>
