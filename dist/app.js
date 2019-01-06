"use strict";

var _express = _interopRequireDefault(require("express"));

var _http = _interopRequireDefault(require("http"));

var _socket = _interopRequireDefault(require("socket.io"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _pg = _interopRequireDefault(require("./pg"));

var _helpers = require("./helpers/helpers");

var _staticFiles = _interopRequireDefault(require("./routing/static-files"));

var _Add = _interopRequireDefault(require("./PrimaryEvents/Add"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const server = new _http.default.Server(app);
const io = (0, _socket.default)(server);
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
(0, _staticFiles.default)(app, __dirname);
io.on('connection', socket => {
  (0, _helpers.info)('', socket.id, 'connected');
  (0, _Add.default)(socket);
  socket.on('disconnect', () => {
    (0, _helpers.info)('', socket.id, 'disconnected');

    const player = _pg.default.getPlayerBySocket(socket);

    if (!player || !player.lobby || !player.lobby.isEmpty()) return;

    _pg.default.deleteLobby(player.lobby);
  });
});
server.listen(3000, () => {
  (0, _helpers.info)('', 'listening on *:3000');
});
//# sourceMappingURL=app.js.map