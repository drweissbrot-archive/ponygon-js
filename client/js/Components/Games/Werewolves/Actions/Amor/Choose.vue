<template>
	<div class="amor --choose">
		<h3>
			Who should be in love?
		</h3>

		<div class="players" v-if="! submitted">
			<a v-for="player in alivePlayers"
				href="#"
				:class="[ 'player', { '--active': chosen.includes(player) } ]"
				@click.prevent="choosePlayer(player)"
			>
				{{ player.name }}
			</a>
		</div>

		<div class="summary">
			<p>
				{{ summary }}
			</p>

			<button v-if="chosen.length === 2 && ! submitted" @click.prevent="submit">
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
export default class GamesWerewolvesActionsAmorChoose extends Vue {
	@Prop({ required: true })
	public alivePlayers!: any

	public chosen: any[] = []

	public submitted: boolean = false

	public choosePlayer(player: any) : void {
		if (this.chosen.includes(player)) return

		if (this.chosen.length === 2) this.chosen = []

		this.chosen.push(player)
	}

	public submit() : void {
		Connection.emit('amor choice', {
			players: this.chosen.map((player) => player.id)
		})

		this.submitted = true
		this.$emit('log', this.summary)
	}

	public get summary() : string {
		if (this.chosen.length > 2) this.chosen = []

		if (this.chosen.length === 0) return 'Please choose two players.'

		if (this.chosen.length === 1) return `${this.chosen[0].name} will be in love.`

		return `${this.chosen[0].name} and ${this.chosen[1].name} will be in love.`
	}
}
</script>
