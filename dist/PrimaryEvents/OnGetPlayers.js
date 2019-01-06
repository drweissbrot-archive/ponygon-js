"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _pg = _interopRequireDefault(require("../pg"));

var _helpers = require("../helpers/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default({
  auth
}, resolve) {
  (0, _helpers.info)('?P', this.id, 'getting players');

  const player = _pg.default.authorize(auth);

  if (!player) return resolve();
  resolve({
    players: player.lobby.allPlayers
  });
}
//# sourceMappingURL=OnGetPlayers.js.map