<template>
	<div class="werewolf --chose">
		<h3>
			Who will be your victim?
		</h3>

		<div class="grid">
			<div class="wolf" v-for="choice in choices">
				<div class="name">
					{{ choice.wolf.name }}
				</div>

				<div class="victim">
					<template v-if="choice.choice === null">
						has not yet chosen a victim
					</template>

					<template v-else>
						{{ choice.choice.name }}
					</template>
				</div>
			</div>
		</div>

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
		</div>
	</div>
</template>

<script lang="ts">
import Connection from '~Connection'
import ListensForConnectionEvents from '~Mixins/ListensForConnectionEvents'
import Component, { mixins } from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class GamesWerewolvesActionsWerewolfChoose extends mixins(ListensForConnectionEvents) {
	@Prop({ required: true })
	public actionData!: any

	@Prop({ required: true })
	public alivePlayers!: any

	public chosen: any = null

	public choices: any[] = []

	public events: any = {
		'werewolf choices': this.onWerewolfChoices,
	}

	public mounted() : void {
		this.choices = this.getInitialAllChoices()
	}

	protected getInitialAllChoices() : any[] {
		return this.actionData.werewolves.map((wolf: any) => {
			return { wolf, choice: null }
		})
	}

	public choose(player: { id: string }) : void {
		if (this.chosen === player) return

		Connection.emit('werewolf choice', {
			player: player.id,
		})
	}

	public onWerewolfChoices({ choices }: { choices: any }) : void {
		this.choices = choices
	}

	public get summary() : string {
		return (this.chosen === null)
			? 'Please choose the victim.'
			: `You want to kill ${this.chosen.name}.`
	}
}
</script>
