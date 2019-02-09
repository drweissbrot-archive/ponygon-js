<template>
	<div class="daytime --voting">
		<h2>Voting</h2>

		<p>
			Who should die?
		</p>

		<div class="players">
			<a v-for="player in actionData.accused" href="#" @click.prevent="voteFor(player)">
				{{ player.name }}
			</a>
		</div>

		<div class="summary">
			<p>
				{{ summary }}
			</p>
		</div>
	</div>
</template>

<script lang="ts">
import Connection from '~Connection'
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class GamesWerewolvesActionsDaytimeVoting extends Vue {
	@Prop({ required: true })
	public actionData!: any

	public votedFor: any = null

	public voteFor(player: { id: string }) : void {
		Connection.emit('vote', { player: player.id })
		this.votedFor = player
	}

	public get summary() : string {
		return (this.votedFor)
			? `You want ${this.votedFor.name} to die.`
			: 'Please choose who you want to die.'
	}
}
</script>
