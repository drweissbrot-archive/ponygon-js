import io from 'socket.io-client'

class Connection {
	constructor() {
		this.socket = io()
		this.auth = window.localStorage.getItem('auth')
	}

	on(event, handler) {
		this.socket.on(event, handler)

		this.socket.on(event, (...data) => {
			console.info('event', event, ...data)
		})

		return this
	}

	off(event, handler) {
		this.socket.off(event, handler)

		return this
	}

	emit(event, data, callback) {
		data = this.appendAuthToData(data)

		this.socket.emit(event, data, callback)

		return this
	}

	get(route, data) {
		data = this.appendAuthToData(data)

		return new Promise((resolve, reject) => {
			this.socket.emit(`get ${route}`, data, resolve)
		})
	}

	appendAuthToData(data) {
		if (typeof data === 'null' || typeof data === 'undefined') {
			data = { auth: this.auth }
		} else if (typeof data === 'object' && ! data.hasOwnProperty('auth')) {
			data['auth'] = this.auth
		}

		return data
	}
}

export default new Connection()
