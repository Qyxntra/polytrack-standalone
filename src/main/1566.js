var i = require("./4922.js");
export function pP(e, t = false) {
  const n = e[0].index !== null;
  const r = new Set(Object.keys(e[0].attributes));
  const s = new Set(Object.keys(e[0].morphAttributes));
  const o = {};
  const l = {};
  const c = e[0].morphTargetsRelative;
  const h = new i.LoY();
  let d = 0;
  for (let i = 0; i < e.length; ++i) {
    const a = e[i];
    let u = 0;
    if (n !== (a.index !== null)) {
      console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + i + ". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.");
      return null;
    }
    for (const e in a.attributes) {
      if (!r.has(e)) {
        console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + i + ". All geometries must have compatible attributes; make sure \"" + e + "\" attribute exists among all geometries, or in none of them.");
        return null;
      }
      if (o[e] === undefined) {
        o[e] = [];
      }
      o[e].push(a.attributes[e]);
      u++;
    }
    if (u !== r.size) {
      console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + i + ". Make sure all geometries have the same number of attributes.");
      return null;
    }
    if (c !== a.morphTargetsRelative) {
      console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + i + ". .morphTargetsRelative must be consistent throughout all geometries.");
      return null;
    }
    for (const e in a.morphAttributes) {
      if (!s.has(e)) {
        console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + i + ".  .morphAttributes must be consistent throughout all geometries.");
        return null;
      }
      if (l[e] === undefined) {
        l[e] = [];
      }
      l[e].push(a.morphAttributes[e]);
    }
    if (t) {
      let e;
      if (n) {
        e = a.index.count;
      } else {
        if (a.attributes.position === undefined) {
          console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + i + ". The geometry must have either an index or a position attribute");
          return null;
        }
        e = a.attributes.position.count;
      }
      h.addGroup(d, e, i);
      d += e;
    }
  }
  if (n) {
    let t = 0;
    const n = [];
    for (let i = 0; i < e.length; ++i) {
      const r = e[i].index;
      for (let e = 0; e < r.count; ++e) {
        n.push(r.getX(e) + t);
      }
      t += e[i].attributes.position.count;
    }
    h.setIndex(n);
  }
  for (const e in o) {
    const t = a(o[e]);
    if (!t) {
      console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + e + " attribute.");
      return null;
    }
    h.setAttribute(e, t);
  }
  for (const e in l) {
    const t = l[e][0].length;
    if (t === 0) {
      break;
    }
    h.morphAttributes = h.morphAttributes || {};
    h.morphAttributes[e] = [];
    for (let n = 0; n < t; ++n) {
      const t = [];
      for (let i = 0; i < l[e].length; ++i) {
        t.push(l[e][i][n]);
      }
      const i = a(t);
      if (!i) {
        console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + e + " morphAttribute.");
        return null;
      }
      h.morphAttributes[e].push(i);
    }
  }
  return h;
}
function a(e) {
  let t;
  let n;
  let r;
  let a = -1;
  let s = 0;
  for (let i = 0; i < e.length; ++i) {
    const o = e[i];
    if (t === undefined) {
      t = o.array.constructor;
    }
    if (t !== o.array.constructor) {
      console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.");
      return null;
    }
    if (n === undefined) {
      n = o.itemSize;
    }
    if (n !== o.itemSize) {
      console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.");
      return null;
    }
    if (r === undefined) {
      r = o.normalized;
    }
    if (r !== o.normalized) {
      console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.");
      return null;
    }
    if (a === -1) {
      a = o.gpuType;
    }
    if (a !== o.gpuType) {
      console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.");
      return null;
    }
    s += o.count * n;
  }
  const o = new t(s);
  const l = new i.THS(o, n, r);
  let c = 0;
  for (let t = 0; t < e.length; ++t) {
    const i = e[t];
    if (i.isInterleavedBufferAttribute) {
      const e = c / n;
      for (let t = 0, r = i.count; t < r; t++) {
        for (let r = 0; r < n; r++) {
          const n = i.getComponent(t, r);
          l.setComponent(t + e, r, n);
        }
      }
    } else {
      o.set(i.array, c);
    }
    c += i.count * n;
  }
  if (a !== undefined) {
    l.gpuType = a;
  }
  return l;
}
export function ec(e, t = 0.0001) {
  t = Math.max(t, Number.EPSILON);
  const n = {};
  const i = e.getIndex();
  const r = e.getAttribute("position");
  const a = i ? i.count : r.count;
  let s = 0;
  const o = Object.keys(e.attributes);
  const l = {};
  const c = {};
  const h = [];
  const d = ["getX", "getY", "getZ", "getW"];
  const u = ["setX", "setY", "setZ", "setW"];
  for (let t = 0, n = o.length; t < n; t++) {
    const n = o[t];
    const i = e.attributes[n];
    l[n] = new i.constructor(new i.array.constructor(i.count * i.itemSize), i.itemSize, i.normalized);
    const r = e.morphAttributes[n];
    if (r) {
      c[n] ||= [];
      r.forEach((e, t) => {
        const i = new e.array.constructor(e.count * e.itemSize);
        c[n][t] = new e.constructor(i, e.itemSize, e.normalized);
      });
    }
  }
  const f = t * 0.5;
  const p = Math.log10(1 / t);
  const g = Math.pow(10, p);
  const m = f * g;
  for (let t = 0; t < a; t++) {
    const r = i ? i.getX(t) : t;
    let a = "";
    for (let t = 0, n = o.length; t < n; t++) {
      const n = o[t];
      const i = e.getAttribute(n);
      const s = i.itemSize;
      for (let e = 0; e < s; e++) {
        a += ~~(i[d[e]](r) * g + m) + ",";
      }
    }
    if (a in n) {
      h.push(n[a]);
    } else {
      for (let t = 0, n = o.length; t < n; t++) {
        const n = o[t];
        const i = e.getAttribute(n);
        const a = e.morphAttributes[n];
        const h = i.itemSize;
        const f = l[n];
        const p = c[n];
        for (let e = 0; e < h; e++) {
          const t = d[e];
          const n = u[e];
          f[n](s, i[t](r));
          if (a) {
            for (let e = 0, i = a.length; e < i; e++) {
              p[e][n](s, a[e][t](r));
            }
          }
        }
      }
      n[a] = s;
      h.push(s);
      s++;
    }
  }
  const A = e.clone();
  for (const t in e.attributes) {
    const e = l[t];
    A.setAttribute(t, new e.constructor(e.array.slice(0, s * e.itemSize), e.itemSize, e.normalized));
    if (t in c) {
      for (let e = 0; e < c[t].length; e++) {
        const n = c[t][e];
        A.morphAttributes[t][e] = new n.constructor(n.array.slice(0, s * n.itemSize), n.itemSize, n.normalized);
      }
    }
  }
  A.setIndex(h);
  return A;
}
export function _c(e, t) {
  if (t === i.RJ4) {
    console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.");
    return e;
  }
  if (t === i.rYR || t === i.O49) {
    let n = e.getIndex();
    if (n === null) {
      const t = [];
      const i = e.getAttribute("position");
      if (i === undefined) {
        console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.");
        return e;
      }
      for (let e = 0; e < i.count; e++) {
        t.push(e);
      }
      e.setIndex(t);
      n = e.getIndex();
    }
    const r = n.count - 2;
    const a = [];
    if (t === i.rYR) {
      for (let e = 1; e <= r; e++) {
        a.push(n.getX(0));
        a.push(n.getX(e));
        a.push(n.getX(e + 1));
      }
    } else {
      for (let e = 0; e < r; e++) {
        if (e % 2 == 0) {
          a.push(n.getX(e));
          a.push(n.getX(e + 1));
          a.push(n.getX(e + 2));
        } else {
          a.push(n.getX(e + 2));
          a.push(n.getX(e + 1));
          a.push(n.getX(e));
        }
      }
    }
    if (a.length / 3 !== r) {
      console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    }
    const s = e.clone();
    s.setIndex(a);
    s.clearGroups();
    return s;
  }
  console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", t);
  return e;
}