"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.every = exports.after = void 0;

const after = (seconds, callback) => {
  return setTimeout(callback, seconds * 1000);
};

exports.after = after;

const every = (seconds, callback) => {
  return setInterval(callback, seconds * 1000);
};

exports.every = every;
//# sourceMappingURL=after.js.map