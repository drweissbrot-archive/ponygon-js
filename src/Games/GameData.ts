export default class GameData {
	protected data: Map<string, any>

	protected publicProperties?: string[]

	public constructor(initial: any[] = []) {
		this.data = new Map(initial)
	}

	protected applyObject(data: object) : this {
		for (const key in data) {
			this.set(key, data[key])
		}

		return this
	}

	public get forPublic() : object {
		let data = {}

		for (const key in this.data) {
			if (! this.publicProperties || this.publicProperties.includes(key)) {
				data[key] = this.data[key]
			}
		}

		return data
	}

	public get forFinalScoreboard() : object {
		return this.forPublic
	}

	public set(key: string, value: any) : this {
		this.data.set(key, value)

		return this
	}

	public get(key: string) : any {
		return this.data.get(key)
	}
}
