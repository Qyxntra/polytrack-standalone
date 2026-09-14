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
  while (n < t.length) {
    if (t.length - n < 1) {
      return null;
    }
    const e = t[n + 0];
    n += 1;
    if (!(e in s.A)) {
      return null;
    }
    if (t.length - n < 4) {
      return null;
    }
    const i = t[n + 0] | t[n + 1] << 8 | t[n + 2] << 16 | t[n + 3] << 24;
    n += 4;
    for (let r = 0; r < i; ++r) {
      if (t.length - n < m) {
        return null;
      }
      let i = 0;
      for (let e = 0; e < m; ++e) {
        i |= t[n + e] << e * 8;
      }
      i += f;
      n += m;
      if (t.length - n < A) {
        return null;
      }
      let r = 0;
      for (let e = 0; e < A; ++e) {
        r |= t[n + e] << e * 8;
      }
      r += p;
      n += A;
      if (t.length - n < v) {
        return null;
      }
      let a = 0;
      for (let e = 0; e < v; ++e) {
        a |= t[n + e] << e * 8;
      }
      a += g;
      n += v;
      if (t.length - n < 1) {
        return null;
      }
      const s = t[n];
      n += 1;
      const l = s & 3;
      if (l < 0 || l > 3) {
        return null;
      }
      const h = s >> 2 & 7;
      if (!(h in c.A)) {
        return null;
      }
      if (t.length - n < 1) {
        return null;
      }
      const b = t[n + 0];
      n += 1;
      if (!(b in o.A)) {
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
      u.addPart(i, r, a, e, l, h, b, y, w);
    }
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
  const t = "PolyTrack2";
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
  let h = 0;
  if (c.length < h + 1) {
    return null;
  }
  const d = c[h];
  h += 1;
  if (c.length < h + d) {
    return null;
  }
  const f = new TextDecoder("utf-8").decode(c.subarray(h, h + d));
  h += d;
  if (c.length < h + 1) {
    return null;
  }
  const p = c[h];
  let g;
  h += 1;
  if (p > 0) {
    if (c.length < h + p) {
      return null;
    }
    g = new TextDecoder("utf-8").decode(c.subarray(h, h + p));
    h += p;
  } else {
    g = null;
  }
  if (c.length < h + 1) {
    return null;
  }
  const m = c[h];
  let A;
  h += 1;
  if (m == 0) {
    A = null;
  } else {
    if (m != 1) {
      return null;
    }
    {
      if (c.length < h + 4) {
        return null;
      }
      const e = c[h + 0] | c[h + 1] << 8 | c[h + 2] << 16 | c[h + 3] << 24;
      h += 4;
      A = new Date(e * 1000);
    }
  }
  const v = u(h, c);
  if (v == null) {
    return null;
  } else {
    return {
      trackMetadata: {
        name: f,
        author: g,
        lastModified: A
      },
      trackData: v
    };
  }
}