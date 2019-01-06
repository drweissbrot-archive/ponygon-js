import Connection from 'connection'

export default {
	mounted() {
		if (! this.events) return

		for (const event in this.events) {
			Connection.on(event, this.events[event])
		}
	},

	destroy() {
		if (! this.events) return

		for (const event in this.events) {
			Connection.off(event, this.events[event])
		}
	},
}
