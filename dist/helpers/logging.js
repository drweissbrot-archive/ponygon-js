"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.info = void 0;

const info = (prefix, ...args) => {
  console.info(' ', new Date().toLocaleString(), prefix.padEnd(5), ...args);
};

exports.info = info;
//# sourceMappingURL=logging.js.map