"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _OnCreateLobby = _interopRequireDefault(require("./OnCreateLobby"));

var _OnJoinLobby = _interopRequireDefault(require("./OnJoinLobby"));

var _OnGetPlayers = _interopRequireDefault(require("./OnGetPlayers"));

var _OnStartGame = _interopRequireDefault(require("./OnStartGame"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = socket => {
  const events = {
    'create lobby': _OnCreateLobby.default,
    'join lobby': _OnJoinLobby.default,
    'get players': _OnGetPlayers.default,
    'start game': _OnStartGame.default
  };

  for (const event in events) {
    socket.on(event, (...args) => {
      events[event].call(socket, ...args);
    });
  }
};

exports.default = _default;
//# sourceMappingURL=Add.js.map