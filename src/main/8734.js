var i;
var r = require("./1635.js");
var a = require("./5494.js");
class s {
  constructor(e) {
    i.set(this, undefined);
    const t = [];
    for (const [n, i, r] of e) {
      t.push([n, i, r]);
    }
    (0, r.GG)(this, i, t, "f");
  }
  rotated(e, t) {
    return new s((0, r.gn)(this, i, "f").map(([n, i, r]) => a.sR(n, i, r, e, t)));
  }
  forEach(e) {
    for (let t = 0; t < (0, r.gn)(this, i, "f").length; t++) {
      const [n, a, s] = (0, r.gn)(this, i, "f")[t];
      e(n, a, s, t);
    }
  }
  some(e) {
    for (let t = 0; t < (0, r.gn)(this, i, "f").length; t++) {
      const [n, a, s] = (0, r.gn)(this, i, "f")[t];
      if (e(n, a, s, t)) {
        return true;
      }
    }
    return false;
  }
  get length() {
    return (0, r.gn)(this, i, "f").length;
  }
}
i = new WeakMap();
export const A = s;