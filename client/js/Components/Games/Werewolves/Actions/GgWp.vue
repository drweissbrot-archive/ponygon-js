<template>
	<div class="gg-wp">
		<h3>
			{{ heading }}
		</h3>

		<h4>
			Congratulations to
		</h4>

		<!-- TODO heart between players when lovers win -->
		<div class="players --winners">
			<gg-wp-player v-for="(player, index) in actionData.winners" :key="index" :player="player" />
		</div>

		<div class="players --losers">
			<gg-wp-player v-for="(player, index) in actionData.losers" :key="index" :player="player" />
		</div>

		<p>
			gg wp
		</p>
	</div>
</template>

<script lang="ts">
import GgWpPlayer from './GgWpPlayer'
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component({
	components: { GgWpPlayer },
})
export default class GamesWerewolvesActionsGgWp extends Vue {
	@Prop({ required: true })
	public actionData!: any

	public mounted() : void {
		this.$emit('log', this.heading)
	}

	public get heading() : string {
		return `The ${this.actionData.winner} win!`
	}
}
</script>
