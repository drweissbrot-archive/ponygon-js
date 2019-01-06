<template>
	<div class="gg-wp">
		<h3>
			{{ heading }}
		</h3>

		<h4>
			Congratulations to
		</h4>

		<!-- TODO heart between players when lovers win -->
		<div class="players --winners">
			<gg-wp-player v-for="(player, index) in this.data.winners" :key="index" :player="player" />
		</div>

		<div class="players --losers">
			<gg-wp-player v-for="(player, index) in this.data.losers" :key="index" :player="player" />
		</div>

		<p>
			gg wp
		</p>
	</div>
</template>

<script>
import GgWpPlayer from './GgWpPlayer'

export default {
	components: {
		GgWpPlayer,
	},

	props: {
		data: { required: true },
	},

	computed: {
		heading() {
			return `The ${this.data.winner} win!`
		},
	},
}
</script>
