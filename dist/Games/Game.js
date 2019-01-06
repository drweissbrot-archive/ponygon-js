"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _GameData = _interopRequireDefault(require("./GameData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Game {
  constructor(lobby) {
    this.lobby = lobby;
    this.finished = false;
    this.emitStarting();

    for (const player of this.lobby.players) {
      player.gameData = this.initialGameData();
    }
  }

  emitStarting() {
    this.lobby.emit('game starting', {
      name: this.meta.name
    });
    return this;
  }

  end() {
    this.finished = true;

    for (const player of this.lobby.players) {
      player.gameData = new _GameData.default();
    }
  }

}

exports.default = Game;
//# sourceMappingURL=Game.js.map