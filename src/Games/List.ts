import Werewolves from './Werewolves/Werewolves'

export default {
	werewolves: {
		base: Werewolves,

		players: {
			min: 2, max: 100,
			rmin: 7, rmax: 16,
		},
	},
}
