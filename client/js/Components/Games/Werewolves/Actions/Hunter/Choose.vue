<template>
	<div class="hunter --choose">
		<h2>Who will you kill?</h2>

		<div class="players">
			<a v-for="player in alivePlayers"
				href="#"
				class="player"
				@click.prevent="choose(player)"
			>
				{{ player.name }}
			</a>
		</div>
	</div>
</template>

<script lang="ts">
import Connection from '~Connection'
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class GamesWerewolvesActionsHunterChoose extends Vue {
	@Prop({ required: true })
	public alivePlayers!: any

	public choose(player: { id: string }) : void {
		Connection.emit('hunter choice', { player: player.id })
	}
}
</script>
