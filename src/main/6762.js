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
var p;
var g;
var m;
var _A;
var v = require("./1635.js");
var b = require("./4922.js");
var y = require("./9117.js");
var w = require("./3080.js");
var x = require("./2498.js");
var S = require("./7852.js");
var k = require("./7929.js");
var T = require("./5494.js");
var E = require("./5287.js");
var M = require("./8482.js");
class _ {
  constructor(e, t, n, i, r, a, s, o, l, c) {
    this.checkpointOrder = null;
    this.startOrder = null;
    this.x = e;
    this.y = t;
    this.z = n;
    this.rotation = i;
    this.rotationAxis = r;
    this.color = a;
    this.trackPartData = s;
    this.matrix = o;
    this.checkpointOrder = l;
    this.startOrder = c;
    if (s.configuration.detector != null && s.configuration.detector.type == w.A.Checkpoint) {
      if (l == null) {
        throw new Error("Checkpoint has no checkpoint order");
      }
    } else if (l != null) {
      throw new Error("Non-checkpoint has checkpoint order");
    }
    if (s.configuration.startOffset != null && c == null) {
      throw new Error("Start part has no start order");
    }
    if (s.configuration.startOffset == null && c != null) {
      throw new Error("Non-start part has start order");
    }
  }
}
class C {
  constructor(e, t, n) {
    i.add(this);
    r.set(this, undefined);
    a.set(this, undefined);
    s.set(this, undefined);
    this.environment = S.A.Summer;
    o.set(this, new k.A());
    l.set(this, []);
    c.set(this, new Map());
    h.set(this, new Map());
    d.set(this, {
      min: new b.I9Y(0, 0),
      max: new b.I9Y(0, 0)
    });
    u.set(this, new Map());
    f.set(this, null);
    p.set(this, []);
    (0, v.GG)(this, r, e, "f");
    (0, v.GG)(this, a, t, "f");
    (0, v.GG)(this, s, n, "f");
  }
  get sunDirection() {
    return (0, v.gn)(this, o, "f");
  }
  set sunDirection(e) {
    (0, v.GG)(this, o, e.clone(), "f");
  }
  clear() {
    (0, v.gn)(this, l, "f").length = 0;
    (0, v.gn)(this, c, "f").clear();
    (0, v.gn)(this, h, "f").clear();
    for (const {
      mesh: e
    } of (0, v.gn)(this, p, "f")) {
      e.dispose();
      (0, v.gn)(this, r, "f").scene.remove(e);
    }
    (0, v.gn)(this, p, "f").length = 0;
  }
  getPartsWithin(e, t, n, i, r, a) {
    return (0, v.gn)(this, l, "f").filter(s => s.trackPartData.configuration.tiles.rotated(s.rotation, s.rotationAxis).some((o, l, c) => {
      const h = s.x + o;
      const d = s.y + l;
      const u = s.z + c;
      return h >= e && h <= i && d >= t && d <= r && u >= n && u <= a;
    })).map(e => ({
      id: e.trackPartData.configuration.id,
      x: e.x,
      y: e.y,
      z: e.z,
      rotation: e.rotation,
      rotationAxis: e.rotationAxis,
      color: e.color,
      checkpointOrder: e.checkpointOrder,
      startOrder: e.startOrder
    }));
  }
  getPartsAt(e, t, n) {
    const i = (0, v.gn)(this, c, "f").get(e.toString() + "|" + t.toString() + "|" + n.toString());
    if (i == null) {
      return [];
    } else {
      return i.map(e => ({
        id: e.trackPartData.configuration.id,
        x: e.x,
        y: e.y,
        z: e.z,
        rotation: e.rotation,
        rotationAxis: e.rotationAxis,
        color: e.color,
        checkpointOrder: e.checkpointOrder,
        startOrder: e.startOrder
      }));
    }
  }
  setPart(e, t, n, i, r, a, o, d, f) {
    const p = (0, v.gn)(this, s, "f").getPart(i);
    if (o != x.A.Default && !p.colors.has(o)) {
      throw new Error("Track part color does not exist");
    }
    const g = T.hT(r, a);
    const m = new b.Pq0(e * C.partSize, t * C.partSize, n * C.partSize);
    const A = new b.kn4().compose(m, g, new b.Pq0(1, 1, 1));
    const y = new _(e, t, n, r, a, o, p, A, d, f);
    (0, v.gn)(this, l, "f").push(y);
    p.configuration.tiles.rotated(r, a).forEach((i, r, a) => {
      const s = (e + i).toString() + "|" + (t + r).toString() + "|" + (n + a).toString();
      if (t + r < 0) {
        throw new Error("Track part below ground");
      }
      {
        const e = (0, v.gn)(this, c, "f").get(s);
        if (e == null) {
          (0, v.gn)(this, c, "f").set(s, [y]);
        } else {
          e.push(y);
        }
      }
    });
    const w = (0, v.gn)(this, h, "f").get(i);
    if (w == null) {
      (0, v.gn)(this, h, "f").set(i, [y]);
    } else {
      w.push(y);
    }
    const S = (0, v.gn)(this, u, "f").get(i);
    if (S == null) {
      (0, v.gn)(this, u, "f").set(i, new Set([o]));
    } else {
      S.add(o);
    }
  }
  deletePartsAt(e, t, n) {
    const r = [];
    const a = (0, v.gn)(this, c, "f").get(e.toString() + "|" + t.toString() + "|" + n.toString());
    if (a != null) {
      for (let e = 0; e < a.length; ++e) {
        const t = a[e];
        r.push({
          id: t.trackPartData.configuration.id,
          x: t.x,
          y: t.y,
          z: t.z,
          rotation: t.rotation,
          rotationAxis: t.rotationAxis,
          color: t.color,
          checkpointOrder: t.checkpointOrder,
          startOrder: t.startOrder
        });
        (0, v.gn)(this, i, "m", g).call(this, (0, v.gn)(this, l, "f").indexOf(t));
        --e;
      }
    }
    return r;
  }
  deletePartsWithin(e, t, n, r, a, s) {
    const o = [];
    for (let c = 0; c < (0, v.gn)(this, l, "f").length; ++c) {
      const h = (0, v.gn)(this, l, "f")[c];
      if (h.trackPartData.configuration.tiles.rotated(h.rotation, h.rotationAxis).some((i, o, l) => {
        const c = h.x + i;
        const d = h.y + o;
        const u = h.z + l;
        return c >= e && c <= r && d >= t && d <= a && u >= n && u <= s;
      })) {
        o.push({
          id: h.trackPartData.configuration.id,
          x: h.x,
          y: h.y,
          z: h.z,
          rotation: h.rotation,
          rotationAxis: h.rotationAxis,
          color: h.color,
          checkpointOrder: h.checkpointOrder,
          startOrder: h.startOrder
        });
        (0, v.gn)(this, i, "m", g).call(this, c);
        --c;
      }
    }
    return o;
  }
  deleteSpecificPart(e, t, n, r, a, s) {
    for (let o = 0; o < (0, v.gn)(this, l, "f").length; ++o) {
      const c = (0, v.gn)(this, l, "f")[o];
      if (c.trackPartData.configuration.id == e && c.x == t && c.y == n && c.z == r && c.rotation == a && c.rotationAxis == s) {
        (0, v.gn)(this, i, "m", g).call(this, o);
        return {
          id: c.trackPartData.configuration.id,
          x: c.x,
          y: c.y,
          z: c.z,
          rotation: c.rotation,
          rotationAxis: c.rotationAxis,
          color: c.color,
          checkpointOrder: c.checkpointOrder,
          startOrder: c.startOrder
        };
      }
    }
    return null;
  }
  getBounds() {
    return (0, v.gn)(this, d, "f");
  }
  refreshMeshes() {
    const e = (0, v.gn)(this, f, "f") != null && (0, v.gn)(this, f, "f") != this.environment;
    let t;
    (0, v.GG)(this, f, this.environment, "f");
    switch (this.environment) {
      case S.A.Summer:
        t = x.A.Summer;
        break;
      case S.A.Winter:
        t = x.A.Winter;
        break;
      case S.A.Desert:
        t = x.A.Desert;
    }
    for (let n = 0; n < (0, v.gn)(this, p, "f").length; ++n) {
      const {
        trackPartId: i,
        color: a,
        mesh: s
      } = (0, v.gn)(this, p, "f")[n];
      const o = (0, v.gn)(this, u, "f").get(i);
      if (e || o?.has(a) || a == t && o?.has(x.A.Default)) {
        s.dispose();
        (0, v.gn)(this, r, "f").scene.remove(s);
        (0, v.gn)(this, p, "f").splice(n, 1);
        --n;
      }
    }
    const n = (0, v.gn)(this, o, "f").getSunPosition();
    const l = new b.IUQ(n.x, n.y, n.z, 0);
    let c = null;
    if ((0, v.gn)(this, a, "f").getSettingInteger(E.A.ShadowQuality) == 2) {
      switch (this.environment) {
        case S.A.Summer:
          c = new b.Q1f(2511171);
          break;
        case S.A.Winter:
          c = new b.Q1f(7904713);
          break;
        case S.A.Desert:
          c = new b.Q1f(7958351);
      }
    }
    const h = (0, v.gn)(this, r, "f").isTrackShadowsEnabled();
    if (e) {
      for (const e of (0, v.gn)(this, s, "f").getAllParts()) {
        for (const n of e.colors.keys()) {
          (0, v.gn)(this, i, "m", _A).call(this, e, n, t, h, c, l);
        }
      }
    } else {
      for (const [e, n] of (0, v.gn)(this, u, "f").entries()) {
        const r = (0, v.gn)(this, s, "f").getPart(e);
        for (const e of r.colors.keys()) {
          if (n.has(e) || e == t && n.has(x.A.Default)) {
            (0, v.gn)(this, i, "m", _A).call(this, r, e, t, h, c, l);
          }
        }
      }
    }
    (0, v.gn)(this, i, "m", m).call(this);
    (0, v.gn)(this, u, "f").clear();
  }
  getCheckpoints() {
    let e = [];
    const t = (0, v.gn)(this, s, "f").getPartTypesWithDetector(w.A.Checkpoint);
    for (const n of t) {
      const t = (0, v.gn)(this, h, "f").get(n);
      if (t != null) {
        e = e.concat(t);
      }
    }
    return e.map(e => {
      if (e.checkpointOrder == null) {
        throw new Error("Checkpoint has no checkpoint order");
      }
      if (e.trackPartData.configuration.detector == null) {
        throw new Error("Checkpoint has no detector");
      }
      return {
        x: e.x,
        y: e.y,
        z: e.z,
        rotation: e.rotation,
        rotationAxis: e.rotationAxis,
        type: e.trackPartData.configuration.id,
        checkpointOrder: e.checkpointOrder,
        detector: e.trackPartData.configuration.detector
      };
    });
  }
  getCheckpointOrders() {
    let e = [];
    const t = (0, v.gn)(this, s, "f").getPartTypesWithDetector(w.A.Checkpoint);
    for (const n of t) {
      const t = (0, v.gn)(this, h, "f").get(n);
      if (t != null) {
        e = e.concat(t);
      }
    }
    return e.map(e => {
      if (e.checkpointOrder == null) {
        throw new Error("Checkpoint has no checkpoint order");
      }
      if (e.trackPartData.configuration.detector == null) {
        throw new Error("Checkpoint has no detector");
      }
      return e.checkpointOrder;
    });
  }
  getTotalNumberOfCheckpointIndices() {
    let e = [];
    const t = (0, v.gn)(this, s, "f").getPartTypesWithDetector(w.A.Checkpoint);
    for (const n of t) {
      const t = (0, v.gn)(this, h, "f").get(n);
      if (t != null) {
        e = e.concat(t);
      }
    }
    return e.map(e => e.checkpointOrder).filter((e, t, n) => n.indexOf(e) == t).length;
  }
  getStart() {
    let e = -Infinity;
    let t = null;
    for (const [n, i] of (0, v.gn)(this, h, "f")) {
      const r = (0, v.gn)(this, s, "f").getPartStartOffset(n);
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
        startOffset: t.startOffset
      };
    } else {
      return null;
    }
  }
  getStartTransform() {
    const e = this.getStart();
    if (e != null) {
      const t = T.hT(e.rotation, e.rotationAxis).multiply(new b.PTz().setFromEuler(new b.O9p(0, Math.PI, 0)));
      const n = e.startOffset;
      n.applyQuaternion(t);
      return {
        position: new b.Pq0(e.x * C.partSize + n.x, e.y * C.partSize + n.y, e.z * C.partSize + n.z),
        quaternion: t
      };
    }
    return null;
  }
  getNextStartOrder() {
    let e = 0;
    for (const [t, n] of (0, v.gn)(this, h, "f")) {
      const i = (0, v.gn)(this, s, "f").getPartStartOffset(t);
      if (n.length > 0 && i != null) {
        for (const t of n) {
          if (t.startOrder == null) {
            throw new Error("Start part has no start order");
          }
          e = Math.max(e, t.startOrder + 1);
        }
      }
    }
    return e;
  }
  getTrackData() {
    const e = new y.A(this.environment, (0, v.gn)(this, o, "f"));
    for (const t of (0, v.gn)(this, l, "f")) {
      e.addPart(t.x, t.y, t.z, t.trackPartData.configuration.id, t.rotation, t.rotationAxis, t.color, t.checkpointOrder, t.startOrder);
    }
    return e;
  }
  loadTrackData(e) {
    this.clear();
    this.environment = e.environment;
    this.sunDirection = e.sunDirection.clone();
    e.forEachPart((e, t, n, i, r, a, s, o, l) => {
      this.setPart(e, t, n, i, r, a, s, o, l);
    });
    return true;
  }
}
r = new WeakMap();
a = new WeakMap();
s = new WeakMap();
o = new WeakMap();
l = new WeakMap();
c = new WeakMap();
h = new WeakMap();
d = new WeakMap();
u = new WeakMap();
f = new WeakMap();
p = new WeakMap();
i = new WeakSet();
g = function (e) {
  if (e < 0 || e >= (0, v.gn)(this, l, "f").length) {
    throw new Error("Track part index out of bounds");
  }
  const t = (0, v.gn)(this, l, "f")[e];
  (0, v.gn)(this, l, "f").splice(e, 1);
  t.trackPartData.configuration.tiles.rotated(t.rotation, t.rotationAxis).forEach((e, n, i) => {
    const r = (t.x + e).toString() + "|" + (t.y + n).toString() + "|" + (t.z + i).toString();
    const a = (0, v.gn)(this, c, "f").get(r);
    if (a == null) {
      throw new Error("Track part section missing");
    }
    {
      const e = a.indexOf(t);
      if (!(e >= 0)) {
        throw new Error("Track part missing from parts by position map");
      }
      a.splice(e, 1);
      if (a.length == 0) {
        (0, v.gn)(this, c, "f").delete(r);
      }
    }
  });
  const n = (0, v.gn)(this, h, "f").get(t.trackPartData.configuration.id);
  if (n == null) {
    throw new Error("Track part type is missing from parts by type map");
  }
  for (let e = 0; e < n.length; ++e) {
    if (n[e] == t) {
      n.splice(e, 1);
      break;
    }
    if (e == n.length - 1) {
      throw new Error("Track part is missing from parts by type map");
    }
  }
  const i = (0, v.gn)(this, u, "f").get(t.trackPartData.configuration.id);
  if (i == null) {
    (0, v.gn)(this, u, "f").set(t.trackPartData.configuration.id, new Set([t.color]));
  } else {
    i.add(t.color);
  }
};
m = function () {
  let e = Infinity;
  let t = Infinity;
  let n = -Infinity;
  let i = -Infinity;
  for (const r of (0, v.gn)(this, l, "f")) {
    e = Math.min(r.x, e);
    t = Math.min(r.z, t);
    n = Math.max(r.x, n);
    i = Math.max(r.z, i);
  }
  if (Number.isFinite(e) && Number.isFinite(t) && Number.isFinite(n) && Number.isFinite(i)) {
    (0, v.GG)(this, d, {
      min: new b.I9Y(e, t),
      max: new b.I9Y(n, i)
    }, "f");
  } else {
    (0, v.GG)(this, d, {
      min: new b.I9Y(),
      max: new b.I9Y()
    }, "f");
  }
};
_A = function (e, t, n, i, a, s) {
  const o = [];
  for (const i of (0, v.gn)(this, l, "f")) {
    let r = i.color;
    if (r == x.A.Default) {
      r = n;
    }
    if (i.trackPartData == e && r == t) {
      o.push(i);
    }
  }
  if (o.length > 0) {
    const n = e.colors.get(t);
    if (n == null) {
      throw new Error("Mesh is not loaded");
    }
    const l = new b.ZLX(n.geometry, n.material, o.length);
    l.matrixAutoUpdate = false;
    l.matrixWorldAutoUpdate = false;
    l.frustumCulled = false;
    l.castShadow = i;
    l.receiveShadow = true;
    for (let e = 0; e < o.length; ++e) {
      l.setMatrixAt(e, o[e].matrix);
    }
    (0, v.gn)(this, r, "f").scene.add(l);
    (0, v.gn)(this, p, "f").push({
      trackPartId: e.configuration.id,
      color: t,
      mesh: l
    });
    if (a != null) {
      const n = new M.t(l, a);
      n.update(new b.Zcv(new b.Pq0(0, 1, 0), 0), s);
      (0, v.gn)(this, r, "f").scene.add(n);
      (0, v.gn)(this, p, "f").push({
        trackPartId: e.configuration.id,
        color: t,
        mesh: n
      });
    }
  }
};
C.partSize = 5;
export const A = C;