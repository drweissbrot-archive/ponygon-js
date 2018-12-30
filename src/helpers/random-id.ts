import crypto from 'crypto'
import randomWords from 'random-words'

const idFor = (collection, type, length) : string => {
	const id = (type === 'words')
		? randomWords({ exactly: length || 3, join: '-', })
		: crypto.randomBytes(length || 8).toString('hex')

	if (collection instanceof Map) {
		return (collection.has(id))
			? idFor(collection, type, length)
			: id
	}

	return (collection.hasOwnProperty(id))
		? idFor(collection, type, length)
		: id
}

const byteIdFor = (collection, length = 8) : string => {
	return idFor(collection, 'bytes', length)
}

const wordIdFor = (collection, length = 3) : string => {
	return idFor(collection, 'words', length)
}

const randomNumber = (min, max) : number => {
	return Math.random() * (max - min) + min
}

const randomInt = (min, max) : number => {
	return Math.round(randomNumber(min, max))
}

export {
	idFor,
	byteIdFor,
	wordIdFor,

	randomNumber,
	randomInt,
}
