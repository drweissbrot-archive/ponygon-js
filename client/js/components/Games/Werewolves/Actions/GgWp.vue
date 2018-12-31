<template>
	<div class="gg-wp">
		<h3>
			{{ heading }}
		</h3>

		<h4>
			Congratulations to
		</h4>

		<!-- TODO heart between players when lovers win -->
		<div class="player-list">
			<div class="player" v-for="player in this.data.winners">
				{{ player.name }}

				<span v-if="player.mayor" title="mayor">m</span>
				<span v-if="player.dead" title="dead">✝</span>

				<span class="role">
					{{ player.role }}
				</span>
			</div>
		</div>

		<div class="player-list --losers">
			<div class="player" v-for="player in this.data.losers">
				{{ player.name }}

				<span v-if="player.mayor" title="mayor">m</span>
				<span v-if="player.dead" title="dead">✝</span>

				<span class="role">
					{{ player.role }}
				</span>
			</div>
		</div>

		<p>
			gg wp
		</p>
	</div>
</template>

<script>
export default {
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
