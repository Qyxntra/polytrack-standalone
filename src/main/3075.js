function i(e) {
  let t = e.length;
  while (--t >= 0) {
    e[t] = 0;
  }
}
const r = 256;
const a = 286;
const s = 30;
const o = 15;
const l = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]);
const c = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]);
const h = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]);
const d = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
const u = new Array(576);
i(u);
const f = new Array(60);
i(f);
const p = new Array(512);
i(p);
const g = new Array(256);
i(g);
const m = new Array(29);
i(m);
const A = new Array(s);
function v(e, t, n, i, r) {
  this.static_tree = e;
  this.extra_bits = t;
  this.extra_base = n;
  this.elems = i;
  this.max_length = r;
  this.has_stree = e && e.length;
}
let b;
let y;
let w;
function x(e, t) {
  this.dyn_tree = e;
  this.max_code = 0;
  this.stat_desc = t;
}
i(A);
const S = e => e < 256 ? p[e] : p[256 + (e >>> 7)];
const k = (e, t) => {
  e.pending_buf[e.pending++] = t & 255;
  e.pending_buf[e.pending++] = t >>> 8 & 255;
};
const T = (e, t, n) => {
  if (e.bi_valid > 16 - n) {
    e.bi_buf |= t << e.bi_valid & 65535;
    k(e, e.bi_buf);
    e.bi_buf = t >> 16 - e.bi_valid;
    e.bi_valid += n - 16;
  } else {
    e.bi_buf |= t << e.bi_valid & 65535;
    e.bi_valid += n;
  }
};
const E = (e, t, n) => {
  T(e, n[t * 2], n[t * 2 + 1]);
};
const M = (e, t) => {
  let n = 0;
  do {
    n |= e & 1;
    e >>>= 1;
    n <<= 1;
  } while (--t > 0);
  return n >>> 1;
};
const _ = (e, t, n) => {
  const i = new Array(16);
  let r;
  let a;
  let s = 0;
  for (r = 1; r <= o; r++) {
    s = s + n[r - 1] << 1;
    i[r] = s;
  }
  for (a = 0; a <= t; a++) {
    let t = e[a * 2 + 1];
    if (t !== 0) {
      e[a * 2] = M(i[t]++, t);
    }
  }
};
const C = e => {
  let t;
  for (t = 0; t < a; t++) {
    e.dyn_ltree[t * 2] = 0;
  }
  for (t = 0; t < s; t++) {
    e.dyn_dtree[t * 2] = 0;
  }
  for (t = 0; t < 19; t++) {
    e.bl_tree[t * 2] = 0;
  }
  e.dyn_ltree[512] = 1;
  e.opt_len = e.static_len = 0;
  e.sym_next = e.matches = 0;
};
const R = e => {
  if (e.bi_valid > 8) {
    k(e, e.bi_buf);
  } else if (e.bi_valid > 0) {
    e.pending_buf[e.pending++] = e.bi_buf;
  }
  e.bi_buf = 0;
  e.bi_valid = 0;
};
const P = (e, t, n, i) => {
  const r = t * 2;
  const a = n * 2;
  return e[r] < e[a] || e[r] === e[a] && i[t] <= i[n];
};
const I = (e, t, n) => {
  const i = e.heap[n];
  let r = n << 1;
  while (r <= e.heap_len && (r < e.heap_len && P(t, e.heap[r + 1], e.heap[r], e.depth) && r++, !P(t, i, e.heap[r], e.depth))) {
    e.heap[n] = e.heap[r];
    n = r;
    r <<= 1;
  }
  e.heap[n] = i;
};
const L = (e, t, n) => {
  let i;
  let a;
  let s;
  let o;
  let h = 0;
  if (e.sym_next !== 0) {
    do {
      i = e.pending_buf[e.sym_buf + h++] & 255;
      i += (e.pending_buf[e.sym_buf + h++] & 255) << 8;
      a = e.pending_buf[e.sym_buf + h++];
      if (i === 0) {
        E(e, a, t);
      } else {
        s = g[a];
        E(e, s + r + 1, t);
        o = l[s];
        if (o !== 0) {
          a -= m[s];
          T(e, a, o);
        }
        i--;
        s = S(i);
        E(e, s, n);
        o = c[s];
        if (o !== 0) {
          i -= A[s];
          T(e, i, o);
        }
      }
    } while (h < e.sym_next);
  }
  E(e, 256, t);
};
const U = (e, t) => {
  const n = t.dyn_tree;
  const i = t.stat_desc.static_tree;
  const r = t.stat_desc.has_stree;
  const a = t.stat_desc.elems;
  let s;
  let l;
  let c;
  let h = -1;
  e.heap_len = 0;
  e.heap_max = 573;
  s = 0;
  for (; s < a; s++) {
    if (n[s * 2] !== 0) {
      e.heap[++e.heap_len] = h = s;
      e.depth[s] = 0;
    } else {
      n[s * 2 + 1] = 0;
    }
  }
  while (e.heap_len < 2) {
    c = e.heap[++e.heap_len] = h < 2 ? ++h : 0;
    n[c * 2] = 1;
    e.depth[c] = 0;
    e.opt_len--;
    if (r) {
      e.static_len -= i[c * 2 + 1];
    }
  }
  t.max_code = h;
  s = e.heap_len >> 1;
  for (; s >= 1; s--) {
    I(e, n, s);
  }
  c = a;
  do {
    s = e.heap[1];
    e.heap[1] = e.heap[e.heap_len--];
    I(e, n, 1);
    l = e.heap[1];
    e.heap[--e.heap_max] = s;
    e.heap[--e.heap_max] = l;
    n[c * 2] = n[s * 2] + n[l * 2];
    e.depth[c] = (e.depth[s] >= e.depth[l] ? e.depth[s] : e.depth[l]) + 1;
    n[s * 2 + 1] = n[l * 2 + 1] = c;
    e.heap[1] = c++;
    I(e, n, 1);
  } while (e.heap_len >= 2);
  e.heap[--e.heap_max] = e.heap[1];
  ((e, t) => {
    const n = t.dyn_tree;
    const i = t.max_code;
    const r = t.stat_desc.static_tree;
    const a = t.stat_desc.has_stree;
    const s = t.stat_desc.extra_bits;
    const l = t.stat_desc.extra_base;
    const c = t.stat_desc.max_length;
    let h;
    let d;
    let u;
    let f;
    let p;
    let g;
    let m = 0;
    for (f = 0; f <= o; f++) {
      e.bl_count[f] = 0;
    }
    n[e.heap[e.heap_max] * 2 + 1] = 0;
    h = e.heap_max + 1;
    for (; h < 573; h++) {
      d = e.heap[h];
      f = n[n[d * 2 + 1] * 2 + 1] + 1;
      if (f > c) {
        f = c;
        m++;
      }
      n[d * 2 + 1] = f;
      if (!(d > i)) {
        e.bl_count[f]++;
        p = 0;
        if (d >= l) {
          p = s[d - l];
        }
        g = n[d * 2];
        e.opt_len += g * (f + p);
        if (a) {
          e.static_len += g * (r[d * 2 + 1] + p);
        }
      }
    }
    if (m !== 0) {
      do {
        for (f = c - 1; e.bl_count[f] === 0;) {
          f--;
        }
        e.bl_count[f]--;
        e.bl_count[f + 1] += 2;
        e.bl_count[c]--;
        m -= 2;
      } while (m > 0);
      for (f = c; f !== 0; f--) {
        for (d = e.bl_count[f]; d !== 0;) {
          u = e.heap[--h];
          if (!(u > i)) {
            if (n[u * 2 + 1] !== f) {
              e.opt_len += (f - n[u * 2 + 1]) * n[u * 2];
              n[u * 2 + 1] = f;
            }
            d--;
          }
        }
      }
    }
  })(e, t);
  _(n, h, e.bl_count);
};
const N = (e, t, n) => {
  let i;
  let r;
  let a = -1;
  let s = t[1];
  let o = 0;
  let l = 7;
  let c = 4;
  if (s === 0) {
    l = 138;
    c = 3;
  }
  t[(n + 1) * 2 + 1] = 65535;
  i = 0;
  for (; i <= n; i++) {
    r = s;
    s = t[(i + 1) * 2 + 1];
    if (!(++o < l) || r !== s) {
      if (o < c) {
        e.bl_tree[r * 2] += o;
      } else if (r !== 0) {
        if (r !== a) {
          e.bl_tree[r * 2]++;
        }
        e.bl_tree[32]++;
      } else if (o <= 10) {
        e.bl_tree[34]++;
      } else {
        e.bl_tree[36]++;
      }
      o = 0;
      a = r;
      if (s === 0) {
        l = 138;
        c = 3;
      } else if (r === s) {
        l = 6;
        c = 3;
      } else {
        l = 7;
        c = 4;
      }
    }
  }
};
const z = (e, t, n) => {
  let i;
  let r;
  let a = -1;
  let s = t[1];
  let o = 0;
  let l = 7;
  let c = 4;
  if (s === 0) {
    l = 138;
    c = 3;
  }
  i = 0;
  for (; i <= n; i++) {
    r = s;
    s = t[(i + 1) * 2 + 1];
    if (!(++o < l) || r !== s) {
      if (o < c) {
        do {
          E(e, r, e.bl_tree);
        } while (--o != 0);
      } else if (r !== 0) {
        if (r !== a) {
          E(e, r, e.bl_tree);
          o--;
        }
        E(e, 16, e.bl_tree);
        T(e, o - 3, 2);
      } else if (o <= 10) {
        E(e, 17, e.bl_tree);
        T(e, o - 3, 3);
      } else {
        E(e, 18, e.bl_tree);
        T(e, o - 11, 7);
      }
      o = 0;
      a = r;
      if (s === 0) {
        l = 138;
        c = 3;
      } else if (r === s) {
        l = 6;
        c = 3;
      } else {
        l = 7;
        c = 4;
      }
    }
  }
};
let D = false;
const B = (e, t, n, i) => {
  T(e, 0 + (i ? 1 : 0), 3);
  R(e);
  k(e, n);
  k(e, ~n);
  if (n) {
    e.pending_buf.set(e.window.subarray(t, t + n), e.pending);
  }
  e.pending += n;
};
var G = (e, t, n, i) => {
  let a;
  let s;
  let o = 0;
  if (e.level > 0) {
    if (e.strm.data_type === 2) {
      e.strm.data_type = (e => {
        let t;
        let n = 4093624447;
        for (t = 0; t <= 31; t++, n >>>= 1) {
          if (n & 1 && e.dyn_ltree[t * 2] !== 0) {
            return 0;
          }
        }
        if (e.dyn_ltree[18] !== 0 || e.dyn_ltree[20] !== 0 || e.dyn_ltree[26] !== 0) {
          return 1;
        }
        for (t = 32; t < r; t++) {
          if (e.dyn_ltree[t * 2] !== 0) {
            return 1;
          }
        }
        return 0;
      })(e);
    }
    U(e, e.l_desc);
    U(e, e.d_desc);
    o = (e => {
      let t;
      N(e, e.dyn_ltree, e.l_desc.max_code);
      N(e, e.dyn_dtree, e.d_desc.max_code);
      U(e, e.bl_desc);
      t = 18;
      for (; t >= 3 && e.bl_tree[d[t] * 2 + 1] === 0; t--);
      e.opt_len += (t + 1) * 3 + 5 + 5 + 4;
      return t;
    })(e);
    a = e.opt_len + 3 + 7 >>> 3;
    s = e.static_len + 3 + 7 >>> 3;
    if (s <= a) {
      a = s;
    }
  } else {
    a = s = n + 5;
  }
  if (n + 4 <= a && t !== -1) {
    B(e, t, n, i);
  } else if (e.strategy === 4 || s === a) {
    T(e, 2 + (i ? 1 : 0), 3);
    L(e, u, f);
  } else {
    T(e, 4 + (i ? 1 : 0), 3);
    ((e, t, n, i) => {
      let r;
      T(e, t - 257, 5);
      T(e, n - 1, 5);
      T(e, i - 4, 4);
      r = 0;
      for (; r < i; r++) {
        T(e, e.bl_tree[d[r] * 2 + 1], 3);
      }
      z(e, e.dyn_ltree, t - 1);
      z(e, e.dyn_dtree, n - 1);
    })(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, o + 1);
    L(e, e.dyn_ltree, e.dyn_dtree);
  }
  C(e);
  if (i) {
    R(e);
  }
};
var F = {
  _tr_init: e => {
    if (!D) {
      (() => {
        let e;
        let t;
        let n;
        let i;
        let r;
        const d = new Array(16);
        n = 0;
        i = 0;
        for (; i < 28; i++) {
          m[i] = n;
          e = 0;
          for (; e < 1 << l[i]; e++) {
            g[n++] = i;
          }
        }
        g[n - 1] = i;
        r = 0;
        i = 0;
        for (; i < 16; i++) {
          A[i] = r;
          e = 0;
          for (; e < 1 << c[i]; e++) {
            p[r++] = i;
          }
        }
        for (r >>= 7; i < s; i++) {
          A[i] = r << 7;
          e = 0;
          for (; e < 1 << c[i] - 7; e++) {
            p[256 + r++] = i;
          }
        }
        for (t = 0; t <= o; t++) {
          d[t] = 0;
        }
        for (e = 0; e <= 143;) {
          u[e * 2 + 1] = 8;
          e++;
          d[8]++;
        }
        while (e <= 255) {
          u[e * 2 + 1] = 9;
          e++;
          d[9]++;
        }
        while (e <= 279) {
          u[e * 2 + 1] = 7;
          e++;
          d[7]++;
        }
        while (e <= 287) {
          u[e * 2 + 1] = 8;
          e++;
          d[8]++;
        }
        _(u, 287, d);
        e = 0;
        for (; e < s; e++) {
          f[e * 2 + 1] = 5;
          f[e * 2] = M(e, 5);
        }
        b = new v(u, l, 257, a, o);
        y = new v(f, c, 0, s, o);
        w = new v(new Array(0), h, 0, 19, 7);
      })();
      D = true;
    }
    e.l_desc = new x(e.dyn_ltree, b);
    e.d_desc = new x(e.dyn_dtree, y);
    e.bl_desc = new x(e.bl_tree, w);
    e.bi_buf = 0;
    e.bi_valid = 0;
    C(e);
  },
  _tr_stored_block: B,
  _tr_flush_block: G,
  _tr_tally: (e, t, n) => {
    e.pending_buf[e.sym_buf + e.sym_next++] = t;
    e.pending_buf[e.sym_buf + e.sym_next++] = t >> 8;
    e.pending_buf[e.sym_buf + e.sym_next++] = n;
    if (t === 0) {
      e.dyn_ltree[n * 2]++;
    } else {
      e.matches++;
      t--;
      e.dyn_ltree[(g[n] + r + 1) * 2]++;
      e.dyn_dtree[S(t) * 2]++;
    }
    return e.sym_next === e.sym_end;
  },
  _tr_align: e => {
    T(e, 2, 3);
    E(e, 256, u);
    (e => {
      if (e.bi_valid === 16) {
        k(e, e.bi_buf);
        e.bi_buf = 0;
        e.bi_valid = 0;
      } else if (e.bi_valid >= 8) {
        e.pending_buf[e.pending++] = e.bi_buf & 255;
        e.bi_buf >>= 8;
        e.bi_valid -= 8;
      }
    })(e);
  }
};
var O = (e, t, n, i) => {
  let r = e & 65535;
  let a = e >>> 16 & 65535;
  let s = 0;
  while (n !== 0) {
    s = n > 2000 ? 2000 : n;
    n -= s;
    do {
      r = r + t[i++] | 0;
      a = a + r | 0;
    } while (--s);
    r %= 65521;
    a %= 65521;
  }
  return r | a << 16;
};
const W = new Uint32Array((() => {
  let e;
  let t = [];
  for (var n = 0; n < 256; n++) {
    e = n;
    for (var i = 0; i < 8; i++) {
      e = e & 1 ? e >>> 1 ^ -306674912 : e >>> 1;
    }
    t[n] = e;
  }
  return t;
})());
var V = (e, t, n, i) => {
  const r = W;
  const a = i + n;
  e ^= -1;
  for (let n = i; n < a; n++) {
    e = e >>> 8 ^ r[(e ^ t[n]) & 255];
  }
  return ~e;
};
var H = {
  2: "need dictionary",
  1: "stream end",
  0: "",
  "-1": "file error",
  "-2": "stream error",
  "-3": "data error",
  "-4": "insufficient memory",
  "-5": "buffer error",
  "-6": "incompatible version"
};
var j = {
  Z_NO_FLUSH: 0,
  Z_PARTIAL_FLUSH: 1,
  Z_SYNC_FLUSH: 2,
  Z_FULL_FLUSH: 3,
  Z_FINISH: 4,
  Z_BLOCK: 5,
  Z_TREES: 6,
  Z_OK: 0,
  Z_STREAM_END: 1,
  Z_NEED_DICT: 2,
  Z_ERRNO: -1,
  Z_STREAM_ERROR: -2,
  Z_DATA_ERROR: -3,
  Z_MEM_ERROR: -4,
  Z_BUF_ERROR: -5,
  Z_NO_COMPRESSION: 0,
  Z_BEST_SPEED: 1,
  Z_BEST_COMPRESSION: 9,
  Z_DEFAULT_COMPRESSION: -1,
  Z_FILTERED: 1,
  Z_HUFFMAN_ONLY: 2,
  Z_RLE: 3,
  Z_FIXED: 4,
  Z_DEFAULT_STRATEGY: 0,
  Z_BINARY: 0,
  Z_TEXT: 1,
  Z_UNKNOWN: 2,
  Z_DEFLATED: 8
};
const {
  _tr_init: K,
  _tr_stored_block: q,
  _tr_flush_block: Q,
  _tr_tally: J,
  _tr_align: X
} = F;
const {
  Z_NO_FLUSH: Y,
  Z_PARTIAL_FLUSH: Z,
  Z_FULL_FLUSH: $,
  Z_FINISH: ee,
  Z_BLOCK: te,
  Z_OK: ne,
  Z_STREAM_END: ie,
  Z_STREAM_ERROR: re,
  Z_DATA_ERROR: ae,
  Z_BUF_ERROR: se,
  Z_DEFAULT_COMPRESSION: oe,
  Z_FILTERED: le,
  Z_HUFFMAN_ONLY: ce,
  Z_RLE: he,
  Z_FIXED: de,
  Z_DEFAULT_STRATEGY: ue,
  Z_UNKNOWN: fe,
  Z_DEFLATED: pe
} = j;
const ge = 258;
const me = 262;
const Ae = 42;
const ve = 113;
const be = 666;
const ye = (e, t) => {
  e.msg = H[t];
  return t;
};
const we = e => e * 2 - (e > 4 ? 9 : 0);
const xe = e => {
  let t = e.length;
  while (--t >= 0) {
    e[t] = 0;
  }
};
const Se = e => {
  let t;
  let n;
  let i;
  let r = e.w_size;
  t = e.hash_size;
  i = t;
  do {
    n = e.head[--i];
    e.head[i] = n >= r ? n - r : 0;
  } while (--t);
  t = r;
  i = t;
  do {
    n = e.prev[--i];
    e.prev[i] = n >= r ? n - r : 0;
  } while (--t);
};
let ke = (e, t, n) => (t << e.hash_shift ^ n) & e.hash_mask;
const Te = e => {
  const t = e.state;
  let n = t.pending;
  if (n > e.avail_out) {
    n = e.avail_out;
  }
  if (n !== 0) {
    e.output.set(t.pending_buf.subarray(t.pending_out, t.pending_out + n), e.next_out);
    e.next_out += n;
    t.pending_out += n;
    e.total_out += n;
    e.avail_out -= n;
    t.pending -= n;
    if (t.pending === 0) {
      t.pending_out = 0;
    }
  }
};
const Ee = (e, t) => {
  Q(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t);
  e.block_start = e.strstart;
  Te(e.strm);
};
const Me = (e, t) => {
  e.pending_buf[e.pending++] = t;
};
const _e = (e, t) => {
  e.pending_buf[e.pending++] = t >>> 8 & 255;
  e.pending_buf[e.pending++] = t & 255;
};
const Ce = (e, t, n, i) => {
  let r = e.avail_in;
  if (r > i) {
    r = i;
  }
  if (r === 0) {
    return 0;
  } else {
    e.avail_in -= r;
    t.set(e.input.subarray(e.next_in, e.next_in + r), n);
    if (e.state.wrap === 1) {
      e.adler = O(e.adler, t, r, n);
    } else if (e.state.wrap === 2) {
      e.adler = V(e.adler, t, r, n);
    }
    e.next_in += r;
    e.total_in += r;
    return r;
  }
};
const Re = (e, t) => {
  let n;
  let i;
  let r = e.max_chain_length;
  let a = e.strstart;
  let s = e.prev_length;
  let o = e.nice_match;
  const l = e.strstart > e.w_size - me ? e.strstart - (e.w_size - me) : 0;
  const c = e.window;
  const h = e.w_mask;
  const d = e.prev;
  const u = e.strstart + ge;
  let f = c[a + s - 1];
  let p = c[a + s];
  if (e.prev_length >= e.good_match) {
    r >>= 2;
  }
  if (o > e.lookahead) {
    o = e.lookahead;
  }
  do {
    n = t;
    if (c[n + s] === p && c[n + s - 1] === f && c[n] === c[a] && c[++n] === c[a + 1]) {
      a += 2;
      n++;
      do {} while (c[++a] === c[++n] && c[++a] === c[++n] && c[++a] === c[++n] && c[++a] === c[++n] && c[++a] === c[++n] && c[++a] === c[++n] && c[++a] === c[++n] && c[++a] === c[++n] && a < u);
      i = ge - (u - a);
      a = u - ge;
      if (i > s) {
        e.match_start = t;
        s = i;
        if (i >= o) {
          break;
        }
        f = c[a + s - 1];
        p = c[a + s];
      }
    }
  } while ((t = d[t & h]) > l && --r != 0);
  if (s <= e.lookahead) {
    return s;
  } else {
    return e.lookahead;
  }
};
const Pe = e => {
  const t = e.w_size;
  let n;
  let i;
  let r;
  do {
    i = e.window_size - e.lookahead - e.strstart;
    if (e.strstart >= t + (t - me)) {
      e.window.set(e.window.subarray(t, t + t - i), 0);
      e.match_start -= t;
      e.strstart -= t;
      e.block_start -= t;
      if (e.insert > e.strstart) {
        e.insert = e.strstart;
      }
      Se(e);
      i += t;
    }
    if (e.strm.avail_in === 0) {
      break;
    }
    n = Ce(e.strm, e.window, e.strstart + e.lookahead, i);
    e.lookahead += n;
    if (e.lookahead + e.insert >= 3) {
      r = e.strstart - e.insert;
      e.ins_h = e.window[r];
      e.ins_h = ke(e, e.ins_h, e.window[r + 1]);
      while (e.insert && (e.ins_h = ke(e, e.ins_h, e.window[r + 3 - 1]), e.prev[r & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = r, r++, e.insert--, !(e.lookahead + e.insert < 3)));
    }
  } while (e.lookahead < me && e.strm.avail_in !== 0);
};
const Ie = (e, t) => {
  let n;
  let i;
  let r;
  let a = e.pending_buf_size - 5 > e.w_size ? e.w_size : e.pending_buf_size - 5;
  let s = 0;
  let o = e.strm.avail_in;
  do {
    n = 65535;
    r = e.bi_valid + 42 >> 3;
    if (e.strm.avail_out < r) {
      break;
    }
    r = e.strm.avail_out - r;
    i = e.strstart - e.block_start;
    if (n > i + e.strm.avail_in) {
      n = i + e.strm.avail_in;
    }
    if (n > r) {
      n = r;
    }
    if (n < a && (n === 0 && t !== ee || t === Y || n !== i + e.strm.avail_in)) {
      break;
    }
    s = t === ee && n === i + e.strm.avail_in ? 1 : 0;
    q(e, 0, 0, s);
    e.pending_buf[e.pending - 4] = n;
    e.pending_buf[e.pending - 3] = n >> 8;
    e.pending_buf[e.pending - 2] = ~n;
    e.pending_buf[e.pending - 1] = ~n >> 8;
    Te(e.strm);
    if (i) {
      if (i > n) {
        i = n;
      }
      e.strm.output.set(e.window.subarray(e.block_start, e.block_start + i), e.strm.next_out);
      e.strm.next_out += i;
      e.strm.avail_out -= i;
      e.strm.total_out += i;
      e.block_start += i;
      n -= i;
    }
    if (n) {
      Ce(e.strm, e.strm.output, e.strm.next_out, n);
      e.strm.next_out += n;
      e.strm.avail_out -= n;
      e.strm.total_out += n;
    }
  } while (s === 0);
  o -= e.strm.avail_in;
  if (o) {
    if (o >= e.w_size) {
      e.matches = 2;
      e.window.set(e.strm.input.subarray(e.strm.next_in - e.w_size, e.strm.next_in), 0);
      e.strstart = e.w_size;
      e.insert = e.strstart;
    } else {
      if (e.window_size - e.strstart <= o) {
        e.strstart -= e.w_size;
        e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0);
        if (e.matches < 2) {
          e.matches++;
        }
        if (e.insert > e.strstart) {
          e.insert = e.strstart;
        }
      }
      e.window.set(e.strm.input.subarray(e.strm.next_in - o, e.strm.next_in), e.strstart);
      e.strstart += o;
      e.insert += o > e.w_size - e.insert ? e.w_size - e.insert : o;
    }
    e.block_start = e.strstart;
  }
  if (e.high_water < e.strstart) {
    e.high_water = e.strstart;
  }
  if (s) {
    return 4;
  } else if (t !== Y && t !== ee && e.strm.avail_in === 0 && e.strstart === e.block_start) {
    return 2;
  } else {
    r = e.window_size - e.strstart;
    if (e.strm.avail_in > r && e.block_start >= e.w_size) {
      e.block_start -= e.w_size;
      e.strstart -= e.w_size;
      e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0);
      if (e.matches < 2) {
        e.matches++;
      }
      r += e.w_size;
      if (e.insert > e.strstart) {
        e.insert = e.strstart;
      }
    }
    if (r > e.strm.avail_in) {
      r = e.strm.avail_in;
    }
    if (r) {
      Ce(e.strm, e.window, e.strstart, r);
      e.strstart += r;
      e.insert += r > e.w_size - e.insert ? e.w_size - e.insert : r;
    }
    if (e.high_water < e.strstart) {
      e.high_water = e.strstart;
    }
    r = e.bi_valid + 42 >> 3;
    r = e.pending_buf_size - r > 65535 ? 65535 : e.pending_buf_size - r;
    a = r > e.w_size ? e.w_size : r;
    i = e.strstart - e.block_start;
    if (i >= a || (i || t === ee) && t !== Y && e.strm.avail_in === 0 && i <= r) {
      n = i > r ? r : i;
      s = t === ee && e.strm.avail_in === 0 && n === i ? 1 : 0;
      q(e, e.block_start, n, s);
      e.block_start += n;
      Te(e.strm);
    }
    if (s) {
      return 3;
    } else {
      return 1;
    }
  }
};
const Le = (e, t) => {
  let n;
  let i;
  while (true) {
    if (e.lookahead < me) {
      Pe(e);
      if (e.lookahead < me && t === Y) {
        return 1;
      }
      if (e.lookahead === 0) {
        break;
      }
    }
    n = 0;
    if (e.lookahead >= 3) {
      e.ins_h = ke(e, e.ins_h, e.window[e.strstart + 3 - 1]);
      n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
      e.head[e.ins_h] = e.strstart;
    }
    if (n !== 0 && e.strstart - n <= e.w_size - me) {
      e.match_length = Re(e, n);
    }
    if (e.match_length >= 3) {
      i = J(e, e.strstart - e.match_start, e.match_length - 3);
      e.lookahead -= e.match_length;
      if (e.match_length <= e.max_lazy_match && e.lookahead >= 3) {
        e.match_length--;
        do {
          e.strstart++;
          e.ins_h = ke(e, e.ins_h, e.window[e.strstart + 3 - 1]);
          n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
          e.head[e.ins_h] = e.strstart;
        } while (--e.match_length != 0);
        e.strstart++;
      } else {
        e.strstart += e.match_length;
        e.match_length = 0;
        e.ins_h = e.window[e.strstart];
        e.ins_h = ke(e, e.ins_h, e.window[e.strstart + 1]);
      }
    } else {
      i = J(e, 0, e.window[e.strstart]);
      e.lookahead--;
      e.strstart++;
    }
    if (i && (Ee(e, false), e.strm.avail_out === 0)) {
      return 1;
    }
  }
  e.insert = e.strstart < 2 ? e.strstart : 2;
  if (t === ee) {
    Ee(e, true);
    if (e.strm.avail_out === 0) {
      return 3;
    } else {
      return 4;
    }
  } else if (e.sym_next && (Ee(e, false), e.strm.avail_out === 0)) {
    return 1;
  } else {
    return 2;
  }
};
const Ue = (e, t) => {
  let n;
  let i;
  let r;
  while (true) {
    if (e.lookahead < me) {
      Pe(e);
      if (e.lookahead < me && t === Y) {
        return 1;
      }
      if (e.lookahead === 0) {
        break;
      }
    }
    n = 0;
    if (e.lookahead >= 3) {
      e.ins_h = ke(e, e.ins_h, e.window[e.strstart + 3 - 1]);
      n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
      e.head[e.ins_h] = e.strstart;
    }
    e.prev_length = e.match_length;
    e.prev_match = e.match_start;
    e.match_length = 2;
    if (n !== 0 && e.prev_length < e.max_lazy_match && e.strstart - n <= e.w_size - me) {
      e.match_length = Re(e, n);
      if (e.match_length <= 5 && (e.strategy === le || e.match_length === 3 && e.strstart - e.match_start > 4096)) {
        e.match_length = 2;
      }
    }
    if (e.prev_length >= 3 && e.match_length <= e.prev_length) {
      r = e.strstart + e.lookahead - 3;
      i = J(e, e.strstart - 1 - e.prev_match, e.prev_length - 3);
      e.lookahead -= e.prev_length - 1;
      e.prev_length -= 2;
      do {
        if (++e.strstart <= r) {
          e.ins_h = ke(e, e.ins_h, e.window[e.strstart + 3 - 1]);
          n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
          e.head[e.ins_h] = e.strstart;
        }
      } while (--e.prev_length != 0);
      e.match_available = 0;
      e.match_length = 2;
      e.strstart++;
      if (i && (Ee(e, false), e.strm.avail_out === 0)) {
        return 1;
      }
    } else if (e.match_available) {
      i = J(e, 0, e.window[e.strstart - 1]);
      if (i) {
        Ee(e, false);
      }
      e.strstart++;
      e.lookahead--;
      if (e.strm.avail_out === 0) {
        return 1;
      }
    } else {
      e.match_available = 1;
      e.strstart++;
      e.lookahead--;
    }
  }
  if (e.match_available) {
    i = J(e, 0, e.window[e.strstart - 1]);
    e.match_available = 0;
  }
  e.insert = e.strstart < 2 ? e.strstart : 2;
  if (t === ee) {
    Ee(e, true);
    if (e.strm.avail_out === 0) {
      return 3;
    } else {
      return 4;
    }
  } else if (e.sym_next && (Ee(e, false), e.strm.avail_out === 0)) {
    return 1;
  } else {
    return 2;
  }
};
function Ne(e, t, n, i, r) {
  this.good_length = e;
  this.max_lazy = t;
  this.nice_length = n;
  this.max_chain = i;
  this.func = r;
}
const ze = [new Ne(0, 0, 0, 0, Ie), new Ne(4, 4, 8, 4, Le), new Ne(4, 5, 16, 8, Le), new Ne(4, 6, 32, 32, Le), new Ne(4, 4, 16, 16, Ue), new Ne(8, 16, 32, 32, Ue), new Ne(8, 16, 128, 128, Ue), new Ne(8, 32, 128, 256, Ue), new Ne(32, 128, 258, 1024, Ue), new Ne(32, 258, 258, 4096, Ue)];
function De() {
  this.strm = null;
  this.status = 0;
  this.pending_buf = null;
  this.pending_buf_size = 0;
  this.pending_out = 0;
  this.pending = 0;
  this.wrap = 0;
  this.gzhead = null;
  this.gzindex = 0;
  this.method = pe;
  this.last_flush = -1;
  this.w_size = 0;
  this.w_bits = 0;
  this.w_mask = 0;
  this.window = null;
  this.window_size = 0;
  this.prev = null;
  this.head = null;
  this.ins_h = 0;
  this.hash_size = 0;
  this.hash_bits = 0;
  this.hash_mask = 0;
  this.hash_shift = 0;
  this.block_start = 0;
  this.match_length = 0;
  this.prev_match = 0;
  this.match_available = 0;
  this.strstart = 0;
  this.match_start = 0;
  this.lookahead = 0;
  this.prev_length = 0;
  this.max_chain_length = 0;
  this.max_lazy_match = 0;
  this.level = 0;
  this.strategy = 0;
  this.good_match = 0;
  this.nice_match = 0;
  this.dyn_ltree = new Uint16Array(1146);
  this.dyn_dtree = new Uint16Array(122);
  this.bl_tree = new Uint16Array(78);
  xe(this.dyn_ltree);
  xe(this.dyn_dtree);
  xe(this.bl_tree);
  this.l_desc = null;
  this.d_desc = null;
  this.bl_desc = null;
  this.bl_count = new Uint16Array(16);
  this.heap = new Uint16Array(573);
  xe(this.heap);
  this.heap_len = 0;
  this.heap_max = 0;
  this.depth = new Uint16Array(573);
  xe(this.depth);
  this.sym_buf = 0;
  this.lit_bufsize = 0;
  this.sym_next = 0;
  this.sym_end = 0;
  this.opt_len = 0;
  this.static_len = 0;
  this.matches = 0;
  this.insert = 0;
  this.bi_buf = 0;
  this.bi_valid = 0;
}
const Be = e => {
  if (!e) {
    return 1;
  }
  const t = e.state;
  if (!t || t.strm !== e || t.status !== Ae && t.status !== 57 && t.status !== 69 && t.status !== 73 && t.status !== 91 && t.status !== 103 && t.status !== ve && t.status !== be) {
    return 1;
  } else {
    return 0;
  }
};
const Ge = e => {
  if (Be(e)) {
    return ye(e, re);
  }
  e.total_in = e.total_out = 0;
  e.data_type = fe;
  const t = e.state;
  t.pending = 0;
  t.pending_out = 0;
  if (t.wrap < 0) {
    t.wrap = -t.wrap;
  }
  t.status = t.wrap === 2 ? 57 : t.wrap ? Ae : ve;
  e.adler = t.wrap === 2 ? 0 : 1;
  t.last_flush = -2;
  K(t);
  return ne;
};
const Fe = e => {
  const t = Ge(e);
  var n;
  if (t === ne) {
    (n = e.state).window_size = n.w_size * 2;
    xe(n.head);
    n.max_lazy_match = ze[n.level].max_lazy;
    n.good_match = ze[n.level].good_length;
    n.nice_match = ze[n.level].nice_length;
    n.max_chain_length = ze[n.level].max_chain;
    n.strstart = 0;
    n.block_start = 0;
    n.lookahead = 0;
    n.insert = 0;
    n.match_length = n.prev_length = 2;
    n.match_available = 0;
    n.ins_h = 0;
  }
  return t;
};
const Oe = (e, t, n, i, r, a) => {
  if (!e) {
    return re;
  }
  let s = 1;
  if (t === oe) {
    t = 6;
  }
  if (i < 0) {
    s = 0;
    i = -i;
  } else if (i > 15) {
    s = 2;
    i -= 16;
  }
  if (r < 1 || r > 9 || n !== pe || i < 8 || i > 15 || t < 0 || t > 9 || a < 0 || a > de || i === 8 && s !== 1) {
    return ye(e, re);
  }
  if (i === 8) {
    i = 9;
  }
  const o = new De();
  e.state = o;
  o.strm = e;
  o.status = Ae;
  o.wrap = s;
  o.gzhead = null;
  o.w_bits = i;
  o.w_size = 1 << o.w_bits;
  o.w_mask = o.w_size - 1;
  o.hash_bits = r + 7;
  o.hash_size = 1 << o.hash_bits;
  o.hash_mask = o.hash_size - 1;
  o.hash_shift = ~~((o.hash_bits + 3 - 1) / 3);
  o.window = new Uint8Array(o.w_size * 2);
  o.head = new Uint16Array(o.hash_size);
  o.prev = new Uint16Array(o.w_size);
  o.lit_bufsize = 1 << r + 6;
  o.pending_buf_size = o.lit_bufsize * 4;
  o.pending_buf = new Uint8Array(o.pending_buf_size);
  o.sym_buf = o.lit_bufsize;
  o.sym_end = (o.lit_bufsize - 1) * 3;
  o.level = t;
  o.strategy = a;
  o.method = n;
  return Fe(e);
};
var We = {
  deflateInit: (e, t) => Oe(e, t, pe, 15, 8, ue),
  deflateInit2: Oe,
  deflateReset: Fe,
  deflateResetKeep: Ge,
  deflateSetHeader: (e, t) => Be(e) || e.state.wrap !== 2 ? re : (e.state.gzhead = t, ne),
  deflate: (e, t) => {
    if (Be(e) || t > te || t < 0) {
      if (e) {
        return ye(e, re);
      } else {
        return re;
      }
    }
    const n = e.state;
    if (!e.output || e.avail_in !== 0 && !e.input || n.status === be && t !== ee) {
      return ye(e, e.avail_out === 0 ? se : re);
    }
    const i = n.last_flush;
    n.last_flush = t;
    if (n.pending !== 0) {
      Te(e);
      if (e.avail_out === 0) {
        n.last_flush = -1;
        return ne;
      }
    } else if (e.avail_in === 0 && we(t) <= we(i) && t !== ee) {
      return ye(e, se);
    }
    if (n.status === be && e.avail_in !== 0) {
      return ye(e, se);
    }
    if (n.status === Ae && n.wrap === 0) {
      n.status = ve;
    }
    if (n.status === Ae) {
      let t = pe + (n.w_bits - 8 << 4) << 8;
      let i = -1;
      i = n.strategy >= ce || n.level < 2 ? 0 : n.level < 6 ? 1 : n.level === 6 ? 2 : 3;
      t |= i << 6;
      if (n.strstart !== 0) {
        t |= 32;
      }
      t += 31 - t % 31;
      _e(n, t);
      if (n.strstart !== 0) {
        _e(n, e.adler >>> 16);
        _e(n, e.adler & 65535);
      }
      e.adler = 1;
      n.status = ve;
      Te(e);
      if (n.pending !== 0) {
        n.last_flush = -1;
        return ne;
      }
    }
    if (n.status === 57) {
      e.adler = 0;
      Me(n, 31);
      Me(n, 139);
      Me(n, 8);
      if (n.gzhead) {
        Me(n, (n.gzhead.text ? 1 : 0) + (n.gzhead.hcrc ? 2 : 0) + (n.gzhead.extra ? 4 : 0) + (n.gzhead.name ? 8 : 0) + (n.gzhead.comment ? 16 : 0));
        Me(n, n.gzhead.time & 255);
        Me(n, n.gzhead.time >> 8 & 255);
        Me(n, n.gzhead.time >> 16 & 255);
        Me(n, n.gzhead.time >> 24 & 255);
        Me(n, n.level === 9 ? 2 : n.strategy >= ce || n.level < 2 ? 4 : 0);
        Me(n, n.gzhead.os & 255);
        if (n.gzhead.extra && n.gzhead.extra.length) {
          Me(n, n.gzhead.extra.length & 255);
          Me(n, n.gzhead.extra.length >> 8 & 255);
        }
        if (n.gzhead.hcrc) {
          e.adler = V(e.adler, n.pending_buf, n.pending, 0);
        }
        n.gzindex = 0;
        n.status = 69;
      } else {
        Me(n, 0);
        Me(n, 0);
        Me(n, 0);
        Me(n, 0);
        Me(n, 0);
        Me(n, n.level === 9 ? 2 : n.strategy >= ce || n.level < 2 ? 4 : 0);
        Me(n, 3);
        n.status = ve;
        Te(e);
        if (n.pending !== 0) {
          n.last_flush = -1;
          return ne;
        }
      }
    }
    if (n.status === 69) {
      if (n.gzhead.extra) {
        let t = n.pending;
        let i = (n.gzhead.extra.length & 65535) - n.gzindex;
        while (n.pending + i > n.pending_buf_size) {
          let r = n.pending_buf_size - n.pending;
          n.pending_buf.set(n.gzhead.extra.subarray(n.gzindex, n.gzindex + r), n.pending);
          n.pending = n.pending_buf_size;
          if (n.gzhead.hcrc && n.pending > t) {
            e.adler = V(e.adler, n.pending_buf, n.pending - t, t);
          }
          n.gzindex += r;
          Te(e);
          if (n.pending !== 0) {
            n.last_flush = -1;
            return ne;
          }
          t = 0;
          i -= r;
        }
        let r = new Uint8Array(n.gzhead.extra);
        n.pending_buf.set(r.subarray(n.gzindex, n.gzindex + i), n.pending);
        n.pending += i;
        if (n.gzhead.hcrc && n.pending > t) {
          e.adler = V(e.adler, n.pending_buf, n.pending - t, t);
        }
        n.gzindex = 0;
      }
      n.status = 73;
    }
    if (n.status === 73) {
      if (n.gzhead.name) {
        let t;
        let i = n.pending;
        do {
          if (n.pending === n.pending_buf_size) {
            if (n.gzhead.hcrc && n.pending > i) {
              e.adler = V(e.adler, n.pending_buf, n.pending - i, i);
            }
            Te(e);
            if (n.pending !== 0) {
              n.last_flush = -1;
              return ne;
            }
            i = 0;
          }
          t = n.gzindex < n.gzhead.name.length ? n.gzhead.name.charCodeAt(n.gzindex++) & 255 : 0;
          Me(n, t);
        } while (t !== 0);
        if (n.gzhead.hcrc && n.pending > i) {
          e.adler = V(e.adler, n.pending_buf, n.pending - i, i);
        }
        n.gzindex = 0;
      }
      n.status = 91;
    }
    if (n.status === 91) {
      if (n.gzhead.comment) {
        let t;
        let i = n.pending;
        do {
          if (n.pending === n.pending_buf_size) {
            if (n.gzhead.hcrc && n.pending > i) {
              e.adler = V(e.adler, n.pending_buf, n.pending - i, i);
            }
            Te(e);
            if (n.pending !== 0) {
              n.last_flush = -1;
              return ne;
            }
            i = 0;
          }
          t = n.gzindex < n.gzhead.comment.length ? n.gzhead.comment.charCodeAt(n.gzindex++) & 255 : 0;
          Me(n, t);
        } while (t !== 0);
        if (n.gzhead.hcrc && n.pending > i) {
          e.adler = V(e.adler, n.pending_buf, n.pending - i, i);
        }
      }
      n.status = 103;
    }
    if (n.status === 103) {
      if (n.gzhead.hcrc) {
        if (n.pending + 2 > n.pending_buf_size && (Te(e), n.pending !== 0)) {
          n.last_flush = -1;
          return ne;
        }
        Me(n, e.adler & 255);
        Me(n, e.adler >> 8 & 255);
        e.adler = 0;
      }
      n.status = ve;
      Te(e);
      if (n.pending !== 0) {
        n.last_flush = -1;
        return ne;
      }
    }
    if (e.avail_in !== 0 || n.lookahead !== 0 || t !== Y && n.status !== be) {
      let i = n.level === 0 ? Ie(n, t) : n.strategy === ce ? ((e, t) => {
        let n;
        while (true) {
          if (e.lookahead === 0 && (Pe(e), e.lookahead === 0)) {
            if (t === Y) {
              return 1;
            }
            break;
          }
          e.match_length = 0;
          n = J(e, 0, e.window[e.strstart]);
          e.lookahead--;
          e.strstart++;
          if (n && (Ee(e, false), e.strm.avail_out === 0)) {
            return 1;
          }
        }
        e.insert = 0;
        if (t === ee) {
          Ee(e, true);
          if (e.strm.avail_out === 0) {
            return 3;
          } else {
            return 4;
          }
        } else if (e.sym_next && (Ee(e, false), e.strm.avail_out === 0)) {
          return 1;
        } else {
          return 2;
        }
      })(n, t) : n.strategy === he ? ((e, t) => {
        let n;
        let i;
        let r;
        let a;
        const s = e.window;
        while (true) {
          if (e.lookahead <= ge) {
            Pe(e);
            if (e.lookahead <= ge && t === Y) {
              return 1;
            }
            if (e.lookahead === 0) {
              break;
            }
          }
          e.match_length = 0;
          if (e.lookahead >= 3 && e.strstart > 0 && (r = e.strstart - 1, i = s[r], i === s[++r] && i === s[++r] && i === s[++r])) {
            a = e.strstart + ge;
            do {} while (i === s[++r] && i === s[++r] && i === s[++r] && i === s[++r] && i === s[++r] && i === s[++r] && i === s[++r] && i === s[++r] && r < a);
            e.match_length = ge - (a - r);
            if (e.match_length > e.lookahead) {
              e.match_length = e.lookahead;
            }
          }
          if (e.match_length >= 3) {
            n = J(e, 1, e.match_length - 3);
            e.lookahead -= e.match_length;
            e.strstart += e.match_length;
            e.match_length = 0;
          } else {
            n = J(e, 0, e.window[e.strstart]);
            e.lookahead--;
            e.strstart++;
          }
          if (n && (Ee(e, false), e.strm.avail_out === 0)) {
            return 1;
          }
        }
        e.insert = 0;
        if (t === ee) {
          Ee(e, true);
          if (e.strm.avail_out === 0) {
            return 3;
          } else {
            return 4;
          }
        } else if (e.sym_next && (Ee(e, false), e.strm.avail_out === 0)) {
          return 1;
        } else {
          return 2;
        }
      })(n, t) : ze[n.level].func(n, t);
      if (i === 3 || i === 4) {
        n.status = be;
      }
      if (i === 1 || i === 3) {
        if (e.avail_out === 0) {
          n.last_flush = -1;
        }
        return ne;
      }
      if (i === 2 && (t === Z ? X(n) : t !== te && (q(n, 0, 0, false), t === $ && (xe(n.head), n.lookahead === 0 && (n.strstart = 0, n.block_start = 0, n.insert = 0))), Te(e), e.avail_out === 0)) {
        n.last_flush = -1;
        return ne;
      }
    }
    if (t !== ee) {
      return ne;
    } else if (n.wrap <= 0) {
      return ie;
    } else {
      if (n.wrap === 2) {
        Me(n, e.adler & 255);
        Me(n, e.adler >> 8 & 255);
        Me(n, e.adler >> 16 & 255);
        Me(n, e.adler >> 24 & 255);
        Me(n, e.total_in & 255);
        Me(n, e.total_in >> 8 & 255);
        Me(n, e.total_in >> 16 & 255);
        Me(n, e.total_in >> 24 & 255);
      } else {
        _e(n, e.adler >>> 16);
        _e(n, e.adler & 65535);
      }
      Te(e);
      if (n.wrap > 0) {
        n.wrap = -n.wrap;
      }
      if (n.pending !== 0) {
        return ne;
      } else {
        return ie;
      }
    }
  },
  deflateEnd: e => {
    if (Be(e)) {
      return re;
    }
    const t = e.state.status;
    e.state = null;
    if (t === ve) {
      return ye(e, ae);
    } else {
      return ne;
    }
  },
  deflateSetDictionary: (e, t) => {
    let n = t.length;
    if (Be(e)) {
      return re;
    }
    const i = e.state;
    const r = i.wrap;
    if (r === 2 || r === 1 && i.status !== Ae || i.lookahead) {
      return re;
    }
    if (r === 1) {
      e.adler = O(e.adler, t, n, 0);
    }
    i.wrap = 0;
    if (n >= i.w_size) {
      if (r === 0) {
        xe(i.head);
        i.strstart = 0;
        i.block_start = 0;
        i.insert = 0;
      }
      let e = new Uint8Array(i.w_size);
      e.set(t.subarray(n - i.w_size, n), 0);
      t = e;
      n = i.w_size;
    }
    const a = e.avail_in;
    const s = e.next_in;
    const o = e.input;
    e.avail_in = n;
    e.next_in = 0;
    e.input = t;
    Pe(i);
    while (i.lookahead >= 3) {
      let e = i.strstart;
      let t = i.lookahead - 2;
      do {
        i.ins_h = ke(i, i.ins_h, i.window[e + 3 - 1]);
        i.prev[e & i.w_mask] = i.head[i.ins_h];
        i.head[i.ins_h] = e;
        e++;
      } while (--t);
      i.strstart = e;
      i.lookahead = 2;
      Pe(i);
    }
    i.strstart += i.lookahead;
    i.block_start = i.strstart;
    i.insert = i.lookahead;
    i.lookahead = 0;
    i.match_length = i.prev_length = 2;
    i.match_available = 0;
    e.next_in = s;
    e.input = o;
    e.avail_in = a;
    i.wrap = r;
    return ne;
  },
  deflateInfo: "pako deflate (from Nodeca project)"
};
const Ve = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
function He(e) {
  const t = Array.prototype.slice.call(arguments, 1);
  while (t.length) {
    const n = t.shift();
    if (n) {
      if (typeof n != "object") {
        throw new TypeError(n + "must be non-object");
      }
      for (const t in n) {
        if (Ve(n, t)) {
          e[t] = n[t];
        }
      }
    }
  }
  return e;
}
var je = e => {
  let t = 0;
  for (let n = 0, i = e.length; n < i; n++) {
    t += e[n].length;
  }
  const n = new Uint8Array(t);
  for (let t = 0, i = 0, r = e.length; t < r; t++) {
    let r = e[t];
    n.set(r, i);
    i += r.length;
  }
  return n;
};
let Ke = true;
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch (e) {
  Ke = false;
}
const qe = new Uint8Array(256);
for (let e = 0; e < 256; e++) {
  qe[e] = e >= 252 ? 6 : e >= 248 ? 5 : e >= 240 ? 4 : e >= 224 ? 3 : e >= 192 ? 2 : 1;
}
qe[254] = qe[254] = 1;
var Qe = e => {
  if (typeof TextEncoder == "function" && TextEncoder.prototype.encode) {
    return new TextEncoder().encode(e);
  }
  let t;
  let n;
  let i;
  let r;
  let a;
  let s = e.length;
  let o = 0;
  for (r = 0; r < s; r++) {
    n = e.charCodeAt(r);
    if ((n & 64512) == 55296 && r + 1 < s) {
      i = e.charCodeAt(r + 1);
      if ((i & 64512) == 56320) {
        n = 65536 + (n - 55296 << 10) + (i - 56320);
        r++;
      }
    }
    o += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
  }
  t = new Uint8Array(o);
  a = 0;
  r = 0;
  for (; a < o; r++) {
    n = e.charCodeAt(r);
    if ((n & 64512) == 55296 && r + 1 < s) {
      i = e.charCodeAt(r + 1);
      if ((i & 64512) == 56320) {
        n = 65536 + (n - 55296 << 10) + (i - 56320);
        r++;
      }
    }
    if (n < 128) {
      t[a++] = n;
    } else if (n < 2048) {
      t[a++] = n >>> 6 | 192;
      t[a++] = n & 63 | 128;
    } else if (n < 65536) {
      t[a++] = n >>> 12 | 224;
      t[a++] = n >>> 6 & 63 | 128;
      t[a++] = n & 63 | 128;
    } else {
      t[a++] = n >>> 18 | 240;
      t[a++] = n >>> 12 & 63 | 128;
      t[a++] = n >>> 6 & 63 | 128;
      t[a++] = n & 63 | 128;
    }
  }
  return t;
};
var Je = (e, t) => {
  const n = t || e.length;
  if (typeof TextDecoder == "function" && TextDecoder.prototype.decode) {
    return new TextDecoder().decode(e.subarray(0, t));
  }
  let i;
  let r;
  const a = new Array(n * 2);
  r = 0;
  i = 0;
  while (i < n) {
    let t = e[i++];
    if (t < 128) {
      a[r++] = t;
      continue;
    }
    let s = qe[t];
    if (s > 4) {
      a[r++] = 65533;
      i += s - 1;
    } else {
      for (t &= s === 2 ? 31 : s === 3 ? 15 : 7; s > 1 && i < n;) {
        t = t << 6 | e[i++] & 63;
        s--;
      }
      if (s > 1) {
        a[r++] = 65533;
      } else if (t < 65536) {
        a[r++] = t;
      } else {
        t -= 65536;
        a[r++] = t >> 10 & 1023 | 55296;
        a[r++] = t & 1023 | 56320;
      }
    }
  }
  return ((e, t) => {
    if (t < 65534 && e.subarray && Ke) {
      return String.fromCharCode.apply(null, e.length === t ? e : e.subarray(0, t));
    }
    let n = "";
    for (let i = 0; i < t; i++) {
      n += String.fromCharCode(e[i]);
    }
    return n;
  })(a, r);
};
var Xe = (e, t) => {
  if ((t = t || e.length) > e.length) {
    t = e.length;
  }
  let n = t - 1;
  while (n >= 0 && (e[n] & 192) == 128) {
    n--;
  }
  if (n < 0 || n === 0) {
    return t;
  } else if (n + qe[e[n]] > t) {
    return n;
  } else {
    return t;
  }
};
function Ye() {
  this.input = null;
  this.next_in = 0;
  this.avail_in = 0;
  this.total_in = 0;
  this.output = null;
  this.next_out = 0;
  this.avail_out = 0;
  this.total_out = 0;
  this.msg = "";
  this.state = null;
  this.data_type = 2;
  this.adler = 0;
}
const Ze = Object.prototype.toString;
const {
  Z_NO_FLUSH: $e,
  Z_SYNC_FLUSH: et,
  Z_FULL_FLUSH: tt,
  Z_FINISH: nt,
  Z_OK: it,
  Z_STREAM_END: rt,
  Z_DEFAULT_COMPRESSION: at,
  Z_DEFAULT_STRATEGY: st,
  Z_DEFLATED: ot
} = j;
function lt(e) {
  this.options = He({
    level: at,
    method: ot,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: st
  }, e || {});
  let t = this.options;
  if (t.raw && t.windowBits > 0) {
    t.windowBits = -t.windowBits;
  } else if (t.gzip && t.windowBits > 0 && t.windowBits < 16) {
    t.windowBits += 16;
  }
  this.err = 0;
  this.msg = "";
  this.ended = false;
  this.chunks = [];
  this.strm = new Ye();
  this.strm.avail_out = 0;
  let n = We.deflateInit2(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy);
  if (n !== it) {
    throw new Error(H[n]);
  }
  if (t.header) {
    We.deflateSetHeader(this.strm, t.header);
  }
  if (t.dictionary) {
    let e;
    e = typeof t.dictionary == "string" ? Qe(t.dictionary) : Ze.call(t.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(t.dictionary) : t.dictionary;
    n = We.deflateSetDictionary(this.strm, e);
    if (n !== it) {
      throw new Error(H[n]);
    }
    this._dict_set = true;
  }
}
function ct(e, t) {
  const n = new lt(t);
  n.push(e, true);
  if (n.err) {
    throw n.msg || H[n.err];
  }
  return n.result;
}
lt.prototype.push = function (e, t) {
  const n = this.strm;
  const i = this.options.chunkSize;
  let r;
  let a;
  if (this.ended) {
    return false;
  }
  a = t === ~~t ? t : t === true ? nt : $e;
  if (typeof e == "string") {
    n.input = Qe(e);
  } else if (Ze.call(e) === "[object ArrayBuffer]") {
    n.input = new Uint8Array(e);
  } else {
    n.input = e;
  }
  n.next_in = 0;
  n.avail_in = n.input.length;
  while (true) {
    if (n.avail_out === 0) {
      n.output = new Uint8Array(i);
      n.next_out = 0;
      n.avail_out = i;
    }
    if ((a === et || a === tt) && n.avail_out <= 6) {
      this.onData(n.output.subarray(0, n.next_out));
      n.avail_out = 0;
    } else {
      r = We.deflate(n, a);
      if (r === rt) {
        if (n.next_out > 0) {
          this.onData(n.output.subarray(0, n.next_out));
        }
        r = We.deflateEnd(this.strm);
        this.onEnd(r);
        this.ended = true;
        return r === it;
      }
      if (n.avail_out !== 0) {
        if (a > 0 && n.next_out > 0) {
          this.onData(n.output.subarray(0, n.next_out));
          n.avail_out = 0;
        } else if (n.avail_in === 0) {
          break;
        }
      } else {
        this.onData(n.output);
      }
    }
  }
  return true;
};
lt.prototype.onData = function (e) {
  this.chunks.push(e);
};
lt.prototype.onEnd = function (e) {
  if (e === it) {
    this.result = je(this.chunks);
  }
  this.chunks = [];
  this.err = e;
  this.msg = this.strm.msg;
};
var ht = {
  Deflate: lt,
  deflate: ct,
  deflateRaw: function (e, t) {
    (t = t || {}).raw = true;
    return ct(e, t);
  },
  gzip: function (e, t) {
    (t = t || {}).gzip = true;
    return ct(e, t);
  },
  constants: j
};
const dt = 16209;
function ut(e, t) {
  let n;
  let i;
  let r;
  let a;
  let s;
  let o;
  let l;
  let c;
  let h;
  let d;
  let u;
  let f;
  let p;
  let g;
  let m;
  let A;
  let v;
  let b;
  let y;
  let w;
  let x;
  let S;
  let k;
  let T;
  const E = e.state;
  n = e.next_in;
  k = e.input;
  i = n + (e.avail_in - 5);
  r = e.next_out;
  T = e.output;
  a = r - (t - e.avail_out);
  s = r + (e.avail_out - 257);
  o = E.dmax;
  l = E.wsize;
  c = E.whave;
  h = E.wnext;
  d = E.window;
  u = E.hold;
  f = E.bits;
  p = E.lencode;
  g = E.distcode;
  m = (1 << E.lenbits) - 1;
  A = (1 << E.distbits) - 1;
  e: do {
    if (f < 15) {
      u += k[n++] << f;
      f += 8;
      u += k[n++] << f;
      f += 8;
    }
    v = p[u & m];
    t: while (true) {
      b = v >>> 24;
      u >>>= b;
      f -= b;
      b = v >>> 16 & 255;
      if (b === 0) {
        T[r++] = v & 65535;
      } else {
        if (!(b & 16)) {
          if (b & 64) {
            if (b & 32) {
              E.mode = 16191;
              break e;
            }
            e.msg = "invalid literal/length code";
            E.mode = dt;
            break e;
          }
          v = p[(v & 65535) + (u & (1 << b) - 1)];
          continue t;
        }
        y = v & 65535;
        b &= 15;
        if (b) {
          if (f < b) {
            u += k[n++] << f;
            f += 8;
          }
          y += u & (1 << b) - 1;
          u >>>= b;
          f -= b;
        }
        if (f < 15) {
          u += k[n++] << f;
          f += 8;
          u += k[n++] << f;
          f += 8;
        }
        v = g[u & A];
        while (true) {
          b = v >>> 24;
          u >>>= b;
          f -= b;
          b = v >>> 16 & 255;
          if (b & 16) {
            w = v & 65535;
            b &= 15;
            if (f < b) {
              u += k[n++] << f;
              f += 8;
              if (f < b) {
                u += k[n++] << f;
                f += 8;
              }
            }
            w += u & (1 << b) - 1;
            if (w > o) {
              e.msg = "invalid distance too far back";
              E.mode = dt;
              break e;
            }
            u >>>= b;
            f -= b;
            b = r - a;
            if (w > b) {
              b = w - b;
              if (b > c && E.sane) {
                e.msg = "invalid distance too far back";
                E.mode = dt;
                break e;
              }
              x = 0;
              S = d;
              if (h === 0) {
                x += l - b;
                if (b < y) {
                  y -= b;
                  do {
                    T[r++] = d[x++];
                  } while (--b);
                  x = r - w;
                  S = T;
                }
              } else if (h < b) {
                x += l + h - b;
                b -= h;
                if (b < y) {
                  y -= b;
                  do {
                    T[r++] = d[x++];
                  } while (--b);
                  x = 0;
                  if (h < y) {
                    b = h;
                    y -= b;
                    do {
                      T[r++] = d[x++];
                    } while (--b);
                    x = r - w;
                    S = T;
                  }
                }
              } else {
                x += h - b;
                if (b < y) {
                  y -= b;
                  do {
                    T[r++] = d[x++];
                  } while (--b);
                  x = r - w;
                  S = T;
                }
              }
              while (y > 2) {
                T[r++] = S[x++];
                T[r++] = S[x++];
                T[r++] = S[x++];
                y -= 3;
              }
              if (y) {
                T[r++] = S[x++];
                if (y > 1) {
                  T[r++] = S[x++];
                }
              }
            } else {
              x = r - w;
              do {
                T[r++] = T[x++];
                T[r++] = T[x++];
                T[r++] = T[x++];
                y -= 3;
              } while (y > 2);
              if (y) {
                T[r++] = T[x++];
                if (y > 1) {
                  T[r++] = T[x++];
                }
              }
            }
            break;
          }
          if (b & 64) {
            e.msg = "invalid distance code";
            E.mode = dt;
            break e;
          }
          v = g[(v & 65535) + (u & (1 << b) - 1)];
        }
      }
      break;
    }
  } while (n < i && r < s);
  y = f >> 3;
  n -= y;
  f -= y << 3;
  u &= (1 << f) - 1;
  e.next_in = n;
  e.next_out = r;
  e.avail_in = n < i ? i - n + 5 : 5 - (n - i);
  e.avail_out = r < s ? s - r + 257 : 257 - (r - s);
  E.hold = u;
  E.bits = f;
}
const ft = 15;
const pt = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]);
const gt = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]);
const mt = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]);
const At = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
var vt = (e, t, n, i, r, a, s, o) => {
  const l = o.bits;
  let c;
  let h;
  let d;
  let u;
  let f;
  let p;
  let g = 0;
  let m = 0;
  let A = 0;
  let v = 0;
  let b = 0;
  let y = 0;
  let w = 0;
  let x = 0;
  let S = 0;
  let k = 0;
  let T = null;
  const E = new Uint16Array(16);
  const M = new Uint16Array(16);
  let _;
  let C;
  let R;
  let P = null;
  for (g = 0; g <= ft; g++) {
    E[g] = 0;
  }
  for (m = 0; m < i; m++) {
    E[t[n + m]]++;
  }
  b = l;
  v = ft;
  for (; v >= 1 && E[v] === 0; v--);
  if (b > v) {
    b = v;
  }
  if (v === 0) {
    r[a++] = 20971520;
    r[a++] = 20971520;
    o.bits = 1;
    return 0;
  }
  for (A = 1; A < v && E[A] === 0; A++);
  if (b < A) {
    b = A;
  }
  x = 1;
  g = 1;
  for (; g <= ft; g++) {
    x <<= 1;
    x -= E[g];
    if (x < 0) {
      return -1;
    }
  }
  if (x > 0 && (e === 0 || v !== 1)) {
    return -1;
  }
  M[1] = 0;
  g = 1;
  for (; g < ft; g++) {
    M[g + 1] = M[g] + E[g];
  }
  for (m = 0; m < i; m++) {
    if (t[n + m] !== 0) {
      s[M[t[n + m]]++] = m;
    }
  }
  if (e === 0) {
    T = P = s;
    p = 20;
  } else if (e === 1) {
    T = pt;
    P = gt;
    p = 257;
  } else {
    T = mt;
    P = At;
    p = 0;
  }
  k = 0;
  m = 0;
  g = A;
  f = a;
  y = b;
  w = 0;
  d = -1;
  S = 1 << b;
  u = S - 1;
  if (e === 1 && S > 852 || e === 2 && S > 592) {
    return 1;
  }
  while (true) {
    _ = g - w;
    if (s[m] + 1 < p) {
      C = 0;
      R = s[m];
    } else if (s[m] >= p) {
      C = P[s[m] - p];
      R = T[s[m] - p];
    } else {
      C = 96;
      R = 0;
    }
    c = 1 << g - w;
    h = 1 << y;
    A = h;
    do {
      h -= c;
      r[f + (k >> w) + h] = _ << 24 | C << 16 | R;
    } while (h !== 0);
    for (c = 1 << g - 1; k & c;) {
      c >>= 1;
    }
    if (c !== 0) {
      k &= c - 1;
      k += c;
    } else {
      k = 0;
    }
    m++;
    if (--E[g] == 0) {
      if (g === v) {
        break;
      }
      g = t[n + s[m]];
    }
    if (g > b && (k & u) !== d) {
      if (w === 0) {
        w = b;
      }
      f += A;
      y = g - w;
      x = 1 << y;
      while (y + w < v && (x -= E[y + w], !(x <= 0))) {
        y++;
        x <<= 1;
      }
      S += 1 << y;
      if (e === 1 && S > 852 || e === 2 && S > 592) {
        return 1;
      }
      d = k & u;
      r[d] = b << 24 | y << 16 | f - a;
    }
  }
  if (k !== 0) {
    r[f + k] = g - w << 24 | 4194304;
  }
  o.bits = b;
  return 0;
};
const {
  Z_FINISH: bt,
  Z_BLOCK: yt,
  Z_TREES: wt,
  Z_OK: xt,
  Z_STREAM_END: St,
  Z_NEED_DICT: kt,
  Z_STREAM_ERROR: Tt,
  Z_DATA_ERROR: Et,
  Z_MEM_ERROR: Mt,
  Z_BUF_ERROR: _t,
  Z_DEFLATED: Ct
} = j;
const Rt = 16180;
const Pt = 16190;
const It = 16191;
const Lt = 16192;
const Ut = 16194;
const Nt = 16199;
const zt = 16200;
const Dt = 16206;
const Bt = 16209;
const Gt = e => (e >>> 24 & 255) + (e >>> 8 & 65280) + ((e & 65280) << 8) + ((e & 255) << 24);
function Ft() {
  this.strm = null;
  this.mode = 0;
  this.last = false;
  this.wrap = 0;
  this.havedict = false;
  this.flags = 0;
  this.dmax = 0;
  this.check = 0;
  this.total = 0;
  this.head = null;
  this.wbits = 0;
  this.wsize = 0;
  this.whave = 0;
  this.wnext = 0;
  this.window = null;
  this.hold = 0;
  this.bits = 0;
  this.length = 0;
  this.offset = 0;
  this.extra = 0;
  this.lencode = null;
  this.distcode = null;
  this.lenbits = 0;
  this.distbits = 0;
  this.ncode = 0;
  this.nlen = 0;
  this.ndist = 0;
  this.have = 0;
  this.next = null;
  this.lens = new Uint16Array(320);
  this.work = new Uint16Array(288);
  this.lendyn = null;
  this.distdyn = null;
  this.sane = 0;
  this.back = 0;
  this.was = 0;
}
const Ot = e => {
  if (!e) {
    return 1;
  }
  const t = e.state;
  if (!t || t.strm !== e || t.mode < Rt || t.mode > 16211) {
    return 1;
  } else {
    return 0;
  }
};
const Wt = e => {
  if (Ot(e)) {
    return Tt;
  }
  const t = e.state;
  e.total_in = e.total_out = t.total = 0;
  e.msg = "";
  if (t.wrap) {
    e.adler = t.wrap & 1;
  }
  t.mode = Rt;
  t.last = 0;
  t.havedict = 0;
  t.flags = -1;
  t.dmax = 32768;
  t.head = null;
  t.hold = 0;
  t.bits = 0;
  t.lencode = t.lendyn = new Int32Array(852);
  t.distcode = t.distdyn = new Int32Array(592);
  t.sane = 1;
  t.back = -1;
  return xt;
};
const Vt = e => {
  if (Ot(e)) {
    return Tt;
  }
  const t = e.state;
  t.wsize = 0;
  t.whave = 0;
  t.wnext = 0;
  return Wt(e);
};
const Ht = (e, t) => {
  let n;
  if (Ot(e)) {
    return Tt;
  }
  const i = e.state;
  if (t < 0) {
    n = 0;
    t = -t;
  } else {
    n = 5 + (t >> 4);
    if (t < 48) {
      t &= 15;
    }
  }
  if (t && (t < 8 || t > 15)) {
    return Tt;
  } else {
    if (i.window !== null && i.wbits !== t) {
      i.window = null;
    }
    i.wrap = n;
    i.wbits = t;
    return Vt(e);
  }
};
const jt = (e, t) => {
  if (!e) {
    return Tt;
  }
  const n = new Ft();
  e.state = n;
  n.strm = e;
  n.window = null;
  n.mode = Rt;
  const i = Ht(e, t);
  if (i !== xt) {
    e.state = null;
  }
  return i;
};
let Kt;
let qt;
let Qt = true;
const Jt = e => {
  if (Qt) {
    Kt = new Int32Array(512);
    qt = new Int32Array(32);
    let t = 0;
    while (t < 144) {
      e.lens[t++] = 8;
    }
    while (t < 256) {
      e.lens[t++] = 9;
    }
    while (t < 280) {
      e.lens[t++] = 7;
    }
    while (t < 288) {
      e.lens[t++] = 8;
    }
    vt(1, e.lens, 0, 288, Kt, 0, e.work, {
      bits: 9
    });
    t = 0;
    while (t < 32) {
      e.lens[t++] = 5;
    }
    vt(2, e.lens, 0, 32, qt, 0, e.work, {
      bits: 5
    });
    Qt = false;
  }
  e.lencode = Kt;
  e.lenbits = 9;
  e.distcode = qt;
  e.distbits = 5;
};
const Xt = (e, t, n, i) => {
  let r;
  const a = e.state;
  if (a.window === null) {
    a.wsize = 1 << a.wbits;
    a.wnext = 0;
    a.whave = 0;
    a.window = new Uint8Array(a.wsize);
  }
  if (i >= a.wsize) {
    a.window.set(t.subarray(n - a.wsize, n), 0);
    a.wnext = 0;
    a.whave = a.wsize;
  } else {
    r = a.wsize - a.wnext;
    if (r > i) {
      r = i;
    }
    a.window.set(t.subarray(n - i, n - i + r), a.wnext);
    if (i -= r) {
      a.window.set(t.subarray(n - i, n), 0);
      a.wnext = i;
      a.whave = a.wsize;
    } else {
      a.wnext += r;
      if (a.wnext === a.wsize) {
        a.wnext = 0;
      }
      if (a.whave < a.wsize) {
        a.whave += r;
      }
    }
  }
  return 0;
};
var Yt = {
  inflateReset: Vt,
  inflateReset2: Ht,
  inflateResetKeep: Wt,
  inflateInit: e => jt(e, 15),
  inflateInit2: jt,
  inflate: (e, t) => {
    let n;
    let i;
    let r;
    let a;
    let s;
    let o;
    let l;
    let c;
    let h;
    let d;
    let u;
    let f;
    let p;
    let g;
    let m;
    let A;
    let v;
    let b;
    let y;
    let w;
    let x;
    let S;
    let k = 0;
    const T = new Uint8Array(4);
    let E;
    let M;
    const _ = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
    if (Ot(e) || !e.output || !e.input && e.avail_in !== 0) {
      return Tt;
    }
    n = e.state;
    if (n.mode === It) {
      n.mode = Lt;
    }
    s = e.next_out;
    r = e.output;
    l = e.avail_out;
    a = e.next_in;
    i = e.input;
    o = e.avail_in;
    c = n.hold;
    h = n.bits;
    d = o;
    u = l;
    S = xt;
    e: while (true) {
      switch (n.mode) {
        case Rt:
          if (n.wrap === 0) {
            n.mode = Lt;
            break;
          }
          while (h < 16) {
            if (o === 0) {
              break e;
            }
            o--;
            c += i[a++] << h;
            h += 8;
          }
          if (n.wrap & 2 && c === 35615) {
            if (n.wbits === 0) {
              n.wbits = 15;
            }
            n.check = 0;
            T[0] = c & 255;
            T[1] = c >>> 8 & 255;
            n.check = V(n.check, T, 2, 0);
            c = 0;
            h = 0;
            n.mode = 16181;
            break;
          }
          if (n.head) {
            n.head.done = false;
          }
          if (!(n.wrap & 1) || (((c & 255) << 8) + (c >> 8)) % 31) {
            e.msg = "incorrect header check";
            n.mode = Bt;
            break;
          }
          if ((c & 15) !== Ct) {
            e.msg = "unknown compression method";
            n.mode = Bt;
            break;
          }
          c >>>= 4;
          h -= 4;
          x = 8 + (c & 15);
          if (n.wbits === 0) {
            n.wbits = x;
          }
          if (x > 15 || x > n.wbits) {
            e.msg = "invalid window size";
            n.mode = Bt;
            break;
          }
          n.dmax = 1 << n.wbits;
          n.flags = 0;
          e.adler = n.check = 1;
          n.mode = c & 512 ? 16189 : It;
          c = 0;
          h = 0;
          break;
        case 16181:
          while (h < 16) {
            if (o === 0) {
              break e;
            }
            o--;
            c += i[a++] << h;
            h += 8;
          }
          n.flags = c;
          if ((n.flags & 255) !== Ct) {
            e.msg = "unknown compression method";
            n.mode = Bt;
            break;
          }
          if (n.flags & 57344) {
            e.msg = "unknown header flags set";
            n.mode = Bt;
            break;
          }
          if (n.head) {
            n.head.text = c >> 8 & 1;
          }
          if (n.flags & 512 && n.wrap & 4) {
            T[0] = c & 255;
            T[1] = c >>> 8 & 255;
            n.check = V(n.check, T, 2, 0);
          }
          c = 0;
          h = 0;
          n.mode = 16182;
        case 16182:
          while (h < 32) {
            if (o === 0) {
              break e;
            }
            o--;
            c += i[a++] << h;
            h += 8;
          }
          if (n.head) {
            n.head.time = c;
          }
          if (n.flags & 512 && n.wrap & 4) {
            T[0] = c & 255;
            T[1] = c >>> 8 & 255;
            T[2] = c >>> 16 & 255;
            T[3] = c >>> 24 & 255;
            n.check = V(n.check, T, 4, 0);
          }
          c = 0;
          h = 0;
          n.mode = 16183;
        case 16183:
          while (h < 16) {
            if (o === 0) {
              break e;
            }
            o--;
            c += i[a++] << h;
            h += 8;
          }
          if (n.head) {
            n.head.xflags = c & 255;
            n.head.os = c >> 8;
          }
          if (n.flags & 512 && n.wrap & 4) {
            T[0] = c & 255;
            T[1] = c >>> 8 & 255;
            n.check = V(n.check, T, 2, 0);
          }
          c = 0;
          h = 0;
          n.mode = 16184;
        case 16184:
          if (n.flags & 1024) {
            while (h < 16) {
              if (o === 0) {
                break e;
              }
              o--;
              c += i[a++] << h;
              h += 8;
            }
            n.length = c;
            if (n.head) {
              n.head.extra_len = c;
            }
            if (n.flags & 512 && n.wrap & 4) {
              T[0] = c & 255;
              T[1] = c >>> 8 & 255;
              n.check = V(n.check, T, 2, 0);
            }
            c = 0;
            h = 0;
          } else if (n.head) {
            n.head.extra = null;
          }
          n.mode = 16185;
        case 16185:
          if (n.flags & 1024 && (f = n.length, f > o && (f = o), f && (n.head && (x = n.head.extra_len - n.length, n.head.extra ||= new Uint8Array(n.head.extra_len), n.head.extra.set(i.subarray(a, a + f), x)), n.flags & 512 && n.wrap & 4 && (n.check = V(n.check, i, f, a)), o -= f, a += f, n.length -= f), n.length)) {
            break e;
          }
          n.length = 0;
          n.mode = 16186;
        case 16186:
          if (n.flags & 2048) {
            if (o === 0) {
              break e;
            }
            f = 0;
            do {
              x = i[a + f++];
              if (n.head && x && n.length < 65536) {
                n.head.name += String.fromCharCode(x);
              }
            } while (x && f < o);
            if (n.flags & 512 && n.wrap & 4) {
              n.check = V(n.check, i, f, a);
            }
            o -= f;
            a += f;
            if (x) {
              break e;
            }
          } else if (n.head) {
            n.head.name = null;
          }
          n.length = 0;
          n.mode = 16187;
        case 16187:
          if (n.flags & 4096) {
            if (o === 0) {
              break e;
            }
            f = 0;
            do {
              x = i[a + f++];
              if (n.head && x && n.length < 65536) {
                n.head.comment += String.fromCharCode(x);
              }
            } while (x && f < o);
            if (n.flags & 512 && n.wrap & 4) {
              n.check = V(n.check, i, f, a);
            }
            o -= f;
            a += f;
            if (x) {
              break e;
            }
          } else if (n.head) {
            n.head.comment = null;
          }
          n.mode = 16188;
        case 16188:
          if (n.flags & 512) {
            while (h < 16) {
              if (o === 0) {
                break e;
              }
              o--;
              c += i[a++] << h;
              h += 8;
            }
            if (n.wrap & 4 && c !== (n.check & 65535)) {
              e.msg = "header crc mismatch";
              n.mode = Bt;
              break;
            }
            c = 0;
            h = 0;
          }
          if (n.head) {
            n.head.hcrc = n.flags >> 9 & 1;
            n.head.done = true;
          }
          e.adler = n.check = 0;
          n.mode = It;
          break;
        case 16189:
          while (h < 32) {
            if (o === 0) {
              break e;
            }
            o--;
            c += i[a++] << h;
            h += 8;
          }
          e.adler = n.check = Gt(c);
          c = 0;
          h = 0;
          n.mode = Pt;
        case Pt:
          if (n.havedict === 0) {
            e.next_out = s;
            e.avail_out = l;
            e.next_in = a;
            e.avail_in = o;
            n.hold = c;
            n.bits = h;
            return kt;
          }
          e.adler = n.check = 1;
          n.mode = It;
        case It:
          if (t === yt || t === wt) {
            break e;
          }
        case Lt:
          if (n.last) {
            c >>>= h & 7;
            h -= h & 7;
            n.mode = Dt;
            break;
          }
          while (h < 3) {
            if (o === 0) {
              break e;
            }
            o--;
            c += i[a++] << h;
            h += 8;
          }
          n.last = c & 1;
          c >>>= 1;
          h -= 1;
          switch (c & 3) {
            case 0:
              n.mode = 16193;
              break;
            case 1:
              Jt(n);
              n.mode = Nt;
              if (t === wt) {
                c >>>= 2;
                h -= 2;
                break e;
              }
              break;
            case 2:
              n.mode = 16196;
              break;
            case 3:
              e.msg = "invalid block type";
              n.mode = Bt;
          }
          c >>>= 2;
          h -= 2;
          break;
        case 16193:
          c >>>= h & 7;
          h -= h & 7;
          while (h < 32) {
            if (o === 0) {
              break e;
            }
            o--;
            c += i[a++] << h;
            h += 8;
          }
          if ((c & 65535) != (c >>> 16 ^ 65535)) {
            e.msg = "invalid stored block lengths";
            n.mode = Bt;
            break;
          }
          n.length = c & 65535;
          c = 0;
          h = 0;
          n.mode = Ut;
          if (t === wt) {
            break e;
          }
        case Ut:
          n.mode = 16195;
        case 16195:
          f = n.length;
          if (f) {
            if (f > o) {
              f = o;
            }
            if (f > l) {
              f = l;
            }
            if (f === 0) {
              break e;
            }
            r.set(i.subarray(a, a + f), s);
            o -= f;
            a += f;
            l -= f;
            s += f;
            n.length -= f;
            break;
          }
          n.mode = It;
          break;
        case 16196:
          while (h < 14) {
            if (o === 0) {
              break e;
            }
            o--;
            c += i[a++] << h;
            h += 8;
          }
          n.nlen = 257 + (c & 31);
          c >>>= 5;
          h -= 5;
          n.ndist = 1 + (c & 31);
          c >>>= 5;
          h -= 5;
          n.ncode = 4 + (c & 15);
          c >>>= 4;
          h -= 4;
          if (n.nlen > 286 || n.ndist > 30) {
            e.msg = "too many length or distance symbols";
            n.mode = Bt;
            break;
          }
          n.have = 0;
          n.mode = 16197;
        case 16197:
          while (n.have < n.ncode) {
            while (h < 3) {
              if (o === 0) {
                break e;
              }
              o--;
              c += i[a++] << h;
              h += 8;
            }
            n.lens[_[n.have++]] = c & 7;
            c >>>= 3;
            h -= 3;
          }
          while (n.have < 19) {
            n.lens[_[n.have++]] = 0;
          }
          n.lencode = n.lendyn;
          n.lenbits = 7;
          E = {
            bits: n.lenbits
          };
          S = vt(0, n.lens, 0, 19, n.lencode, 0, n.work, E);
          n.lenbits = E.bits;
          if (S) {
            e.msg = "invalid code lengths set";
            n.mode = Bt;
            break;
          }
          n.have = 0;
          n.mode = 16198;
        case 16198:
          while (n.have < n.nlen + n.ndist) {
            while (k = n.lencode[c & (1 << n.lenbits) - 1], m = k >>> 24, A = k >>> 16 & 255, v = k & 65535, !(m <= h)) {
              if (o === 0) {
                break e;
              }
              o--;
              c += i[a++] << h;
              h += 8;
            }
            if (v < 16) {
              c >>>= m;
              h -= m;
              n.lens[n.have++] = v;
            } else {
              if (v === 16) {
                for (M = m + 2; h < M;) {
                  if (o === 0) {
                    break e;
                  }
                  o--;
                  c += i[a++] << h;
                  h += 8;
                }
                c >>>= m;
                h -= m;
                if (n.have === 0) {
                  e.msg = "invalid bit length repeat";
                  n.mode = Bt;
                  break;
                }
                x = n.lens[n.have - 1];
                f = 3 + (c & 3);
                c >>>= 2;
                h -= 2;
              } else if (v === 17) {
                for (M = m + 3; h < M;) {
                  if (o === 0) {
                    break e;
                  }
                  o--;
                  c += i[a++] << h;
                  h += 8;
                }
                c >>>= m;
                h -= m;
                x = 0;
                f = 3 + (c & 7);
                c >>>= 3;
                h -= 3;
              } else {
                for (M = m + 7; h < M;) {
                  if (o === 0) {
                    break e;
                  }
                  o--;
                  c += i[a++] << h;
                  h += 8;
                }
                c >>>= m;
                h -= m;
                x = 0;
                f = 11 + (c & 127);
                c >>>= 7;
                h -= 7;
              }
              if (n.have + f > n.nlen + n.ndist) {
                e.msg = "invalid bit length repeat";
                n.mode = Bt;
                break;
              }
              while (f--) {
                n.lens[n.have++] = x;
              }
            }
          }
          if (n.mode === Bt) {
            break;
          }
          if (n.lens[256] === 0) {
            e.msg = "invalid code -- missing end-of-block";
            n.mode = Bt;
            break;
          }
          n.lenbits = 9;
          E = {
            bits: n.lenbits
          };
          S = vt(1, n.lens, 0, n.nlen, n.lencode, 0, n.work, E);
          n.lenbits = E.bits;
          if (S) {
            e.msg = "invalid literal/lengths set";
            n.mode = Bt;
            break;
          }
          n.distbits = 6;
          n.distcode = n.distdyn;
          E = {
            bits: n.distbits
          };
          S = vt(2, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, E);
          n.distbits = E.bits;
          if (S) {
            e.msg = "invalid distances set";
            n.mode = Bt;
            break;
          }
          n.mode = Nt;
          if (t === wt) {
            break e;
          }
        case Nt:
          n.mode = zt;
        case zt:
          if (o >= 6 && l >= 258) {
            e.next_out = s;
            e.avail_out = l;
            e.next_in = a;
            e.avail_in = o;
            n.hold = c;
            n.bits = h;
            ut(e, u);
            s = e.next_out;
            r = e.output;
            l = e.avail_out;
            a = e.next_in;
            i = e.input;
            o = e.avail_in;
            c = n.hold;
            h = n.bits;
            if (n.mode === It) {
              n.back = -1;
            }
            break;
          }
          for (n.back = 0; k = n.lencode[c & (1 << n.lenbits) - 1], m = k >>> 24, A = k >>> 16 & 255, v = k & 65535, !(m <= h);) {
            if (o === 0) {
              break e;
            }
            o--;
            c += i[a++] << h;
            h += 8;
          }
          if (A && !(A & 240)) {
            b = m;
            y = A;
            w = v;
            while (k = n.lencode[w + ((c & (1 << b + y) - 1) >> b)], m = k >>> 24, A = k >>> 16 & 255, v = k & 65535, !(b + m <= h)) {
              if (o === 0) {
                break e;
              }
              o--;
              c += i[a++] << h;
              h += 8;
            }
            c >>>= b;
            h -= b;
            n.back += b;
          }
          c >>>= m;
          h -= m;
          n.back += m;
          n.length = v;
          if (A === 0) {
            n.mode = 16205;
            break;
          }
          if (A & 32) {
            n.back = -1;
            n.mode = It;
            break;
          }
          if (A & 64) {
            e.msg = "invalid literal/length code";
            n.mode = Bt;
            break;
          }
          n.extra = A & 15;
          n.mode = 16201;
        case 16201:
          if (n.extra) {
            for (M = n.extra; h < M;) {
              if (o === 0) {
                break e;
              }
              o--;
              c += i[a++] << h;
              h += 8;
            }
            n.length += c & (1 << n.extra) - 1;
            c >>>= n.extra;
            h -= n.extra;
            n.back += n.extra;
          }
          n.was = n.length;
          n.mode = 16202;
        case 16202:
          while (k = n.distcode[c & (1 << n.distbits) - 1], m = k >>> 24, A = k >>> 16 & 255, v = k & 65535, !(m <= h)) {
            if (o === 0) {
              break e;
            }
            o--;
            c += i[a++] << h;
            h += 8;
          }
          if (!(A & 240)) {
            b = m;
            y = A;
            w = v;
            while (k = n.distcode[w + ((c & (1 << b + y) - 1) >> b)], m = k >>> 24, A = k >>> 16 & 255, v = k & 65535, !(b + m <= h)) {
              if (o === 0) {
                break e;
              }
              o--;
              c += i[a++] << h;
              h += 8;
            }
            c >>>= b;
            h -= b;
            n.back += b;
          }
          c >>>= m;
          h -= m;
          n.back += m;
          if (A & 64) {
            e.msg = "invalid distance code";
            n.mode = Bt;
            break;
          }
          n.offset = v;
          n.extra = A & 15;
          n.mode = 16203;
        case 16203:
          if (n.extra) {
            for (M = n.extra; h < M;) {
              if (o === 0) {
                break e;
              }
              o--;
              c += i[a++] << h;
              h += 8;
            }
            n.offset += c & (1 << n.extra) - 1;
            c >>>= n.extra;
            h -= n.extra;
            n.back += n.extra;
          }
          if (n.offset > n.dmax) {
            e.msg = "invalid distance too far back";
            n.mode = Bt;
            break;
          }
          n.mode = 16204;
        case 16204:
          if (l === 0) {
            break e;
          }
          f = u - l;
          if (n.offset > f) {
            f = n.offset - f;
            if (f > n.whave && n.sane) {
              e.msg = "invalid distance too far back";
              n.mode = Bt;
              break;
            }
            if (f > n.wnext) {
              f -= n.wnext;
              p = n.wsize - f;
            } else {
              p = n.wnext - f;
            }
            if (f > n.length) {
              f = n.length;
            }
            g = n.window;
          } else {
            g = r;
            p = s - n.offset;
            f = n.length;
          }
          if (f > l) {
            f = l;
          }
          l -= f;
          n.length -= f;
          do {
            r[s++] = g[p++];
          } while (--f);
          if (n.length === 0) {
            n.mode = zt;
          }
          break;
        case 16205:
          if (l === 0) {
            break e;
          }
          r[s++] = n.length;
          l--;
          n.mode = zt;
          break;
        case Dt:
          if (n.wrap) {
            while (h < 32) {
              if (o === 0) {
                break e;
              }
              o--;
              c |= i[a++] << h;
              h += 8;
            }
            u -= l;
            e.total_out += u;
            n.total += u;
            if (n.wrap & 4 && u) {
              e.adler = n.check = n.flags ? V(n.check, r, u, s - u) : O(n.check, r, u, s - u);
            }
            u = l;
            if (n.wrap & 4 && (n.flags ? c : Gt(c)) !== n.check) {
              e.msg = "incorrect data check";
              n.mode = Bt;
              break;
            }
            c = 0;
            h = 0;
          }
          n.mode = 16207;
        case 16207:
          if (n.wrap && n.flags) {
            while (h < 32) {
              if (o === 0) {
                break e;
              }
              o--;
              c += i[a++] << h;
              h += 8;
            }
            if (n.wrap & 4 && c !== (n.total & -1)) {
              e.msg = "incorrect length check";
              n.mode = Bt;
              break;
            }
            c = 0;
            h = 0;
          }
          n.mode = 16208;
        case 16208:
          S = St;
          break e;
        case Bt:
          S = Et;
          break e;
        case 16210:
          return Mt;
        default:
          return Tt;
      }
    }
    e.next_out = s;
    e.avail_out = l;
    e.next_in = a;
    e.avail_in = o;
    n.hold = c;
    n.bits = h;
    if (n.wsize || u !== e.avail_out && n.mode < Bt && (n.mode < Dt || t !== bt)) {
      Xt(e, e.output, e.next_out, u - e.avail_out);
    }
    d -= e.avail_in;
    u -= e.avail_out;
    e.total_in += d;
    e.total_out += u;
    n.total += u;
    if (n.wrap & 4 && u) {
      e.adler = n.check = n.flags ? V(n.check, r, u, e.next_out - u) : O(n.check, r, u, e.next_out - u);
    }
    e.data_type = n.bits + (n.last ? 64 : 0) + (n.mode === It ? 128 : 0) + (n.mode === Nt || n.mode === Ut ? 256 : 0);
    if ((d === 0 && u === 0 || t === bt) && S === xt) {
      S = _t;
    }
    return S;
  },
  inflateEnd: e => {
    if (Ot(e)) {
      return Tt;
    }
    let t = e.state;
    t.window &&= null;
    e.state = null;
    return xt;
  },
  inflateGetHeader: (e, t) => {
    if (Ot(e)) {
      return Tt;
    }
    const n = e.state;
    if (n.wrap & 2) {
      n.head = t;
      t.done = false;
      return xt;
    } else {
      return Tt;
    }
  },
  inflateSetDictionary: (e, t) => {
    const n = t.length;
    let i;
    let r;
    let a;
    if (Ot(e)) {
      return Tt;
    } else {
      i = e.state;
      if (i.wrap !== 0 && i.mode !== Pt) {
        return Tt;
      } else if (i.mode === Pt && (r = 1, r = O(r, t, n, 0), r !== i.check)) {
        return Et;
      } else {
        a = Xt(e, t, n, n);
        if (a) {
          i.mode = 16210;
          return Mt;
        } else {
          i.havedict = 1;
          return xt;
        }
      }
    }
  },
  inflateInfo: "pako inflate (from Nodeca project)"
};
function Zt() {
  this.text = 0;
  this.time = 0;
  this.xflags = 0;
  this.os = 0;
  this.extra = null;
  this.extra_len = 0;
  this.name = "";
  this.comment = "";
  this.hcrc = 0;
  this.done = false;
}
const $t = Object.prototype.toString;
const {
  Z_NO_FLUSH: en,
  Z_FINISH: tn,
  Z_OK: nn,
  Z_STREAM_END: rn,
  Z_NEED_DICT: an,
  Z_STREAM_ERROR: sn,
  Z_DATA_ERROR: on,
  Z_MEM_ERROR: ln
} = j;
function cn(e) {
  this.options = He({
    chunkSize: 65536,
    windowBits: 15,
    to: ""
  }, e || {});
  const t = this.options;
  if (t.raw && t.windowBits >= 0 && t.windowBits < 16) {
    t.windowBits = -t.windowBits;
    if (t.windowBits === 0) {
      t.windowBits = -15;
    }
  }
  if (!!(t.windowBits >= 0) && !!(t.windowBits < 16) && (!e || !e.windowBits)) {
    t.windowBits += 32;
  }
  if (t.windowBits > 15 && t.windowBits < 48) {
    if (!(t.windowBits & 15)) {
      t.windowBits |= 15;
    }
  }
  this.err = 0;
  this.msg = "";
  this.ended = false;
  this.chunks = [];
  this.strm = new Ye();
  this.strm.avail_out = 0;
  let n = Yt.inflateInit2(this.strm, t.windowBits);
  if (n !== nn) {
    throw new Error(H[n]);
  }
  this.header = new Zt();
  Yt.inflateGetHeader(this.strm, this.header);
  if (t.dictionary && (typeof t.dictionary == "string" ? t.dictionary = Qe(t.dictionary) : $t.call(t.dictionary) === "[object ArrayBuffer]" && (t.dictionary = new Uint8Array(t.dictionary)), t.raw && (n = Yt.inflateSetDictionary(this.strm, t.dictionary), n !== nn))) {
    throw new Error(H[n]);
  }
}
function hn(e, t) {
  const n = new cn(t);
  n.push(e);
  if (n.err) {
    throw n.msg || H[n.err];
  }
  return n.result;
}
cn.prototype.push = function (e, t) {
  const n = this.strm;
  const i = this.options.chunkSize;
  const r = this.options.dictionary;
  let a;
  let s;
  let o;
  if (this.ended) {
    return false;
  }
  s = t === ~~t ? t : t === true ? tn : en;
  if ($t.call(e) === "[object ArrayBuffer]") {
    n.input = new Uint8Array(e);
  } else {
    n.input = e;
  }
  n.next_in = 0;
  n.avail_in = n.input.length;
  while (true) {
    if (n.avail_out === 0) {
      n.output = new Uint8Array(i);
      n.next_out = 0;
      n.avail_out = i;
    }
    a = Yt.inflate(n, s);
    if (a === an && r) {
      a = Yt.inflateSetDictionary(n, r);
      if (a === nn) {
        a = Yt.inflate(n, s);
      } else if (a === on) {
        a = an;
      }
    }
    while (n.avail_in > 0 && a === rn && n.state.wrap > 0 && e[n.next_in] !== 0) {
      Yt.inflateReset(n);
      a = Yt.inflate(n, s);
    }
    switch (a) {
      case sn:
      case on:
      case an:
      case ln:
        this.onEnd(a);
        this.ended = true;
        return false;
    }
    o = n.avail_out;
    if (n.next_out && (n.avail_out === 0 || a === rn)) {
      if (this.options.to === "string") {
        let e = Xe(n.output, n.next_out);
        let t = n.next_out - e;
        let r = Je(n.output, e);
        n.next_out = t;
        n.avail_out = i - t;
        if (t) {
          n.output.set(n.output.subarray(e, e + t), 0);
        }
        this.onData(r);
      } else {
        this.onData(n.output.length === n.next_out ? n.output : n.output.subarray(0, n.next_out));
      }
    }
    if (a !== nn || o !== 0) {
      if (a === rn) {
        a = Yt.inflateEnd(this.strm);
        this.onEnd(a);
        this.ended = true;
        return true;
      }
      if (n.avail_in === 0) {
        break;
      }
    }
  }
  return true;
};
cn.prototype.onData = function (e) {
  this.chunks.push(e);
};
cn.prototype.onEnd = function (e) {
  if (e === nn) {
    if (this.options.to === "string") {
      this.result = this.chunks.join("");
    } else {
      this.result = je(this.chunks);
    }
  }
  this.chunks = [];
  this.err = e;
  this.msg = this.strm.msg;
};
var dn = {
  Inflate: cn,
  inflate: hn,
  inflateRaw: function (e, t) {
    (t = t || {}).raw = true;
    return hn(e, t);
  },
  ungzip: hn,
  constants: j
};
const {
  Deflate: un,
  deflate: fn,
  deflateRaw: pn,
  gzip: gn
} = ht;
const {
  Inflate: mn,
  inflate: An,
  inflateRaw: vn,
  ungzip: bn
} = dn;
export var Ay = {
  Deflate: un,
  deflate: fn,
  deflateRaw: pn,
  gzip: gn,
  Inflate: mn,
  inflate: An,
  inflateRaw: vn,
  ungzip: bn,
  constants: j
};