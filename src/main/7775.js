var i = require("./7929.js");
var r = require("./9117.js");
var a = require("./7852.js");
var s = require("./2498.js");
var o = require("./494.js");
var l = require("./7781.js");
var c = require("./2600.js");
export function _(e) {
  if (typeof e != "object" || e == null) {
    return null;
  }
  if (!("parts" in e) || typeof e.parts != "object" || e.parts == null) {
    return null;
  }
  const t = e.parts;
  const n = new r.A(a.A.Summer, new i.A());
  const h = Object.keys(t);
  for (const e of h) {
    const i = parseInt(e, 10);
    if (!(i in o.A)) {
      return null;
    }
    {
      const e = t[i];
      if (!Array.isArray(e)) {
        return null;
      }
      if (e.length % 4 != 0) {
        return null;
      }
      for (let t = 0; t < e.length; t += 4) {
        const r = e[t + 0];
        const a = e[t + 1];
        const o = e[t + 2];
        const h = e[t + 3];
        if (typeof r != "number" || typeof a != "number" || typeof o != "number" || typeof h != "number") {
          return null;
        }
        if (!Number.isSafeInteger(r) || !Number.isSafeInteger(a) || !Number.isSafeInteger(o) || !Number.isSafeInteger(h)) {
          return null;
        }
        if (!(h >= 0) || !(h <= 3) || !(Math.abs(r) <= 1000000000) || !(a >= 0) || !(a <= 1000000000) || !(Math.abs(o) <= 1000000000)) {
          return null;
        }
        {
          if (c.bK.includes(i)) {
            return null;
          }
          let d = null;
          if (c.l1.includes(i)) {
            d = t / 4 == e.length / 4 - 1 ? 1 : 0;
          }
          n.addPart(r * 4, a, o * 4, i, h, l.A.YPositive, s.A.Default, null, d);
        }
      }
    }
  }
  return n;
}
export function U(e) {
  let t;
  let n;
  try {
    t = JSON.parse(e);
  } catch (e) {
    console.warn(e);
    return null;
  }
  if (typeof t != "object" || t == null) {
    return null;
  }
  if (!("name" in t) || typeof t.name != "string") {
    return null;
  }
  if (!("track" in t) || typeof t.track != "string") {
    return null;
  }
  try {
    n = JSON.parse(t.track);
  } catch (e) {
    console.warn(e);
    return null;
  }
  const i = _(n);
  if (i == null) {
    return null;
  } else {
    return {
      trackMetadata: {
        name: t.name,
        author: null,
        lastModified: null
      },
      trackData: i
    };
  }
}