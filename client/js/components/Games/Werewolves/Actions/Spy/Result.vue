<template>
	<div class="spy --result">
		<h3>
			{{ result }}
		</h3>
	</div>
</template>

<script>
export default {
	props: {
		data: { required: true },
	},

	mounted() {
		this.$emit('log', this.result)
	},

	computed: {
		result() {
			if (this.data.friendly) return `${this.data.player.name} seems to be an ordinary villager.`

			return `Something seems off about ${this.data.player.name}.`
		}
	},
}
</script>
