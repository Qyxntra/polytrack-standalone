var i;
var r;
var a;
var s;
var o;
var l;
var c;
var h;
var d = require("./1635.js");
var u = require("./3075.js");
var f = require("./1312.js");
var p = require("./4922.js");
var g = require("./7754.js");
var m = require("./7775.js");
var _A = require("./2849.js");
var v = require("./1648.js");
var b = require("./8063.js");
var y = require("./11.js");
var w = require("./6582.js");
var x = require("./3080.js");
var S = require("./6762.js");
var k = require("./7852.js");
var T = require("./2600.js");
var E = require("./5494.js");
r = new WeakMap();
a = new WeakMap();
s = new WeakMap();
o = new WeakMap();
l = new WeakMap();
i = new WeakSet();
c = function () {
  let e = -Infinity;
  let t = null;
  for (const n of (0, d.gn)(this, o, "f")) {
    const i = (0, d.gn)(this, l, "f").get(n);
    if (i == null) {
      throw new Error("Part list does not exist");
    }
    const r = (0, T.Hw)(n).startOffset;
    if (i.length > 0 && r != null) {
      for (const n of i) {
        if (n.startOrder == null) {
          throw new Error("Start part has no start order");
        }
        if (n.startOrder >= e) {
          e = n.startOrder;
          t = {
            part: n,
            startOffset: r
          };
        }
      }
    }
  }
  if (t != null) {
    return {
      x: t.part.x,
      y: t.part.y,
      z: t.part.z,
      rotation: t.part.rotation,
      rotationAxis: t.part.rotationAxis,
      startOffset: t.startOffset.clone()
    };
  } else {
    return null;
  }
};
h = function () {
  const e = [];
  e.push((0, d.gn)(this, a, "f"));
  e.push((0, d.gn)(this, s, "f").representation);
  let t = Infinity;
  let n = Infinity;
  let i = Infinity;
  let r = -Infinity;
  let c = -Infinity;
  let h = -Infinity;
  for (const [, e] of (0, d.gn)(this, l, "f")) {
    for (const a of e) {
      t = Math.min(a.x, t);
      n = Math.min(a.y, n);
      i = Math.min(a.z, i);
      r = Math.max(a.x, r);
      c = Math.max(a.y, c);
      h = Math.max(a.z, h);
    }
  }
  if (!Number.isFinite(t) || !Number.isFinite(n) || !Number.isFinite(i) || !Number.isFinite(r) || !Number.isFinite(c) || !Number.isFinite(h)) {
    t = 0;
    n = 0;
    i = 0;
    r = 0;
    c = 0;
    h = 0;
  }
  const u = r - t + 1;
  const f = c - n + 1;
  const p = h - i + 1;
  const g = Math.max(1, Math.min(4, Math.ceil(Math.log2(u + 1) / 8)));
  const m = Math.max(1, Math.min(4, Math.ceil(Math.log2(f + 1) / 8)));
  const A = Math.max(1, Math.min(4, Math.ceil(Math.log2(p + 1) / 8)));
  e.push(t & 255, t >>> 8 & 255, t >>> 16 & 255, t >>> 24 & 255, n & 255, n >>> 8 & 255, n >>> 16 & 255, n >>> 24 & 255, i & 255, i >>> 8 & 255, i >>> 16 & 255, i >>> 24 & 255, (g | m << 2 | A << 4) & 255);
  for (const r of (0, d.gn)(this, o, "f")) {
    const a = (0, d.gn)(this, l, "f").get(r);
    if (a == null) {
      throw new Error("Part list does not exist");
    }
    if (r < 0 || r > 255) {
      throw new Error("Part id is out of range");
    }
    const s = a.length;
    e.push(r & 255, s & 255, s >>> 8 & 255, s >>> 16 & 255, s >>> 24 & 255);
    for (const s of a) {
      const a = s.x - t;
      const o = s.y - n;
      const l = s.z - i;
      if (g == 1) {
        e.push(a & 255);
      } else if (g == 2) {
        e.push(a & 255, a >>> 8 & 255);
      } else if (g == 3) {
        e.push(a & 255, a >>> 8 & 255, a >>> 16 & 255);
      } else if (g == 4) {
        e.push(a & 255, a >>> 8 & 255, a >>> 16 & 255, a >>> 24 & 255);
      }
      if (m == 1) {
        e.push(o & 255);
      } else if (m == 2) {
        e.push(o & 255, o >>> 8 & 255);
      } else if (m == 3) {
        e.push(o & 255, o >>> 8 & 255, o >>> 16 & 255);
      } else if (m == 4) {
        e.push(o & 255, o >>> 8 & 255, o >>> 16 & 255, o >>> 24 & 255);
      }
      if (A == 1) {
        e.push(l & 255);
      } else if (A == 2) {
        e.push(l & 255, l >>> 8 & 255);
      } else if (A == 3) {
        e.push(l & 255, l >>> 8 & 255, l >>> 16 & 255);
      } else if (A == 4) {
        e.push(l & 255, l >>> 8 & 255, l >>> 16 & 255, l >>> 24 & 255);
      }
      e.push((s.rotation & 3 | (s.rotationAxis & 7) << 2) & 255, s.color & 255);
      if (T.bK.includes(r)) {
        if (s.checkpointOrder == null) {
          throw new Error("Checkpoint has no checkpoint order");
        }
        e.push(s.checkpointOrder & 255, s.checkpointOrder >>> 8 & 255);
      }
      if (T.l1.includes(r)) {
        if (s.startOrder == null) {
          throw new Error("Start has no start order");
        }
        e.push(s.startOrder & 255, s.startOrder >>> 8 & 255, s.startOrder >>> 16 & 255, s.startOrder >>> 24 & 255);
      }
    }
  }
  return new Uint8Array(e);
};
export const A = class {
  constructor(e, t) {
    i.add(this);
    r.set(this, null);
    a.set(this, undefined);
    s.set(this, undefined);
    o.set(this, []);
    l.set(this, new Map());
    (0, d.GG)(this, a, e, "f");
    (0, d.GG)(this, s, t.clone(), "f");
  }
  get environment() {
    return (0, d.gn)(this, a, "f");
  }
  set environment(e) {
    (0, d.GG)(this, r, null, "f");
    (0, d.GG)(this, a, e, "f");
  }
  get sunDirection() {
    return (0, d.gn)(this, s, "f").clone();
  }
  set sunDirection(e) {
    (0, d.GG)(this, r, null, "f");
    (0, d.GG)(this, s, e.clone(), "f");
  }
  get numberOfParts() {
    let e = 0;
    for (const t of (0, d.gn)(this, l, "f").values()) {
      e += t.length;
    }
    return e;
  }
  addPart(e, t, n, i, a, s, c, h, u) {
    (0, d.GG)(this, r, null, "f");
    const f = {
      x: e,
      y: t,
      z: n,
      rotation: a,
      rotationAxis: s,
      color: c,
      checkpointOrder: h,
      startOrder: u
    };
    const p = (0, d.gn)(this, l, "f").get(i);
    if (p != null) {
      let e = 0;
      let t = p.length;
      while (e < t) {
        const n = e + t >>> 1;
        const i = p[n];
        if ((f.x - i.x || f.y - i.y || f.z - i.z || f.rotation - i.rotation || f.rotationAxis - i.rotationAxis || f.color - i.color || (f.checkpointOrder ?? -1) - (i.checkpointOrder ?? -1) || (f.startOrder ?? -1) - (i.startOrder ?? -1)) < 0) {
          t = n;
        } else {
          e = n + 1;
        }
      }
      p.splice(e, 0, f);
    } else {
      (0, d.gn)(this, l, "f").set(i, [f]);
      let e = 0;
      let t = (0, d.gn)(this, o, "f").length;
      while (e < t) {
        const n = e + t >>> 1;
        if ((0, d.gn)(this, o, "f")[n] < i) {
          e = n + 1;
        } else {
          t = n;
        }
      }
      (0, d.gn)(this, o, "f").splice(e, 0, i);
    }
  }
  forEachPart(e) {
    for (const t of (0, d.gn)(this, o, "f")) {
      const n = (0, d.gn)(this, l, "f").get(t);
      if (n == null) {
        throw new Error("Part list does not exist");
      }
      for (const i of n) {
        e(i.x, i.y, i.z, t, i.rotation, i.rotationAxis, i.color, i.checkpointOrder, i.startOrder);
      }
    }
  }
  getId() {
    (0, d.GG)(this, r, (0, d.gn)(this, r, "f") ?? (0, f.sha256)((0, d.gn)(this, i, "m", h).call(this)), "f");
    return (0, d.gn)(this, r, "f");
  }
  getBounds() {
    let e = Infinity;
    let t = Infinity;
    let n = -Infinity;
    let i = -Infinity;
    this.forEachPart((r, a, s) => {
      e = Math.min(r, e);
      t = Math.min(s, t);
      n = Math.max(r, n);
      i = Math.max(s, i);
    });
    if (Number.isFinite(e) && Number.isFinite(t) && Number.isFinite(n) && Number.isFinite(i)) {
      return {
        min: new p.I9Y(e, t),
        max: new p.I9Y(n, i)
      };
    } else {
      return {
        min: new p.I9Y(),
        max: new p.I9Y()
      };
    }
  }
  hasStartingPoint() {
    return (0, d.gn)(this, i, "m", c).call(this) != null;
  }
  getStartTransform() {
    const e = (0, d.gn)(this, i, "m", c).call(this);
    if (e != null) {
      const t = E.hT(e.rotation, e.rotationAxis).multiply(new p.PTz().setFromEuler(new p.O9p(0, Math.PI, 0)));
      const n = e.startOffset;
      n.applyQuaternion(t);
      return {
        position: new p.Pq0(e.x * S.A.partSize + n.x, e.y * S.A.partSize + n.y, e.z * S.A.partSize + n.z),
        quaternion: t
      };
    }
    return null;
  }
  toSaveString() {
    const e = (0, d.gn)(this, i, "m", h).call(this);
    const t = new u.Ay.Deflate({
      level: 9,
      windowBits: 9,
      memLevel: 9
    });
    t.push(e, true);
    const n = g.l(t.result);
    const r = new u.Ay.Deflate({
      level: 9,
      windowBits: 15,
      memLevel: 9
    });
    r.push(n, true);
    return g.l(r.result);
  }
  toExportString(e) {
    const t = new TextEncoder().encode(e.name);
    let n;
    let r;
    if (e.author != null) {
      r = new TextEncoder().encode(e.author);
      n = r.length;
    } else {
      r = null;
      n = 0;
    }
    const a = [];
    if (e.lastModified == null) {
      a.push(0);
    } else {
      a.push(1);
      const t = Math.floor(e.lastModified.getTime() / 1000);
      a.push(t & 255, t >>> 8 & 255, t >>> 16 & 255, t >>> 24 & 255);
    }
    const s = new Uint8Array(1 + t.length + 1 + n + a.length);
    s[0] = t.length;
    s.set(t, 1);
    s[1 + t.length] = n;
    if (r != null) {
      s.set(r, 1 + t.length + 1);
    }
    s.set(a, 1 + t.length + 1 + n);
    const o = (0, d.gn)(this, i, "m", h).call(this);
    const l = new u.Ay.Deflate({
      level: 9,
      windowBits: 9,
      memLevel: 9
    });
    l.push(s, false);
    l.push(o, true);
    const c = g.l(l.result);
    const f = new u.Ay.Deflate({
      level: 9,
      windowBits: 15,
      memLevel: 9
    });
    f.push(c, true);
    return "PolyTrack2" + g.l(f.result);
  }
  static fromSaveString(e) {
    const t = w._(e);
    if (t != null) {
      return t;
    }
    const n = y._(e);
    if (n != null) {
      return n;
    }
    const i = b._(e);
    if (i != null) {
      return i;
    }
    const r = v._(e);
    if (r != null) {
      return r;
    }
    const a = _A._(e);
    if (a != null) {
      return a;
    }
    const s = m._(e);
    return s ?? null;
  }
  static fromExportString(e) {
    const t = e.replace(/\s+/g, "");
    const n = w.U(t);
    if (n != null) {
      return n;
    }
    const i = y.U(t);
    if (i != null) {
      return i;
    }
    const r = b.U(t);
    if (r != null) {
      return r;
    }
    const a = v.U(t);
    if (a != null) {
      return a;
    }
    const s = _A.U(t);
    if (s != null) {
      return s;
    }
    const o = m.U(e);
    return o ?? null;
  }
  createThumbnail() {
    let e = Infinity;
    let t = Infinity;
    let n = -Infinity;
    let i = -Infinity;
    this.forEachPart((r, a, s, o, l, c) => {
      (0, T.Hw)(o).tiles.rotated(l, c).forEach((a, o, l) => {
        e = Math.min(e, Math.floor((r + a - 2) / 4));
        t = Math.min(t, Math.floor((s + l - 2) / 4));
        n = Math.max(n, Math.floor((r + a - 2) / 4));
        i = Math.max(i, Math.floor((s + l - 2) / 4));
      });
    });
    if (!Number.isFinite(e) || !Number.isFinite(t) || !Number.isFinite(n) || !Number.isFinite(i)) {
      e = 0;
      t = 0;
      n = 0;
      i = 0;
    }
    const r = 10;
    const a = n - e + 1;
    if (a <= r) {
      n += Math.ceil((r - a) / 2);
      e -= Math.ceil((r - a) / 2);
    }
    const s = i - t + 1;
    if (s <= r) {
      i += Math.ceil((r - s) / 2);
      t -= Math.ceil((r - s) / 2);
    }
    const o = document.createElement("canvas");
    o.width = Math.min(1024, n - e + 1);
    o.height = Math.min(1024, i - t + 1);
    const l = o.getContext("2d");
    if (l == null) {
      throw new Error("Failed to get canvas context");
    }
    const c = l.createImageData(o.width, o.height);
    const h = [];
    const d = [];
    const u = [];
    let f;
    let p;
    let g;
    switch (this.environment) {
      case k.A.Summer:
        f = 255;
        p = 255;
        g = 255;
        break;
      case k.A.Winter:
        f = 190;
        p = 216;
        g = 247;
        break;
      case k.A.Desert:
        f = 237;
        p = 226;
        g = 175;
    }
    this.forEachPart((n, i, r, a, s, l) => {
      const m = (0, T.Hw)(a);
      m.tiles.rotated(s, l).forEach((i, a, s) => {
        const l = Math.floor((n + i - 2) / 4) - e;
        const A = Math.floor((r + s - 2) / 4) - t;
        const v = (l + A * o.width) * 4;
        c.data[v + 0] = f;
        c.data[v + 1] = p;
        c.data[v + 2] = g;
        c.data[v + 3] = 255;
        if (m.startOffset != null) {
          d.push([l, A]);
        } else if (m.detector != null && m.detector.type == x.A.Checkpoint) {
          h.push([l, A]);
        } else if (m.detector != null && m.detector.type == x.A.Finish) {
          u.push([l, A]);
        }
      });
    });
    for (const [e, t] of h) {
      c.data[(e + t * o.width) * 4 + 0] = 226;
      c.data[(e + t * o.width) * 4 + 1] = 192;
      c.data[(e + t * o.width) * 4 + 2] = 38;
      c.data[(e + t * o.width) * 4 + 3] = 255;
    }
    for (const [e, t] of d) {
      c.data[(e + t * o.width) * 4 + 0] = 51;
      c.data[(e + t * o.width) * 4 + 1] = 140;
      c.data[(e + t * o.width) * 4 + 2] = 224;
      c.data[(e + t * o.width) * 4 + 3] = 255;
    }
    for (const [e, t] of u) {
      c.data[(e + t * o.width) * 4 + 0] = 209;
      c.data[(e + t * o.width) * 4 + 1] = 41;
      c.data[(e + t * o.width) * 4 + 2] = 41;
      c.data[(e + t * o.width) * 4 + 3] = 255;
    }
    l.putImageData(c, 0, 0);
    return o;
  }
};