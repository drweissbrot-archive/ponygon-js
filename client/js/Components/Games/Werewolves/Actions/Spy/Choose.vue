<template>
	<div class="spy --choose">
		<h3>
			Who do yo want to investigate?
		</h3>

		<div class="players">
			<a v-for="player in alivePlayers"
				href="#"
				:class="[ 'player', { '--active': chosen === player } ]"
				@click.prevent="choose(player)"
			>
				{{ player.name }}
			</a>
		</div>

		<div class="summary">
			<p>
				{{ summary }}
			</p>

			<button v-if="chosen" @click.prevent="submit">
				Confirm
			</button>
		</div>
	</div>
</template>

<script lang="ts">
import Connection from '~Connection'
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class GamesWerewolvesActionsSpyChoose extends Vue {
	@Prop({ required: true })
	public alivePlayers!: any

	public chosen: any = null

	public choose(player: any) : void {
		this.chosen = player
	}

	public submit() : void {
		Connection.emit('spy choice', {
			player: this.chosen.id,
		})
	}

	public get summary() : string {
		return (this.chosen)
			? `You want to investigate ${this.chosen.name}.`
			: 'Please choose who you want to investigate.'
	}
}
</script>
