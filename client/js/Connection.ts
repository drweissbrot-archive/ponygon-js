import * as io from 'socket.io-client'

class Connection {
	public auth: string | null

	protected socket: any

	public constructor() {
		this.socket = io()
		this.auth = window.localStorage.getItem('auth')
	}

	public on(event: string, handler: any) : this {
		this.socket.on(event, handler)

		this.socket.on(event, (...data: any[]) => {
			console.info('event', event, ...data)
		})

		return this
	}

	public off(event: string, handler: any) : this {
		this.socket.off(event, handler)

		return this
	}

	public emit(event: string, data?: any, callback?: any) : this {
		data = this.appendAuthToData(data)

		this.socket.emit(event, data, callback)

		return this
	}

	public get(route: string, data?: any) : Promise<void> {
		data = this.appendAuthToData(data)

		return new Promise((resolve, reject) => {
			this.socket.emit(`get ${route}`, data, resolve)
		})
	}

	public appendAuthToData(data?: any | null) : any {
		if (data === null || data === undefined) {
			data = { auth: this.auth }
		} else if (typeof data === 'object' && ! data.hasOwnProperty('auth')) {
			data['auth'] = this.auth
		}

		return data
	}
}

export default new Connection()
