import BaseGameData from '../GameData'
import initialGameData from './InitialGameData'

export default class GameData extends BaseGameData {
	constructor() {
		super()

		this.applyObject(initialGameData)

		this.publicProperties = [
			'dead',
			'mayor',
		]
	}

	public get forFinalScoreboard() : object {
		const forPublic = this.forPublic

		let data = {
			role: this.get('role'),
		}

		for (const property in forPublic) {
			data[property] = forPublic[property]
		}

		return data
	}
}
