<template>
	<div class="player">
		<span class="name">{{ player.name }}</span>

		<span v-if="player.dead" title="dead">✝</span>
		<span v-if="player.mayor" title="mayor">m</span>

		<div class="role">{{ player.role }}</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class GamesWerewolvesActionsGgWpPlayer extends Vue {
	@Prop({ required: true })
	public player!: any
}
</script>
