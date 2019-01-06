<template>
	<div class="daytime --deaths">
		<h2>The village awakens...</h2>

		<template v-if="data.deaths.length">
			<p>
				... and finds <strong>{{ names }}</strong> dead.
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

	// mounted() {
	// 	this.$emit('log', this.data.deaths.map((player) => player.name).join(', ') + ' died.')
	// },

	computed: {
		names() {
			return this.data.deaths.map((player) => player.name).join(', ')
		},
	},
}
</script>
