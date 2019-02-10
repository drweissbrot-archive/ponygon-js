import Connection from '~Connection'

import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class MixinsListensForconnectionEvents extends Vue {
	protected events!: any

	protected mounted() : void {
		if (! this.events) return

		for (const event in this.events) {
			Connection.on(event, this.events[event])
		}
	}

	protected destroyed() : void {
		if (! this.events) return

		for (const event in this.events) {
			Connection.off(event, this.events[event])
		}
	}
}
