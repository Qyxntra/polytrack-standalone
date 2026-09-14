var i = require("./3075.js");
var r = require("./7754.js");
var a = require("./9117.js");
var s = require("./494.js");
var o = require("./2498.js");
var l = require("./7852.js");
var c = require("./7781.js");
var h = require("./7929.js");
var d = require("./2600.js");
export function _(e) {
  const t = r.D(e);
  if (t == null) {
    return null;
  }
  const n = new i.Ay.Inflate();
  n.push(t, true);
  if (n.err) {
    return null;
  }
  const u = n.result;
  if (!(u instanceof Uint8Array)) {
    return null;
  }
  const f = new a.A(l.A.Summer, new h.A());
  let p = 0;
  while (p < u.length) {
    if (u.length - p < 2) {
      return null;
    }
    let e = u[p + 0] | u[p + 1] << 8;
    p += 2;
    let t = null;
    if (e == 40) {
      e = s.A.Slope;
      t = s.A.PillarTopSlope;
    }
    if (!(e in s.A)) {
      return null;
    }
    if (u.length - p < 4) {
      return null;
    }
    const n = u[p + 0] | u[p + 1] << 8 | u[p + 2] << 16 | u[p + 3] << 24;
    p += 4;
    for (let i = 0; i < n; ++i) {
      if (u.length - p < 3) {
        return null;
      }
      const r = (u[p + 0] | u[p + 1] << 8 | u[p + 2] << 16) - 8388608;
      p += 3;
      if (u.length - p < 3) {
        return null;
      }
      const a = u[p + 0] | u[p + 1] << 8 | u[p + 2] << 16;
      p += 3;
      if (u.length - p < 3) {
        return null;
      }
      const s = (u[p + 0] | u[p + 1] << 8 | u[p + 2] << 16) - 8388608;
      p += 3;
      if (u.length - p < 1) {
        return null;
      }
      const l = u[p + 0];
      p += 1;
      if (l < 0 || l > 3) {
        return null;
      }
      let h = null;
      if (d.bK.includes(e)) {
        if (u.length - p < 2) {
          return null;
        }
        h = u[p + 0] | u[p + 1] << 8;
        p += 2;
      }
      let g = null;
      if (d.l1.includes(e)) {
        g = i == n - 1 ? 1 : 0;
      }
      if (t != null) {
        f.addPart(r * 4, a, s * 4, t, l, c.A.YPositive, o.A.Default, null, null);
      }
      f.addPart(r * 4, a, s * 4, e, l, c.A.YPositive, o.A.Default, h, g);
    }
  }
  return f;
}
export function U(e) {
  if (!e.startsWith("v2")) {
    return null;
  }
  const t = e.substring(2, 4);
  const n = r.D(t);
  if (n == null) {
    return null;
  }
  if (n.length != 1) {
    return null;
  }
  const i = n[0];
  const a = Math.ceil(i / 3 * 4);
  const s = e.substring(4, 4 + a);
  const o = r.D(s);
  if (o == null) {
    return null;
  }
  let l;
  try {
    l = new TextDecoder("utf-8").decode(o);
  } catch {
    return null;
  }
  const c = _(e.substring(4 + a));
  if (c == null) {
    return null;
  } else {
    return {
      trackMetadata: {
        name: l,
        author: null,
        lastModified: null
      },
      trackData: c
    };
  }
}