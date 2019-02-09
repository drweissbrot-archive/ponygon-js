<template>
	<div class="werewolf --result">
		<h3>
			{{ body }}
		</h3>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class GamesWerewolvesActionsWerewolfResult extends Vue {
	@Prop({ required: true })
	public actionData!: any

	public mounted() : void {
		this.$emit('log', this.body)
	}

	public get body() : string {
		return `The Werewolves will attack ${this.actionData.victim.name} tonight.`
	}
}
</script>
