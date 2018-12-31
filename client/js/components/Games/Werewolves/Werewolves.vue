<template>
	<div class="werewolves">
		<!-- TODO -->
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700">

		<div class="player-list">
			<!-- TODO microphone icon or something -->
			<div class="speaking-allowed --true" v-show="speakingAllowed">
				You may talk now.
			</div>

			<div class="speaking-allowed --false" v-show="! speakingAllowed">
				Please do not talk now.
			</div>

			<h2>The Village</h2>

			player list
		</div>

		<div class="main">
			<div class="action">
				<h2>
					{{ phase.night ? 'Night' : 'Day' }}
					{{ phase.round }} –
					Phase {{ phase.part }}
				</h2>

				<component :is="`pg-${view}`"
					:data="actionData"
					:players="players"
					@log="log"
				/>
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

			phase: {
				night: true,
				round: 1,
				part: 1,
			},
		}
	},

	mounted() {
		this.addEventListeners()

		Connection.get('players').then((res) => {
			this.players = res.players
		})
		.catch((err) => console.error(err))
	},

	methods: {
		log(log) {
			this.logs.unshift(log)

			return this
		},

		addEventListeners() {
			Connection.on('action', this.onAction)
			.on('log', this.log)
			.on('phase', this.onPhase)
		},

		onAction({ view, data }) {
			this.actionData = data
			this.view = view.replace(/ /gu, '-')
		},

		onPhase({ phase }) {
			this.phase = phase
		},
	},
}
</script>
