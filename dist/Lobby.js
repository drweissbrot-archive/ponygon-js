"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _List = _interopRequireDefault(require("./Games/List"));

var _helpers = require("./helpers/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Lobby {
  constructor(id, leader) {
    this.id = id;
    this.leader = leader;
    this.players = [leader];
    leader.lobby = this;
    (0, _helpers.info)('L+', this.id);
  }

  get allPlayers() {
    return this.players.map(player => player.forPublic);
  }

  addPlayer(player) {
    if (this.players.some(compare => compare === player)) return this;
    this.players.push(player);
    player.lobby = this;
    this.emitPlayers();
    this.emit('user joined', {
      name: player.name
    });
    return this;
  }

  emit(event, data) {
    for (const player of this.players) {
      player.socket.emit(event, data);
    }

    return this;
  }

  emitPlayers() {
    this.emit('players', {
      players: this.allPlayers
    });
    return this;
  }

  isEmpty() {
    return this.players.length > 0;
  }

  startGame(name) {
    const className = _List.default[name].base;
    this.game = new className(this);
    return this;
  }

}

exports.default = Lobby;
//# sourceMappingURL=Lobby.js.map