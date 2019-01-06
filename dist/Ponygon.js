"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _socket = _interopRequireDefault(require("socket.io/lib/socket"));

var _randomWords = _interopRequireDefault(require("random-words"));

var _Lobby = _interopRequireDefault(require("./Lobby"));

var _Player = _interopRequireDefault(require("./Player"));

var _helpers = require("./helpers/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Ponygon {
  constructor() {
    this.lobbies = new Map();
    this.players = new Map();
    this.playersBySocket = new Map();
  }

  authorize(authString) {
    const parsedAuthString = _Player.default.parseAuthString(authString);

    if (parsedAuthString === null) return false;
    const {
      id,
      secret
    } = parsedAuthString;
    const player = this.players.get(id);
    return player && player.secret === secret ? player : false;
  }

  createPlayer(name, socket) {
    const id = (0, _helpers.byteIdFor)(this.players);
    const player = new _Player.default(id, name || (0, _randomWords.default)({
      exactly: 2,
      join: ' '
    }), socket);
    this.players.set(id, player);
    this.playersBySocket.set(socket.id, player);
    return player;
  }

  createLobby(leader) {
    const id = (0, _helpers.wordIdFor)(this.lobbies); // TODO
    // const id = 'nest-quiet-method' // TODO this is useful for debugging

    const lobby = new _Lobby.default(id, leader);
    this.lobbies.set(id, lobby);
    return lobby;
  }

  getPlayerBySocket(socket) {
    let socketId = socket instanceof _socket.default ? socket.id : socket;
    return this.playersBySocket.get(socketId);
  }

  attachPlayerToLobby(player, lobby) {
    if (player.lobby) {
      (0, _helpers.info)('P>L', player.id, 'tried to join lobby', `${lobby.id}, but was already member of a lobby`);
    } else {
      (0, _helpers.info)('P>L', player.id, 'joins lobby', lobby.id);
      lobby.addPlayer(player);
    }

    return this;
  }

  getLobby(lobby) {
    return this.lobbies.get(lobby);
  }

  deleteLobby(lobbyId) {
    const lobby = lobbyId instanceof _Lobby.default ? lobbyId : this.lobbies.get(lobbyId);
    if (lobby) this.lobbies.delete(lobby.id);
    return this;
  }

}

exports.default = Ponygon;
//# sourceMappingURL=Ponygon.js.map