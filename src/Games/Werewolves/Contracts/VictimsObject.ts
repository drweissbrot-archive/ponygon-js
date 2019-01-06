import Player from '../../../Player'

export default interface WerewolvesVictimsObject {
	village: Player | null

	werewolves: Player | null

	witches: Player[]

	elders: Player[]

	// hunter: Player | null
}
