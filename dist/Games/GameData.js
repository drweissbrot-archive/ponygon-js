"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class GameData {
  constructor(initial = []) {
    this.data = new Map(initial);
  }

  applyObject(data) {
    for (const key in data) {
      this.set(key, data[key]);
    }

    return this;
  }

  get forPublic() {
    let data = {};

    for (const key of this.data.keys()) {
      if (!this.publicProperties || this.publicProperties.includes(key)) {
        data[key] = this.data.get(key);
      }
    }

    return data;
  }

  get forFinalScoreboard() {
    return this.forPublic;
  }

  set(key, value) {
    this.data.set(key, value);
    return this;
  }

  get(key) {
    return this.data.get(key);
  }

}

exports.default = GameData;
//# sourceMappingURL=GameData.js.map