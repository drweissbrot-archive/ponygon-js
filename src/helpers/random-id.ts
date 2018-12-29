import crypto from 'crypto'
import randomWords from 'random-words'

const idFor = (collection, type, length) => {
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

const byteIdFor = (collection, length = 8) => {
	return idFor(collection, 'bytes', length)
}

const wordIdFor = (collection, length = 3) => {
	return idFor(collection, 'words', length)
}

export {
	idFor,
	byteIdFor,
	wordIdFor,
}
