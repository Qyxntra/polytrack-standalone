var r;
/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.11.1
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2025
 * @license MIT
 */
(function () {
  "use strict";

  var e = "input is invalid type";
  var s = typeof window == "object";
  var n = s ? window : {};
  if (n.JS_SHA256_NO_WINDOW) {
    s = false;
  }
  var a = !s && typeof self == "object";
  var o = !n.JS_SHA256_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node && process.type != "renderer";
  if (o) {
    n = require.g;
  } else if (a) {
    n = self;
  }
  var l = !n.JS_SHA256_NO_COMMON_JS && module.exports;
  var h = require.amdO;
  var c = !n.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer != "undefined";
  var A = "0123456789abcdef".split("");
  var d = [-2147483648, 8388608, 32768, 128];
  var u = [24, 16, 8, 0];
  var f = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
  var g = ["hex", "array", "digest", "arrayBuffer"];
  var p = [];
  if (!!n.JS_SHA256_NO_NODE_JS || !Array.isArray) {
    Array.isArray = function (t) {
      return Object.prototype.toString.call(t) === "[object Array]";
    };
  }
  if (!!c && (!!n.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
    ArrayBuffer.isView = function (t) {
      return typeof t == "object" && t.buffer && t.buffer.constructor === ArrayBuffer;
    };
  }
  function m(t, e) {
    return function (i) {
      return new B(e, true).update(i)[t]();
    };
  }
  function b(t) {
    var e = m("hex", t);
    if (o) {
      e = y(e, t);
    }
    e.create = function () {
      return new B(t);
    };
    e.update = function (t) {
      return e.create().update(t);
    };
    for (var i = 0; i < g.length; ++i) {
      var r = g[i];
      e[r] = m(r, t);
    }
    return e;
  }
  function y(t, r) {
    var s;
    var a = require("./4394.js");
    var o = require("./1903.js").Buffer;
    var l = r ? "sha224" : "sha256";
    s = o.from && !n.JS_SHA256_NO_BUFFER_FROM ? o.from : function (t) {
      return new o(t);
    };
    return function (i) {
      if (typeof i == "string") {
        return a.createHash(l).update(i, "utf8").digest("hex");
      }
      if (i == null) {
        throw new Error(e);
      }
      if (i.constructor === ArrayBuffer) {
        i = new Uint8Array(i);
      }
      if (Array.isArray(i) || ArrayBuffer.isView(i) || i.constructor === o) {
        return a.createHash(l).update(s(i)).digest("hex");
      } else {
        return t(i);
      }
    };
  }
  function w(t, e) {
    return function (i, r) {
      return new x(i, e, true).update(r)[t]();
    };
  }
  function I(t) {
    var e = w("hex", t);
    e.create = function (e) {
      return new x(e, t);
    };
    e.update = function (t, i) {
      return e.create(t).update(i);
    };
    for (var i = 0; i < g.length; ++i) {
      var r = g[i];
      e[r] = w(r, t);
    }
    return e;
  }
  function B(t, e) {
    if (e) {
      p[0] = p[16] = p[1] = p[2] = p[3] = p[4] = p[5] = p[6] = p[7] = p[8] = p[9] = p[10] = p[11] = p[12] = p[13] = p[14] = p[15] = 0;
      this.blocks = p;
    } else {
      this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    if (t) {
      this.h0 = 3238371032;
      this.h1 = 914150663;
      this.h2 = 812702999;
      this.h3 = 4144912697;
      this.h4 = 4290775857;
      this.h5 = 1750603025;
      this.h6 = 1694076839;
      this.h7 = 3204075428;
    } else {
      this.h0 = 1779033703;
      this.h1 = 3144134277;
      this.h2 = 1013904242;
      this.h3 = 2773480762;
      this.h4 = 1359893119;
      this.h5 = 2600822924;
      this.h6 = 528734635;
      this.h7 = 1541459225;
    }
    this.block = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = false;
    this.first = true;
    this.is224 = t;
  }
  function x(t, i, r) {
    var s;
    var n = typeof t;
    if (n === "string") {
      var a;
      var o = [];
      var l = t.length;
      var h = 0;
      for (s = 0; s < l; ++s) {
        if ((a = t.charCodeAt(s)) < 128) {
          o[h++] = a;
        } else if (a < 2048) {
          o[h++] = a >>> 6 | 192;
          o[h++] = a & 63 | 128;
        } else if (a < 55296 || a >= 57344) {
          o[h++] = a >>> 12 | 224;
          o[h++] = a >>> 6 & 63 | 128;
          o[h++] = a & 63 | 128;
        } else {
          a = 65536 + ((a & 1023) << 10 | t.charCodeAt(++s) & 1023);
          o[h++] = a >>> 18 | 240;
          o[h++] = a >>> 12 & 63 | 128;
          o[h++] = a >>> 6 & 63 | 128;
          o[h++] = a & 63 | 128;
        }
      }
      t = o;
    } else {
      if (n !== "object") {
        throw new Error(e);
      }
      if (t === null) {
        throw new Error(e);
      }
      if (c && t.constructor === ArrayBuffer) {
        t = new Uint8Array(t);
      } else if (!Array.isArray(t) && (!c || !ArrayBuffer.isView(t))) {
        throw new Error(e);
      }
    }
    if (t.length > 64) {
      t = new B(i, true).update(t).array();
    }
    var A = [];
    var d = [];
    for (s = 0; s < 64; ++s) {
      var u = t[s] || 0;
      A[s] = u ^ 92;
      d[s] = u ^ 54;
    }
    B.call(this, i, r);
    this.update(d);
    this.oKeyPad = A;
    this.inner = true;
    this.sharedMemory = r;
  }
  B.prototype.update = function (t) {
    if (!this.finalized) {
      var i;
      var r = typeof t;
      if (r !== "string") {
        if (r !== "object") {
          throw new Error(e);
        }
        if (t === null) {
          throw new Error(e);
        }
        if (c && t.constructor === ArrayBuffer) {
          t = new Uint8Array(t);
        } else if (!Array.isArray(t) && (!c || !ArrayBuffer.isView(t))) {
          throw new Error(e);
        }
        i = true;
      }
      for (var s, n, a = 0, o = t.length, l = this.blocks; a < o;) {
        if (this.hashed) {
          this.hashed = false;
          l[0] = this.block;
          this.block = l[16] = l[1] = l[2] = l[3] = l[4] = l[5] = l[6] = l[7] = l[8] = l[9] = l[10] = l[11] = l[12] = l[13] = l[14] = l[15] = 0;
        }
        if (i) {
          for (n = this.start; a < o && n < 64; ++a) {
            l[n >>> 2] |= t[a] << u[n++ & 3];
          }
        } else {
          for (n = this.start; a < o && n < 64; ++a) {
            if ((s = t.charCodeAt(a)) < 128) {
              l[n >>> 2] |= s << u[n++ & 3];
            } else if (s < 2048) {
              l[n >>> 2] |= (s >>> 6 | 192) << u[n++ & 3];
              l[n >>> 2] |= (s & 63 | 128) << u[n++ & 3];
            } else if (s < 55296 || s >= 57344) {
              l[n >>> 2] |= (s >>> 12 | 224) << u[n++ & 3];
              l[n >>> 2] |= (s >>> 6 & 63 | 128) << u[n++ & 3];
              l[n >>> 2] |= (s & 63 | 128) << u[n++ & 3];
            } else {
              s = 65536 + ((s & 1023) << 10 | t.charCodeAt(++a) & 1023);
              l[n >>> 2] |= (s >>> 18 | 240) << u[n++ & 3];
              l[n >>> 2] |= (s >>> 12 & 63 | 128) << u[n++ & 3];
              l[n >>> 2] |= (s >>> 6 & 63 | 128) << u[n++ & 3];
              l[n >>> 2] |= (s & 63 | 128) << u[n++ & 3];
            }
          }
        }
        this.lastByteIndex = n;
        this.bytes += n - this.start;
        if (n >= 64) {
          this.block = l[16];
          this.start = n - 64;
          this.hash();
          this.hashed = true;
        } else {
          this.start = n;
        }
      }
      if (this.bytes > 4294967295) {
        this.hBytes += this.bytes / 4294967296 | 0;
        this.bytes = this.bytes % 4294967296;
      }
      return this;
    }
  };
  B.prototype.finalize = function () {
    if (!this.finalized) {
      this.finalized = true;
      var t = this.blocks;
      var e = this.lastByteIndex;
      t[16] = this.block;
      t[e >>> 2] |= d[e & 3];
      this.block = t[16];
      if (e >= 56) {
        if (!this.hashed) {
          this.hash();
        }
        t[0] = this.block;
        t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0;
      }
      t[14] = this.hBytes << 3 | this.bytes >>> 29;
      t[15] = this.bytes << 3;
      this.hash();
    }
  };
  B.prototype.hash = function () {
    var t;
    var e;
    var i;
    var r;
    var s;
    var n;
    var a;
    var o;
    var l;
    var h = this.h0;
    var c = this.h1;
    var A = this.h2;
    var d = this.h3;
    var u = this.h4;
    var g = this.h5;
    var p = this.h6;
    var m = this.h7;
    var b = this.blocks;
    for (t = 16; t < 64; ++t) {
      e = ((s = b[t - 15]) >>> 7 | s << 25) ^ (s >>> 18 | s << 14) ^ s >>> 3;
      i = ((s = b[t - 2]) >>> 17 | s << 15) ^ (s >>> 19 | s << 13) ^ s >>> 10;
      b[t] = b[t - 16] + e + b[t - 7] + i | 0;
    }
    l = c & A;
    t = 0;
    for (; t < 64; t += 4) {
      if (this.first) {
        if (this.is224) {
          n = 300032;
          m = (s = b[0] - 1413257819) - 150054599 | 0;
          d = s + 24177077 | 0;
        } else {
          n = 704751109;
          m = (s = b[0] - 210244248) - 1521486534 | 0;
          d = s + 143694565 | 0;
        }
        this.first = false;
      } else {
        e = (h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10);
        r = (n = h & c) ^ h & A ^ l;
        m = d + (s = m + (i = (u >>> 6 | u << 26) ^ (u >>> 11 | u << 21) ^ (u >>> 25 | u << 7)) + (u & g ^ ~u & p) + f[t] + b[t]) | 0;
        d = s + (e + r) | 0;
      }
      e = (d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10);
      r = (a = d & h) ^ d & c ^ n;
      p = A + (s = p + (i = (m >>> 6 | m << 26) ^ (m >>> 11 | m << 21) ^ (m >>> 25 | m << 7)) + (m & u ^ ~m & g) + f[t + 1] + b[t + 1]) | 0;
      e = ((A = s + (e + r) | 0) >>> 2 | A << 30) ^ (A >>> 13 | A << 19) ^ (A >>> 22 | A << 10);
      r = (o = A & d) ^ A & h ^ a;
      g = c + (s = g + (i = (p >>> 6 | p << 26) ^ (p >>> 11 | p << 21) ^ (p >>> 25 | p << 7)) + (p & m ^ ~p & u) + f[t + 2] + b[t + 2]) | 0;
      e = ((c = s + (e + r) | 0) >>> 2 | c << 30) ^ (c >>> 13 | c << 19) ^ (c >>> 22 | c << 10);
      r = (l = c & A) ^ c & d ^ o;
      u = h + (s = u + (i = (g >>> 6 | g << 26) ^ (g >>> 11 | g << 21) ^ (g >>> 25 | g << 7)) + (g & p ^ ~g & m) + f[t + 3] + b[t + 3]) | 0;
      h = s + (e + r) | 0;
      this.chromeBugWorkAround = true;
    }
    this.h0 = this.h0 + h | 0;
    this.h1 = this.h1 + c | 0;
    this.h2 = this.h2 + A | 0;
    this.h3 = this.h3 + d | 0;
    this.h4 = this.h4 + u | 0;
    this.h5 = this.h5 + g | 0;
    this.h6 = this.h6 + p | 0;
    this.h7 = this.h7 + m | 0;
  };
  B.prototype.hex = function () {
    this.finalize();
    var t = this.h0;
    var e = this.h1;
    var i = this.h2;
    var r = this.h3;
    var s = this.h4;
    var n = this.h5;
    var a = this.h6;
    var o = this.h7;
    var l = A[t >>> 28 & 15] + A[t >>> 24 & 15] + A[t >>> 20 & 15] + A[t >>> 16 & 15] + A[t >>> 12 & 15] + A[t >>> 8 & 15] + A[t >>> 4 & 15] + A[t & 15] + A[e >>> 28 & 15] + A[e >>> 24 & 15] + A[e >>> 20 & 15] + A[e >>> 16 & 15] + A[e >>> 12 & 15] + A[e >>> 8 & 15] + A[e >>> 4 & 15] + A[e & 15] + A[i >>> 28 & 15] + A[i >>> 24 & 15] + A[i >>> 20 & 15] + A[i >>> 16 & 15] + A[i >>> 12 & 15] + A[i >>> 8 & 15] + A[i >>> 4 & 15] + A[i & 15] + A[r >>> 28 & 15] + A[r >>> 24 & 15] + A[r >>> 20 & 15] + A[r >>> 16 & 15] + A[r >>> 12 & 15] + A[r >>> 8 & 15] + A[r >>> 4 & 15] + A[r & 15] + A[s >>> 28 & 15] + A[s >>> 24 & 15] + A[s >>> 20 & 15] + A[s >>> 16 & 15] + A[s >>> 12 & 15] + A[s >>> 8 & 15] + A[s >>> 4 & 15] + A[s & 15] + A[n >>> 28 & 15] + A[n >>> 24 & 15] + A[n >>> 20 & 15] + A[n >>> 16 & 15] + A[n >>> 12 & 15] + A[n >>> 8 & 15] + A[n >>> 4 & 15] + A[n & 15] + A[a >>> 28 & 15] + A[a >>> 24 & 15] + A[a >>> 20 & 15] + A[a >>> 16 & 15] + A[a >>> 12 & 15] + A[a >>> 8 & 15] + A[a >>> 4 & 15] + A[a & 15];
    if (!this.is224) {
      l += A[o >>> 28 & 15] + A[o >>> 24 & 15] + A[o >>> 20 & 15] + A[o >>> 16 & 15] + A[o >>> 12 & 15] + A[o >>> 8 & 15] + A[o >>> 4 & 15] + A[o & 15];
    }
    return l;
  };
  B.prototype.toString = B.prototype.hex;
  B.prototype.digest = function () {
    this.finalize();
    var t = this.h0;
    var e = this.h1;
    var i = this.h2;
    var r = this.h3;
    var s = this.h4;
    var n = this.h5;
    var a = this.h6;
    var o = this.h7;
    var l = [t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, t & 255, e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, e & 255, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, i & 255, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, r & 255, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, s & 255, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, n & 255, a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, a & 255];
    if (!this.is224) {
      l.push(o >>> 24 & 255, o >>> 16 & 255, o >>> 8 & 255, o & 255);
    }
    return l;
  };
  B.prototype.array = B.prototype.digest;
  B.prototype.arrayBuffer = function () {
    this.finalize();
    var t = new ArrayBuffer(this.is224 ? 28 : 32);
    var e = new DataView(t);
    e.setUint32(0, this.h0);
    e.setUint32(4, this.h1);
    e.setUint32(8, this.h2);
    e.setUint32(12, this.h3);
    e.setUint32(16, this.h4);
    e.setUint32(20, this.h5);
    e.setUint32(24, this.h6);
    if (!this.is224) {
      e.setUint32(28, this.h7);
    }
    return t;
  };
  x.prototype = new B();
  x.prototype.finalize = function () {
    B.prototype.finalize.call(this);
    if (this.inner) {
      this.inner = false;
      var t = this.array();
      B.call(this, this.is224, this.sharedMemory);
      this.update(this.oKeyPad);
      this.update(t);
      B.prototype.finalize.call(this);
    }
  };
  var C = b();
  C.sha256 = C;
  C.sha224 = b(true);
  C.sha256.hmac = I();
  C.sha224.hmac = I(true);
  if (l) {
    module.exports = C;
  } else {
    n.sha256 = C.sha256;
    n.sha224 = C.sha224;
    if (h) {
      if ((r = function () {
        return C;
      }.call(C, require, C, module)) !== undefined) {
        module.exports = r;
      }
    }
  }
})();