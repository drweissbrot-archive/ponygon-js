"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _GameData = _interopRequireDefault(require("../GameData"));

var _InitialGameData = _interopRequireDefault(require("./InitialGameData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class GameData extends _GameData.default {
  constructor() {
    super();
    this.applyObject(_InitialGameData.default);
    this.publicProperties = ['dead', 'mayor'];
  }

  get forFinalScoreboard() {
    const forPublic = this.forPublic;
    let data = {
      role: this.get('role')
    };

    for (const property in forPublic) {
      data[property] = forPublic[property];
    }

    return data;
  }

}

exports.default = GameData;
//# sourceMappingURL=GameData.js.map