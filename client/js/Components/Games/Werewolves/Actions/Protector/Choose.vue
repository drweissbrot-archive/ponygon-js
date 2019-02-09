<template>
	<div class="protector --choose">
		<h3>
			Who do yo want to protect?
		</h3>

		<p>
			Please note that you cannot protect the same person two nights in a row.
		</p>

		<div class="players" v-if="! submitted">
			<a v-for="player in alivePlayers"
				v-if="! actionData.protectedLastNight || player.id !== actionData.protectedLastNight.id"
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

			<button v-if="chosen && ! submitted" @click.prevent="submit">
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
export default class GamesWerewolvesActionsProtectorChoose extends Vue {
	@Prop({ required: true })
	public alivePlayers!: any

	@Prop({ required: true })
	public actionData!: any

	public chosen: any = null

	public submitted: any = false

	public choose(player: any) : void {
		this.chosen = player
	}

	public submit() : void {
		Connection.emit('protector choice', {
			player: this.chosen.id,
		})

		this.submitted = true
		this.$emit('log', this.summary)
	}

	public get summary() : string{
		return (this.chosen)
			? `You will protect ${this.chosen.name} this night.`
			: 'Please choose who you want to protect.'
	}
}
</script>
