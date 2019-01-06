"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _pg = _interopRequireDefault(require("../pg"));

var _List = _interopRequireDefault(require("../Games/List"));

var _helpers = require("../helpers/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default({
  name,
  auth
}) {
  (0, _helpers.info)('GO', this.id, 'starting game', name);

  const player = _pg.default.authorize(auth);

  if (!player || !player.lobby || player.lobby.leader !== player || !_List.default.hasOwnProperty(name)) return;
  player.lobby.startGame(name);
}
//# sourceMappingURL=OnStartGame.js.map