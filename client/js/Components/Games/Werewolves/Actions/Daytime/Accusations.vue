<template>
	<div class="daytime --accusations">
		<h2>Accusations</h2>

		<div class="continue" v-if="mayor">
			<button :disabled="! accusations.length" @click.prevent="continueToVoting">
				Continue to Voting
			</button>
		</div>

		<p>
			You may accuse another villager of being a werewolf.
		</p>

		<div class="players">
			<a v-for="player in alivePlayers" href="#" @click.prevent="accusePlayer(player)">
				{{ player.name }}
			</a>
		</div>

		<p>
			Already accused as werewolves:
		</p>

		<div class="players">
			<div v-for="player in accusations" class="player">
				{{ player.name }}
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Connection from '~Connection'
import ListensForConnectionEvents from '~Mixins/ListensForConnectionEvents'

import Component, { mixins } from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class GamesWerewolvesActionsDaytimeAccusations extends mixins(ListensForConnectionEvents) {
	@Prop({ required: true })
	public alivePlayers!: any

	@Prop(Boolean)
	public mayor!: boolean

	public accusations: any[] = []

	public events: any = {
		'accusations': this.onAccusations,
	}

	public accusePlayer(player: { id: string }) : void {
		Connection.emit('accuse', { player: player.id })
	}

	public continueToVoting() : void {
		if (this.accusations.length) Connection.emit('mayor continue to voting')
	}

	public onAccusations({ accusations }: { accusations: any }) : void {
		this.accusations = accusations
	}
}
</script>
