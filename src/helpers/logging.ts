const info = (prefix, ...args) => {
	console.info(' ', new Date().toLocaleString(), prefix.padEnd(5), ...args)
}

export {
	info,
}
