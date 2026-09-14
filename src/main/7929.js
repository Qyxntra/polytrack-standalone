var i;
var r = require("./1635.js");
var a = require("./4922.js");
class s {
  constructor(e = 28) {
    i.set(this, undefined);
    if (!Number.isSafeInteger(e) || !(e >= 0) || !(e < 180)) {
      throw new Error("Representation is not a safe integer or is out of range");
    }
    (0, r.GG)(this, i, e, "f");
  }
  clone() {
    return new s((0, r.gn)(this, i, "f"));
  }
  toDegrees() {
    return (0, r.gn)(this, i, "f") * 2;
  }
  static fromDegrees(e) {
    const t = Math.round(e / 2 % 180);
    return new s(t);
  }
  getSunPosition() {
    const e = (0, r.gn)(this, i, "f") * 2 * (Math.PI / 180);
    const t = Math.cos(e);
    const n = Math.sin(e);
    return new a.Pq0(t, 0.78, n).normalize();
  }
  get representation() {
    return (0, r.gn)(this, i, "f");
  }
}
i = new WeakMap();
export const A = s;