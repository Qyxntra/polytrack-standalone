/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
export const sPf = "181";
export const kBv = {
  LEFT: 0,
  MIDDLE: 1,
  RIGHT: 2,
  ROTATE: 0,
  DOLLY: 1,
  PAN: 2
};
export const wtR = {
  ROTATE: 0,
  PAN: 1,
  DOLLY_PAN: 2,
  DOLLY_ROTATE: 3
};
export const WNZ = 0;
export const Vb5 = 1;
export const Jnc = 2;
export const QP0 = 1;
export const Wk7 = 2;
export const RyA = 3;
export const hB5 = 0;
export const hsX = 1;
export const $EB = 2;
export const XIg = 0;
export const NTi = 1;
export const EZo = 2;
export const Kwu = 3;
export const EdD = 4;
export const bCz = 5;
export const gO9 = 100;
export const FXf = 101;
export const nST = 102;
export const znC = 103;
export const $ei = 104;
export const ojh = 200;
export const qad = 201;
export const f4X = 202;
export const LiQ = 203;
export const ie2 = 204;
export const OuU = 205;
export const hdd = 206;
export const Nt7 = 207;
export const wn6 = 208;
export const aEY = 209;
export const hgQ = 210;
export const RrE = 211;
export const $Yl = 212;
export const e0p = 213;
export const ov9 = 214;
export const eHc = 0;
export const lGu = 1;
export const brA = 2;
export const xSv = 3;
export const U3G = 4;
export const Gwm = 5;
export const K52 = 6;
export const bw0 = 7;
export const caT = 0;
export const KRh = 1;
export const XrR = 2;
export const y_p = 0;
export const kyO = 1;
export const Mjd = 2;
export const nNL = 3;
export const FV = 4;
export const g7M = 5;
export const LAk = 6;
export const aJ8 = 7;
const se = "attached";
export const hy7 = 301;
export const xFO = 302;
export const wfO = 303;
export const uV5 = 304;
export const Om = 306;
export const GJx = 1000;
export const ghU = 1001;
export const kTW = 1002;
export const hxR = 1003;
export const pHI = 1004;
export const Cfg = 1005;
export const k6q = 1006;
export const kRr = 1007;
export const $_I = 1008;
export const OUM = 1009;
export const tJf = 1010;
export const fBL = 1011;
export const cHt = 1012;
export const Yuy = 1013;
export const bkx = 1014;
export const RQf = 1015;
export const ix0 = 1016;
export const Wew = 1017;
export const gJ2 = 1018;
export const V3x = 1020;
export const Dmk = 35902;
export const yT7 = 35899;
export const wrO = 1021;
export const HIg = 1022;
export const GWd = 1023;
export const zdS = 1026;
export const dcC = 1027;
export const VT0 = 1028;
export const ZQM = 1029;
export const paN = 1030;
export const TkQ = 1031;
export const c90 = 1033;
export const IE4 = 33776;
export const Nz6 = 33777;
export const jR7 = 33778;
export const BXX = 33779;
export const k6Q = 35840;
export const kTp = 35841;
export const HXV = 35842;
export const pBf = 35843;
export const CVz = 36196;
export const Riy = 37492;
export const KDk = 37496;
export const qa3 = 37808;
export const B_h = 37809;
export const czI = 37810;
export const rSH = 37811;
export const Qrf = 37812;
export const psI = 37813;
export const a5J = 37814;
export const _QJ = 37815;
export const uB5 = 37816;
export const lyL = 37817;
export const bC7 = 37818;
export const y3Z = 37819;
export const ojs = 37820;
export const S$4 = 37821;
export const Fn = 36492;
export const H23 = 36494;
export const W9U = 36495;
export const Kef = 36283;
export const XG_ = 36284;
export const HO_ = 36285;
export const CWW = 36286;
export const ljd = 2300;
export const PJ3 = 2301;
const kt = 2302;
const Tt = 2400;
const Et = 2401;
const Mt = 2402;
export const RJ4 = 0;
export const O49 = 1;
export const rYR = 2;
export const N5j = 3201;
export const bI3 = 0;
export const vyJ = 1;
export const jf0 = "";
export const er$ = "srgb";
export const Zr2 = "srgb-linear";
export const VxR = "linear";
export const KLL = "srgb";
const Gt = 7680;
export const amv = 512;
export const vim = 513;
export const kO0 = 514;
export const TiK = 515;
export const eoi = 516;
export const jzd = 517;
export const gWB = 518;
export const FFZ = 519;
const Qt = 35044;
export const Wdf = "300 es";
export const TdN = 2000;
const Yt = 2001;
export function AQS(e) {
  for (let t = e.length - 1; t >= 0; --t) {
    if (e[t] >= 65535) {
      return true;
    }
  }
  return false;
}
Int8Array;
Uint8Array;
Uint8ClampedArray;
Int16Array;
Uint16Array;
Int32Array;
Uint32Array;
Float32Array;
Float64Array;
export function qq$(e) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", e);
}
export function lPF() {
  const e = qq$("canvas");
  e.style.display = "block";
  return e;
}
const tn = {};
let nn = null;
export function Rm2(...e) {
  const t = "THREE." + e.shift();
  if (nn) {
    nn("log", t, ...e);
  } else {
    console.log(t, ...e);
  }
}
export function R8M(...e) {
  const t = "THREE." + e.shift();
  if (nn) {
    nn("warn", t, ...e);
  } else {
    console.warn(t, ...e);
  }
}
export function z3S(...e) {
  const t = "THREE." + e.shift();
  if (nn) {
    nn("error", t, ...e);
  } else {
    console.error(t, ...e);
  }
}
export function mcG(...e) {
  const t = e.join(" ");
  if (!(t in tn)) {
    tn[t] = true;
    R8M(...e);
  }
}
export function jej(e, t, n) {
  return new Promise(function (i, r) {
    setTimeout(function a() {
      switch (e.clientWaitSync(t, e.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case e.WAIT_FAILED:
          r();
          break;
        case e.TIMEOUT_EXPIRED:
          setTimeout(a, n);
          break;
        default:
          i();
      }
    }, n);
  });
}
export class Qev {
  addEventListener(e, t) {
    if (this._listeners === undefined) {
      this._listeners = {};
    }
    const n = this._listeners;
    if (n[e] === undefined) {
      n[e] = [];
    }
    if (n[e].indexOf(t) === -1) {
      n[e].push(t);
    }
  }
  hasEventListener(e, t) {
    const n = this._listeners;
    return n !== undefined && n[e] !== undefined && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    const n = this._listeners;
    if (n === undefined) {
      return;
    }
    const i = n[e];
    if (i !== undefined) {
      const e = i.indexOf(t);
      if (e !== -1) {
        i.splice(e, 1);
      }
    }
  }
  dispatchEvent(e) {
    const t = this._listeners;
    if (t === undefined) {
      return;
    }
    const n = t[e.type];
    if (n !== undefined) {
      e.target = this;
      const t = n.slice(0);
      for (let n = 0, i = t.length; n < i; n++) {
        t[n].call(this, e);
      }
      e.target = null;
    }
  }
}
const hn = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let dn = 1234567;
const un = Math.PI / 180;
export const a55 = 180 / Math.PI;
function pn() {
  const e = Math.random() * 4294967295 | 0;
  const t = Math.random() * 4294967295 | 0;
  const n = Math.random() * 4294967295 | 0;
  const i = Math.random() * 4294967295 | 0;
  return (hn[e & 255] + hn[e >> 8 & 255] + hn[e >> 16 & 255] + hn[e >> 24 & 255] + "-" + hn[t & 255] + hn[t >> 8 & 255] + "-" + hn[t >> 16 & 15 | 64] + hn[t >> 24 & 255] + "-" + hn[n & 63 | 128] + hn[n >> 8 & 255] + "-" + hn[n >> 16 & 255] + hn[n >> 24 & 255] + hn[i & 255] + hn[i >> 8 & 255] + hn[i >> 16 & 255] + hn[i >> 24 & 255]).toLowerCase();
}
function gn(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function mn(e, t) {
  return (e % t + t) % t;
}
function An(e, t, n) {
  return (1 - n) * e + n * t;
}
function vn(e, t) {
  switch (t.constructor) {
    case Float32Array:
      return e;
    case Uint32Array:
      return e / 4294967295;
    case Uint16Array:
      return e / 65535;
    case Uint8Array:
      return e / 255;
    case Int32Array:
      return Math.max(e / 2147483647, -1);
    case Int16Array:
      return Math.max(e / 32767, -1);
    case Int8Array:
      return Math.max(e / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function bn(e, t) {
  switch (t.constructor) {
    case Float32Array:
      return e;
    case Uint32Array:
      return Math.round(e * 4294967295);
    case Uint16Array:
      return Math.round(e * 65535);
    case Uint8Array:
      return Math.round(e * 255);
    case Int32Array:
      return Math.round(e * 2147483647);
    case Int16Array:
      return Math.round(e * 32767);
    case Int8Array:
      return Math.round(e * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
export const cj9 = {
  DEG2RAD: un,
  RAD2DEG: a55,
  generateUUID: pn,
  clamp: gn,
  euclideanModulo: mn,
  mapLinear: function (e, t, n, i, r) {
    return i + (e - t) * (r - i) / (n - t);
  },
  inverseLerp: function (e, t, n) {
    if (e !== t) {
      return (n - e) / (t - e);
    } else {
      return 0;
    }
  },
  lerp: An,
  damp: function (e, t, n, i) {
    return An(e, t, 1 - Math.exp(-n * i));
  },
  pingpong: function (e, t = 1) {
    return t - Math.abs(mn(e, t * 2) - t);
  },
  smoothstep: function (e, t, n) {
    if (e <= t) {
      return 0;
    } else if (e >= n) {
      return 1;
    } else {
      return (e = (e - t) / (n - t)) * e * (3 - e * 2);
    }
  },
  smootherstep: function (e, t, n) {
    if (e <= t) {
      return 0;
    } else if (e >= n) {
      return 1;
    } else {
      return (e = (e - t) / (n - t)) * e * e * (e * (e * 6 - 15) + 10);
    }
  },
  randInt: function (e, t) {
    return e + Math.floor(Math.random() * (t - e + 1));
  },
  randFloat: function (e, t) {
    return e + Math.random() * (t - e);
  },
  randFloatSpread: function (e) {
    return e * (0.5 - Math.random());
  },
  seededRandom: function (e) {
    if (e !== undefined) {
      dn = e;
    }
    let t = dn += 1831565813;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  },
  degToRad: function (e) {
    return e * un;
  },
  radToDeg: function (e) {
    return e * a55;
  },
  isPowerOfTwo: function (e) {
    return !(e & e - 1) && e !== 0;
  },
  ceilPowerOfTwo: function (e) {
    return Math.pow(2, Math.ceil(Math.log(e) / Math.LN2));
  },
  floorPowerOfTwo: function (e) {
    return Math.pow(2, Math.floor(Math.log(e) / Math.LN2));
  },
  setQuaternionFromProperEuler: function (e, t, n, i, r) {
    const a = Math.cos;
    const s = Math.sin;
    const o = a(n / 2);
    const l = s(n / 2);
    const c = a((t + i) / 2);
    const h = s((t + i) / 2);
    const d = a((t - i) / 2);
    const u = s((t - i) / 2);
    const f = a((i - t) / 2);
    const p = s((i - t) / 2);
    switch (r) {
      case "XYX":
        e.set(o * h, l * d, l * u, o * c);
        break;
      case "YZY":
        e.set(l * u, o * h, l * d, o * c);
        break;
      case "ZXZ":
        e.set(l * d, l * u, o * h, o * c);
        break;
      case "XZX":
        e.set(o * h, l * p, l * f, o * c);
        break;
      case "YXY":
        e.set(l * f, o * h, l * p, o * c);
        break;
      case "ZYZ":
        e.set(l * p, l * f, o * h, o * c);
        break;
      default:
        R8M("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r);
    }
  },
  normalize: bn,
  denormalize: vn
};
export class I9Y {
  constructor(e = 0, t = 0) {
    I9Y.prototype.isVector2 = true;
    this.x = e;
    this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    this.x = e;
    this.y = t;
    return this;
  }
  setScalar(e) {
    this.x = e;
    this.y = e;
    return this;
  }
  setX(e) {
    this.x = e;
    return this;
  }
  setY(e) {
    this.y = e;
    return this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    this.x = e.x;
    this.y = e.y;
    return this;
  }
  add(e) {
    this.x += e.x;
    this.y += e.y;
    return this;
  }
  addScalar(e) {
    this.x += e;
    this.y += e;
    return this;
  }
  addVectors(e, t) {
    this.x = e.x + t.x;
    this.y = e.y + t.y;
    return this;
  }
  addScaledVector(e, t) {
    this.x += e.x * t;
    this.y += e.y * t;
    return this;
  }
  sub(e) {
    this.x -= e.x;
    this.y -= e.y;
    return this;
  }
  subScalar(e) {
    this.x -= e;
    this.y -= e;
    return this;
  }
  subVectors(e, t) {
    this.x = e.x - t.x;
    this.y = e.y - t.y;
    return this;
  }
  multiply(e) {
    this.x *= e.x;
    this.y *= e.y;
    return this;
  }
  multiplyScalar(e) {
    this.x *= e;
    this.y *= e;
    return this;
  }
  divide(e) {
    this.x /= e.x;
    this.y /= e.y;
    return this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x;
    const n = this.y;
    const i = e.elements;
    this.x = i[0] * t + i[3] * n + i[6];
    this.y = i[1] * t + i[4] * n + i[7];
    return this;
  }
  min(e) {
    this.x = Math.min(this.x, e.x);
    this.y = Math.min(this.y, e.y);
    return this;
  }
  max(e) {
    this.x = Math.max(this.x, e.x);
    this.y = Math.max(this.y, e.y);
    return this;
  }
  clamp(e, t) {
    this.x = gn(this.x, e.x, t.x);
    this.y = gn(this.y, e.y, t.y);
    return this;
  }
  clampScalar(e, t) {
    this.x = gn(this.x, e, t);
    this.y = gn(this.y, e, t);
    return this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(gn(n, e, t));
  }
  floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  }
  ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  }
  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  }
  roundToZero() {
    this.x = Math.trunc(this.x);
    this.y = Math.trunc(this.y);
    return this;
  }
  negate() {
    this.x = -this.x;
    this.y = -this.y;
    return this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) {
      return Math.PI / 2;
    }
    const n = this.dot(e) / t;
    return Math.acos(gn(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x;
    const n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    this.x += (e.x - this.x) * t;
    this.y += (e.y - this.y) * t;
    return this;
  }
  lerpVectors(e, t, n) {
    this.x = e.x + (t.x - e.x) * n;
    this.y = e.y + (t.y - e.y) * n;
    return this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    this.x = e[t];
    this.y = e[t + 1];
    return this;
  }
  toArray(e = [], t = 0) {
    e[t] = this.x;
    e[t + 1] = this.y;
    return e;
  }
  fromBufferAttribute(e, t) {
    this.x = e.getX(t);
    this.y = e.getY(t);
    return this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t);
    const i = Math.sin(t);
    const r = this.x - e.x;
    const a = this.y - e.y;
    this.x = r * n - a * i + e.x;
    this.y = r * i + a * n + e.y;
    return this;
  }
  random() {
    this.x = Math.random();
    this.y = Math.random();
    return this;
  }
  *[Symbol.iterator]() {
    yield this.x;
    yield this.y;
  }
}
export class PTz {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = true;
    this._x = e;
    this._y = t;
    this._z = n;
    this._w = i;
  }
  static slerpFlat(e, t, n, i, r, a, s) {
    let o = n[i + 0];
    let l = n[i + 1];
    let c = n[i + 2];
    let h = n[i + 3];
    let d = r[a + 0];
    let u = r[a + 1];
    let f = r[a + 2];
    let p = r[a + 3];
    if (s <= 0) {
      e[t + 0] = o;
      e[t + 1] = l;
      e[t + 2] = c;
      e[t + 3] = h;
      return;
    }
    if (s >= 1) {
      e[t + 0] = d;
      e[t + 1] = u;
      e[t + 2] = f;
      e[t + 3] = p;
      return;
    }
    if (h !== p || o !== d || l !== u || c !== f) {
      let e = o * d + l * u + c * f + h * p;
      if (e < 0) {
        d = -d;
        u = -u;
        f = -f;
        p = -p;
        e = -e;
      }
      let t = 1 - s;
      if (e < 0.9995) {
        const n = Math.acos(e);
        const i = Math.sin(n);
        t = Math.sin(t * n) / i;
        o = o * t + d * (s = Math.sin(s * n) / i);
        l = l * t + u * s;
        c = c * t + f * s;
        h = h * t + p * s;
      } else {
        o = o * t + d * s;
        l = l * t + u * s;
        c = c * t + f * s;
        h = h * t + p * s;
        const e = 1 / Math.sqrt(o * o + l * l + c * c + h * h);
        o *= e;
        l *= e;
        c *= e;
        h *= e;
      }
    }
    e[t] = o;
    e[t + 1] = l;
    e[t + 2] = c;
    e[t + 3] = h;
  }
  static multiplyQuaternionsFlat(e, t, n, i, r, a) {
    const s = n[i];
    const o = n[i + 1];
    const l = n[i + 2];
    const c = n[i + 3];
    const h = r[a];
    const d = r[a + 1];
    const u = r[a + 2];
    const f = r[a + 3];
    e[t] = s * f + c * h + o * u - l * d;
    e[t + 1] = o * f + c * d + l * h - s * u;
    e[t + 2] = l * f + c * u + s * d - o * h;
    e[t + 3] = c * f - s * h - o * d - l * u;
    return e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e;
    this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e;
    this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e;
    this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e;
    this._onChangeCallback();
  }
  set(e, t, n, i) {
    this._x = e;
    this._y = t;
    this._z = n;
    this._w = i;
    this._onChangeCallback();
    return this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    this._x = e.x;
    this._y = e.y;
    this._z = e.z;
    this._w = e.w;
    this._onChangeCallback();
    return this;
  }
  setFromEuler(e, t = true) {
    const n = e._x;
    const i = e._y;
    const r = e._z;
    const a = e._order;
    const s = Math.cos;
    const o = Math.sin;
    const l = s(n / 2);
    const c = s(i / 2);
    const h = s(r / 2);
    const d = o(n / 2);
    const u = o(i / 2);
    const f = o(r / 2);
    switch (a) {
      case "XYZ":
        this._x = d * c * h + l * u * f;
        this._y = l * u * h - d * c * f;
        this._z = l * c * f + d * u * h;
        this._w = l * c * h - d * u * f;
        break;
      case "YXZ":
        this._x = d * c * h + l * u * f;
        this._y = l * u * h - d * c * f;
        this._z = l * c * f - d * u * h;
        this._w = l * c * h + d * u * f;
        break;
      case "ZXY":
        this._x = d * c * h - l * u * f;
        this._y = l * u * h + d * c * f;
        this._z = l * c * f + d * u * h;
        this._w = l * c * h - d * u * f;
        break;
      case "ZYX":
        this._x = d * c * h - l * u * f;
        this._y = l * u * h + d * c * f;
        this._z = l * c * f - d * u * h;
        this._w = l * c * h + d * u * f;
        break;
      case "YZX":
        this._x = d * c * h + l * u * f;
        this._y = l * u * h + d * c * f;
        this._z = l * c * f - d * u * h;
        this._w = l * c * h - d * u * f;
        break;
      case "XZY":
        this._x = d * c * h - l * u * f;
        this._y = l * u * h - d * c * f;
        this._z = l * c * f + d * u * h;
        this._w = l * c * h + d * u * f;
        break;
      default:
        R8M("Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    if (t === true) {
      this._onChangeCallback();
    }
    return this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2;
    const i = Math.sin(n);
    this._x = e.x * i;
    this._y = e.y * i;
    this._z = e.z * i;
    this._w = Math.cos(n);
    this._onChangeCallback();
    return this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements;
    const n = t[0];
    const i = t[4];
    const r = t[8];
    const a = t[1];
    const s = t[5];
    const o = t[9];
    const l = t[2];
    const c = t[6];
    const h = t[10];
    const d = n + s + h;
    if (d > 0) {
      const e = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / e;
      this._x = (c - o) * e;
      this._y = (r - l) * e;
      this._z = (a - i) * e;
    } else if (n > s && n > h) {
      const e = Math.sqrt(1 + n - s - h) * 2;
      this._w = (c - o) / e;
      this._x = e * 0.25;
      this._y = (i + a) / e;
      this._z = (r + l) / e;
    } else if (s > h) {
      const e = Math.sqrt(1 + s - n - h) * 2;
      this._w = (r - l) / e;
      this._x = (i + a) / e;
      this._y = e * 0.25;
      this._z = (o + c) / e;
    } else {
      const e = Math.sqrt(1 + h - n - s) * 2;
      this._w = (a - i) / e;
      this._x = (r + l) / e;
      this._y = (o + c) / e;
      this._z = e * 0.25;
    }
    this._onChangeCallback();
    return this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    if (n < 1e-8) {
      n = 0;
      if (Math.abs(e.x) > Math.abs(e.z)) {
        this._x = -e.y;
        this._y = e.x;
        this._z = 0;
        this._w = n;
      } else {
        this._x = 0;
        this._y = -e.z;
        this._z = e.y;
        this._w = n;
      }
    } else {
      this._x = e.y * t.z - e.z * t.y;
      this._y = e.z * t.x - e.x * t.z;
      this._z = e.x * t.y - e.y * t.x;
      this._w = n;
    }
    return this.normalize();
  }
  angleTo(e) {
    return Math.acos(Math.abs(gn(this.dot(e), -1, 1))) * 2;
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) {
      return this;
    }
    const i = Math.min(1, t / n);
    this.slerp(e, i);
    return this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    this._x *= -1;
    this._y *= -1;
    this._z *= -1;
    this._onChangeCallback();
    return this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    if (e === 0) {
      this._x = 0;
      this._y = 0;
      this._z = 0;
      this._w = 1;
    } else {
      e = 1 / e;
      this._x = this._x * e;
      this._y = this._y * e;
      this._z = this._z * e;
      this._w = this._w * e;
    }
    this._onChangeCallback();
    return this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x;
    const i = e._y;
    const r = e._z;
    const a = e._w;
    const s = t._x;
    const o = t._y;
    const l = t._z;
    const c = t._w;
    this._x = n * c + a * s + i * l - r * o;
    this._y = i * c + a * o + r * s - n * l;
    this._z = r * c + a * l + n * o - i * s;
    this._w = a * c - n * s - i * o - r * l;
    this._onChangeCallback();
    return this;
  }
  slerp(e, t) {
    if (t <= 0) {
      return this;
    }
    if (t >= 1) {
      return this.copy(e);
    }
    let n = e._x;
    let i = e._y;
    let r = e._z;
    let a = e._w;
    let s = this.dot(e);
    if (s < 0) {
      n = -n;
      i = -i;
      r = -r;
      a = -a;
      s = -s;
    }
    let o = 1 - t;
    if (s < 0.9995) {
      const e = Math.acos(s);
      const l = Math.sin(e);
      o = Math.sin(o * e) / l;
      t = Math.sin(t * e) / l;
      this._x = this._x * o + n * t;
      this._y = this._y * o + i * t;
      this._z = this._z * o + r * t;
      this._w = this._w * o + a * t;
      this._onChangeCallback();
    } else {
      this._x = this._x * o + n * t;
      this._y = this._y * o + i * t;
      this._z = this._z * o + r * t;
      this._w = this._w * o + a * t;
      this.normalize();
    }
    return this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.PI * 2 * Math.random();
    const t = Math.PI * 2 * Math.random();
    const n = Math.random();
    const i = Math.sqrt(1 - n);
    const r = Math.sqrt(n);
    return this.set(i * Math.sin(e), i * Math.cos(e), r * Math.sin(t), r * Math.cos(t));
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    this._x = e[t];
    this._y = e[t + 1];
    this._z = e[t + 2];
    this._w = e[t + 3];
    this._onChangeCallback();
    return this;
  }
  toArray(e = [], t = 0) {
    e[t] = this._x;
    e[t + 1] = this._y;
    e[t + 2] = this._z;
    e[t + 3] = this._w;
    return e;
  }
  fromBufferAttribute(e, t) {
    this._x = e.getX(t);
    this._y = e.getY(t);
    this._z = e.getZ(t);
    this._w = e.getW(t);
    this._onChangeCallback();
    return this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    this._onChangeCallback = e;
    return this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x;
    yield this._y;
    yield this._z;
    yield this._w;
  }
}
export class Pq0 {
  constructor(e = 0, t = 0, n = 0) {
    Pq0.prototype.isVector3 = true;
    this.x = e;
    this.y = t;
    this.z = n;
  }
  set(e, t, n = this.z) {
    this.x = e;
    this.y = t;
    this.z = n;
    return this;
  }
  setScalar(e) {
    this.x = e;
    this.y = e;
    this.z = e;
    return this;
  }
  setX(e) {
    this.x = e;
    return this;
  }
  setY(e) {
    this.y = e;
    return this;
  }
  setZ(e) {
    this.z = e;
    return this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    this.x = e.x;
    this.y = e.y;
    this.z = e.z;
    return this;
  }
  add(e) {
    this.x += e.x;
    this.y += e.y;
    this.z += e.z;
    return this;
  }
  addScalar(e) {
    this.x += e;
    this.y += e;
    this.z += e;
    return this;
  }
  addVectors(e, t) {
    this.x = e.x + t.x;
    this.y = e.y + t.y;
    this.z = e.z + t.z;
    return this;
  }
  addScaledVector(e, t) {
    this.x += e.x * t;
    this.y += e.y * t;
    this.z += e.z * t;
    return this;
  }
  sub(e) {
    this.x -= e.x;
    this.y -= e.y;
    this.z -= e.z;
    return this;
  }
  subScalar(e) {
    this.x -= e;
    this.y -= e;
    this.z -= e;
    return this;
  }
  subVectors(e, t) {
    this.x = e.x - t.x;
    this.y = e.y - t.y;
    this.z = e.z - t.z;
    return this;
  }
  multiply(e) {
    this.x *= e.x;
    this.y *= e.y;
    this.z *= e.z;
    return this;
  }
  multiplyScalar(e) {
    this.x *= e;
    this.y *= e;
    this.z *= e;
    return this;
  }
  multiplyVectors(e, t) {
    this.x = e.x * t.x;
    this.y = e.y * t.y;
    this.z = e.z * t.z;
    return this;
  }
  applyEuler(e) {
    return this.applyQuaternion(Tn.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Tn.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x;
    const n = this.y;
    const i = this.z;
    const r = e.elements;
    this.x = r[0] * t + r[3] * n + r[6] * i;
    this.y = r[1] * t + r[4] * n + r[7] * i;
    this.z = r[2] * t + r[5] * n + r[8] * i;
    return this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x;
    const n = this.y;
    const i = this.z;
    const r = e.elements;
    const a = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
    this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * a;
    this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * a;
    this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * a;
    return this;
  }
  applyQuaternion(e) {
    const t = this.x;
    const n = this.y;
    const i = this.z;
    const r = e.x;
    const a = e.y;
    const s = e.z;
    const o = e.w;
    const l = (a * i - s * n) * 2;
    const c = (s * t - r * i) * 2;
    const h = (r * n - a * t) * 2;
    this.x = t + o * l + a * h - s * c;
    this.y = n + o * c + s * l - r * h;
    this.z = i + o * h + r * c - a * l;
    return this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x;
    const n = this.y;
    const i = this.z;
    const r = e.elements;
    this.x = r[0] * t + r[4] * n + r[8] * i;
    this.y = r[1] * t + r[5] * n + r[9] * i;
    this.z = r[2] * t + r[6] * n + r[10] * i;
    return this.normalize();
  }
  divide(e) {
    this.x /= e.x;
    this.y /= e.y;
    this.z /= e.z;
    return this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    this.x = Math.min(this.x, e.x);
    this.y = Math.min(this.y, e.y);
    this.z = Math.min(this.z, e.z);
    return this;
  }
  max(e) {
    this.x = Math.max(this.x, e.x);
    this.y = Math.max(this.y, e.y);
    this.z = Math.max(this.z, e.z);
    return this;
  }
  clamp(e, t) {
    this.x = gn(this.x, e.x, t.x);
    this.y = gn(this.y, e.y, t.y);
    this.z = gn(this.z, e.z, t.z);
    return this;
  }
  clampScalar(e, t) {
    this.x = gn(this.x, e, t);
    this.y = gn(this.y, e, t);
    this.z = gn(this.z, e, t);
    return this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(gn(n, e, t));
  }
  floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    this.z = Math.floor(this.z);
    return this;
  }
  ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    this.z = Math.ceil(this.z);
    return this;
  }
  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    this.z = Math.round(this.z);
    return this;
  }
  roundToZero() {
    this.x = Math.trunc(this.x);
    this.y = Math.trunc(this.y);
    this.z = Math.trunc(this.z);
    return this;
  }
  negate() {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    return this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    this.x += (e.x - this.x) * t;
    this.y += (e.y - this.y) * t;
    this.z += (e.z - this.z) * t;
    return this;
  }
  lerpVectors(e, t, n) {
    this.x = e.x + (t.x - e.x) * n;
    this.y = e.y + (t.y - e.y) * n;
    this.z = e.z + (t.z - e.z) * n;
    return this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x;
    const i = e.y;
    const r = e.z;
    const a = t.x;
    const s = t.y;
    const o = t.z;
    this.x = i * o - r * s;
    this.y = r * a - n * o;
    this.z = n * s - i * a;
    return this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) {
      return this.set(0, 0, 0);
    }
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    kn.copy(this).projectOnVector(e);
    return this.sub(kn);
  }
  reflect(e) {
    return this.sub(kn.copy(e).multiplyScalar(this.dot(e) * 2));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) {
      return Math.PI / 2;
    }
    const n = this.dot(e) / t;
    return Math.acos(gn(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x;
    const n = this.y - e.y;
    const i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    this.x = i * Math.sin(n);
    this.y = Math.cos(t) * e;
    this.z = i * Math.cos(n);
    return this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    this.x = e * Math.sin(t);
    this.y = n;
    this.z = e * Math.cos(t);
    return this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    this.x = t[12];
    this.y = t[13];
    this.z = t[14];
    return this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length();
    const n = this.setFromMatrixColumn(e, 1).length();
    const i = this.setFromMatrixColumn(e, 2).length();
    this.x = t;
    this.y = n;
    this.z = i;
    return this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    this.x = e._x;
    this.y = e._y;
    this.z = e._z;
    return this;
  }
  setFromColor(e) {
    this.x = e.r;
    this.y = e.g;
    this.z = e.b;
    return this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    this.x = e[t];
    this.y = e[t + 1];
    this.z = e[t + 2];
    return this;
  }
  toArray(e = [], t = 0) {
    e[t] = this.x;
    e[t + 1] = this.y;
    e[t + 2] = this.z;
    return e;
  }
  fromBufferAttribute(e, t) {
    this.x = e.getX(t);
    this.y = e.getY(t);
    this.z = e.getZ(t);
    return this;
  }
  random() {
    this.x = Math.random();
    this.y = Math.random();
    this.z = Math.random();
    return this;
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2;
    const t = Math.random() * 2 - 1;
    const n = Math.sqrt(1 - t * t);
    this.x = n * Math.cos(e);
    this.y = t;
    this.z = n * Math.sin(e);
    return this;
  }
  *[Symbol.iterator]() {
    yield this.x;
    yield this.y;
    yield this.z;
  }
}
const kn = new Pq0();
const Tn = new PTz();
export class dwI {
  constructor(e, t, n, i, r, a, s, o, l) {
    dwI.prototype.isMatrix3 = true;
    this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1];
    if (e !== undefined) {
      this.set(e, t, n, i, r, a, s, o, l);
    }
  }
  set(e, t, n, i, r, a, s, o, l) {
    const c = this.elements;
    c[0] = e;
    c[1] = i;
    c[2] = s;
    c[3] = t;
    c[4] = r;
    c[5] = o;
    c[6] = n;
    c[7] = a;
    c[8] = l;
    return this;
  }
  identity() {
    this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
    return this;
  }
  copy(e) {
    const t = this.elements;
    const n = e.elements;
    t[0] = n[0];
    t[1] = n[1];
    t[2] = n[2];
    t[3] = n[3];
    t[4] = n[4];
    t[5] = n[5];
    t[6] = n[6];
    t[7] = n[7];
    t[8] = n[8];
    return this;
  }
  extractBasis(e, t, n) {
    e.setFromMatrix3Column(this, 0);
    t.setFromMatrix3Column(this, 1);
    n.setFromMatrix3Column(this, 2);
    return this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]);
    return this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements;
    const i = t.elements;
    const r = this.elements;
    const a = n[0];
    const s = n[3];
    const o = n[6];
    const l = n[1];
    const c = n[4];
    const h = n[7];
    const d = n[2];
    const u = n[5];
    const f = n[8];
    const p = i[0];
    const g = i[3];
    const m = i[6];
    const A = i[1];
    const v = i[4];
    const b = i[7];
    const y = i[2];
    const w = i[5];
    const x = i[8];
    r[0] = a * p + s * A + o * y;
    r[3] = a * g + s * v + o * w;
    r[6] = a * m + s * b + o * x;
    r[1] = l * p + c * A + h * y;
    r[4] = l * g + c * v + h * w;
    r[7] = l * m + c * b + h * x;
    r[2] = d * p + u * A + f * y;
    r[5] = d * g + u * v + f * w;
    r[8] = d * m + u * b + f * x;
    return this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    t[0] *= e;
    t[3] *= e;
    t[6] *= e;
    t[1] *= e;
    t[4] *= e;
    t[7] *= e;
    t[2] *= e;
    t[5] *= e;
    t[8] *= e;
    return this;
  }
  determinant() {
    const e = this.elements;
    const t = e[0];
    const n = e[1];
    const i = e[2];
    const r = e[3];
    const a = e[4];
    const s = e[5];
    const o = e[6];
    const l = e[7];
    const c = e[8];
    return t * a * c - t * s * l - n * r * c + n * s * o + i * r * l - i * a * o;
  }
  invert() {
    const e = this.elements;
    const t = e[0];
    const n = e[1];
    const i = e[2];
    const r = e[3];
    const a = e[4];
    const s = e[5];
    const o = e[6];
    const l = e[7];
    const c = e[8];
    const h = c * a - s * l;
    const d = s * o - c * r;
    const u = l * r - a * o;
    const f = t * h + n * d + i * u;
    if (f === 0) {
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
    const p = 1 / f;
    e[0] = h * p;
    e[1] = (i * l - c * n) * p;
    e[2] = (s * n - i * a) * p;
    e[3] = d * p;
    e[4] = (c * t - i * o) * p;
    e[5] = (i * r - s * t) * p;
    e[6] = u * p;
    e[7] = (n * o - l * t) * p;
    e[8] = (a * t - n * r) * p;
    return this;
  }
  transpose() {
    let e;
    const t = this.elements;
    e = t[1];
    t[1] = t[3];
    t[3] = e;
    e = t[2];
    t[2] = t[6];
    t[6] = e;
    e = t[5];
    t[5] = t[7];
    t[7] = e;
    return this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    e[0] = t[0];
    e[1] = t[3];
    e[2] = t[6];
    e[3] = t[1];
    e[4] = t[4];
    e[5] = t[7];
    e[6] = t[2];
    e[7] = t[5];
    e[8] = t[8];
    return this;
  }
  setUvTransform(e, t, n, i, r, a, s) {
    const o = Math.cos(r);
    const l = Math.sin(r);
    this.set(n * o, n * l, -n * (o * a + l * s) + a + e, -i * l, i * o, -i * (-l * a + o * s) + s + t, 0, 0, 1);
    return this;
  }
  scale(e, t) {
    this.premultiply(Mn.makeScale(e, t));
    return this;
  }
  rotate(e) {
    this.premultiply(Mn.makeRotation(-e));
    return this;
  }
  translate(e, t) {
    this.premultiply(Mn.makeTranslation(e, t));
    return this;
  }
  makeTranslation(e, t) {
    if (e.isVector2) {
      this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1);
    } else {
      this.set(1, 0, e, 0, 1, t, 0, 0, 1);
    }
    return this;
  }
  makeRotation(e) {
    const t = Math.cos(e);
    const n = Math.sin(e);
    this.set(t, -n, 0, n, t, 0, 0, 0, 1);
    return this;
  }
  makeScale(e, t) {
    this.set(e, 0, 0, 0, t, 0, 0, 0, 1);
    return this;
  }
  equals(e) {
    const t = this.elements;
    const n = e.elements;
    for (let e = 0; e < 9; e++) {
      if (t[e] !== n[e]) {
        return false;
      }
    }
    return true;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) {
      this.elements[n] = e[n + t];
    }
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    e[t] = n[0];
    e[t + 1] = n[1];
    e[t + 2] = n[2];
    e[t + 3] = n[3];
    e[t + 4] = n[4];
    e[t + 5] = n[5];
    e[t + 6] = n[6];
    e[t + 7] = n[7];
    e[t + 8] = n[8];
    return e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Mn = new dwI();
const _n = new dwI().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322);
const Cn = new dwI().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
function Rn() {
  const e = {
    enabled: true,
    workingColorSpace: Zr2,
    spaces: {},
    convert: function (e, t, n) {
      if (this.enabled !== false && t !== n && t && n) {
        if (this.spaces[t].transfer === KLL) {
          e.r = In(e.r);
          e.g = In(e.g);
          e.b = In(e.b);
        }
        if (this.spaces[t].primaries !== this.spaces[n].primaries) {
          e.applyMatrix3(this.spaces[t].toXYZ);
          e.applyMatrix3(this.spaces[n].fromXYZ);
        }
        if (this.spaces[n].transfer === KLL) {
          e.r = Ln(e.r);
          e.g = Ln(e.g);
          e.b = Ln(e.b);
        }
        return e;
      } else {
        return e;
      }
    },
    workingToColorSpace: function (e, t) {
      return this.convert(e, this.workingColorSpace, t);
    },
    colorSpaceToWorking: function (e, t) {
      return this.convert(e, t, this.workingColorSpace);
    },
    getPrimaries: function (e) {
      return this.spaces[e].primaries;
    },
    getTransfer: function (e) {
      if (e === jf0) {
        return VxR;
      } else {
        return this.spaces[e].transfer;
      }
    },
    getToneMappingMode: function (e) {
      return this.spaces[e].outputColorSpaceConfig.toneMappingMode || "standard";
    },
    getLuminanceCoefficients: function (e, t = this.workingColorSpace) {
      return e.fromArray(this.spaces[t].luminanceCoefficients);
    },
    define: function (e) {
      Object.assign(this.spaces, e);
    },
    _getMatrix: function (e, t, n) {
      return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ);
    },
    _getDrawingBufferColorSpace: function (e) {
      return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace;
    },
    _getUnpackColorSpace: function (e = this.workingColorSpace) {
      return this.spaces[e].workingColorSpaceConfig.unpackColorSpace;
    },
    fromWorkingColorSpace: function (t, n) {
      mcG("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().");
      return e.workingToColorSpace(t, n);
    },
    toWorkingColorSpace: function (t, n) {
      mcG("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().");
      return e.colorSpaceToWorking(t, n);
    }
  };
  const t = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06];
  const n = [0.2126, 0.7152, 0.0722];
  const i = [0.3127, 0.329];
  e.define({
    [Zr2]: {
      primaries: t,
      whitePoint: i,
      transfer: VxR,
      toXYZ: _n,
      fromXYZ: Cn,
      luminanceCoefficients: n,
      workingColorSpaceConfig: {
        unpackColorSpace: er$
      },
      outputColorSpaceConfig: {
        drawingBufferColorSpace: er$
      }
    },
    [er$]: {
      primaries: t,
      whitePoint: i,
      transfer: KLL,
      toXYZ: _n,
      fromXYZ: Cn,
      luminanceCoefficients: n,
      outputColorSpaceConfig: {
        drawingBufferColorSpace: er$
      }
    }
  });
  return e;
}
export const ppV = Rn();
function In(e) {
  if (e < 0.04045) {
    return e * 0.0773993808;
  } else {
    return Math.pow(e * 0.9478672986 + 0.0521327014, 2.4);
  }
}
function Ln(e) {
  if (e < 0.0031308) {
    return e * 12.92;
  } else {
    return Math.pow(e, 0.41666) * 1.055 - 0.055;
  }
}
let Un;
class Nn {
  static getDataURL(e, t = "image/png") {
    if (/^data:/i.test(e.src)) {
      return e.src;
    }
    if (typeof HTMLCanvasElement == "undefined") {
      return e.src;
    }
    let n;
    if (e instanceof HTMLCanvasElement) {
      n = e;
    } else {
      if (Un === undefined) {
        Un = qq$("canvas");
      }
      Un.width = e.width;
      Un.height = e.height;
      const t = Un.getContext("2d");
      if (e instanceof ImageData) {
        t.putImageData(e, 0, 0);
      } else {
        t.drawImage(e, 0, 0, e.width, e.height);
      }
      n = Un;
    }
    return n.toDataURL(t);
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement != "undefined" && e instanceof HTMLImageElement || typeof HTMLCanvasElement != "undefined" && e instanceof HTMLCanvasElement || typeof ImageBitmap != "undefined" && e instanceof ImageBitmap) {
      const t = qq$("canvas");
      t.width = e.width;
      t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height);
      const r = i.data;
      for (let e = 0; e < r.length; e++) {
        r[e] = In(r[e] / 255) * 255;
      }
      n.putImageData(i, 0, 0);
      return t;
    }
    if (e.data) {
      const t = e.data.slice(0);
      for (let e = 0; e < t.length; e++) {
        if (t instanceof Uint8Array || t instanceof Uint8ClampedArray) {
          t[e] = Math.floor(In(t[e] / 255) * 255);
        } else {
          t[e] = In(t[e]);
        }
      }
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    }
    R8M("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.");
    return e;
  }
}
let zn = 0;
class Dn {
  constructor(e = null) {
    this.isSource = true;
    Object.defineProperty(this, "id", {
      value: zn++
    });
    this.uuid = pn();
    this.data = e;
    this.dataReady = true;
    this.version = 0;
  }
  getSize(e) {
    const t = this.data;
    if (typeof HTMLVideoElement != "undefined" && t instanceof HTMLVideoElement) {
      e.set(t.videoWidth, t.videoHeight, 0);
    } else if (t instanceof VideoFrame) {
      e.set(t.displayHeight, t.displayWidth, 0);
    } else if (t !== null) {
      e.set(t.width, t.height, t.depth || 0);
    } else {
      e.set(0, 0, 0);
    }
    return e;
  }
  set needsUpdate(e) {
    if (e === true) {
      this.version++;
    }
  }
  toJSON(e) {
    const t = e === undefined || typeof e == "string";
    if (!t && e.images[this.uuid] !== undefined) {
      return e.images[this.uuid];
    }
    const n = {
      uuid: this.uuid,
      url: ""
    };
    const i = this.data;
    if (i !== null) {
      let e;
      if (Array.isArray(i)) {
        e = [];
        for (let t = 0, n = i.length; t < n; t++) {
          if (i[t].isDataTexture) {
            e.push(Bn(i[t].image));
          } else {
            e.push(Bn(i[t]));
          }
        }
      } else {
        e = Bn(i);
      }
      n.url = e;
    }
    if (!t) {
      e.images[this.uuid] = n;
    }
    return n;
  }
}
function Bn(e) {
  if (typeof HTMLImageElement != "undefined" && e instanceof HTMLImageElement || typeof HTMLCanvasElement != "undefined" && e instanceof HTMLCanvasElement || typeof ImageBitmap != "undefined" && e instanceof ImageBitmap) {
    return Nn.getDataURL(e);
  } else if (e.data) {
    return {
      data: Array.from(e.data),
      width: e.width,
      height: e.height,
      type: e.data.constructor.name
    };
  } else {
    R8M("Texture: Unable to serialize Texture.");
    return {};
  }
}
let Gn = 0;
const _Fn = new Pq0();
export class gPd extends Qev {
  constructor(e = gPd.DEFAULT_IMAGE, t = gPd.DEFAULT_MAPPING, n = ghU, i = ghU, r = k6q, a = $_I, s = GWd, o = OUM, l = gPd.DEFAULT_ANISOTROPY, c = jf0) {
    super();
    this.isTexture = true;
    Object.defineProperty(this, "id", {
      value: Gn++
    });
    this.uuid = pn();
    this.name = "";
    this.source = new Dn(e);
    this.mipmaps = [];
    this.mapping = t;
    this.channel = 0;
    this.wrapS = n;
    this.wrapT = i;
    this.magFilter = r;
    this.minFilter = a;
    this.anisotropy = l;
    this.format = s;
    this.internalFormat = null;
    this.type = o;
    this.offset = new I9Y(0, 0);
    this.repeat = new I9Y(1, 1);
    this.center = new I9Y(0, 0);
    this.rotation = 0;
    this.matrixAutoUpdate = true;
    this.matrix = new dwI();
    this.generateMipmaps = true;
    this.premultiplyAlpha = false;
    this.flipY = true;
    this.unpackAlignment = 4;
    this.colorSpace = c;
    this.userData = {};
    this.updateRanges = [];
    this.version = 0;
    this.onUpdate = null;
    this.renderTarget = null;
    this.isRenderTargetTexture = false;
    this.isArrayTexture = !!e && !!e.depth && !!(e.depth > 1);
    this.pmremVersion = 0;
  }
  get width() {
    return this.source.getSize(_Fn).x;
  }
  get height() {
    return this.source.getSize(_Fn).y;
  }
  get depth() {
    return this.source.getSize(_Fn).z;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({
      start: e,
      count: t
    });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name;
    this.source = e.source;
    this.mipmaps = e.mipmaps.slice(0);
    this.mapping = e.mapping;
    this.channel = e.channel;
    this.wrapS = e.wrapS;
    this.wrapT = e.wrapT;
    this.magFilter = e.magFilter;
    this.minFilter = e.minFilter;
    this.anisotropy = e.anisotropy;
    this.format = e.format;
    this.internalFormat = e.internalFormat;
    this.type = e.type;
    this.offset.copy(e.offset);
    this.repeat.copy(e.repeat);
    this.center.copy(e.center);
    this.rotation = e.rotation;
    this.matrixAutoUpdate = e.matrixAutoUpdate;
    this.matrix.copy(e.matrix);
    this.generateMipmaps = e.generateMipmaps;
    this.premultiplyAlpha = e.premultiplyAlpha;
    this.flipY = e.flipY;
    this.unpackAlignment = e.unpackAlignment;
    this.colorSpace = e.colorSpace;
    this.renderTarget = e.renderTarget;
    this.isRenderTargetTexture = e.isRenderTargetTexture;
    this.isArrayTexture = e.isArrayTexture;
    this.userData = JSON.parse(JSON.stringify(e.userData));
    this.needsUpdate = true;
    return this;
  }
  setValues(e) {
    for (const t in e) {
      const n = e[t];
      if (n === undefined) {
        R8M(`Texture.setValues(): parameter '${t}' has value of undefined.`);
        continue;
      }
      const i = this[t];
      if (i !== undefined) {
        if (i && n && i.isVector2 && n.isVector2 || i && n && i.isVector3 && n.isVector3 || i && n && i.isMatrix3 && n.isMatrix3) {
          i.copy(n);
        } else {
          this[t] = n;
        }
      } else {
        R8M(`Texture.setValues(): property '${t}' does not exist.`);
      }
    }
  }
  toJSON(e) {
    const t = e === undefined || typeof e == "string";
    if (!t && e.textures[this.uuid] !== undefined) {
      return e.textures[this.uuid];
    }
    const n = {
      metadata: {
        version: 4.7,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    if (Object.keys(this.userData).length > 0) {
      n.userData = this.userData;
    }
    if (!t) {
      e.textures[this.uuid] = n;
    }
    return n;
  }
  dispose() {
    this.dispatchEvent({
      type: "dispose"
    });
  }
  transformUv(e) {
    if (this.mapping !== 300) {
      return e;
    }
    e.applyMatrix3(this.matrix);
    if (e.x < 0 || e.x > 1) {
      switch (this.wrapS) {
        case GJx:
          e.x = e.x - Math.floor(e.x);
          break;
        case ghU:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case kTW:
          if (Math.abs(Math.floor(e.x) % 2) === 1) {
            e.x = Math.ceil(e.x) - e.x;
          } else {
            e.x = e.x - Math.floor(e.x);
          }
      }
    }
    if (e.y < 0 || e.y > 1) {
      switch (this.wrapT) {
        case GJx:
          e.y = e.y - Math.floor(e.y);
          break;
        case ghU:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case kTW:
          if (Math.abs(Math.floor(e.y) % 2) === 1) {
            e.y = Math.ceil(e.y) - e.y;
          } else {
            e.y = e.y - Math.floor(e.y);
          }
      }
    }
    if (this.flipY) {
      e.y = 1 - e.y;
    }
    return e;
  }
  set needsUpdate(e) {
    if (e === true) {
      this.version++;
      this.source.needsUpdate = true;
    }
  }
  set needsPMREMUpdate(e) {
    if (e === true) {
      this.pmremVersion++;
    }
  }
}
gPd.DEFAULT_IMAGE = null;
gPd.DEFAULT_MAPPING = 300;
gPd.DEFAULT_ANISOTROPY = 1;
export class IUQ {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    IUQ.prototype.isVector4 = true;
    this.x = e;
    this.y = t;
    this.z = n;
    this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    this.x = e;
    this.y = t;
    this.z = n;
    this.w = i;
    return this;
  }
  setScalar(e) {
    this.x = e;
    this.y = e;
    this.z = e;
    this.w = e;
    return this;
  }
  setX(e) {
    this.x = e;
    return this;
  }
  setY(e) {
    this.y = e;
    return this;
  }
  setZ(e) {
    this.z = e;
    return this;
  }
  setW(e) {
    this.w = e;
    return this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    this.x = e.x;
    this.y = e.y;
    this.z = e.z;
    this.w = e.w !== undefined ? e.w : 1;
    return this;
  }
  add(e) {
    this.x += e.x;
    this.y += e.y;
    this.z += e.z;
    this.w += e.w;
    return this;
  }
  addScalar(e) {
    this.x += e;
    this.y += e;
    this.z += e;
    this.w += e;
    return this;
  }
  addVectors(e, t) {
    this.x = e.x + t.x;
    this.y = e.y + t.y;
    this.z = e.z + t.z;
    this.w = e.w + t.w;
    return this;
  }
  addScaledVector(e, t) {
    this.x += e.x * t;
    this.y += e.y * t;
    this.z += e.z * t;
    this.w += e.w * t;
    return this;
  }
  sub(e) {
    this.x -= e.x;
    this.y -= e.y;
    this.z -= e.z;
    this.w -= e.w;
    return this;
  }
  subScalar(e) {
    this.x -= e;
    this.y -= e;
    this.z -= e;
    this.w -= e;
    return this;
  }
  subVectors(e, t) {
    this.x = e.x - t.x;
    this.y = e.y - t.y;
    this.z = e.z - t.z;
    this.w = e.w - t.w;
    return this;
  }
  multiply(e) {
    this.x *= e.x;
    this.y *= e.y;
    this.z *= e.z;
    this.w *= e.w;
    return this;
  }
  multiplyScalar(e) {
    this.x *= e;
    this.y *= e;
    this.z *= e;
    this.w *= e;
    return this;
  }
  applyMatrix4(e) {
    const t = this.x;
    const n = this.y;
    const i = this.z;
    const r = this.w;
    const a = e.elements;
    this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * r;
    this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * r;
    this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * r;
    this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * r;
    return this;
  }
  divide(e) {
    this.x /= e.x;
    this.y /= e.y;
    this.z /= e.z;
    this.w /= e.w;
    return this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = Math.acos(e.w) * 2;
    const t = Math.sqrt(1 - e.w * e.w);
    if (t < 0.0001) {
      this.x = 1;
      this.y = 0;
      this.z = 0;
    } else {
      this.x = e.x / t;
      this.y = e.y / t;
      this.z = e.z / t;
    }
    return this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t;
    let n;
    let i;
    let r;
    const a = 0.01;
    const s = 0.1;
    const o = e.elements;
    const l = o[0];
    const c = o[4];
    const h = o[8];
    const d = o[1];
    const u = o[5];
    const f = o[9];
    const p = o[2];
    const g = o[6];
    const m = o[10];
    if (Math.abs(c - d) < a && Math.abs(h - p) < a && Math.abs(f - g) < a) {
      if (Math.abs(c + d) < s && Math.abs(h + p) < s && Math.abs(f + g) < s && Math.abs(l + u + m - 3) < s) {
        this.set(1, 0, 0, 0);
        return this;
      }
      t = Math.PI;
      const e = (l + 1) / 2;
      const o = (u + 1) / 2;
      const A = (m + 1) / 2;
      const v = (c + d) / 4;
      const b = (h + p) / 4;
      const y = (f + g) / 4;
      if (e > o && e > A) {
        if (e < a) {
          n = 0;
          i = 0.707106781;
          r = 0.707106781;
        } else {
          n = Math.sqrt(e);
          i = v / n;
          r = b / n;
        }
      } else if (o > A) {
        if (o < a) {
          n = 0.707106781;
          i = 0;
          r = 0.707106781;
        } else {
          i = Math.sqrt(o);
          n = v / i;
          r = y / i;
        }
      } else if (A < a) {
        n = 0.707106781;
        i = 0.707106781;
        r = 0;
      } else {
        r = Math.sqrt(A);
        n = b / r;
        i = y / r;
      }
      this.set(n, i, r, t);
      return this;
    }
    let A = Math.sqrt((g - f) * (g - f) + (h - p) * (h - p) + (d - c) * (d - c));
    if (Math.abs(A) < 0.001) {
      A = 1;
    }
    this.x = (g - f) / A;
    this.y = (h - p) / A;
    this.z = (d - c) / A;
    this.w = Math.acos((l + u + m - 1) / 2);
    return this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    this.x = t[12];
    this.y = t[13];
    this.z = t[14];
    this.w = t[15];
    return this;
  }
  min(e) {
    this.x = Math.min(this.x, e.x);
    this.y = Math.min(this.y, e.y);
    this.z = Math.min(this.z, e.z);
    this.w = Math.min(this.w, e.w);
    return this;
  }
  max(e) {
    this.x = Math.max(this.x, e.x);
    this.y = Math.max(this.y, e.y);
    this.z = Math.max(this.z, e.z);
    this.w = Math.max(this.w, e.w);
    return this;
  }
  clamp(e, t) {
    this.x = gn(this.x, e.x, t.x);
    this.y = gn(this.y, e.y, t.y);
    this.z = gn(this.z, e.z, t.z);
    this.w = gn(this.w, e.w, t.w);
    return this;
  }
  clampScalar(e, t) {
    this.x = gn(this.x, e, t);
    this.y = gn(this.y, e, t);
    this.z = gn(this.z, e, t);
    this.w = gn(this.w, e, t);
    return this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(gn(n, e, t));
  }
  floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    this.z = Math.floor(this.z);
    this.w = Math.floor(this.w);
    return this;
  }
  ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    this.z = Math.ceil(this.z);
    this.w = Math.ceil(this.w);
    return this;
  }
  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    this.z = Math.round(this.z);
    this.w = Math.round(this.w);
    return this;
  }
  roundToZero() {
    this.x = Math.trunc(this.x);
    this.y = Math.trunc(this.y);
    this.z = Math.trunc(this.z);
    this.w = Math.trunc(this.w);
    return this;
  }
  negate() {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    this.w = -this.w;
    return this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    this.x += (e.x - this.x) * t;
    this.y += (e.y - this.y) * t;
    this.z += (e.z - this.z) * t;
    this.w += (e.w - this.w) * t;
    return this;
  }
  lerpVectors(e, t, n) {
    this.x = e.x + (t.x - e.x) * n;
    this.y = e.y + (t.y - e.y) * n;
    this.z = e.z + (t.z - e.z) * n;
    this.w = e.w + (t.w - e.w) * n;
    return this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    this.x = e[t];
    this.y = e[t + 1];
    this.z = e[t + 2];
    this.w = e[t + 3];
    return this;
  }
  toArray(e = [], t = 0) {
    e[t] = this.x;
    e[t + 1] = this.y;
    e[t + 2] = this.z;
    e[t + 3] = this.w;
    return e;
  }
  fromBufferAttribute(e, t) {
    this.x = e.getX(t);
    this.y = e.getY(t);
    this.z = e.getZ(t);
    this.w = e.getW(t);
    return this;
  }
  random() {
    this.x = Math.random();
    this.y = Math.random();
    this.z = Math.random();
    this.w = Math.random();
    return this;
  }
  *[Symbol.iterator]() {
    yield this.x;
    yield this.y;
    yield this.z;
    yield this.w;
  }
}
class Vn extends Qev {
  constructor(e = 1, t = 1, n = {}) {
    super();
    n = Object.assign({
      generateMipmaps: false,
      internalFormat: null,
      minFilter: k6q,
      depthBuffer: true,
      stencilBuffer: false,
      resolveDepthBuffer: true,
      resolveStencilBuffer: true,
      depthTexture: null,
      samples: 0,
      count: 1,
      depth: 1,
      multiview: false
    }, n);
    this.isRenderTarget = true;
    this.width = e;
    this.height = t;
    this.depth = n.depth;
    this.scissor = new IUQ(0, 0, e, t);
    this.scissorTest = false;
    this.viewport = new IUQ(0, 0, e, t);
    const i = {
      width: e,
      height: t,
      depth: n.depth
    };
    const r = new gPd(i);
    this.textures = [];
    const a = n.count;
    for (let e = 0; e < a; e++) {
      this.textures[e] = r.clone();
      this.textures[e].isRenderTargetTexture = true;
      this.textures[e].renderTarget = this;
    }
    this._setTextureOptions(n);
    this.depthBuffer = n.depthBuffer;
    this.stencilBuffer = n.stencilBuffer;
    this.resolveDepthBuffer = n.resolveDepthBuffer;
    this.resolveStencilBuffer = n.resolveStencilBuffer;
    this._depthTexture = null;
    this.depthTexture = n.depthTexture;
    this.samples = n.samples;
    this.multiview = n.multiview;
  }
  _setTextureOptions(e = {}) {
    const t = {
      minFilter: k6q,
      generateMipmaps: false,
      flipY: false,
      internalFormat: null
    };
    if (e.mapping !== undefined) {
      t.mapping = e.mapping;
    }
    if (e.wrapS !== undefined) {
      t.wrapS = e.wrapS;
    }
    if (e.wrapT !== undefined) {
      t.wrapT = e.wrapT;
    }
    if (e.wrapR !== undefined) {
      t.wrapR = e.wrapR;
    }
    if (e.magFilter !== undefined) {
      t.magFilter = e.magFilter;
    }
    if (e.minFilter !== undefined) {
      t.minFilter = e.minFilter;
    }
    if (e.format !== undefined) {
      t.format = e.format;
    }
    if (e.type !== undefined) {
      t.type = e.type;
    }
    if (e.anisotropy !== undefined) {
      t.anisotropy = e.anisotropy;
    }
    if (e.colorSpace !== undefined) {
      t.colorSpace = e.colorSpace;
    }
    if (e.flipY !== undefined) {
      t.flipY = e.flipY;
    }
    if (e.generateMipmaps !== undefined) {
      t.generateMipmaps = e.generateMipmaps;
    }
    if (e.internalFormat !== undefined) {
      t.internalFormat = e.internalFormat;
    }
    for (let e = 0; e < this.textures.length; e++) {
      this.textures[e].setValues(t);
    }
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  set depthTexture(e) {
    if (this._depthTexture !== null) {
      this._depthTexture.renderTarget = null;
    }
    if (e !== null) {
      e.renderTarget = this;
    }
    this._depthTexture = e;
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      this.width = e;
      this.height = t;
      this.depth = n;
      for (let i = 0, r = this.textures.length; i < r; i++) {
        this.textures[i].image.width = e;
        this.textures[i].image.height = t;
        this.textures[i].image.depth = n;
        if (this.textures[i].isData3DTexture !== true) {
          this.textures[i].isArrayTexture = this.textures[i].image.depth > 1;
        }
      }
      this.dispose();
    }
    this.viewport.set(0, 0, e, t);
    this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width;
    this.height = e.height;
    this.depth = e.depth;
    this.scissor.copy(e.scissor);
    this.scissorTest = e.scissorTest;
    this.viewport.copy(e.viewport);
    this.textures.length = 0;
    for (let t = 0, n = e.textures.length; t < n; t++) {
      this.textures[t] = e.textures[t].clone();
      this.textures[t].isRenderTargetTexture = true;
      this.textures[t].renderTarget = this;
      const n = Object.assign({}, e.textures[t].image);
      this.textures[t].source = new Dn(n);
    }
    this.depthBuffer = e.depthBuffer;
    this.stencilBuffer = e.stencilBuffer;
    this.resolveDepthBuffer = e.resolveDepthBuffer;
    this.resolveStencilBuffer = e.resolveStencilBuffer;
    if (e.depthTexture !== null) {
      this.depthTexture = e.depthTexture.clone();
    }
    this.samples = e.samples;
    return this;
  }
  dispose() {
    this.dispatchEvent({
      type: "dispose"
    });
  }
}
export class nWS extends Vn {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n);
    this.isWebGLRenderTarget = true;
  }
}
export class rFo extends gPd {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null);
    this.isDataArrayTexture = true;
    this.image = {
      data: e,
      width: t,
      height: n,
      depth: i
    };
    this.magFilter = hxR;
    this.minFilter = hxR;
    this.wrapR = ghU;
    this.generateMipmaps = false;
    this.flipY = false;
    this.unpackAlignment = 1;
    this.layerUpdates = new Set();
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
export class dYF extends gPd {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null);
    this.isData3DTexture = true;
    this.image = {
      data: e,
      width: t,
      height: n,
      depth: i
    };
    this.magFilter = hxR;
    this.minFilter = hxR;
    this.wrapR = ghU;
    this.generateMipmaps = false;
    this.flipY = false;
    this.unpackAlignment = 1;
  }
}
export class NRn {
  constructor(e = new Pq0(Infinity, Infinity, Infinity), t = new Pq0(-Infinity, -Infinity, -Infinity)) {
    this.isBox3 = true;
    this.min = e;
    this.max = t;
  }
  set(e, t) {
    this.min.copy(e);
    this.max.copy(t);
    return this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3) {
      this.expandByPoint(Jn.fromArray(e, t));
    }
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++) {
      this.expandByPoint(Jn.fromBufferAttribute(e, t));
    }
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) {
      this.expandByPoint(e[t]);
    }
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Jn.copy(t).multiplyScalar(0.5);
    this.min.copy(e).sub(n);
    this.max.copy(e).add(n);
    return this;
  }
  setFromObject(e, t = false) {
    this.makeEmpty();
    return this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.min.copy(e.min);
    this.max.copy(e.max);
    return this;
  }
  makeEmpty() {
    this.min.x = this.min.y = this.min.z = Infinity;
    this.max.x = this.max.y = this.max.z = -Infinity;
    return this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    if (this.isEmpty()) {
      return e.set(0, 0, 0);
    } else {
      return e.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
  }
  getSize(e) {
    if (this.isEmpty()) {
      return e.set(0, 0, 0);
    } else {
      return e.subVectors(this.max, this.min);
    }
  }
  expandByPoint(e) {
    this.min.min(e);
    this.max.max(e);
    return this;
  }
  expandByVector(e) {
    this.min.sub(e);
    this.max.add(e);
    return this;
  }
  expandByScalar(e) {
    this.min.addScalar(-e);
    this.max.addScalar(e);
    return this;
  }
  expandByObject(e, t = false) {
    e.updateWorldMatrix(false, false);
    const n = e.geometry;
    if (n !== undefined) {
      const i = n.getAttribute("position");
      if (t === true && i !== undefined && e.isInstancedMesh !== true) {
        for (let t = 0, n = i.count; t < n; t++) {
          if (e.isMesh === true) {
            e.getVertexPosition(t, Jn);
          } else {
            Jn.fromBufferAttribute(i, t);
          }
          Jn.applyMatrix4(e.matrixWorld);
          this.expandByPoint(Jn);
        }
      } else {
        if (e.boundingBox !== undefined) {
          if (e.boundingBox === null) {
            e.computeBoundingBox();
          }
          Xn.copy(e.boundingBox);
        } else {
          if (n.boundingBox === null) {
            n.computeBoundingBox();
          }
          Xn.copy(n.boundingBox);
        }
        Xn.applyMatrix4(e.matrixWorld);
        this.union(Xn);
      }
    }
    const i = e.children;
    for (let e = 0, n = i.length; e < n; e++) {
      this.expandByObject(i[e], t);
    }
    return this;
  }
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
  }
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  intersectsSphere(e) {
    this.clampPoint(e.center, Jn);
    return Jn.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t;
    let n;
    if (e.normal.x > 0) {
      t = e.normal.x * this.min.x;
      n = e.normal.x * this.max.x;
    } else {
      t = e.normal.x * this.max.x;
      n = e.normal.x * this.min.x;
    }
    if (e.normal.y > 0) {
      t += e.normal.y * this.min.y;
      n += e.normal.y * this.max.y;
    } else {
      t += e.normal.y * this.max.y;
      n += e.normal.y * this.min.y;
    }
    if (e.normal.z > 0) {
      t += e.normal.z * this.min.z;
      n += e.normal.z * this.max.z;
    } else {
      t += e.normal.z * this.max.z;
      n += e.normal.z * this.min.z;
    }
    return t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) {
      return false;
    }
    this.getCenter(ii);
    ri.subVectors(this.max, ii);
    Yn.subVectors(e.a, ii);
    Zn.subVectors(e.b, ii);
    $n.subVectors(e.c, ii);
    ei.subVectors(Zn, Yn);
    ti.subVectors($n, Zn);
    ni.subVectors(Yn, $n);
    let t = [0, -ei.z, ei.y, 0, -ti.z, ti.y, 0, -ni.z, ni.y, ei.z, 0, -ei.x, ti.z, 0, -ti.x, ni.z, 0, -ni.x, -ei.y, ei.x, 0, -ti.y, ti.x, 0, -ni.y, ni.x, 0];
    return !!oi(t, Yn, Zn, $n, ri) && (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !!oi(t, Yn, Zn, $n, ri) && (ai.crossVectors(ei, ti), t = [ai.x, ai.y, ai.z], oi(t, Yn, Zn, $n, ri)));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Jn).distanceTo(e);
  }
  getBoundingSphere(e) {
    if (this.isEmpty()) {
      e.makeEmpty();
    } else {
      this.getCenter(e.center);
      e.radius = this.getSize(Jn).length() * 0.5;
    }
    return e;
  }
  intersect(e) {
    this.min.max(e.min);
    this.max.min(e.max);
    if (this.isEmpty()) {
      this.makeEmpty();
    }
    return this;
  }
  union(e) {
    this.min.min(e.min);
    this.max.max(e.max);
    return this;
  }
  applyMatrix4(e) {
    if (!this.isEmpty()) {
      Qn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e);
      Qn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e);
      Qn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e);
      Qn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e);
      Qn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e);
      Qn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e);
      Qn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e);
      Qn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e);
      this.setFromPoints(Qn);
    }
    return this;
  }
  translate(e) {
    this.min.add(e);
    this.max.add(e);
    return this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
  toJSON() {
    return {
      min: this.min.toArray(),
      max: this.max.toArray()
    };
  }
  fromJSON(e) {
    this.min.fromArray(e.min);
    this.max.fromArray(e.max);
    return this;
  }
}
const Qn = [new Pq0(), new Pq0(), new Pq0(), new Pq0(), new Pq0(), new Pq0(), new Pq0(), new Pq0()];
const Jn = new Pq0();
const Xn = new NRn();
const Yn = new Pq0();
const Zn = new Pq0();
const $n = new Pq0();
const ei = new Pq0();
const ti = new Pq0();
const ni = new Pq0();
const ii = new Pq0();
const ri = new Pq0();
const ai = new Pq0();
const si = new Pq0();
function oi(e, t, n, i, r) {
  for (let a = 0, s = e.length - 3; a <= s; a += 3) {
    si.fromArray(e, a);
    const s = r.x * Math.abs(si.x) + r.y * Math.abs(si.y) + r.z * Math.abs(si.z);
    const o = t.dot(si);
    const l = n.dot(si);
    const c = i.dot(si);
    if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > s) {
      return false;
    }
  }
  return true;
}
const li = new NRn();
const ci = new Pq0();
const hi = new Pq0();
export class iyt {
  constructor(e = new Pq0(), t = -1) {
    this.isSphere = true;
    this.center = e;
    this.radius = t;
  }
  set(e, t) {
    this.center.copy(e);
    this.radius = t;
    return this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    if (t !== undefined) {
      n.copy(t);
    } else {
      li.setFromPoints(e).getCenter(n);
    }
    let i = 0;
    for (let t = 0, r = e.length; t < r; t++) {
      i = Math.max(i, n.distanceToSquared(e[t]));
    }
    this.radius = Math.sqrt(i);
    return this;
  }
  copy(e) {
    this.center.copy(e.center);
    this.radius = e.radius;
    return this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    this.center.set(0, 0, 0);
    this.radius = -1;
    return this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    t.copy(e);
    if (n > this.radius * this.radius) {
      t.sub(this.center).normalize();
      t.multiplyScalar(this.radius).add(this.center);
    }
    return t;
  }
  getBoundingBox(e) {
    if (this.isEmpty()) {
      e.makeEmpty();
      return e;
    } else {
      e.set(this.center, this.center);
      e.expandByScalar(this.radius);
      return e;
    }
  }
  applyMatrix4(e) {
    this.center.applyMatrix4(e);
    this.radius = this.radius * e.getMaxScaleOnAxis();
    return this;
  }
  translate(e) {
    this.center.add(e);
    return this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) {
      this.center.copy(e);
      this.radius = 0;
      return this;
    }
    ci.subVectors(e, this.center);
    const t = ci.lengthSq();
    if (t > this.radius * this.radius) {
      const e = Math.sqrt(t);
      const n = (e - this.radius) * 0.5;
      this.center.addScaledVector(ci, n / e);
      this.radius += n;
    }
    return this;
  }
  union(e) {
    if (e.isEmpty()) {
      return this;
    } else if (this.isEmpty()) {
      this.copy(e);
      return this;
    } else {
      if (this.center.equals(e.center) === true) {
        this.radius = Math.max(this.radius, e.radius);
      } else {
        hi.subVectors(e.center, this.center).setLength(e.radius);
        this.expandByPoint(ci.copy(e.center).add(hi));
        this.expandByPoint(ci.copy(e.center).sub(hi));
      }
      return this;
    }
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    return {
      radius: this.radius,
      center: this.center.toArray()
    };
  }
  fromJSON(e) {
    this.radius = e.radius;
    this.center.fromArray(e.center);
    return this;
  }
}
const ui = new Pq0();
const fi = new Pq0();
const pi = new Pq0();
const gi = new Pq0();
const mi = new Pq0();
const Ai = new Pq0();
const vi = new Pq0();
export class RlV {
  constructor(e = new Pq0(), t = new Pq0(0, 0, -1)) {
    this.origin = e;
    this.direction = t;
  }
  set(e, t) {
    this.origin.copy(e);
    this.direction.copy(t);
    return this;
  }
  copy(e) {
    this.origin.copy(e.origin);
    this.direction.copy(e.direction);
    return this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    this.direction.copy(e).sub(this.origin).normalize();
    return this;
  }
  recast(e) {
    this.origin.copy(this.at(e, ui));
    return this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    if (n < 0) {
      return t.copy(this.origin);
    } else {
      return t.copy(this.origin).addScaledVector(this.direction, n);
    }
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = ui.subVectors(e, this.origin).dot(this.direction);
    if (t < 0) {
      return this.origin.distanceToSquared(e);
    } else {
      ui.copy(this.origin).addScaledVector(this.direction, t);
      return ui.distanceToSquared(e);
    }
  }
  distanceSqToSegment(e, t, n, i) {
    fi.copy(e).add(t).multiplyScalar(0.5);
    pi.copy(t).sub(e).normalize();
    gi.copy(this.origin).sub(fi);
    const r = e.distanceTo(t) * 0.5;
    const a = -this.direction.dot(pi);
    const s = gi.dot(this.direction);
    const o = -gi.dot(pi);
    const l = gi.lengthSq();
    const c = Math.abs(1 - a * a);
    let h;
    let d;
    let u;
    let f;
    if (c > 0) {
      h = a * o - s;
      d = a * s - o;
      f = r * c;
      if (h >= 0) {
        if (d >= -f) {
          if (d <= f) {
            const e = 1 / c;
            h *= e;
            d *= e;
            u = h * (h + a * d + s * 2) + d * (a * h + d + o * 2) + l;
          } else {
            d = r;
            h = Math.max(0, -(a * d + s));
            u = -h * h + d * (d + o * 2) + l;
          }
        } else {
          d = -r;
          h = Math.max(0, -(a * d + s));
          u = -h * h + d * (d + o * 2) + l;
        }
      } else if (d <= -f) {
        h = Math.max(0, -(-a * r + s));
        d = h > 0 ? -r : Math.min(Math.max(-r, -o), r);
        u = -h * h + d * (d + o * 2) + l;
      } else if (d <= f) {
        h = 0;
        d = Math.min(Math.max(-r, -o), r);
        u = d * (d + o * 2) + l;
      } else {
        h = Math.max(0, -(a * r + s));
        d = h > 0 ? r : Math.min(Math.max(-r, -o), r);
        u = -h * h + d * (d + o * 2) + l;
      }
    } else {
      d = a > 0 ? -r : r;
      h = Math.max(0, -(a * d + s));
      u = -h * h + d * (d + o * 2) + l;
    }
    if (n) {
      n.copy(this.origin).addScaledVector(this.direction, h);
    }
    if (i) {
      i.copy(fi).addScaledVector(pi, d);
    }
    return u;
  }
  intersectSphere(e, t) {
    ui.subVectors(e.center, this.origin);
    const n = ui.dot(this.direction);
    const i = ui.dot(ui) - n * n;
    const r = e.radius * e.radius;
    if (i > r) {
      return null;
    }
    const a = Math.sqrt(r - i);
    const s = n - a;
    const o = n + a;
    if (o < 0) {
      return null;
    } else if (s < 0) {
      return this.at(o, t);
    } else {
      return this.at(s, t);
    }
  }
  intersectsSphere(e) {
    return !(e.radius < 0) && this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) {
      if (e.distanceToPoint(this.origin) === 0) {
        return 0;
      } else {
        return null;
      }
    }
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    if (n >= 0) {
      return n;
    } else {
      return null;
    }
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    if (n === null) {
      return null;
    } else {
      return this.at(n, t);
    }
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    if (t === 0) {
      return true;
    }
    return e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n;
    let i;
    let r;
    let a;
    let s;
    let o;
    const l = 1 / this.direction.x;
    const c = 1 / this.direction.y;
    const h = 1 / this.direction.z;
    const d = this.origin;
    if (l >= 0) {
      n = (e.min.x - d.x) * l;
      i = (e.max.x - d.x) * l;
    } else {
      n = (e.max.x - d.x) * l;
      i = (e.min.x - d.x) * l;
    }
    if (c >= 0) {
      r = (e.min.y - d.y) * c;
      a = (e.max.y - d.y) * c;
    } else {
      r = (e.max.y - d.y) * c;
      a = (e.min.y - d.y) * c;
    }
    if (n > a || r > i) {
      return null;
    } else {
      if (r > n || isNaN(n)) {
        n = r;
      }
      if (a < i || isNaN(i)) {
        i = a;
      }
      if (h >= 0) {
        s = (e.min.z - d.z) * h;
        o = (e.max.z - d.z) * h;
      } else {
        s = (e.max.z - d.z) * h;
        o = (e.min.z - d.z) * h;
      }
      if (n > o || s > i) {
        return null;
      } else {
        if (s > n || n != n) {
          n = s;
        }
        if (o < i || i != i) {
          i = o;
        }
        if (i < 0) {
          return null;
        } else {
          return this.at(n >= 0 ? n : i, t);
        }
      }
    }
  }
  intersectsBox(e) {
    return this.intersectBox(e, ui) !== null;
  }
  intersectTriangle(e, t, n, i, r) {
    mi.subVectors(t, e);
    Ai.subVectors(n, e);
    vi.crossVectors(mi, Ai);
    let a;
    let s = this.direction.dot(vi);
    if (s > 0) {
      if (i) {
        return null;
      }
      a = 1;
    } else {
      if (!(s < 0)) {
        return null;
      }
      a = -1;
      s = -s;
    }
    gi.subVectors(this.origin, e);
    const o = a * this.direction.dot(Ai.crossVectors(gi, Ai));
    if (o < 0) {
      return null;
    }
    const l = a * this.direction.dot(mi.cross(gi));
    if (l < 0) {
      return null;
    }
    if (o + l > s) {
      return null;
    }
    const c = -a * gi.dot(vi);
    if (c < 0) {
      return null;
    } else {
      return this.at(c / s, r);
    }
  }
  applyMatrix4(e) {
    this.origin.applyMatrix4(e);
    this.direction.transformDirection(e);
    return this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
export class kn4 {
  constructor(e, t, n, i, r, a, s, o, l, c, h, d, u, f, p, g) {
    kn4.prototype.isMatrix4 = true;
    this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    if (e !== undefined) {
      this.set(e, t, n, i, r, a, s, o, l, c, h, d, u, f, p, g);
    }
  }
  set(e, t, n, i, r, a, s, o, l, c, h, d, u, f, p, g) {
    const m = this.elements;
    m[0] = e;
    m[4] = t;
    m[8] = n;
    m[12] = i;
    m[1] = r;
    m[5] = a;
    m[9] = s;
    m[13] = o;
    m[2] = l;
    m[6] = c;
    m[10] = h;
    m[14] = d;
    m[3] = u;
    m[7] = f;
    m[11] = p;
    m[15] = g;
    return this;
  }
  identity() {
    this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return this;
  }
  clone() {
    return new kn4().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements;
    const n = e.elements;
    t[0] = n[0];
    t[1] = n[1];
    t[2] = n[2];
    t[3] = n[3];
    t[4] = n[4];
    t[5] = n[5];
    t[6] = n[6];
    t[7] = n[7];
    t[8] = n[8];
    t[9] = n[9];
    t[10] = n[10];
    t[11] = n[11];
    t[12] = n[12];
    t[13] = n[13];
    t[14] = n[14];
    t[15] = n[15];
    return this;
  }
  copyPosition(e) {
    const t = this.elements;
    const n = e.elements;
    t[12] = n[12];
    t[13] = n[13];
    t[14] = n[14];
    return this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1);
    return this;
  }
  extractBasis(e, t, n) {
    e.setFromMatrixColumn(this, 0);
    t.setFromMatrixColumn(this, 1);
    n.setFromMatrixColumn(this, 2);
    return this;
  }
  makeBasis(e, t, n) {
    this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1);
    return this;
  }
  extractRotation(e) {
    const t = this.elements;
    const n = e.elements;
    const i = 1 / wi.setFromMatrixColumn(e, 0).length();
    const r = 1 / wi.setFromMatrixColumn(e, 1).length();
    const a = 1 / wi.setFromMatrixColumn(e, 2).length();
    t[0] = n[0] * i;
    t[1] = n[1] * i;
    t[2] = n[2] * i;
    t[3] = 0;
    t[4] = n[4] * r;
    t[5] = n[5] * r;
    t[6] = n[6] * r;
    t[7] = 0;
    t[8] = n[8] * a;
    t[9] = n[9] * a;
    t[10] = n[10] * a;
    t[11] = 0;
    t[12] = 0;
    t[13] = 0;
    t[14] = 0;
    t[15] = 1;
    return this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements;
    const n = e.x;
    const i = e.y;
    const r = e.z;
    const a = Math.cos(n);
    const s = Math.sin(n);
    const o = Math.cos(i);
    const l = Math.sin(i);
    const c = Math.cos(r);
    const h = Math.sin(r);
    if (e.order === "XYZ") {
      const e = a * c;
      const n = a * h;
      const i = s * c;
      const r = s * h;
      t[0] = o * c;
      t[4] = -o * h;
      t[8] = l;
      t[1] = n + i * l;
      t[5] = e - r * l;
      t[9] = -s * o;
      t[2] = r - e * l;
      t[6] = i + n * l;
      t[10] = a * o;
    } else if (e.order === "YXZ") {
      const e = o * c;
      const n = o * h;
      const i = l * c;
      const r = l * h;
      t[0] = e + r * s;
      t[4] = i * s - n;
      t[8] = a * l;
      t[1] = a * h;
      t[5] = a * c;
      t[9] = -s;
      t[2] = n * s - i;
      t[6] = r + e * s;
      t[10] = a * o;
    } else if (e.order === "ZXY") {
      const e = o * c;
      const n = o * h;
      const i = l * c;
      const r = l * h;
      t[0] = e - r * s;
      t[4] = -a * h;
      t[8] = i + n * s;
      t[1] = n + i * s;
      t[5] = a * c;
      t[9] = r - e * s;
      t[2] = -a * l;
      t[6] = s;
      t[10] = a * o;
    } else if (e.order === "ZYX") {
      const e = a * c;
      const n = a * h;
      const i = s * c;
      const r = s * h;
      t[0] = o * c;
      t[4] = i * l - n;
      t[8] = e * l + r;
      t[1] = o * h;
      t[5] = r * l + e;
      t[9] = n * l - i;
      t[2] = -l;
      t[6] = s * o;
      t[10] = a * o;
    } else if (e.order === "YZX") {
      const e = a * o;
      const n = a * l;
      const i = s * o;
      const r = s * l;
      t[0] = o * c;
      t[4] = r - e * h;
      t[8] = i * h + n;
      t[1] = h;
      t[5] = a * c;
      t[9] = -s * c;
      t[2] = -l * c;
      t[6] = n * h + i;
      t[10] = e - r * h;
    } else if (e.order === "XZY") {
      const e = a * o;
      const n = a * l;
      const i = s * o;
      const r = s * l;
      t[0] = o * c;
      t[4] = -h;
      t[8] = l * c;
      t[1] = e * h + r;
      t[5] = a * c;
      t[9] = n * h - i;
      t[2] = i * h - n;
      t[6] = s * c;
      t[10] = r * h + e;
    }
    t[3] = 0;
    t[7] = 0;
    t[11] = 0;
    t[12] = 0;
    t[13] = 0;
    t[14] = 0;
    t[15] = 1;
    return this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Si, e, ki);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    Mi.subVectors(e, t);
    if (Mi.lengthSq() === 0) {
      Mi.z = 1;
    }
    Mi.normalize();
    Ti.crossVectors(n, Mi);
    if (Ti.lengthSq() === 0) {
      if (Math.abs(n.z) === 1) {
        Mi.x += 0.0001;
      } else {
        Mi.z += 0.0001;
      }
      Mi.normalize();
      Ti.crossVectors(n, Mi);
    }
    Ti.normalize();
    Ei.crossVectors(Mi, Ti);
    i[0] = Ti.x;
    i[4] = Ei.x;
    i[8] = Mi.x;
    i[1] = Ti.y;
    i[5] = Ei.y;
    i[9] = Mi.y;
    i[2] = Ti.z;
    i[6] = Ei.z;
    i[10] = Mi.z;
    return this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements;
    const i = t.elements;
    const r = this.elements;
    const a = n[0];
    const s = n[4];
    const o = n[8];
    const l = n[12];
    const c = n[1];
    const h = n[5];
    const d = n[9];
    const u = n[13];
    const f = n[2];
    const p = n[6];
    const g = n[10];
    const m = n[14];
    const A = n[3];
    const v = n[7];
    const b = n[11];
    const y = n[15];
    const w = i[0];
    const x = i[4];
    const S = i[8];
    const k = i[12];
    const T = i[1];
    const E = i[5];
    const M = i[9];
    const _ = i[13];
    const C = i[2];
    const R = i[6];
    const P = i[10];
    const I = i[14];
    const L = i[3];
    const U = i[7];
    const N = i[11];
    const z = i[15];
    r[0] = a * w + s * T + o * C + l * L;
    r[4] = a * x + s * E + o * R + l * U;
    r[8] = a * S + s * M + o * P + l * N;
    r[12] = a * k + s * _ + o * I + l * z;
    r[1] = c * w + h * T + d * C + u * L;
    r[5] = c * x + h * E + d * R + u * U;
    r[9] = c * S + h * M + d * P + u * N;
    r[13] = c * k + h * _ + d * I + u * z;
    r[2] = f * w + p * T + g * C + m * L;
    r[6] = f * x + p * E + g * R + m * U;
    r[10] = f * S + p * M + g * P + m * N;
    r[14] = f * k + p * _ + g * I + m * z;
    r[3] = A * w + v * T + b * C + y * L;
    r[7] = A * x + v * E + b * R + y * U;
    r[11] = A * S + v * M + b * P + y * N;
    r[15] = A * k + v * _ + b * I + y * z;
    return this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    t[0] *= e;
    t[4] *= e;
    t[8] *= e;
    t[12] *= e;
    t[1] *= e;
    t[5] *= e;
    t[9] *= e;
    t[13] *= e;
    t[2] *= e;
    t[6] *= e;
    t[10] *= e;
    t[14] *= e;
    t[3] *= e;
    t[7] *= e;
    t[11] *= e;
    t[15] *= e;
    return this;
  }
  determinant() {
    const e = this.elements;
    const t = e[0];
    const n = e[4];
    const i = e[8];
    const r = e[12];
    const a = e[1];
    const s = e[5];
    const o = e[9];
    const l = e[13];
    const c = e[2];
    const h = e[6];
    const d = e[10];
    const u = e[14];
    return e[3] * (+r * o * h - i * l * h - r * s * d + n * l * d + i * s * u - n * o * u) + e[7] * (+t * o * u - t * l * d + r * a * d - i * a * u + i * l * c - r * o * c) + e[11] * (+t * l * h - t * s * u - r * a * h + n * a * u + r * s * c - n * l * c) + e[15] * (-i * s * c - t * o * h + t * s * d + i * a * h - n * a * d + n * o * c);
  }
  transpose() {
    const e = this.elements;
    let t;
    t = e[1];
    e[1] = e[4];
    e[4] = t;
    t = e[2];
    e[2] = e[8];
    e[8] = t;
    t = e[6];
    e[6] = e[9];
    e[9] = t;
    t = e[3];
    e[3] = e[12];
    e[12] = t;
    t = e[7];
    e[7] = e[13];
    e[13] = t;
    t = e[11];
    e[11] = e[14];
    e[14] = t;
    return this;
  }
  setPosition(e, t, n) {
    const i = this.elements;
    if (e.isVector3) {
      i[12] = e.x;
      i[13] = e.y;
      i[14] = e.z;
    } else {
      i[12] = e;
      i[13] = t;
      i[14] = n;
    }
    return this;
  }
  invert() {
    const e = this.elements;
    const t = e[0];
    const n = e[1];
    const i = e[2];
    const r = e[3];
    const a = e[4];
    const s = e[5];
    const o = e[6];
    const l = e[7];
    const c = e[8];
    const h = e[9];
    const d = e[10];
    const u = e[11];
    const f = e[12];
    const p = e[13];
    const g = e[14];
    const m = e[15];
    const A = h * g * l - p * d * l + p * o * u - s * g * u - h * o * m + s * d * m;
    const v = f * d * l - c * g * l - f * o * u + a * g * u + c * o * m - a * d * m;
    const b = c * p * l - f * h * l + f * s * u - a * p * u - c * s * m + a * h * m;
    const y = f * h * o - c * p * o - f * s * d + a * p * d + c * s * g - a * h * g;
    const w = t * A + n * v + i * b + r * y;
    if (w === 0) {
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
    const x = 1 / w;
    e[0] = A * x;
    e[1] = (p * d * r - h * g * r - p * i * u + n * g * u + h * i * m - n * d * m) * x;
    e[2] = (s * g * r - p * o * r + p * i * l - n * g * l - s * i * m + n * o * m) * x;
    e[3] = (h * o * r - s * d * r - h * i * l + n * d * l + s * i * u - n * o * u) * x;
    e[4] = v * x;
    e[5] = (c * g * r - f * d * r + f * i * u - t * g * u - c * i * m + t * d * m) * x;
    e[6] = (f * o * r - a * g * r - f * i * l + t * g * l + a * i * m - t * o * m) * x;
    e[7] = (a * d * r - c * o * r + c * i * l - t * d * l - a * i * u + t * o * u) * x;
    e[8] = b * x;
    e[9] = (f * h * r - c * p * r - f * n * u + t * p * u + c * n * m - t * h * m) * x;
    e[10] = (a * p * r - f * s * r + f * n * l - t * p * l - a * n * m + t * s * m) * x;
    e[11] = (c * s * r - a * h * r - c * n * l + t * h * l + a * n * u - t * s * u) * x;
    e[12] = y * x;
    e[13] = (c * p * i - f * h * i + f * n * d - t * p * d - c * n * g + t * h * g) * x;
    e[14] = (f * s * i - a * p * i - f * n * o + t * p * o + a * n * g - t * s * g) * x;
    e[15] = (a * h * i - c * s * i + c * n * o - t * h * o - a * n * d + t * s * d) * x;
    return this;
  }
  scale(e) {
    const t = this.elements;
    const n = e.x;
    const i = e.y;
    const r = e.z;
    t[0] *= n;
    t[4] *= i;
    t[8] *= r;
    t[1] *= n;
    t[5] *= i;
    t[9] *= r;
    t[2] *= n;
    t[6] *= i;
    t[10] *= r;
    t[3] *= n;
    t[7] *= i;
    t[11] *= r;
    return this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements;
    const t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2];
    const n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6];
    const i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    if (e.isVector3) {
      this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1);
    } else {
      this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1);
    }
    return this;
  }
  makeRotationX(e) {
    const t = Math.cos(e);
    const n = Math.sin(e);
    this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1);
    return this;
  }
  makeRotationY(e) {
    const t = Math.cos(e);
    const n = Math.sin(e);
    this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1);
    return this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e);
    const n = Math.sin(e);
    this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t);
    const i = Math.sin(t);
    const r = 1 - n;
    const a = e.x;
    const s = e.y;
    const o = e.z;
    const l = r * a;
    const c = r * s;
    this.set(l * a + n, l * s - i * o, l * o + i * s, 0, l * s + i * o, c * s + n, c * o - i * a, 0, l * o - i * s, c * o + i * a, r * o * o + n, 0, 0, 0, 0, 1);
    return this;
  }
  makeScale(e, t, n) {
    this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1);
    return this;
  }
  makeShear(e, t, n, i, r, a) {
    this.set(1, n, r, 0, e, 1, a, 0, t, i, 1, 0, 0, 0, 0, 1);
    return this;
  }
  compose(e, t, n) {
    const i = this.elements;
    const r = t._x;
    const a = t._y;
    const s = t._z;
    const o = t._w;
    const l = r + r;
    const c = a + a;
    const h = s + s;
    const d = r * l;
    const u = r * c;
    const f = r * h;
    const p = a * c;
    const g = a * h;
    const m = s * h;
    const A = o * l;
    const v = o * c;
    const b = o * h;
    const y = n.x;
    const w = n.y;
    const x = n.z;
    i[0] = (1 - (p + m)) * y;
    i[1] = (u + b) * y;
    i[2] = (f - v) * y;
    i[3] = 0;
    i[4] = (u - b) * w;
    i[5] = (1 - (d + m)) * w;
    i[6] = (g + A) * w;
    i[7] = 0;
    i[8] = (f + v) * x;
    i[9] = (g - A) * x;
    i[10] = (1 - (d + p)) * x;
    i[11] = 0;
    i[12] = e.x;
    i[13] = e.y;
    i[14] = e.z;
    i[15] = 1;
    return this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let r = wi.set(i[0], i[1], i[2]).length();
    const a = wi.set(i[4], i[5], i[6]).length();
    const s = wi.set(i[8], i[9], i[10]).length();
    if (this.determinant() < 0) {
      r = -r;
    }
    e.x = i[12];
    e.y = i[13];
    e.z = i[14];
    xi.copy(this);
    const o = 1 / r;
    const l = 1 / a;
    const c = 1 / s;
    xi.elements[0] *= o;
    xi.elements[1] *= o;
    xi.elements[2] *= o;
    xi.elements[4] *= l;
    xi.elements[5] *= l;
    xi.elements[6] *= l;
    xi.elements[8] *= c;
    xi.elements[9] *= c;
    xi.elements[10] *= c;
    t.setFromRotationMatrix(xi);
    n.x = r;
    n.y = a;
    n.z = s;
    return this;
  }
  makePerspective(e, t, n, i, r, a, s = TdN, o = false) {
    const l = this.elements;
    const c = r * 2 / (t - e);
    const h = r * 2 / (n - i);
    const d = (t + e) / (t - e);
    const u = (n + i) / (n - i);
    let f;
    let p;
    if (o) {
      f = r / (a - r);
      p = a * r / (a - r);
    } else if (s === TdN) {
      f = -(a + r) / (a - r);
      p = a * -2 * r / (a - r);
    } else {
      if (s !== Yt) {
        throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + s);
      }
      f = -a / (a - r);
      p = -a * r / (a - r);
    }
    l[0] = c;
    l[4] = 0;
    l[8] = d;
    l[12] = 0;
    l[1] = 0;
    l[5] = h;
    l[9] = u;
    l[13] = 0;
    l[2] = 0;
    l[6] = 0;
    l[10] = f;
    l[14] = p;
    l[3] = 0;
    l[7] = 0;
    l[11] = -1;
    l[15] = 0;
    return this;
  }
  makeOrthographic(e, t, n, i, r, a, s = TdN, o = false) {
    const l = this.elements;
    const c = 2 / (t - e);
    const h = 2 / (n - i);
    const d = -(t + e) / (t - e);
    const u = -(n + i) / (n - i);
    let f;
    let p;
    if (o) {
      f = 1 / (a - r);
      p = a / (a - r);
    } else if (s === TdN) {
      f = -2 / (a - r);
      p = -(a + r) / (a - r);
    } else {
      if (s !== Yt) {
        throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + s);
      }
      f = -1 / (a - r);
      p = -r / (a - r);
    }
    l[0] = c;
    l[4] = 0;
    l[8] = 0;
    l[12] = d;
    l[1] = 0;
    l[5] = h;
    l[9] = 0;
    l[13] = u;
    l[2] = 0;
    l[6] = 0;
    l[10] = f;
    l[14] = p;
    l[3] = 0;
    l[7] = 0;
    l[11] = 0;
    l[15] = 1;
    return this;
  }
  equals(e) {
    const t = this.elements;
    const n = e.elements;
    for (let e = 0; e < 16; e++) {
      if (t[e] !== n[e]) {
        return false;
      }
    }
    return true;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) {
      this.elements[n] = e[n + t];
    }
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    e[t] = n[0];
    e[t + 1] = n[1];
    e[t + 2] = n[2];
    e[t + 3] = n[3];
    e[t + 4] = n[4];
    e[t + 5] = n[5];
    e[t + 6] = n[6];
    e[t + 7] = n[7];
    e[t + 8] = n[8];
    e[t + 9] = n[9];
    e[t + 10] = n[10];
    e[t + 11] = n[11];
    e[t + 12] = n[12];
    e[t + 13] = n[13];
    e[t + 14] = n[14];
    e[t + 15] = n[15];
    return e;
  }
}
const wi = new Pq0();
const xi = new kn4();
const Si = new Pq0(0, 0, 0);
const ki = new Pq0(1, 1, 1);
const Ti = new Pq0();
const Ei = new Pq0();
const Mi = new Pq0();
const _i = new kn4();
const Ci = new PTz();
export class O9p {
  constructor(e = 0, t = 0, n = 0, i = O9p.DEFAULT_ORDER) {
    this.isEuler = true;
    this._x = e;
    this._y = t;
    this._z = n;
    this._order = i;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e;
    this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e;
    this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e;
    this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e;
    this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    this._x = e;
    this._y = t;
    this._z = n;
    this._order = i;
    this._onChangeCallback();
    return this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    this._x = e._x;
    this._y = e._y;
    this._z = e._z;
    this._order = e._order;
    this._onChangeCallback();
    return this;
  }
  setFromRotationMatrix(e, t = this._order, n = true) {
    const i = e.elements;
    const r = i[0];
    const a = i[4];
    const s = i[8];
    const o = i[1];
    const l = i[5];
    const c = i[9];
    const h = i[2];
    const d = i[6];
    const u = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(gn(s, -1, 1));
        if (Math.abs(s) < 0.9999999) {
          this._x = Math.atan2(-c, u);
          this._z = Math.atan2(-a, r);
        } else {
          this._x = Math.atan2(d, l);
          this._z = 0;
        }
        break;
      case "YXZ":
        this._x = Math.asin(-gn(c, -1, 1));
        if (Math.abs(c) < 0.9999999) {
          this._y = Math.atan2(s, u);
          this._z = Math.atan2(o, l);
        } else {
          this._y = Math.atan2(-h, r);
          this._z = 0;
        }
        break;
      case "ZXY":
        this._x = Math.asin(gn(d, -1, 1));
        if (Math.abs(d) < 0.9999999) {
          this._y = Math.atan2(-h, u);
          this._z = Math.atan2(-a, l);
        } else {
          this._y = 0;
          this._z = Math.atan2(o, r);
        }
        break;
      case "ZYX":
        this._y = Math.asin(-gn(h, -1, 1));
        if (Math.abs(h) < 0.9999999) {
          this._x = Math.atan2(d, u);
          this._z = Math.atan2(o, r);
        } else {
          this._x = 0;
          this._z = Math.atan2(-a, l);
        }
        break;
      case "YZX":
        this._z = Math.asin(gn(o, -1, 1));
        if (Math.abs(o) < 0.9999999) {
          this._x = Math.atan2(-c, l);
          this._y = Math.atan2(-h, r);
        } else {
          this._x = 0;
          this._y = Math.atan2(s, u);
        }
        break;
      case "XZY":
        this._z = Math.asin(-gn(a, -1, 1));
        if (Math.abs(a) < 0.9999999) {
          this._x = Math.atan2(d, l);
          this._y = Math.atan2(s, r);
        } else {
          this._x = Math.atan2(-c, u);
          this._y = 0;
        }
        break;
      default:
        R8M("Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    this._order = t;
    if (n === true) {
      this._onChangeCallback();
    }
    return this;
  }
  setFromQuaternion(e, t, n) {
    _i.makeRotationFromQuaternion(e);
    return this.setFromRotationMatrix(_i, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    Ci.setFromEuler(this);
    return this.setFromQuaternion(Ci, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    this._x = e[0];
    this._y = e[1];
    this._z = e[2];
    if (e[3] !== undefined) {
      this._order = e[3];
    }
    this._onChangeCallback();
    return this;
  }
  toArray(e = [], t = 0) {
    e[t] = this._x;
    e[t + 1] = this._y;
    e[t + 2] = this._z;
    e[t + 3] = this._order;
    return e;
  }
  _onChange(e) {
    this._onChangeCallback = e;
    return this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x;
    yield this._y;
    yield this._z;
    yield this._order;
  }
}
O9p.DEFAULT_ORDER = "XYZ";
export class zgK {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = 1 << e >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e;
  }
  disable(e) {
    this.mask &= ~(1 << e);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return !!(this.mask & e.mask);
  }
  isEnabled(e) {
    return !!(this.mask & 1 << e);
  }
}
let Ii = 0;
const Li = new Pq0();
const Ui = new PTz();
const Ni = new kn4();
const zi = new Pq0();
const Di = new Pq0();
const Bi = new Pq0();
const Gi = new PTz();
const Fi = new Pq0(1, 0, 0);
const Oi = new Pq0(0, 1, 0);
const Wi = new Pq0(0, 0, 1);
const Vi = {
  type: "added"
};
const Hi = {
  type: "removed"
};
const ji = {
  type: "childadded",
  child: null
};
const Ki = {
  type: "childremoved",
  child: null
};
export class B69 extends Qev {
  constructor() {
    super();
    this.isObject3D = true;
    Object.defineProperty(this, "id", {
      value: Ii++
    });
    this.uuid = pn();
    this.name = "";
    this.type = "Object3D";
    this.parent = null;
    this.children = [];
    this.up = B69.DEFAULT_UP.clone();
    const e = new Pq0();
    const t = new O9p();
    const n = new PTz();
    const i = new Pq0(1, 1, 1);
    t._onChange(function () {
      n.setFromEuler(t, false);
    });
    n._onChange(function () {
      t.setFromQuaternion(n, undefined, false);
    });
    Object.defineProperties(this, {
      position: {
        configurable: true,
        enumerable: true,
        value: e
      },
      rotation: {
        configurable: true,
        enumerable: true,
        value: t
      },
      quaternion: {
        configurable: true,
        enumerable: true,
        value: n
      },
      scale: {
        configurable: true,
        enumerable: true,
        value: i
      },
      modelViewMatrix: {
        value: new kn4()
      },
      normalMatrix: {
        value: new dwI()
      }
    });
    this.matrix = new kn4();
    this.matrixWorld = new kn4();
    this.matrixAutoUpdate = B69.DEFAULT_MATRIX_AUTO_UPDATE;
    this.matrixWorldAutoUpdate = B69.DEFAULT_MATRIX_WORLD_AUTO_UPDATE;
    this.matrixWorldNeedsUpdate = false;
    this.layers = new zgK();
    this.visible = true;
    this.castShadow = false;
    this.receiveShadow = false;
    this.frustumCulled = true;
    this.renderOrder = 0;
    this.animations = [];
    this.customDepthMaterial = undefined;
    this.customDistanceMaterial = undefined;
    this.userData = {};
  }
  onBeforeShadow() {}
  onAfterShadow() {}
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    if (this.matrixAutoUpdate) {
      this.updateMatrix();
    }
    this.matrix.premultiply(e);
    this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    this.quaternion.premultiply(e);
    return this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, true);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    Ui.setFromAxisAngle(e, t);
    this.quaternion.multiply(Ui);
    return this;
  }
  rotateOnWorldAxis(e, t) {
    Ui.setFromAxisAngle(e, t);
    this.quaternion.premultiply(Ui);
    return this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Fi, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Oi, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Wi, e);
  }
  translateOnAxis(e, t) {
    Li.copy(e).applyQuaternion(this.quaternion);
    this.position.add(Li.multiplyScalar(t));
    return this;
  }
  translateX(e) {
    return this.translateOnAxis(Fi, e);
  }
  translateY(e) {
    return this.translateOnAxis(Oi, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Wi, e);
  }
  localToWorld(e) {
    this.updateWorldMatrix(true, false);
    return e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    this.updateWorldMatrix(true, false);
    return e.applyMatrix4(Ni.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    if (e.isVector3) {
      zi.copy(e);
    } else {
      zi.set(e, t, n);
    }
    const i = this.parent;
    this.updateWorldMatrix(true, false);
    Di.setFromMatrixPosition(this.matrixWorld);
    if (this.isCamera || this.isLight) {
      Ni.lookAt(Di, zi, this.up);
    } else {
      Ni.lookAt(zi, Di, this.up);
    }
    this.quaternion.setFromRotationMatrix(Ni);
    if (i) {
      Ni.extractRotation(i.matrixWorld);
      Ui.setFromRotationMatrix(Ni);
      this.quaternion.premultiply(Ui.invert());
    }
  }
  add(e) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++) {
        this.add(arguments[e]);
      }
      return this;
    }
    if (e === this) {
      z3S("Object3D.add: object can't be added as a child of itself.", e);
      return this;
    } else {
      if (e && e.isObject3D) {
        e.removeFromParent();
        e.parent = this;
        this.children.push(e);
        e.dispatchEvent(Vi);
        ji.child = e;
        this.dispatchEvent(ji);
        ji.child = null;
      } else {
        z3S("Object3D.add: object not an instance of THREE.Object3D.", e);
      }
      return this;
    }
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++) {
        this.remove(arguments[e]);
      }
      return this;
    }
    const t = this.children.indexOf(e);
    if (t !== -1) {
      e.parent = null;
      this.children.splice(t, 1);
      e.dispatchEvent(Hi);
      Ki.child = e;
      this.dispatchEvent(Ki);
      Ki.child = null;
    }
    return this;
  }
  removeFromParent() {
    const e = this.parent;
    if (e !== null) {
      e.remove(this);
    }
    return this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    this.updateWorldMatrix(true, false);
    Ni.copy(this.matrixWorld).invert();
    if (e.parent !== null) {
      e.parent.updateWorldMatrix(true, false);
      Ni.multiply(e.parent.matrixWorld);
    }
    e.applyMatrix4(Ni);
    e.removeFromParent();
    e.parent = this;
    this.children.push(e);
    e.updateWorldMatrix(false, true);
    e.dispatchEvent(Vi);
    ji.child = e;
    this.dispatchEvent(ji);
    ji.child = null;
    return this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) {
      return this;
    }
    for (let n = 0, i = this.children.length; n < i; n++) {
      const i = this.children[n].getObjectByProperty(e, t);
      if (i !== undefined) {
        return i;
      }
    }
  }
  getObjectsByProperty(e, t, n = []) {
    if (this[e] === t) {
      n.push(this);
    }
    const i = this.children;
    for (let r = 0, a = i.length; r < a; r++) {
      i[r].getObjectsByProperty(e, t, n);
    }
    return n;
  }
  getWorldPosition(e) {
    this.updateWorldMatrix(true, false);
    return e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    this.updateWorldMatrix(true, false);
    this.matrixWorld.decompose(Di, e, Bi);
    return e;
  }
  getWorldScale(e) {
    this.updateWorldMatrix(true, false);
    this.matrixWorld.decompose(Di, Gi, e);
    return e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(true, false);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) {
      t[n].traverse(e);
    }
  }
  traverseVisible(e) {
    if (this.visible === false) {
      return;
    }
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) {
      t[n].traverseVisible(e);
    }
  }
  traverseAncestors(e) {
    const t = this.parent;
    if (t !== null) {
      e(t);
      t.traverseAncestors(e);
    }
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale);
    this.matrixWorldNeedsUpdate = true;
  }
  updateMatrixWorld(e) {
    if (this.matrixAutoUpdate) {
      this.updateMatrix();
    }
    if (this.matrixWorldNeedsUpdate || e) {
      if (this.matrixWorldAutoUpdate === true) {
        if (this.parent === null) {
          this.matrixWorld.copy(this.matrix);
        } else {
          this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
        }
      }
      this.matrixWorldNeedsUpdate = false;
      e = true;
    }
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) {
      t[n].updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === true && n !== null) {
      n.updateWorldMatrix(true, false);
    }
    if (this.matrixAutoUpdate) {
      this.updateMatrix();
    }
    if (this.matrixWorldAutoUpdate === true) {
      if (this.parent === null) {
        this.matrixWorld.copy(this.matrix);
      } else {
        this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
      }
    }
    if (t === true) {
      const e = this.children;
      for (let t = 0, n = e.length; t < n; t++) {
        e[t].updateWorldMatrix(false, true);
      }
    }
  }
  toJSON(e) {
    const t = e === undefined || typeof e == "string";
    const n = {};
    if (t) {
      e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {}
      };
      n.metadata = {
        version: 4.7,
        type: "Object",
        generator: "Object3D.toJSON"
      };
    }
    const i = {};
    function r(t, n) {
      if (t[n.uuid] === undefined) {
        t[n.uuid] = n.toJSON(e);
      }
      return n.uuid;
    }
    i.uuid = this.uuid;
    i.type = this.type;
    if (this.name !== "") {
      i.name = this.name;
    }
    if (this.castShadow === true) {
      i.castShadow = true;
    }
    if (this.receiveShadow === true) {
      i.receiveShadow = true;
    }
    if (this.visible === false) {
      i.visible = false;
    }
    if (this.frustumCulled === false) {
      i.frustumCulled = false;
    }
    if (this.renderOrder !== 0) {
      i.renderOrder = this.renderOrder;
    }
    if (Object.keys(this.userData).length > 0) {
      i.userData = this.userData;
    }
    i.layers = this.layers.mask;
    i.matrix = this.matrix.toArray();
    i.up = this.up.toArray();
    if (this.matrixAutoUpdate === false) {
      i.matrixAutoUpdate = false;
    }
    if (this.isInstancedMesh) {
      i.type = "InstancedMesh";
      i.count = this.count;
      i.instanceMatrix = this.instanceMatrix.toJSON();
      if (this.instanceColor !== null) {
        i.instanceColor = this.instanceColor.toJSON();
      }
    }
    if (this.isBatchedMesh) {
      i.type = "BatchedMesh";
      i.perObjectFrustumCulled = this.perObjectFrustumCulled;
      i.sortObjects = this.sortObjects;
      i.drawRanges = this._drawRanges;
      i.reservedRanges = this._reservedRanges;
      i.geometryInfo = this._geometryInfo.map(e => ({
        ...e,
        boundingBox: e.boundingBox ? e.boundingBox.toJSON() : undefined,
        boundingSphere: e.boundingSphere ? e.boundingSphere.toJSON() : undefined
      }));
      i.instanceInfo = this._instanceInfo.map(e => ({
        ...e
      }));
      i.availableInstanceIds = this._availableInstanceIds.slice();
      i.availableGeometryIds = this._availableGeometryIds.slice();
      i.nextIndexStart = this._nextIndexStart;
      i.nextVertexStart = this._nextVertexStart;
      i.geometryCount = this._geometryCount;
      i.maxInstanceCount = this._maxInstanceCount;
      i.maxVertexCount = this._maxVertexCount;
      i.maxIndexCount = this._maxIndexCount;
      i.geometryInitialized = this._geometryInitialized;
      i.matricesTexture = this._matricesTexture.toJSON(e);
      i.indirectTexture = this._indirectTexture.toJSON(e);
      if (this._colorsTexture !== null) {
        i.colorsTexture = this._colorsTexture.toJSON(e);
      }
      if (this.boundingSphere !== null) {
        i.boundingSphere = this.boundingSphere.toJSON();
      }
      if (this.boundingBox !== null) {
        i.boundingBox = this.boundingBox.toJSON();
      }
    }
    if (this.isScene) {
      if (this.background) {
        if (this.background.isColor) {
          i.background = this.background.toJSON();
        } else if (this.background.isTexture) {
          i.background = this.background.toJSON(e).uuid;
        }
      }
      if (this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true) {
        i.environment = this.environment.toJSON(e).uuid;
      }
    } else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = r(e.geometries, this.geometry);
      const t = this.geometry.parameters;
      if (t !== undefined && t.shapes !== undefined) {
        const n = t.shapes;
        if (Array.isArray(n)) {
          for (let t = 0, i = n.length; t < i; t++) {
            const i = n[t];
            r(e.shapes, i);
          }
        } else {
          r(e.shapes, n);
        }
      }
    }
    if (this.isSkinnedMesh) {
      i.bindMode = this.bindMode;
      i.bindMatrix = this.bindMatrix.toArray();
      if (this.skeleton !== undefined) {
        r(e.skeletons, this.skeleton);
        i.skeleton = this.skeleton.uuid;
      }
    }
    if (this.material !== undefined) {
      if (Array.isArray(this.material)) {
        const t = [];
        for (let n = 0, i = this.material.length; n < i; n++) {
          t.push(r(e.materials, this.material[n]));
        }
        i.material = t;
      } else {
        i.material = r(e.materials, this.material);
      }
    }
    if (this.children.length > 0) {
      i.children = [];
      for (let t = 0; t < this.children.length; t++) {
        i.children.push(this.children[t].toJSON(e).object);
      }
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let t = 0; t < this.animations.length; t++) {
        const n = this.animations[t];
        i.animations.push(r(e.animations, n));
      }
    }
    if (t) {
      const t = a(e.geometries);
      const i = a(e.materials);
      const r = a(e.textures);
      const s = a(e.images);
      const o = a(e.shapes);
      const l = a(e.skeletons);
      const c = a(e.animations);
      const h = a(e.nodes);
      if (t.length > 0) {
        n.geometries = t;
      }
      if (i.length > 0) {
        n.materials = i;
      }
      if (r.length > 0) {
        n.textures = r;
      }
      if (s.length > 0) {
        n.images = s;
      }
      if (o.length > 0) {
        n.shapes = o;
      }
      if (l.length > 0) {
        n.skeletons = l;
      }
      if (c.length > 0) {
        n.animations = c;
      }
      if (h.length > 0) {
        n.nodes = h;
      }
    }
    n.object = i;
    return n;
    function a(e) {
      const t = [];
      for (const n in e) {
        const i = e[n];
        delete i.metadata;
        t.push(i);
      }
      return t;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = true) {
    this.name = e.name;
    this.up.copy(e.up);
    this.position.copy(e.position);
    this.rotation.order = e.rotation.order;
    this.quaternion.copy(e.quaternion);
    this.scale.copy(e.scale);
    this.matrix.copy(e.matrix);
    this.matrixWorld.copy(e.matrixWorld);
    this.matrixAutoUpdate = e.matrixAutoUpdate;
    this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate;
    this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate;
    this.layers.mask = e.layers.mask;
    this.visible = e.visible;
    this.castShadow = e.castShadow;
    this.receiveShadow = e.receiveShadow;
    this.frustumCulled = e.frustumCulled;
    this.renderOrder = e.renderOrder;
    this.animations = e.animations.slice();
    this.userData = JSON.parse(JSON.stringify(e.userData));
    if (t === true) {
      for (let t = 0; t < e.children.length; t++) {
        const n = e.children[t];
        this.add(n.clone());
      }
    }
    return this;
  }
}
B69.DEFAULT_UP = new Pq0(0, 1, 0);
B69.DEFAULT_MATRIX_AUTO_UPDATE = true;
B69.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
const Qi = new Pq0();
const Ji = new Pq0();
const Xi = new Pq0();
const Yi = new Pq0();
const Zi = new Pq0();
const $i = new Pq0();
const er = new Pq0();
const tr = new Pq0();
const nr = new Pq0();
const ir = new Pq0();
const rr = new IUQ();
const ar = new IUQ();
const sr = new IUQ();
class or {
  constructor(e = new Pq0(), t = new Pq0(), n = new Pq0()) {
    this.a = e;
    this.b = t;
    this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t);
    Qi.subVectors(e, t);
    i.cross(Qi);
    const r = i.lengthSq();
    if (r > 0) {
      return i.multiplyScalar(1 / Math.sqrt(r));
    } else {
      return i.set(0, 0, 0);
    }
  }
  static getBarycoord(e, t, n, i, r) {
    Qi.subVectors(i, t);
    Ji.subVectors(n, t);
    Xi.subVectors(e, t);
    const a = Qi.dot(Qi);
    const s = Qi.dot(Ji);
    const o = Qi.dot(Xi);
    const l = Ji.dot(Ji);
    const c = Ji.dot(Xi);
    const h = a * l - s * s;
    if (h === 0) {
      r.set(0, 0, 0);
      return null;
    }
    const d = 1 / h;
    const u = (l * o - s * c) * d;
    const f = (a * c - s * o) * d;
    return r.set(1 - u - f, f, u);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, Yi) !== null && Yi.x >= 0 && Yi.y >= 0 && Yi.x + Yi.y <= 1;
  }
  static getInterpolation(e, t, n, i, r, a, s, o) {
    if (this.getBarycoord(e, t, n, i, Yi) === null) {
      o.x = 0;
      o.y = 0;
      if ("z" in o) {
        o.z = 0;
      }
      if ("w" in o) {
        o.w = 0;
      }
      return null;
    } else {
      o.setScalar(0);
      o.addScaledVector(r, Yi.x);
      o.addScaledVector(a, Yi.y);
      o.addScaledVector(s, Yi.z);
      return o;
    }
  }
  static getInterpolatedAttribute(e, t, n, i, r, a) {
    rr.setScalar(0);
    ar.setScalar(0);
    sr.setScalar(0);
    rr.fromBufferAttribute(e, t);
    ar.fromBufferAttribute(e, n);
    sr.fromBufferAttribute(e, i);
    a.setScalar(0);
    a.addScaledVector(rr, r.x);
    a.addScaledVector(ar, r.y);
    a.addScaledVector(sr, r.z);
    return a;
  }
  static isFrontFacing(e, t, n, i) {
    Qi.subVectors(n, t);
    Ji.subVectors(e, t);
    return Qi.cross(Ji).dot(i) < 0;
  }
  set(e, t, n) {
    this.a.copy(e);
    this.b.copy(t);
    this.c.copy(n);
    return this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    this.a.copy(e[t]);
    this.b.copy(e[n]);
    this.c.copy(e[i]);
    return this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    this.a.fromBufferAttribute(e, t);
    this.b.fromBufferAttribute(e, n);
    this.c.fromBufferAttribute(e, i);
    return this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.a.copy(e.a);
    this.b.copy(e.b);
    this.c.copy(e.c);
    return this;
  }
  getArea() {
    Qi.subVectors(this.c, this.b);
    Ji.subVectors(this.a, this.b);
    return Qi.cross(Ji).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return or.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return or.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, i, r) {
    return or.getInterpolation(e, this.a, this.b, this.c, t, n, i, r);
  }
  containsPoint(e) {
    return or.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return or.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a;
    const i = this.b;
    const r = this.c;
    let a;
    let s;
    Zi.subVectors(i, n);
    $i.subVectors(r, n);
    tr.subVectors(e, n);
    const o = Zi.dot(tr);
    const l = $i.dot(tr);
    if (o <= 0 && l <= 0) {
      return t.copy(n);
    }
    nr.subVectors(e, i);
    const c = Zi.dot(nr);
    const h = $i.dot(nr);
    if (c >= 0 && h <= c) {
      return t.copy(i);
    }
    const d = o * h - c * l;
    if (d <= 0 && o >= 0 && c <= 0) {
      a = o / (o - c);
      return t.copy(n).addScaledVector(Zi, a);
    }
    ir.subVectors(e, r);
    const u = Zi.dot(ir);
    const f = $i.dot(ir);
    if (f >= 0 && u <= f) {
      return t.copy(r);
    }
    const p = u * l - o * f;
    if (p <= 0 && l >= 0 && f <= 0) {
      s = l / (l - f);
      return t.copy(n).addScaledVector($i, s);
    }
    const g = c * f - u * h;
    if (g <= 0 && h - c >= 0 && u - f >= 0) {
      er.subVectors(r, i);
      s = (h - c) / (h - c + (u - f));
      return t.copy(i).addScaledVector(er, s);
    }
    const m = 1 / (g + p + d);
    a = p * m;
    s = d * m;
    return t.copy(n).addScaledVector(Zi, a).addScaledVector($i, s);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const lr = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
const cr = {
  h: 0,
  s: 0,
  l: 0
};
const hr = {
  h: 0,
  s: 0,
  l: 0
};
function dr(e, t, n) {
  if (n < 0) {
    n += 1;
  }
  if (n > 1) {
    n -= 1;
  }
  if (n < 1 / 6) {
    return e + (t - e) * 6 * n;
  } else if (n < 0.5) {
    return t;
  } else if (n < 2 / 3) {
    return e + (t - e) * 6 * (2 / 3 - n);
  } else {
    return e;
  }
}
export class Q1f {
  constructor(e, t, n) {
    this.isColor = true;
    this.r = 1;
    this.g = 1;
    this.b = 1;
    return this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === undefined && n === undefined) {
      const t = e;
      if (t && t.isColor) {
        this.copy(t);
      } else if (typeof t == "number") {
        this.setHex(t);
      } else if (typeof t == "string") {
        this.setStyle(t);
      }
    } else {
      this.setRGB(e, t, n);
    }
    return this;
  }
  setScalar(e) {
    this.r = e;
    this.g = e;
    this.b = e;
    return this;
  }
  setHex(e, t = er$) {
    e = Math.floor(e);
    this.r = (e >> 16 & 255) / 255;
    this.g = (e >> 8 & 255) / 255;
    this.b = (e & 255) / 255;
    ppV.colorSpaceToWorking(this, t);
    return this;
  }
  setRGB(e, t, n, i = ppV.workingColorSpace) {
    this.r = e;
    this.g = t;
    this.b = n;
    ppV.colorSpaceToWorking(this, i);
    return this;
  }
  setHSL(e, t, n, i = ppV.workingColorSpace) {
    e = mn(e, 1);
    t = gn(t, 0, 1);
    n = gn(n, 0, 1);
    if (t === 0) {
      this.r = this.g = this.b = n;
    } else {
      const i = n <= 0.5 ? n * (1 + t) : n + t - n * t;
      const r = n * 2 - i;
      this.r = dr(r, i, e + 1 / 3);
      this.g = dr(r, i, e);
      this.b = dr(r, i, e - 1 / 3);
    }
    ppV.colorSpaceToWorking(this, i);
    return this;
  }
  setStyle(e, t = er$) {
    function n(t) {
      if (t !== undefined && parseFloat(t) < 1) {
        R8M("Color: Alpha component of " + e + " will be ignored.");
      }
    }
    let i;
    if (i = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let r;
      const a = i[1];
      const s = i[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) {
            n(r[4]);
            return this.setRGB(Math.min(255, parseInt(r[1], 10)) / 255, Math.min(255, parseInt(r[2], 10)) / 255, Math.min(255, parseInt(r[3], 10)) / 255, t);
          }
          if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) {
            n(r[4]);
            return this.setRGB(Math.min(100, parseInt(r[1], 10)) / 100, Math.min(100, parseInt(r[2], 10)) / 100, Math.min(100, parseInt(r[3], 10)) / 100, t);
          }
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) {
            n(r[4]);
            return this.setHSL(parseFloat(r[1]) / 360, parseFloat(r[2]) / 100, parseFloat(r[3]) / 100, t);
          }
          break;
        default:
          R8M("Color: Unknown color model " + e);
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const n = i[1];
      const r = n.length;
      if (r === 3) {
        return this.setRGB(parseInt(n.charAt(0), 16) / 15, parseInt(n.charAt(1), 16) / 15, parseInt(n.charAt(2), 16) / 15, t);
      }
      if (r === 6) {
        return this.setHex(parseInt(n, 16), t);
      }
      R8M("Color: Invalid hex color " + e);
    } else if (e && e.length > 0) {
      return this.setColorName(e, t);
    }
    return this;
  }
  setColorName(e, t = er$) {
    const n = lr[e.toLowerCase()];
    if (n !== undefined) {
      this.setHex(n, t);
    } else {
      R8M("Color: Unknown color " + e);
    }
    return this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    this.r = e.r;
    this.g = e.g;
    this.b = e.b;
    return this;
  }
  copySRGBToLinear(e) {
    this.r = In(e.r);
    this.g = In(e.g);
    this.b = In(e.b);
    return this;
  }
  copyLinearToSRGB(e) {
    this.r = Ln(e.r);
    this.g = Ln(e.g);
    this.b = Ln(e.b);
    return this;
  }
  convertSRGBToLinear() {
    this.copySRGBToLinear(this);
    return this;
  }
  convertLinearToSRGB() {
    this.copyLinearToSRGB(this);
    return this;
  }
  getHex(e = er$) {
    ppV.workingToColorSpace(fr.copy(this), e);
    return Math.round(gn(fr.r * 255, 0, 255)) * 65536 + Math.round(gn(fr.g * 255, 0, 255)) * 256 + Math.round(gn(fr.b * 255, 0, 255));
  }
  getHexString(e = er$) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = ppV.workingColorSpace) {
    ppV.workingToColorSpace(fr.copy(this), t);
    const n = fr.r;
    const i = fr.g;
    const r = fr.b;
    const a = Math.max(n, i, r);
    const s = Math.min(n, i, r);
    let o;
    let l;
    const c = (s + a) / 2;
    if (s === a) {
      o = 0;
      l = 0;
    } else {
      const e = a - s;
      l = c <= 0.5 ? e / (a + s) : e / (2 - a - s);
      switch (a) {
        case n:
          o = (i - r) / e + (i < r ? 6 : 0);
          break;
        case i:
          o = (r - n) / e + 2;
          break;
        case r:
          o = (n - i) / e + 4;
      }
      o /= 6;
    }
    e.h = o;
    e.s = l;
    e.l = c;
    return e;
  }
  getRGB(e, t = ppV.workingColorSpace) {
    ppV.workingToColorSpace(fr.copy(this), t);
    e.r = fr.r;
    e.g = fr.g;
    e.b = fr.b;
    return e;
  }
  getStyle(e = er$) {
    ppV.workingToColorSpace(fr.copy(this), e);
    const t = fr.r;
    const n = fr.g;
    const i = fr.b;
    if (e !== er$) {
      return `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`;
    } else {
      return `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
    }
  }
  offsetHSL(e, t, n) {
    this.getHSL(cr);
    return this.setHSL(cr.h + e, cr.s + t, cr.l + n);
  }
  add(e) {
    this.r += e.r;
    this.g += e.g;
    this.b += e.b;
    return this;
  }
  addColors(e, t) {
    this.r = e.r + t.r;
    this.g = e.g + t.g;
    this.b = e.b + t.b;
    return this;
  }
  addScalar(e) {
    this.r += e;
    this.g += e;
    this.b += e;
    return this;
  }
  sub(e) {
    this.r = Math.max(0, this.r - e.r);
    this.g = Math.max(0, this.g - e.g);
    this.b = Math.max(0, this.b - e.b);
    return this;
  }
  multiply(e) {
    this.r *= e.r;
    this.g *= e.g;
    this.b *= e.b;
    return this;
  }
  multiplyScalar(e) {
    this.r *= e;
    this.g *= e;
    this.b *= e;
    return this;
  }
  lerp(e, t) {
    this.r += (e.r - this.r) * t;
    this.g += (e.g - this.g) * t;
    this.b += (e.b - this.b) * t;
    return this;
  }
  lerpColors(e, t, n) {
    this.r = e.r + (t.r - e.r) * n;
    this.g = e.g + (t.g - e.g) * n;
    this.b = e.b + (t.b - e.b) * n;
    return this;
  }
  lerpHSL(e, t) {
    this.getHSL(cr);
    e.getHSL(hr);
    const n = An(cr.h, hr.h, t);
    const i = An(cr.s, hr.s, t);
    const r = An(cr.l, hr.l, t);
    this.setHSL(n, i, r);
    return this;
  }
  setFromVector3(e) {
    this.r = e.x;
    this.g = e.y;
    this.b = e.z;
    return this;
  }
  applyMatrix3(e) {
    const t = this.r;
    const n = this.g;
    const i = this.b;
    const r = e.elements;
    this.r = r[0] * t + r[3] * n + r[6] * i;
    this.g = r[1] * t + r[4] * n + r[7] * i;
    this.b = r[2] * t + r[5] * n + r[8] * i;
    return this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    this.r = e[t];
    this.g = e[t + 1];
    this.b = e[t + 2];
    return this;
  }
  toArray(e = [], t = 0) {
    e[t] = this.r;
    e[t + 1] = this.g;
    e[t + 2] = this.b;
    return e;
  }
  fromBufferAttribute(e, t) {
    this.r = e.getX(t);
    this.g = e.getY(t);
    this.b = e.getZ(t);
    return this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r;
    yield this.g;
    yield this.b;
  }
}
const fr = new Q1f();
Q1f.NAMES = lr;
let pr = 0;
export class imn extends Qev {
  constructor() {
    super();
    this.isMaterial = true;
    Object.defineProperty(this, "id", {
      value: pr++
    });
    this.uuid = pn();
    this.name = "";
    this.type = "Material";
    this.blending = NTi;
    this.side = hB5;
    this.vertexColors = false;
    this.opacity = 1;
    this.transparent = false;
    this.alphaHash = false;
    this.blendSrc = ie2;
    this.blendDst = OuU;
    this.blendEquation = gO9;
    this.blendSrcAlpha = null;
    this.blendDstAlpha = null;
    this.blendEquationAlpha = null;
    this.blendColor = new Q1f(0, 0, 0);
    this.blendAlpha = 0;
    this.depthFunc = xSv;
    this.depthTest = true;
    this.depthWrite = true;
    this.stencilWriteMask = 255;
    this.stencilFunc = 519;
    this.stencilRef = 0;
    this.stencilFuncMask = 255;
    this.stencilFail = Gt;
    this.stencilZFail = Gt;
    this.stencilZPass = Gt;
    this.stencilWrite = false;
    this.clippingPlanes = null;
    this.clipIntersection = false;
    this.clipShadows = false;
    this.shadowSide = null;
    this.colorWrite = true;
    this.precision = null;
    this.polygonOffset = false;
    this.polygonOffsetFactor = 0;
    this.polygonOffsetUnits = 0;
    this.dithering = false;
    this.alphaToCoverage = false;
    this.premultipliedAlpha = false;
    this.forceSinglePass = false;
    this.allowOverride = true;
    this.visible = true;
    this.toneMapped = true;
    this.userData = {};
    this.version = 0;
    this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    if (this._alphaTest > 0 != e > 0) {
      this.version++;
    }
    this._alphaTest = e;
  }
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== undefined) {
      for (const t in e) {
        const n = e[t];
        if (n === undefined) {
          R8M(`Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const i = this[t];
        if (i !== undefined) {
          if (i && i.isColor) {
            i.set(n);
          } else if (i && i.isVector3 && n && n.isVector3) {
            i.copy(n);
          } else {
            this[t] = n;
          }
        } else {
          R8M(`Material: '${t}' is not a property of THREE.${this.type}.`);
        }
      }
    }
  }
  toJSON(e) {
    const t = e === undefined || typeof e == "string";
    if (t) {
      e = {
        textures: {},
        images: {}
      };
    }
    const n = {
      metadata: {
        version: 4.7,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    function i(e) {
      const t = [];
      for (const n in e) {
        const i = e[n];
        delete i.metadata;
        t.push(i);
      }
      return t;
    }
    n.uuid = this.uuid;
    n.type = this.type;
    if (this.name !== "") {
      n.name = this.name;
    }
    if (this.color && this.color.isColor) {
      n.color = this.color.getHex();
    }
    if (this.roughness !== undefined) {
      n.roughness = this.roughness;
    }
    if (this.metalness !== undefined) {
      n.metalness = this.metalness;
    }
    if (this.sheen !== undefined) {
      n.sheen = this.sheen;
    }
    if (this.sheenColor && this.sheenColor.isColor) {
      n.sheenColor = this.sheenColor.getHex();
    }
    if (this.sheenRoughness !== undefined) {
      n.sheenRoughness = this.sheenRoughness;
    }
    if (this.emissive && this.emissive.isColor) {
      n.emissive = this.emissive.getHex();
    }
    if (this.emissiveIntensity !== undefined && this.emissiveIntensity !== 1) {
      n.emissiveIntensity = this.emissiveIntensity;
    }
    if (this.specular && this.specular.isColor) {
      n.specular = this.specular.getHex();
    }
    if (this.specularIntensity !== undefined) {
      n.specularIntensity = this.specularIntensity;
    }
    if (this.specularColor && this.specularColor.isColor) {
      n.specularColor = this.specularColor.getHex();
    }
    if (this.shininess !== undefined) {
      n.shininess = this.shininess;
    }
    if (this.clearcoat !== undefined) {
      n.clearcoat = this.clearcoat;
    }
    if (this.clearcoatRoughness !== undefined) {
      n.clearcoatRoughness = this.clearcoatRoughness;
    }
    if (this.clearcoatMap && this.clearcoatMap.isTexture) {
      n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid;
    }
    if (this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture) {
      n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid;
    }
    if (this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture) {
      n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid;
      n.clearcoatNormalScale = this.clearcoatNormalScale.toArray();
    }
    if (this.sheenColorMap && this.sheenColorMap.isTexture) {
      n.sheenColorMap = this.sheenColorMap.toJSON(e).uuid;
    }
    if (this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture) {
      n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid;
    }
    if (this.dispersion !== undefined) {
      n.dispersion = this.dispersion;
    }
    if (this.iridescence !== undefined) {
      n.iridescence = this.iridescence;
    }
    if (this.iridescenceIOR !== undefined) {
      n.iridescenceIOR = this.iridescenceIOR;
    }
    if (this.iridescenceThicknessRange !== undefined) {
      n.iridescenceThicknessRange = this.iridescenceThicknessRange;
    }
    if (this.iridescenceMap && this.iridescenceMap.isTexture) {
      n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid;
    }
    if (this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture) {
      n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid;
    }
    if (this.anisotropy !== undefined) {
      n.anisotropy = this.anisotropy;
    }
    if (this.anisotropyRotation !== undefined) {
      n.anisotropyRotation = this.anisotropyRotation;
    }
    if (this.anisotropyMap && this.anisotropyMap.isTexture) {
      n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid;
    }
    if (this.map && this.map.isTexture) {
      n.map = this.map.toJSON(e).uuid;
    }
    if (this.matcap && this.matcap.isTexture) {
      n.matcap = this.matcap.toJSON(e).uuid;
    }
    if (this.alphaMap && this.alphaMap.isTexture) {
      n.alphaMap = this.alphaMap.toJSON(e).uuid;
    }
    if (this.lightMap && this.lightMap.isTexture) {
      n.lightMap = this.lightMap.toJSON(e).uuid;
      n.lightMapIntensity = this.lightMapIntensity;
    }
    if (this.aoMap && this.aoMap.isTexture) {
      n.aoMap = this.aoMap.toJSON(e).uuid;
      n.aoMapIntensity = this.aoMapIntensity;
    }
    if (this.bumpMap && this.bumpMap.isTexture) {
      n.bumpMap = this.bumpMap.toJSON(e).uuid;
      n.bumpScale = this.bumpScale;
    }
    if (this.normalMap && this.normalMap.isTexture) {
      n.normalMap = this.normalMap.toJSON(e).uuid;
      n.normalMapType = this.normalMapType;
      n.normalScale = this.normalScale.toArray();
    }
    if (this.displacementMap && this.displacementMap.isTexture) {
      n.displacementMap = this.displacementMap.toJSON(e).uuid;
      n.displacementScale = this.displacementScale;
      n.displacementBias = this.displacementBias;
    }
    if (this.roughnessMap && this.roughnessMap.isTexture) {
      n.roughnessMap = this.roughnessMap.toJSON(e).uuid;
    }
    if (this.metalnessMap && this.metalnessMap.isTexture) {
      n.metalnessMap = this.metalnessMap.toJSON(e).uuid;
    }
    if (this.emissiveMap && this.emissiveMap.isTexture) {
      n.emissiveMap = this.emissiveMap.toJSON(e).uuid;
    }
    if (this.specularMap && this.specularMap.isTexture) {
      n.specularMap = this.specularMap.toJSON(e).uuid;
    }
    if (this.specularIntensityMap && this.specularIntensityMap.isTexture) {
      n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid;
    }
    if (this.specularColorMap && this.specularColorMap.isTexture) {
      n.specularColorMap = this.specularColorMap.toJSON(e).uuid;
    }
    if (this.envMap && this.envMap.isTexture) {
      n.envMap = this.envMap.toJSON(e).uuid;
      if (this.combine !== undefined) {
        n.combine = this.combine;
      }
    }
    if (this.envMapRotation !== undefined) {
      n.envMapRotation = this.envMapRotation.toArray();
    }
    if (this.envMapIntensity !== undefined) {
      n.envMapIntensity = this.envMapIntensity;
    }
    if (this.reflectivity !== undefined) {
      n.reflectivity = this.reflectivity;
    }
    if (this.refractionRatio !== undefined) {
      n.refractionRatio = this.refractionRatio;
    }
    if (this.gradientMap && this.gradientMap.isTexture) {
      n.gradientMap = this.gradientMap.toJSON(e).uuid;
    }
    if (this.transmission !== undefined) {
      n.transmission = this.transmission;
    }
    if (this.transmissionMap && this.transmissionMap.isTexture) {
      n.transmissionMap = this.transmissionMap.toJSON(e).uuid;
    }
    if (this.thickness !== undefined) {
      n.thickness = this.thickness;
    }
    if (this.thicknessMap && this.thicknessMap.isTexture) {
      n.thicknessMap = this.thicknessMap.toJSON(e).uuid;
    }
    if (this.attenuationDistance !== undefined && this.attenuationDistance !== Infinity) {
      n.attenuationDistance = this.attenuationDistance;
    }
    if (this.attenuationColor !== undefined) {
      n.attenuationColor = this.attenuationColor.getHex();
    }
    if (this.size !== undefined) {
      n.size = this.size;
    }
    if (this.shadowSide !== null) {
      n.shadowSide = this.shadowSide;
    }
    if (this.sizeAttenuation !== undefined) {
      n.sizeAttenuation = this.sizeAttenuation;
    }
    if (this.blending !== NTi) {
      n.blending = this.blending;
    }
    if (this.side !== hB5) {
      n.side = this.side;
    }
    if (this.vertexColors === true) {
      n.vertexColors = true;
    }
    if (this.opacity < 1) {
      n.opacity = this.opacity;
    }
    if (this.transparent === true) {
      n.transparent = true;
    }
    if (this.blendSrc !== ie2) {
      n.blendSrc = this.blendSrc;
    }
    if (this.blendDst !== OuU) {
      n.blendDst = this.blendDst;
    }
    if (this.blendEquation !== gO9) {
      n.blendEquation = this.blendEquation;
    }
    if (this.blendSrcAlpha !== null) {
      n.blendSrcAlpha = this.blendSrcAlpha;
    }
    if (this.blendDstAlpha !== null) {
      n.blendDstAlpha = this.blendDstAlpha;
    }
    if (this.blendEquationAlpha !== null) {
      n.blendEquationAlpha = this.blendEquationAlpha;
    }
    if (this.blendColor && this.blendColor.isColor) {
      n.blendColor = this.blendColor.getHex();
    }
    if (this.blendAlpha !== 0) {
      n.blendAlpha = this.blendAlpha;
    }
    if (this.depthFunc !== xSv) {
      n.depthFunc = this.depthFunc;
    }
    if (this.depthTest === false) {
      n.depthTest = this.depthTest;
    }
    if (this.depthWrite === false) {
      n.depthWrite = this.depthWrite;
    }
    if (this.colorWrite === false) {
      n.colorWrite = this.colorWrite;
    }
    if (this.stencilWriteMask !== 255) {
      n.stencilWriteMask = this.stencilWriteMask;
    }
    if (this.stencilFunc !== 519) {
      n.stencilFunc = this.stencilFunc;
    }
    if (this.stencilRef !== 0) {
      n.stencilRef = this.stencilRef;
    }
    if (this.stencilFuncMask !== 255) {
      n.stencilFuncMask = this.stencilFuncMask;
    }
    if (this.stencilFail !== Gt) {
      n.stencilFail = this.stencilFail;
    }
    if (this.stencilZFail !== Gt) {
      n.stencilZFail = this.stencilZFail;
    }
    if (this.stencilZPass !== Gt) {
      n.stencilZPass = this.stencilZPass;
    }
    if (this.stencilWrite === true) {
      n.stencilWrite = this.stencilWrite;
    }
    if (this.rotation !== undefined && this.rotation !== 0) {
      n.rotation = this.rotation;
    }
    if (this.polygonOffset === true) {
      n.polygonOffset = true;
    }
    if (this.polygonOffsetFactor !== 0) {
      n.polygonOffsetFactor = this.polygonOffsetFactor;
    }
    if (this.polygonOffsetUnits !== 0) {
      n.polygonOffsetUnits = this.polygonOffsetUnits;
    }
    if (this.linewidth !== undefined && this.linewidth !== 1) {
      n.linewidth = this.linewidth;
    }
    if (this.dashSize !== undefined) {
      n.dashSize = this.dashSize;
    }
    if (this.gapSize !== undefined) {
      n.gapSize = this.gapSize;
    }
    if (this.scale !== undefined) {
      n.scale = this.scale;
    }
    if (this.dithering === true) {
      n.dithering = true;
    }
    if (this.alphaTest > 0) {
      n.alphaTest = this.alphaTest;
    }
    if (this.alphaHash === true) {
      n.alphaHash = true;
    }
    if (this.alphaToCoverage === true) {
      n.alphaToCoverage = true;
    }
    if (this.premultipliedAlpha === true) {
      n.premultipliedAlpha = true;
    }
    if (this.forceSinglePass === true) {
      n.forceSinglePass = true;
    }
    if (this.wireframe === true) {
      n.wireframe = true;
    }
    if (this.wireframeLinewidth > 1) {
      n.wireframeLinewidth = this.wireframeLinewidth;
    }
    if (this.wireframeLinecap !== "round") {
      n.wireframeLinecap = this.wireframeLinecap;
    }
    if (this.wireframeLinejoin !== "round") {
      n.wireframeLinejoin = this.wireframeLinejoin;
    }
    if (this.flatShading === true) {
      n.flatShading = true;
    }
    if (this.visible === false) {
      n.visible = false;
    }
    if (this.toneMapped === false) {
      n.toneMapped = false;
    }
    if (this.fog === false) {
      n.fog = false;
    }
    if (Object.keys(this.userData).length > 0) {
      n.userData = this.userData;
    }
    if (t) {
      const t = i(e.textures);
      const r = i(e.images);
      if (t.length > 0) {
        n.textures = t;
      }
      if (r.length > 0) {
        n.images = r;
      }
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name;
    this.blending = e.blending;
    this.side = e.side;
    this.vertexColors = e.vertexColors;
    this.opacity = e.opacity;
    this.transparent = e.transparent;
    this.blendSrc = e.blendSrc;
    this.blendDst = e.blendDst;
    this.blendEquation = e.blendEquation;
    this.blendSrcAlpha = e.blendSrcAlpha;
    this.blendDstAlpha = e.blendDstAlpha;
    this.blendEquationAlpha = e.blendEquationAlpha;
    this.blendColor.copy(e.blendColor);
    this.blendAlpha = e.blendAlpha;
    this.depthFunc = e.depthFunc;
    this.depthTest = e.depthTest;
    this.depthWrite = e.depthWrite;
    this.stencilWriteMask = e.stencilWriteMask;
    this.stencilFunc = e.stencilFunc;
    this.stencilRef = e.stencilRef;
    this.stencilFuncMask = e.stencilFuncMask;
    this.stencilFail = e.stencilFail;
    this.stencilZFail = e.stencilZFail;
    this.stencilZPass = e.stencilZPass;
    this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const e = t.length;
      n = new Array(e);
      for (let i = 0; i !== e; ++i) {
        n[i] = t[i].clone();
      }
    }
    this.clippingPlanes = n;
    this.clipIntersection = e.clipIntersection;
    this.clipShadows = e.clipShadows;
    this.shadowSide = e.shadowSide;
    this.colorWrite = e.colorWrite;
    this.precision = e.precision;
    this.polygonOffset = e.polygonOffset;
    this.polygonOffsetFactor = e.polygonOffsetFactor;
    this.polygonOffsetUnits = e.polygonOffsetUnits;
    this.dithering = e.dithering;
    this.alphaTest = e.alphaTest;
    this.alphaHash = e.alphaHash;
    this.alphaToCoverage = e.alphaToCoverage;
    this.premultipliedAlpha = e.premultipliedAlpha;
    this.forceSinglePass = e.forceSinglePass;
    this.visible = e.visible;
    this.toneMapped = e.toneMapped;
    this.userData = JSON.parse(JSON.stringify(e.userData));
    return this;
  }
  dispose() {
    this.dispatchEvent({
      type: "dispose"
    });
  }
  set needsUpdate(e) {
    if (e === true) {
      this.version++;
    }
  }
}
export class V9B extends imn {
  constructor(e) {
    super();
    this.isMeshBasicMaterial = true;
    this.type = "MeshBasicMaterial";
    this.color = new Q1f(16777215);
    this.map = null;
    this.lightMap = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.specularMap = null;
    this.alphaMap = null;
    this.envMap = null;
    this.envMapRotation = new O9p();
    this.combine = caT;
    this.reflectivity = 1;
    this.refractionRatio = 0.98;
    this.wireframe = false;
    this.wireframeLinewidth = 1;
    this.wireframeLinecap = "round";
    this.wireframeLinejoin = "round";
    this.fog = true;
    this.setValues(e);
  }
  copy(e) {
    super.copy(e);
    this.color.copy(e.color);
    this.map = e.map;
    this.lightMap = e.lightMap;
    this.lightMapIntensity = e.lightMapIntensity;
    this.aoMap = e.aoMap;
    this.aoMapIntensity = e.aoMapIntensity;
    this.specularMap = e.specularMap;
    this.alphaMap = e.alphaMap;
    this.envMap = e.envMap;
    this.envMapRotation.copy(e.envMapRotation);
    this.combine = e.combine;
    this.reflectivity = e.reflectivity;
    this.refractionRatio = e.refractionRatio;
    this.wireframe = e.wireframe;
    this.wireframeLinewidth = e.wireframeLinewidth;
    this.wireframeLinecap = e.wireframeLinecap;
    this.wireframeLinejoin = e.wireframeLinejoin;
    this.fog = e.fog;
    return this;
  }
}
const Ar = new Pq0();
const vr = new I9Y();
let br = 0;
export class THS {
  constructor(e, t, n = false) {
    if (Array.isArray(e)) {
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    }
    this.isBufferAttribute = true;
    Object.defineProperty(this, "id", {
      value: br++
    });
    this.name = "";
    this.array = e;
    this.itemSize = t;
    this.count = e !== undefined ? e.length / t : 0;
    this.normalized = n;
    this.usage = Qt;
    this.updateRanges = [];
    this.gpuType = RQf;
    this.version = 0;
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    if (e === true) {
      this.version++;
    }
  }
  setUsage(e) {
    this.usage = e;
    return this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({
      start: e,
      count: t
    });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    this.name = e.name;
    this.array = new e.array.constructor(e.array);
    this.itemSize = e.itemSize;
    this.count = e.count;
    this.normalized = e.normalized;
    this.usage = e.usage;
    this.gpuType = e.gpuType;
    return this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize;
    n *= t.itemSize;
    for (let i = 0, r = this.itemSize; i < r; i++) {
      this.array[e + i] = t.array[n + i];
    }
    return this;
  }
  copyArray(e) {
    this.array.set(e);
    return this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2) {
      for (let t = 0, n = this.count; t < n; t++) {
        vr.fromBufferAttribute(this, t);
        vr.applyMatrix3(e);
        this.setXY(t, vr.x, vr.y);
      }
    } else if (this.itemSize === 3) {
      for (let t = 0, n = this.count; t < n; t++) {
        Ar.fromBufferAttribute(this, t);
        Ar.applyMatrix3(e);
        this.setXYZ(t, Ar.x, Ar.y, Ar.z);
      }
    }
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++) {
      Ar.fromBufferAttribute(this, t);
      Ar.applyMatrix4(e);
      this.setXYZ(t, Ar.x, Ar.y, Ar.z);
    }
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++) {
      Ar.fromBufferAttribute(this, t);
      Ar.applyNormalMatrix(e);
      this.setXYZ(t, Ar.x, Ar.y, Ar.z);
    }
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++) {
      Ar.fromBufferAttribute(this, t);
      Ar.transformDirection(e);
      this.setXYZ(t, Ar.x, Ar.y, Ar.z);
    }
    return this;
  }
  set(e, t = 0) {
    this.array.set(e, t);
    return this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    if (this.normalized) {
      n = vn(n, this.array);
    }
    return n;
  }
  setComponent(e, t, n) {
    if (this.normalized) {
      n = bn(n, this.array);
    }
    this.array[e * this.itemSize + t] = n;
    return this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    if (this.normalized) {
      t = vn(t, this.array);
    }
    return t;
  }
  setX(e, t) {
    if (this.normalized) {
      t = bn(t, this.array);
    }
    this.array[e * this.itemSize] = t;
    return this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    if (this.normalized) {
      t = vn(t, this.array);
    }
    return t;
  }
  setY(e, t) {
    if (this.normalized) {
      t = bn(t, this.array);
    }
    this.array[e * this.itemSize + 1] = t;
    return this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    if (this.normalized) {
      t = vn(t, this.array);
    }
    return t;
  }
  setZ(e, t) {
    if (this.normalized) {
      t = bn(t, this.array);
    }
    this.array[e * this.itemSize + 2] = t;
    return this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    if (this.normalized) {
      t = vn(t, this.array);
    }
    return t;
  }
  setW(e, t) {
    if (this.normalized) {
      t = bn(t, this.array);
    }
    this.array[e * this.itemSize + 3] = t;
    return this;
  }
  setXY(e, t, n) {
    e *= this.itemSize;
    if (this.normalized) {
      t = bn(t, this.array);
      n = bn(n, this.array);
    }
    this.array[e + 0] = t;
    this.array[e + 1] = n;
    return this;
  }
  setXYZ(e, t, n, i) {
    e *= this.itemSize;
    if (this.normalized) {
      t = bn(t, this.array);
      n = bn(n, this.array);
      i = bn(i, this.array);
    }
    this.array[e + 0] = t;
    this.array[e + 1] = n;
    this.array[e + 2] = i;
    return this;
  }
  setXYZW(e, t, n, i, r) {
    e *= this.itemSize;
    if (this.normalized) {
      t = bn(t, this.array);
      n = bn(n, this.array);
      i = bn(i, this.array);
      r = bn(r, this.array);
    }
    this.array[e + 0] = t;
    this.array[e + 1] = n;
    this.array[e + 2] = i;
    this.array[e + 3] = r;
    return this;
  }
  onUpload(e) {
    this.onUploadCallback = e;
    return this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    if (this.name !== "") {
      e.name = this.name;
    }
    if (this.usage !== Qt) {
      e.usage = this.usage;
    }
    return e;
  }
}
export class A$4 extends THS {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
export class MW4 extends THS {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Sr extends THS {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let kr = 0;
const Tr = new kn4();
const Er = new B69();
const Mr = new Pq0();
const _r = new NRn();
const Cr = new NRn();
const Rr = new Pq0();
export class LoY extends Qev {
  constructor() {
    super();
    this.isBufferGeometry = true;
    Object.defineProperty(this, "id", {
      value: kr++
    });
    this.uuid = pn();
    this.name = "";
    this.type = "BufferGeometry";
    this.index = null;
    this.indirect = null;
    this.attributes = {};
    this.morphAttributes = {};
    this.morphTargetsRelative = false;
    this.groups = [];
    this.boundingBox = null;
    this.boundingSphere = null;
    this.drawRange = {
      start: 0,
      count: Infinity
    };
    this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    if (Array.isArray(e)) {
      this.index = new (AQS(e) ? MW4 : A$4)(e, 1);
    } else {
      this.index = e;
    }
    return this;
  }
  setIndirect(e) {
    this.indirect = e;
    return this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
    return this;
  }
  deleteAttribute(e) {
    delete this.attributes[e];
    return this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== undefined;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e;
    this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    if (t !== undefined) {
      t.applyMatrix4(e);
      t.needsUpdate = true;
    }
    const n = this.attributes.normal;
    if (n !== undefined) {
      const t = new dwI().getNormalMatrix(e);
      n.applyNormalMatrix(t);
      n.needsUpdate = true;
    }
    const i = this.attributes.tangent;
    if (i !== undefined) {
      i.transformDirection(e);
      i.needsUpdate = true;
    }
    if (this.boundingBox !== null) {
      this.computeBoundingBox();
    }
    if (this.boundingSphere !== null) {
      this.computeBoundingSphere();
    }
    return this;
  }
  applyQuaternion(e) {
    Tr.makeRotationFromQuaternion(e);
    this.applyMatrix4(Tr);
    return this;
  }
  rotateX(e) {
    Tr.makeRotationX(e);
    this.applyMatrix4(Tr);
    return this;
  }
  rotateY(e) {
    Tr.makeRotationY(e);
    this.applyMatrix4(Tr);
    return this;
  }
  rotateZ(e) {
    Tr.makeRotationZ(e);
    this.applyMatrix4(Tr);
    return this;
  }
  translate(e, t, n) {
    Tr.makeTranslation(e, t, n);
    this.applyMatrix4(Tr);
    return this;
  }
  scale(e, t, n) {
    Tr.makeScale(e, t, n);
    this.applyMatrix4(Tr);
    return this;
  }
  lookAt(e) {
    Er.lookAt(e);
    Er.updateMatrix();
    this.applyMatrix4(Er.matrix);
    return this;
  }
  center() {
    this.computeBoundingBox();
    this.boundingBox.getCenter(Mr).negate();
    this.translate(Mr.x, Mr.y, Mr.z);
    return this;
  }
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === undefined) {
      const t = [];
      for (let n = 0, i = e.length; n < i; n++) {
        const i = e[n];
        t.push(i.x, i.y, i.z || 0);
      }
      this.setAttribute("position", new Sr(t, 3));
    } else {
      const n = Math.min(e.length, t.count);
      for (let i = 0; i < n; i++) {
        const n = e[i];
        t.setXYZ(i, n.x, n.y, n.z || 0);
      }
      if (e.length > t.count) {
        R8M("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");
      }
      t.needsUpdate = true;
    }
    return this;
  }
  computeBoundingBox() {
    if (this.boundingBox === null) {
      this.boundingBox = new NRn();
    }
    const e = this.attributes.position;
    const t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      z3S("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this);
      this.boundingBox.set(new Pq0(-Infinity, -Infinity, -Infinity), new Pq0(Infinity, Infinity, Infinity));
      return;
    }
    if (e !== undefined) {
      this.boundingBox.setFromBufferAttribute(e);
      if (t) {
        for (let e = 0, n = t.length; e < n; e++) {
          const n = t[e];
          _r.setFromBufferAttribute(n);
          if (this.morphTargetsRelative) {
            Rr.addVectors(this.boundingBox.min, _r.min);
            this.boundingBox.expandByPoint(Rr);
            Rr.addVectors(this.boundingBox.max, _r.max);
            this.boundingBox.expandByPoint(Rr);
          } else {
            this.boundingBox.expandByPoint(_r.min);
            this.boundingBox.expandByPoint(_r.max);
          }
        }
      }
    } else {
      this.boundingBox.makeEmpty();
    }
    if (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) {
      z3S("BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The \"position\" attribute is likely to have NaN values.", this);
    }
  }
  computeBoundingSphere() {
    if (this.boundingSphere === null) {
      this.boundingSphere = new iyt();
    }
    const e = this.attributes.position;
    const t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      z3S("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this);
      this.boundingSphere.set(new Pq0(), Infinity);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      _r.setFromBufferAttribute(e);
      if (t) {
        for (let e = 0, n = t.length; e < n; e++) {
          const n = t[e];
          Cr.setFromBufferAttribute(n);
          if (this.morphTargetsRelative) {
            Rr.addVectors(_r.min, Cr.min);
            _r.expandByPoint(Rr);
            Rr.addVectors(_r.max, Cr.max);
            _r.expandByPoint(Rr);
          } else {
            _r.expandByPoint(Cr.min);
            _r.expandByPoint(Cr.max);
          }
        }
      }
      _r.getCenter(n);
      let i = 0;
      for (let t = 0, r = e.count; t < r; t++) {
        Rr.fromBufferAttribute(e, t);
        i = Math.max(i, n.distanceToSquared(Rr));
      }
      if (t) {
        for (let r = 0, a = t.length; r < a; r++) {
          const a = t[r];
          const s = this.morphTargetsRelative;
          for (let t = 0, r = a.count; t < r; t++) {
            Rr.fromBufferAttribute(a, t);
            if (s) {
              Mr.fromBufferAttribute(e, t);
              Rr.add(Mr);
            }
            i = Math.max(i, n.distanceToSquared(Rr));
          }
        }
      }
      this.boundingSphere.radius = Math.sqrt(i);
      if (isNaN(this.boundingSphere.radius)) {
        z3S("BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The \"position\" attribute is likely to have NaN values.", this);
      }
    }
  }
  computeTangents() {
    const e = this.index;
    const t = this.attributes;
    if (e === null || t.position === undefined || t.normal === undefined || t.uv === undefined) {
      z3S("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = t.position;
    const i = t.normal;
    const r = t.uv;
    if (this.hasAttribute("tangent") === false) {
      this.setAttribute("tangent", new THS(new Float32Array(n.count * 4), 4));
    }
    const a = this.getAttribute("tangent");
    const s = [];
    const o = [];
    for (let e = 0; e < n.count; e++) {
      s[e] = new Pq0();
      o[e] = new Pq0();
    }
    const l = new Pq0();
    const c = new Pq0();
    const h = new Pq0();
    const d = new I9Y();
    const u = new I9Y();
    const f = new I9Y();
    const p = new Pq0();
    const g = new Pq0();
    function m(e, t, i) {
      l.fromBufferAttribute(n, e);
      c.fromBufferAttribute(n, t);
      h.fromBufferAttribute(n, i);
      d.fromBufferAttribute(r, e);
      u.fromBufferAttribute(r, t);
      f.fromBufferAttribute(r, i);
      c.sub(l);
      h.sub(l);
      u.sub(d);
      f.sub(d);
      const a = 1 / (u.x * f.y - f.x * u.y);
      if (isFinite(a)) {
        p.copy(c).multiplyScalar(f.y).addScaledVector(h, -u.y).multiplyScalar(a);
        g.copy(h).multiplyScalar(u.x).addScaledVector(c, -f.x).multiplyScalar(a);
        s[e].add(p);
        s[t].add(p);
        s[i].add(p);
        o[e].add(g);
        o[t].add(g);
        o[i].add(g);
      }
    }
    let A = this.groups;
    if (A.length === 0) {
      A = [{
        start: 0,
        count: e.count
      }];
    }
    for (let t = 0, n = A.length; t < n; ++t) {
      const n = A[t];
      const i = n.start;
      for (let t = i, r = i + n.count; t < r; t += 3) {
        m(e.getX(t + 0), e.getX(t + 1), e.getX(t + 2));
      }
    }
    const v = new Pq0();
    const b = new Pq0();
    const y = new Pq0();
    const w = new Pq0();
    function x(e) {
      y.fromBufferAttribute(i, e);
      w.copy(y);
      const t = s[e];
      v.copy(t);
      v.sub(y.multiplyScalar(y.dot(t))).normalize();
      b.crossVectors(w, t);
      const n = b.dot(o[e]) < 0 ? -1 : 1;
      a.setXYZW(e, v.x, v.y, v.z, n);
    }
    for (let t = 0, n = A.length; t < n; ++t) {
      const n = A[t];
      const i = n.start;
      for (let t = i, r = i + n.count; t < r; t += 3) {
        x(e.getX(t + 0));
        x(e.getX(t + 1));
        x(e.getX(t + 2));
      }
    }
  }
  computeVertexNormals() {
    const e = this.index;
    const t = this.getAttribute("position");
    if (t !== undefined) {
      let n = this.getAttribute("normal");
      if (n === undefined) {
        n = new THS(new Float32Array(t.count * 3), 3);
        this.setAttribute("normal", n);
      } else {
        for (let e = 0, t = n.count; e < t; e++) {
          n.setXYZ(e, 0, 0, 0);
        }
      }
      const i = new Pq0();
      const r = new Pq0();
      const a = new Pq0();
      const s = new Pq0();
      const o = new Pq0();
      const l = new Pq0();
      const c = new Pq0();
      const h = new Pq0();
      if (e) {
        for (let d = 0, u = e.count; d < u; d += 3) {
          const u = e.getX(d + 0);
          const f = e.getX(d + 1);
          const p = e.getX(d + 2);
          i.fromBufferAttribute(t, u);
          r.fromBufferAttribute(t, f);
          a.fromBufferAttribute(t, p);
          c.subVectors(a, r);
          h.subVectors(i, r);
          c.cross(h);
          s.fromBufferAttribute(n, u);
          o.fromBufferAttribute(n, f);
          l.fromBufferAttribute(n, p);
          s.add(c);
          o.add(c);
          l.add(c);
          n.setXYZ(u, s.x, s.y, s.z);
          n.setXYZ(f, o.x, o.y, o.z);
          n.setXYZ(p, l.x, l.y, l.z);
        }
      } else {
        for (let e = 0, s = t.count; e < s; e += 3) {
          i.fromBufferAttribute(t, e + 0);
          r.fromBufferAttribute(t, e + 1);
          a.fromBufferAttribute(t, e + 2);
          c.subVectors(a, r);
          h.subVectors(i, r);
          c.cross(h);
          n.setXYZ(e + 0, c.x, c.y, c.z);
          n.setXYZ(e + 1, c.x, c.y, c.z);
          n.setXYZ(e + 2, c.x, c.y, c.z);
        }
      }
      this.normalizeNormals();
      n.needsUpdate = true;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++) {
      Rr.fromBufferAttribute(e, t);
      Rr.normalize();
      e.setXYZ(t, Rr.x, Rr.y, Rr.z);
    }
  }
  toNonIndexed() {
    function e(e, t) {
      const n = e.array;
      const i = e.itemSize;
      const r = e.normalized;
      const a = new n.constructor(t.length * i);
      let s = 0;
      let o = 0;
      for (let r = 0, l = t.length; r < l; r++) {
        s = e.isInterleavedBufferAttribute ? t[r] * e.data.stride + e.offset : t[r] * i;
        for (let e = 0; e < i; e++) {
          a[o++] = n[s++];
        }
      }
      return new THS(a, i, r);
    }
    if (this.index === null) {
      R8M("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.");
      return this;
    }
    const t = new LoY();
    const n = this.index.array;
    const i = this.attributes;
    for (const r in i) {
      const a = e(i[r], n);
      t.setAttribute(r, a);
    }
    const r = this.morphAttributes;
    for (const i in r) {
      const a = [];
      const s = r[i];
      for (let t = 0, i = s.length; t < i; t++) {
        const i = e(s[t], n);
        a.push(i);
      }
      t.morphAttributes[i] = a;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let e = 0, n = a.length; e < n; e++) {
      const n = a[e];
      t.addGroup(n.start, n.count, n.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.7,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    e.uuid = this.uuid;
    e.type = this.type;
    if (this.name !== "") {
      e.name = this.name;
    }
    if (Object.keys(this.userData).length > 0) {
      e.userData = this.userData;
    }
    if (this.parameters !== undefined) {
      const t = this.parameters;
      for (const n in t) {
        if (t[n] !== undefined) {
          e[n] = t[n];
        }
      }
      return e;
    }
    e.data = {
      attributes: {}
    };
    const t = this.index;
    if (t !== null) {
      e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array)
      };
    }
    const n = this.attributes;
    for (const t in n) {
      const i = n[t];
      e.data.attributes[t] = i.toJSON(e.data);
    }
    const i = {};
    let r = false;
    for (const t in this.morphAttributes) {
      const n = this.morphAttributes[t];
      const a = [];
      for (let t = 0, i = n.length; t < i; t++) {
        const i = n[t];
        a.push(i.toJSON(e.data));
      }
      if (a.length > 0) {
        i[t] = a;
        r = true;
      }
    }
    if (r) {
      e.data.morphAttributes = i;
      e.data.morphTargetsRelative = this.morphTargetsRelative;
    }
    const a = this.groups;
    if (a.length > 0) {
      e.data.groups = JSON.parse(JSON.stringify(a));
    }
    const s = this.boundingSphere;
    if (s !== null) {
      e.data.boundingSphere = s.toJSON();
    }
    return e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null;
    this.attributes = {};
    this.morphAttributes = {};
    this.groups = [];
    this.boundingBox = null;
    this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    if (n !== null) {
      this.setIndex(n.clone());
    }
    const i = e.attributes;
    for (const e in i) {
      const n = i[e];
      this.setAttribute(e, n.clone(t));
    }
    const r = e.morphAttributes;
    for (const e in r) {
      const n = [];
      const i = r[e];
      for (let e = 0, r = i.length; e < r; e++) {
        n.push(i[e].clone(t));
      }
      this.morphAttributes[e] = n;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let e = 0, t = a.length; e < t; e++) {
      const t = a[e];
      this.addGroup(t.start, t.count, t.materialIndex);
    }
    const s = e.boundingBox;
    if (s !== null) {
      this.boundingBox = s.clone();
    }
    const o = e.boundingSphere;
    if (o !== null) {
      this.boundingSphere = o.clone();
    }
    this.drawRange.start = e.drawRange.start;
    this.drawRange.count = e.drawRange.count;
    this.userData = e.userData;
    return this;
  }
  dispose() {
    this.dispatchEvent({
      type: "dispose"
    });
  }
}
const Ir = new kn4();
const Lr = new RlV();
const Ur = new iyt();
const Nr = new Pq0();
const zr = new Pq0();
const Dr = new Pq0();
const Br = new Pq0();
const Gr = new Pq0();
const Fr = new Pq0();
const Or = new Pq0();
const Wr = new Pq0();
export class eaF extends B69 {
  constructor(e = new LoY(), t = new V9B()) {
    super();
    this.isMesh = true;
    this.type = "Mesh";
    this.geometry = e;
    this.material = t;
    this.morphTargetDictionary = undefined;
    this.morphTargetInfluences = undefined;
    this.count = 1;
    this.updateMorphTargets();
  }
  copy(e, t) {
    super.copy(e, t);
    if (e.morphTargetInfluences !== undefined) {
      this.morphTargetInfluences = e.morphTargetInfluences.slice();
    }
    if (e.morphTargetDictionary !== undefined) {
      this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary);
    }
    this.material = Array.isArray(e.material) ? e.material.slice() : e.material;
    this.geometry = e.geometry;
    return this;
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes;
    const t = Object.keys(e);
    if (t.length > 0) {
      const n = e[t[0]];
      if (n !== undefined) {
        this.morphTargetInfluences = [];
        this.morphTargetDictionary = {};
        for (let e = 0, t = n.length; e < t; e++) {
          const t = n[e].name || String(e);
          this.morphTargetInfluences.push(0);
          this.morphTargetDictionary[t] = e;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry;
    const i = n.attributes.position;
    const r = n.morphAttributes.position;
    const a = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const s = this.morphTargetInfluences;
    if (r && s) {
      Fr.set(0, 0, 0);
      for (let n = 0, i = r.length; n < i; n++) {
        const i = s[n];
        const o = r[n];
        if (i !== 0) {
          Gr.fromBufferAttribute(o, e);
          if (a) {
            Fr.addScaledVector(Gr, i);
          } else {
            Fr.addScaledVector(Gr.sub(t), i);
          }
        }
      }
      t.add(Fr);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry;
    const i = this.material;
    const r = this.matrixWorld;
    if (i !== undefined) {
      if (n.boundingSphere === null) {
        n.computeBoundingSphere();
      }
      Ur.copy(n.boundingSphere);
      Ur.applyMatrix4(r);
      Lr.copy(e.ray).recast(e.near);
      if (Ur.containsPoint(Lr.origin) === false) {
        if (Lr.intersectSphere(Ur, Nr) === null) {
          return;
        }
        if (Lr.origin.distanceToSquared(Nr) > (e.far - e.near) ** 2) {
          return;
        }
      }
      Ir.copy(r).invert();
      Lr.copy(e.ray).applyMatrix4(Ir);
      if (n.boundingBox === null || Lr.intersectsBox(n.boundingBox) !== false) {
        this._computeIntersections(e, t, Lr);
      }
    }
  }
  _computeIntersections(e, t, n) {
    let i;
    const r = this.geometry;
    const a = this.material;
    const s = r.index;
    const o = r.attributes.position;
    const l = r.attributes.uv;
    const c = r.attributes.uv1;
    const h = r.attributes.normal;
    const d = r.groups;
    const u = r.drawRange;
    if (s !== null) {
      if (Array.isArray(a)) {
        for (let r = 0, o = d.length; r < o; r++) {
          const o = d[r];
          const f = a[o.materialIndex];
          for (let r = Math.max(o.start, u.start), a = Math.min(s.count, Math.min(o.start + o.count, u.start + u.count)); r < a; r += 3) {
            i = Hr(this, f, e, n, l, c, h, s.getX(r), s.getX(r + 1), s.getX(r + 2));
            if (i) {
              i.faceIndex = Math.floor(r / 3);
              i.face.materialIndex = o.materialIndex;
              t.push(i);
            }
          }
        }
      } else {
        for (let r = Math.max(0, u.start), o = Math.min(s.count, u.start + u.count); r < o; r += 3) {
          i = Hr(this, a, e, n, l, c, h, s.getX(r), s.getX(r + 1), s.getX(r + 2));
          if (i) {
            i.faceIndex = Math.floor(r / 3);
            t.push(i);
          }
        }
      }
    } else if (o !== undefined) {
      if (Array.isArray(a)) {
        for (let r = 0, s = d.length; r < s; r++) {
          const s = d[r];
          const f = a[s.materialIndex];
          for (let r = Math.max(s.start, u.start), a = Math.min(o.count, Math.min(s.start + s.count, u.start + u.count)); r < a; r += 3) {
            i = Hr(this, f, e, n, l, c, h, r, r + 1, r + 2);
            if (i) {
              i.faceIndex = Math.floor(r / 3);
              i.face.materialIndex = s.materialIndex;
              t.push(i);
            }
          }
        }
      } else {
        for (let r = Math.max(0, u.start), s = Math.min(o.count, u.start + u.count); r < s; r += 3) {
          i = Hr(this, a, e, n, l, c, h, r, r + 1, r + 2);
          if (i) {
            i.faceIndex = Math.floor(r / 3);
            t.push(i);
          }
        }
      }
    }
  }
}
function Hr(e, t, n, i, r, a, s, o, l, c) {
  e.getVertexPosition(o, zr);
  e.getVertexPosition(l, Dr);
  e.getVertexPosition(c, Br);
  const h = function (e, t, n, i, r, a, s, o) {
    let l;
    l = t.side === hsX ? i.intersectTriangle(s, a, r, true, o) : i.intersectTriangle(r, a, s, t.side === hB5, o);
    if (l === null) {
      return null;
    }
    Wr.copy(o);
    Wr.applyMatrix4(e.matrixWorld);
    const c = n.ray.origin.distanceTo(Wr);
    if (c < n.near || c > n.far) {
      return null;
    } else {
      return {
        distance: c,
        point: Wr.clone(),
        object: e
      };
    }
  }(e, t, n, i, zr, Dr, Br, Or);
  if (h) {
    const e = new Pq0();
    or.getBarycoord(Or, zr, Dr, Br, e);
    if (r) {
      h.uv = or.getInterpolatedAttribute(r, o, l, c, e, new I9Y());
    }
    if (a) {
      h.uv1 = or.getInterpolatedAttribute(a, o, l, c, e, new I9Y());
    }
    if (s) {
      h.normal = or.getInterpolatedAttribute(s, o, l, c, e, new Pq0());
      if (h.normal.dot(i.direction) > 0) {
        h.normal.multiplyScalar(-1);
      }
    }
    const t = {
      a: o,
      b: l,
      c,
      normal: new Pq0(),
      materialIndex: 0
    };
    or.getNormal(zr, Dr, Br, t.normal);
    h.face = t;
    h.barycoord = e;
  }
  return h;
}
export class iNn extends LoY {
  constructor(e = 1, t = 1, n = 1, i = 1, r = 1, a = 1) {
    super();
    this.type = "BoxGeometry";
    this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: i,
      heightSegments: r,
      depthSegments: a
    };
    const s = this;
    i = Math.floor(i);
    r = Math.floor(r);
    a = Math.floor(a);
    const o = [];
    const l = [];
    const c = [];
    const h = [];
    let d = 0;
    let u = 0;
    function f(e, t, n, i, r, a, f, p, g, m, A) {
      const v = a / g;
      const b = f / m;
      const y = a / 2;
      const w = f / 2;
      const x = p / 2;
      const S = g + 1;
      const k = m + 1;
      let T = 0;
      let E = 0;
      const M = new Pq0();
      for (let a = 0; a < k; a++) {
        const s = a * b - w;
        for (let o = 0; o < S; o++) {
          const d = o * v - y;
          M[e] = d * i;
          M[t] = s * r;
          M[n] = x;
          l.push(M.x, M.y, M.z);
          M[e] = 0;
          M[t] = 0;
          M[n] = p > 0 ? 1 : -1;
          c.push(M.x, M.y, M.z);
          h.push(o / g);
          h.push(1 - a / m);
          T += 1;
        }
      }
      for (let e = 0; e < m; e++) {
        for (let t = 0; t < g; t++) {
          const n = d + t + S * e;
          const i = d + t + S * (e + 1);
          const r = d + (t + 1) + S * (e + 1);
          const a = d + (t + 1) + S * e;
          o.push(n, i, a);
          o.push(i, r, a);
          E += 6;
        }
      }
      s.addGroup(u, E, A);
      u += E;
      d += T;
    }
    f("z", "y", "x", -1, -1, n, t, e, a, r, 0);
    f("z", "y", "x", 1, -1, n, t, -e, a, r, 1);
    f("x", "z", "y", 1, 1, e, n, t, i, a, 2);
    f("x", "z", "y", 1, -1, e, n, -t, i, a, 3);
    f("x", "y", "z", 1, -1, e, t, n, i, r, 4);
    f("x", "y", "z", -1, -1, e, t, -n, i, r, 5);
    this.setIndex(o);
    this.setAttribute("position", new Sr(l, 3));
    this.setAttribute("normal", new Sr(c, 3));
    this.setAttribute("uv", new Sr(h, 2));
  }
  copy(e) {
    super.copy(e);
    this.parameters = Object.assign({}, e.parameters);
    return this;
  }
  static fromJSON(e) {
    return new iNn(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
export function lxW(e) {
  const t = {};
  for (const n in e) {
    t[n] = {};
    for (const i in e[n]) {
      const r = e[n][i];
      if (r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion)) {
        if (r.isRenderTargetTexture) {
          R8M("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().");
          t[n][i] = null;
        } else {
          t[n][i] = r.clone();
        }
      } else if (Array.isArray(r)) {
        t[n][i] = r.slice();
      } else {
        t[n][i] = r;
      }
    }
  }
  return t;
}
export function Iit(e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = lxW(e[n]);
    for (const e in i) {
      t[e] = i[e];
    }
  }
  return t;
}
export function _Ut(e) {
  const t = e.getRenderTarget();
  if (t === null) {
    return e.outputColorSpace;
  } else if (t.isXRRenderTarget === true) {
    return t.texture.colorSpace;
  } else {
    return ppV.workingColorSpace;
  }
}
export const LlO = {
  clone: lxW,
  merge: Iit
};
export class BKk extends imn {
  constructor(e) {
    super();
    this.isShaderMaterial = true;
    this.type = "ShaderMaterial";
    this.defines = {};
    this.uniforms = {};
    this.uniformsGroups = [];
    this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";
    this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";
    this.linewidth = 1;
    this.wireframe = false;
    this.wireframeLinewidth = 1;
    this.fog = false;
    this.lights = false;
    this.clipping = false;
    this.forceSinglePass = true;
    this.extensions = {
      clipCullDistance: false,
      multiDraw: false
    };
    this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    };
    this.index0AttributeName = undefined;
    this.uniformsNeedUpdate = false;
    this.glslVersion = null;
    if (e !== undefined) {
      this.setValues(e);
    }
  }
  copy(e) {
    super.copy(e);
    this.fragmentShader = e.fragmentShader;
    this.vertexShader = e.vertexShader;
    this.uniforms = lxW(e.uniforms);
    this.uniformsGroups = function (e) {
      const t = [];
      for (let n = 0; n < e.length; n++) {
        t.push(e[n].clone());
      }
      return t;
    }(e.uniformsGroups);
    this.defines = Object.assign({}, e.defines);
    this.wireframe = e.wireframe;
    this.wireframeLinewidth = e.wireframeLinewidth;
    this.fog = e.fog;
    this.lights = e.lights;
    this.clipping = e.clipping;
    this.extensions = Object.assign({}, e.extensions);
    this.glslVersion = e.glslVersion;
    return this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion;
    t.uniforms = {};
    for (const n in this.uniforms) {
      const i = this.uniforms[n].value;
      if (i && i.isTexture) {
        t.uniforms[n] = {
          type: "t",
          value: i.toJSON(e).uuid
        };
      } else if (i && i.isColor) {
        t.uniforms[n] = {
          type: "c",
          value: i.getHex()
        };
      } else if (i && i.isVector2) {
        t.uniforms[n] = {
          type: "v2",
          value: i.toArray()
        };
      } else if (i && i.isVector3) {
        t.uniforms[n] = {
          type: "v3",
          value: i.toArray()
        };
      } else if (i && i.isVector4) {
        t.uniforms[n] = {
          type: "v4",
          value: i.toArray()
        };
      } else if (i && i.isMatrix3) {
        t.uniforms[n] = {
          type: "m3",
          value: i.toArray()
        };
      } else if (i && i.isMatrix4) {
        t.uniforms[n] = {
          type: "m4",
          value: i.toArray()
        };
      } else {
        t.uniforms[n] = {
          value: i
        };
      }
    }
    if (Object.keys(this.defines).length > 0) {
      t.defines = this.defines;
    }
    t.vertexShader = this.vertexShader;
    t.fragmentShader = this.fragmentShader;
    t.lights = this.lights;
    t.clipping = this.clipping;
    const n = {};
    for (const e in this.extensions) {
      if (this.extensions[e] === true) {
        n[e] = true;
      }
    }
    if (Object.keys(n).length > 0) {
      t.extensions = n;
    }
    return t;
  }
}
class Yr extends B69 {
  constructor() {
    super();
    this.isCamera = true;
    this.type = "Camera";
    this.matrixWorldInverse = new kn4();
    this.projectionMatrix = new kn4();
    this.projectionMatrixInverse = new kn4();
    this.coordinateSystem = TdN;
    this._reversedDepth = false;
  }
  get reversedDepth() {
    return this._reversedDepth;
  }
  copy(e, t) {
    super.copy(e, t);
    this.matrixWorldInverse.copy(e.matrixWorldInverse);
    this.projectionMatrix.copy(e.projectionMatrix);
    this.projectionMatrixInverse.copy(e.projectionMatrixInverse);
    this.coordinateSystem = e.coordinateSystem;
    return this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e);
    this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t);
    this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Zr = new Pq0();
const $r = new I9Y();
const ea = new I9Y();
export class ubm extends Yr {
  constructor(e = 50, t = 1, n = 0.1, i = 2000) {
    super();
    this.isPerspectiveCamera = true;
    this.type = "PerspectiveCamera";
    this.fov = e;
    this.zoom = 1;
    this.near = n;
    this.far = i;
    this.focus = 10;
    this.aspect = t;
    this.view = null;
    this.filmGauge = 35;
    this.filmOffset = 0;
    this.updateProjectionMatrix();
  }
  copy(e, t) {
    super.copy(e, t);
    this.fov = e.fov;
    this.zoom = e.zoom;
    this.near = e.near;
    this.far = e.far;
    this.focus = e.focus;
    this.aspect = e.aspect;
    this.view = e.view === null ? null : Object.assign({}, e.view);
    this.filmGauge = e.filmGauge;
    this.filmOffset = e.filmOffset;
    return this;
  }
  setFocalLength(e) {
    const t = this.getFilmHeight() * 0.5 / e;
    this.fov = a55 * 2 * Math.atan(t);
    this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(un * 0.5 * this.fov);
    return this.getFilmHeight() * 0.5 / e;
  }
  getEffectiveFOV() {
    return a55 * 2 * Math.atan(Math.tan(un * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, n) {
    Zr.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse);
    t.set(Zr.x, Zr.y).multiplyScalar(-e / Zr.z);
    Zr.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse);
    n.set(Zr.x, Zr.y).multiplyScalar(-e / Zr.z);
  }
  getViewSize(e, t) {
    this.getViewBounds(e, $r, ea);
    return t.subVectors(ea, $r);
  }
  setViewOffset(e, t, n, i, r, a) {
    this.aspect = e / t;
    if (this.view === null) {
      this.view = {
        enabled: true,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      };
    }
    this.view.enabled = true;
    this.view.fullWidth = e;
    this.view.fullHeight = t;
    this.view.offsetX = n;
    this.view.offsetY = i;
    this.view.width = r;
    this.view.height = a;
    this.updateProjectionMatrix();
  }
  clearViewOffset() {
    if (this.view !== null) {
      this.view.enabled = false;
    }
    this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(un * 0.5 * this.fov) / this.zoom;
    let n = t * 2;
    let i = this.aspect * n;
    let r = i * -0.5;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const e = a.fullWidth;
      const s = a.fullHeight;
      r += a.offsetX * i / e;
      t -= a.offsetY * n / s;
      i *= a.width / e;
      n *= a.height / s;
    }
    const s = this.filmOffset;
    if (s !== 0) {
      r += e * s / this.getFilmWidth();
    }
    this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far, this.coordinateSystem, this.reversedDepth);
    this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.object.fov = this.fov;
    t.object.zoom = this.zoom;
    t.object.near = this.near;
    t.object.far = this.far;
    t.object.focus = this.focus;
    t.object.aspect = this.aspect;
    if (this.view !== null) {
      t.object.view = Object.assign({}, this.view);
    }
    t.object.filmGauge = this.filmGauge;
    t.object.filmOffset = this.filmOffset;
    return t;
  }
}
const na = -90;
class ia extends B69 {
  constructor(e, t, n) {
    super();
    this.type = "CubeCamera";
    this.renderTarget = n;
    this.coordinateSystem = null;
    this.activeMipmapLevel = 0;
    const i = new ubm(na, 1, e, t);
    i.layers = this.layers;
    this.add(i);
    const r = new ubm(na, 1, e, t);
    r.layers = this.layers;
    this.add(r);
    const a = new ubm(na, 1, e, t);
    a.layers = this.layers;
    this.add(a);
    const s = new ubm(na, 1, e, t);
    s.layers = this.layers;
    this.add(s);
    const o = new ubm(na, 1, e, t);
    o.layers = this.layers;
    this.add(o);
    const l = new ubm(na, 1, e, t);
    l.layers = this.layers;
    this.add(l);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem;
    const t = this.children.concat();
    const [n, i, r, a, s, o] = t;
    for (const e of t) {
      this.remove(e);
    }
    if (e === TdN) {
      n.up.set(0, 1, 0);
      n.lookAt(1, 0, 0);
      i.up.set(0, 1, 0);
      i.lookAt(-1, 0, 0);
      r.up.set(0, 0, -1);
      r.lookAt(0, 1, 0);
      a.up.set(0, 0, 1);
      a.lookAt(0, -1, 0);
      s.up.set(0, 1, 0);
      s.lookAt(0, 0, 1);
      o.up.set(0, 1, 0);
      o.lookAt(0, 0, -1);
    } else {
      if (e !== Yt) {
        throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
      }
      n.up.set(0, -1, 0);
      n.lookAt(-1, 0, 0);
      i.up.set(0, -1, 0);
      i.lookAt(1, 0, 0);
      r.up.set(0, 0, 1);
      r.lookAt(0, 1, 0);
      a.up.set(0, 0, -1);
      a.lookAt(0, -1, 0);
      s.up.set(0, -1, 0);
      s.lookAt(0, 0, 1);
      o.up.set(0, -1, 0);
      o.lookAt(0, 0, -1);
    }
    for (const e of t) {
      this.add(e);
      e.updateMatrixWorld();
    }
  }
  update(e, t) {
    if (this.parent === null) {
      this.updateMatrixWorld();
    }
    const {
      renderTarget: n,
      activeMipmapLevel: i
    } = this;
    if (this.coordinateSystem !== e.coordinateSystem) {
      this.coordinateSystem = e.coordinateSystem;
      this.updateCoordinateSystem();
    }
    const [r, a, s, o, l, c] = this.children;
    const h = e.getRenderTarget();
    const d = e.getActiveCubeFace();
    const u = e.getActiveMipmapLevel();
    const f = e.xr.enabled;
    e.xr.enabled = false;
    const p = n.texture.generateMipmaps;
    n.texture.generateMipmaps = false;
    e.setRenderTarget(n, 0, i);
    e.render(t, r);
    e.setRenderTarget(n, 1, i);
    e.render(t, a);
    e.setRenderTarget(n, 2, i);
    e.render(t, s);
    e.setRenderTarget(n, 3, i);
    e.render(t, o);
    e.setRenderTarget(n, 4, i);
    e.render(t, l);
    n.texture.generateMipmaps = p;
    e.setRenderTarget(n, 5, i);
    e.render(t, c);
    e.setRenderTarget(h, d, u);
    e.xr.enabled = f;
    n.texture.needsPMREMUpdate = true;
  }
}
export class b4q extends gPd {
  constructor(e = [], t = hy7, n, i, r, a, s, o, l, c) {
    super(e, t, n, i, r, a, s, o, l, c);
    this.isCubeTexture = true;
    this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
export class o6l extends nWS {
  constructor(e = 1, t = {}) {
    super(e, e, t);
    this.isWebGLCubeRenderTarget = true;
    const n = {
      width: e,
      height: e,
      depth: 1
    };
    const i = [n, n, n, n, n, n];
    this.texture = new b4q(i);
    this._setTextureOptions(t);
    this.texture.isRenderTargetTexture = true;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type;
    this.texture.colorSpace = t.colorSpace;
    this.texture.generateMipmaps = t.generateMipmaps;
    this.texture.minFilter = t.minFilter;
    this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: {
          value: null
        }
      },
      vertexShader: "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",
      fragmentShader: "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t"
    };
    const i = new iNn(5, 5, 5);
    const r = new BKk({
      name: "CubemapFromEquirect",
      uniforms: lxW(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: hsX,
      blending: XIg
    });
    r.uniforms.tEquirect.value = t;
    const a = new eaF(i, r);
    const s = t.minFilter;
    if (t.minFilter === $_I) {
      t.minFilter = k6q;
    }
    new ia(1, 10, this).update(e, a);
    t.minFilter = s;
    a.geometry.dispose();
    a.material.dispose();
    return this;
  }
  clear(e, t = true, n = true, i = true) {
    const r = e.getRenderTarget();
    for (let r = 0; r < 6; r++) {
      e.setRenderTarget(this, r);
      e.clear(t, n, i);
    }
    e.setRenderTarget(r);
  }
}
export class YJl extends B69 {
  constructor() {
    super();
    this.isGroup = true;
    this.type = "Group";
  }
}
const oa = {
  type: "move"
};
export class R3r {
  constructor() {
    this._targetRay = null;
    this._grip = null;
    this._hand = null;
  }
  getHandSpace() {
    if (this._hand === null) {
      this._hand = new YJl();
      this._hand.matrixAutoUpdate = false;
      this._hand.visible = false;
      this._hand.joints = {};
      this._hand.inputState = {
        pinching: false
      };
    }
    return this._hand;
  }
  getTargetRaySpace() {
    if (this._targetRay === null) {
      this._targetRay = new YJl();
      this._targetRay.matrixAutoUpdate = false;
      this._targetRay.visible = false;
      this._targetRay.hasLinearVelocity = false;
      this._targetRay.linearVelocity = new Pq0();
      this._targetRay.hasAngularVelocity = false;
      this._targetRay.angularVelocity = new Pq0();
    }
    return this._targetRay;
  }
  getGripSpace() {
    if (this._grip === null) {
      this._grip = new YJl();
      this._grip.matrixAutoUpdate = false;
      this._grip.visible = false;
      this._grip.hasLinearVelocity = false;
      this._grip.linearVelocity = new Pq0();
      this._grip.hasAngularVelocity = false;
      this._grip.angularVelocity = new Pq0();
    }
    return this._grip;
  }
  dispatchEvent(e) {
    if (this._targetRay !== null) {
      this._targetRay.dispatchEvent(e);
    }
    if (this._grip !== null) {
      this._grip.dispatchEvent(e);
    }
    if (this._hand !== null) {
      this._hand.dispatchEvent(e);
    }
    return this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) {
        for (const n of e.hand.values()) {
          this._getHandJoint(t, n);
        }
      }
    }
    this.dispatchEvent({
      type: "connected",
      data: e
    });
    return this;
  }
  disconnect(e) {
    this.dispatchEvent({
      type: "disconnected",
      data: e
    });
    if (this._targetRay !== null) {
      this._targetRay.visible = false;
    }
    if (this._grip !== null) {
      this._grip.visible = false;
    }
    if (this._hand !== null) {
      this._hand.visible = false;
    }
    return this;
  }
  update(e, t, n) {
    let i = null;
    let r = null;
    let a = null;
    const s = this._targetRay;
    const o = this._grip;
    const l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        a = true;
        for (const i of e.hand.values()) {
          const e = t.getJointPose(i, n);
          const r = this._getHandJoint(l, i);
          if (e !== null) {
            r.matrix.fromArray(e.transform.matrix);
            r.matrix.decompose(r.position, r.rotation, r.scale);
            r.matrixWorldNeedsUpdate = true;
            r.jointRadius = e.radius;
          }
          r.visible = e !== null;
        }
        const i = l.joints["index-finger-tip"];
        const r = l.joints["thumb-tip"];
        const s = i.position.distanceTo(r.position);
        const o = 0.02;
        const c = 0.005;
        if (l.inputState.pinching && s > o + c) {
          l.inputState.pinching = false;
          this.dispatchEvent({
            type: "pinchend",
            handedness: e.handedness,
            target: this
          });
        } else if (!l.inputState.pinching && s <= o - c) {
          l.inputState.pinching = true;
          this.dispatchEvent({
            type: "pinchstart",
            handedness: e.handedness,
            target: this
          });
        }
      } else if (o !== null && e.gripSpace) {
        r = t.getPose(e.gripSpace, n);
        if (r !== null) {
          o.matrix.fromArray(r.transform.matrix);
          o.matrix.decompose(o.position, o.rotation, o.scale);
          o.matrixWorldNeedsUpdate = true;
          if (r.linearVelocity) {
            o.hasLinearVelocity = true;
            o.linearVelocity.copy(r.linearVelocity);
          } else {
            o.hasLinearVelocity = false;
          }
          if (r.angularVelocity) {
            o.hasAngularVelocity = true;
            o.angularVelocity.copy(r.angularVelocity);
          } else {
            o.hasAngularVelocity = false;
          }
        }
      }
      if (s !== null) {
        i = t.getPose(e.targetRaySpace, n);
        if (i === null && r !== null) {
          i = r;
        }
        if (i !== null) {
          s.matrix.fromArray(i.transform.matrix);
          s.matrix.decompose(s.position, s.rotation, s.scale);
          s.matrixWorldNeedsUpdate = true;
          if (i.linearVelocity) {
            s.hasLinearVelocity = true;
            s.linearVelocity.copy(i.linearVelocity);
          } else {
            s.hasLinearVelocity = false;
          }
          if (i.angularVelocity) {
            s.hasAngularVelocity = true;
            s.angularVelocity.copy(i.angularVelocity);
          } else {
            s.hasAngularVelocity = false;
          }
          this.dispatchEvent(oa);
        }
      }
    }
    if (s !== null) {
      s.visible = i !== null;
    }
    if (o !== null) {
      o.visible = r !== null;
    }
    if (l !== null) {
      l.visible = a !== null;
    }
    return this;
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === undefined) {
      const n = new YJl();
      n.matrixAutoUpdate = false;
      n.visible = false;
      e.joints[t.jointName] = n;
      e.add(n);
    }
    return e.joints[t.jointName];
  }
}
export class jUj {
  constructor(e, t = 1, n = 1000) {
    this.isFog = true;
    this.name = "";
    this.color = new Q1f(e);
    this.near = t;
    this.far = n;
  }
  clone() {
    return new jUj(this.color, this.near, this.far);
  }
  toJSON() {
    return {
      type: "Fog",
      name: this.name,
      color: this.color.getHex(),
      near: this.near,
      far: this.far
    };
  }
}
export class Z58 extends B69 {
  constructor() {
    super();
    this.isScene = true;
    this.type = "Scene";
    this.background = null;
    this.environment = null;
    this.fog = null;
    this.backgroundBlurriness = 0;
    this.backgroundIntensity = 1;
    this.backgroundRotation = new O9p();
    this.environmentIntensity = 1;
    this.environmentRotation = new O9p();
    this.overrideMaterial = null;
    if (typeof __THREE_DEVTOOLS__ != "undefined") {
      __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
        detail: this
      }));
    }
  }
  copy(e, t) {
    super.copy(e, t);
    if (e.background !== null) {
      this.background = e.background.clone();
    }
    if (e.environment !== null) {
      this.environment = e.environment.clone();
    }
    if (e.fog !== null) {
      this.fog = e.fog.clone();
    }
    this.backgroundBlurriness = e.backgroundBlurriness;
    this.backgroundIntensity = e.backgroundIntensity;
    this.backgroundRotation.copy(e.backgroundRotation);
    this.environmentIntensity = e.environmentIntensity;
    this.environmentRotation.copy(e.environmentRotation);
    if (e.overrideMaterial !== null) {
      this.overrideMaterial = e.overrideMaterial.clone();
    }
    this.matrixAutoUpdate = e.matrixAutoUpdate;
    return this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    if (this.fog !== null) {
      t.object.fog = this.fog.toJSON();
    }
    if (this.backgroundBlurriness > 0) {
      t.object.backgroundBlurriness = this.backgroundBlurriness;
    }
    if (this.backgroundIntensity !== 1) {
      t.object.backgroundIntensity = this.backgroundIntensity;
    }
    t.object.backgroundRotation = this.backgroundRotation.toArray();
    if (this.environmentIntensity !== 1) {
      t.object.environmentIntensity = this.environmentIntensity;
    }
    t.object.environmentRotation = this.environmentRotation.toArray();
    return t;
  }
}
export class eB$ {
  constructor(e, t) {
    this.isInterleavedBuffer = true;
    this.array = e;
    this.stride = t;
    this.count = e !== undefined ? e.length / t : 0;
    this.usage = Qt;
    this.updateRanges = [];
    this.version = 0;
    this.uuid = pn();
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    if (e === true) {
      this.version++;
    }
  }
  setUsage(e) {
    this.usage = e;
    return this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({
      start: e,
      count: t
    });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    this.array = new e.array.constructor(e.array);
    this.count = e.count;
    this.stride = e.stride;
    this.usage = e.usage;
    return this;
  }
  copyAt(e, t, n) {
    e *= this.stride;
    n *= t.stride;
    for (let i = 0, r = this.stride; i < r; i++) {
      this.array[e + i] = t.array[n + i];
    }
    return this;
  }
  set(e, t = 0) {
    this.array.set(e, t);
    return this;
  }
  clone(e) {
    if (e.arrayBuffers === undefined) {
      e.arrayBuffers = {};
    }
    if (this.array.buffer._uuid === undefined) {
      this.array.buffer._uuid = pn();
    }
    if (e.arrayBuffers[this.array.buffer._uuid] === undefined) {
      e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer;
    }
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]);
    const n = new this.constructor(t, this.stride);
    n.setUsage(this.usage);
    return n;
  }
  onUpload(e) {
    this.onUploadCallback = e;
    return this;
  }
  toJSON(e) {
    if (e.arrayBuffers === undefined) {
      e.arrayBuffers = {};
    }
    if (this.array.buffer._uuid === undefined) {
      this.array.buffer._uuid = pn();
    }
    if (e.arrayBuffers[this.array.buffer._uuid] === undefined) {
      e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer));
    }
    return {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const ua = new Pq0();
export class eHs {
  constructor(e, t, n, i = false) {
    this.isInterleavedBufferAttribute = true;
    this.name = "";
    this.data = e;
    this.itemSize = t;
    this.offset = n;
    this.normalized = i;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++) {
      ua.fromBufferAttribute(this, t);
      ua.applyMatrix4(e);
      this.setXYZ(t, ua.x, ua.y, ua.z);
    }
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++) {
      ua.fromBufferAttribute(this, t);
      ua.applyNormalMatrix(e);
      this.setXYZ(t, ua.x, ua.y, ua.z);
    }
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++) {
      ua.fromBufferAttribute(this, t);
      ua.transformDirection(e);
      this.setXYZ(t, ua.x, ua.y, ua.z);
    }
    return this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.data.stride + this.offset + t];
    if (this.normalized) {
      n = vn(n, this.array);
    }
    return n;
  }
  setComponent(e, t, n) {
    if (this.normalized) {
      n = bn(n, this.array);
    }
    this.data.array[e * this.data.stride + this.offset + t] = n;
    return this;
  }
  setX(e, t) {
    if (this.normalized) {
      t = bn(t, this.array);
    }
    this.data.array[e * this.data.stride + this.offset] = t;
    return this;
  }
  setY(e, t) {
    if (this.normalized) {
      t = bn(t, this.array);
    }
    this.data.array[e * this.data.stride + this.offset + 1] = t;
    return this;
  }
  setZ(e, t) {
    if (this.normalized) {
      t = bn(t, this.array);
    }
    this.data.array[e * this.data.stride + this.offset + 2] = t;
    return this;
  }
  setW(e, t) {
    if (this.normalized) {
      t = bn(t, this.array);
    }
    this.data.array[e * this.data.stride + this.offset + 3] = t;
    return this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    if (this.normalized) {
      t = vn(t, this.array);
    }
    return t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    if (this.normalized) {
      t = vn(t, this.array);
    }
    return t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    if (this.normalized) {
      t = vn(t, this.array);
    }
    return t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    if (this.normalized) {
      t = vn(t, this.array);
    }
    return t;
  }
  setXY(e, t, n) {
    e = e * this.data.stride + this.offset;
    if (this.normalized) {
      t = bn(t, this.array);
      n = bn(n, this.array);
    }
    this.data.array[e + 0] = t;
    this.data.array[e + 1] = n;
    return this;
  }
  setXYZ(e, t, n, i) {
    e = e * this.data.stride + this.offset;
    if (this.normalized) {
      t = bn(t, this.array);
      n = bn(n, this.array);
      i = bn(i, this.array);
    }
    this.data.array[e + 0] = t;
    this.data.array[e + 1] = n;
    this.data.array[e + 2] = i;
    return this;
  }
  setXYZW(e, t, n, i, r) {
    e = e * this.data.stride + this.offset;
    if (this.normalized) {
      t = bn(t, this.array);
      n = bn(n, this.array);
      i = bn(i, this.array);
      r = bn(r, this.array);
    }
    this.data.array[e + 0] = t;
    this.data.array[e + 1] = n;
    this.data.array[e + 2] = i;
    this.data.array[e + 3] = r;
    return this;
  }
  clone(e) {
    if (e === undefined) {
      Rm2("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const e = [];
      for (let t = 0; t < this.count; t++) {
        const n = t * this.data.stride + this.offset;
        for (let t = 0; t < this.itemSize; t++) {
          e.push(this.data.array[n + t]);
        }
      }
      return new THS(new this.array.constructor(e), this.itemSize, this.normalized);
    }
    if (e.interleavedBuffers === undefined) {
      e.interleavedBuffers = {};
    }
    if (e.interleavedBuffers[this.data.uuid] === undefined) {
      e.interleavedBuffers[this.data.uuid] = this.data.clone(e);
    }
    return new eHs(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === undefined) {
      Rm2("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const e = [];
      for (let t = 0; t < this.count; t++) {
        const n = t * this.data.stride + this.offset;
        for (let t = 0; t < this.itemSize; t++) {
          e.push(this.data.array[n + t]);
        }
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: e,
        normalized: this.normalized
      };
    }
    if (e.interleavedBuffers === undefined) {
      e.interleavedBuffers = {};
    }
    if (e.interleavedBuffers[this.data.uuid] === undefined) {
      e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e);
    }
    return {
      isInterleavedBufferAttribute: true,
      itemSize: this.itemSize,
      data: this.data.uuid,
      offset: this.offset,
      normalized: this.normalized
    };
  }
}
const pa = new Pq0();
const ga = new IUQ();
const ma = new IUQ();
const Aa = new Pq0();
const va = new kn4();
const ba = new Pq0();
const ya = new iyt();
const wa = new kn4();
const xa = new RlV();
export class I46 extends eaF {
  constructor(e, t) {
    super(e, t);
    this.isSkinnedMesh = true;
    this.type = "SkinnedMesh";
    this.bindMode = se;
    this.bindMatrix = new kn4();
    this.bindMatrixInverse = new kn4();
    this.boundingBox = null;
    this.boundingSphere = null;
  }
  computeBoundingBox() {
    const e = this.geometry;
    if (this.boundingBox === null) {
      this.boundingBox = new NRn();
    }
    this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let e = 0; e < t.count; e++) {
      this.getVertexPosition(e, ba);
      this.boundingBox.expandByPoint(ba);
    }
  }
  computeBoundingSphere() {
    const e = this.geometry;
    if (this.boundingSphere === null) {
      this.boundingSphere = new iyt();
    }
    this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let e = 0; e < t.count; e++) {
      this.getVertexPosition(e, ba);
      this.boundingSphere.expandByPoint(ba);
    }
  }
  copy(e, t) {
    super.copy(e, t);
    this.bindMode = e.bindMode;
    this.bindMatrix.copy(e.bindMatrix);
    this.bindMatrixInverse.copy(e.bindMatrixInverse);
    this.skeleton = e.skeleton;
    if (e.boundingBox !== null) {
      this.boundingBox = e.boundingBox.clone();
    }
    if (e.boundingSphere !== null) {
      this.boundingSphere = e.boundingSphere.clone();
    }
    return this;
  }
  raycast(e, t) {
    const n = this.material;
    const i = this.matrixWorld;
    if (n !== undefined) {
      if (this.boundingSphere === null) {
        this.computeBoundingSphere();
      }
      ya.copy(this.boundingSphere);
      ya.applyMatrix4(i);
      if (e.ray.intersectsSphere(ya) !== false) {
        wa.copy(i).invert();
        xa.copy(e.ray).applyMatrix4(wa);
        if (this.boundingBox === null || xa.intersectsBox(this.boundingBox) !== false) {
          this._computeIntersections(e, t, xa);
        }
      }
    }
  }
  getVertexPosition(e, t) {
    super.getVertexPosition(e, t);
    this.applyBoneTransform(e, t);
    return t;
  }
  bind(e, t) {
    this.skeleton = e;
    if (t === undefined) {
      this.updateMatrixWorld(true);
      this.skeleton.calculateInverses();
      t = this.matrixWorld;
    }
    this.bindMatrix.copy(t);
    this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new IUQ();
    const t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const i = 1 / e.manhattanLength();
      if (i !== Infinity) {
        e.multiplyScalar(i);
      } else {
        e.set(1, 0, 0, 0);
      }
      t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e);
    if (this.bindMode === se) {
      this.bindMatrixInverse.copy(this.matrixWorld).invert();
    } else if (this.bindMode === "detached") {
      this.bindMatrixInverse.copy(this.bindMatrix).invert();
    } else {
      R8M("SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
    }
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton;
    const i = this.geometry;
    ga.fromBufferAttribute(i.attributes.skinIndex, e);
    ma.fromBufferAttribute(i.attributes.skinWeight, e);
    pa.copy(t).applyMatrix4(this.bindMatrix);
    t.set(0, 0, 0);
    for (let e = 0; e < 4; e++) {
      const i = ma.getComponent(e);
      if (i !== 0) {
        const r = ga.getComponent(e);
        va.multiplyMatrices(n.bones[r].matrixWorld, n.boneInverses[r]);
        t.addScaledVector(Aa.copy(pa).applyMatrix4(va), i);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
export class $Kf extends B69 {
  constructor() {
    super();
    this.isBone = true;
    this.type = "Bone";
  }
}
export class GYF extends gPd {
  constructor(e = null, t = 1, n = 1, i, r, a, s, o, l = hxR, c = hxR, h, d) {
    super(null, a, s, o, l, c, i, r, h, d);
    this.isDataTexture = true;
    this.image = {
      data: e,
      width: t,
      height: n
    };
    this.generateMipmaps = false;
    this.flipY = false;
    this.unpackAlignment = 1;
  }
}
const Ea = new kn4();
const Ma = new kn4();
export class EAD {
  constructor(e = [], t = []) {
    this.uuid = pn();
    this.bones = e.slice(0);
    this.boneInverses = t;
    this.boneMatrices = null;
    this.boneTexture = null;
    this.init();
  }
  init() {
    const e = this.bones;
    const t = this.boneInverses;
    this.boneMatrices = new Float32Array(e.length * 16);
    if (t.length === 0) {
      this.calculateInverses();
    } else if (e.length !== t.length) {
      R8M("Skeleton: Number of inverse bone matrices does not match amount of bones.");
      this.boneInverses = [];
      for (let e = 0, t = this.bones.length; e < t; e++) {
        this.boneInverses.push(new kn4());
      }
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const t = new kn4();
      if (this.bones[e]) {
        t.copy(this.bones[e].matrixWorld).invert();
      }
      this.boneInverses.push(t);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const t = this.bones[e];
      if (t) {
        t.matrixWorld.copy(this.boneInverses[e]).invert();
      }
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const t = this.bones[e];
      if (t) {
        if (t.parent && t.parent.isBone) {
          t.matrix.copy(t.parent.matrixWorld).invert();
          t.matrix.multiply(t.matrixWorld);
        } else {
          t.matrix.copy(t.matrixWorld);
        }
        t.matrix.decompose(t.position, t.quaternion, t.scale);
      }
    }
  }
  update() {
    const e = this.bones;
    const t = this.boneInverses;
    const n = this.boneMatrices;
    const i = this.boneTexture;
    for (let i = 0, r = e.length; i < r; i++) {
      const r = e[i] ? e[i].matrixWorld : Ma;
      Ea.multiplyMatrices(r, t[i]);
      Ea.toArray(n, i * 16);
    }
    if (i !== null) {
      i.needsUpdate = true;
    }
  }
  clone() {
    return new EAD(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = Math.ceil(e / 4) * 4;
    e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new GYF(t, e, e, GWd, RQf);
    n.needsUpdate = true;
    this.boneMatrices = t;
    this.boneTexture = n;
    return this;
  }
  getBoneByName(e) {
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const n = this.bones[t];
      if (n.name === e) {
        return n;
      }
    }
  }
  dispose() {
    if (this.boneTexture !== null) {
      this.boneTexture.dispose();
      this.boneTexture = null;
    }
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let n = 0, i = e.bones.length; n < i; n++) {
      const i = e.bones[n];
      let r = t[i];
      if (r === undefined) {
        R8M("Skeleton: No bone found with UUID:", i);
        r = new $Kf();
      }
      this.bones.push(r);
      this.boneInverses.push(new kn4().fromArray(e.boneInverses[n]));
    }
    this.init();
    return this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.7,
        type: "Skeleton",
        generator: "Skeleton.toJSON"
      },
      bones: [],
      boneInverses: []
    };
    e.uuid = this.uuid;
    const t = this.bones;
    const n = this.boneInverses;
    for (let i = 0, r = t.length; i < r; i++) {
      const r = t[i];
      e.bones.push(r.uuid);
      const a = n[i];
      e.boneInverses.push(a.toArray());
    }
    return e;
  }
}
export class uWO extends THS {
  constructor(e, t, n, i = 1) {
    super(e, t, n);
    this.isInstancedBufferAttribute = true;
    this.meshPerAttribute = i;
  }
  copy(e) {
    super.copy(e);
    this.meshPerAttribute = e.meshPerAttribute;
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.meshPerAttribute = this.meshPerAttribute;
    e.isInstancedBufferAttribute = true;
    return e;
  }
}
const Ra = new kn4();
const Pa = new kn4();
const Ia = [];
const La = new NRn();
const Ua = new kn4();
const Na = new eaF();
const za = new iyt();
export class ZLX extends eaF {
  constructor(e, t, n) {
    super(e, t);
    this.isInstancedMesh = true;
    this.instanceMatrix = new uWO(new Float32Array(n * 16), 16);
    this.instanceColor = null;
    this.morphTexture = null;
    this.count = n;
    this.boundingBox = null;
    this.boundingSphere = null;
    for (let e = 0; e < n; e++) {
      this.setMatrixAt(e, Ua);
    }
  }
  computeBoundingBox() {
    const e = this.geometry;
    const t = this.count;
    if (this.boundingBox === null) {
      this.boundingBox = new NRn();
    }
    if (e.boundingBox === null) {
      e.computeBoundingBox();
    }
    this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++) {
      this.getMatrixAt(n, Ra);
      La.copy(e.boundingBox).applyMatrix4(Ra);
      this.boundingBox.union(La);
    }
  }
  computeBoundingSphere() {
    const e = this.geometry;
    const t = this.count;
    if (this.boundingSphere === null) {
      this.boundingSphere = new iyt();
    }
    if (e.boundingSphere === null) {
      e.computeBoundingSphere();
    }
    this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++) {
      this.getMatrixAt(n, Ra);
      za.copy(e.boundingSphere).applyMatrix4(Ra);
      this.boundingSphere.union(za);
    }
  }
  copy(e, t) {
    super.copy(e, t);
    this.instanceMatrix.copy(e.instanceMatrix);
    if (e.morphTexture !== null) {
      this.morphTexture = e.morphTexture.clone();
    }
    if (e.instanceColor !== null) {
      this.instanceColor = e.instanceColor.clone();
    }
    this.count = e.count;
    if (e.boundingBox !== null) {
      this.boundingBox = e.boundingBox.clone();
    }
    if (e.boundingSphere !== null) {
      this.boundingSphere = e.boundingSphere.clone();
    }
    return this;
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  getMorphAt(e, t) {
    const n = t.morphTargetInfluences;
    const i = this.morphTexture.source.data.data;
    const r = e * (n.length + 1) + 1;
    for (let e = 0; e < n.length; e++) {
      n[e] = i[r + e];
    }
  }
  raycast(e, t) {
    const n = this.matrixWorld;
    const i = this.count;
    Na.geometry = this.geometry;
    Na.material = this.material;
    if (Na.material !== undefined && (this.boundingSphere === null && this.computeBoundingSphere(), za.copy(this.boundingSphere), za.applyMatrix4(n), e.ray.intersectsSphere(za) !== false)) {
      for (let r = 0; r < i; r++) {
        this.getMatrixAt(r, Ra);
        Pa.multiplyMatrices(n, Ra);
        Na.matrixWorld = Pa;
        Na.raycast(e, Ia);
        for (let e = 0, n = Ia.length; e < n; e++) {
          const n = Ia[e];
          n.instanceId = r;
          n.object = this;
          t.push(n);
        }
        Ia.length = 0;
      }
    }
  }
  setColorAt(e, t) {
    if (this.instanceColor === null) {
      this.instanceColor = new uWO(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3);
    }
    t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  setMorphAt(e, t) {
    const n = t.morphTargetInfluences;
    const i = n.length + 1;
    if (this.morphTexture === null) {
      this.morphTexture = new GYF(new Float32Array(i * this.count), i, this.count, VT0, RQf);
    }
    const r = this.morphTexture.source.data.data;
    let a = 0;
    for (let e = 0; e < n.length; e++) {
      a += n[e];
    }
    const s = this.geometry.morphTargetsRelative ? 1 : 1 - a;
    const o = i * e;
    r[o] = s;
    r.set(n, o + 1);
  }
  updateMorphTargets() {}
  dispose() {
    this.dispatchEvent({
      type: "dispose"
    });
    if (this.morphTexture !== null) {
      this.morphTexture.dispose();
      this.morphTexture = null;
    }
  }
}
const Ba = new Pq0();
const Ga = new Pq0();
const Fa = new dwI();
export class Zcv {
  constructor(e = new Pq0(1, 0, 0), t = 0) {
    this.isPlane = true;
    this.normal = e;
    this.constant = t;
  }
  set(e, t) {
    this.normal.copy(e);
    this.constant = t;
    return this;
  }
  setComponents(e, t, n, i) {
    this.normal.set(e, t, n);
    this.constant = i;
    return this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    this.normal.copy(e);
    this.constant = -t.dot(this.normal);
    return this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = Ba.subVectors(n, t).cross(Ga.subVectors(e, t)).normalize();
    this.setFromNormalAndCoplanarPoint(i, e);
    return this;
  }
  copy(e) {
    this.normal.copy(e.normal);
    this.constant = e.constant;
    return this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    this.normal.multiplyScalar(e);
    this.constant *= e;
    return this;
  }
  negate() {
    this.constant *= -1;
    this.normal.negate();
    return this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(Ba);
    const i = this.normal.dot(n);
    if (i === 0) {
      if (this.distanceToPoint(e.start) === 0) {
        return t.copy(e.start);
      } else {
        return null;
      }
    }
    const r = -(e.start.dot(this.normal) + this.constant) / i;
    if (r < 0 || r > 1) {
      return null;
    } else {
      return t.copy(e.start).addScaledVector(n, r);
    }
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start);
    const n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || Fa.getNormalMatrix(e);
    const i = this.coplanarPoint(Ba).applyMatrix4(e);
    const r = this.normal.applyMatrix3(n).normalize();
    this.constant = -i.dot(r);
    return this;
  }
  translate(e) {
    this.constant -= e.dot(this.normal);
    return this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Wa = new iyt();
const Va = new I9Y(0.5, 0.5);
const Ha = new Pq0();
export class PPD {
  constructor(e = new Zcv(), t = new Zcv(), n = new Zcv(), i = new Zcv(), r = new Zcv(), a = new Zcv()) {
    this.planes = [e, t, n, i, r, a];
  }
  set(e, t, n, i, r, a) {
    const s = this.planes;
    s[0].copy(e);
    s[1].copy(t);
    s[2].copy(n);
    s[3].copy(i);
    s[4].copy(r);
    s[5].copy(a);
    return this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      t[n].copy(e.planes[n]);
    }
    return this;
  }
  setFromProjectionMatrix(e, t = TdN, n = false) {
    const i = this.planes;
    const r = e.elements;
    const a = r[0];
    const s = r[1];
    const o = r[2];
    const l = r[3];
    const c = r[4];
    const h = r[5];
    const d = r[6];
    const u = r[7];
    const f = r[8];
    const p = r[9];
    const g = r[10];
    const m = r[11];
    const A = r[12];
    const v = r[13];
    const b = r[14];
    const y = r[15];
    i[0].setComponents(l - a, u - c, m - f, y - A).normalize();
    i[1].setComponents(l + a, u + c, m + f, y + A).normalize();
    i[2].setComponents(l + s, u + h, m + p, y + v).normalize();
    i[3].setComponents(l - s, u - h, m - p, y - v).normalize();
    if (n) {
      i[4].setComponents(o, d, g, b).normalize();
      i[5].setComponents(l - o, u - d, m - g, y - b).normalize();
    } else {
      i[4].setComponents(l - o, u - d, m - g, y - b).normalize();
      if (t === TdN) {
        i[5].setComponents(l + o, u + d, m + g, y + b).normalize();
      } else {
        if (t !== Yt) {
          throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
        }
        i[5].setComponents(o, d, g, b).normalize();
      }
    }
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== undefined) {
      if (e.boundingSphere === null) {
        e.computeBoundingSphere();
      }
      Wa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    } else {
      const t = e.geometry;
      if (t.boundingSphere === null) {
        t.computeBoundingSphere();
      }
      Wa.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Wa);
  }
  intersectsSprite(e) {
    Wa.center.set(0, 0, 0);
    const t = Va.distanceTo(e.center);
    Wa.radius = 0.7071067811865476 + t;
    Wa.applyMatrix4(e.matrixWorld);
    return this.intersectsSphere(Wa);
  }
  intersectsSphere(e) {
    const t = this.planes;
    const n = e.center;
    const i = -e.radius;
    for (let e = 0; e < 6; e++) {
      if (t[e].distanceToPoint(n) < i) {
        return false;
      }
    }
    return true;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      Ha.x = i.normal.x > 0 ? e.max.x : e.min.x;
      Ha.y = i.normal.y > 0 ? e.max.y : e.min.y;
      Ha.z = i.normal.z > 0 ? e.max.z : e.min.z;
      if (i.distanceToPoint(Ha) < 0) {
        return false;
      }
    }
    return true;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      if (t[n].distanceToPoint(e) < 0) {
        return false;
      }
    }
    return true;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Ka = new kn4();
const qa = new PPD();
class Qa {
  constructor() {
    this.coordinateSystem = TdN;
  }
  intersectsObject(e, t) {
    if (!t.isArrayCamera || t.cameras.length === 0) {
      return false;
    }
    for (let n = 0; n < t.cameras.length; n++) {
      const i = t.cameras[n];
      Ka.multiplyMatrices(i.projectionMatrix, i.matrixWorldInverse);
      qa.setFromProjectionMatrix(Ka, i.coordinateSystem, i.reversedDepth);
      if (qa.intersectsObject(e)) {
        return true;
      }
    }
    return false;
  }
  intersectsSprite(e, t) {
    if (!t || !t.cameras || t.cameras.length === 0) {
      return false;
    }
    for (let n = 0; n < t.cameras.length; n++) {
      const i = t.cameras[n];
      Ka.multiplyMatrices(i.projectionMatrix, i.matrixWorldInverse);
      qa.setFromProjectionMatrix(Ka, i.coordinateSystem, i.reversedDepth);
      if (qa.intersectsSprite(e)) {
        return true;
      }
    }
    return false;
  }
  intersectsSphere(e, t) {
    if (!t || !t.cameras || t.cameras.length === 0) {
      return false;
    }
    for (let n = 0; n < t.cameras.length; n++) {
      const i = t.cameras[n];
      Ka.multiplyMatrices(i.projectionMatrix, i.matrixWorldInverse);
      qa.setFromProjectionMatrix(Ka, i.coordinateSystem, i.reversedDepth);
      if (qa.intersectsSphere(e)) {
        return true;
      }
    }
    return false;
  }
  intersectsBox(e, t) {
    if (!t || !t.cameras || t.cameras.length === 0) {
      return false;
    }
    for (let n = 0; n < t.cameras.length; n++) {
      const i = t.cameras[n];
      Ka.multiplyMatrices(i.projectionMatrix, i.matrixWorldInverse);
      qa.setFromProjectionMatrix(Ka, i.coordinateSystem, i.reversedDepth);
      if (qa.intersectsBox(e)) {
        return true;
      }
    }
    return false;
  }
  containsPoint(e, t) {
    if (!t || !t.cameras || t.cameras.length === 0) {
      return false;
    }
    for (let n = 0; n < t.cameras.length; n++) {
      const i = t.cameras[n];
      Ka.multiplyMatrices(i.projectionMatrix, i.matrixWorldInverse);
      qa.setFromProjectionMatrix(Ka, i.coordinateSystem, i.reversedDepth);
      if (qa.containsPoint(e)) {
        return true;
      }
    }
    return false;
  }
  clone() {
    return new Qa();
  }
}
function Ja(e, t) {
  return e - t;
}
function Xa(e, t) {
  return e.z - t.z;
}
function Ya(e, t) {
  return t.z - e.z;
}
class Za {
  constructor() {
    this.index = 0;
    this.pool = [];
    this.list = [];
  }
  push(e, t, n, i) {
    const r = this.pool;
    const a = this.list;
    if (this.index >= r.length) {
      r.push({
        start: -1,
        count: -1,
        z: -1,
        index: -1
      });
    }
    const s = r[this.index];
    a.push(s);
    this.index++;
    s.start = e;
    s.count = t;
    s.z = n;
    s.index = i;
  }
  reset() {
    this.list.length = 0;
    this.index = 0;
  }
}
const $a = new kn4();
const es = new Q1f(1, 1, 1);
const ts = new PPD();
const ns = new Qa();
const is = new NRn();
const rs = new iyt();
const as = new Pq0();
const ss = new Pq0();
const os = new Pq0();
const ls = new Za();
const cs = new eaF();
const hs = [];
function ds(e, t, n = 0) {
  const i = t.itemSize;
  if (e.isInterleavedBufferAttribute || e.array.constructor !== t.array.constructor) {
    const r = e.count;
    for (let a = 0; a < r; a++) {
      for (let r = 0; r < i; r++) {
        t.setComponent(a + n, r, e.getComponent(a, r));
      }
    }
  } else {
    t.array.set(e.array, n * i);
  }
  t.needsUpdate = true;
}
function us(e, t) {
  if (e.constructor !== t.constructor) {
    const n = Math.min(e.length, t.length);
    for (let i = 0; i < n; i++) {
      t[i] = e[i];
    }
  } else {
    const n = Math.min(e.length, t.length);
    t.set(new e.constructor(e.buffer, 0, n));
  }
}
export class $Ed extends eaF {
  constructor(e, t, n = t * 2, i) {
    super(new LoY(), i);
    this.isBatchedMesh = true;
    this.perObjectFrustumCulled = true;
    this.sortObjects = true;
    this.boundingBox = null;
    this.boundingSphere = null;
    this.customSort = null;
    this._instanceInfo = [];
    this._geometryInfo = [];
    this._availableInstanceIds = [];
    this._availableGeometryIds = [];
    this._nextIndexStart = 0;
    this._nextVertexStart = 0;
    this._geometryCount = 0;
    this._visibilityChanged = true;
    this._geometryInitialized = false;
    this._maxInstanceCount = e;
    this._maxVertexCount = t;
    this._maxIndexCount = n;
    this._multiDrawCounts = new Int32Array(e);
    this._multiDrawStarts = new Int32Array(e);
    this._multiDrawCount = 0;
    this._multiDrawInstances = null;
    this._matricesTexture = null;
    this._indirectTexture = null;
    this._colorsTexture = null;
    this._initMatricesTexture();
    this._initIndirectTexture();
  }
  get maxInstanceCount() {
    return this._maxInstanceCount;
  }
  get instanceCount() {
    return this._instanceInfo.length - this._availableInstanceIds.length;
  }
  get unusedVertexCount() {
    return this._maxVertexCount - this._nextVertexStart;
  }
  get unusedIndexCount() {
    return this._maxIndexCount - this._nextIndexStart;
  }
  _initMatricesTexture() {
    let e = Math.sqrt(this._maxInstanceCount * 4);
    e = Math.ceil(e / 4) * 4;
    e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    const n = new GYF(t, e, e, GWd, RQf);
    this._matricesTexture = n;
  }
  _initIndirectTexture() {
    let e = Math.sqrt(this._maxInstanceCount);
    e = Math.ceil(e);
    const t = new Uint32Array(e * e);
    const n = new GYF(t, e, e, ZQM, bkx);
    this._indirectTexture = n;
  }
  _initColorsTexture() {
    let e = Math.sqrt(this._maxInstanceCount);
    e = Math.ceil(e);
    const t = new Float32Array(e * e * 4).fill(1);
    const n = new GYF(t, e, e, GWd, RQf);
    n.colorSpace = ppV.workingColorSpace;
    this._colorsTexture = n;
  }
  _initializeGeometry(e) {
    const t = this.geometry;
    const n = this._maxVertexCount;
    const i = this._maxIndexCount;
    if (this._geometryInitialized === false) {
      for (const i in e.attributes) {
        const r = e.getAttribute(i);
        const {
          array: a,
          itemSize: s,
          normalized: o
        } = r;
        const l = new a.constructor(n * s);
        const c = new THS(l, s, o);
        t.setAttribute(i, c);
      }
      if (e.getIndex() !== null) {
        const e = n > 65535 ? new Uint32Array(i) : new Uint16Array(i);
        t.setIndex(new THS(e, 1));
      }
      this._geometryInitialized = true;
    }
  }
  _validateGeometry(e) {
    const t = this.geometry;
    if (Boolean(e.getIndex()) !== Boolean(t.getIndex())) {
      throw new Error("THREE.BatchedMesh: All geometries must consistently have \"index\".");
    }
    for (const n in t.attributes) {
      if (!e.hasAttribute(n)) {
        throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);
      }
      const i = e.getAttribute(n);
      const r = t.getAttribute(n);
      if (i.itemSize !== r.itemSize || i.normalized !== r.normalized) {
        throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.");
      }
    }
  }
  validateInstanceId(e) {
    const t = this._instanceInfo;
    if (e < 0 || e >= t.length || t[e].active === false) {
      throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`);
    }
  }
  validateGeometryId(e) {
    const t = this._geometryInfo;
    if (e < 0 || e >= t.length || t[e].active === false) {
      throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`);
    }
  }
  setCustomSort(e) {
    this.customSort = e;
    return this;
  }
  computeBoundingBox() {
    if (this.boundingBox === null) {
      this.boundingBox = new NRn();
    }
    const e = this.boundingBox;
    const t = this._instanceInfo;
    e.makeEmpty();
    for (let n = 0, i = t.length; n < i; n++) {
      if (t[n].active === false) {
        continue;
      }
      const i = t[n].geometryIndex;
      this.getMatrixAt(n, $a);
      this.getBoundingBoxAt(i, is).applyMatrix4($a);
      e.union(is);
    }
  }
  computeBoundingSphere() {
    if (this.boundingSphere === null) {
      this.boundingSphere = new iyt();
    }
    const e = this.boundingSphere;
    const t = this._instanceInfo;
    e.makeEmpty();
    for (let n = 0, i = t.length; n < i; n++) {
      if (t[n].active === false) {
        continue;
      }
      const i = t[n].geometryIndex;
      this.getMatrixAt(n, $a);
      this.getBoundingSphereAt(i, rs).applyMatrix4($a);
      e.union(rs);
    }
  }
  addInstance(e) {
    if (this._instanceInfo.length >= this.maxInstanceCount && this._availableInstanceIds.length === 0) {
      throw new Error("THREE.BatchedMesh: Maximum item count reached.");
    }
    const t = {
      visible: true,
      active: true,
      geometryIndex: e
    };
    let n = null;
    if (this._availableInstanceIds.length > 0) {
      this._availableInstanceIds.sort(Ja);
      n = this._availableInstanceIds.shift();
      this._instanceInfo[n] = t;
    } else {
      n = this._instanceInfo.length;
      this._instanceInfo.push(t);
    }
    const i = this._matricesTexture;
    $a.identity().toArray(i.image.data, n * 16);
    i.needsUpdate = true;
    const r = this._colorsTexture;
    if (r) {
      es.toArray(r.image.data, n * 4);
      r.needsUpdate = true;
    }
    this._visibilityChanged = true;
    return n;
  }
  addGeometry(e, t = -1, n = -1) {
    this._initializeGeometry(e);
    this._validateGeometry(e);
    const i = {
      vertexStart: -1,
      vertexCount: -1,
      reservedVertexCount: -1,
      indexStart: -1,
      indexCount: -1,
      reservedIndexCount: -1,
      start: -1,
      count: -1,
      boundingBox: null,
      boundingSphere: null,
      active: true
    };
    const r = this._geometryInfo;
    i.vertexStart = this._nextVertexStart;
    i.reservedVertexCount = t === -1 ? e.getAttribute("position").count : t;
    const a = e.getIndex();
    if (a !== null) {
      i.indexStart = this._nextIndexStart;
      i.reservedIndexCount = n === -1 ? a.count : n;
    }
    if (i.indexStart !== -1 && i.indexStart + i.reservedIndexCount > this._maxIndexCount || i.vertexStart + i.reservedVertexCount > this._maxVertexCount) {
      throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");
    }
    let s;
    if (this._availableGeometryIds.length > 0) {
      this._availableGeometryIds.sort(Ja);
      s = this._availableGeometryIds.shift();
      r[s] = i;
    } else {
      s = this._geometryCount;
      this._geometryCount++;
      r.push(i);
    }
    this.setGeometryAt(s, e);
    this._nextIndexStart = i.indexStart + i.reservedIndexCount;
    this._nextVertexStart = i.vertexStart + i.reservedVertexCount;
    return s;
  }
  setGeometryAt(e, t) {
    if (e >= this._geometryCount) {
      throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");
    }
    this._validateGeometry(t);
    const n = this.geometry;
    const i = n.getIndex() !== null;
    const r = n.getIndex();
    const a = t.getIndex();
    const s = this._geometryInfo[e];
    if (i && a.count > s.reservedIndexCount || t.attributes.position.count > s.reservedVertexCount) {
      throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");
    }
    const o = s.vertexStart;
    const l = s.reservedVertexCount;
    s.vertexCount = t.getAttribute("position").count;
    for (const e in n.attributes) {
      const i = t.getAttribute(e);
      const r = n.getAttribute(e);
      ds(i, r, o);
      const a = i.itemSize;
      for (let e = i.count, t = l; e < t; e++) {
        const t = o + e;
        for (let e = 0; e < a; e++) {
          r.setComponent(t, e, 0);
        }
      }
      r.needsUpdate = true;
      r.addUpdateRange(o * a, l * a);
    }
    if (i) {
      const e = s.indexStart;
      const n = s.reservedIndexCount;
      s.indexCount = t.getIndex().count;
      for (let t = 0; t < a.count; t++) {
        r.setX(e + t, o + a.getX(t));
      }
      for (let t = a.count, i = n; t < i; t++) {
        r.setX(e + t, o);
      }
      r.needsUpdate = true;
      r.addUpdateRange(e, s.reservedIndexCount);
    }
    s.start = i ? s.indexStart : s.vertexStart;
    s.count = i ? s.indexCount : s.vertexCount;
    s.boundingBox = null;
    if (t.boundingBox !== null) {
      s.boundingBox = t.boundingBox.clone();
    }
    s.boundingSphere = null;
    if (t.boundingSphere !== null) {
      s.boundingSphere = t.boundingSphere.clone();
    }
    this._visibilityChanged = true;
    return e;
  }
  deleteGeometry(e) {
    const t = this._geometryInfo;
    if (e >= t.length || t[e].active === false) {
      return this;
    }
    const n = this._instanceInfo;
    for (let t = 0, i = n.length; t < i; t++) {
      if (n[t].active && n[t].geometryIndex === e) {
        this.deleteInstance(t);
      }
    }
    t[e].active = false;
    this._availableGeometryIds.push(e);
    this._visibilityChanged = true;
    return this;
  }
  deleteInstance(e) {
    this.validateInstanceId(e);
    this._instanceInfo[e].active = false;
    this._availableInstanceIds.push(e);
    this._visibilityChanged = true;
    return this;
  }
  optimize() {
    let e = 0;
    let t = 0;
    const n = this._geometryInfo;
    const i = n.map((e, t) => t).sort((e, t) => n[e].vertexStart - n[t].vertexStart);
    const r = this.geometry;
    for (let a = 0, s = n.length; a < s; a++) {
      const s = i[a];
      const o = n[s];
      if (o.active !== false) {
        if (r.index !== null) {
          if (o.indexStart !== t) {
            const {
              indexStart: n,
              vertexStart: i,
              reservedIndexCount: a
            } = o;
            const s = r.index;
            const l = s.array;
            const c = e - i;
            for (let e = n; e < n + a; e++) {
              l[e] = l[e] + c;
            }
            s.array.copyWithin(t, n, n + a);
            s.addUpdateRange(t, a);
            o.indexStart = t;
          }
          t += o.reservedIndexCount;
        }
        if (o.vertexStart !== e) {
          const {
            vertexStart: t,
            reservedVertexCount: n
          } = o;
          const i = r.attributes;
          for (const r in i) {
            const a = i[r];
            const {
              array: s,
              itemSize: o
            } = a;
            s.copyWithin(e * o, t * o, (t + n) * o);
            a.addUpdateRange(e * o, n * o);
          }
          o.vertexStart = e;
        }
        e += o.reservedVertexCount;
        o.start = r.index ? o.indexStart : o.vertexStart;
        this._nextIndexStart = r.index ? o.indexStart + o.reservedIndexCount : 0;
        this._nextVertexStart = o.vertexStart + o.reservedVertexCount;
      }
    }
    return this;
  }
  getBoundingBoxAt(e, t) {
    if (e >= this._geometryCount) {
      return null;
    }
    const n = this.geometry;
    const i = this._geometryInfo[e];
    if (i.boundingBox === null) {
      const e = new NRn();
      const t = n.index;
      const r = n.attributes.position;
      for (let n = i.start, a = i.start + i.count; n < a; n++) {
        let i = n;
        if (t) {
          i = t.getX(i);
        }
        e.expandByPoint(as.fromBufferAttribute(r, i));
      }
      i.boundingBox = e;
    }
    t.copy(i.boundingBox);
    return t;
  }
  getBoundingSphereAt(e, t) {
    if (e >= this._geometryCount) {
      return null;
    }
    const n = this.geometry;
    const i = this._geometryInfo[e];
    if (i.boundingSphere === null) {
      const t = new iyt();
      this.getBoundingBoxAt(e, is);
      is.getCenter(t.center);
      const r = n.index;
      const a = n.attributes.position;
      let s = 0;
      for (let e = i.start, n = i.start + i.count; e < n; e++) {
        let n = e;
        if (r) {
          n = r.getX(n);
        }
        as.fromBufferAttribute(a, n);
        s = Math.max(s, t.center.distanceToSquared(as));
      }
      t.radius = Math.sqrt(s);
      i.boundingSphere = t;
    }
    t.copy(i.boundingSphere);
    return t;
  }
  setMatrixAt(e, t) {
    this.validateInstanceId(e);
    const n = this._matricesTexture;
    const i = this._matricesTexture.image.data;
    t.toArray(i, e * 16);
    n.needsUpdate = true;
    return this;
  }
  getMatrixAt(e, t) {
    this.validateInstanceId(e);
    return t.fromArray(this._matricesTexture.image.data, e * 16);
  }
  setColorAt(e, t) {
    this.validateInstanceId(e);
    if (this._colorsTexture === null) {
      this._initColorsTexture();
    }
    t.toArray(this._colorsTexture.image.data, e * 4);
    this._colorsTexture.needsUpdate = true;
    return this;
  }
  getColorAt(e, t) {
    this.validateInstanceId(e);
    return t.fromArray(this._colorsTexture.image.data, e * 4);
  }
  setVisibleAt(e, t) {
    this.validateInstanceId(e);
    if (this._instanceInfo[e].visible !== t) {
      this._instanceInfo[e].visible = t;
      this._visibilityChanged = true;
    }
    return this;
  }
  getVisibleAt(e) {
    this.validateInstanceId(e);
    return this._instanceInfo[e].visible;
  }
  setGeometryIdAt(e, t) {
    this.validateInstanceId(e);
    this.validateGeometryId(t);
    this._instanceInfo[e].geometryIndex = t;
    return this;
  }
  getGeometryIdAt(e) {
    this.validateInstanceId(e);
    return this._instanceInfo[e].geometryIndex;
  }
  getGeometryRangeAt(e, t = {}) {
    this.validateGeometryId(e);
    const n = this._geometryInfo[e];
    t.vertexStart = n.vertexStart;
    t.vertexCount = n.vertexCount;
    t.reservedVertexCount = n.reservedVertexCount;
    t.indexStart = n.indexStart;
    t.indexCount = n.indexCount;
    t.reservedIndexCount = n.reservedIndexCount;
    t.start = n.start;
    t.count = n.count;
    return t;
  }
  setInstanceCount(e) {
    const t = this._availableInstanceIds;
    const n = this._instanceInfo;
    for (t.sort(Ja); t[t.length - 1] === n.length - 1;) {
      n.pop();
      t.pop();
    }
    if (e < n.length) {
      throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);
    }
    const i = new Int32Array(e);
    const r = new Int32Array(e);
    us(this._multiDrawCounts, i);
    us(this._multiDrawStarts, r);
    this._multiDrawCounts = i;
    this._multiDrawStarts = r;
    this._maxInstanceCount = e;
    const a = this._indirectTexture;
    const s = this._matricesTexture;
    const o = this._colorsTexture;
    a.dispose();
    this._initIndirectTexture();
    us(a.image.data, this._indirectTexture.image.data);
    s.dispose();
    this._initMatricesTexture();
    us(s.image.data, this._matricesTexture.image.data);
    if (o) {
      o.dispose();
      this._initColorsTexture();
      us(o.image.data, this._colorsTexture.image.data);
    }
  }
  setGeometrySize(e, t) {
    const n = [...this._geometryInfo].filter(e => e.active);
    if (Math.max(...n.map(e => e.vertexStart + e.reservedVertexCount)) > e) {
      throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);
    }
    if (this.geometry.index) {
      if (Math.max(...n.map(e => e.indexStart + e.reservedIndexCount)) > t) {
        throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);
      }
    }
    const i = this.geometry;
    i.dispose();
    this._maxVertexCount = e;
    this._maxIndexCount = t;
    if (this._geometryInitialized) {
      this._geometryInitialized = false;
      this.geometry = new LoY();
      this._initializeGeometry(i);
    }
    const r = this.geometry;
    if (i.index) {
      us(i.index.array, r.index.array);
    }
    for (const e in i.attributes) {
      us(i.attributes[e].array, r.attributes[e].array);
    }
  }
  raycast(e, t) {
    const n = this._instanceInfo;
    const i = this._geometryInfo;
    const r = this.matrixWorld;
    const a = this.geometry;
    cs.material = this.material;
    cs.geometry.index = a.index;
    cs.geometry.attributes = a.attributes;
    if (cs.geometry.boundingBox === null) {
      cs.geometry.boundingBox = new NRn();
    }
    if (cs.geometry.boundingSphere === null) {
      cs.geometry.boundingSphere = new iyt();
    }
    for (let a = 0, s = n.length; a < s; a++) {
      if (!n[a].visible || !n[a].active) {
        continue;
      }
      const s = n[a].geometryIndex;
      const o = i[s];
      cs.geometry.setDrawRange(o.start, o.count);
      this.getMatrixAt(a, cs.matrixWorld).premultiply(r);
      this.getBoundingBoxAt(s, cs.geometry.boundingBox);
      this.getBoundingSphereAt(s, cs.geometry.boundingSphere);
      cs.raycast(e, hs);
      for (let e = 0, n = hs.length; e < n; e++) {
        const n = hs[e];
        n.object = this;
        n.batchId = a;
        t.push(n);
      }
      hs.length = 0;
    }
    cs.material = null;
    cs.geometry.index = null;
    cs.geometry.attributes = {};
    cs.geometry.setDrawRange(0, Infinity);
  }
  copy(e) {
    super.copy(e);
    this.geometry = e.geometry.clone();
    this.perObjectFrustumCulled = e.perObjectFrustumCulled;
    this.sortObjects = e.sortObjects;
    this.boundingBox = e.boundingBox !== null ? e.boundingBox.clone() : null;
    this.boundingSphere = e.boundingSphere !== null ? e.boundingSphere.clone() : null;
    this._geometryInfo = e._geometryInfo.map(e => ({
      ...e,
      boundingBox: e.boundingBox !== null ? e.boundingBox.clone() : null,
      boundingSphere: e.boundingSphere !== null ? e.boundingSphere.clone() : null
    }));
    this._instanceInfo = e._instanceInfo.map(e => ({
      ...e
    }));
    this._availableInstanceIds = e._availableInstanceIds.slice();
    this._availableGeometryIds = e._availableGeometryIds.slice();
    this._nextIndexStart = e._nextIndexStart;
    this._nextVertexStart = e._nextVertexStart;
    this._geometryCount = e._geometryCount;
    this._maxInstanceCount = e._maxInstanceCount;
    this._maxVertexCount = e._maxVertexCount;
    this._maxIndexCount = e._maxIndexCount;
    this._geometryInitialized = e._geometryInitialized;
    this._multiDrawCounts = e._multiDrawCounts.slice();
    this._multiDrawStarts = e._multiDrawStarts.slice();
    this._indirectTexture = e._indirectTexture.clone();
    this._indirectTexture.image.data = this._indirectTexture.image.data.slice();
    this._matricesTexture = e._matricesTexture.clone();
    this._matricesTexture.image.data = this._matricesTexture.image.data.slice();
    if (this._colorsTexture !== null) {
      this._colorsTexture = e._colorsTexture.clone();
      this._colorsTexture.image.data = this._colorsTexture.image.data.slice();
    }
    return this;
  }
  dispose() {
    this.geometry.dispose();
    this._matricesTexture.dispose();
    this._matricesTexture = null;
    this._indirectTexture.dispose();
    this._indirectTexture = null;
    if (this._colorsTexture !== null) {
      this._colorsTexture.dispose();
      this._colorsTexture = null;
    }
  }
  onBeforeRender(e, t, n, i, r) {
    if (!this._visibilityChanged && !this.perObjectFrustumCulled && !this.sortObjects) {
      return;
    }
    const a = i.getIndex();
    const s = a === null ? 1 : a.array.BYTES_PER_ELEMENT;
    const o = this._instanceInfo;
    const l = this._multiDrawStarts;
    const c = this._multiDrawCounts;
    const h = this._geometryInfo;
    const d = this.perObjectFrustumCulled;
    const u = this._indirectTexture;
    const f = u.image.data;
    const p = n.isArrayCamera ? ns : ts;
    if (d && !n.isArrayCamera) {
      $a.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse).multiply(this.matrixWorld);
      ts.setFromProjectionMatrix($a, n.coordinateSystem, n.reversedDepth);
    }
    let g = 0;
    if (this.sortObjects) {
      $a.copy(this.matrixWorld).invert();
      as.setFromMatrixPosition(n.matrixWorld).applyMatrix4($a);
      ss.set(0, 0, -1).transformDirection(n.matrixWorld).transformDirection($a);
      for (let e = 0, t = o.length; e < t; e++) {
        if (o[e].visible && o[e].active) {
          const t = o[e].geometryIndex;
          this.getMatrixAt(e, $a);
          this.getBoundingSphereAt(t, rs).applyMatrix4($a);
          let i = false;
          if (d) {
            i = !p.intersectsSphere(rs, n);
          }
          if (!i) {
            const n = h[t];
            const i = os.subVectors(rs.center, as).dot(ss);
            ls.push(n.start, n.count, i, e);
          }
        }
      }
      const e = ls.list;
      const t = this.customSort;
      if (t === null) {
        e.sort(r.transparent ? Ya : Xa);
      } else {
        t.call(this, e, n);
      }
      for (let t = 0, n = e.length; t < n; t++) {
        const n = e[t];
        l[g] = n.start * s;
        c[g] = n.count;
        f[g] = n.index;
        g++;
      }
      ls.reset();
    } else {
      for (let e = 0, t = o.length; e < t; e++) {
        if (o[e].visible && o[e].active) {
          const t = o[e].geometryIndex;
          let i = false;
          if (d) {
            this.getMatrixAt(e, $a);
            this.getBoundingSphereAt(t, rs).applyMatrix4($a);
            i = !p.intersectsSphere(rs, n);
          }
          if (!i) {
            const n = h[t];
            l[g] = n.start * s;
            c[g] = n.count;
            f[g] = e;
            g++;
          }
        }
      }
    }
    u.needsUpdate = true;
    this._multiDrawCount = g;
    this._visibilityChanged = false;
  }
  onBeforeShadow(e, t, n, i, r, a) {
    this.onBeforeRender(e, null, i, r, a);
  }
}
export class mrM extends imn {
  constructor(e) {
    super();
    this.isLineBasicMaterial = true;
    this.type = "LineBasicMaterial";
    this.color = new Q1f(16777215);
    this.map = null;
    this.linewidth = 1;
    this.linecap = "round";
    this.linejoin = "round";
    this.fog = true;
    this.setValues(e);
  }
  copy(e) {
    super.copy(e);
    this.color.copy(e.color);
    this.map = e.map;
    this.linewidth = e.linewidth;
    this.linecap = e.linecap;
    this.linejoin = e.linejoin;
    this.fog = e.fog;
    return this;
  }
}
const gs = new Pq0();
const ms = new Pq0();
const As = new kn4();
const vs = new RlV();
const bs = new iyt();
const ys = new Pq0();
const ws = new Pq0();
export class N1A extends B69 {
  constructor(e = new LoY(), t = new mrM()) {
    super();
    this.isLine = true;
    this.type = "Line";
    this.geometry = e;
    this.material = t;
    this.morphTargetDictionary = undefined;
    this.morphTargetInfluences = undefined;
    this.updateMorphTargets();
  }
  copy(e, t) {
    super.copy(e, t);
    this.material = Array.isArray(e.material) ? e.material.slice() : e.material;
    this.geometry = e.geometry;
    return this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position;
      const n = [0];
      for (let e = 1, i = t.count; e < i; e++) {
        gs.fromBufferAttribute(t, e - 1);
        ms.fromBufferAttribute(t, e);
        n[e] = n[e - 1];
        n[e] += gs.distanceTo(ms);
      }
      e.setAttribute("lineDistance", new Sr(n, 1));
    } else {
      R8M("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    }
    return this;
  }
  raycast(e, t) {
    const n = this.geometry;
    const i = this.matrixWorld;
    const r = e.params.Line.threshold;
    const a = n.drawRange;
    if (n.boundingSphere === null) {
      n.computeBoundingSphere();
    }
    bs.copy(n.boundingSphere);
    bs.applyMatrix4(i);
    bs.radius += r;
    if (e.ray.intersectsSphere(bs) === false) {
      return;
    }
    As.copy(i).invert();
    vs.copy(e.ray).applyMatrix4(As);
    const s = r / ((this.scale.x + this.scale.y + this.scale.z) / 3);
    const o = s * s;
    const l = this.isLineSegments ? 2 : 1;
    const c = n.index;
    const h = n.attributes.position;
    if (c !== null) {
      const n = Math.max(0, a.start);
      const i = Math.min(c.count, a.start + a.count);
      for (let r = n, a = i - 1; r < a; r += l) {
        const n = c.getX(r);
        const i = c.getX(r + 1);
        const a = Ss(this, e, vs, o, n, i, r);
        if (a) {
          t.push(a);
        }
      }
      if (this.isLineLoop) {
        const r = c.getX(i - 1);
        const a = c.getX(n);
        const s = Ss(this, e, vs, o, r, a, i - 1);
        if (s) {
          t.push(s);
        }
      }
    } else {
      const n = Math.max(0, a.start);
      const i = Math.min(h.count, a.start + a.count);
      for (let r = n, a = i - 1; r < a; r += l) {
        const n = Ss(this, e, vs, o, r, r + 1, r);
        if (n) {
          t.push(n);
        }
      }
      if (this.isLineLoop) {
        const r = Ss(this, e, vs, o, i - 1, n, i - 1);
        if (r) {
          t.push(r);
        }
      }
    }
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes;
    const t = Object.keys(e);
    if (t.length > 0) {
      const n = e[t[0]];
      if (n !== undefined) {
        this.morphTargetInfluences = [];
        this.morphTargetDictionary = {};
        for (let e = 0, t = n.length; e < t; e++) {
          const t = n[e].name || String(e);
          this.morphTargetInfluences.push(0);
          this.morphTargetDictionary[t] = e;
        }
      }
    }
  }
}
function Ss(e, t, n, i, r, a, s) {
  const o = e.geometry.attributes.position;
  gs.fromBufferAttribute(o, r);
  ms.fromBufferAttribute(o, a);
  if (n.distanceSqToSegment(gs, ms, ys, ws) > i) {
    return;
  }
  ys.applyMatrix4(e.matrixWorld);
  const l = t.ray.origin.distanceTo(ys);
  if (l < t.near || l > t.far) {
    return undefined;
  } else {
    return {
      distance: l,
      point: ws.clone().applyMatrix4(e.matrixWorld),
      index: s,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: e
    };
  }
}
const ks = new Pq0();
const Ts = new Pq0();
export class DXC extends N1A {
  constructor(e, t) {
    super(e, t);
    this.isLineSegments = true;
    this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position;
      const n = [];
      for (let e = 0, i = t.count; e < i; e += 2) {
        ks.fromBufferAttribute(t, e);
        Ts.fromBufferAttribute(t, e + 1);
        n[e] = e === 0 ? 0 : n[e - 1];
        n[e + 1] = n[e] + ks.distanceTo(Ts);
      }
      e.setAttribute("lineDistance", new Sr(n, 1));
    } else {
      R8M("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    }
    return this;
  }
}
export class FCc extends N1A {
  constructor(e, t) {
    super(e, t);
    this.isLineLoop = true;
    this.type = "LineLoop";
  }
}
export class BH$ extends imn {
  constructor(e) {
    super();
    this.isPointsMaterial = true;
    this.type = "PointsMaterial";
    this.color = new Q1f(16777215);
    this.map = null;
    this.alphaMap = null;
    this.size = 1;
    this.sizeAttenuation = true;
    this.fog = true;
    this.setValues(e);
  }
  copy(e) {
    super.copy(e);
    this.color.copy(e.color);
    this.map = e.map;
    this.alphaMap = e.alphaMap;
    this.size = e.size;
    this.sizeAttenuation = e.sizeAttenuation;
    this.fog = e.fog;
    return this;
  }
}
const Cs = new kn4();
const Rs = new RlV();
const Ps = new iyt();
const Is = new Pq0();
export class ONl extends B69 {
  constructor(e = new LoY(), t = new BH$()) {
    super();
    this.isPoints = true;
    this.type = "Points";
    this.geometry = e;
    this.material = t;
    this.morphTargetDictionary = undefined;
    this.morphTargetInfluences = undefined;
    this.updateMorphTargets();
  }
  copy(e, t) {
    super.copy(e, t);
    this.material = Array.isArray(e.material) ? e.material.slice() : e.material;
    this.geometry = e.geometry;
    return this;
  }
  raycast(e, t) {
    const n = this.geometry;
    const i = this.matrixWorld;
    const r = e.params.Points.threshold;
    const a = n.drawRange;
    if (n.boundingSphere === null) {
      n.computeBoundingSphere();
    }
    Ps.copy(n.boundingSphere);
    Ps.applyMatrix4(i);
    Ps.radius += r;
    if (e.ray.intersectsSphere(Ps) === false) {
      return;
    }
    Cs.copy(i).invert();
    Rs.copy(e.ray).applyMatrix4(Cs);
    const s = r / ((this.scale.x + this.scale.y + this.scale.z) / 3);
    const o = s * s;
    const l = n.index;
    const c = n.attributes.position;
    if (l !== null) {
      for (let n = Math.max(0, a.start), r = Math.min(l.count, a.start + a.count); n < r; n++) {
        const r = l.getX(n);
        Is.fromBufferAttribute(c, r);
        Us(Is, r, o, i, e, t, this);
      }
    } else {
      for (let n = Math.max(0, a.start), r = Math.min(c.count, a.start + a.count); n < r; n++) {
        Is.fromBufferAttribute(c, n);
        Us(Is, n, o, i, e, t, this);
      }
    }
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes;
    const t = Object.keys(e);
    if (t.length > 0) {
      const n = e[t[0]];
      if (n !== undefined) {
        this.morphTargetInfluences = [];
        this.morphTargetDictionary = {};
        for (let e = 0, t = n.length; e < t; e++) {
          const t = n[e].name || String(e);
          this.morphTargetInfluences.push(0);
          this.morphTargetDictionary[t] = e;
        }
      }
    }
  }
}
function Us(e, t, n, i, r, a, s) {
  const o = Rs.distanceSqToPoint(e);
  if (o < n) {
    const n = new Pq0();
    Rs.closestPointToPoint(e, n);
    n.applyMatrix4(i);
    const l = r.ray.origin.distanceTo(n);
    if (l < r.near || l > r.far) {
      return;
    }
    a.push({
      distance: l,
      distanceToRay: Math.sqrt(o),
      point: n,
      index: t,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: s
    });
  }
}
export class VCu extends gPd {
  constructor(e, t, n = bkx, i, r, a, s = hxR, o = hxR, l, c = zdS, h = 1) {
    if (c !== zdS && c !== dcC) {
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    }
    super({
      width: e,
      height: t,
      depth: h
    }, i, r, a, s, o, c, n, l);
    this.isDepthTexture = true;
    this.flipY = false;
    this.generateMipmaps = false;
    this.compareFunction = null;
  }
  copy(e) {
    super.copy(e);
    this.source = new Dn(Object.assign({}, e.image));
    this.compareFunction = e.compareFunction;
    return this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    if (this.compareFunction !== null) {
      t.compareFunction = this.compareFunction;
    }
    return t;
  }
}
export class rjZ extends gPd {
  constructor(e = null) {
    super();
    this.sourceTexture = e;
    this.isExternalTexture = true;
  }
  copy(e) {
    super.copy(e);
    this.sourceTexture = e.sourceTexture;
    return this;
  }
}
class Ds {
  constructor() {
    this.type = "Curve";
    this.arcLengthDivisions = 200;
    this.needsUpdate = false;
    this.cacheArcLengths = null;
  }
  getPoint() {
    R8M("Curve: .getPoint() not implemented.");
  }
  getPointAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getPoint(n, t);
  }
  getPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++) {
      t.push(this.getPoint(n / e));
    }
    return t;
  }
  getSpacedPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++) {
      t.push(this.getPointAt(n / e));
    }
    return t;
  }
  getLength() {
    const e = this.getLengths();
    return e[e.length - 1];
  }
  getLengths(e = this.arcLengthDivisions) {
    if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) {
      return this.cacheArcLengths;
    }
    this.needsUpdate = false;
    const t = [];
    let n;
    let i = this.getPoint(0);
    let r = 0;
    t.push(0);
    for (let a = 1; a <= e; a++) {
      n = this.getPoint(a / e);
      r += n.distanceTo(i);
      t.push(r);
      i = n;
    }
    this.cacheArcLengths = t;
    return t;
  }
  updateArcLengths() {
    this.needsUpdate = true;
    this.getLengths();
  }
  getUtoTmapping(e, t = null) {
    const n = this.getLengths();
    let i = 0;
    const r = n.length;
    let a;
    a = t || e * n[r - 1];
    let s;
    let o = 0;
    let l = r - 1;
    while (o <= l) {
      i = Math.floor(o + (l - o) / 2);
      s = n[i] - a;
      if (s < 0) {
        o = i + 1;
      } else {
        if (!(s > 0)) {
          l = i;
          break;
        }
        l = i - 1;
      }
    }
    i = l;
    if (n[i] === a) {
      return i / (r - 1);
    }
    const c = n[i];
    return (i + (a - c) / (n[i + 1] - c)) / (r - 1);
  }
  getTangent(e, t) {
    const n = 0.0001;
    let i = e - n;
    let r = e + n;
    if (i < 0) {
      i = 0;
    }
    if (r > 1) {
      r = 1;
    }
    const a = this.getPoint(i);
    const s = this.getPoint(r);
    const o = t || (a.isVector2 ? new I9Y() : new Pq0());
    o.copy(s).sub(a).normalize();
    return o;
  }
  getTangentAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getTangent(n, t);
  }
  computeFrenetFrames(e, t = false) {
    const n = new Pq0();
    const i = [];
    const r = [];
    const a = [];
    const s = new Pq0();
    const o = new kn4();
    for (let t = 0; t <= e; t++) {
      const n = t / e;
      i[t] = this.getTangentAt(n, new Pq0());
    }
    r[0] = new Pq0();
    a[0] = new Pq0();
    let l = Number.MAX_VALUE;
    const c = Math.abs(i[0].x);
    const h = Math.abs(i[0].y);
    const d = Math.abs(i[0].z);
    if (c <= l) {
      l = c;
      n.set(1, 0, 0);
    }
    if (h <= l) {
      l = h;
      n.set(0, 1, 0);
    }
    if (d <= l) {
      n.set(0, 0, 1);
    }
    s.crossVectors(i[0], n).normalize();
    r[0].crossVectors(i[0], s);
    a[0].crossVectors(i[0], r[0]);
    for (let t = 1; t <= e; t++) {
      r[t] = r[t - 1].clone();
      a[t] = a[t - 1].clone();
      s.crossVectors(i[t - 1], i[t]);
      if (s.length() > Number.EPSILON) {
        s.normalize();
        const e = Math.acos(gn(i[t - 1].dot(i[t]), -1, 1));
        r[t].applyMatrix4(o.makeRotationAxis(s, e));
      }
      a[t].crossVectors(i[t], r[t]);
    }
    if (t === true) {
      let t = Math.acos(gn(r[0].dot(r[e]), -1, 1));
      t /= e;
      if (i[0].dot(s.crossVectors(r[0], r[e])) > 0) {
        t = -t;
      }
      for (let n = 1; n <= e; n++) {
        r[n].applyMatrix4(o.makeRotationAxis(i[n], t * n));
        a[n].crossVectors(i[n], r[n]);
      }
    }
    return {
      tangents: i,
      normals: r,
      binormals: a
    };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.arcLengthDivisions = e.arcLengthDivisions;
    return this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.7,
        type: "Curve",
        generator: "Curve.toJSON"
      }
    };
    e.arcLengthDivisions = this.arcLengthDivisions;
    e.type = this.type;
    return e;
  }
  fromJSON(e) {
    this.arcLengthDivisions = e.arcLengthDivisions;
    return this;
  }
}
class Bs extends Ds {
  constructor(e = 0, t = 0, n = 1, i = 1, r = 0, a = Math.PI * 2, s = false, o = 0) {
    super();
    this.isEllipseCurve = true;
    this.type = "EllipseCurve";
    this.aX = e;
    this.aY = t;
    this.xRadius = n;
    this.yRadius = i;
    this.aStartAngle = r;
    this.aEndAngle = a;
    this.aClockwise = s;
    this.aRotation = o;
  }
  getPoint(e, t = new I9Y()) {
    const n = t;
    const i = Math.PI * 2;
    let r = this.aEndAngle - this.aStartAngle;
    const a = Math.abs(r) < Number.EPSILON;
    while (r < 0) {
      r += i;
    }
    while (r > i) {
      r -= i;
    }
    if (r < Number.EPSILON) {
      r = a ? 0 : i;
    }
    if (this.aClockwise === true && !a) {
      if (r === i) {
        r = -i;
      } else {
        r -= i;
      }
    }
    const s = this.aStartAngle + e * r;
    let o = this.aX + this.xRadius * Math.cos(s);
    let l = this.aY + this.yRadius * Math.sin(s);
    if (this.aRotation !== 0) {
      const e = Math.cos(this.aRotation);
      const t = Math.sin(this.aRotation);
      const n = o - this.aX;
      const i = l - this.aY;
      o = n * e - i * t + this.aX;
      l = n * t + i * e + this.aY;
    }
    return n.set(o, l);
  }
  copy(e) {
    super.copy(e);
    this.aX = e.aX;
    this.aY = e.aY;
    this.xRadius = e.xRadius;
    this.yRadius = e.yRadius;
    this.aStartAngle = e.aStartAngle;
    this.aEndAngle = e.aEndAngle;
    this.aClockwise = e.aClockwise;
    this.aRotation = e.aRotation;
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.aX = this.aX;
    e.aY = this.aY;
    e.xRadius = this.xRadius;
    e.yRadius = this.yRadius;
    e.aStartAngle = this.aStartAngle;
    e.aEndAngle = this.aEndAngle;
    e.aClockwise = this.aClockwise;
    e.aRotation = this.aRotation;
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e);
    this.aX = e.aX;
    this.aY = e.aY;
    this.xRadius = e.xRadius;
    this.yRadius = e.yRadius;
    this.aStartAngle = e.aStartAngle;
    this.aEndAngle = e.aEndAngle;
    this.aClockwise = e.aClockwise;
    this.aRotation = e.aRotation;
    return this;
  }
}
function Gs() {
  let e = 0;
  let t = 0;
  let n = 0;
  let i = 0;
  function r(r, a, s, o) {
    e = r;
    t = s;
    n = r * -3 + a * 3 - s * 2 - o;
    i = r * 2 - a * 2 + s + o;
  }
  return {
    initCatmullRom: function (e, t, n, i, a) {
      r(t, n, a * (n - e), a * (i - t));
    },
    initNonuniformCatmullRom: function (e, t, n, i, a, s, o) {
      let l = (t - e) / a - (n - e) / (a + s) + (n - t) / s;
      let c = (n - t) / s - (i - t) / (s + o) + (i - n) / o;
      l *= s;
      c *= s;
      r(t, n, l, c);
    },
    calc: function (r) {
      const a = r * r;
      return e + t * r + n * a + i * (a * r);
    }
  };
}
const Fs = new Pq0();
const Os = new Gs();
const Ws = new Gs();
const Vs = new Gs();
function Hs(e, t, n, i, r) {
  const a = (i - t) * 0.5;
  const s = (r - n) * 0.5;
  const o = e * e;
  return (n * 2 - i * 2 + a + s) * (e * o) + (n * -3 + i * 3 - a * 2 - s) * o + a * e + n;
}
function js(e, t, n, i) {
  return function (e, t) {
    const n = 1 - e;
    return n * n * t;
  }(e, t) + function (e, t) {
    return (1 - e) * 2 * e * t;
  }(e, n) + function (e, t) {
    return e * e * t;
  }(e, i);
}
function Ks(e, t, n, i, r) {
  return function (e, t) {
    const n = 1 - e;
    return n * n * n * t;
  }(e, t) + function (e, t) {
    const n = 1 - e;
    return n * 3 * n * e * t;
  }(e, n) + function (e, t) {
    return (1 - e) * 3 * e * e * t;
  }(e, i) + function (e, t) {
    return e * e * e * t;
  }(e, r);
}
class qs extends Ds {
  constructor(e = new I9Y(), t = new I9Y(), n = new I9Y(), i = new I9Y()) {
    super();
    this.isCubicBezierCurve = true;
    this.type = "CubicBezierCurve";
    this.v0 = e;
    this.v1 = t;
    this.v2 = n;
    this.v3 = i;
  }
  getPoint(e, t = new I9Y()) {
    const n = t;
    const i = this.v0;
    const r = this.v1;
    const a = this.v2;
    const s = this.v3;
    n.set(Ks(e, i.x, r.x, a.x, s.x), Ks(e, i.y, r.y, a.y, s.y));
    return n;
  }
  copy(e) {
    super.copy(e);
    this.v0.copy(e.v0);
    this.v1.copy(e.v1);
    this.v2.copy(e.v2);
    this.v3.copy(e.v3);
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.v0 = this.v0.toArray();
    e.v1 = this.v1.toArray();
    e.v2 = this.v2.toArray();
    e.v3 = this.v3.toArray();
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e);
    this.v0.fromArray(e.v0);
    this.v1.fromArray(e.v1);
    this.v2.fromArray(e.v2);
    this.v3.fromArray(e.v3);
    return this;
  }
}
class Qs extends Ds {
  constructor(e = new I9Y(), t = new I9Y()) {
    super();
    this.isLineCurve = true;
    this.type = "LineCurve";
    this.v1 = e;
    this.v2 = t;
  }
  getPoint(e, t = new I9Y()) {
    const n = t;
    if (e === 1) {
      n.copy(this.v2);
    } else {
      n.copy(this.v2).sub(this.v1);
      n.multiplyScalar(e).add(this.v1);
    }
    return n;
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new I9Y()) {
    return t.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(e, t) {
    return this.getTangent(e, t);
  }
  copy(e) {
    super.copy(e);
    this.v1.copy(e.v1);
    this.v2.copy(e.v2);
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.v1 = this.v1.toArray();
    e.v2 = this.v2.toArray();
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e);
    this.v1.fromArray(e.v1);
    this.v2.fromArray(e.v2);
    return this;
  }
}
class Js extends Ds {
  constructor(e = new I9Y(), t = new I9Y(), n = new I9Y()) {
    super();
    this.isQuadraticBezierCurve = true;
    this.type = "QuadraticBezierCurve";
    this.v0 = e;
    this.v1 = t;
    this.v2 = n;
  }
  getPoint(e, t = new I9Y()) {
    const n = t;
    const i = this.v0;
    const r = this.v1;
    const a = this.v2;
    n.set(js(e, i.x, r.x, a.x), js(e, i.y, r.y, a.y));
    return n;
  }
  copy(e) {
    super.copy(e);
    this.v0.copy(e.v0);
    this.v1.copy(e.v1);
    this.v2.copy(e.v2);
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.v0 = this.v0.toArray();
    e.v1 = this.v1.toArray();
    e.v2 = this.v2.toArray();
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e);
    this.v0.fromArray(e.v0);
    this.v1.fromArray(e.v1);
    this.v2.fromArray(e.v2);
    return this;
  }
}
class Xs extends Ds {
  constructor(e = new Pq0(), t = new Pq0(), n = new Pq0()) {
    super();
    this.isQuadraticBezierCurve3 = true;
    this.type = "QuadraticBezierCurve3";
    this.v0 = e;
    this.v1 = t;
    this.v2 = n;
  }
  getPoint(e, t = new Pq0()) {
    const n = t;
    const i = this.v0;
    const r = this.v1;
    const a = this.v2;
    n.set(js(e, i.x, r.x, a.x), js(e, i.y, r.y, a.y), js(e, i.z, r.z, a.z));
    return n;
  }
  copy(e) {
    super.copy(e);
    this.v0.copy(e.v0);
    this.v1.copy(e.v1);
    this.v2.copy(e.v2);
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.v0 = this.v0.toArray();
    e.v1 = this.v1.toArray();
    e.v2 = this.v2.toArray();
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e);
    this.v0.fromArray(e.v0);
    this.v1.fromArray(e.v1);
    this.v2.fromArray(e.v2);
    return this;
  }
}
class Ys extends Ds {
  constructor(e = []) {
    super();
    this.isSplineCurve = true;
    this.type = "SplineCurve";
    this.points = e;
  }
  getPoint(e, t = new I9Y()) {
    const n = t;
    const i = this.points;
    const r = (i.length - 1) * e;
    const a = Math.floor(r);
    const s = r - a;
    const o = i[a === 0 ? a : a - 1];
    const l = i[a];
    const c = i[a > i.length - 2 ? i.length - 1 : a + 1];
    const h = i[a > i.length - 3 ? i.length - 1 : a + 2];
    n.set(Hs(s, o.x, l.x, c.x, h.x), Hs(s, o.y, l.y, c.y, h.y));
    return n;
  }
  copy(e) {
    super.copy(e);
    this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const n = e.points[t];
      this.points.push(n.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, n = this.points.length; t < n; t++) {
      const n = this.points[t];
      e.points.push(n.toArray());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e);
    this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const n = e.points[t];
      this.points.push(new I9Y().fromArray(n));
    }
    return this;
  }
}
var Zs = Object.freeze({
  __proto__: null,
  ArcCurve: class extends Bs {
    constructor(e, t, n, i, r, a) {
      super(e, t, n, n, i, r, a);
      this.isArcCurve = true;
      this.type = "ArcCurve";
    }
  },
  CatmullRomCurve3: class extends Ds {
    constructor(e = [], t = false, n = "centripetal", i = 0.5) {
      super();
      this.isCatmullRomCurve3 = true;
      this.type = "CatmullRomCurve3";
      this.points = e;
      this.closed = t;
      this.curveType = n;
      this.tension = i;
    }
    getPoint(e, t = new Pq0()) {
      const n = t;
      const i = this.points;
      const r = i.length;
      const a = (r - (this.closed ? 0 : 1)) * e;
      let s;
      let o;
      let l = Math.floor(a);
      let c = a - l;
      if (this.closed) {
        l += l > 0 ? 0 : (Math.floor(Math.abs(l) / r) + 1) * r;
      } else if (c === 0 && l === r - 1) {
        l = r - 2;
        c = 1;
      }
      if (this.closed || l > 0) {
        s = i[(l - 1) % r];
      } else {
        Fs.subVectors(i[0], i[1]).add(i[0]);
        s = Fs;
      }
      const h = i[l % r];
      const d = i[(l + 1) % r];
      if (this.closed || l + 2 < r) {
        o = i[(l + 2) % r];
      } else {
        Fs.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]);
        o = Fs;
      }
      if (this.curveType === "centripetal" || this.curveType === "chordal") {
        const e = this.curveType === "chordal" ? 0.5 : 0.25;
        let t = Math.pow(s.distanceToSquared(h), e);
        let n = Math.pow(h.distanceToSquared(d), e);
        let i = Math.pow(d.distanceToSquared(o), e);
        if (n < 0.0001) {
          n = 1;
        }
        if (t < 0.0001) {
          t = n;
        }
        if (i < 0.0001) {
          i = n;
        }
        Os.initNonuniformCatmullRom(s.x, h.x, d.x, o.x, t, n, i);
        Ws.initNonuniformCatmullRom(s.y, h.y, d.y, o.y, t, n, i);
        Vs.initNonuniformCatmullRom(s.z, h.z, d.z, o.z, t, n, i);
      } else if (this.curveType === "catmullrom") {
        Os.initCatmullRom(s.x, h.x, d.x, o.x, this.tension);
        Ws.initCatmullRom(s.y, h.y, d.y, o.y, this.tension);
        Vs.initCatmullRom(s.z, h.z, d.z, o.z, this.tension);
      }
      n.set(Os.calc(c), Ws.calc(c), Vs.calc(c));
      return n;
    }
    copy(e) {
      super.copy(e);
      this.points = [];
      for (let t = 0, n = e.points.length; t < n; t++) {
        const n = e.points[t];
        this.points.push(n.clone());
      }
      this.closed = e.closed;
      this.curveType = e.curveType;
      this.tension = e.tension;
      return this;
    }
    toJSON() {
      const e = super.toJSON();
      e.points = [];
      for (let t = 0, n = this.points.length; t < n; t++) {
        const n = this.points[t];
        e.points.push(n.toArray());
      }
      e.closed = this.closed;
      e.curveType = this.curveType;
      e.tension = this.tension;
      return e;
    }
    fromJSON(e) {
      super.fromJSON(e);
      this.points = [];
      for (let t = 0, n = e.points.length; t < n; t++) {
        const n = e.points[t];
        this.points.push(new Pq0().fromArray(n));
      }
      this.closed = e.closed;
      this.curveType = e.curveType;
      this.tension = e.tension;
      return this;
    }
  },
  CubicBezierCurve: qs,
  CubicBezierCurve3: class extends Ds {
    constructor(e = new Pq0(), t = new Pq0(), n = new Pq0(), i = new Pq0()) {
      super();
      this.isCubicBezierCurve3 = true;
      this.type = "CubicBezierCurve3";
      this.v0 = e;
      this.v1 = t;
      this.v2 = n;
      this.v3 = i;
    }
    getPoint(e, t = new Pq0()) {
      const n = t;
      const i = this.v0;
      const r = this.v1;
      const a = this.v2;
      const s = this.v3;
      n.set(Ks(e, i.x, r.x, a.x, s.x), Ks(e, i.y, r.y, a.y, s.y), Ks(e, i.z, r.z, a.z, s.z));
      return n;
    }
    copy(e) {
      super.copy(e);
      this.v0.copy(e.v0);
      this.v1.copy(e.v1);
      this.v2.copy(e.v2);
      this.v3.copy(e.v3);
      return this;
    }
    toJSON() {
      const e = super.toJSON();
      e.v0 = this.v0.toArray();
      e.v1 = this.v1.toArray();
      e.v2 = this.v2.toArray();
      e.v3 = this.v3.toArray();
      return e;
    }
    fromJSON(e) {
      super.fromJSON(e);
      this.v0.fromArray(e.v0);
      this.v1.fromArray(e.v1);
      this.v2.fromArray(e.v2);
      this.v3.fromArray(e.v3);
      return this;
    }
  },
  EllipseCurve: Bs,
  LineCurve: Qs,
  LineCurve3: class extends Ds {
    constructor(e = new Pq0(), t = new Pq0()) {
      super();
      this.isLineCurve3 = true;
      this.type = "LineCurve3";
      this.v1 = e;
      this.v2 = t;
    }
    getPoint(e, t = new Pq0()) {
      const n = t;
      if (e === 1) {
        n.copy(this.v2);
      } else {
        n.copy(this.v2).sub(this.v1);
        n.multiplyScalar(e).add(this.v1);
      }
      return n;
    }
    getPointAt(e, t) {
      return this.getPoint(e, t);
    }
    getTangent(e, t = new Pq0()) {
      return t.subVectors(this.v2, this.v1).normalize();
    }
    getTangentAt(e, t) {
      return this.getTangent(e, t);
    }
    copy(e) {
      super.copy(e);
      this.v1.copy(e.v1);
      this.v2.copy(e.v2);
      return this;
    }
    toJSON() {
      const e = super.toJSON();
      e.v1 = this.v1.toArray();
      e.v2 = this.v2.toArray();
      return e;
    }
    fromJSON(e) {
      super.fromJSON(e);
      this.v1.fromArray(e.v1);
      this.v2.fromArray(e.v2);
      return this;
    }
  },
  QuadraticBezierCurve: Js,
  QuadraticBezierCurve3: Xs,
  SplineCurve: Ys
});
class $s extends Ds {
  constructor() {
    super();
    this.type = "CurvePath";
    this.curves = [];
    this.autoClose = false;
  }
  add(e) {
    this.curves.push(e);
  }
  closePath() {
    const e = this.curves[0].getPoint(0);
    const t = this.curves[this.curves.length - 1].getPoint(1);
    if (!e.equals(t)) {
      const n = e.isVector2 === true ? "LineCurve" : "LineCurve3";
      this.curves.push(new Zs[n](t, e));
    }
    return this;
  }
  getPoint(e, t) {
    const n = e * this.getLength();
    const i = this.getCurveLengths();
    let r = 0;
    while (r < i.length) {
      if (i[r] >= n) {
        const e = i[r] - n;
        const a = this.curves[r];
        const s = a.getLength();
        const o = s === 0 ? 0 : 1 - e / s;
        return a.getPointAt(o, t);
      }
      r++;
    }
    return null;
  }
  getLength() {
    const e = this.getCurveLengths();
    return e[e.length - 1];
  }
  updateArcLengths() {
    this.needsUpdate = true;
    this.cacheLengths = null;
    this.getCurveLengths();
  }
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length) {
      return this.cacheLengths;
    }
    const e = [];
    let t = 0;
    for (let n = 0, i = this.curves.length; n < i; n++) {
      t += this.curves[n].getLength();
      e.push(t);
    }
    this.cacheLengths = e;
    return e;
  }
  getSpacedPoints(e = 40) {
    const t = [];
    for (let n = 0; n <= e; n++) {
      t.push(this.getPoint(n / e));
    }
    if (this.autoClose) {
      t.push(t[0]);
    }
    return t;
  }
  getPoints(e = 12) {
    const t = [];
    let n;
    for (let i = 0, r = this.curves; i < r.length; i++) {
      const a = r[i];
      const s = a.isEllipseCurve ? e * 2 : a.isLineCurve || a.isLineCurve3 ? 1 : a.isSplineCurve ? e * a.points.length : e;
      const o = a.getPoints(s);
      for (let e = 0; e < o.length; e++) {
        const i = o[e];
        if (!n || !n.equals(i)) {
          t.push(i);
          n = i;
        }
      }
    }
    if (this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0])) {
      t.push(t[0]);
    }
    return t;
  }
  copy(e) {
    super.copy(e);
    this.curves = [];
    for (let t = 0, n = e.curves.length; t < n; t++) {
      const n = e.curves[t];
      this.curves.push(n.clone());
    }
    this.autoClose = e.autoClose;
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.autoClose = this.autoClose;
    e.curves = [];
    for (let t = 0, n = this.curves.length; t < n; t++) {
      const n = this.curves[t];
      e.curves.push(n.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e);
    this.autoClose = e.autoClose;
    this.curves = [];
    for (let t = 0, n = e.curves.length; t < n; t++) {
      const n = e.curves[t];
      this.curves.push(new Zs[n.type]().fromJSON(n));
    }
    return this;
  }
}
class eo extends $s {
  constructor(e) {
    super();
    this.type = "Path";
    this.currentPoint = new I9Y();
    if (e) {
      this.setFromPoints(e);
    }
  }
  setFromPoints(e) {
    this.moveTo(e[0].x, e[0].y);
    for (let t = 1, n = e.length; t < n; t++) {
      this.lineTo(e[t].x, e[t].y);
    }
    return this;
  }
  moveTo(e, t) {
    this.currentPoint.set(e, t);
    return this;
  }
  lineTo(e, t) {
    const n = new Qs(this.currentPoint.clone(), new I9Y(e, t));
    this.curves.push(n);
    this.currentPoint.set(e, t);
    return this;
  }
  quadraticCurveTo(e, t, n, i) {
    const r = new Js(this.currentPoint.clone(), new I9Y(e, t), new I9Y(n, i));
    this.curves.push(r);
    this.currentPoint.set(n, i);
    return this;
  }
  bezierCurveTo(e, t, n, i, r, a) {
    const s = new qs(this.currentPoint.clone(), new I9Y(e, t), new I9Y(n, i), new I9Y(r, a));
    this.curves.push(s);
    this.currentPoint.set(r, a);
    return this;
  }
  splineThru(e) {
    const t = [this.currentPoint.clone()].concat(e);
    const n = new Ys(t);
    this.curves.push(n);
    this.currentPoint.copy(e[e.length - 1]);
    return this;
  }
  arc(e, t, n, i, r, a) {
    const s = this.currentPoint.x;
    const o = this.currentPoint.y;
    this.absarc(e + s, t + o, n, i, r, a);
    return this;
  }
  absarc(e, t, n, i, r, a) {
    this.absellipse(e, t, n, n, i, r, a);
    return this;
  }
  ellipse(e, t, n, i, r, a, s, o) {
    const l = this.currentPoint.x;
    const c = this.currentPoint.y;
    this.absellipse(e + l, t + c, n, i, r, a, s, o);
    return this;
  }
  absellipse(e, t, n, i, r, a, s, o) {
    const l = new Bs(e, t, n, i, r, a, s, o);
    if (this.curves.length > 0) {
      const e = l.getPoint(0);
      if (!e.equals(this.currentPoint)) {
        this.lineTo(e.x, e.y);
      }
    }
    this.curves.push(l);
    const c = l.getPoint(1);
    this.currentPoint.copy(c);
    return this;
  }
  copy(e) {
    super.copy(e);
    this.currentPoint.copy(e.currentPoint);
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.currentPoint = this.currentPoint.toArray();
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e);
    this.currentPoint.fromArray(e.currentPoint);
    return this;
  }
}
class to extends eo {
  constructor(e) {
    super(e);
    this.uuid = pn();
    this.type = "Shape";
    this.holes = [];
  }
  getPointsHoles(e) {
    const t = [];
    for (let n = 0, i = this.holes.length; n < i; n++) {
      t[n] = this.holes[n].getPoints(e);
    }
    return t;
  }
  extractPoints(e) {
    return {
      shape: this.getPoints(e),
      holes: this.getPointsHoles(e)
    };
  }
  copy(e) {
    super.copy(e);
    this.holes = [];
    for (let t = 0, n = e.holes.length; t < n; t++) {
      const n = e.holes[t];
      this.holes.push(n.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.uuid = this.uuid;
    e.holes = [];
    for (let t = 0, n = this.holes.length; t < n; t++) {
      const n = this.holes[t];
      e.holes.push(n.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e);
    this.uuid = e.uuid;
    this.holes = [];
    for (let t = 0, n = e.holes.length; t < n; t++) {
      const n = e.holes[t];
      this.holes.push(new eo().fromJSON(n));
    }
    return this;
  }
}
function no(e, t, n = 2) {
  const i = t && t.length;
  const r = i ? t[0] * n : e.length;
  let a = io(e, 0, r, n, true);
  const s = [];
  if (!a || a.next === a.prev) {
    return s;
  }
  let o;
  let l;
  let c;
  if (i) {
    a = function (e, t, n, i) {
      const r = [];
      for (let n = 0, a = t.length; n < a; n++) {
        const s = io(e, t[n] * i, n < a - 1 ? t[n + 1] * i : e.length, i, false);
        if (s === s.next) {
          s.steiner = true;
        }
        r.push(go(s));
      }
      r.sort(ho);
      for (let e = 0; e < r.length; e++) {
        n = uo(r[e], n);
      }
      return n;
    }(e, t, a, n);
  }
  if (e.length > n * 80) {
    o = e[0];
    l = e[1];
    let t = o;
    let i = l;
    for (let a = n; a < r; a += n) {
      const n = e[a];
      const r = e[a + 1];
      if (n < o) {
        o = n;
      }
      if (r < l) {
        l = r;
      }
      if (n > t) {
        t = n;
      }
      if (r > i) {
        i = r;
      }
    }
    c = Math.max(t - o, i - l);
    c = c !== 0 ? 32767 / c : 0;
  }
  ao(a, s, n, o, l, c, 0);
  return s;
}
function io(e, t, n, i, r) {
  let a;
  if (r === function (e, t, n, i) {
    let r = 0;
    for (let a = t, s = n - i; a < n; a += i) {
      r += (e[s] - e[a]) * (e[a + 1] + e[s + 1]);
      s = a;
    }
    return r;
  }(e, t, n, i) > 0) {
    for (let r = t; r < n; r += i) {
      a = Eo(r / i | 0, e[r], e[r + 1], a);
    }
  } else {
    for (let r = n - i; r >= t; r -= i) {
      a = Eo(r / i | 0, e[r], e[r + 1], a);
    }
  }
  if (a && yo(a, a.next)) {
    Mo(a);
    a = a.next;
  }
  return a;
}
function ro(e, t) {
  if (!e) {
    return e;
  }
  t ||= e;
  let n;
  let i = e;
  do {
    n = false;
    if (i.steiner || !yo(i, i.next) && bo(i.prev, i, i.next) !== 0) {
      i = i.next;
    } else {
      Mo(i);
      i = t = i.prev;
      if (i === i.next) {
        break;
      }
      n = true;
    }
  } while (n || i !== t);
  return t;
}
function ao(e, t, n, i, r, a, s) {
  if (!e) {
    return;
  }
  if (!s && a) {
    (function (e, t, n, i) {
      let r = e;
      do {
        if (r.z === 0) {
          r.z = po(r.x, r.y, t, n, i);
        }
        r.prevZ = r.prev;
        r.nextZ = r.next;
        r = r.next;
      } while (r !== e);
      r.prevZ.nextZ = null;
      r.prevZ = null;
      (function (e) {
        let t;
        let n = 1;
        do {
          let i;
          let r = e;
          e = null;
          let a = null;
          for (t = 0; r;) {
            t++;
            let s = r;
            let o = 0;
            for (let e = 0; e < n && (o++, s = s.nextZ, s); e++);
            let l = n;
            while (o > 0 || l > 0 && s) {
              if (o !== 0 && (l === 0 || !s || r.z <= s.z)) {
                i = r;
                r = r.nextZ;
                o--;
              } else {
                i = s;
                s = s.nextZ;
                l--;
              }
              if (a) {
                a.nextZ = i;
              } else {
                e = i;
              }
              i.prevZ = a;
              a = i;
            }
            r = s;
          }
          a.nextZ = null;
          n *= 2;
        } while (t > 1);
      })(r);
    })(e, i, r, a);
  }
  let o = e;
  while (e.prev !== e.next) {
    const l = e.prev;
    const c = e.next;
    if (a ? oo(e, i, r, a) : so(e)) {
      t.push(l.i, e.i, c.i);
      Mo(e);
      e = c.next;
      o = c.next;
    } else if ((e = c) === o) {
      if (s) {
        if (s === 1) {
          ao(e = lo(ro(e), t), t, n, i, r, a, 2);
        } else if (s === 2) {
          co(e, t, n, i, r, a);
        }
      } else {
        ao(ro(e), t, n, i, r, a, 1);
      }
      break;
    }
  }
}
function so(e) {
  const t = e.prev;
  const n = e;
  const i = e.next;
  if (bo(t, n, i) >= 0) {
    return false;
  }
  const r = t.x;
  const a = n.x;
  const s = i.x;
  const o = t.y;
  const l = n.y;
  const c = i.y;
  const h = Math.min(r, a, s);
  const d = Math.min(o, l, c);
  const u = Math.max(r, a, s);
  const f = Math.max(o, l, c);
  let p = i.next;
  while (p !== t) {
    if (p.x >= h && p.x <= u && p.y >= d && p.y <= f && Ao(r, o, a, l, s, c, p.x, p.y) && bo(p.prev, p, p.next) >= 0) {
      return false;
    }
    p = p.next;
  }
  return true;
}
function oo(e, t, n, i) {
  const r = e.prev;
  const a = e;
  const s = e.next;
  if (bo(r, a, s) >= 0) {
    return false;
  }
  const o = r.x;
  const l = a.x;
  const c = s.x;
  const h = r.y;
  const d = a.y;
  const u = s.y;
  const f = Math.min(o, l, c);
  const p = Math.min(h, d, u);
  const g = Math.max(o, l, c);
  const m = Math.max(h, d, u);
  const A = po(f, p, t, n, i);
  const v = po(g, m, t, n, i);
  let b = e.prevZ;
  let y = e.nextZ;
  while (b && b.z >= A && y && y.z <= v) {
    if (b.x >= f && b.x <= g && b.y >= p && b.y <= m && b !== r && b !== s && Ao(o, h, l, d, c, u, b.x, b.y) && bo(b.prev, b, b.next) >= 0) {
      return false;
    }
    b = b.prevZ;
    if (y.x >= f && y.x <= g && y.y >= p && y.y <= m && y !== r && y !== s && Ao(o, h, l, d, c, u, y.x, y.y) && bo(y.prev, y, y.next) >= 0) {
      return false;
    }
    y = y.nextZ;
  }
  while (b && b.z >= A) {
    if (b.x >= f && b.x <= g && b.y >= p && b.y <= m && b !== r && b !== s && Ao(o, h, l, d, c, u, b.x, b.y) && bo(b.prev, b, b.next) >= 0) {
      return false;
    }
    b = b.prevZ;
  }
  while (y && y.z <= v) {
    if (y.x >= f && y.x <= g && y.y >= p && y.y <= m && y !== r && y !== s && Ao(o, h, l, d, c, u, y.x, y.y) && bo(y.prev, y, y.next) >= 0) {
      return false;
    }
    y = y.nextZ;
  }
  return true;
}
function lo(e, t) {
  let n = e;
  do {
    const i = n.prev;
    const r = n.next.next;
    if (!yo(i, r) && wo(i, n, n.next, r) && ko(i, r) && ko(r, i)) {
      t.push(i.i, n.i, r.i);
      Mo(n);
      Mo(n.next);
      n = e = r;
    }
    n = n.next;
  } while (n !== e);
  return ro(n);
}
function co(e, t, n, i, r, a) {
  let s = e;
  do {
    let e = s.next.next;
    while (e !== s.prev) {
      if (s.i !== e.i && vo(s, e)) {
        let o = To(s, e);
        s = ro(s, s.next);
        o = ro(o, o.next);
        ao(s, t, n, i, r, a, 0);
        ao(o, t, n, i, r, a, 0);
        return;
      }
      e = e.next;
    }
    s = s.next;
  } while (s !== e);
}
function ho(e, t) {
  let n = e.x - t.x;
  if (n === 0 && (n = e.y - t.y, n === 0)) {
    n = (e.next.y - e.y) / (e.next.x - e.x) - (t.next.y - t.y) / (t.next.x - t.x);
  }
  return n;
}
function uo(e, t) {
  const n = function (e, t) {
    let n = t;
    const i = e.x;
    const r = e.y;
    let a;
    let s = -Infinity;
    if (yo(e, n)) {
      return n;
    }
    do {
      if (yo(e, n.next)) {
        return n.next;
      }
      if (r <= n.y && r >= n.next.y && n.next.y !== n.y) {
        const e = n.x + (r - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
        if (e <= i && e > s && (s = e, a = n.x < n.next.x ? n : n.next, e === i)) {
          return a;
        }
      }
      n = n.next;
    } while (n !== t);
    if (!a) {
      return null;
    }
    const o = a;
    const l = a.x;
    const c = a.y;
    let h = Infinity;
    n = a;
    do {
      if (i >= n.x && n.x >= l && i !== n.x && mo(r < c ? i : s, r, l, c, r < c ? s : i, r, n.x, n.y)) {
        const t = Math.abs(r - n.y) / (i - n.x);
        if (ko(n, e) && (t < h || t === h && (n.x > a.x || n.x === a.x && fo(a, n)))) {
          a = n;
          h = t;
        }
      }
      n = n.next;
    } while (n !== o);
    return a;
  }(e, t);
  if (!n) {
    return t;
  }
  const i = To(n, e);
  ro(i, i.next);
  return ro(n, n.next);
}
function fo(e, t) {
  return bo(e.prev, e, t.prev) < 0 && bo(t.next, e, e.next) < 0;
}
function po(e, t, n, i, r) {
  return (e = ((e = ((e = ((e = ((e = (e - n) * r | 0) | e << 8) & 16711935) | e << 4) & 252645135) | e << 2) & 858993459) | e << 1) & 1431655765) | (t = ((t = ((t = ((t = ((t = (t - i) * r | 0) | t << 8) & 16711935) | t << 4) & 252645135) | t << 2) & 858993459) | t << 1) & 1431655765) << 1;
}
function go(e) {
  let t = e;
  let n = e;
  do {
    if (t.x < n.x || t.x === n.x && t.y < n.y) {
      n = t;
    }
    t = t.next;
  } while (t !== e);
  return n;
}
function mo(e, t, n, i, r, a, s, o) {
  return (r - s) * (t - o) >= (e - s) * (a - o) && (e - s) * (i - o) >= (n - s) * (t - o) && (n - s) * (a - o) >= (r - s) * (i - o);
}
function Ao(e, t, n, i, r, a, s, o) {
  return (e !== s || t !== o) && mo(e, t, n, i, r, a, s, o);
}
function vo(e, t) {
  return e.next.i !== t.i && e.prev.i !== t.i && !function (e, t) {
    let n = e;
    do {
      if (n.i !== e.i && n.next.i !== e.i && n.i !== t.i && n.next.i !== t.i && wo(n, n.next, e, t)) {
        return true;
      }
      n = n.next;
    } while (n !== e);
    return false;
  }(e, t) && (ko(e, t) && ko(t, e) && function (e, t) {
    let n = e;
    let i = false;
    const r = (e.x + t.x) / 2;
    const a = (e.y + t.y) / 2;
    do {
      if (n.y > a != n.next.y > a && n.next.y !== n.y && r < (n.next.x - n.x) * (a - n.y) / (n.next.y - n.y) + n.x) {
        i = !i;
      }
      n = n.next;
    } while (n !== e);
    return i;
  }(e, t) && (bo(e.prev, e, t.prev) || bo(e, t.prev, t)) || yo(e, t) && bo(e.prev, e, e.next) > 0 && bo(t.prev, t, t.next) > 0);
}
function bo(e, t, n) {
  return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
}
function yo(e, t) {
  return e.x === t.x && e.y === t.y;
}
function wo(e, t, n, i) {
  const r = So(bo(e, t, n));
  const a = So(bo(e, t, i));
  const s = So(bo(n, i, e));
  const o = So(bo(n, i, t));
  return r !== a && s !== o || r === 0 && !!xo(e, n, t) || a === 0 && !!xo(e, i, t) || s === 0 && !!xo(n, e, i) || o === 0 && !!xo(n, t, i);
}
function xo(e, t, n) {
  return t.x <= Math.max(e.x, n.x) && t.x >= Math.min(e.x, n.x) && t.y <= Math.max(e.y, n.y) && t.y >= Math.min(e.y, n.y);
}
function So(e) {
  if (e > 0) {
    return 1;
  } else if (e < 0) {
    return -1;
  } else {
    return 0;
  }
}
function ko(e, t) {
  if (bo(e.prev, e, e.next) < 0) {
    return bo(e, t, e.next) >= 0 && bo(e, e.prev, t) >= 0;
  } else {
    return bo(e, t, e.prev) < 0 || bo(e, e.next, t) < 0;
  }
}
function To(e, t) {
  const n = _o(e.i, e.x, e.y);
  const i = _o(t.i, t.x, t.y);
  const r = e.next;
  const a = t.prev;
  e.next = t;
  t.prev = e;
  n.next = r;
  r.prev = n;
  i.next = n;
  n.prev = i;
  a.next = i;
  i.prev = a;
  return i;
}
function Eo(e, t, n, i) {
  const r = _o(e, t, n);
  if (i) {
    r.next = i.next;
    r.prev = i;
    i.next.prev = r;
    i.next = r;
  } else {
    r.prev = r;
    r.next = r;
  }
  return r;
}
function Mo(e) {
  e.next.prev = e.prev;
  e.prev.next = e.next;
  if (e.prevZ) {
    e.prevZ.nextZ = e.nextZ;
  }
  if (e.nextZ) {
    e.nextZ.prevZ = e.prevZ;
  }
}
function _o(e, t, n) {
  return {
    i: e,
    x: t,
    y: n,
    prev: null,
    next: null,
    z: 0,
    prevZ: null,
    nextZ: null,
    steiner: false
  };
}
class Co {
  static triangulate(e, t, n = 2) {
    return no(e, t, n);
  }
}
class Ro {
  static area(e) {
    const t = e.length;
    let n = 0;
    for (let i = t - 1, r = 0; r < t; i = r++) {
      n += e[i].x * e[r].y - e[r].x * e[i].y;
    }
    return n * 0.5;
  }
  static isClockWise(e) {
    return Ro.area(e) < 0;
  }
  static triangulateShape(e, t) {
    const n = [];
    const i = [];
    const r = [];
    Po(e);
    Io(n, e);
    let a = e.length;
    t.forEach(Po);
    for (let e = 0; e < t.length; e++) {
      i.push(a);
      a += t[e].length;
      Io(n, t[e]);
    }
    const s = Co.triangulate(n, i);
    for (let e = 0; e < s.length; e += 3) {
      r.push(s.slice(e, e + 3));
    }
    return r;
  }
}
function Po(e) {
  const t = e.length;
  if (t > 2 && e[t - 1].equals(e[0])) {
    e.pop();
  }
}
function Io(e, t) {
  for (let n = 0; n < t.length; n++) {
    e.push(t[n].x);
    e.push(t[n].y);
  }
}
export class bdM extends LoY {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super();
    this.type = "PlaneGeometry";
    this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    };
    const r = e / 2;
    const a = t / 2;
    const s = Math.floor(n);
    const o = Math.floor(i);
    const l = s + 1;
    const c = o + 1;
    const h = e / s;
    const d = t / o;
    const u = [];
    const f = [];
    const p = [];
    const g = [];
    for (let e = 0; e < c; e++) {
      const t = e * d - a;
      for (let n = 0; n < l; n++) {
        const i = n * h - r;
        f.push(i, -t, 0);
        p.push(0, 0, 1);
        g.push(n / s);
        g.push(1 - e / o);
      }
    }
    for (let e = 0; e < o; e++) {
      for (let t = 0; t < s; t++) {
        const n = t + l * e;
        const i = t + l * (e + 1);
        const r = t + 1 + l * (e + 1);
        const a = t + 1 + l * e;
        u.push(n, i, a);
        u.push(i, r, a);
      }
    }
    this.setIndex(u);
    this.setAttribute("position", new Sr(f, 3));
    this.setAttribute("normal", new Sr(p, 3));
    this.setAttribute("uv", new Sr(g, 2));
  }
  copy(e) {
    super.copy(e);
    this.parameters = Object.assign({}, e.parameters);
    return this;
  }
  static fromJSON(e) {
    return new bdM(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
export class MSw extends LoY {
  constructor(e = new to([new I9Y(0, 0.5), new I9Y(-0.5, -0.5), new I9Y(0.5, -0.5)]), t = 12) {
    super();
    this.type = "ShapeGeometry";
    this.parameters = {
      shapes: e,
      curveSegments: t
    };
    const n = [];
    const i = [];
    const r = [];
    const a = [];
    let s = 0;
    let o = 0;
    if (Array.isArray(e) === false) {
      l(e);
    } else {
      for (let t = 0; t < e.length; t++) {
        l(e[t]);
        this.addGroup(s, o, t);
        s += o;
        o = 0;
      }
    }
    function l(e) {
      const s = i.length / 3;
      const l = e.extractPoints(t);
      let c = l.shape;
      const h = l.holes;
      if (Ro.isClockWise(c) === false) {
        c = c.reverse();
      }
      for (let e = 0, t = h.length; e < t; e++) {
        const t = h[e];
        if (Ro.isClockWise(t) === true) {
          h[e] = t.reverse();
        }
      }
      const d = Ro.triangulateShape(c, h);
      for (let e = 0, t = h.length; e < t; e++) {
        const t = h[e];
        c = c.concat(t);
      }
      for (let e = 0, t = c.length; e < t; e++) {
        const t = c[e];
        i.push(t.x, t.y, 0);
        r.push(0, 0, 1);
        a.push(t.x, t.y);
      }
      for (let e = 0, t = d.length; e < t; e++) {
        const t = d[e];
        const i = t[0] + s;
        const r = t[1] + s;
        const a = t[2] + s;
        n.push(i, r, a);
        o += 3;
      }
    }
    this.setIndex(n);
    this.setAttribute("position", new Sr(i, 3));
    this.setAttribute("normal", new Sr(r, 3));
    this.setAttribute("uv", new Sr(a, 2));
  }
  copy(e) {
    super.copy(e);
    this.parameters = Object.assign({}, e.parameters);
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    return function (e, t) {
      t.shapes = [];
      if (Array.isArray(e)) {
        for (let n = 0, i = e.length; n < i; n++) {
          const i = e[n];
          t.shapes.push(i.uuid);
        }
      } else {
        t.shapes.push(e.uuid);
      }
      return t;
    }(this.parameters.shapes, e);
  }
  static fromJSON(e, t) {
    const n = [];
    for (let i = 0, r = e.shapes.length; i < r; i++) {
      const r = t[e.shapes[i]];
      n.push(r);
    }
    return new MSw(n, e.curveSegments);
  }
}
export class Gu$ extends LoY {
  constructor(e = 1, t = 32, n = 16, i = 0, r = Math.PI * 2, a = 0, s = Math.PI) {
    super();
    this.type = "SphereGeometry";
    this.parameters = {
      radius: e,
      widthSegments: t,
      heightSegments: n,
      phiStart: i,
      phiLength: r,
      thetaStart: a,
      thetaLength: s
    };
    t = Math.max(3, Math.floor(t));
    n = Math.max(2, Math.floor(n));
    const o = Math.min(a + s, Math.PI);
    let l = 0;
    const c = [];
    const h = new Pq0();
    const d = new Pq0();
    const u = [];
    const f = [];
    const p = [];
    const g = [];
    for (let u = 0; u <= n; u++) {
      const m = [];
      const A = u / n;
      let v = 0;
      if (u === 0 && a === 0) {
        v = 0.5 / t;
      } else if (u === n && o === Math.PI) {
        v = -0.5 / t;
      }
      for (let n = 0; n <= t; n++) {
        const o = n / t;
        h.x = -e * Math.cos(i + o * r) * Math.sin(a + A * s);
        h.y = e * Math.cos(a + A * s);
        h.z = e * Math.sin(i + o * r) * Math.sin(a + A * s);
        f.push(h.x, h.y, h.z);
        d.copy(h).normalize();
        p.push(d.x, d.y, d.z);
        g.push(o + v, 1 - A);
        m.push(l++);
      }
      c.push(m);
    }
    for (let e = 0; e < n; e++) {
      for (let i = 0; i < t; i++) {
        const t = c[e][i + 1];
        const r = c[e][i];
        const s = c[e + 1][i];
        const l = c[e + 1][i + 1];
        if (e !== 0 || a > 0) {
          u.push(t, r, l);
        }
        if (e !== n - 1 || o < Math.PI) {
          u.push(r, s, l);
        }
      }
    }
    this.setIndex(u);
    this.setAttribute("position", new Sr(f, 3));
    this.setAttribute("normal", new Sr(p, 3));
    this.setAttribute("uv", new Sr(g, 2));
  }
  copy(e) {
    super.copy(e);
    this.parameters = Object.assign({}, e.parameters);
    return this;
  }
  static fromJSON(e) {
    return new Gu$(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength);
  }
}
export class _4j extends imn {
  constructor(e) {
    super();
    this.isMeshStandardMaterial = true;
    this.type = "MeshStandardMaterial";
    this.defines = {
      STANDARD: ""
    };
    this.color = new Q1f(16777215);
    this.roughness = 1;
    this.metalness = 0;
    this.map = null;
    this.lightMap = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.emissive = new Q1f(0);
    this.emissiveIntensity = 1;
    this.emissiveMap = null;
    this.bumpMap = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalMapType = bI3;
    this.normalScale = new I9Y(1, 1);
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.roughnessMap = null;
    this.metalnessMap = null;
    this.alphaMap = null;
    this.envMap = null;
    this.envMapRotation = new O9p();
    this.envMapIntensity = 1;
    this.wireframe = false;
    this.wireframeLinewidth = 1;
    this.wireframeLinecap = "round";
    this.wireframeLinejoin = "round";
    this.flatShading = false;
    this.fog = true;
    this.setValues(e);
  }
  copy(e) {
    super.copy(e);
    this.defines = {
      STANDARD: ""
    };
    this.color.copy(e.color);
    this.roughness = e.roughness;
    this.metalness = e.metalness;
    this.map = e.map;
    this.lightMap = e.lightMap;
    this.lightMapIntensity = e.lightMapIntensity;
    this.aoMap = e.aoMap;
    this.aoMapIntensity = e.aoMapIntensity;
    this.emissive.copy(e.emissive);
    this.emissiveMap = e.emissiveMap;
    this.emissiveIntensity = e.emissiveIntensity;
    this.bumpMap = e.bumpMap;
    this.bumpScale = e.bumpScale;
    this.normalMap = e.normalMap;
    this.normalMapType = e.normalMapType;
    this.normalScale.copy(e.normalScale);
    this.displacementMap = e.displacementMap;
    this.displacementScale = e.displacementScale;
    this.displacementBias = e.displacementBias;
    this.roughnessMap = e.roughnessMap;
    this.metalnessMap = e.metalnessMap;
    this.alphaMap = e.alphaMap;
    this.envMap = e.envMap;
    this.envMapRotation.copy(e.envMapRotation);
    this.envMapIntensity = e.envMapIntensity;
    this.wireframe = e.wireframe;
    this.wireframeLinewidth = e.wireframeLinewidth;
    this.wireframeLinecap = e.wireframeLinecap;
    this.wireframeLinejoin = e.wireframeLinejoin;
    this.flatShading = e.flatShading;
    this.fog = e.fog;
    return this;
  }
}
export class uSd extends _4j {
  constructor(e) {
    super();
    this.isMeshPhysicalMaterial = true;
    this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    };
    this.type = "MeshPhysicalMaterial";
    this.anisotropyRotation = 0;
    this.anisotropyMap = null;
    this.clearcoatMap = null;
    this.clearcoatRoughness = 0;
    this.clearcoatRoughnessMap = null;
    this.clearcoatNormalScale = new I9Y(1, 1);
    this.clearcoatNormalMap = null;
    this.ior = 1.5;
    Object.defineProperty(this, "reflectivity", {
      get: function () {
        return gn((this.ior - 1) * 2.5 / (this.ior + 1), 0, 1);
      },
      set: function (e) {
        this.ior = (1 + e * 0.4) / (1 - e * 0.4);
      }
    });
    this.iridescenceMap = null;
    this.iridescenceIOR = 1.3;
    this.iridescenceThicknessRange = [100, 400];
    this.iridescenceThicknessMap = null;
    this.sheenColor = new Q1f(0);
    this.sheenColorMap = null;
    this.sheenRoughness = 1;
    this.sheenRoughnessMap = null;
    this.transmissionMap = null;
    this.thickness = 0;
    this.thicknessMap = null;
    this.attenuationDistance = Infinity;
    this.attenuationColor = new Q1f(1, 1, 1);
    this.specularIntensity = 1;
    this.specularIntensityMap = null;
    this.specularColor = new Q1f(1, 1, 1);
    this.specularColorMap = null;
    this._anisotropy = 0;
    this._clearcoat = 0;
    this._dispersion = 0;
    this._iridescence = 0;
    this._sheen = 0;
    this._transmission = 0;
    this.setValues(e);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(e) {
    if (this._anisotropy > 0 != e > 0) {
      this.version++;
    }
    this._anisotropy = e;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    if (this._clearcoat > 0 != e > 0) {
      this.version++;
    }
    this._clearcoat = e;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    if (this._iridescence > 0 != e > 0) {
      this.version++;
    }
    this._iridescence = e;
  }
  get dispersion() {
    return this._dispersion;
  }
  set dispersion(e) {
    if (this._dispersion > 0 != e > 0) {
      this.version++;
    }
    this._dispersion = e;
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    if (this._sheen > 0 != e > 0) {
      this.version++;
    }
    this._sheen = e;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    if (this._transmission > 0 != e > 0) {
      this.version++;
    }
    this._transmission = e;
  }
  copy(e) {
    super.copy(e);
    this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    };
    this.anisotropy = e.anisotropy;
    this.anisotropyRotation = e.anisotropyRotation;
    this.anisotropyMap = e.anisotropyMap;
    this.clearcoat = e.clearcoat;
    this.clearcoatMap = e.clearcoatMap;
    this.clearcoatRoughness = e.clearcoatRoughness;
    this.clearcoatRoughnessMap = e.clearcoatRoughnessMap;
    this.clearcoatNormalMap = e.clearcoatNormalMap;
    this.clearcoatNormalScale.copy(e.clearcoatNormalScale);
    this.dispersion = e.dispersion;
    this.ior = e.ior;
    this.iridescence = e.iridescence;
    this.iridescenceMap = e.iridescenceMap;
    this.iridescenceIOR = e.iridescenceIOR;
    this.iridescenceThicknessRange = [...e.iridescenceThicknessRange];
    this.iridescenceThicknessMap = e.iridescenceThicknessMap;
    this.sheen = e.sheen;
    this.sheenColor.copy(e.sheenColor);
    this.sheenColorMap = e.sheenColorMap;
    this.sheenRoughness = e.sheenRoughness;
    this.sheenRoughnessMap = e.sheenRoughnessMap;
    this.transmission = e.transmission;
    this.transmissionMap = e.transmissionMap;
    this.thickness = e.thickness;
    this.thicknessMap = e.thicknessMap;
    this.attenuationDistance = e.attenuationDistance;
    this.attenuationColor.copy(e.attenuationColor);
    this.specularIntensity = e.specularIntensity;
    this.specularIntensityMap = e.specularIntensityMap;
    this.specularColor.copy(e.specularColor);
    this.specularColorMap = e.specularColorMap;
    return this;
  }
}
export class G_z extends imn {
  constructor(e) {
    super();
    this.isMeshLambertMaterial = true;
    this.type = "MeshLambertMaterial";
    this.color = new Q1f(16777215);
    this.map = null;
    this.lightMap = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.emissive = new Q1f(0);
    this.emissiveIntensity = 1;
    this.emissiveMap = null;
    this.bumpMap = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalMapType = bI3;
    this.normalScale = new I9Y(1, 1);
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.specularMap = null;
    this.alphaMap = null;
    this.envMap = null;
    this.envMapRotation = new O9p();
    this.combine = caT;
    this.reflectivity = 1;
    this.refractionRatio = 0.98;
    this.wireframe = false;
    this.wireframeLinewidth = 1;
    this.wireframeLinecap = "round";
    this.wireframeLinejoin = "round";
    this.flatShading = false;
    this.fog = true;
    this.setValues(e);
  }
  copy(e) {
    super.copy(e);
    this.color.copy(e.color);
    this.map = e.map;
    this.lightMap = e.lightMap;
    this.lightMapIntensity = e.lightMapIntensity;
    this.aoMap = e.aoMap;
    this.aoMapIntensity = e.aoMapIntensity;
    this.emissive.copy(e.emissive);
    this.emissiveMap = e.emissiveMap;
    this.emissiveIntensity = e.emissiveIntensity;
    this.bumpMap = e.bumpMap;
    this.bumpScale = e.bumpScale;
    this.normalMap = e.normalMap;
    this.normalMapType = e.normalMapType;
    this.normalScale.copy(e.normalScale);
    this.displacementMap = e.displacementMap;
    this.displacementScale = e.displacementScale;
    this.displacementBias = e.displacementBias;
    this.specularMap = e.specularMap;
    this.alphaMap = e.alphaMap;
    this.envMap = e.envMap;
    this.envMapRotation.copy(e.envMapRotation);
    this.combine = e.combine;
    this.reflectivity = e.reflectivity;
    this.refractionRatio = e.refractionRatio;
    this.wireframe = e.wireframe;
    this.wireframeLinewidth = e.wireframeLinewidth;
    this.wireframeLinecap = e.wireframeLinecap;
    this.wireframeLinejoin = e.wireframeLinejoin;
    this.flatShading = e.flatShading;
    this.fog = e.fog;
    return this;
  }
}
export class CSG extends imn {
  constructor(e) {
    super();
    this.isMeshDepthMaterial = true;
    this.type = "MeshDepthMaterial";
    this.depthPacking = 3200;
    this.map = null;
    this.alphaMap = null;
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.wireframe = false;
    this.wireframeLinewidth = 1;
    this.setValues(e);
  }
  copy(e) {
    super.copy(e);
    this.depthPacking = e.depthPacking;
    this.map = e.map;
    this.alphaMap = e.alphaMap;
    this.displacementMap = e.displacementMap;
    this.displacementScale = e.displacementScale;
    this.displacementBias = e.displacementBias;
    this.wireframe = e.wireframe;
    this.wireframeLinewidth = e.wireframeLinewidth;
    return this;
  }
}
export class aVO extends imn {
  constructor(e) {
    super();
    this.isMeshDistanceMaterial = true;
    this.type = "MeshDistanceMaterial";
    this.map = null;
    this.alphaMap = null;
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.setValues(e);
  }
  copy(e) {
    super.copy(e);
    this.map = e.map;
    this.alphaMap = e.alphaMap;
    this.displacementMap = e.displacementMap;
    this.displacementScale = e.displacementScale;
    this.displacementBias = e.displacementBias;
    return this;
  }
}
function Oo(e, t) {
  if (e && e.constructor !== t) {
    if (typeof t.BYTES_PER_ELEMENT == "number") {
      return new t(e);
    } else {
      return Array.prototype.slice.call(e);
    }
  } else {
    return e;
  }
}
function Wo(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Vo(e) {
  const t = e.length;
  const n = new Array(t);
  for (let e = 0; e !== t; ++e) {
    n[e] = e;
  }
  n.sort(function (t, n) {
    return e[t] - e[n];
  });
  return n;
}
function Ho(e, t, n) {
  const i = e.length;
  const r = new e.constructor(i);
  for (let a = 0, s = 0; s !== i; ++a) {
    const i = n[a] * t;
    for (let n = 0; n !== t; ++n) {
      r[s++] = e[i + n];
    }
  }
  return r;
}
function jo(e, t, n, i) {
  let r = 1;
  let a = e[0];
  while (a !== undefined && a[i] === undefined) {
    a = e[r++];
  }
  if (a === undefined) {
    return;
  }
  let s = a[i];
  if (s !== undefined) {
    if (Array.isArray(s)) {
      do {
        s = a[i];
        if (s !== undefined) {
          t.push(a.time);
          n.push(...s);
        }
        a = e[r++];
      } while (a !== undefined);
    } else if (s.toArray !== undefined) {
      do {
        s = a[i];
        if (s !== undefined) {
          t.push(a.time);
          s.toArray(n, n.length);
        }
        a = e[r++];
      } while (a !== undefined);
    } else {
      do {
        s = a[i];
        if (s !== undefined) {
          t.push(a.time);
          n.push(s);
        }
        a = e[r++];
      } while (a !== undefined);
    }
  }
}
export class lGw {
  constructor(e, t, n, i) {
    this.parameterPositions = e;
    this._cachedIndex = 0;
    this.resultBuffer = i !== undefined ? i : new t.constructor(n);
    this.sampleValues = t;
    this.valueSize = n;
    this.settings = null;
    this.DefaultSettings_ = {};
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex;
    let i = t[n];
    let r = t[n - 1];
    e: {
      t: {
        let a;
        n: {
          i: if (!(e < i)) {
            for (let a = n + 2;;) {
              if (i === undefined) {
                if (e < r) {
                  break i;
                }
                n = t.length;
                this._cachedIndex = n;
                return this.copySampleValue_(n - 1);
              }
              if (n === a) {
                break;
              }
              r = i;
              i = t[++n];
              if (e < i) {
                break t;
              }
            }
            a = t.length;
            break n;
          }
          if (e >= r) {
            break e;
          }
          {
            const s = t[1];
            if (e < s) {
              n = 2;
              r = s;
            }
            for (let a = n - 2;;) {
              if (r === undefined) {
                this._cachedIndex = 0;
                return this.copySampleValue_(0);
              }
              if (n === a) {
                break;
              }
              i = r;
              r = t[--n - 1];
              if (e >= r) {
                break t;
              }
            }
            a = n;
            n = 0;
          }
        }
        while (n < a) {
          const i = n + a >>> 1;
          if (e < t[i]) {
            a = i;
          } else {
            n = i + 1;
          }
        }
        i = t[n];
        r = t[n - 1];
        if (r === undefined) {
          this._cachedIndex = 0;
          return this.copySampleValue_(0);
        }
        if (i === undefined) {
          n = t.length;
          this._cachedIndex = n;
          return this.copySampleValue_(n - 1);
        }
      }
      this._cachedIndex = n;
      this.intervalChanged_(n, r, i);
    }
    return this.interpolate_(n, r, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer;
    const n = this.sampleValues;
    const i = this.valueSize;
    const r = e * i;
    for (let e = 0; e !== i; ++e) {
      t[e] = n[r + e];
    }
    return t;
  }
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {}
}
class qo extends lGw {
  constructor(e, t, n, i) {
    super(e, t, n, i);
    this._weightPrev = -0;
    this._offsetPrev = -0;
    this._weightNext = -0;
    this._offsetNext = -0;
    this.DefaultSettings_ = {
      endingStart: Tt,
      endingEnd: Tt
    };
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let r = e - 2;
    let a = e + 1;
    let s = i[r];
    let o = i[a];
    if (s === undefined) {
      switch (this.getSettings_().endingStart) {
        case Et:
          r = e;
          s = t * 2 - n;
          break;
        case Mt:
          r = i.length - 2;
          s = t + i[r] - i[r + 1];
          break;
        default:
          r = e;
          s = n;
      }
    }
    if (o === undefined) {
      switch (this.getSettings_().endingEnd) {
        case Et:
          a = e;
          o = n * 2 - t;
          break;
        case Mt:
          a = 1;
          o = n + i[1] - i[0];
          break;
        default:
          a = e - 1;
          o = t;
      }
    }
    const l = (n - t) * 0.5;
    const c = this.valueSize;
    this._weightPrev = l / (t - s);
    this._weightNext = l / (o - n);
    this._offsetPrev = r * c;
    this._offsetNext = a * c;
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer;
    const a = this.sampleValues;
    const s = this.valueSize;
    const o = e * s;
    const l = o - s;
    const c = this._offsetPrev;
    const h = this._offsetNext;
    const d = this._weightPrev;
    const u = this._weightNext;
    const f = (n - t) / (i - t);
    const p = f * f;
    const g = p * f;
    const m = -d * g + d * 2 * p - d * f;
    const A = (1 + d) * g + (-1.5 - d * 2) * p + (-0.5 + d) * f + 1;
    const v = (-1 - u) * g + (1.5 + u) * p + f * 0.5;
    const b = u * g - u * p;
    for (let e = 0; e !== s; ++e) {
      r[e] = m * a[c + e] + A * a[l + e] + v * a[o + e] + b * a[h + e];
    }
    return r;
  }
}
class Qo extends lGw {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer;
    const a = this.sampleValues;
    const s = this.valueSize;
    const o = e * s;
    const l = o - s;
    const c = (n - t) / (i - t);
    const h = 1 - c;
    for (let e = 0; e !== s; ++e) {
      r[e] = a[l + e] * h + a[o + e] * c;
    }
    return r;
  }
}
class Jo extends lGw {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class Xo {
  constructor(e, t, n, i) {
    if (e === undefined) {
      throw new Error("THREE.KeyframeTrack: track name is undefined");
    }
    if (t === undefined || t.length === 0) {
      throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    }
    this.name = e;
    this.times = Oo(t, this.TimeBufferType);
    this.values = Oo(n, this.ValueBufferType);
    this.setInterpolation(i || this.DefaultInterpolation);
  }
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON) {
      n = t.toJSON(e);
    } else {
      n = {
        name: e.name,
        times: Oo(e.times, Array),
        values: Oo(e.values, Array)
      };
      const t = e.getInterpolation();
      if (t !== e.DefaultInterpolation) {
        n.interpolation = t;
      }
    }
    n.type = e.ValueTypeName;
    return n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new Jo(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new Qo(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new qo(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case ljd:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case PJ3:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case kt:
        t = this.InterpolantFactoryMethodSmooth;
    }
    if (t === undefined) {
      const t = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === undefined) {
        if (e === this.DefaultInterpolation) {
          throw new Error(t);
        }
        this.setInterpolation(this.DefaultInterpolation);
      }
      R8M("KeyframeTrack:", t);
      return this;
    }
    this.createInterpolant = t;
    return this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return ljd;
      case this.InterpolantFactoryMethodLinear:
        return PJ3;
      case this.InterpolantFactoryMethodSmooth:
        return kt;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) {
        t[n] += e;
      }
    }
    return this;
  }
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) {
        t[n] *= e;
      }
    }
    return this;
  }
  trim(e, t) {
    const n = this.times;
    const i = n.length;
    let r = 0;
    let a = i - 1;
    while (r !== i && n[r] < e) {
      ++r;
    }
    while (a !== -1 && n[a] > t) {
      --a;
    }
    ++a;
    if (r !== 0 || a !== i) {
      if (r >= a) {
        a = Math.max(a, 1);
        r = a - 1;
      }
      const e = this.getValueSize();
      this.times = n.slice(r, a);
      this.values = this.values.slice(r * e, a * e);
    }
    return this;
  }
  validate() {
    let e = true;
    const t = this.getValueSize();
    if (t - Math.floor(t) != 0) {
      z3S("KeyframeTrack: Invalid value size in track.", this);
      e = false;
    }
    const n = this.times;
    const i = this.values;
    const r = n.length;
    if (r === 0) {
      z3S("KeyframeTrack: Track is empty.", this);
      e = false;
    }
    let a = null;
    for (let t = 0; t !== r; t++) {
      const i = n[t];
      if (typeof i == "number" && isNaN(i)) {
        z3S("KeyframeTrack: Time is not a valid number.", this, t, i);
        e = false;
        break;
      }
      if (a !== null && a > i) {
        z3S("KeyframeTrack: Out of order keys.", this, t, i, a);
        e = false;
        break;
      }
      a = i;
    }
    if (i !== undefined && Wo(i)) {
      for (let t = 0, n = i.length; t !== n; ++t) {
        const n = i[t];
        if (isNaN(n)) {
          z3S("KeyframeTrack: Value is not a valid number.", this, t, n);
          e = false;
          break;
        }
      }
    }
    return e;
  }
  optimize() {
    const e = this.times.slice();
    const t = this.values.slice();
    const n = this.getValueSize();
    const i = this.getInterpolation() === kt;
    const r = e.length - 1;
    let a = 1;
    for (let s = 1; s < r; ++s) {
      let r = false;
      const o = e[s];
      if (o !== e[s + 1] && (s !== 1 || o !== e[0])) {
        if (i) {
          r = true;
        } else {
          const e = s * n;
          const i = e - n;
          const a = e + n;
          for (let s = 0; s !== n; ++s) {
            const n = t[e + s];
            if (n !== t[i + s] || n !== t[a + s]) {
              r = true;
              break;
            }
          }
        }
      }
      if (r) {
        if (s !== a) {
          e[a] = e[s];
          const i = s * n;
          const r = a * n;
          for (let e = 0; e !== n; ++e) {
            t[r + e] = t[i + e];
          }
        }
        ++a;
      }
    }
    if (r > 0) {
      e[a] = e[r];
      for (let e = r * n, i = a * n, s = 0; s !== n; ++s) {
        t[i + s] = t[e + s];
      }
      ++a;
    }
    if (a !== e.length) {
      this.times = e.slice(0, a);
      this.values = t.slice(0, a * n);
    } else {
      this.times = e;
      this.values = t;
    }
    return this;
  }
  clone() {
    const e = this.times.slice();
    const t = this.values.slice();
    const n = new (0, this.constructor)(this.name, e, t);
    n.createInterpolant = this.createInterpolant;
    return n;
  }
}
Xo.prototype.ValueTypeName = "";
Xo.prototype.TimeBufferType = Float32Array;
Xo.prototype.ValueBufferType = Float32Array;
Xo.prototype.DefaultInterpolation = PJ3;
class Yo extends Xo {
  constructor(e, t, n) {
    super(e, t, n);
  }
}
Yo.prototype.ValueTypeName = "bool";
Yo.prototype.ValueBufferType = Array;
Yo.prototype.DefaultInterpolation = ljd;
Yo.prototype.InterpolantFactoryMethodLinear = undefined;
Yo.prototype.InterpolantFactoryMethodSmooth = undefined;
class Zo extends Xo {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
}
Zo.prototype.ValueTypeName = "color";
export class Hit extends Xo {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
}
Hit.prototype.ValueTypeName = "number";
class el extends lGw {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer;
    const a = this.sampleValues;
    const s = this.valueSize;
    const o = (n - t) / (i - t);
    let l = e * s;
    for (let e = l + s; l !== e; l += 4) {
      PTz.slerpFlat(r, 0, a, l - s, a, l, o);
    }
    return r;
  }
}
export class MBL extends Xo {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  InterpolantFactoryMethodLinear(e) {
    return new el(this.times, this.values, this.getValueSize(), e);
  }
}
MBL.prototype.ValueTypeName = "quaternion";
MBL.prototype.InterpolantFactoryMethodSmooth = undefined;
class nl extends Xo {
  constructor(e, t, n) {
    super(e, t, n);
  }
}
nl.prototype.ValueTypeName = "string";
nl.prototype.ValueBufferType = Array;
nl.prototype.DefaultInterpolation = ljd;
nl.prototype.InterpolantFactoryMethodLinear = undefined;
nl.prototype.InterpolantFactoryMethodSmooth = undefined;
export class RiT extends Xo {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
}
RiT.prototype.ValueTypeName = "vector";
export class tz3 {
  constructor(e = "", t = -1, n = [], i = 2500) {
    this.name = e;
    this.tracks = n;
    this.duration = t;
    this.blendMode = i;
    this.uuid = pn();
    this.userData = {};
    if (this.duration < 0) {
      this.resetDuration();
    }
  }
  static parse(e) {
    const t = [];
    const n = e.tracks;
    const i = 1 / (e.fps || 1);
    for (let e = 0, r = n.length; e !== r; ++e) {
      t.push(al(n[e]).scale(i));
    }
    const r = new this(e.name, e.duration, t, e.blendMode);
    r.uuid = e.uuid;
    r.userData = JSON.parse(e.userData || "{}");
    return r;
  }
  static toJSON(e) {
    const t = [];
    const n = e.tracks;
    const i = {
      name: e.name,
      duration: e.duration,
      tracks: t,
      uuid: e.uuid,
      blendMode: e.blendMode,
      userData: JSON.stringify(e.userData)
    };
    for (let e = 0, i = n.length; e !== i; ++e) {
      t.push(Xo.toJSON(n[e]));
    }
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const r = t.length;
    const a = [];
    for (let e = 0; e < r; e++) {
      let s = [];
      let o = [];
      s.push((e + r - 1) % r, e, (e + 1) % r);
      o.push(0, 1, 0);
      const l = Vo(s);
      s = Ho(s, 1, l);
      o = Ho(o, 1, l);
      if (!i && s[0] === 0) {
        s.push(r);
        o.push(o[0]);
      }
      a.push(new Hit(".morphTargetInfluences[" + t[e].name + "]", s, o).scale(1 / n));
    }
    return new this(e, -1, a);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const t = e;
      n = t.geometry && t.geometry.animations || t.animations;
    }
    for (let e = 0; e < n.length; e++) {
      if (n[e].name === t) {
        return n[e];
      }
    }
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const i = {};
    const r = /^([\w-]*?)([\d]+)$/;
    for (let t = 0, n = e.length; t < n; t++) {
      const n = e[t];
      const a = n.name.match(r);
      if (a && a.length > 1) {
        const e = a[1];
        let t = i[e];
        if (!t) {
          i[e] = t = [];
        }
        t.push(n);
      }
    }
    const a = [];
    for (const e in i) {
      a.push(this.CreateFromMorphTargetSequence(e, i[e], t, n));
    }
    return a;
  }
  static parseAnimation(e, t) {
    R8M("AnimationClip: parseAnimation() is deprecated and will be removed with r185");
    if (!e) {
      z3S("AnimationClip: No animation in JSONLoader data.");
      return null;
    }
    const n = function (e, t, n, i, r) {
      if (n.length !== 0) {
        const a = [];
        const s = [];
        jo(n, a, s, i);
        if (a.length !== 0) {
          r.push(new e(t, a, s));
        }
      }
    };
    const i = [];
    const r = e.name || "default";
    const a = e.fps || 30;
    const s = e.blendMode;
    let o = e.length || -1;
    const l = e.hierarchy || [];
    for (let e = 0; e < l.length; e++) {
      const r = l[e].keys;
      if (r && r.length !== 0) {
        if (r[0].morphTargets) {
          const e = {};
          let t;
          for (t = 0; t < r.length; t++) {
            if (r[t].morphTargets) {
              for (let n = 0; n < r[t].morphTargets.length; n++) {
                e[r[t].morphTargets[n]] = -1;
              }
            }
          }
          for (const n in e) {
            const e = [];
            const a = [];
            for (let i = 0; i !== r[t].morphTargets.length; ++i) {
              const i = r[t];
              e.push(i.time);
              a.push(i.morphTarget === n ? 1 : 0);
            }
            i.push(new Hit(".morphTargetInfluence[" + n + "]", e, a));
          }
          o = e.length * a;
        } else {
          const a = ".bones[" + t[e].name + "]";
          n(RiT, a + ".position", r, "pos", i);
          n(MBL, a + ".quaternion", r, "rot", i);
          n(RiT, a + ".scale", r, "scl", i);
        }
      }
    }
    if (i.length === 0) {
      return null;
    }
    return new this(r, o, i, s);
  }
  resetDuration() {
    let e = 0;
    for (let t = 0, n = this.tracks.length; t !== n; ++t) {
      const n = this.tracks[t];
      e = Math.max(e, n.times[n.times.length - 1]);
    }
    this.duration = e;
    return this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++) {
      this.tracks[e].trim(0, this.duration);
    }
    return this;
  }
  validate() {
    let e = true;
    for (let t = 0; t < this.tracks.length; t++) {
      e = e && this.tracks[t].validate();
    }
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++) {
      this.tracks[e].optimize();
    }
    return this;
  }
  clone() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++) {
      e.push(this.tracks[t].clone());
    }
    const t = new this.constructor(this.name, this.duration, e, this.blendMode);
    t.userData = JSON.parse(JSON.stringify(this.userData));
    return t;
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function al(e) {
  if (e.type === undefined) {
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  }
  const t = function (e) {
    switch (e.toLowerCase()) {
      case "scalar":
      case "double":
      case "float":
      case "number":
      case "integer":
        return Hit;
      case "vector":
      case "vector2":
      case "vector3":
      case "vector4":
        return RiT;
      case "color":
        return Zo;
      case "quaternion":
        return MBL;
      case "bool":
      case "boolean":
        return Yo;
      case "string":
        return nl;
    }
    throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + e);
  }(e.type);
  if (e.times === undefined) {
    const t = [];
    const n = [];
    jo(e.keys, t, n, "value");
    e.times = t;
    e.values = n;
  }
  if (t.parse !== undefined) {
    return t.parse(e);
  } else {
    return new t(e.name, e.times, e.values, e.interpolation);
  }
}
const sl = {
  enabled: false,
  files: {},
  add: function (e, t) {
    if (this.enabled !== false) {
      this.files[e] = t;
    }
  },
  get: function (e) {
    if (this.enabled !== false) {
      return this.files[e];
    }
  },
  remove: function (e) {
    delete this.files[e];
  },
  clear: function () {
    this.files = {};
  }
};
class ol {
  constructor(e, t, n) {
    const i = this;
    let r;
    let a = false;
    let s = 0;
    let o = 0;
    const l = [];
    this.onStart = undefined;
    this.onLoad = e;
    this.onProgress = t;
    this.onError = n;
    this._abortController = null;
    this.itemStart = function (e) {
      o++;
      if (a === false && i.onStart !== undefined) {
        i.onStart(e, s, o);
      }
      a = true;
    };
    this.itemEnd = function (e) {
      s++;
      if (i.onProgress !== undefined) {
        i.onProgress(e, s, o);
      }
      if (s === o) {
        a = false;
        if (i.onLoad !== undefined) {
          i.onLoad();
        }
      }
    };
    this.itemError = function (e) {
      if (i.onError !== undefined) {
        i.onError(e);
      }
    };
    this.resolveURL = function (e) {
      if (r) {
        return r(e);
      } else {
        return e;
      }
    };
    this.setURLModifier = function (e) {
      r = e;
      return this;
    };
    this.addHandler = function (e, t) {
      l.push(e, t);
      return this;
    };
    this.removeHandler = function (e) {
      const t = l.indexOf(e);
      if (t !== -1) {
        l.splice(t, 2);
      }
      return this;
    };
    this.getHandler = function (e) {
      for (let t = 0, n = l.length; t < n; t += 2) {
        const n = l[t];
        const i = l[t + 1];
        if (n.global) {
          n.lastIndex = 0;
        }
        if (n.test(e)) {
          return i;
        }
      }
      return null;
    };
    this.abort = function () {
      this.abortController.abort();
      this._abortController = null;
      return this;
    };
  }
  get abortController() {
    this._abortController ||= new AbortController();
    return this._abortController;
  }
}
const ll = new ol();
export class aHM {
  constructor(e) {
    this.manager = e !== undefined ? e : ll;
    this.crossOrigin = "anonymous";
    this.withCredentials = false;
    this.path = "";
    this.resourcePath = "";
    this.requestHeader = {};
  }
  load() {}
  loadAsync(e, t) {
    const n = this;
    return new Promise(function (i, r) {
      n.load(e, i, t, r);
    });
  }
  parse() {}
  setCrossOrigin(e) {
    this.crossOrigin = e;
    return this;
  }
  setWithCredentials(e) {
    this.withCredentials = e;
    return this;
  }
  setPath(e) {
    this.path = e;
    return this;
  }
  setResourcePath(e) {
    this.resourcePath = e;
    return this;
  }
  setRequestHeader(e) {
    this.requestHeader = e;
    return this;
  }
  abort() {
    return this;
  }
}
aHM.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const hl = {};
class dl extends Error {
  constructor(e, t) {
    super(e);
    this.response = t;
  }
}
export class Y9S extends aHM {
  constructor(e) {
    super(e);
    this.mimeType = "";
    this.responseType = "";
    this._abortController = new AbortController();
  }
  load(e = "", t, n, i) {
    if (this.path !== undefined) {
      e = this.path + e;
    }
    e = this.manager.resolveURL(e);
    const r = sl.get(`file:${e}`);
    if (r !== undefined) {
      this.manager.itemStart(e);
      setTimeout(() => {
        if (t) {
          t(r);
        }
        this.manager.itemEnd(e);
      }, 0);
      return r;
    }
    if (hl[e] !== undefined) {
      hl[e].push({
        onLoad: t,
        onProgress: n,
        onError: i
      });
      return;
    }
    hl[e] = [];
    hl[e].push({
      onLoad: t,
      onProgress: n,
      onError: i
    });
    const a = new Request(e, {
      headers: new Headers(this.requestHeader),
      credentials: this.withCredentials ? "include" : "same-origin",
      signal: typeof AbortSignal.any == "function" ? AbortSignal.any([this._abortController.signal, this.manager.abortController.signal]) : this._abortController.signal
    });
    const s = this.mimeType;
    const o = this.responseType;
    fetch(a).then(t => {
      if (t.status === 200 || t.status === 0) {
        if (t.status === 0) {
          R8M("FileLoader: HTTP Status 0 received.");
        }
        if (typeof ReadableStream == "undefined" || t.body === undefined || t.body.getReader === undefined) {
          return t;
        }
        const n = hl[e];
        const i = t.body.getReader();
        const r = t.headers.get("X-File-Size") || t.headers.get("Content-Length");
        const a = r ? parseInt(r) : 0;
        const s = a !== 0;
        let o = 0;
        const l = new ReadableStream({
          start(e) {
            (function t() {
              i.read().then(({
                done: i,
                value: r
              }) => {
                if (i) {
                  e.close();
                } else {
                  o += r.byteLength;
                  const i = new ProgressEvent("progress", {
                    lengthComputable: s,
                    loaded: o,
                    total: a
                  });
                  for (let e = 0, t = n.length; e < t; e++) {
                    const t = n[e];
                    if (t.onProgress) {
                      t.onProgress(i);
                    }
                  }
                  e.enqueue(r);
                  t();
                }
              }, t => {
                e.error(t);
              });
            })();
          }
        });
        return new Response(l);
      }
      throw new dl(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`, t);
    }).then(e => {
      switch (o) {
        case "arraybuffer":
          return e.arrayBuffer();
        case "blob":
          return e.blob();
        case "document":
          return e.text().then(e => new DOMParser().parseFromString(e, s));
        case "json":
          return e.json();
        default:
          if (s === "") {
            return e.text();
          }
          {
            const t = /charset="?([^;"\s]*)"?/i.exec(s);
            const n = t && t[1] ? t[1].toLowerCase() : undefined;
            const i = new TextDecoder(n);
            return e.arrayBuffer().then(e => i.decode(e));
          }
      }
    }).then(t => {
      sl.add(`file:${e}`, t);
      const n = hl[e];
      delete hl[e];
      for (let e = 0, i = n.length; e < i; e++) {
        const i = n[e];
        if (i.onLoad) {
          i.onLoad(t);
        }
      }
    }).catch(t => {
      const n = hl[e];
      if (n === undefined) {
        this.manager.itemError(e);
        throw t;
      }
      delete hl[e];
      for (let e = 0, i = n.length; e < i; e++) {
        const i = n[e];
        if (i.onError) {
          i.onError(t);
        }
      }
      this.manager.itemError(e);
    }).finally(() => {
      this.manager.itemEnd(e);
    });
    this.manager.itemStart(e);
  }
  setResponseType(e) {
    this.responseType = e;
    return this;
  }
  setMimeType(e) {
    this.mimeType = e;
    return this;
  }
  abort() {
    this._abortController.abort();
    this._abortController = new AbortController();
    return this;
  }
}
const fl = new WeakMap();
class pl extends aHM {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    if (this.path !== undefined) {
      e = this.path + e;
    }
    e = this.manager.resolveURL(e);
    const r = this;
    const a = sl.get(`image:${e}`);
    if (a !== undefined) {
      if (a.complete === true) {
        r.manager.itemStart(e);
        setTimeout(function () {
          if (t) {
            t(a);
          }
          r.manager.itemEnd(e);
        }, 0);
      } else {
        let e = fl.get(a);
        if (e === undefined) {
          e = [];
          fl.set(a, e);
        }
        e.push({
          onLoad: t,
          onError: i
        });
      }
      return a;
    }
    const s = qq$("img");
    function o() {
      c();
      if (t) {
        t(this);
      }
      const n = fl.get(this) || [];
      for (let e = 0; e < n.length; e++) {
        const t = n[e];
        if (t.onLoad) {
          t.onLoad(this);
        }
      }
      fl.delete(this);
      r.manager.itemEnd(e);
    }
    function l(t) {
      c();
      if (i) {
        i(t);
      }
      sl.remove(`image:${e}`);
      const n = fl.get(this) || [];
      for (let e = 0; e < n.length; e++) {
        const i = n[e];
        if (i.onError) {
          i.onError(t);
        }
      }
      fl.delete(this);
      r.manager.itemError(e);
      r.manager.itemEnd(e);
    }
    function c() {
      s.removeEventListener("load", o, false);
      s.removeEventListener("error", l, false);
    }
    s.addEventListener("load", o, false);
    s.addEventListener("error", l, false);
    if (e.slice(0, 5) !== "data:" && this.crossOrigin !== undefined) {
      s.crossOrigin = this.crossOrigin;
    }
    sl.add(`image:${e}`, s);
    r.manager.itemStart(e);
    s.src = e;
    return s;
  }
}
export class Tap extends aHM {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = new gPd();
    const a = new pl(this.manager);
    a.setCrossOrigin(this.crossOrigin);
    a.setPath(this.path);
    a.load(e, function (e) {
      r.image = e;
      r.needsUpdate = true;
      if (t !== undefined) {
        t(r);
      }
    }, n, i);
    return r;
  }
}
class ml extends B69 {
  constructor(e, t = 1) {
    super();
    this.isLight = true;
    this.type = "Light";
    this.color = new Q1f(e);
    this.intensity = t;
  }
  dispose() {}
  copy(e, t) {
    super.copy(e, t);
    this.color.copy(e.color);
    this.intensity = e.intensity;
    return this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.object.color = this.color.getHex();
    t.object.intensity = this.intensity;
    if (this.groundColor !== undefined) {
      t.object.groundColor = this.groundColor.getHex();
    }
    if (this.distance !== undefined) {
      t.object.distance = this.distance;
    }
    if (this.angle !== undefined) {
      t.object.angle = this.angle;
    }
    if (this.decay !== undefined) {
      t.object.decay = this.decay;
    }
    if (this.penumbra !== undefined) {
      t.object.penumbra = this.penumbra;
    }
    if (this.shadow !== undefined) {
      t.object.shadow = this.shadow.toJSON();
    }
    if (this.target !== undefined) {
      t.object.target = this.target.uuid;
    }
    return t;
  }
}
export class dth extends ml {
  constructor(e, t, n) {
    super(e, n);
    this.isHemisphereLight = true;
    this.type = "HemisphereLight";
    this.position.copy(B69.DEFAULT_UP);
    this.updateMatrix();
    this.groundColor = new Q1f(t);
  }
  copy(e, t) {
    super.copy(e, t);
    this.groundColor.copy(e.groundColor);
    return this;
  }
}
const vl = new kn4();
const bl = new Pq0();
const yl = new Pq0();
class wl {
  constructor(e) {
    this.camera = e;
    this.intensity = 1;
    this.bias = 0;
    this.normalBias = 0;
    this.radius = 1;
    this.blurSamples = 8;
    this.mapSize = new I9Y(512, 512);
    this.mapType = OUM;
    this.map = null;
    this.mapPass = null;
    this.matrix = new kn4();
    this.autoUpdate = true;
    this.needsUpdate = false;
    this._frustum = new PPD();
    this._frameExtents = new I9Y(1, 1);
    this._viewportCount = 1;
    this._viewports = [new IUQ(0, 0, 1, 1)];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera;
    const n = this.matrix;
    bl.setFromMatrixPosition(e.matrixWorld);
    t.position.copy(bl);
    yl.setFromMatrixPosition(e.target.matrixWorld);
    t.lookAt(yl);
    t.updateMatrixWorld();
    vl.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse);
    this._frustum.setFromProjectionMatrix(vl, t.coordinateSystem, t.reversedDepth);
    if (t.reversedDepth) {
      n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 1, 0, 0, 0, 0, 1);
    } else {
      n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1);
    }
    n.multiply(vl);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    if (this.map) {
      this.map.dispose();
    }
    if (this.mapPass) {
      this.mapPass.dispose();
    }
  }
  copy(e) {
    this.camera = e.camera.clone();
    this.intensity = e.intensity;
    this.bias = e.bias;
    this.radius = e.radius;
    this.autoUpdate = e.autoUpdate;
    this.needsUpdate = e.needsUpdate;
    this.normalBias = e.normalBias;
    this.blurSamples = e.blurSamples;
    this.mapSize.copy(e.mapSize);
    return this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    if (this.intensity !== 1) {
      e.intensity = this.intensity;
    }
    if (this.bias !== 0) {
      e.bias = this.bias;
    }
    if (this.normalBias !== 0) {
      e.normalBias = this.normalBias;
    }
    if (this.radius !== 1) {
      e.radius = this.radius;
    }
    if (this.mapSize.x !== 512 || this.mapSize.y !== 512) {
      e.mapSize = this.mapSize.toArray();
    }
    e.camera = this.camera.toJSON(false).object;
    delete e.camera.matrix;
    return e;
  }
}
class xl extends wl {
  constructor() {
    super(new ubm(50, 1, 0.5, 500));
    this.isSpotLightShadow = true;
    this.focus = 1;
    this.aspect = 1;
  }
  updateMatrices(e) {
    const t = this.camera;
    const n = a55 * 2 * e.angle * this.focus;
    const i = this.mapSize.width / this.mapSize.height * this.aspect;
    const r = e.distance || t.far;
    if (n !== t.fov || i !== t.aspect || r !== t.far) {
      t.fov = n;
      t.aspect = i;
      t.far = r;
      t.updateProjectionMatrix();
    }
    super.updateMatrices(e);
  }
  copy(e) {
    super.copy(e);
    this.focus = e.focus;
    return this;
  }
}
export class nCl extends ml {
  constructor(e, t, n = 0, i = Math.PI / 3, r = 0, a = 2) {
    super(e, t);
    this.isSpotLight = true;
    this.type = "SpotLight";
    this.position.copy(B69.DEFAULT_UP);
    this.updateMatrix();
    this.target = new B69();
    this.distance = n;
    this.angle = i;
    this.penumbra = r;
    this.decay = a;
    this.map = null;
    this.shadow = new xl();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    super.copy(e, t);
    this.distance = e.distance;
    this.angle = e.angle;
    this.penumbra = e.penumbra;
    this.decay = e.decay;
    this.target = e.target.clone();
    this.shadow = e.shadow.clone();
    return this;
  }
}
const kl = new kn4();
const Tl = new Pq0();
const El = new Pq0();
class Ml extends wl {
  constructor() {
    super(new ubm(90, 1, 0.5, 500));
    this.isPointLightShadow = true;
    this._frameExtents = new I9Y(4, 2);
    this._viewportCount = 6;
    this._viewports = [new IUQ(2, 1, 1, 1), new IUQ(0, 1, 1, 1), new IUQ(3, 1, 1, 1), new IUQ(1, 1, 1, 1), new IUQ(3, 0, 1, 1), new IUQ(1, 0, 1, 1)];
    this._cubeDirections = [new Pq0(1, 0, 0), new Pq0(-1, 0, 0), new Pq0(0, 0, 1), new Pq0(0, 0, -1), new Pq0(0, 1, 0), new Pq0(0, -1, 0)];
    this._cubeUps = [new Pq0(0, 1, 0), new Pq0(0, 1, 0), new Pq0(0, 1, 0), new Pq0(0, 1, 0), new Pq0(0, 0, 1), new Pq0(0, 0, -1)];
  }
  updateMatrices(e, t = 0) {
    const n = this.camera;
    const i = this.matrix;
    const r = e.distance || n.far;
    if (r !== n.far) {
      n.far = r;
      n.updateProjectionMatrix();
    }
    Tl.setFromMatrixPosition(e.matrixWorld);
    n.position.copy(Tl);
    El.copy(n.position);
    El.add(this._cubeDirections[t]);
    n.up.copy(this._cubeUps[t]);
    n.lookAt(El);
    n.updateMatrixWorld();
    i.makeTranslation(-Tl.x, -Tl.y, -Tl.z);
    kl.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse);
    this._frustum.setFromProjectionMatrix(kl, n.coordinateSystem, n.reversedDepth);
  }
}
export class HiM extends ml {
  constructor(e, t, n = 0, i = 2) {
    super(e, t);
    this.isPointLight = true;
    this.type = "PointLight";
    this.distance = n;
    this.decay = i;
    this.shadow = new Ml();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (Math.PI * 4);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    super.copy(e, t);
    this.distance = e.distance;
    this.decay = e.decay;
    this.shadow = e.shadow.clone();
    return this;
  }
}
export class qUd extends Yr {
  constructor(e = -1, t = 1, n = 1, i = -1, r = 0.1, a = 2000) {
    super();
    this.isOrthographicCamera = true;
    this.type = "OrthographicCamera";
    this.zoom = 1;
    this.view = null;
    this.left = e;
    this.right = t;
    this.top = n;
    this.bottom = i;
    this.near = r;
    this.far = a;
    this.updateProjectionMatrix();
  }
  copy(e, t) {
    super.copy(e, t);
    this.left = e.left;
    this.right = e.right;
    this.top = e.top;
    this.bottom = e.bottom;
    this.near = e.near;
    this.far = e.far;
    this.zoom = e.zoom;
    this.view = e.view === null ? null : Object.assign({}, e.view);
    return this;
  }
  setViewOffset(e, t, n, i, r, a) {
    if (this.view === null) {
      this.view = {
        enabled: true,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      };
    }
    this.view.enabled = true;
    this.view.fullWidth = e;
    this.view.fullHeight = t;
    this.view.offsetX = n;
    this.view.offsetY = i;
    this.view.width = r;
    this.view.height = a;
    this.updateProjectionMatrix();
  }
  clearViewOffset() {
    if (this.view !== null) {
      this.view.enabled = false;
    }
    this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (this.zoom * 2);
    const t = (this.top - this.bottom) / (this.zoom * 2);
    const n = (this.right + this.left) / 2;
    const i = (this.top + this.bottom) / 2;
    let r = n - e;
    let a = n + e;
    let s = i + t;
    let o = i - t;
    if (this.view !== null && this.view.enabled) {
      const e = (this.right - this.left) / this.view.fullWidth / this.zoom;
      const t = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += e * this.view.offsetX;
      a = r + e * this.view.width;
      s -= t * this.view.offsetY;
      o = s - t * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, a, s, o, this.near, this.far, this.coordinateSystem, this.reversedDepth);
    this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.object.zoom = this.zoom;
    t.object.left = this.left;
    t.object.right = this.right;
    t.object.top = this.top;
    t.object.bottom = this.bottom;
    t.object.near = this.near;
    t.object.far = this.far;
    if (this.view !== null) {
      t.object.view = Object.assign({}, this.view);
    }
    return t;
  }
}
class Rl extends wl {
  constructor() {
    super(new qUd(-5, 5, 5, -5, 0.5, 500));
    this.isDirectionalLightShadow = true;
  }
}
export class ZyN extends ml {
  constructor(e, t) {
    super(e, t);
    this.isDirectionalLight = true;
    this.type = "DirectionalLight";
    this.position.copy(B69.DEFAULT_UP);
    this.updateMatrix();
    this.target = new B69();
    this.shadow = new Rl();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    super.copy(e);
    this.target = e.target.clone();
    this.shadow = e.shadow.clone();
    return this;
  }
}
export class r6x {
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    if (t === -1) {
      return "./";
    } else {
      return e.slice(0, t + 1);
    }
  }
  static resolveURL(e, t) {
    if (typeof e != "string" || e === "") {
      return "";
    } else {
      if (/^https?:\/\//i.test(t) && /^\//.test(e)) {
        t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1");
      }
      if (/^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e)) {
        return e;
      } else {
        return t + e;
      }
    }
  }
}
const Ll = new WeakMap();
export class Kzg extends aHM {
  constructor(e) {
    super(e);
    this.isImageBitmapLoader = true;
    if (typeof createImageBitmap == "undefined") {
      R8M("ImageBitmapLoader: createImageBitmap() not supported.");
    }
    if (typeof fetch == "undefined") {
      R8M("ImageBitmapLoader: fetch() not supported.");
    }
    this.options = {
      premultiplyAlpha: "none"
    };
    this._abortController = new AbortController();
  }
  setOptions(e) {
    this.options = e;
    return this;
  }
  load(e = "", t, n, i) {
    if (this.path !== undefined) {
      e = this.path + e;
    }
    e = this.manager.resolveURL(e);
    const r = this;
    const a = sl.get(`image-bitmap:${e}`);
    if (a !== undefined) {
      r.manager.itemStart(e);
      if (a.then) {
        a.then(n => {
          if (Ll.has(a) !== true) {
            if (t) {
              t(n);
            }
            r.manager.itemEnd(e);
            return n;
          }
          if (i) {
            i(Ll.get(a));
          }
          r.manager.itemError(e);
          r.manager.itemEnd(e);
        });
        return;
      } else {
        setTimeout(function () {
          if (t) {
            t(a);
          }
          r.manager.itemEnd(e);
        }, 0);
        return a;
      }
    }
    const s = {
      credentials: this.crossOrigin === "anonymous" ? "same-origin" : "include",
      headers: this.requestHeader
    };
    s.signal = typeof AbortSignal.any == "function" ? AbortSignal.any([this._abortController.signal, this.manager.abortController.signal]) : this._abortController.signal;
    const o = fetch(e, s).then(function (e) {
      return e.blob();
    }).then(function (e) {
      return createImageBitmap(e, Object.assign(r.options, {
        colorSpaceConversion: "none"
      }));
    }).then(function (n) {
      sl.add(`image-bitmap:${e}`, n);
      if (t) {
        t(n);
      }
      r.manager.itemEnd(e);
      return n;
    }).catch(function (t) {
      if (i) {
        i(t);
      }
      Ll.set(o, t);
      sl.remove(`image-bitmap:${e}`);
      r.manager.itemError(e);
      r.manager.itemEnd(e);
    });
    sl.add(`image-bitmap:${e}`, o);
    r.manager.itemStart(e);
  }
  abort() {
    this._abortController.abort();
    this._abortController = new AbortController();
    return this;
  }
}
export class nZQ extends ubm {
  constructor(e = []) {
    super();
    this.isArrayCamera = true;
    this.isMultiViewCamera = false;
    this.cameras = e;
  }
}
const zl = "\\[\\]\\.:\\/";
const Dl = new RegExp("[" + zl + "]", "g");
const Bl = "[^" + zl + "]";
const Gl = "[^" + zl.replace("\\.", "") + "]";
const Fl = new RegExp("^" + /((?:WC+[\/:])*)/.source.replace("WC", Bl) + /(WCOD+)?/.source.replace("WCOD", Gl) + /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Bl) + /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Bl) + "$");
const Ol = ["material", "materials", "bones", "map"];
export class Nwf {
  constructor(e, t, n) {
    this.path = t;
    this.parsedPath = n || Nwf.parseTrackName(t);
    this.node = Nwf.findNode(e, this.parsedPath.nodeName);
    this.rootNode = e;
    this.getValue = this._getValue_unbound;
    this.setValue = this._setValue_unbound;
  }
  static create(e, t, n) {
    if (e && e.isAnimationObjectGroup) {
      return new Nwf.Composite(e, t, n);
    } else {
      return new Nwf(e, t, n);
    }
  }
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(Dl, "");
  }
  static parseTrackName(e) {
    const t = Fl.exec(e);
    if (t === null) {
      throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    }
    const n = {
      nodeName: t[2],
      objectName: t[3],
      objectIndex: t[4],
      propertyName: t[5],
      propertyIndex: t[6]
    };
    const i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== undefined && i !== -1) {
      const e = n.nodeName.substring(i + 1);
      if (Ol.indexOf(e) !== -1) {
        n.nodeName = n.nodeName.substring(0, i);
        n.objectName = e;
      }
    }
    if (n.propertyName === null || n.propertyName.length === 0) {
      throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
    }
    return n;
  }
  static findNode(e, t) {
    if (t === undefined || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid) {
      return e;
    }
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (n !== undefined) {
        return n;
      }
    }
    if (e.children) {
      const n = function (e) {
        for (let i = 0; i < e.length; i++) {
          const r = e[i];
          if (r.name === t || r.uuid === t) {
            return r;
          }
          const a = n(r.children);
          if (a) {
            return a;
          }
        }
        return null;
      };
      const i = n(e.children);
      if (i) {
        return i;
      }
    }
    return null;
  }
  _getValue_unavailable() {}
  _setValue_unavailable() {}
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) {
      e[t++] = n[i];
    }
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t];
    this.targetObject.needsUpdate = true;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t];
    this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) {
      n[i] = e[t++];
    }
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) {
      n[i] = e[t++];
    }
    this.targetObject.needsUpdate = true;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) {
      n[i] = e[t++];
    }
    this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
    this.targetObject.needsUpdate = true;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
    this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t);
    this.targetObject.needsUpdate = true;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t);
    this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _getValue_unbound(e, t) {
    this.bind();
    this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind();
    this.setValue(e, t);
  }
  bind() {
    let e = this.node;
    const t = this.parsedPath;
    const n = t.objectName;
    const i = t.propertyName;
    let r = t.propertyIndex;
    if (!e) {
      e = Nwf.findNode(this.rootNode, t.nodeName);
      this.node = e;
    }
    this.getValue = this._getValue_unavailable;
    this.setValue = this._setValue_unavailable;
    if (!e) {
      R8M("PropertyBinding: No target node found for track: " + this.path + ".");
      return;
    }
    if (n) {
      let i = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            z3S("PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.materials) {
            z3S("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            z3S("PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          e = e.skeleton.bones;
          for (let t = 0; t < e.length; t++) {
            if (e[t].name === i) {
              i = t;
              break;
            }
          }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material) {
            z3S("PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.map) {
            z3S("PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          e = e.material.map;
          break;
        default:
          if (e[n] === undefined) {
            z3S("PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          e = e[n];
      }
      if (i !== undefined) {
        if (e[i] === undefined) {
          z3S("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
          return;
        }
        e = e[i];
      }
    }
    const a = e[i];
    if (a === undefined) {
      z3S("PropertyBinding: Trying to update property for track: " + t.nodeName + "." + i + " but it wasn't found.", e);
      return;
    }
    let s = this.Versioning.None;
    this.targetObject = e;
    if (e.isMaterial === true) {
      s = this.Versioning.NeedsUpdate;
    } else if (e.isObject3D === true) {
      s = this.Versioning.MatrixWorldNeedsUpdate;
    }
    let o = this.BindingType.Direct;
    if (r !== undefined) {
      if (i === "morphTargetInfluences") {
        if (!e.geometry) {
          z3S("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!e.geometry.morphAttributes) {
          z3S("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        if (e.morphTargetDictionary[r] !== undefined) {
          r = e.morphTargetDictionary[r];
        }
      }
      o = this.BindingType.ArrayElement;
      this.resolvedProperty = a;
      this.propertyIndex = r;
    } else if (a.fromArray !== undefined && a.toArray !== undefined) {
      o = this.BindingType.HasFromToArray;
      this.resolvedProperty = a;
    } else if (Array.isArray(a)) {
      o = this.BindingType.EntireArray;
      this.resolvedProperty = a;
    } else {
      this.propertyName = i;
    }
    this.getValue = this.GetterByBindingType[o];
    this.setValue = this.SetterByBindingTypeAndVersioning[o][s];
  }
  unbind() {
    this.node = null;
    this.getValue = this._getValue_unbound;
    this.setValue = this._setValue_unbound;
  }
}
Nwf.Composite = class {
  constructor(e, t, n) {
    const i = n || Nwf.parseTrackName(t);
    this._targetGroup = e;
    this._bindings = e.subscribe_(t, i);
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_;
    const i = this._bindings[n];
    if (i !== undefined) {
      i.getValue(e, t);
    }
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i) {
      n[i].setValue(e, t);
    }
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) {
      e[t].bind();
    }
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) {
      e[t].unbind();
    }
  }
};
Nwf.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
Nwf.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
Nwf.prototype.GetterByBindingType = [Nwf.prototype._getValue_direct, Nwf.prototype._getValue_array, Nwf.prototype._getValue_arrayElement, Nwf.prototype._getValue_toArray];
Nwf.prototype.SetterByBindingTypeAndVersioning = [[Nwf.prototype._setValue_direct, Nwf.prototype._setValue_direct_setNeedsUpdate, Nwf.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [Nwf.prototype._setValue_array, Nwf.prototype._setValue_array_setNeedsUpdate, Nwf.prototype._setValue_array_setMatrixWorldNeedsUpdate], [Nwf.prototype._setValue_arrayElement, Nwf.prototype._setValue_arrayElement_setNeedsUpdate, Nwf.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [Nwf.prototype._setValue_fromArray, Nwf.prototype._setValue_fromArray_setNeedsUpdate, Nwf.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];
new Float32Array(1);
const Vl = new kn4();
export class tBo {
  constructor(e, t, n = 0, i = Infinity) {
    this.ray = new RlV(e, t);
    this.near = n;
    this.far = i;
    this.camera = null;
    this.layers = new zgK();
    this.params = {
      Mesh: {},
      Line: {
        threshold: 1
      },
      LOD: {},
      Points: {
        threshold: 1
      },
      Sprite: {}
    };
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    if (t.isPerspectiveCamera) {
      this.ray.origin.setFromMatrixPosition(t.matrixWorld);
      this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize();
      this.camera = t;
    } else if (t.isOrthographicCamera) {
      this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t);
      this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld);
      this.camera = t;
    } else {
      z3S("Raycaster: Unsupported camera type: " + t.type);
    }
  }
  setFromXRController(e) {
    Vl.identity().extractRotation(e.matrixWorld);
    this.ray.origin.setFromMatrixPosition(e.matrixWorld);
    this.ray.direction.set(0, 0, -1).applyMatrix4(Vl);
    return this;
  }
  intersectObject(e, t = true, n = []) {
    Kl(e, this, n, t);
    n.sort(jl);
    return n;
  }
  intersectObjects(e, t = true, n = []) {
    for (let i = 0, r = e.length; i < r; i++) {
      Kl(e[i], this, n, t);
    }
    n.sort(jl);
    return n;
  }
}
function jl(e, t) {
  return e.distance - t.distance;
}
function Kl(e, t, n, i) {
  let r = true;
  if (e.layers.test(t.layers)) {
    if (e.raycast(t, n) === false) {
      r = false;
    }
  }
  if (r === true && i === true) {
    const i = e.children;
    for (let e = 0, r = i.length; e < r; e++) {
      Kl(i[e], t, n, true);
    }
  }
}
export class YHV {
  constructor(e = 1, t = 0, n = 0) {
    this.radius = e;
    this.phi = t;
    this.theta = n;
  }
  set(e, t, n) {
    this.radius = e;
    this.phi = t;
    this.theta = n;
    return this;
  }
  copy(e) {
    this.radius = e.radius;
    this.phi = e.phi;
    this.theta = e.theta;
    return this;
  }
  makeSafe() {
    const e = 0.000001;
    this.phi = gn(this.phi, e, Math.PI - e);
    return this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    this.radius = Math.sqrt(e * e + t * t + n * n);
    if (this.radius === 0) {
      this.theta = 0;
      this.phi = 0;
    } else {
      this.theta = Math.atan2(e, n);
      this.phi = Math.acos(gn(t / this.radius, -1, 1));
    }
    return this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
export class BND extends DXC {
  constructor(e, t = 16776960) {
    const n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]);
    const i = new LoY();
    i.setIndex(new THS(n, 1));
    i.setAttribute("position", new Sr([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], 3));
    super(i, new mrM({
      color: t,
      toneMapped: false
    }));
    this.box = e;
    this.type = "Box3Helper";
    this.geometry.computeBoundingSphere();
  }
  updateMatrixWorld(e) {
    const t = this.box;
    if (!t.isEmpty()) {
      t.getCenter(this.position);
      t.getSize(this.scale);
      this.scale.multiplyScalar(0.5);
      super.updateMatrixWorld(e);
    }
  }
  dispose() {
    this.geometry.dispose();
    this.material.dispose();
  }
}
export class Ld9 {
  constructor() {
    this.type = "ShapePath";
    this.color = new Q1f();
    this.subPaths = [];
    this.currentPath = null;
  }
  moveTo(e, t) {
    this.currentPath = new eo();
    this.subPaths.push(this.currentPath);
    this.currentPath.moveTo(e, t);
    return this;
  }
  lineTo(e, t) {
    this.currentPath.lineTo(e, t);
    return this;
  }
  quadraticCurveTo(e, t, n, i) {
    this.currentPath.quadraticCurveTo(e, t, n, i);
    return this;
  }
  bezierCurveTo(e, t, n, i, r, a) {
    this.currentPath.bezierCurveTo(e, t, n, i, r, a);
    return this;
  }
  splineThru(e) {
    this.currentPath.splineThru(e);
    return this;
  }
  toShapes(e) {
    function t(e, t) {
      const n = t.length;
      let i = false;
      for (let r = n - 1, a = 0; a < n; r = a++) {
        let n = t[r];
        let s = t[a];
        let o = s.x - n.x;
        let l = s.y - n.y;
        if (Math.abs(l) > Number.EPSILON) {
          if (l < 0) {
            n = t[a];
            o = -o;
            s = t[r];
            l = -l;
          }
          if (e.y < n.y || e.y > s.y) {
            continue;
          }
          if (e.y === n.y) {
            if (e.x === n.x) {
              return true;
            }
          } else {
            const t = l * (e.x - n.x) - o * (e.y - n.y);
            if (t === 0) {
              return true;
            }
            if (t < 0) {
              continue;
            }
            i = !i;
          }
        } else {
          if (e.y !== n.y) {
            continue;
          }
          if (s.x <= e.x && e.x <= n.x || n.x <= e.x && e.x <= s.x) {
            return true;
          }
        }
      }
      return i;
    }
    const n = Ro.isClockWise;
    const i = this.subPaths;
    if (i.length === 0) {
      return [];
    }
    let r;
    let a;
    let s;
    const o = [];
    if (i.length === 1) {
      a = i[0];
      s = new to();
      s.curves = a.curves;
      o.push(s);
      return o;
    }
    let l = !n(i[0].getPoints());
    l = e ? !l : l;
    const c = [];
    const h = [];
    let d;
    let u;
    let f = [];
    let p = 0;
    h[p] = undefined;
    f[p] = [];
    for (let t = 0, s = i.length; t < s; t++) {
      a = i[t];
      d = a.getPoints();
      r = n(d);
      r = e ? !r : r;
      if (r) {
        if (!l && h[p]) {
          p++;
        }
        h[p] = {
          s: new to(),
          p: d
        };
        h[p].s.curves = a.curves;
        if (l) {
          p++;
        }
        f[p] = [];
      } else {
        f[p].push({
          h: a,
          p: d[0]
        });
      }
    }
    if (!h[0]) {
      return function (e) {
        const t = [];
        for (let n = 0, i = e.length; n < i; n++) {
          const i = e[n];
          const r = new to();
          r.curves = i.curves;
          t.push(r);
        }
        return t;
      }(i);
    }
    if (h.length > 1) {
      let e = false;
      let n = 0;
      for (let e = 0, t = h.length; e < t; e++) {
        c[e] = [];
      }
      for (let i = 0, r = h.length; i < r; i++) {
        const r = f[i];
        for (let a = 0; a < r.length; a++) {
          const s = r[a];
          let o = true;
          for (let r = 0; r < h.length; r++) {
            if (t(s.p, h[r].p)) {
              if (i !== r) {
                n++;
              }
              if (o) {
                o = false;
                c[r].push(s);
              } else {
                e = true;
              }
            }
          }
          if (o) {
            c[i].push(s);
          }
        }
      }
      if (n > 0 && e === false) {
        f = c;
      }
    }
    for (let e = 0, t = h.length; e < t; e++) {
      s = h[e].s;
      o.push(s);
      u = f[e];
      for (let e = 0, t = u.length; e < t; e++) {
        s.holes.push(u[e].h);
      }
    }
    return o;
  }
}
export class H2z extends Qev {
  constructor(e, t = null) {
    super();
    this.object = e;
    this.domElement = t;
    this.enabled = true;
    this.state = -1;
    this.keys = {};
    this.mouseButtons = {
      LEFT: null,
      MIDDLE: null,
      RIGHT: null
    };
    this.touches = {
      ONE: null,
      TWO: null
    };
  }
  connect(e) {
    if (e !== undefined) {
      if (this.domElement !== null) {
        this.disconnect();
      }
      this.domElement = e;
    } else {
      R8M("Controls: connect() now requires an element.");
    }
  }
  disconnect() {}
  dispose() {}
  update() {}
}
export function Nex(e, t, n, i) {
  const r = function (e) {
    switch (e) {
      case OUM:
      case tJf:
        return {
          byteLength: 1,
          components: 1
        };
      case cHt:
      case fBL:
      case ix0:
        return {
          byteLength: 2,
          components: 1
        };
      case Wew:
      case gJ2:
        return {
          byteLength: 2,
          components: 4
        };
      case bkx:
      case Yuy:
      case RQf:
        return {
          byteLength: 4,
          components: 1
        };
      case Dmk:
      case yT7:
        return {
          byteLength: 4,
          components: 3
        };
    }
    throw new Error(`Unknown texture type ${e}.`);
  }(i);
  switch (n) {
    case wrO:
      return e * t;
    case VT0:
    case ZQM:
      return e * t / r.components * r.byteLength;
    case paN:
    case TkQ:
      return e * t * 2 / r.components * r.byteLength;
    case HIg:
      return e * t * 3 / r.components * r.byteLength;
    case GWd:
    case c90:
      return e * t * 4 / r.components * r.byteLength;
    case IE4:
    case Nz6:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case jR7:
    case BXX:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case kTp:
    case pBf:
      return Math.max(e, 16) * Math.max(t, 8) / 4;
    case k6Q:
    case HXV:
      return Math.max(e, 8) * Math.max(t, 8) / 2;
    case CVz:
    case Riy:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case KDk:
    case qa3:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case B_h:
      return Math.floor((e + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case czI:
      return Math.floor((e + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case rSH:
      return Math.floor((e + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case Qrf:
      return Math.floor((e + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case psI:
      return Math.floor((e + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case a5J:
      return Math.floor((e + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case _QJ:
      return Math.floor((e + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case uB5:
      return Math.floor((e + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case lyL:
      return Math.floor((e + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case bC7:
      return Math.floor((e + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case y3Z:
      return Math.floor((e + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case ojs:
      return Math.floor((e + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case S$4:
      return Math.floor((e + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    case Fn:
    case H23:
    case W9U:
      return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
    case Kef:
    case XG_:
      return Math.ceil(e / 4) * Math.ceil(t / 4) * 8;
    case HO_:
    case CWW:
      return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${n} format.`);
}
if (typeof __THREE_DEVTOOLS__ != "undefined") {
  __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
    detail: {
      revision: sPf
    }
  }));
}
if (typeof window != "undefined") {
  if (window.__THREE__) {
    R8M("WARNING: Multiple instances of Three.js being imported.");
  } else {
    window.__THREE__ = sPf;
  }
}