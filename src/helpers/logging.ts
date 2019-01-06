const info = (prefix: string, ...args) => {
	console.info(' ', new Date().toLocaleString(), prefix.padEnd(5), ...args)
}

export {
	info,
}
