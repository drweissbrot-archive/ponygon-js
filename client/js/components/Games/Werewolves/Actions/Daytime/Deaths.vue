<template>
	<div class="daytime --deaths">
		<h2>The village awakens...</h2>

		<template v-if="data.deaths.length">
			<p>
				... and finds
			</p>

			<p v-for="player in data.deaths">
				<strong>
					{{ player.name }}
				</strong>
			</p>

			<p>
				dead.
			</p>
		</template>

		<p v-else>
			... and finds everyone is still alive.
		</p>
	</div>
</template>

<script>
export default {
	props: {
		data: { required: true },
	},

	mounted() {
		this.$emit('log', this.data.deaths.map((player) => player.name).join(', ') + ' died.')
	}
}
</script>
