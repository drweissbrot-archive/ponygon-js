<template>
	<div class="werewolf --result">
		<h3>
			{{ body }}
		</h3>
	</div>
</template>

<script>
export default {
	props: {
		data: { required: true },
	},

	mounted() {
		this.$emit('log', this.body)
	},

	computed: {
		body() {
			return `The Werewolves will attack ${this.data.victim.name} tonight.`
		},
	},
}
</script>
