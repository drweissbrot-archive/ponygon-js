"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomInt = exports.randomNumber = exports.wordIdFor = exports.byteIdFor = exports.idFor = void 0;

var _crypto = _interopRequireDefault(require("crypto"));

var _randomWords = _interopRequireDefault(require("random-words"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const idFor = (collection, type, length) => {
  const id = type === 'words' ? (0, _randomWords.default)({
    exactly: length || 3,
    join: '-'
  }) : _crypto.default.randomBytes(length || 8).toString('hex');

  if (collection instanceof Map) {
    return collection.has(id) ? idFor(collection, type, length) : id;
  }

  return collection.hasOwnProperty(id) ? idFor(collection, type, length) : id;
};

exports.idFor = idFor;

const byteIdFor = (collection, length = 8) => {
  return idFor(collection, 'bytes', length);
};

exports.byteIdFor = byteIdFor;

const wordIdFor = (collection, length = 3) => {
  return idFor(collection, 'words', length);
};

exports.wordIdFor = wordIdFor;

const randomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

exports.randomNumber = randomNumber;

const randomInt = (min, max) => {
  return Math.round(randomNumber(min, max));
};

exports.randomInt = randomInt;
//# sourceMappingURL=random-id.js.map