<template>
	<div class="lobby">
		<div class="title">
			<h1>
				Ponygon Lobby
				<code>{{ id }}</code>
			</h1>

			<div class="invite-link">
				Invite your friends using this link:
				<a :href="inviteUrl" @click.prevent>
					{{ inviteUrl }}
				</a>

				or

				<a href="#" @click.prevent="$emit('leave')">
					leave this lobby
				</a>
			</div>
		</div>

		<div class="player-list">
			<h2>
				{{ players.length }} Players in Your Lobby
			</h2>

			<div v-for="player in players" class="player">
				{{ player.name }}

				<template v-if="player.leader">👑</template>
			</div>
		</div>

		<div class="chat">
			<h2>Chat</h2>

			<p>TODO chat will be here at some point maybe</p>
		</div>

		<div class="game-list">
			<h2>Choose a Game</h2>

			<div class="game">
				<div class="meta">
					<h3>werewolves</h3>
				</div>

				<a v-if="isLobbyLeader" href="#" @click.prevent="startGame('werewolves')">
					Play
				</a>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Connection from '~Connection'
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop, Watch } from 'vue-property-decorator'

@Component
export default class LobbyJoinLobby extends Vue {
	@Prop({ required: true })
	public auth!: any

	@Prop({ required: true })
	public id!: any

	@Prop({ required: true })
	public playerId!: any

	public players: any[] = []

	public isLobbyLeader: boolean = false

	public mounted() : void {
		this.addEventListeners()

		Connection.get('players').then((res: any) => {
			if (! res) return this.$emit('leave')

			this.players = res.players
		})
		.catch((err: any) => {
			console.error(err)
		})
	}

	public startGame(name: string) : void {
		Connection.emit('start game', { name })
	}

	public addEventListeners() : void {
		Connection.on('players', this.onPlayers)
		.on('user joined', this.onUserJoined)
	}

	public onPlayers({ players }: { players: any[] }) : void {
		this.players = players
	}

	public onUserJoined({ name }: { name: string }) : void {
		console.log(name, 'joined the lobby')
	}

	public get inviteUrl() : string {
		return window.location.toString()
	}

	@Watch('players')
	public onPlayersChangedUpdateOwnPlayer() : void {
		const ownPlayer = this.players.find((player) => player.id === this.playerId)
		if (ownPlayer) this.isLobbyLeader = ownPlayer.leader
	}
}
</script>
