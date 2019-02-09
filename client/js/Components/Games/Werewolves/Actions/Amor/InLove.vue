<template>
	<div class="amor --in-love">
		<h3>
			You are in love with {{ actionData.other.name }} ({{ actionData.other.role }}).
		</h3>

		<p>
			You are in love with <strong>{{ actionData.other.name }}</strong> (<strong>{{ actionData.other.role }}</strong>).
			When one of you dies, the other will also die.
			When you two are the only survivors, you win the game.
		</p>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class GamesWerewolvesActionsAmorInLove extends Vue {
	@Prop({ required: true })
	public actionData!: any

	public mounted() : void {
		this.$emit('log', `You are in love with ${this.actionData.other.name} (${this.actionData.other.role}).`)
	}
}
</script>
