<template>
	<div class="werewolves">
		<!-- TODO -->
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700">

		<div class="player-list">
			<div class="meta">
				<!-- TODO microphone icon or something -->
				<div class="speaking-allowed --true" v-show="! dead && speakingAllowed">
					You may talk now.
				</div>

				<div class="speaking-allowed --false" v-show="dead || ! speakingAllowed">
					Please do not talk now.
				</div>

				<div class="you-are" v-if="role">
					You are a {{ role }}.
				</div>

				<div class="mayor" v-if="mayor">
					You are the mayor.
				</div>
			</div>

			<div class="players">
				<div :class="[ 'player', { '--dead': player.dead } ]" v-for="player in players">
					<div class="basic">
						<div class="name">
							{{ player.name }}
						</div>

						<div class="role" v-if="player.role">
							{{ player.role }}
						</div>
					</div>

					<div class="additional">
						<span v-if="player.dead" class="dead" title="dead">✝</span>
						<span v-if="player.mayor" class="mayor" title="Mayor">m</span>
						<span v-if="player.leader" class="leader" title="Lobby Leader">👑</span>
					</div>
				</div>
			</div>
		</div>

		<div class="main">
			<div class="action">
				<h2 v-if="phase">
					{{ phase.night ? 'Night' : 'Day' }}
					{{ phase.round }} –
					Phase {{ phase.part }}
				</h2>

				<component v-if="view && ! dead || viewsShownForDead.includes(view)"
					:is="`pg-${view}`"
					:data="actionData"
					:players="players"
					:alivePlayers="alivePlayers"
					:mayor="mayor"
					@log="log"
				/>

				<p v-if="dead && view !== 'gg-wp'">
					You have already died.
					Please remain quiet, and let the remaining players complete the match.
				</p>
			</div>

			<div class="log">
				<p v-for="log in logs">
					{{ log }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import Connection from 'connection'

import PgGgWp from './Actions/GgWp'
import PgRoleInterstitial from './Actions/RoleInterstitial'
import PgWaitingForPlayers from './Actions/WaitingForPlayers'

import PgAmorChoose from './Actions/Amor/Choose'
import PgAmorInLove from './Actions/Amor/InLove'
import PgWerewolfChoose from './Actions/Werewolf/Choose'
import PgWerewolfResult from './Actions/Werewolf/Result'
import PgDaytimeDeaths from './Actions/Daytime/Deaths'
import PgDaytimeMayor from './Actions/Daytime/Mayor'
import PgDaytimeAccusations from './Actions/Daytime/Accusations'
import PgDaytimeVoting from './Actions/Daytime/Voting'
import PgMayorChooseSuccessor from './Actions/Mayor/ChooseSuccessor'
import PgSpyChoose from './Actions/Spy/Choose'
import PgSpyResult from './Actions/Spy/Result'
import PgProtectorChoose from './Actions/Protector/Choose'
import PgWitchChoose from './Actions/Witch/Choose'
import PgHunterChoose from './Actions/Hunter/Choose'

export default {
	components: {
		PgGgWp,
		PgRoleInterstitial,
		PgWaitingForPlayers,

		PgAmorChoose,
		PgAmorInLove,

		PgWerewolfChoose,
		PgWerewolfResult,

		PgDaytimeDeaths,
		PgDaytimeMayor,
		PgDaytimeAccusations,
		PgDaytimeVoting,

		PgMayorChooseSuccessor,

		PgSpyChoose,
		PgSpyResult,

		PgProtectorChoose,

		PgWitchChoose,

		PgHunterChoose,
	},

	props: {
		lobbyId: { required: true },
	},

	data() {
		return {
			logs: [ `Playing Werewolves on Ponygon in Lobby ${this.lobbyId}.` ],

			speakingAllowed: false,
			view: 'waiting-for-players',
			actionData: null,

			players: [],
			alivePlayers: [],

			role: null,
			dead: false,
			mayor: false,

			phase: null,

			viewsShownForDead: [
				'mayor-choose-successor',
				'gg-wp',
				'hunter-choose',
			],
		}
	},

	mounted() {
		this.addEventListeners()

		Connection.get('players')
		.then(this.onPlayers)
		.catch((err) => console.error(err))
	},

	methods: {
		log(log) {
			this.logs.unshift(log)

			return this
		},

		addEventListeners() {
			Connection.on('action', this.onAction)
			.on('clear action', this.onClearAction)
			.on('players', this.onPlayers)
			.on('log', this.log)
			.on('phase', this.onPhase)
			.on('role', this.onRole)
			.on('speaking allowed', this.onSpeakingAllowed)
			.on('dead', () => this.dead = true)
			.on('mayor', () => this.mayor = true)
		},

		onPlayers({ players }) {
			this.players = players
		},

		onAction({ view, data }) {
			this.actionData = data
			this.view = view.replace(/ /gu, '-')
		},

		onClearAction() {
			this.actionData = null
			this.view = null
		},

		onPhase({ phase }) {
			this.phase = phase
		},

		onRole({ role }) {
			this.role = role
		},

		onSpeakingAllowed(allowed) {
			this.speakingAllowed = allowed
		},
	},

	watch: {
		players(newPlayers, oldPlayers) {
			this.alivePlayers = newPlayers.filter((player) => ! player.dead)
		},

		role(newRole, oldRole) {
			if (newRole !== oldRole) this.log(`You are a ${newRole}.`)
		},
	},
}
</script>
