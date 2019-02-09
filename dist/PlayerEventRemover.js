"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class PlayerEventRemover {
  constructor(player, event, handler) {
    this.player = player;
    this.event = event;
    this.handler = handler;
  }

  removeOnceResolved() {
    this.player.once(this.event, () => {
      this.player.off(this.event, this.handler);
    });
    return this;
  } // TODO
  // public forceResolve(afterSeconds: number, handler?: () => any) : this {
  // 	setTimeout(afterSeconds / 1000, () => {
  // 		// TODO
  // 		// if (! eventResolved) {
  // 		// 	handler()
  // 		// }
  // 	})
  //
  // 	return this
  // }


}

exports.default = PlayerEventRemover;
//# sourceMappingURL=PlayerEventRemover.js.map