<template>
	<div class="daytime --mayor">
		<h2>The Mayoral Election</h2>

		<div class="players">
			<a v-for="player in alivePlayers"
				href="#"
				:class="[ 'player', { '--active': chosen === player } ]"
				@click.prevent="choosePlayer(player)"
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
export default class GamesWerewolvesActionsDaytimeMayor extends Vue {
	@Prop({ required: true })
	public alivePlayers!: any

	public chosen: any = null

	public choosePlayer(player: { id: string }) : void {
		Connection.emit('vote for mayor', { player: player.id })

		this.chosen = player
	}
}
</script>
