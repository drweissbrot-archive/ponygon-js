"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _crypto = _interopRequireDefault(require("crypto"));

var _PlayerEventRemover = _interopRequireDefault(require("./PlayerEventRemover"));

var _GameData = _interopRequireDefault(require("./Games/GameData"));

var _helpers = require("./helpers/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Player {
  constructor(id, name, socket) {
    this.id = id;
    this.name = name;
    this.secret = _crypto.default.randomBytes(16).toString('hex');
    this.socket = socket;
    this.gameData = new _GameData.default();
    (0, _helpers.info)('P+', this.id);
  }

  static parseAuthString(authString) {
    if (typeof authString !== 'string') return null;
    const segments = authString.split(';');
    return segments.length === 2 ? {
      id: segments[0],
      secret: segments[1]
    } : null;
  }

  get authString() {
    return `${this.id};${this.secret}`;
  }

  get forPublic() {
    let data = {
      id: this.id,
      name: this.name,
      leader: this.lobby.leader === this
    };
    return this.gameData ? Object.assign(data, this.gameData.forPublic) : data;
  }

  get forFinalScoreboard() {
    let data = this.forPublic;
    return this.gameData ? Object.assign(data, this.gameData.forFinalScoreboard) : data;
  }

  emit(event, data) {
    this.socket.emit(event, data);
    return this;
  }

  on(event, handler) {
    this.socket.on(event, handler);
    return new _PlayerEventRemover.default(this, handler);
  }

  once(event, handler) {
    this.socket.once(event, handler);
    return this;
  }

  off(event, handler) {
    this.socket.off(event, handler);
    return this;
  }

}

exports.default = Player;
//# sourceMappingURL=Player.js.map