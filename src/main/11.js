var i = require("./3075.js");
var r = require("./7754.js");
var a = require("./9117.js");
var s = require("./494.js");
var o = require("./2498.js");
var l = require("./7852.js");
var c = require("./7781.js");
var h = require("./7929.js");
var d = require("./2600.js");
function u(e, t) {
  let n = e;
  if (t.length - n < 1) {
    return null;
  }
  const i = t[n];
  n += 1;
  if (!(i in l.A)) {
    return null;
  }
  if (t.length - n < 1) {
    return null;
  }
  const r = t[n];
  n += 1;
  if (!Number.isSafeInteger(r) || r < 0 || r >= 180) {
    return null;
  }
  const u = new a.A(i, new h.A(r));
  if (t.length - n < 9) {
    return null;
  }
  const f = t[n] | t[n + 1] << 8 | t[n + 2] << 16 | t[n + 3] << 24;
  n += 4;
  const p = t[n] | t[n + 1] << 8 | t[n + 2] << 16 | t[n + 3] << 24;
  n += 4;
  const g = t[n] | t[n + 1] << 8 | t[n + 2] << 16 | t[n + 3] << 24;
  n += 4;
  const m = t[n] & 3;
  const A = t[n] >> 2 & 3;
  const v = t[n] >> 4 & 3;
  n += 1;
  if (m < 1 || m > 4 || A < 1 || A > 4 || v < 1 || v > 4) {
    return null;
  }
  const b = [];
  while (n < t.length) {
    if (t.length - n < 1) {
      return null;
    }
    let e = t[n + 0];
    n += 1;
    let i = null;
    if (e == 40) {
      e = s.A.Slope;
      i = s.A.PillarTopSlope;
    } else if (e == 84) {
      e = s.A.Slope;
      i = s.A.PillarShortSlope;
    } else if (e == 99) {
      e = s.A.PlaneSlope;
      i = s.A.PillarTopSlope;
    } else if (e == 100) {
      e = s.A.PlaneSlope;
      i = s.A.PillarShortSlope;
    }
    if (!(e in s.A)) {
      return null;
    }
    if (t.length - n < 4) {
      return null;
    }
    const r = t[n + 0] | t[n + 1] << 8 | t[n + 2] << 16 | t[n + 3] << 24;
    n += 4;
    for (let a = 0; a < r; ++a) {
      if (t.length - n < m) {
        return null;
      }
      let r = 0;
      for (let e = 0; e < m; ++e) {
        r |= t[n + e] << e * 8;
      }
      r += f;
      n += m;
      if (t.length - n < A) {
        return null;
      }
      let a = 0;
      for (let e = 0; e < A; ++e) {
        a |= t[n + e] << e * 8;
      }
      a += p;
      n += A;
      if (t.length - n < v) {
        return null;
      }
      let s = 0;
      for (let e = 0; e < v; ++e) {
        s |= t[n + e] << e * 8;
      }
      s += g;
      n += v;
      if (t.length - n < 1) {
        return null;
      }
      const l = t[n + 0];
      n += 1;
      if (l < 0 || l > 3) {
        return null;
      }
      if (t.length - n < 1) {
        return null;
      }
      const h = t[n + 0];
      n += 1;
      if (!(h in c.A)) {
        return null;
      }
      if (t.length - n < 1) {
        return null;
      }
      const u = t[n + 0];
      n += 1;
      if (!(u in o.A)) {
        return null;
      }
      let y = null;
      if (d.bK.includes(e)) {
        if (t.length - n < 2) {
          return null;
        }
        y = t[n + 0] | t[n + 1] << 8;
        n += 2;
      }
      let w = null;
      if (d.l1.includes(e)) {
        if (t.length - n < 4) {
          return null;
        }
        w = t[n + 0] | t[n + 1] << 8 | t[n + 2] << 16 | t[n + 3] << 24;
        n += 4;
      }
      if (i != null) {
        b.push({
          x: r,
          y: a,
          z: s,
          partId: i,
          rotation: l,
          rotationAxis: h,
          color: u,
          checkpointOrder: null,
          startOrder: null
        });
      }
      b.push({
        x: r,
        y: a,
        z: s,
        partId: e,
        rotation: l,
        rotationAxis: h,
        color: u,
        checkpointOrder: y,
        startOrder: w
      });
    }
  }
  let y = null;
  let w = null;
  for (let e = 0; e < b.length; ++e) {
    const t = b[e];
    if (t.startOrder != null && (w == null || t.startOrder >= w)) {
      y = e;
      w = t.startOrder;
    }
  }
  for (let e = 0; e < b.length; ++e) {
    const t = b[e];
    let n = null;
    if (t.startOrder != null) {
      n = e == y ? 1 : 0;
    }
    u.addPart(t.x, t.y, t.z, t.partId, t.rotation, t.rotationAxis, t.color, t.checkpointOrder, n);
  }
  return u;
}
export function _(e) {
  const t = r.D(e);
  if (t == null) {
    return null;
  }
  const n = new i.Ay.Inflate({
    to: "string"
  });
  n.push(t, true);
  if (n.err) {
    return null;
  }
  const a = n.result;
  if (typeof a != "string") {
    return null;
  }
  const s = r.D(a);
  if (s == null) {
    return null;
  }
  const o = new i.Ay.Inflate();
  o.push(s, true);
  if (o.err) {
    return null;
  }
  const l = o.result;
  if (l instanceof Uint8Array) {
    return u(0, l);
  } else {
    return null;
  }
}
export function U(e) {
  const t = "PolyTrack1";
  if (!e.startsWith(t)) {
    return null;
  }
  const n = r.D(e.substring(10));
  if (n == null) {
    return null;
  }
  const a = new i.Ay.Inflate({
    to: "string"
  });
  a.push(n, true);
  if (a.err) {
    return null;
  }
  const s = a.result;
  if (typeof s != "string") {
    return null;
  }
  const o = r.D(s);
  if (o == null) {
    return null;
  }
  const l = new i.Ay.Inflate();
  l.push(o, true);
  if (l.err) {
    return null;
  }
  const c = l.result;
  if (!(c instanceof Uint8Array)) {
    return null;
  }
  const h = c[0];
  if (c.length < 1 + h) {
    return null;
  }
  const d = new TextDecoder("utf-8").decode(c.subarray(1, 1 + h));
  const f = c[1 + h];
  if (c.length < 1 + h + 1 + f) {
    return null;
  }
  let p;
  p = f > 0 ? new TextDecoder("utf-8").decode(c.subarray(1 + h + 1, 1 + h + 1 + f)) : null;
  const g = u(1 + h + 1 + f, c);
  if (g == null) {
    return null;
  } else {
    return {
      trackMetadata: {
        name: d,
        author: p,
        lastModified: null
      },
      trackData: g
    };
  }
}