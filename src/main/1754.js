var i;
var r;
var a;
var s;
var o;
var l;
var c;
var h;
var d;
var u;
var f;
var p = require("./1635.js");
var g = require("./3075.js");
var m = require("./6551.js");
class _A {
  constructor(e) {
    i.add(this);
    a.set(this, []);
    s.set(this, []);
    o.set(this, []);
    l.set(this, []);
    c.set(this, []);
    h.set(this, null);
    if (e != null) {
      (0, p.GG)(this, a, e.up, "f");
      (0, p.GG)(this, s, e.right, "f");
      (0, p.GG)(this, o, e.down, "f");
      (0, p.GG)(this, l, e.left, "f");
      (0, p.GG)(this, c, e.reset, "f");
    }
  }
  recordFrame(e, t) {
    if (e > r.maxFrames) {
      throw new Error("Frame number exceeds maximum frame count.");
    }
    if ((0, p.gn)(this, h, "f") != null && e <= (0, p.gn)(this, h, "f")) {
      throw new Error("Frame number must be greater than the previous recorded frame.");
    }
    (0, p.GG)(this, h, e, "f");
    const n = (0, p.gn)(this, a, "f").length % 2 != 0;
    const i = (0, p.gn)(this, s, "f").length % 2 != 0;
    const d = (0, p.gn)(this, o, "f").length % 2 != 0;
    const u = (0, p.gn)(this, l, "f").length % 2 != 0;
    const f = (0, p.gn)(this, c, "f").length % 2 != 0;
    if (t.up != n) {
      (0, p.gn)(this, a, "f").push(e);
    }
    if (t.right != i) {
      (0, p.gn)(this, s, "f").push(e);
    }
    if (t.down != d) {
      (0, p.gn)(this, o, "f").push(e);
    }
    if (t.left != u) {
      (0, p.gn)(this, l, "f").push(e);
    }
    if (t.reset != f) {
      (0, p.gn)(this, c, "f").push(e);
    }
  }
  getFrame(e) {
    return {
      up: ((0, p.gn)(this, i, "m", d).call(this, e, (0, p.gn)(this, a, "f")) + 1) % 2 != 0,
      right: ((0, p.gn)(this, i, "m", d).call(this, e, (0, p.gn)(this, s, "f")) + 1) % 2 != 0,
      down: ((0, p.gn)(this, i, "m", d).call(this, e, (0, p.gn)(this, o, "f")) + 1) % 2 != 0,
      left: ((0, p.gn)(this, i, "m", d).call(this, e, (0, p.gn)(this, l, "f")) + 1) % 2 != 0,
      reset: ((0, p.gn)(this, i, "m", d).call(this, e, (0, p.gn)(this, c, "f")) + 1) % 2 != 0
    };
  }
  serialize() {
    const e = new Uint8Array(3 + (0, p.gn)(this, a, "f").length * 3 + 3 + (0, p.gn)(this, s, "f").length * 3 + 3 + (0, p.gn)(this, o, "f").length * 3 + 3 + (0, p.gn)(this, l, "f").length * 3 + 3 + (0, p.gn)(this, c, "f").length * 3);
    (0, p.gn)(this, i, "m", u).call(this, (0, p.gn)(this, a, "f"), e.subarray(0, 3 + (0, p.gn)(this, a, "f").length * 3));
    (0, p.gn)(this, i, "m", u).call(this, (0, p.gn)(this, s, "f"), e.subarray(3 + (0, p.gn)(this, a, "f").length * 3, 3 + (0, p.gn)(this, a, "f").length * 3 + 3 + (0, p.gn)(this, s, "f").length * 3));
    (0, p.gn)(this, i, "m", u).call(this, (0, p.gn)(this, o, "f"), e.subarray(3 + (0, p.gn)(this, a, "f").length * 3 + 3 + (0, p.gn)(this, s, "f").length * 3, 3 + (0, p.gn)(this, a, "f").length * 3 + 3 + (0, p.gn)(this, s, "f").length * 3 + 3 + (0, p.gn)(this, o, "f").length * 3));
    (0, p.gn)(this, i, "m", u).call(this, (0, p.gn)(this, l, "f"), e.subarray(3 + (0, p.gn)(this, a, "f").length * 3 + 3 + (0, p.gn)(this, s, "f").length * 3 + 3 + (0, p.gn)(this, o, "f").length * 3, 3 + (0, p.gn)(this, a, "f").length * 3 + 3 + (0, p.gn)(this, s, "f").length * 3 + 3 + (0, p.gn)(this, o, "f").length * 3 + 3 + (0, p.gn)(this, l, "f").length * 3));
    (0, p.gn)(this, i, "m", u).call(this, (0, p.gn)(this, c, "f"), e.subarray(3 + (0, p.gn)(this, a, "f").length * 3 + 3 + (0, p.gn)(this, s, "f").length * 3 + 3 + (0, p.gn)(this, o, "f").length * 3 + 3 + (0, p.gn)(this, l, "f").length * 3, 3 + (0, p.gn)(this, a, "f").length * 3 + 3 + (0, p.gn)(this, s, "f").length * 3 + 3 + (0, p.gn)(this, o, "f").length * 3 + 3 + (0, p.gn)(this, l, "f").length * 3 + 3 + (0, p.gn)(this, c, "f").length * 3));
    const t = new g.Ay.Deflate({
      level: 9
    });
    t.push(new Uint8Array(e), true);
    return m.l(t.result);
  }
  static deserialize(e) {
    const t = m.D(e);
    if (t == null) {
      return null;
    }
    const n = new g.Ay.Inflate();
    n.push(t, true);
    if (n.err) {
      return null;
    }
    const i = n.result;
    if (!(i instanceof Uint8Array)) {
      return null;
    }
    const a = (0, p.gn)(r, r, "m", f).call(r, i);
    if (a == null) {
      return null;
    }
    const s = (0, p.gn)(r, r, "m", f).call(r, i.subarray(3 + a.length * 3));
    if (s == null) {
      return null;
    }
    const o = (0, p.gn)(r, r, "m", f).call(r, i.subarray(3 + a.length * 3 + 3 + s.length * 3));
    if (o == null) {
      return null;
    }
    const l = (0, p.gn)(r, r, "m", f).call(r, i.subarray(3 + a.length * 3 + 3 + s.length * 3 + 3 + o.length * 3));
    if (l == null) {
      return null;
    }
    const c = (0, p.gn)(r, r, "m", f).call(r, i.subarray(3 + a.length * 3 + 3 + s.length * 3 + 3 + o.length * 3 + 3 + l.length * 3));
    if (c == null) {
      return null;
    } else {
      return new r({
        up: a,
        right: s,
        down: o,
        left: l,
        reset: c
      });
    }
  }
}
r = _A;
a = new WeakMap();
s = new WeakMap();
o = new WeakMap();
l = new WeakMap();
c = new WeakMap();
h = new WeakMap();
i = new WeakSet();
d = function (e, t) {
  let n = -1;
  for (let i = 0; i < t.length; ++i) {
    const r = t[i];
    if (r == e) {
      n = i;
      break;
    }
    if (r > e) {
      break;
    }
    n = i;
  }
  return n;
};
u = function (e, t) {
  t[0] = e.length & 255;
  t[1] = e.length >>> 8 & 255;
  t[2] = e.length >>> 16 & 255;
  for (let n = 0; n < e.length; ++n) {
    let i;
    i = n == 0 ? e[n] : e[n] - e[n - 1];
    t[3 + n * 3] = i & 255;
    t[3 + n * 3 + 1] = i >>> 8 & 255;
    t[3 + n * 3 + 2] = i >>> 16 & 255;
  }
};
f = function (e) {
  if (e.length < 3) {
    return null;
  }
  const t = e[0] | e[1] << 8 | e[2] << 16;
  if (e.length < 3 + t * 3) {
    return null;
  }
  const n = [];
  for (let i = 0; i < t; ++i) {
    const t = e[3 + i * 3] | e[3 + i * 3 + 1] << 8 | e[3 + i * 3 + 2] << 16;
    if (i == 0) {
      n.push(t);
    } else {
      n.push(n[i - 1] + t);
    }
  }
  return n;
};
_A.maxFrames = 5999999;
export const A = _A;