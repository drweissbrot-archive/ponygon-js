<template>
	<div class="player">
		<span class="name">{{ player.name }}</span>

		<span v-if="player.dead" title="dead">✝</span>
		<span v-if="player.mayor" title="mayor">m</span>

		<div class="role">{{ player.role }}</div>
	</div>
</template>

<script>
export default {
	props: {
		player: { required: true },
	},
}
</script>
