const i = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const r = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51];
const a = 30;
export function l(e) {
  let t = 0;
  let n = "";
  while (t < e.length * 8) {
    const r = _l(e, t);
    let s;
    if ((r & a) == a) {
      s = r & 31;
      t += 5;
    } else {
      s = r;
      t += 6;
    }
    n += i[s];
  }
  return n;
}
export function D(e) {
  let t = 0;
  const n = [];
  const i = e.length;
  for (let s = 0; s < i; s++) {
    const o = e.charCodeAt(s);
    if (o >= r.length) {
      return null;
    }
    const l = r[o];
    if (l == -1) {
      return null;
    }
    if ((l & a) == a) {
      c(n, t, 5, l, s == i - 1);
      t += 5;
    } else {
      c(n, t, 6, l, s == i - 1);
      t += 6;
    }
  }
  return new Uint8Array(n);
}
function _l(e, t) {
  if (t >= e.length * 8) {
    throw new Error("Out of range");
  }
  const n = Math.floor(t / 8);
  const i = e[n];
  const r = t - n * 8;
  if (r <= 2 || n >= e.length - 1) {
    return (i & 63 << r) >>> r;
  }
  return (i & 63 << r) >>> r | (e[n + 1] & 63 >>> 8 - r) << 8 - r;
}
function c(e, t, n, i, r) {
  const a = Math.floor(t / 8);
  while (a >= e.length) {
    e.push(0);
  }
  const s = t - a * 8;
  e[a] |= i << s & 255;
  if (s > 8 - n && !r) {
    const t = a + 1;
    if (t >= e.length) {
      e.push(0);
    }
    e[t] |= i >> 8 - s;
  }
}