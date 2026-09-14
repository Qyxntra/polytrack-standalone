var i;
var r = require("./1635.js");
class a {
  constructor(e) {
    i.set(this, 0);
    if (e != null) {
      if (!Number.isSafeInteger(e)) {
        throw new Error("Frames is not a safe integer");
      }
      (0, r.GG)(this, i, e, "f");
    }
  }
  get numberOfFrames() {
    return (0, r.gn)(this, i, "f");
  }
  get time() {
    return (0, r.gn)(this, i, "f") / 1000;
  }
  increment() {
    var e;
    (0, r.GG)(this, i, (e = (0, r.gn)(this, i, "f"), ++e), "f");
  }
  difference(e) {
    return new a((0, r.gn)(this, i, "f") - e.numberOfFrames);
  }
  lessThan(e) {
    return (0, r.gn)(this, i, "f") < e.numberOfFrames;
  }
  greaterThan(e) {
    return (0, r.gn)(this, i, "f") > e.numberOfFrames;
  }
  lessOrEqual(e) {
    return (0, r.gn)(this, i, "f") <= e.numberOfFrames;
  }
  greaterOrEqual(e) {
    return (0, r.gn)(this, i, "f") >= e.numberOfFrames;
  }
  equals(e) {
    return (0, r.gn)(this, i, "f") == e.numberOfFrames;
  }
  isNegative() {
    return (0, r.gn)(this, i, "f") < 0;
  }
  clone() {
    const e = new a();
    (0, r.GG)(e, i, (0, r.gn)(this, i, "f"), "f");
    return e;
  }
}
i = new WeakMap();
export const A = a;