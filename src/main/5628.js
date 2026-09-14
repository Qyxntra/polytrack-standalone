var i;
var r;
var a = require("./1635.js");
i = new WeakMap();
r = new WeakMap();
export const A = class {
  constructor() {
    i.set(this, false);
    r.set(this, []);
  }
  cancel() {
    if (!(0, a.gn)(this, i, "f")) {
      (0, a.GG)(this, i, true, "f");
      for (const e of (0, a.gn)(this, r, "f")) {
        e();
      }
    }
  }
  get isCancelled() {
    return (0, a.gn)(this, i, "f");
  }
  addCancelCallback(e) {
    (0, a.gn)(this, r, "f").push(e);
    if ((0, a.gn)(this, i, "f")) {
      e();
    }
  }
  throwIfCancelled() {
    if ((0, a.gn)(this, i, "f")) {
      throw new Error("Operation cancelled");
    }
  }
};