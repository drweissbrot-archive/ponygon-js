<template>
	<div class="amor --in-love">
		<h3>
			You are in love with {{ data.other.name }} ({{ data.other.role }}).
		</h3>

		<p>
			You are in love with <strong>{{ data.other.name }}</strong> (<strong>{{ data.other.role }}</strong>).
			When one of you dies, the other will also die.
			When you two are the only survivors, you win the game.
		</p>
	</div>
</template>

<script>
export default {
	props: {
		data: { required: true },
	},

	mounted() {
		this.$emit('log', `You are in love with ${this.data.other.name} (${this.data.other.role}).`)
	},
}
</script>
