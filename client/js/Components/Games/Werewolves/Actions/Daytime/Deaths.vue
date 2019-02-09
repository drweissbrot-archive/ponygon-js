<template>
	<div class="daytime --deaths">
		<h2>The village awakens...</h2>

		<template v-if="actionData.deaths.length">
			<p>
				... and finds <strong>{{ names }}</strong> dead.
			</p>
		</template>

		<p v-else>
			... and finds everyone is still alive.
		</p>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class GamesWerewolvesActionsDaytimeDeaths extends Vue {
	@Prop({ required: true })
	public actionData!: any

	// public mounted() : void {
	// 	this.$emit('log', this.actionData.deaths.map((player) => player.name).join(', ') + ' died.')
	// }

	public get names() : string {
		return this.actionData.deaths.map((player: { name: string }) => player.name).join(', ')
	}
}
</script>
