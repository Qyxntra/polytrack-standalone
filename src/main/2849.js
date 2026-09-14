var i = require("./6551.js");
var r = require("./7929.js");
var a = require("./9117.js");
var s = require("./7852.js");
var o = require("./2498.js");
var l = require("./494.js");
var c = require("./7781.js");
var h = require("./2600.js");
export function _(e) {
  const t = i.D(e);
  if (t == null) {
    return null;
  }
  const n = new a.A(s.A.Summer, new r.A());
  let d = 0;
  while (d < t.length) {
    if (t.length - d < 2) {
      return null;
    }
    let e = t[d + 0] | t[d + 1] << 8;
    d += 2;
    let i = null;
    if (e == 40) {
      e = l.A.Slope;
      i = l.A.PillarTopSlope;
    }
    if (!(e in l.A)) {
      return null;
    }
    if (t.length - d < 4) {
      return null;
    }
    const r = t[d + 0] | t[d + 1] << 8 | t[d + 2] << 16 | t[d + 3] << 24;
    d += 4;
    for (let a = 0; a < r; ++a) {
      if (t.length - d < 3) {
        return null;
      }
      const s = (t[d + 0] | t[d + 1] << 8 | t[d + 2] << 16) - 8388608;
      d += 3;
      if (t.length - d < 3) {
        return null;
      }
      const l = t[d + 0] | t[d + 1] << 8 | t[d + 2] << 16;
      d += 3;
      if (t.length - d < 3) {
        return null;
      }
      const u = (t[d + 0] | t[d + 1] << 8 | t[d + 2] << 16) - 8388608;
      d += 3;
      if (t.length - d < 1) {
        return null;
      }
      const f = t[d + 0] & 3;
      d += 1;
      if (f < 0 || f > 3) {
        return null;
      }
      if (h.bK.includes(e)) {
        return null;
      }
      let p = null;
      if (h.l1.includes(e)) {
        p = a == r - 1 ? 1 : 0;
      }
      if (i != null) {
        n.addPart(s * 4, l, u * 4, i, f, c.A.YPositive, o.A.Default, null, null);
      }
      n.addPart(s * 4, l, u * 4, e, f, c.A.YPositive, o.A.Default, null, p);
    }
  }
  return n;
}
export function U(e) {
  if (!e.startsWith("v1n")) {
    return null;
  }
  const t = e.substring(3, 5);
  const n = i.D(t);
  if (n == null) {
    return null;
  }
  if (n.length != 1) {
    return null;
  }
  const r = n[0];
  const a = e.substring(5, 5 + r);
  let s;
  try {
    s = decodeURIComponent(a);
  } catch (e) {
    console.warn(e);
    return null;
  }
  const o = _(e.substring(5 + r));
  if (o == null) {
    return null;
  } else {
    return {
      trackMetadata: {
        name: s,
        author: null,
        lastModified: null
      },
      trackData: o
    };
  }
}