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

				<component :is="`pg-${view}`" :data="actionData" />
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
import PgWaitingForPlayers from './Actions/WaitingForPlayers'
import PgRoleInterstitial from './Actions/RoleInterstitial'

export default {
	components: {
		PgWaitingForPlayers,
		PgRoleInterstitial,
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

			phase: {
				night: true,
				round: 1,
				part: 1,
			},
		}
	},

	mounted() {
		this.addEventListeners()
	},

	methods: {
		log(log) {
			this.logs.unshift(log)

			return this
		},

		addEventListeners() {
			Connection.on('action', this.onAction)
			// .on('log', this.onLog)
		},

		onAction({ view, data }) {
			this.view = view
			this.actionData = data

			this.log(`You are a ${data.role}.`)
		},

		// onLog({ log }) {
		// 	this.log(log)
		// },
	},
}
</script>
