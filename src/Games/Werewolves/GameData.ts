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
}
