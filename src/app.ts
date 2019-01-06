import express from 'express'
import http from 'http'
import socketIo from 'socket.io'
import BodyParser from 'body-parser'
import pg from 'pg'
import { info } from 'helpers'

const app = express()
const server = new http.Server(app)
const io = socketIo(server)

app.use(BodyParser.urlencoded({ extended: true }))

import addStaticFileRoutes from './routing/static-files'
import addPrimaryEvents from './PrimaryEvents/Add'

addStaticFileRoutes(app, __dirname)

io.on('connection', (socket) => {
	info('', socket.id, 'connected')

	addPrimaryEvents(socket)

	socket.on('disconnect', () => {
		info('', socket.id, 'disconnected')

		const player = pg.getPlayerBySocket(socket)

		if (! player || ! player.lobby || ! player.lobby.isEmpty()) return

		pg.deleteLobby(player.lobby)
	})
})

server.listen(3000, () => {
	info('', 'listening on *:3000')
})
