var i;
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

  var t = "input is invalid type";
  var r = typeof window == "object";
  var a = r ? window : {};
  if (a.JS_SHA256_NO_WINDOW) {
    r = false;
  }
  var s = !r && typeof self == "object";
  var o = !a.JS_SHA256_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node && process.type != "renderer";
  if (o) {
    a = require.g;
  } else if (s) {
    a = self;
  }
  var l = !a.JS_SHA256_NO_COMMON_JS && module.exports;
  var c = require.amdO;
  var h = !a.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer != "undefined";
  var d = "0123456789abcdef".split("");
  var u = [-2147483648, 8388608, 32768, 128];
  var f = [24, 16, 8, 0];
  var p = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
  var g = ["hex", "array", "digest", "arrayBuffer"];
  var m = [];
  if (!!a.JS_SHA256_NO_NODE_JS || !Array.isArray) {
    Array.isArray = function (e) {
      return Object.prototype.toString.call(e) === "[object Array]";
    };
  }
  if (!!h && (!!a.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
    ArrayBuffer.isView = function (e) {
      return typeof e == "object" && e.buffer && e.buffer.constructor === ArrayBuffer;
    };
  }
  function A(e, t) {
    return function (n) {
      return new x(t, true).update(n)[e]();
    };
  }
  function v(e) {
    var t = A("hex", e);
    if (o) {
      t = b(t, e);
    }
    t.create = function () {
      return new x(e);
    };
    t.update = function (e) {
      return t.create().update(e);
    };
    for (var n = 0; n < g.length; ++n) {
      var i = g[n];
      t[i] = A(i, e);
    }
    return t;
  }
  function b(e, i) {
    var r;
    var s = require("./4394.js");
    var o = require("./1903.js").Buffer;
    var l = i ? "sha224" : "sha256";
    r = o.from && !a.JS_SHA256_NO_BUFFER_FROM ? o.from : function (e) {
      return new o(e);
    };
    return function (n) {
      if (typeof n == "string") {
        return s.createHash(l).update(n, "utf8").digest("hex");
      }
      if (n == null) {
        throw new Error(t);
      }
      if (n.constructor === ArrayBuffer) {
        n = new Uint8Array(n);
      }
      if (Array.isArray(n) || ArrayBuffer.isView(n) || n.constructor === o) {
        return s.createHash(l).update(r(n)).digest("hex");
      } else {
        return e(n);
      }
    };
  }
  function y(e, t) {
    return function (n, i) {
      return new S(n, t, true).update(i)[e]();
    };
  }
  function w(e) {
    var t = y("hex", e);
    t.create = function (t) {
      return new S(t, e);
    };
    t.update = function (e, n) {
      return t.create(e).update(n);
    };
    for (var n = 0; n < g.length; ++n) {
      var i = g[n];
      t[i] = y(i, e);
    }
    return t;
  }
  function x(e, t) {
    if (t) {
      m[0] = m[16] = m[1] = m[2] = m[3] = m[4] = m[5] = m[6] = m[7] = m[8] = m[9] = m[10] = m[11] = m[12] = m[13] = m[14] = m[15] = 0;
      this.blocks = m;
    } else {
      this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    if (e) {
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
    this.is224 = e;
  }
  function S(e, n, i) {
    var r;
    var a = typeof e;
    if (a === "string") {
      var s;
      var o = [];
      var l = e.length;
      var c = 0;
      for (r = 0; r < l; ++r) {
        if ((s = e.charCodeAt(r)) < 128) {
          o[c++] = s;
        } else if (s < 2048) {
          o[c++] = s >>> 6 | 192;
          o[c++] = s & 63 | 128;
        } else if (s < 55296 || s >= 57344) {
          o[c++] = s >>> 12 | 224;
          o[c++] = s >>> 6 & 63 | 128;
          o[c++] = s & 63 | 128;
        } else {
          s = 65536 + ((s & 1023) << 10 | e.charCodeAt(++r) & 1023);
          o[c++] = s >>> 18 | 240;
          o[c++] = s >>> 12 & 63 | 128;
          o[c++] = s >>> 6 & 63 | 128;
          o[c++] = s & 63 | 128;
        }
      }
      e = o;
    } else {
      if (a !== "object") {
        throw new Error(t);
      }
      if (e === null) {
        throw new Error(t);
      }
      if (h && e.constructor === ArrayBuffer) {
        e = new Uint8Array(e);
      } else if (!Array.isArray(e) && (!h || !ArrayBuffer.isView(e))) {
        throw new Error(t);
      }
    }
    if (e.length > 64) {
      e = new x(n, true).update(e).array();
    }
    var d = [];
    var u = [];
    for (r = 0; r < 64; ++r) {
      var f = e[r] || 0;
      d[r] = f ^ 92;
      u[r] = f ^ 54;
    }
    x.call(this, n, i);
    this.update(u);
    this.oKeyPad = d;
    this.inner = true;
    this.sharedMemory = i;
  }
  x.prototype.update = function (e) {
    if (!this.finalized) {
      var n;
      var i = typeof e;
      if (i !== "string") {
        if (i !== "object") {
          throw new Error(t);
        }
        if (e === null) {
          throw new Error(t);
        }
        if (h && e.constructor === ArrayBuffer) {
          e = new Uint8Array(e);
        } else if (!Array.isArray(e) && (!h || !ArrayBuffer.isView(e))) {
          throw new Error(t);
        }
        n = true;
      }
      for (var r, a, s = 0, o = e.length, l = this.blocks; s < o;) {
        if (this.hashed) {
          this.hashed = false;
          l[0] = this.block;
          this.block = l[16] = l[1] = l[2] = l[3] = l[4] = l[5] = l[6] = l[7] = l[8] = l[9] = l[10] = l[11] = l[12] = l[13] = l[14] = l[15] = 0;
        }
        if (n) {
          for (a = this.start; s < o && a < 64; ++s) {
            l[a >>> 2] |= e[s] << f[a++ & 3];
          }
        } else {
          for (a = this.start; s < o && a < 64; ++s) {
            if ((r = e.charCodeAt(s)) < 128) {
              l[a >>> 2] |= r << f[a++ & 3];
            } else if (r < 2048) {
              l[a >>> 2] |= (r >>> 6 | 192) << f[a++ & 3];
              l[a >>> 2] |= (r & 63 | 128) << f[a++ & 3];
            } else if (r < 55296 || r >= 57344) {
              l[a >>> 2] |= (r >>> 12 | 224) << f[a++ & 3];
              l[a >>> 2] |= (r >>> 6 & 63 | 128) << f[a++ & 3];
              l[a >>> 2] |= (r & 63 | 128) << f[a++ & 3];
            } else {
              r = 65536 + ((r & 1023) << 10 | e.charCodeAt(++s) & 1023);
              l[a >>> 2] |= (r >>> 18 | 240) << f[a++ & 3];
              l[a >>> 2] |= (r >>> 12 & 63 | 128) << f[a++ & 3];
              l[a >>> 2] |= (r >>> 6 & 63 | 128) << f[a++ & 3];
              l[a >>> 2] |= (r & 63 | 128) << f[a++ & 3];
            }
          }
        }
        this.lastByteIndex = a;
        this.bytes += a - this.start;
        if (a >= 64) {
          this.block = l[16];
          this.start = a - 64;
          this.hash();
          this.hashed = true;
        } else {
          this.start = a;
        }
      }
      if (this.bytes > 4294967295) {
        this.hBytes += this.bytes / 4294967296 | 0;
        this.bytes = this.bytes % 4294967296;
      }
      return this;
    }
  };
  x.prototype.finalize = function () {
    if (!this.finalized) {
      this.finalized = true;
      var e = this.blocks;
      var t = this.lastByteIndex;
      e[16] = this.block;
      e[t >>> 2] |= u[t & 3];
      this.block = e[16];
      if (t >= 56) {
        if (!this.hashed) {
          this.hash();
        }
        e[0] = this.block;
        e[16] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = e[9] = e[10] = e[11] = e[12] = e[13] = e[14] = e[15] = 0;
      }
      e[14] = this.hBytes << 3 | this.bytes >>> 29;
      e[15] = this.bytes << 3;
      this.hash();
    }
  };
  x.prototype.hash = function () {
    var e;
    var t;
    var n;
    var i;
    var r;
    var a;
    var s;
    var o;
    var l;
    var c = this.h0;
    var h = this.h1;
    var d = this.h2;
    var u = this.h3;
    var f = this.h4;
    var g = this.h5;
    var m = this.h6;
    var A = this.h7;
    var v = this.blocks;
    for (e = 16; e < 64; ++e) {
      t = ((r = v[e - 15]) >>> 7 | r << 25) ^ (r >>> 18 | r << 14) ^ r >>> 3;
      n = ((r = v[e - 2]) >>> 17 | r << 15) ^ (r >>> 19 | r << 13) ^ r >>> 10;
      v[e] = v[e - 16] + t + v[e - 7] + n | 0;
    }
    l = h & d;
    e = 0;
    for (; e < 64; e += 4) {
      if (this.first) {
        if (this.is224) {
          a = 300032;
          A = (r = v[0] - 1413257819) - 150054599 | 0;
          u = r + 24177077 | 0;
        } else {
          a = 704751109;
          A = (r = v[0] - 210244248) - 1521486534 | 0;
          u = r + 143694565 | 0;
        }
        this.first = false;
      } else {
        t = (c >>> 2 | c << 30) ^ (c >>> 13 | c << 19) ^ (c >>> 22 | c << 10);
        i = (a = c & h) ^ c & d ^ l;
        A = u + (r = A + (n = (f >>> 6 | f << 26) ^ (f >>> 11 | f << 21) ^ (f >>> 25 | f << 7)) + (f & g ^ ~f & m) + p[e] + v[e]) | 0;
        u = r + (t + i) | 0;
      }
      t = (u >>> 2 | u << 30) ^ (u >>> 13 | u << 19) ^ (u >>> 22 | u << 10);
      i = (s = u & c) ^ u & h ^ a;
      m = d + (r = m + (n = (A >>> 6 | A << 26) ^ (A >>> 11 | A << 21) ^ (A >>> 25 | A << 7)) + (A & f ^ ~A & g) + p[e + 1] + v[e + 1]) | 0;
      t = ((d = r + (t + i) | 0) >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10);
      i = (o = d & u) ^ d & c ^ s;
      g = h + (r = g + (n = (m >>> 6 | m << 26) ^ (m >>> 11 | m << 21) ^ (m >>> 25 | m << 7)) + (m & A ^ ~m & f) + p[e + 2] + v[e + 2]) | 0;
      t = ((h = r + (t + i) | 0) >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10);
      i = (l = h & d) ^ h & u ^ o;
      f = c + (r = f + (n = (g >>> 6 | g << 26) ^ (g >>> 11 | g << 21) ^ (g >>> 25 | g << 7)) + (g & m ^ ~g & A) + p[e + 3] + v[e + 3]) | 0;
      c = r + (t + i) | 0;
      this.chromeBugWorkAround = true;
    }
    this.h0 = this.h0 + c | 0;
    this.h1 = this.h1 + h | 0;
    this.h2 = this.h2 + d | 0;
    this.h3 = this.h3 + u | 0;
    this.h4 = this.h4 + f | 0;
    this.h5 = this.h5 + g | 0;
    this.h6 = this.h6 + m | 0;
    this.h7 = this.h7 + A | 0;
  };
  x.prototype.hex = function () {
    this.finalize();
    var e = this.h0;
    var t = this.h1;
    var n = this.h2;
    var i = this.h3;
    var r = this.h4;
    var a = this.h5;
    var s = this.h6;
    var o = this.h7;
    var l = d[e >>> 28 & 15] + d[e >>> 24 & 15] + d[e >>> 20 & 15] + d[e >>> 16 & 15] + d[e >>> 12 & 15] + d[e >>> 8 & 15] + d[e >>> 4 & 15] + d[e & 15] + d[t >>> 28 & 15] + d[t >>> 24 & 15] + d[t >>> 20 & 15] + d[t >>> 16 & 15] + d[t >>> 12 & 15] + d[t >>> 8 & 15] + d[t >>> 4 & 15] + d[t & 15] + d[n >>> 28 & 15] + d[n >>> 24 & 15] + d[n >>> 20 & 15] + d[n >>> 16 & 15] + d[n >>> 12 & 15] + d[n >>> 8 & 15] + d[n >>> 4 & 15] + d[n & 15] + d[i >>> 28 & 15] + d[i >>> 24 & 15] + d[i >>> 20 & 15] + d[i >>> 16 & 15] + d[i >>> 12 & 15] + d[i >>> 8 & 15] + d[i >>> 4 & 15] + d[i & 15] + d[r >>> 28 & 15] + d[r >>> 24 & 15] + d[r >>> 20 & 15] + d[r >>> 16 & 15] + d[r >>> 12 & 15] + d[r >>> 8 & 15] + d[r >>> 4 & 15] + d[r & 15] + d[a >>> 28 & 15] + d[a >>> 24 & 15] + d[a >>> 20 & 15] + d[a >>> 16 & 15] + d[a >>> 12 & 15] + d[a >>> 8 & 15] + d[a >>> 4 & 15] + d[a & 15] + d[s >>> 28 & 15] + d[s >>> 24 & 15] + d[s >>> 20 & 15] + d[s >>> 16 & 15] + d[s >>> 12 & 15] + d[s >>> 8 & 15] + d[s >>> 4 & 15] + d[s & 15];
    if (!this.is224) {
      l += d[o >>> 28 & 15] + d[o >>> 24 & 15] + d[o >>> 20 & 15] + d[o >>> 16 & 15] + d[o >>> 12 & 15] + d[o >>> 8 & 15] + d[o >>> 4 & 15] + d[o & 15];
    }
    return l;
  };
  x.prototype.toString = x.prototype.hex;
  x.prototype.digest = function () {
    this.finalize();
    var e = this.h0;
    var t = this.h1;
    var n = this.h2;
    var i = this.h3;
    var r = this.h4;
    var a = this.h5;
    var s = this.h6;
    var o = this.h7;
    var l = [e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, e & 255, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, t & 255, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, n & 255, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, i & 255, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, r & 255, a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, a & 255, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, s & 255];
    if (!this.is224) {
      l.push(o >>> 24 & 255, o >>> 16 & 255, o >>> 8 & 255, o & 255);
    }
    return l;
  };
  x.prototype.array = x.prototype.digest;
  x.prototype.arrayBuffer = function () {
    this.finalize();
    var e = new ArrayBuffer(this.is224 ? 28 : 32);
    var t = new DataView(e);
    t.setUint32(0, this.h0);
    t.setUint32(4, this.h1);
    t.setUint32(8, this.h2);
    t.setUint32(12, this.h3);
    t.setUint32(16, this.h4);
    t.setUint32(20, this.h5);
    t.setUint32(24, this.h6);
    if (!this.is224) {
      t.setUint32(28, this.h7);
    }
    return e;
  };
  S.prototype = new x();
  S.prototype.finalize = function () {
    x.prototype.finalize.call(this);
    if (this.inner) {
      this.inner = false;
      var e = this.array();
      x.call(this, this.is224, this.sharedMemory);
      this.update(this.oKeyPad);
      this.update(e);
      x.prototype.finalize.call(this);
    }
  };
  var k = v();
  k.sha256 = k;
  k.sha224 = v(true);
  k.sha256.hmac = w();
  k.sha224.hmac = w(true);
  if (l) {
    module.exports = k;
  } else {
    a.sha256 = k.sha256;
    a.sha224 = k.sha224;
    if (c) {
      if ((i = function () {
        return k;
      }.call(k, require, k, module)) !== undefined) {
        module.exports = i;
      }
    }
  }
})();