"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _pg = _interopRequireDefault(require("../pg"));

var _helpers = require("../helpers/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO what happens when this recieves an object without name property? does the whole app blow up? it shouldnt
function _default({
  name,
  lobbyId
}, resolve) {
  (0, _helpers.info)('L+', this.id, 'wants to join lobby', lobbyId);

  const player = _pg.default.createPlayer(name, this);

  const lobby = _pg.default.getLobby(lobbyId) || _pg.default.createLobby(player);

  if (lobby.game && !lobby.game.meta.allowJoiningWhileRunning) {
    return this.emit('cannot join lobby', {
      reason: 'already in a game'
    });
  }

  lobby.addPlayer(player);
  resolve({
    lobbyId: lobby.id,
    authString: player.authString
  });
}
//# sourceMappingURL=OnJoinLobby.js.map