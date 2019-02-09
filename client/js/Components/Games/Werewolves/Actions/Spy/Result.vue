<template>
	<div class="spy --result">
		<h3>
			{{ result }}
		</h3>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class GamesWerewolvesActionsSpyResult extends Vue {
	@Prop({ required: true })
	public actionData!: any

	public mounted() : void {
		this.$emit('log', this.result)
	}

	public get result() : string {
		return (this.actionData.friendly)
		? `${this.actionData.player.name} seems to be an ordinary villager.`
		: `Something seems off about ${this.actionData.player.name}.`
	}
}
</script>
