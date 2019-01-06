"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Werewolves = _interopRequireDefault(require("./Werewolves/Werewolves"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  werewolves: {
    base: _Werewolves.default,
    players: {
      min: 2,
      max: 100,
      rmin: 7,
      rmax: 16
    }
  }
};
exports.default = _default;
//# sourceMappingURL=List.js.map