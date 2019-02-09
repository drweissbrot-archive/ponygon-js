<template>
	<div class="protector --choose">
		<h3>
			What will you do tonight?
		</h3>

		<template v-if="! submitted">
			<div class="heal" v-if="actionData.werewolfVictim">
				<p>
					The Werewolves attacked <strong>{{ actionData.werewolfVictim.name }}</strong> tonight.
				</p>

				<template v-if="actionData.canHeal">
					<input type="checkbox" id="heal-werewolf-victim" v-model="healWerewolfVictim">
					<label for="heal-werewolf-victim">
						heal {{ actionData.werewolfVictim.name }}
					</label>

					<p>
						Please note that you can only heal a single person per match.
					</p>
				</template>

				<template v-else>
					<p>
						You cannot heal them.
					</p>
				</template>
			</div>

			<div class="heal" v-else>
				<p>
					The Werewolves did not attack anyone tonight.
				</p>
			</div>

			<div class="kill" v-if="actionData.canKill">
				<p>
					Who do you want to kill?
				</p>

				<div class="players">
					<a href="#" @click.prevent="chooseNoOne">
						no-one
					</a>

					<a v-for="player in alivePlayers"
						href="#"
						:class="[ 'player', { '--active': chosen === player } ]"
						@click.prevent="choose(player)"
					>
						{{ player.name }}
					</a>
				</div>
			</div>

			<div class="kill" v-else>
				<p>
					You cannot kill anyone.
				</p>
			</div>
		</template>

		<div class="summary">
			<div>
				<p>
					{{ healSummary }}
				</p>

				<p>
					{{ killSummary }}
				</p>
			</div>

			<button v-if="(actionData.canHeal || actionData.canKill) && ! submitted" @click.prevent="submit">
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
export default class GamesWerewolvesActionsWitchChoose extends Vue {
	@Prop({ required: true })
	public alivePlayers!: any

	@Prop({ required: true })
	public actionData!: any

	public healWerewolfVictim: any = false

	public chosen: any = null

	public submitted: boolean = false

	public mounted() : void {
		if (this.actionData.werewolfVictim) this.$emit('log', `The Werewolves attacked ${this.actionData.werewolfVictim.name} tonight.`)
		else this.$emit('log', 'The Werewolves attacked no-one tonight.')
	}

	public choose(player: any) : void {
		this.chosen = player
	}

	public chooseNoOne() : void {
		this.chosen = null
	}

	public submit() : void {
		Connection.emit('witch choice', {
			heal: this.healWerewolfVictim,
			kill: this.chosen ? this.chosen.id : null,
		})

		this.$emit('log', this.healSummary)
		this.$emit('log', this.killSummary)

		this.submitted = true
	}

	public get healSummary() : string {
		if (! this.actionData.canHeal) return 'You cannot heal the werewolf victim.'

		return (this.healWerewolfVictim)
			? 'You will heal the werewolf victim.'
			: 'You will not heal the werewolf victim.'
	}

	public get killSummary() : string {
		if (! this.actionData.canKill) return 'You cannot kill anyone.'

		return (this.chosen)
			? `You want to kill ${this.chosen.name}.`
			: 'You will not kill anyone.'
	}
}
</script>
