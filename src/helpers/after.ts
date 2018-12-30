const after = (seconds: number, callback: any) => {
	return setTimeout(callback, seconds * 1000)
}

const every = (seconds: number, callback: any) => {
	return setInterval(callback, seconds * 1000)
}

export {
	after,
	every,
}
