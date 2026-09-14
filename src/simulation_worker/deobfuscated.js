(() => {
  var t = {
    1312: (t, e, i) => {
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
          n = i.g;
        } else if (a) {
          n = self;
        }
        var l = !n.JS_SHA256_NO_COMMON_JS && t.exports;
        var h = i.amdO;
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
          var a = i(4394);
          var o = i(1903).Buffer;
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
          t.exports = C;
        } else {
          n.sha256 = C.sha256;
          n.sha224 = C.sha224;
          if (h) {
            if ((r = function () {
              return C;
            }.call(C, i, C, t)) !== undefined) {
              t.exports = r;
            }
          }
        }
      })();
    },
    1903: () => {},
    4394: () => {}
  };
  var e = {};
  function i(r) {
    var s = e[r];
    if (s !== undefined) {
      return s.exports;
    }
    var n = e[r] = {
      exports: {}
    };
    t[r](n, n.exports, i);
    return n.exports;
  }
  i.amdO = {};
  i.g = function () {
    if (typeof globalThis == "object") {
      return globalThis;
    }
    try {
      return this || new Function("return this")();
    } catch (t) {
      if (typeof window == "object") {
        return window;
      }
    }
  }();
  (() => {
    "use strict";

    /**
     * @license
     * Copyright 2010-2025 Three.js Authors
     * SPDX-License-Identifier: MIT
     */
    const t = 1000;
    const e = 1001;
    const r = 1002;
    const s = 1015;
    const n = 2300;
    const a = 2301;
    const o = 2302;
    const l = 2400;
    const h = 2401;
    const c = 2402;
    const A = "srgb";
    const d = "srgb-linear";
    const u = "linear";
    const f = "srgb";
    const g = 7680;
    const p = 35044;
    const m = 2000;
    const b = 2001;
    Int8Array;
    Uint8Array;
    Uint8ClampedArray;
    Int16Array;
    Uint16Array;
    Int32Array;
    Uint32Array;
    Float32Array;
    Float64Array;
    function y(t) {
      return document.createElementNS("http://www.w3.org/1999/xhtml", t);
    }
    const w = {};
    let I = null;
    function B(...t) {
      const e = "THREE." + t.shift();
      if (I) {
        I("warn", e, ...t);
      } else {
        console.warn(e, ...t);
      }
    }
    function x(...t) {
      const e = "THREE." + t.shift();
      if (I) {
        I("error", e, ...t);
      } else {
        console.error(e, ...t);
      }
    }
    function C(...t) {
      const e = t.join(" ");
      if (!(e in w)) {
        w[e] = true;
        B(...t);
      }
    }
    class S {
      addEventListener(t, e) {
        if (this._listeners === undefined) {
          this._listeners = {};
        }
        const i = this._listeners;
        if (i[t] === undefined) {
          i[t] = [];
        }
        if (i[t].indexOf(e) === -1) {
          i[t].push(e);
        }
      }
      hasEventListener(t, e) {
        const i = this._listeners;
        return i !== undefined && i[t] !== undefined && i[t].indexOf(e) !== -1;
      }
      removeEventListener(t, e) {
        const i = this._listeners;
        if (i === undefined) {
          return;
        }
        const r = i[t];
        if (r !== undefined) {
          const t = r.indexOf(e);
          if (t !== -1) {
            r.splice(t, 1);
          }
        }
      }
      dispatchEvent(t) {
        const e = this._listeners;
        if (e === undefined) {
          return;
        }
        const i = e[t.type];
        if (i !== undefined) {
          t.target = this;
          const e = i.slice(0);
          for (let i = 0, r = e.length; i < r; i++) {
            e[i].call(this, t);
          }
          t.target = null;
        }
      }
    }
    const k = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
    Math.PI;
    Math.PI;
    function _() {
      const t = Math.random() * 4294967295 | 0;
      const e = Math.random() * 4294967295 | 0;
      const i = Math.random() * 4294967295 | 0;
      const r = Math.random() * 4294967295 | 0;
      return (k[t & 255] + k[t >> 8 & 255] + k[t >> 16 & 255] + k[t >> 24 & 255] + "-" + k[e & 255] + k[e >> 8 & 255] + "-" + k[e >> 16 & 15 | 64] + k[e >> 24 & 255] + "-" + k[i & 63 | 128] + k[i >> 8 & 255] + "-" + k[i >> 16 & 255] + k[i >> 24 & 255] + k[r & 255] + k[r >> 8 & 255] + k[r >> 16 & 255] + k[r >> 24 & 255]).toLowerCase();
    }
    function E(t, e, i) {
      return Math.max(e, Math.min(i, t));
    }
    function M(t, e) {
      return (t % e + e) % e;
    }
    function P(t, e, i) {
      return (1 - i) * t + i * e;
    }
    function T(t, e) {
      switch (e.constructor) {
        case Float32Array:
          return t;
        case Uint32Array:
          return t / 4294967295;
        case Uint16Array:
          return t / 65535;
        case Uint8Array:
          return t / 255;
        case Int32Array:
          return Math.max(t / 2147483647, -1);
        case Int16Array:
          return Math.max(t / 32767, -1);
        case Int8Array:
          return Math.max(t / 127, -1);
        default:
          throw new Error("Invalid component type.");
      }
    }
    function Q(t, e) {
      switch (e.constructor) {
        case Float32Array:
          return t;
        case Uint32Array:
          return Math.round(t * 4294967295);
        case Uint16Array:
          return Math.round(t * 65535);
        case Uint8Array:
          return Math.round(t * 255);
        case Int32Array:
          return Math.round(t * 2147483647);
        case Int16Array:
          return Math.round(t * 32767);
        case Int8Array:
          return Math.round(t * 127);
        default:
          throw new Error("Invalid component type.");
      }
    }
    class v {
      constructor(t = 0, e = 0) {
        v.prototype.isVector2 = true;
        this.x = t;
        this.y = e;
      }
      get width() {
        return this.x;
      }
      set width(t) {
        this.x = t;
      }
      get height() {
        return this.y;
      }
      set height(t) {
        this.y = t;
      }
      set(t, e) {
        this.x = t;
        this.y = e;
        return this;
      }
      setScalar(t) {
        this.x = t;
        this.y = t;
        return this;
      }
      setX(t) {
        this.x = t;
        return this;
      }
      setY(t) {
        this.y = t;
        return this;
      }
      setComponent(t, e) {
        switch (t) {
          case 0:
            this.x = e;
            break;
          case 1:
            this.y = e;
            break;
          default:
            throw new Error("index is out of range: " + t);
        }
        return this;
      }
      getComponent(t) {
        switch (t) {
          case 0:
            return this.x;
          case 1:
            return this.y;
          default:
            throw new Error("index is out of range: " + t);
        }
      }
      clone() {
        return new this.constructor(this.x, this.y);
      }
      copy(t) {
        this.x = t.x;
        this.y = t.y;
        return this;
      }
      add(t) {
        this.x += t.x;
        this.y += t.y;
        return this;
      }
      addScalar(t) {
        this.x += t;
        this.y += t;
        return this;
      }
      addVectors(t, e) {
        this.x = t.x + e.x;
        this.y = t.y + e.y;
        return this;
      }
      addScaledVector(t, e) {
        this.x += t.x * e;
        this.y += t.y * e;
        return this;
      }
      sub(t) {
        this.x -= t.x;
        this.y -= t.y;
        return this;
      }
      subScalar(t) {
        this.x -= t;
        this.y -= t;
        return this;
      }
      subVectors(t, e) {
        this.x = t.x - e.x;
        this.y = t.y - e.y;
        return this;
      }
      multiply(t) {
        this.x *= t.x;
        this.y *= t.y;
        return this;
      }
      multiplyScalar(t) {
        this.x *= t;
        this.y *= t;
        return this;
      }
      divide(t) {
        this.x /= t.x;
        this.y /= t.y;
        return this;
      }
      divideScalar(t) {
        return this.multiplyScalar(1 / t);
      }
      applyMatrix3(t) {
        const e = this.x;
        const i = this.y;
        const r = t.elements;
        this.x = r[0] * e + r[3] * i + r[6];
        this.y = r[1] * e + r[4] * i + r[7];
        return this;
      }
      min(t) {
        this.x = Math.min(this.x, t.x);
        this.y = Math.min(this.y, t.y);
        return this;
      }
      max(t) {
        this.x = Math.max(this.x, t.x);
        this.y = Math.max(this.y, t.y);
        return this;
      }
      clamp(t, e) {
        this.x = E(this.x, t.x, e.x);
        this.y = E(this.y, t.y, e.y);
        return this;
      }
      clampScalar(t, e) {
        this.x = E(this.x, t, e);
        this.y = E(this.y, t, e);
        return this;
      }
      clampLength(t, e) {
        const i = this.length();
        return this.divideScalar(i || 1).multiplyScalar(E(i, t, e));
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
      dot(t) {
        return this.x * t.x + this.y * t.y;
      }
      cross(t) {
        return this.x * t.y - this.y * t.x;
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
      angleTo(t) {
        const e = Math.sqrt(this.lengthSq() * t.lengthSq());
        if (e === 0) {
          return Math.PI / 2;
        }
        const i = this.dot(t) / e;
        return Math.acos(E(i, -1, 1));
      }
      distanceTo(t) {
        return Math.sqrt(this.distanceToSquared(t));
      }
      distanceToSquared(t) {
        const e = this.x - t.x;
        const i = this.y - t.y;
        return e * e + i * i;
      }
      manhattanDistanceTo(t) {
        return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
      }
      setLength(t) {
        return this.normalize().multiplyScalar(t);
      }
      lerp(t, e) {
        this.x += (t.x - this.x) * e;
        this.y += (t.y - this.y) * e;
        return this;
      }
      lerpVectors(t, e, i) {
        this.x = t.x + (e.x - t.x) * i;
        this.y = t.y + (e.y - t.y) * i;
        return this;
      }
      equals(t) {
        return t.x === this.x && t.y === this.y;
      }
      fromArray(t, e = 0) {
        this.x = t[e];
        this.y = t[e + 1];
        return this;
      }
      toArray(t = [], e = 0) {
        t[e] = this.x;
        t[e + 1] = this.y;
        return t;
      }
      fromBufferAttribute(t, e) {
        this.x = t.getX(e);
        this.y = t.getY(e);
        return this;
      }
      rotateAround(t, e) {
        const i = Math.cos(e);
        const r = Math.sin(e);
        const s = this.x - t.x;
        const n = this.y - t.y;
        this.x = s * i - n * r + t.x;
        this.y = s * r + n * i + t.y;
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
    class D {
      constructor(t = 0, e = 0, i = 0, r = 1) {
        this.isQuaternion = true;
        this._x = t;
        this._y = e;
        this._z = i;
        this._w = r;
      }
      static slerpFlat(t, e, i, r, s, n, a) {
        let o = i[r + 0];
        let l = i[r + 1];
        let h = i[r + 2];
        let c = i[r + 3];
        let A = s[n + 0];
        let d = s[n + 1];
        let u = s[n + 2];
        let f = s[n + 3];
        if (a <= 0) {
          t[e + 0] = o;
          t[e + 1] = l;
          t[e + 2] = h;
          t[e + 3] = c;
          return;
        }
        if (a >= 1) {
          t[e + 0] = A;
          t[e + 1] = d;
          t[e + 2] = u;
          t[e + 3] = f;
          return;
        }
        if (c !== f || o !== A || l !== d || h !== u) {
          let t = o * A + l * d + h * u + c * f;
          if (t < 0) {
            A = -A;
            d = -d;
            u = -u;
            f = -f;
            t = -t;
          }
          let e = 1 - a;
          if (t < 0.9995) {
            const i = Math.acos(t);
            const r = Math.sin(i);
            e = Math.sin(e * i) / r;
            o = o * e + A * (a = Math.sin(a * i) / r);
            l = l * e + d * a;
            h = h * e + u * a;
            c = c * e + f * a;
          } else {
            o = o * e + A * a;
            l = l * e + d * a;
            h = h * e + u * a;
            c = c * e + f * a;
            const t = 1 / Math.sqrt(o * o + l * l + h * h + c * c);
            o *= t;
            l *= t;
            h *= t;
            c *= t;
          }
        }
        t[e] = o;
        t[e + 1] = l;
        t[e + 2] = h;
        t[e + 3] = c;
      }
      static multiplyQuaternionsFlat(t, e, i, r, s, n) {
        const a = i[r];
        const o = i[r + 1];
        const l = i[r + 2];
        const h = i[r + 3];
        const c = s[n];
        const A = s[n + 1];
        const d = s[n + 2];
        const u = s[n + 3];
        t[e] = a * u + h * c + o * d - l * A;
        t[e + 1] = o * u + h * A + l * c - a * d;
        t[e + 2] = l * u + h * d + a * A - o * c;
        t[e + 3] = h * u - a * c - o * A - l * d;
        return t;
      }
      get x() {
        return this._x;
      }
      set x(t) {
        this._x = t;
        this._onChangeCallback();
      }
      get y() {
        return this._y;
      }
      set y(t) {
        this._y = t;
        this._onChangeCallback();
      }
      get z() {
        return this._z;
      }
      set z(t) {
        this._z = t;
        this._onChangeCallback();
      }
      get w() {
        return this._w;
      }
      set w(t) {
        this._w = t;
        this._onChangeCallback();
      }
      set(t, e, i, r) {
        this._x = t;
        this._y = e;
        this._z = i;
        this._w = r;
        this._onChangeCallback();
        return this;
      }
      clone() {
        return new this.constructor(this._x, this._y, this._z, this._w);
      }
      copy(t) {
        this._x = t.x;
        this._y = t.y;
        this._z = t.z;
        this._w = t.w;
        this._onChangeCallback();
        return this;
      }
      setFromEuler(t, e = true) {
        const i = t._x;
        const r = t._y;
        const s = t._z;
        const n = t._order;
        const a = Math.cos;
        const o = Math.sin;
        const l = a(i / 2);
        const h = a(r / 2);
        const c = a(s / 2);
        const A = o(i / 2);
        const d = o(r / 2);
        const u = o(s / 2);
        switch (n) {
          case "XYZ":
            this._x = A * h * c + l * d * u;
            this._y = l * d * c - A * h * u;
            this._z = l * h * u + A * d * c;
            this._w = l * h * c - A * d * u;
            break;
          case "YXZ":
            this._x = A * h * c + l * d * u;
            this._y = l * d * c - A * h * u;
            this._z = l * h * u - A * d * c;
            this._w = l * h * c + A * d * u;
            break;
          case "ZXY":
            this._x = A * h * c - l * d * u;
            this._y = l * d * c + A * h * u;
            this._z = l * h * u + A * d * c;
            this._w = l * h * c - A * d * u;
            break;
          case "ZYX":
            this._x = A * h * c - l * d * u;
            this._y = l * d * c + A * h * u;
            this._z = l * h * u - A * d * c;
            this._w = l * h * c + A * d * u;
            break;
          case "YZX":
            this._x = A * h * c + l * d * u;
            this._y = l * d * c + A * h * u;
            this._z = l * h * u - A * d * c;
            this._w = l * h * c - A * d * u;
            break;
          case "XZY":
            this._x = A * h * c - l * d * u;
            this._y = l * d * c - A * h * u;
            this._z = l * h * u + A * d * c;
            this._w = l * h * c + A * d * u;
            break;
          default:
            B("Quaternion: .setFromEuler() encountered an unknown order: " + n);
        }
        if (e === true) {
          this._onChangeCallback();
        }
        return this;
      }
      setFromAxisAngle(t, e) {
        const i = e / 2;
        const r = Math.sin(i);
        this._x = t.x * r;
        this._y = t.y * r;
        this._z = t.z * r;
        this._w = Math.cos(i);
        this._onChangeCallback();
        return this;
      }
      setFromRotationMatrix(t) {
        const e = t.elements;
        const i = e[0];
        const r = e[4];
        const s = e[8];
        const n = e[1];
        const a = e[5];
        const o = e[9];
        const l = e[2];
        const h = e[6];
        const c = e[10];
        const A = i + a + c;
        if (A > 0) {
          const t = 0.5 / Math.sqrt(A + 1);
          this._w = 0.25 / t;
          this._x = (h - o) * t;
          this._y = (s - l) * t;
          this._z = (n - r) * t;
        } else if (i > a && i > c) {
          const t = Math.sqrt(1 + i - a - c) * 2;
          this._w = (h - o) / t;
          this._x = t * 0.25;
          this._y = (r + n) / t;
          this._z = (s + l) / t;
        } else if (a > c) {
          const t = Math.sqrt(1 + a - i - c) * 2;
          this._w = (s - l) / t;
          this._x = (r + n) / t;
          this._y = t * 0.25;
          this._z = (o + h) / t;
        } else {
          const t = Math.sqrt(1 + c - i - a) * 2;
          this._w = (n - r) / t;
          this._x = (s + l) / t;
          this._y = (o + h) / t;
          this._z = t * 0.25;
        }
        this._onChangeCallback();
        return this;
      }
      setFromUnitVectors(t, e) {
        let i = t.dot(e) + 1;
        if (i < 1e-8) {
          i = 0;
          if (Math.abs(t.x) > Math.abs(t.z)) {
            this._x = -t.y;
            this._y = t.x;
            this._z = 0;
            this._w = i;
          } else {
            this._x = 0;
            this._y = -t.z;
            this._z = t.y;
            this._w = i;
          }
        } else {
          this._x = t.y * e.z - t.z * e.y;
          this._y = t.z * e.x - t.x * e.z;
          this._z = t.x * e.y - t.y * e.x;
          this._w = i;
        }
        return this.normalize();
      }
      angleTo(t) {
        return Math.acos(Math.abs(E(this.dot(t), -1, 1))) * 2;
      }
      rotateTowards(t, e) {
        const i = this.angleTo(t);
        if (i === 0) {
          return this;
        }
        const r = Math.min(1, e / i);
        this.slerp(t, r);
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
      dot(t) {
        return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
      }
      lengthSq() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
      }
      length() {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
      }
      normalize() {
        let t = this.length();
        if (t === 0) {
          this._x = 0;
          this._y = 0;
          this._z = 0;
          this._w = 1;
        } else {
          t = 1 / t;
          this._x = this._x * t;
          this._y = this._y * t;
          this._z = this._z * t;
          this._w = this._w * t;
        }
        this._onChangeCallback();
        return this;
      }
      multiply(t) {
        return this.multiplyQuaternions(this, t);
      }
      premultiply(t) {
        return this.multiplyQuaternions(t, this);
      }
      multiplyQuaternions(t, e) {
        const i = t._x;
        const r = t._y;
        const s = t._z;
        const n = t._w;
        const a = e._x;
        const o = e._y;
        const l = e._z;
        const h = e._w;
        this._x = i * h + n * a + r * l - s * o;
        this._y = r * h + n * o + s * a - i * l;
        this._z = s * h + n * l + i * o - r * a;
        this._w = n * h - i * a - r * o - s * l;
        this._onChangeCallback();
        return this;
      }
      slerp(t, e) {
        if (e <= 0) {
          return this;
        }
        if (e >= 1) {
          return this.copy(t);
        }
        let i = t._x;
        let r = t._y;
        let s = t._z;
        let n = t._w;
        let a = this.dot(t);
        if (a < 0) {
          i = -i;
          r = -r;
          s = -s;
          n = -n;
          a = -a;
        }
        let o = 1 - e;
        if (a < 0.9995) {
          const t = Math.acos(a);
          const l = Math.sin(t);
          o = Math.sin(o * t) / l;
          e = Math.sin(e * t) / l;
          this._x = this._x * o + i * e;
          this._y = this._y * o + r * e;
          this._z = this._z * o + s * e;
          this._w = this._w * o + n * e;
          this._onChangeCallback();
        } else {
          this._x = this._x * o + i * e;
          this._y = this._y * o + r * e;
          this._z = this._z * o + s * e;
          this._w = this._w * o + n * e;
          this.normalize();
        }
        return this;
      }
      slerpQuaternions(t, e, i) {
        return this.copy(t).slerp(e, i);
      }
      random() {
        const t = Math.PI * 2 * Math.random();
        const e = Math.PI * 2 * Math.random();
        const i = Math.random();
        const r = Math.sqrt(1 - i);
        const s = Math.sqrt(i);
        return this.set(r * Math.sin(t), r * Math.cos(t), s * Math.sin(e), s * Math.cos(e));
      }
      equals(t) {
        return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
      }
      fromArray(t, e = 0) {
        this._x = t[e];
        this._y = t[e + 1];
        this._z = t[e + 2];
        this._w = t[e + 3];
        this._onChangeCallback();
        return this;
      }
      toArray(t = [], e = 0) {
        t[e] = this._x;
        t[e + 1] = this._y;
        t[e + 2] = this._z;
        t[e + 3] = this._w;
        return t;
      }
      fromBufferAttribute(t, e) {
        this._x = t.getX(e);
        this._y = t.getY(e);
        this._z = t.getZ(e);
        this._w = t.getW(e);
        this._onChangeCallback();
        return this;
      }
      toJSON() {
        return this.toArray();
      }
      _onChange(t) {
        this._onChangeCallback = t;
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
    class R {
      constructor(t = 0, e = 0, i = 0) {
        R.prototype.isVector3 = true;
        this.x = t;
        this.y = e;
        this.z = i;
      }
      set(t, e, i = this.z) {
        this.x = t;
        this.y = e;
        this.z = i;
        return this;
      }
      setScalar(t) {
        this.x = t;
        this.y = t;
        this.z = t;
        return this;
      }
      setX(t) {
        this.x = t;
        return this;
      }
      setY(t) {
        this.y = t;
        return this;
      }
      setZ(t) {
        this.z = t;
        return this;
      }
      setComponent(t, e) {
        switch (t) {
          case 0:
            this.x = e;
            break;
          case 1:
            this.y = e;
            break;
          case 2:
            this.z = e;
            break;
          default:
            throw new Error("index is out of range: " + t);
        }
        return this;
      }
      getComponent(t) {
        switch (t) {
          case 0:
            return this.x;
          case 1:
            return this.y;
          case 2:
            return this.z;
          default:
            throw new Error("index is out of range: " + t);
        }
      }
      clone() {
        return new this.constructor(this.x, this.y, this.z);
      }
      copy(t) {
        this.x = t.x;
        this.y = t.y;
        this.z = t.z;
        return this;
      }
      add(t) {
        this.x += t.x;
        this.y += t.y;
        this.z += t.z;
        return this;
      }
      addScalar(t) {
        this.x += t;
        this.y += t;
        this.z += t;
        return this;
      }
      addVectors(t, e) {
        this.x = t.x + e.x;
        this.y = t.y + e.y;
        this.z = t.z + e.z;
        return this;
      }
      addScaledVector(t, e) {
        this.x += t.x * e;
        this.y += t.y * e;
        this.z += t.z * e;
        return this;
      }
      sub(t) {
        this.x -= t.x;
        this.y -= t.y;
        this.z -= t.z;
        return this;
      }
      subScalar(t) {
        this.x -= t;
        this.y -= t;
        this.z -= t;
        return this;
      }
      subVectors(t, e) {
        this.x = t.x - e.x;
        this.y = t.y - e.y;
        this.z = t.z - e.z;
        return this;
      }
      multiply(t) {
        this.x *= t.x;
        this.y *= t.y;
        this.z *= t.z;
        return this;
      }
      multiplyScalar(t) {
        this.x *= t;
        this.y *= t;
        this.z *= t;
        return this;
      }
      multiplyVectors(t, e) {
        this.x = t.x * e.x;
        this.y = t.y * e.y;
        this.z = t.z * e.z;
        return this;
      }
      applyEuler(t) {
        return this.applyQuaternion(W.setFromEuler(t));
      }
      applyAxisAngle(t, e) {
        return this.applyQuaternion(W.setFromAxisAngle(t, e));
      }
      applyMatrix3(t) {
        const e = this.x;
        const i = this.y;
        const r = this.z;
        const s = t.elements;
        this.x = s[0] * e + s[3] * i + s[6] * r;
        this.y = s[1] * e + s[4] * i + s[7] * r;
        this.z = s[2] * e + s[5] * i + s[8] * r;
        return this;
      }
      applyNormalMatrix(t) {
        return this.applyMatrix3(t).normalize();
      }
      applyMatrix4(t) {
        const e = this.x;
        const i = this.y;
        const r = this.z;
        const s = t.elements;
        const n = 1 / (s[3] * e + s[7] * i + s[11] * r + s[15]);
        this.x = (s[0] * e + s[4] * i + s[8] * r + s[12]) * n;
        this.y = (s[1] * e + s[5] * i + s[9] * r + s[13]) * n;
        this.z = (s[2] * e + s[6] * i + s[10] * r + s[14]) * n;
        return this;
      }
      applyQuaternion(t) {
        const e = this.x;
        const i = this.y;
        const r = this.z;
        const s = t.x;
        const n = t.y;
        const a = t.z;
        const o = t.w;
        const l = (n * r - a * i) * 2;
        const h = (a * e - s * r) * 2;
        const c = (s * i - n * e) * 2;
        this.x = e + o * l + n * c - a * h;
        this.y = i + o * h + a * l - s * c;
        this.z = r + o * c + s * h - n * l;
        return this;
      }
      project(t) {
        return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
      }
      unproject(t) {
        return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
      }
      transformDirection(t) {
        const e = this.x;
        const i = this.y;
        const r = this.z;
        const s = t.elements;
        this.x = s[0] * e + s[4] * i + s[8] * r;
        this.y = s[1] * e + s[5] * i + s[9] * r;
        this.z = s[2] * e + s[6] * i + s[10] * r;
        return this.normalize();
      }
      divide(t) {
        this.x /= t.x;
        this.y /= t.y;
        this.z /= t.z;
        return this;
      }
      divideScalar(t) {
        return this.multiplyScalar(1 / t);
      }
      min(t) {
        this.x = Math.min(this.x, t.x);
        this.y = Math.min(this.y, t.y);
        this.z = Math.min(this.z, t.z);
        return this;
      }
      max(t) {
        this.x = Math.max(this.x, t.x);
        this.y = Math.max(this.y, t.y);
        this.z = Math.max(this.z, t.z);
        return this;
      }
      clamp(t, e) {
        this.x = E(this.x, t.x, e.x);
        this.y = E(this.y, t.y, e.y);
        this.z = E(this.z, t.z, e.z);
        return this;
      }
      clampScalar(t, e) {
        this.x = E(this.x, t, e);
        this.y = E(this.y, t, e);
        this.z = E(this.z, t, e);
        return this;
      }
      clampLength(t, e) {
        const i = this.length();
        return this.divideScalar(i || 1).multiplyScalar(E(i, t, e));
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
      dot(t) {
        return this.x * t.x + this.y * t.y + this.z * t.z;
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
      setLength(t) {
        return this.normalize().multiplyScalar(t);
      }
      lerp(t, e) {
        this.x += (t.x - this.x) * e;
        this.y += (t.y - this.y) * e;
        this.z += (t.z - this.z) * e;
        return this;
      }
      lerpVectors(t, e, i) {
        this.x = t.x + (e.x - t.x) * i;
        this.y = t.y + (e.y - t.y) * i;
        this.z = t.z + (e.z - t.z) * i;
        return this;
      }
      cross(t) {
        return this.crossVectors(this, t);
      }
      crossVectors(t, e) {
        const i = t.x;
        const r = t.y;
        const s = t.z;
        const n = e.x;
        const a = e.y;
        const o = e.z;
        this.x = r * o - s * a;
        this.y = s * n - i * o;
        this.z = i * a - r * n;
        return this;
      }
      projectOnVector(t) {
        const e = t.lengthSq();
        if (e === 0) {
          return this.set(0, 0, 0);
        }
        const i = t.dot(this) / e;
        return this.copy(t).multiplyScalar(i);
      }
      projectOnPlane(t) {
        z.copy(this).projectOnVector(t);
        return this.sub(z);
      }
      reflect(t) {
        return this.sub(z.copy(t).multiplyScalar(this.dot(t) * 2));
      }
      angleTo(t) {
        const e = Math.sqrt(this.lengthSq() * t.lengthSq());
        if (e === 0) {
          return Math.PI / 2;
        }
        const i = this.dot(t) / e;
        return Math.acos(E(i, -1, 1));
      }
      distanceTo(t) {
        return Math.sqrt(this.distanceToSquared(t));
      }
      distanceToSquared(t) {
        const e = this.x - t.x;
        const i = this.y - t.y;
        const r = this.z - t.z;
        return e * e + i * i + r * r;
      }
      manhattanDistanceTo(t) {
        return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
      }
      setFromSpherical(t) {
        return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
      }
      setFromSphericalCoords(t, e, i) {
        const r = Math.sin(e) * t;
        this.x = r * Math.sin(i);
        this.y = Math.cos(e) * t;
        this.z = r * Math.cos(i);
        return this;
      }
      setFromCylindrical(t) {
        return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
      }
      setFromCylindricalCoords(t, e, i) {
        this.x = t * Math.sin(e);
        this.y = i;
        this.z = t * Math.cos(e);
        return this;
      }
      setFromMatrixPosition(t) {
        const e = t.elements;
        this.x = e[12];
        this.y = e[13];
        this.z = e[14];
        return this;
      }
      setFromMatrixScale(t) {
        const e = this.setFromMatrixColumn(t, 0).length();
        const i = this.setFromMatrixColumn(t, 1).length();
        const r = this.setFromMatrixColumn(t, 2).length();
        this.x = e;
        this.y = i;
        this.z = r;
        return this;
      }
      setFromMatrixColumn(t, e) {
        return this.fromArray(t.elements, e * 4);
      }
      setFromMatrix3Column(t, e) {
        return this.fromArray(t.elements, e * 3);
      }
      setFromEuler(t) {
        this.x = t._x;
        this.y = t._y;
        this.z = t._z;
        return this;
      }
      setFromColor(t) {
        this.x = t.r;
        this.y = t.g;
        this.z = t.b;
        return this;
      }
      equals(t) {
        return t.x === this.x && t.y === this.y && t.z === this.z;
      }
      fromArray(t, e = 0) {
        this.x = t[e];
        this.y = t[e + 1];
        this.z = t[e + 2];
        return this;
      }
      toArray(t = [], e = 0) {
        t[e] = this.x;
        t[e + 1] = this.y;
        t[e + 2] = this.z;
        return t;
      }
      fromBufferAttribute(t, e) {
        this.x = t.getX(e);
        this.y = t.getY(e);
        this.z = t.getZ(e);
        return this;
      }
      random() {
        this.x = Math.random();
        this.y = Math.random();
        this.z = Math.random();
        return this;
      }
      randomDirection() {
        const t = Math.random() * Math.PI * 2;
        const e = Math.random() * 2 - 1;
        const i = Math.sqrt(1 - e * e);
        this.x = i * Math.cos(t);
        this.y = e;
        this.z = i * Math.sin(t);
        return this;
      }
      *[Symbol.iterator]() {
        yield this.x;
        yield this.y;
        yield this.z;
      }
    }
    const z = new R();
    const W = new D();
    class F {
      constructor(t, e, i, r, s, n, a, o, l) {
        F.prototype.isMatrix3 = true;
        this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1];
        if (t !== undefined) {
          this.set(t, e, i, r, s, n, a, o, l);
        }
      }
      set(t, e, i, r, s, n, a, o, l) {
        const h = this.elements;
        h[0] = t;
        h[1] = r;
        h[2] = a;
        h[3] = e;
        h[4] = s;
        h[5] = o;
        h[6] = i;
        h[7] = n;
        h[8] = l;
        return this;
      }
      identity() {
        this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
        return this;
      }
      copy(t) {
        const e = this.elements;
        const i = t.elements;
        e[0] = i[0];
        e[1] = i[1];
        e[2] = i[2];
        e[3] = i[3];
        e[4] = i[4];
        e[5] = i[5];
        e[6] = i[6];
        e[7] = i[7];
        e[8] = i[8];
        return this;
      }
      extractBasis(t, e, i) {
        t.setFromMatrix3Column(this, 0);
        e.setFromMatrix3Column(this, 1);
        i.setFromMatrix3Column(this, 2);
        return this;
      }
      setFromMatrix4(t) {
        const e = t.elements;
        this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]);
        return this;
      }
      multiply(t) {
        return this.multiplyMatrices(this, t);
      }
      premultiply(t) {
        return this.multiplyMatrices(t, this);
      }
      multiplyMatrices(t, e) {
        const i = t.elements;
        const r = e.elements;
        const s = this.elements;
        const n = i[0];
        const a = i[3];
        const o = i[6];
        const l = i[1];
        const h = i[4];
        const c = i[7];
        const A = i[2];
        const d = i[5];
        const u = i[8];
        const f = r[0];
        const g = r[3];
        const p = r[6];
        const m = r[1];
        const b = r[4];
        const y = r[7];
        const w = r[2];
        const I = r[5];
        const B = r[8];
        s[0] = n * f + a * m + o * w;
        s[3] = n * g + a * b + o * I;
        s[6] = n * p + a * y + o * B;
        s[1] = l * f + h * m + c * w;
        s[4] = l * g + h * b + c * I;
        s[7] = l * p + h * y + c * B;
        s[2] = A * f + d * m + u * w;
        s[5] = A * g + d * b + u * I;
        s[8] = A * p + d * y + u * B;
        return this;
      }
      multiplyScalar(t) {
        const e = this.elements;
        e[0] *= t;
        e[3] *= t;
        e[6] *= t;
        e[1] *= t;
        e[4] *= t;
        e[7] *= t;
        e[2] *= t;
        e[5] *= t;
        e[8] *= t;
        return this;
      }
      determinant() {
        const t = this.elements;
        const e = t[0];
        const i = t[1];
        const r = t[2];
        const s = t[3];
        const n = t[4];
        const a = t[5];
        const o = t[6];
        const l = t[7];
        const h = t[8];
        return e * n * h - e * a * l - i * s * h + i * a * o + r * s * l - r * n * o;
      }
      invert() {
        const t = this.elements;
        const e = t[0];
        const i = t[1];
        const r = t[2];
        const s = t[3];
        const n = t[4];
        const a = t[5];
        const o = t[6];
        const l = t[7];
        const h = t[8];
        const c = h * n - a * l;
        const A = a * o - h * s;
        const d = l * s - n * o;
        const u = e * c + i * A + r * d;
        if (u === 0) {
          return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
        const f = 1 / u;
        t[0] = c * f;
        t[1] = (r * l - h * i) * f;
        t[2] = (a * i - r * n) * f;
        t[3] = A * f;
        t[4] = (h * e - r * o) * f;
        t[5] = (r * s - a * e) * f;
        t[6] = d * f;
        t[7] = (i * o - l * e) * f;
        t[8] = (n * e - i * s) * f;
        return this;
      }
      transpose() {
        let t;
        const e = this.elements;
        t = e[1];
        e[1] = e[3];
        e[3] = t;
        t = e[2];
        e[2] = e[6];
        e[6] = t;
        t = e[5];
        e[5] = e[7];
        e[7] = t;
        return this;
      }
      getNormalMatrix(t) {
        return this.setFromMatrix4(t).invert().transpose();
      }
      transposeIntoArray(t) {
        const e = this.elements;
        t[0] = e[0];
        t[1] = e[3];
        t[2] = e[6];
        t[3] = e[1];
        t[4] = e[4];
        t[5] = e[7];
        t[6] = e[2];
        t[7] = e[5];
        t[8] = e[8];
        return this;
      }
      setUvTransform(t, e, i, r, s, n, a) {
        const o = Math.cos(s);
        const l = Math.sin(s);
        this.set(i * o, i * l, -i * (o * n + l * a) + n + t, -r * l, r * o, -r * (-l * n + o * a) + a + e, 0, 0, 1);
        return this;
      }
      scale(t, e) {
        this.premultiply(U.makeScale(t, e));
        return this;
      }
      rotate(t) {
        this.premultiply(U.makeRotation(-t));
        return this;
      }
      translate(t, e) {
        this.premultiply(U.makeTranslation(t, e));
        return this;
      }
      makeTranslation(t, e) {
        if (t.isVector2) {
          this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1);
        } else {
          this.set(1, 0, t, 0, 1, e, 0, 0, 1);
        }
        return this;
      }
      makeRotation(t) {
        const e = Math.cos(t);
        const i = Math.sin(t);
        this.set(e, -i, 0, i, e, 0, 0, 0, 1);
        return this;
      }
      makeScale(t, e) {
        this.set(t, 0, 0, 0, e, 0, 0, 0, 1);
        return this;
      }
      equals(t) {
        const e = this.elements;
        const i = t.elements;
        for (let t = 0; t < 9; t++) {
          if (e[t] !== i[t]) {
            return false;
          }
        }
        return true;
      }
      fromArray(t, e = 0) {
        for (let i = 0; i < 9; i++) {
          this.elements[i] = t[i + e];
        }
        return this;
      }
      toArray(t = [], e = 0) {
        const i = this.elements;
        t[e] = i[0];
        t[e + 1] = i[1];
        t[e + 2] = i[2];
        t[e + 3] = i[3];
        t[e + 4] = i[4];
        t[e + 5] = i[5];
        t[e + 6] = i[6];
        t[e + 7] = i[7];
        t[e + 8] = i[8];
        return t;
      }
      clone() {
        return new this.constructor().fromArray(this.elements);
      }
    }
    const U = new F();
    const N = new F().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322);
    const L = new F().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
    function O() {
      const t = {
        enabled: true,
        workingColorSpace: d,
        spaces: {},
        convert: function (t, e, i) {
          if (this.enabled !== false && e !== i && e && i) {
            if (this.spaces[e].transfer === f) {
              t.r = H(t.r);
              t.g = H(t.g);
              t.b = H(t.b);
            }
            if (this.spaces[e].primaries !== this.spaces[i].primaries) {
              t.applyMatrix3(this.spaces[e].toXYZ);
              t.applyMatrix3(this.spaces[i].fromXYZ);
            }
            if (this.spaces[i].transfer === f) {
              t.r = G(t.r);
              t.g = G(t.g);
              t.b = G(t.b);
            }
            return t;
          } else {
            return t;
          }
        },
        workingToColorSpace: function (t, e) {
          return this.convert(t, this.workingColorSpace, e);
        },
        colorSpaceToWorking: function (t, e) {
          return this.convert(t, e, this.workingColorSpace);
        },
        getPrimaries: function (t) {
          return this.spaces[t].primaries;
        },
        getTransfer: function (t) {
          if (t === "") {
            return u;
          } else {
            return this.spaces[t].transfer;
          }
        },
        getToneMappingMode: function (t) {
          return this.spaces[t].outputColorSpaceConfig.toneMappingMode || "standard";
        },
        getLuminanceCoefficients: function (t, e = this.workingColorSpace) {
          return t.fromArray(this.spaces[e].luminanceCoefficients);
        },
        define: function (t) {
          Object.assign(this.spaces, t);
        },
        _getMatrix: function (t, e, i) {
          return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[i].fromXYZ);
        },
        _getDrawingBufferColorSpace: function (t) {
          return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace;
        },
        _getUnpackColorSpace: function (t = this.workingColorSpace) {
          return this.spaces[t].workingColorSpaceConfig.unpackColorSpace;
        },
        fromWorkingColorSpace: function (e, i) {
          C("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().");
          return t.workingToColorSpace(e, i);
        },
        toWorkingColorSpace: function (e, i) {
          C("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().");
          return t.colorSpaceToWorking(e, i);
        }
      };
      const e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06];
      const i = [0.2126, 0.7152, 0.0722];
      const r = [0.3127, 0.329];
      t.define({
        [d]: {
          primaries: e,
          whitePoint: r,
          transfer: u,
          toXYZ: N,
          fromXYZ: L,
          luminanceCoefficients: i,
          workingColorSpaceConfig: {
            unpackColorSpace: A
          },
          outputColorSpaceConfig: {
            drawingBufferColorSpace: A
          }
        },
        [A]: {
          primaries: e,
          whitePoint: r,
          transfer: f,
          toXYZ: N,
          fromXYZ: L,
          luminanceCoefficients: i,
          outputColorSpaceConfig: {
            drawingBufferColorSpace: A
          }
        }
      });
      return t;
    }
    const V = O();
    function H(t) {
      if (t < 0.04045) {
        return t * 0.0773993808;
      } else {
        return Math.pow(t * 0.9478672986 + 0.0521327014, 2.4);
      }
    }
    function G(t) {
      if (t < 0.0031308) {
        return t * 12.92;
      } else {
        return Math.pow(t, 0.41666) * 1.055 - 0.055;
      }
    }
    let J;
    class q {
      static getDataURL(t, e = "image/png") {
        if (/^data:/i.test(t.src)) {
          return t.src;
        }
        if (typeof HTMLCanvasElement == "undefined") {
          return t.src;
        }
        let i;
        if (t instanceof HTMLCanvasElement) {
          i = t;
        } else {
          if (J === undefined) {
            J = y("canvas");
          }
          J.width = t.width;
          J.height = t.height;
          const e = J.getContext("2d");
          if (t instanceof ImageData) {
            e.putImageData(t, 0, 0);
          } else {
            e.drawImage(t, 0, 0, t.width, t.height);
          }
          i = J;
        }
        return i.toDataURL(e);
      }
      static sRGBToLinear(t) {
        if (typeof HTMLImageElement != "undefined" && t instanceof HTMLImageElement || typeof HTMLCanvasElement != "undefined" && t instanceof HTMLCanvasElement || typeof ImageBitmap != "undefined" && t instanceof ImageBitmap) {
          const e = y("canvas");
          e.width = t.width;
          e.height = t.height;
          const i = e.getContext("2d");
          i.drawImage(t, 0, 0, t.width, t.height);
          const r = i.getImageData(0, 0, t.width, t.height);
          const s = r.data;
          for (let t = 0; t < s.length; t++) {
            s[t] = H(s[t] / 255) * 255;
          }
          i.putImageData(r, 0, 0);
          return e;
        }
        if (t.data) {
          const e = t.data.slice(0);
          for (let t = 0; t < e.length; t++) {
            if (e instanceof Uint8Array || e instanceof Uint8ClampedArray) {
              e[t] = Math.floor(H(e[t] / 255) * 255);
            } else {
              e[t] = H(e[t]);
            }
          }
          return {
            data: e,
            width: t.width,
            height: t.height
          };
        }
        B("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.");
        return t;
      }
    }
    let Z = 0;
    class Y {
      constructor(t = null) {
        this.isSource = true;
        Object.defineProperty(this, "id", {
          value: Z++
        });
        this.uuid = _();
        this.data = t;
        this.dataReady = true;
        this.version = 0;
      }
      getSize(t) {
        const e = this.data;
        if (typeof HTMLVideoElement != "undefined" && e instanceof HTMLVideoElement) {
          t.set(e.videoWidth, e.videoHeight, 0);
        } else if (e instanceof VideoFrame) {
          t.set(e.displayHeight, e.displayWidth, 0);
        } else if (e !== null) {
          t.set(e.width, e.height, e.depth || 0);
        } else {
          t.set(0, 0, 0);
        }
        return t;
      }
      set needsUpdate(t) {
        if (t === true) {
          this.version++;
        }
      }
      toJSON(t) {
        const e = t === undefined || typeof t == "string";
        if (!e && t.images[this.uuid] !== undefined) {
          return t.images[this.uuid];
        }
        const i = {
          uuid: this.uuid,
          url: ""
        };
        const r = this.data;
        if (r !== null) {
          let t;
          if (Array.isArray(r)) {
            t = [];
            for (let e = 0, i = r.length; e < i; e++) {
              if (r[e].isDataTexture) {
                t.push(K(r[e].image));
              } else {
                t.push(K(r[e]));
              }
            }
          } else {
            t = K(r);
          }
          i.url = t;
        }
        if (!e) {
          t.images[this.uuid] = i;
        }
        return i;
      }
    }
    function K(t) {
      if (typeof HTMLImageElement != "undefined" && t instanceof HTMLImageElement || typeof HTMLCanvasElement != "undefined" && t instanceof HTMLCanvasElement || typeof ImageBitmap != "undefined" && t instanceof ImageBitmap) {
        return q.getDataURL(t);
      } else if (t.data) {
        return {
          data: Array.from(t.data),
          width: t.width,
          height: t.height,
          type: t.data.constructor.name
        };
      } else {
        B("Texture: Unable to serialize Texture.");
        return {};
      }
    }
    let j = 0;
    const X = new R();
    class $ extends S {
      constructor(t = $.DEFAULT_IMAGE, e = $.DEFAULT_MAPPING, i = 1001, r = 1001, s = 1006, n = 1008, a = 1023, o = 1009, l = $.DEFAULT_ANISOTROPY, h = "") {
        super();
        this.isTexture = true;
        Object.defineProperty(this, "id", {
          value: j++
        });
        this.uuid = _();
        this.name = "";
        this.source = new Y(t);
        this.mipmaps = [];
        this.mapping = e;
        this.channel = 0;
        this.wrapS = i;
        this.wrapT = r;
        this.magFilter = s;
        this.minFilter = n;
        this.anisotropy = l;
        this.format = a;
        this.internalFormat = null;
        this.type = o;
        this.offset = new v(0, 0);
        this.repeat = new v(1, 1);
        this.center = new v(0, 0);
        this.rotation = 0;
        this.matrixAutoUpdate = true;
        this.matrix = new F();
        this.generateMipmaps = true;
        this.premultiplyAlpha = false;
        this.flipY = true;
        this.unpackAlignment = 4;
        this.colorSpace = h;
        this.userData = {};
        this.updateRanges = [];
        this.version = 0;
        this.onUpdate = null;
        this.renderTarget = null;
        this.isRenderTargetTexture = false;
        this.isArrayTexture = !!t && !!t.depth && !!(t.depth > 1);
        this.pmremVersion = 0;
      }
      get width() {
        return this.source.getSize(X).x;
      }
      get height() {
        return this.source.getSize(X).y;
      }
      get depth() {
        return this.source.getSize(X).z;
      }
      get image() {
        return this.source.data;
      }
      set image(t = null) {
        this.source.data = t;
      }
      updateMatrix() {
        this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
      }
      addUpdateRange(t, e) {
        this.updateRanges.push({
          start: t,
          count: e
        });
      }
      clearUpdateRanges() {
        this.updateRanges.length = 0;
      }
      clone() {
        return new this.constructor().copy(this);
      }
      copy(t) {
        this.name = t.name;
        this.source = t.source;
        this.mipmaps = t.mipmaps.slice(0);
        this.mapping = t.mapping;
        this.channel = t.channel;
        this.wrapS = t.wrapS;
        this.wrapT = t.wrapT;
        this.magFilter = t.magFilter;
        this.minFilter = t.minFilter;
        this.anisotropy = t.anisotropy;
        this.format = t.format;
        this.internalFormat = t.internalFormat;
        this.type = t.type;
        this.offset.copy(t.offset);
        this.repeat.copy(t.repeat);
        this.center.copy(t.center);
        this.rotation = t.rotation;
        this.matrixAutoUpdate = t.matrixAutoUpdate;
        this.matrix.copy(t.matrix);
        this.generateMipmaps = t.generateMipmaps;
        this.premultiplyAlpha = t.premultiplyAlpha;
        this.flipY = t.flipY;
        this.unpackAlignment = t.unpackAlignment;
        this.colorSpace = t.colorSpace;
        this.renderTarget = t.renderTarget;
        this.isRenderTargetTexture = t.isRenderTargetTexture;
        this.isArrayTexture = t.isArrayTexture;
        this.userData = JSON.parse(JSON.stringify(t.userData));
        this.needsUpdate = true;
        return this;
      }
      setValues(t) {
        for (const e in t) {
          const i = t[e];
          if (i === undefined) {
            B(`Texture.setValues(): parameter '${e}' has value of undefined.`);
            continue;
          }
          const r = this[e];
          if (r !== undefined) {
            if (r && i && r.isVector2 && i.isVector2 || r && i && r.isVector3 && i.isVector3 || r && i && r.isMatrix3 && i.isMatrix3) {
              r.copy(i);
            } else {
              this[e] = i;
            }
          } else {
            B(`Texture.setValues(): property '${e}' does not exist.`);
          }
        }
      }
      toJSON(t) {
        const e = t === undefined || typeof t == "string";
        if (!e && t.textures[this.uuid] !== undefined) {
          return t.textures[this.uuid];
        }
        const i = {
          metadata: {
            version: 4.7,
            type: "Texture",
            generator: "Texture.toJSON"
          },
          uuid: this.uuid,
          name: this.name,
          image: this.source.toJSON(t).uuid,
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
          i.userData = this.userData;
        }
        if (!e) {
          t.textures[this.uuid] = i;
        }
        return i;
      }
      dispose() {
        this.dispatchEvent({
          type: "dispose"
        });
      }
      transformUv(i) {
        if (this.mapping !== 300) {
          return i;
        }
        i.applyMatrix3(this.matrix);
        if (i.x < 0 || i.x > 1) {
          switch (this.wrapS) {
            case t:
              i.x = i.x - Math.floor(i.x);
              break;
            case e:
              i.x = i.x < 0 ? 0 : 1;
              break;
            case r:
              if (Math.abs(Math.floor(i.x) % 2) === 1) {
                i.x = Math.ceil(i.x) - i.x;
              } else {
                i.x = i.x - Math.floor(i.x);
              }
          }
        }
        if (i.y < 0 || i.y > 1) {
          switch (this.wrapT) {
            case t:
              i.y = i.y - Math.floor(i.y);
              break;
            case e:
              i.y = i.y < 0 ? 0 : 1;
              break;
            case r:
              if (Math.abs(Math.floor(i.y) % 2) === 1) {
                i.y = Math.ceil(i.y) - i.y;
              } else {
                i.y = i.y - Math.floor(i.y);
              }
          }
        }
        if (this.flipY) {
          i.y = 1 - i.y;
        }
        return i;
      }
      set needsUpdate(t) {
        if (t === true) {
          this.version++;
          this.source.needsUpdate = true;
        }
      }
      set needsPMREMUpdate(t) {
        if (t === true) {
          this.pmremVersion++;
        }
      }
    }
    $.DEFAULT_IMAGE = null;
    $.DEFAULT_MAPPING = 300;
    $.DEFAULT_ANISOTROPY = 1;
    class tt {
      constructor(t = 0, e = 0, i = 0, r = 1) {
        tt.prototype.isVector4 = true;
        this.x = t;
        this.y = e;
        this.z = i;
        this.w = r;
      }
      get width() {
        return this.z;
      }
      set width(t) {
        this.z = t;
      }
      get height() {
        return this.w;
      }
      set height(t) {
        this.w = t;
      }
      set(t, e, i, r) {
        this.x = t;
        this.y = e;
        this.z = i;
        this.w = r;
        return this;
      }
      setScalar(t) {
        this.x = t;
        this.y = t;
        this.z = t;
        this.w = t;
        return this;
      }
      setX(t) {
        this.x = t;
        return this;
      }
      setY(t) {
        this.y = t;
        return this;
      }
      setZ(t) {
        this.z = t;
        return this;
      }
      setW(t) {
        this.w = t;
        return this;
      }
      setComponent(t, e) {
        switch (t) {
          case 0:
            this.x = e;
            break;
          case 1:
            this.y = e;
            break;
          case 2:
            this.z = e;
            break;
          case 3:
            this.w = e;
            break;
          default:
            throw new Error("index is out of range: " + t);
        }
        return this;
      }
      getComponent(t) {
        switch (t) {
          case 0:
            return this.x;
          case 1:
            return this.y;
          case 2:
            return this.z;
          case 3:
            return this.w;
          default:
            throw new Error("index is out of range: " + t);
        }
      }
      clone() {
        return new this.constructor(this.x, this.y, this.z, this.w);
      }
      copy(t) {
        this.x = t.x;
        this.y = t.y;
        this.z = t.z;
        this.w = t.w !== undefined ? t.w : 1;
        return this;
      }
      add(t) {
        this.x += t.x;
        this.y += t.y;
        this.z += t.z;
        this.w += t.w;
        return this;
      }
      addScalar(t) {
        this.x += t;
        this.y += t;
        this.z += t;
        this.w += t;
        return this;
      }
      addVectors(t, e) {
        this.x = t.x + e.x;
        this.y = t.y + e.y;
        this.z = t.z + e.z;
        this.w = t.w + e.w;
        return this;
      }
      addScaledVector(t, e) {
        this.x += t.x * e;
        this.y += t.y * e;
        this.z += t.z * e;
        this.w += t.w * e;
        return this;
      }
      sub(t) {
        this.x -= t.x;
        this.y -= t.y;
        this.z -= t.z;
        this.w -= t.w;
        return this;
      }
      subScalar(t) {
        this.x -= t;
        this.y -= t;
        this.z -= t;
        this.w -= t;
        return this;
      }
      subVectors(t, e) {
        this.x = t.x - e.x;
        this.y = t.y - e.y;
        this.z = t.z - e.z;
        this.w = t.w - e.w;
        return this;
      }
      multiply(t) {
        this.x *= t.x;
        this.y *= t.y;
        this.z *= t.z;
        this.w *= t.w;
        return this;
      }
      multiplyScalar(t) {
        this.x *= t;
        this.y *= t;
        this.z *= t;
        this.w *= t;
        return this;
      }
      applyMatrix4(t) {
        const e = this.x;
        const i = this.y;
        const r = this.z;
        const s = this.w;
        const n = t.elements;
        this.x = n[0] * e + n[4] * i + n[8] * r + n[12] * s;
        this.y = n[1] * e + n[5] * i + n[9] * r + n[13] * s;
        this.z = n[2] * e + n[6] * i + n[10] * r + n[14] * s;
        this.w = n[3] * e + n[7] * i + n[11] * r + n[15] * s;
        return this;
      }
      divide(t) {
        this.x /= t.x;
        this.y /= t.y;
        this.z /= t.z;
        this.w /= t.w;
        return this;
      }
      divideScalar(t) {
        return this.multiplyScalar(1 / t);
      }
      setAxisAngleFromQuaternion(t) {
        this.w = Math.acos(t.w) * 2;
        const e = Math.sqrt(1 - t.w * t.w);
        if (e < 0.0001) {
          this.x = 1;
          this.y = 0;
          this.z = 0;
        } else {
          this.x = t.x / e;
          this.y = t.y / e;
          this.z = t.z / e;
        }
        return this;
      }
      setAxisAngleFromRotationMatrix(t) {
        let e;
        let i;
        let r;
        let s;
        const n = 0.01;
        const a = 0.1;
        const o = t.elements;
        const l = o[0];
        const h = o[4];
        const c = o[8];
        const A = o[1];
        const d = o[5];
        const u = o[9];
        const f = o[2];
        const g = o[6];
        const p = o[10];
        if (Math.abs(h - A) < n && Math.abs(c - f) < n && Math.abs(u - g) < n) {
          if (Math.abs(h + A) < a && Math.abs(c + f) < a && Math.abs(u + g) < a && Math.abs(l + d + p - 3) < a) {
            this.set(1, 0, 0, 0);
            return this;
          }
          e = Math.PI;
          const t = (l + 1) / 2;
          const o = (d + 1) / 2;
          const m = (p + 1) / 2;
          const b = (h + A) / 4;
          const y = (c + f) / 4;
          const w = (u + g) / 4;
          if (t > o && t > m) {
            if (t < n) {
              i = 0;
              r = 0.707106781;
              s = 0.707106781;
            } else {
              i = Math.sqrt(t);
              r = b / i;
              s = y / i;
            }
          } else if (o > m) {
            if (o < n) {
              i = 0.707106781;
              r = 0;
              s = 0.707106781;
            } else {
              r = Math.sqrt(o);
              i = b / r;
              s = w / r;
            }
          } else if (m < n) {
            i = 0.707106781;
            r = 0.707106781;
            s = 0;
          } else {
            s = Math.sqrt(m);
            i = y / s;
            r = w / s;
          }
          this.set(i, r, s, e);
          return this;
        }
        let m = Math.sqrt((g - u) * (g - u) + (c - f) * (c - f) + (A - h) * (A - h));
        if (Math.abs(m) < 0.001) {
          m = 1;
        }
        this.x = (g - u) / m;
        this.y = (c - f) / m;
        this.z = (A - h) / m;
        this.w = Math.acos((l + d + p - 1) / 2);
        return this;
      }
      setFromMatrixPosition(t) {
        const e = t.elements;
        this.x = e[12];
        this.y = e[13];
        this.z = e[14];
        this.w = e[15];
        return this;
      }
      min(t) {
        this.x = Math.min(this.x, t.x);
        this.y = Math.min(this.y, t.y);
        this.z = Math.min(this.z, t.z);
        this.w = Math.min(this.w, t.w);
        return this;
      }
      max(t) {
        this.x = Math.max(this.x, t.x);
        this.y = Math.max(this.y, t.y);
        this.z = Math.max(this.z, t.z);
        this.w = Math.max(this.w, t.w);
        return this;
      }
      clamp(t, e) {
        this.x = E(this.x, t.x, e.x);
        this.y = E(this.y, t.y, e.y);
        this.z = E(this.z, t.z, e.z);
        this.w = E(this.w, t.w, e.w);
        return this;
      }
      clampScalar(t, e) {
        this.x = E(this.x, t, e);
        this.y = E(this.y, t, e);
        this.z = E(this.z, t, e);
        this.w = E(this.w, t, e);
        return this;
      }
      clampLength(t, e) {
        const i = this.length();
        return this.divideScalar(i || 1).multiplyScalar(E(i, t, e));
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
      dot(t) {
        return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
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
      setLength(t) {
        return this.normalize().multiplyScalar(t);
      }
      lerp(t, e) {
        this.x += (t.x - this.x) * e;
        this.y += (t.y - this.y) * e;
        this.z += (t.z - this.z) * e;
        this.w += (t.w - this.w) * e;
        return this;
      }
      lerpVectors(t, e, i) {
        this.x = t.x + (e.x - t.x) * i;
        this.y = t.y + (e.y - t.y) * i;
        this.z = t.z + (e.z - t.z) * i;
        this.w = t.w + (e.w - t.w) * i;
        return this;
      }
      equals(t) {
        return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
      }
      fromArray(t, e = 0) {
        this.x = t[e];
        this.y = t[e + 1];
        this.z = t[e + 2];
        this.w = t[e + 3];
        return this;
      }
      toArray(t = [], e = 0) {
        t[e] = this.x;
        t[e + 1] = this.y;
        t[e + 2] = this.z;
        t[e + 3] = this.w;
        return t;
      }
      fromBufferAttribute(t, e) {
        this.x = t.getX(e);
        this.y = t.getY(e);
        this.z = t.getZ(e);
        this.w = t.getW(e);
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
    class et {
      constructor(t = new R(Infinity, Infinity, Infinity), e = new R(-Infinity, -Infinity, -Infinity)) {
        this.isBox3 = true;
        this.min = t;
        this.max = e;
      }
      set(t, e) {
        this.min.copy(t);
        this.max.copy(e);
        return this;
      }
      setFromArray(t) {
        this.makeEmpty();
        for (let e = 0, i = t.length; e < i; e += 3) {
          this.expandByPoint(rt.fromArray(t, e));
        }
        return this;
      }
      setFromBufferAttribute(t) {
        this.makeEmpty();
        for (let e = 0, i = t.count; e < i; e++) {
          this.expandByPoint(rt.fromBufferAttribute(t, e));
        }
        return this;
      }
      setFromPoints(t) {
        this.makeEmpty();
        for (let e = 0, i = t.length; e < i; e++) {
          this.expandByPoint(t[e]);
        }
        return this;
      }
      setFromCenterAndSize(t, e) {
        const i = rt.copy(e).multiplyScalar(0.5);
        this.min.copy(t).sub(i);
        this.max.copy(t).add(i);
        return this;
      }
      setFromObject(t, e = false) {
        this.makeEmpty();
        return this.expandByObject(t, e);
      }
      clone() {
        return new this.constructor().copy(this);
      }
      copy(t) {
        this.min.copy(t.min);
        this.max.copy(t.max);
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
      getCenter(t) {
        if (this.isEmpty()) {
          return t.set(0, 0, 0);
        } else {
          return t.addVectors(this.min, this.max).multiplyScalar(0.5);
        }
      }
      getSize(t) {
        if (this.isEmpty()) {
          return t.set(0, 0, 0);
        } else {
          return t.subVectors(this.max, this.min);
        }
      }
      expandByPoint(t) {
        this.min.min(t);
        this.max.max(t);
        return this;
      }
      expandByVector(t) {
        this.min.sub(t);
        this.max.add(t);
        return this;
      }
      expandByScalar(t) {
        this.min.addScalar(-t);
        this.max.addScalar(t);
        return this;
      }
      expandByObject(t, e = false) {
        t.updateWorldMatrix(false, false);
        const i = t.geometry;
        if (i !== undefined) {
          const r = i.getAttribute("position");
          if (e === true && r !== undefined && t.isInstancedMesh !== true) {
            for (let e = 0, i = r.count; e < i; e++) {
              if (t.isMesh === true) {
                t.getVertexPosition(e, rt);
              } else {
                rt.fromBufferAttribute(r, e);
              }
              rt.applyMatrix4(t.matrixWorld);
              this.expandByPoint(rt);
            }
          } else {
            if (t.boundingBox !== undefined) {
              if (t.boundingBox === null) {
                t.computeBoundingBox();
              }
              st.copy(t.boundingBox);
            } else {
              if (i.boundingBox === null) {
                i.computeBoundingBox();
              }
              st.copy(i.boundingBox);
            }
            st.applyMatrix4(t.matrixWorld);
            this.union(st);
          }
        }
        const r = t.children;
        for (let t = 0, i = r.length; t < i; t++) {
          this.expandByObject(r[t], e);
        }
        return this;
      }
      containsPoint(t) {
        return t.x >= this.min.x && t.x <= this.max.x && t.y >= this.min.y && t.y <= this.max.y && t.z >= this.min.z && t.z <= this.max.z;
      }
      containsBox(t) {
        return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
      }
      getParameter(t, e) {
        return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z));
      }
      intersectsBox(t) {
        return t.max.x >= this.min.x && t.min.x <= this.max.x && t.max.y >= this.min.y && t.min.y <= this.max.y && t.max.z >= this.min.z && t.min.z <= this.max.z;
      }
      intersectsSphere(t) {
        this.clampPoint(t.center, rt);
        return rt.distanceToSquared(t.center) <= t.radius * t.radius;
      }
      intersectsPlane(t) {
        let e;
        let i;
        if (t.normal.x > 0) {
          e = t.normal.x * this.min.x;
          i = t.normal.x * this.max.x;
        } else {
          e = t.normal.x * this.max.x;
          i = t.normal.x * this.min.x;
        }
        if (t.normal.y > 0) {
          e += t.normal.y * this.min.y;
          i += t.normal.y * this.max.y;
        } else {
          e += t.normal.y * this.max.y;
          i += t.normal.y * this.min.y;
        }
        if (t.normal.z > 0) {
          e += t.normal.z * this.min.z;
          i += t.normal.z * this.max.z;
        } else {
          e += t.normal.z * this.max.z;
          i += t.normal.z * this.min.z;
        }
        return e <= -t.constant && i >= -t.constant;
      }
      intersectsTriangle(t) {
        if (this.isEmpty()) {
          return false;
        }
        this.getCenter(At);
        dt.subVectors(this.max, At);
        nt.subVectors(t.a, At);
        at.subVectors(t.b, At);
        ot.subVectors(t.c, At);
        lt.subVectors(at, nt);
        ht.subVectors(ot, at);
        ct.subVectors(nt, ot);
        let e = [0, -lt.z, lt.y, 0, -ht.z, ht.y, 0, -ct.z, ct.y, lt.z, 0, -lt.x, ht.z, 0, -ht.x, ct.z, 0, -ct.x, -lt.y, lt.x, 0, -ht.y, ht.x, 0, -ct.y, ct.x, 0];
        return !!gt(e, nt, at, ot, dt) && (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !!gt(e, nt, at, ot, dt) && (ut.crossVectors(lt, ht), e = [ut.x, ut.y, ut.z], gt(e, nt, at, ot, dt)));
      }
      clampPoint(t, e) {
        return e.copy(t).clamp(this.min, this.max);
      }
      distanceToPoint(t) {
        return this.clampPoint(t, rt).distanceTo(t);
      }
      getBoundingSphere(t) {
        if (this.isEmpty()) {
          t.makeEmpty();
        } else {
          this.getCenter(t.center);
          t.radius = this.getSize(rt).length() * 0.5;
        }
        return t;
      }
      intersect(t) {
        this.min.max(t.min);
        this.max.min(t.max);
        if (this.isEmpty()) {
          this.makeEmpty();
        }
        return this;
      }
      union(t) {
        this.min.min(t.min);
        this.max.max(t.max);
        return this;
      }
      applyMatrix4(t) {
        if (!this.isEmpty()) {
          it[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t);
          it[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t);
          it[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t);
          it[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t);
          it[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t);
          it[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t);
          it[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t);
          it[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t);
          this.setFromPoints(it);
        }
        return this;
      }
      translate(t) {
        this.min.add(t);
        this.max.add(t);
        return this;
      }
      equals(t) {
        return t.min.equals(this.min) && t.max.equals(this.max);
      }
      toJSON() {
        return {
          min: this.min.toArray(),
          max: this.max.toArray()
        };
      }
      fromJSON(t) {
        this.min.fromArray(t.min);
        this.max.fromArray(t.max);
        return this;
      }
    }
    const it = [new R(), new R(), new R(), new R(), new R(), new R(), new R(), new R()];
    const rt = new R();
    const st = new et();
    const nt = new R();
    const at = new R();
    const ot = new R();
    const lt = new R();
    const ht = new R();
    const ct = new R();
    const At = new R();
    const dt = new R();
    const ut = new R();
    const ft = new R();
    function gt(t, e, i, r, s) {
      for (let n = 0, a = t.length - 3; n <= a; n += 3) {
        ft.fromArray(t, n);
        const a = s.x * Math.abs(ft.x) + s.y * Math.abs(ft.y) + s.z * Math.abs(ft.z);
        const o = e.dot(ft);
        const l = i.dot(ft);
        const h = r.dot(ft);
        if (Math.max(-Math.max(o, l, h), Math.min(o, l, h)) > a) {
          return false;
        }
      }
      return true;
    }
    const pt = new et();
    const mt = new R();
    const bt = new R();
    class yt {
      constructor(t = new R(), e = -1) {
        this.isSphere = true;
        this.center = t;
        this.radius = e;
      }
      set(t, e) {
        this.center.copy(t);
        this.radius = e;
        return this;
      }
      setFromPoints(t, e) {
        const i = this.center;
        if (e !== undefined) {
          i.copy(e);
        } else {
          pt.setFromPoints(t).getCenter(i);
        }
        let r = 0;
        for (let e = 0, s = t.length; e < s; e++) {
          r = Math.max(r, i.distanceToSquared(t[e]));
        }
        this.radius = Math.sqrt(r);
        return this;
      }
      copy(t) {
        this.center.copy(t.center);
        this.radius = t.radius;
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
      containsPoint(t) {
        return t.distanceToSquared(this.center) <= this.radius * this.radius;
      }
      distanceToPoint(t) {
        return t.distanceTo(this.center) - this.radius;
      }
      intersectsSphere(t) {
        const e = this.radius + t.radius;
        return t.center.distanceToSquared(this.center) <= e * e;
      }
      intersectsBox(t) {
        return t.intersectsSphere(this);
      }
      intersectsPlane(t) {
        return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
      }
      clampPoint(t, e) {
        const i = this.center.distanceToSquared(t);
        e.copy(t);
        if (i > this.radius * this.radius) {
          e.sub(this.center).normalize();
          e.multiplyScalar(this.radius).add(this.center);
        }
        return e;
      }
      getBoundingBox(t) {
        if (this.isEmpty()) {
          t.makeEmpty();
          return t;
        } else {
          t.set(this.center, this.center);
          t.expandByScalar(this.radius);
          return t;
        }
      }
      applyMatrix4(t) {
        this.center.applyMatrix4(t);
        this.radius = this.radius * t.getMaxScaleOnAxis();
        return this;
      }
      translate(t) {
        this.center.add(t);
        return this;
      }
      expandByPoint(t) {
        if (this.isEmpty()) {
          this.center.copy(t);
          this.radius = 0;
          return this;
        }
        mt.subVectors(t, this.center);
        const e = mt.lengthSq();
        if (e > this.radius * this.radius) {
          const t = Math.sqrt(e);
          const i = (t - this.radius) * 0.5;
          this.center.addScaledVector(mt, i / t);
          this.radius += i;
        }
        return this;
      }
      union(t) {
        if (t.isEmpty()) {
          return this;
        } else if (this.isEmpty()) {
          this.copy(t);
          return this;
        } else {
          if (this.center.equals(t.center) === true) {
            this.radius = Math.max(this.radius, t.radius);
          } else {
            bt.subVectors(t.center, this.center).setLength(t.radius);
            this.expandByPoint(mt.copy(t.center).add(bt));
            this.expandByPoint(mt.copy(t.center).sub(bt));
          }
          return this;
        }
      }
      equals(t) {
        return t.center.equals(this.center) && t.radius === this.radius;
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
      fromJSON(t) {
        this.radius = t.radius;
        this.center.fromArray(t.center);
        return this;
      }
    }
    const wt = new R();
    const It = new R();
    const Bt = new R();
    const xt = new R();
    const Ct = new R();
    const St = new R();
    const kt = new R();
    class _t {
      constructor(t = new R(), e = new R(0, 0, -1)) {
        this.origin = t;
        this.direction = e;
      }
      set(t, e) {
        this.origin.copy(t);
        this.direction.copy(e);
        return this;
      }
      copy(t) {
        this.origin.copy(t.origin);
        this.direction.copy(t.direction);
        return this;
      }
      at(t, e) {
        return e.copy(this.origin).addScaledVector(this.direction, t);
      }
      lookAt(t) {
        this.direction.copy(t).sub(this.origin).normalize();
        return this;
      }
      recast(t) {
        this.origin.copy(this.at(t, wt));
        return this;
      }
      closestPointToPoint(t, e) {
        e.subVectors(t, this.origin);
        const i = e.dot(this.direction);
        if (i < 0) {
          return e.copy(this.origin);
        } else {
          return e.copy(this.origin).addScaledVector(this.direction, i);
        }
      }
      distanceToPoint(t) {
        return Math.sqrt(this.distanceSqToPoint(t));
      }
      distanceSqToPoint(t) {
        const e = wt.subVectors(t, this.origin).dot(this.direction);
        if (e < 0) {
          return this.origin.distanceToSquared(t);
        } else {
          wt.copy(this.origin).addScaledVector(this.direction, e);
          return wt.distanceToSquared(t);
        }
      }
      distanceSqToSegment(t, e, i, r) {
        It.copy(t).add(e).multiplyScalar(0.5);
        Bt.copy(e).sub(t).normalize();
        xt.copy(this.origin).sub(It);
        const s = t.distanceTo(e) * 0.5;
        const n = -this.direction.dot(Bt);
        const a = xt.dot(this.direction);
        const o = -xt.dot(Bt);
        const l = xt.lengthSq();
        const h = Math.abs(1 - n * n);
        let c;
        let A;
        let d;
        let u;
        if (h > 0) {
          c = n * o - a;
          A = n * a - o;
          u = s * h;
          if (c >= 0) {
            if (A >= -u) {
              if (A <= u) {
                const t = 1 / h;
                c *= t;
                A *= t;
                d = c * (c + n * A + a * 2) + A * (n * c + A + o * 2) + l;
              } else {
                A = s;
                c = Math.max(0, -(n * A + a));
                d = -c * c + A * (A + o * 2) + l;
              }
            } else {
              A = -s;
              c = Math.max(0, -(n * A + a));
              d = -c * c + A * (A + o * 2) + l;
            }
          } else if (A <= -u) {
            c = Math.max(0, -(-n * s + a));
            A = c > 0 ? -s : Math.min(Math.max(-s, -o), s);
            d = -c * c + A * (A + o * 2) + l;
          } else if (A <= u) {
            c = 0;
            A = Math.min(Math.max(-s, -o), s);
            d = A * (A + o * 2) + l;
          } else {
            c = Math.max(0, -(n * s + a));
            A = c > 0 ? s : Math.min(Math.max(-s, -o), s);
            d = -c * c + A * (A + o * 2) + l;
          }
        } else {
          A = n > 0 ? -s : s;
          c = Math.max(0, -(n * A + a));
          d = -c * c + A * (A + o * 2) + l;
        }
        if (i) {
          i.copy(this.origin).addScaledVector(this.direction, c);
        }
        if (r) {
          r.copy(It).addScaledVector(Bt, A);
        }
        return d;
      }
      intersectSphere(t, e) {
        wt.subVectors(t.center, this.origin);
        const i = wt.dot(this.direction);
        const r = wt.dot(wt) - i * i;
        const s = t.radius * t.radius;
        if (r > s) {
          return null;
        }
        const n = Math.sqrt(s - r);
        const a = i - n;
        const o = i + n;
        if (o < 0) {
          return null;
        } else if (a < 0) {
          return this.at(o, e);
        } else {
          return this.at(a, e);
        }
      }
      intersectsSphere(t) {
        return !(t.radius < 0) && this.distanceSqToPoint(t.center) <= t.radius * t.radius;
      }
      distanceToPlane(t) {
        const e = t.normal.dot(this.direction);
        if (e === 0) {
          if (t.distanceToPoint(this.origin) === 0) {
            return 0;
          } else {
            return null;
          }
        }
        const i = -(this.origin.dot(t.normal) + t.constant) / e;
        if (i >= 0) {
          return i;
        } else {
          return null;
        }
      }
      intersectPlane(t, e) {
        const i = this.distanceToPlane(t);
        if (i === null) {
          return null;
        } else {
          return this.at(i, e);
        }
      }
      intersectsPlane(t) {
        const e = t.distanceToPoint(this.origin);
        if (e === 0) {
          return true;
        }
        return t.normal.dot(this.direction) * e < 0;
      }
      intersectBox(t, e) {
        let i;
        let r;
        let s;
        let n;
        let a;
        let o;
        const l = 1 / this.direction.x;
        const h = 1 / this.direction.y;
        const c = 1 / this.direction.z;
        const A = this.origin;
        if (l >= 0) {
          i = (t.min.x - A.x) * l;
          r = (t.max.x - A.x) * l;
        } else {
          i = (t.max.x - A.x) * l;
          r = (t.min.x - A.x) * l;
        }
        if (h >= 0) {
          s = (t.min.y - A.y) * h;
          n = (t.max.y - A.y) * h;
        } else {
          s = (t.max.y - A.y) * h;
          n = (t.min.y - A.y) * h;
        }
        if (i > n || s > r) {
          return null;
        } else {
          if (s > i || isNaN(i)) {
            i = s;
          }
          if (n < r || isNaN(r)) {
            r = n;
          }
          if (c >= 0) {
            a = (t.min.z - A.z) * c;
            o = (t.max.z - A.z) * c;
          } else {
            a = (t.max.z - A.z) * c;
            o = (t.min.z - A.z) * c;
          }
          if (i > o || a > r) {
            return null;
          } else {
            if (a > i || i != i) {
              i = a;
            }
            if (o < r || r != r) {
              r = o;
            }
            if (r < 0) {
              return null;
            } else {
              return this.at(i >= 0 ? i : r, e);
            }
          }
        }
      }
      intersectsBox(t) {
        return this.intersectBox(t, wt) !== null;
      }
      intersectTriangle(t, e, i, r, s) {
        Ct.subVectors(e, t);
        St.subVectors(i, t);
        kt.crossVectors(Ct, St);
        let n;
        let a = this.direction.dot(kt);
        if (a > 0) {
          if (r) {
            return null;
          }
          n = 1;
        } else {
          if (!(a < 0)) {
            return null;
          }
          n = -1;
          a = -a;
        }
        xt.subVectors(this.origin, t);
        const o = n * this.direction.dot(St.crossVectors(xt, St));
        if (o < 0) {
          return null;
        }
        const l = n * this.direction.dot(Ct.cross(xt));
        if (l < 0) {
          return null;
        }
        if (o + l > a) {
          return null;
        }
        const h = -n * xt.dot(kt);
        if (h < 0) {
          return null;
        } else {
          return this.at(h / a, s);
        }
      }
      applyMatrix4(t) {
        this.origin.applyMatrix4(t);
        this.direction.transformDirection(t);
        return this;
      }
      equals(t) {
        return t.origin.equals(this.origin) && t.direction.equals(this.direction);
      }
      clone() {
        return new this.constructor().copy(this);
      }
    }
    class Et {
      constructor(t, e, i, r, s, n, a, o, l, h, c, A, d, u, f, g) {
        Et.prototype.isMatrix4 = true;
        this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
        if (t !== undefined) {
          this.set(t, e, i, r, s, n, a, o, l, h, c, A, d, u, f, g);
        }
      }
      set(t, e, i, r, s, n, a, o, l, h, c, A, d, u, f, g) {
        const p = this.elements;
        p[0] = t;
        p[4] = e;
        p[8] = i;
        p[12] = r;
        p[1] = s;
        p[5] = n;
        p[9] = a;
        p[13] = o;
        p[2] = l;
        p[6] = h;
        p[10] = c;
        p[14] = A;
        p[3] = d;
        p[7] = u;
        p[11] = f;
        p[15] = g;
        return this;
      }
      identity() {
        this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return this;
      }
      clone() {
        return new Et().fromArray(this.elements);
      }
      copy(t) {
        const e = this.elements;
        const i = t.elements;
        e[0] = i[0];
        e[1] = i[1];
        e[2] = i[2];
        e[3] = i[3];
        e[4] = i[4];
        e[5] = i[5];
        e[6] = i[6];
        e[7] = i[7];
        e[8] = i[8];
        e[9] = i[9];
        e[10] = i[10];
        e[11] = i[11];
        e[12] = i[12];
        e[13] = i[13];
        e[14] = i[14];
        e[15] = i[15];
        return this;
      }
      copyPosition(t) {
        const e = this.elements;
        const i = t.elements;
        e[12] = i[12];
        e[13] = i[13];
        e[14] = i[14];
        return this;
      }
      setFromMatrix3(t) {
        const e = t.elements;
        this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1);
        return this;
      }
      extractBasis(t, e, i) {
        t.setFromMatrixColumn(this, 0);
        e.setFromMatrixColumn(this, 1);
        i.setFromMatrixColumn(this, 2);
        return this;
      }
      makeBasis(t, e, i) {
        this.set(t.x, e.x, i.x, 0, t.y, e.y, i.y, 0, t.z, e.z, i.z, 0, 0, 0, 0, 1);
        return this;
      }
      extractRotation(t) {
        const e = this.elements;
        const i = t.elements;
        const r = 1 / Mt.setFromMatrixColumn(t, 0).length();
        const s = 1 / Mt.setFromMatrixColumn(t, 1).length();
        const n = 1 / Mt.setFromMatrixColumn(t, 2).length();
        e[0] = i[0] * r;
        e[1] = i[1] * r;
        e[2] = i[2] * r;
        e[3] = 0;
        e[4] = i[4] * s;
        e[5] = i[5] * s;
        e[6] = i[6] * s;
        e[7] = 0;
        e[8] = i[8] * n;
        e[9] = i[9] * n;
        e[10] = i[10] * n;
        e[11] = 0;
        e[12] = 0;
        e[13] = 0;
        e[14] = 0;
        e[15] = 1;
        return this;
      }
      makeRotationFromEuler(t) {
        const e = this.elements;
        const i = t.x;
        const r = t.y;
        const s = t.z;
        const n = Math.cos(i);
        const a = Math.sin(i);
        const o = Math.cos(r);
        const l = Math.sin(r);
        const h = Math.cos(s);
        const c = Math.sin(s);
        if (t.order === "XYZ") {
          const t = n * h;
          const i = n * c;
          const r = a * h;
          const s = a * c;
          e[0] = o * h;
          e[4] = -o * c;
          e[8] = l;
          e[1] = i + r * l;
          e[5] = t - s * l;
          e[9] = -a * o;
          e[2] = s - t * l;
          e[6] = r + i * l;
          e[10] = n * o;
        } else if (t.order === "YXZ") {
          const t = o * h;
          const i = o * c;
          const r = l * h;
          const s = l * c;
          e[0] = t + s * a;
          e[4] = r * a - i;
          e[8] = n * l;
          e[1] = n * c;
          e[5] = n * h;
          e[9] = -a;
          e[2] = i * a - r;
          e[6] = s + t * a;
          e[10] = n * o;
        } else if (t.order === "ZXY") {
          const t = o * h;
          const i = o * c;
          const r = l * h;
          const s = l * c;
          e[0] = t - s * a;
          e[4] = -n * c;
          e[8] = r + i * a;
          e[1] = i + r * a;
          e[5] = n * h;
          e[9] = s - t * a;
          e[2] = -n * l;
          e[6] = a;
          e[10] = n * o;
        } else if (t.order === "ZYX") {
          const t = n * h;
          const i = n * c;
          const r = a * h;
          const s = a * c;
          e[0] = o * h;
          e[4] = r * l - i;
          e[8] = t * l + s;
          e[1] = o * c;
          e[5] = s * l + t;
          e[9] = i * l - r;
          e[2] = -l;
          e[6] = a * o;
          e[10] = n * o;
        } else if (t.order === "YZX") {
          const t = n * o;
          const i = n * l;
          const r = a * o;
          const s = a * l;
          e[0] = o * h;
          e[4] = s - t * c;
          e[8] = r * c + i;
          e[1] = c;
          e[5] = n * h;
          e[9] = -a * h;
          e[2] = -l * h;
          e[6] = i * c + r;
          e[10] = t - s * c;
        } else if (t.order === "XZY") {
          const t = n * o;
          const i = n * l;
          const r = a * o;
          const s = a * l;
          e[0] = o * h;
          e[4] = -c;
          e[8] = l * h;
          e[1] = t * c + s;
          e[5] = n * h;
          e[9] = i * c - r;
          e[2] = r * c - i;
          e[6] = a * h;
          e[10] = s * c + t;
        }
        e[3] = 0;
        e[7] = 0;
        e[11] = 0;
        e[12] = 0;
        e[13] = 0;
        e[14] = 0;
        e[15] = 1;
        return this;
      }
      makeRotationFromQuaternion(t) {
        return this.compose(Tt, t, Qt);
      }
      lookAt(t, e, i) {
        const r = this.elements;
        Rt.subVectors(t, e);
        if (Rt.lengthSq() === 0) {
          Rt.z = 1;
        }
        Rt.normalize();
        vt.crossVectors(i, Rt);
        if (vt.lengthSq() === 0) {
          if (Math.abs(i.z) === 1) {
            Rt.x += 0.0001;
          } else {
            Rt.z += 0.0001;
          }
          Rt.normalize();
          vt.crossVectors(i, Rt);
        }
        vt.normalize();
        Dt.crossVectors(Rt, vt);
        r[0] = vt.x;
        r[4] = Dt.x;
        r[8] = Rt.x;
        r[1] = vt.y;
        r[5] = Dt.y;
        r[9] = Rt.y;
        r[2] = vt.z;
        r[6] = Dt.z;
        r[10] = Rt.z;
        return this;
      }
      multiply(t) {
        return this.multiplyMatrices(this, t);
      }
      premultiply(t) {
        return this.multiplyMatrices(t, this);
      }
      multiplyMatrices(t, e) {
        const i = t.elements;
        const r = e.elements;
        const s = this.elements;
        const n = i[0];
        const a = i[4];
        const o = i[8];
        const l = i[12];
        const h = i[1];
        const c = i[5];
        const A = i[9];
        const d = i[13];
        const u = i[2];
        const f = i[6];
        const g = i[10];
        const p = i[14];
        const m = i[3];
        const b = i[7];
        const y = i[11];
        const w = i[15];
        const I = r[0];
        const B = r[4];
        const x = r[8];
        const C = r[12];
        const S = r[1];
        const k = r[5];
        const _ = r[9];
        const E = r[13];
        const M = r[2];
        const P = r[6];
        const T = r[10];
        const Q = r[14];
        const v = r[3];
        const D = r[7];
        const R = r[11];
        const z = r[15];
        s[0] = n * I + a * S + o * M + l * v;
        s[4] = n * B + a * k + o * P + l * D;
        s[8] = n * x + a * _ + o * T + l * R;
        s[12] = n * C + a * E + o * Q + l * z;
        s[1] = h * I + c * S + A * M + d * v;
        s[5] = h * B + c * k + A * P + d * D;
        s[9] = h * x + c * _ + A * T + d * R;
        s[13] = h * C + c * E + A * Q + d * z;
        s[2] = u * I + f * S + g * M + p * v;
        s[6] = u * B + f * k + g * P + p * D;
        s[10] = u * x + f * _ + g * T + p * R;
        s[14] = u * C + f * E + g * Q + p * z;
        s[3] = m * I + b * S + y * M + w * v;
        s[7] = m * B + b * k + y * P + w * D;
        s[11] = m * x + b * _ + y * T + w * R;
        s[15] = m * C + b * E + y * Q + w * z;
        return this;
      }
      multiplyScalar(t) {
        const e = this.elements;
        e[0] *= t;
        e[4] *= t;
        e[8] *= t;
        e[12] *= t;
        e[1] *= t;
        e[5] *= t;
        e[9] *= t;
        e[13] *= t;
        e[2] *= t;
        e[6] *= t;
        e[10] *= t;
        e[14] *= t;
        e[3] *= t;
        e[7] *= t;
        e[11] *= t;
        e[15] *= t;
        return this;
      }
      determinant() {
        const t = this.elements;
        const e = t[0];
        const i = t[4];
        const r = t[8];
        const s = t[12];
        const n = t[1];
        const a = t[5];
        const o = t[9];
        const l = t[13];
        const h = t[2];
        const c = t[6];
        const A = t[10];
        const d = t[14];
        return t[3] * (+s * o * c - r * l * c - s * a * A + i * l * A + r * a * d - i * o * d) + t[7] * (+e * o * d - e * l * A + s * n * A - r * n * d + r * l * h - s * o * h) + t[11] * (+e * l * c - e * a * d - s * n * c + i * n * d + s * a * h - i * l * h) + t[15] * (-r * a * h - e * o * c + e * a * A + r * n * c - i * n * A + i * o * h);
      }
      transpose() {
        const t = this.elements;
        let e;
        e = t[1];
        t[1] = t[4];
        t[4] = e;
        e = t[2];
        t[2] = t[8];
        t[8] = e;
        e = t[6];
        t[6] = t[9];
        t[9] = e;
        e = t[3];
        t[3] = t[12];
        t[12] = e;
        e = t[7];
        t[7] = t[13];
        t[13] = e;
        e = t[11];
        t[11] = t[14];
        t[14] = e;
        return this;
      }
      setPosition(t, e, i) {
        const r = this.elements;
        if (t.isVector3) {
          r[12] = t.x;
          r[13] = t.y;
          r[14] = t.z;
        } else {
          r[12] = t;
          r[13] = e;
          r[14] = i;
        }
        return this;
      }
      invert() {
        const t = this.elements;
        const e = t[0];
        const i = t[1];
        const r = t[2];
        const s = t[3];
        const n = t[4];
        const a = t[5];
        const o = t[6];
        const l = t[7];
        const h = t[8];
        const c = t[9];
        const A = t[10];
        const d = t[11];
        const u = t[12];
        const f = t[13];
        const g = t[14];
        const p = t[15];
        const m = c * g * l - f * A * l + f * o * d - a * g * d - c * o * p + a * A * p;
        const b = u * A * l - h * g * l - u * o * d + n * g * d + h * o * p - n * A * p;
        const y = h * f * l - u * c * l + u * a * d - n * f * d - h * a * p + n * c * p;
        const w = u * c * o - h * f * o - u * a * A + n * f * A + h * a * g - n * c * g;
        const I = e * m + i * b + r * y + s * w;
        if (I === 0) {
          return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
        const B = 1 / I;
        t[0] = m * B;
        t[1] = (f * A * s - c * g * s - f * r * d + i * g * d + c * r * p - i * A * p) * B;
        t[2] = (a * g * s - f * o * s + f * r * l - i * g * l - a * r * p + i * o * p) * B;
        t[3] = (c * o * s - a * A * s - c * r * l + i * A * l + a * r * d - i * o * d) * B;
        t[4] = b * B;
        t[5] = (h * g * s - u * A * s + u * r * d - e * g * d - h * r * p + e * A * p) * B;
        t[6] = (u * o * s - n * g * s - u * r * l + e * g * l + n * r * p - e * o * p) * B;
        t[7] = (n * A * s - h * o * s + h * r * l - e * A * l - n * r * d + e * o * d) * B;
        t[8] = y * B;
        t[9] = (u * c * s - h * f * s - u * i * d + e * f * d + h * i * p - e * c * p) * B;
        t[10] = (n * f * s - u * a * s + u * i * l - e * f * l - n * i * p + e * a * p) * B;
        t[11] = (h * a * s - n * c * s - h * i * l + e * c * l + n * i * d - e * a * d) * B;
        t[12] = w * B;
        t[13] = (h * f * r - u * c * r + u * i * A - e * f * A - h * i * g + e * c * g) * B;
        t[14] = (u * a * r - n * f * r - u * i * o + e * f * o + n * i * g - e * a * g) * B;
        t[15] = (n * c * r - h * a * r + h * i * o - e * c * o - n * i * A + e * a * A) * B;
        return this;
      }
      scale(t) {
        const e = this.elements;
        const i = t.x;
        const r = t.y;
        const s = t.z;
        e[0] *= i;
        e[4] *= r;
        e[8] *= s;
        e[1] *= i;
        e[5] *= r;
        e[9] *= s;
        e[2] *= i;
        e[6] *= r;
        e[10] *= s;
        e[3] *= i;
        e[7] *= r;
        e[11] *= s;
        return this;
      }
      getMaxScaleOnAxis() {
        const t = this.elements;
        const e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2];
        const i = t[4] * t[4] + t[5] * t[5] + t[6] * t[6];
        const r = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
        return Math.sqrt(Math.max(e, i, r));
      }
      makeTranslation(t, e, i) {
        if (t.isVector3) {
          this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1);
        } else {
          this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, i, 0, 0, 0, 1);
        }
        return this;
      }
      makeRotationX(t) {
        const e = Math.cos(t);
        const i = Math.sin(t);
        this.set(1, 0, 0, 0, 0, e, -i, 0, 0, i, e, 0, 0, 0, 0, 1);
        return this;
      }
      makeRotationY(t) {
        const e = Math.cos(t);
        const i = Math.sin(t);
        this.set(e, 0, i, 0, 0, 1, 0, 0, -i, 0, e, 0, 0, 0, 0, 1);
        return this;
      }
      makeRotationZ(t) {
        const e = Math.cos(t);
        const i = Math.sin(t);
        this.set(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return this;
      }
      makeRotationAxis(t, e) {
        const i = Math.cos(e);
        const r = Math.sin(e);
        const s = 1 - i;
        const n = t.x;
        const a = t.y;
        const o = t.z;
        const l = s * n;
        const h = s * a;
        this.set(l * n + i, l * a - r * o, l * o + r * a, 0, l * a + r * o, h * a + i, h * o - r * n, 0, l * o - r * a, h * o + r * n, s * o * o + i, 0, 0, 0, 0, 1);
        return this;
      }
      makeScale(t, e, i) {
        this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1);
        return this;
      }
      makeShear(t, e, i, r, s, n) {
        this.set(1, i, s, 0, t, 1, n, 0, e, r, 1, 0, 0, 0, 0, 1);
        return this;
      }
      compose(t, e, i) {
        const r = this.elements;
        const s = e._x;
        const n = e._y;
        const a = e._z;
        const o = e._w;
        const l = s + s;
        const h = n + n;
        const c = a + a;
        const A = s * l;
        const d = s * h;
        const u = s * c;
        const f = n * h;
        const g = n * c;
        const p = a * c;
        const m = o * l;
        const b = o * h;
        const y = o * c;
        const w = i.x;
        const I = i.y;
        const B = i.z;
        r[0] = (1 - (f + p)) * w;
        r[1] = (d + y) * w;
        r[2] = (u - b) * w;
        r[3] = 0;
        r[4] = (d - y) * I;
        r[5] = (1 - (A + p)) * I;
        r[6] = (g + m) * I;
        r[7] = 0;
        r[8] = (u + b) * B;
        r[9] = (g - m) * B;
        r[10] = (1 - (A + f)) * B;
        r[11] = 0;
        r[12] = t.x;
        r[13] = t.y;
        r[14] = t.z;
        r[15] = 1;
        return this;
      }
      decompose(t, e, i) {
        const r = this.elements;
        let s = Mt.set(r[0], r[1], r[2]).length();
        const n = Mt.set(r[4], r[5], r[6]).length();
        const a = Mt.set(r[8], r[9], r[10]).length();
        if (this.determinant() < 0) {
          s = -s;
        }
        t.x = r[12];
        t.y = r[13];
        t.z = r[14];
        Pt.copy(this);
        const o = 1 / s;
        const l = 1 / n;
        const h = 1 / a;
        Pt.elements[0] *= o;
        Pt.elements[1] *= o;
        Pt.elements[2] *= o;
        Pt.elements[4] *= l;
        Pt.elements[5] *= l;
        Pt.elements[6] *= l;
        Pt.elements[8] *= h;
        Pt.elements[9] *= h;
        Pt.elements[10] *= h;
        e.setFromRotationMatrix(Pt);
        i.x = s;
        i.y = n;
        i.z = a;
        return this;
      }
      makePerspective(t, e, i, r, s, n, a = 2000, o = false) {
        const l = this.elements;
        const h = s * 2 / (e - t);
        const c = s * 2 / (i - r);
        const A = (e + t) / (e - t);
        const d = (i + r) / (i - r);
        let u;
        let f;
        if (o) {
          u = s / (n - s);
          f = n * s / (n - s);
        } else if (a === m) {
          u = -(n + s) / (n - s);
          f = n * -2 * s / (n - s);
        } else {
          if (a !== b) {
            throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
          }
          u = -n / (n - s);
          f = -n * s / (n - s);
        }
        l[0] = h;
        l[4] = 0;
        l[8] = A;
        l[12] = 0;
        l[1] = 0;
        l[5] = c;
        l[9] = d;
        l[13] = 0;
        l[2] = 0;
        l[6] = 0;
        l[10] = u;
        l[14] = f;
        l[3] = 0;
        l[7] = 0;
        l[11] = -1;
        l[15] = 0;
        return this;
      }
      makeOrthographic(t, e, i, r, s, n, a = 2000, o = false) {
        const l = this.elements;
        const h = 2 / (e - t);
        const c = 2 / (i - r);
        const A = -(e + t) / (e - t);
        const d = -(i + r) / (i - r);
        let u;
        let f;
        if (o) {
          u = 1 / (n - s);
          f = n / (n - s);
        } else if (a === m) {
          u = -2 / (n - s);
          f = -(n + s) / (n - s);
        } else {
          if (a !== b) {
            throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
          }
          u = -1 / (n - s);
          f = -s / (n - s);
        }
        l[0] = h;
        l[4] = 0;
        l[8] = 0;
        l[12] = A;
        l[1] = 0;
        l[5] = c;
        l[9] = 0;
        l[13] = d;
        l[2] = 0;
        l[6] = 0;
        l[10] = u;
        l[14] = f;
        l[3] = 0;
        l[7] = 0;
        l[11] = 0;
        l[15] = 1;
        return this;
      }
      equals(t) {
        const e = this.elements;
        const i = t.elements;
        for (let t = 0; t < 16; t++) {
          if (e[t] !== i[t]) {
            return false;
          }
        }
        return true;
      }
      fromArray(t, e = 0) {
        for (let i = 0; i < 16; i++) {
          this.elements[i] = t[i + e];
        }
        return this;
      }
      toArray(t = [], e = 0) {
        const i = this.elements;
        t[e] = i[0];
        t[e + 1] = i[1];
        t[e + 2] = i[2];
        t[e + 3] = i[3];
        t[e + 4] = i[4];
        t[e + 5] = i[5];
        t[e + 6] = i[6];
        t[e + 7] = i[7];
        t[e + 8] = i[8];
        t[e + 9] = i[9];
        t[e + 10] = i[10];
        t[e + 11] = i[11];
        t[e + 12] = i[12];
        t[e + 13] = i[13];
        t[e + 14] = i[14];
        t[e + 15] = i[15];
        return t;
      }
    }
    const Mt = new R();
    const Pt = new Et();
    const Tt = new R(0, 0, 0);
    const Qt = new R(1, 1, 1);
    const vt = new R();
    const Dt = new R();
    const Rt = new R();
    const zt = new Et();
    const Wt = new D();
    class Ft {
      constructor(t = 0, e = 0, i = 0, r = Ft.DEFAULT_ORDER) {
        this.isEuler = true;
        this._x = t;
        this._y = e;
        this._z = i;
        this._order = r;
      }
      get x() {
        return this._x;
      }
      set x(t) {
        this._x = t;
        this._onChangeCallback();
      }
      get y() {
        return this._y;
      }
      set y(t) {
        this._y = t;
        this._onChangeCallback();
      }
      get z() {
        return this._z;
      }
      set z(t) {
        this._z = t;
        this._onChangeCallback();
      }
      get order() {
        return this._order;
      }
      set order(t) {
        this._order = t;
        this._onChangeCallback();
      }
      set(t, e, i, r = this._order) {
        this._x = t;
        this._y = e;
        this._z = i;
        this._order = r;
        this._onChangeCallback();
        return this;
      }
      clone() {
        return new this.constructor(this._x, this._y, this._z, this._order);
      }
      copy(t) {
        this._x = t._x;
        this._y = t._y;
        this._z = t._z;
        this._order = t._order;
        this._onChangeCallback();
        return this;
      }
      setFromRotationMatrix(t, e = this._order, i = true) {
        const r = t.elements;
        const s = r[0];
        const n = r[4];
        const a = r[8];
        const o = r[1];
        const l = r[5];
        const h = r[9];
        const c = r[2];
        const A = r[6];
        const d = r[10];
        switch (e) {
          case "XYZ":
            this._y = Math.asin(E(a, -1, 1));
            if (Math.abs(a) < 0.9999999) {
              this._x = Math.atan2(-h, d);
              this._z = Math.atan2(-n, s);
            } else {
              this._x = Math.atan2(A, l);
              this._z = 0;
            }
            break;
          case "YXZ":
            this._x = Math.asin(-E(h, -1, 1));
            if (Math.abs(h) < 0.9999999) {
              this._y = Math.atan2(a, d);
              this._z = Math.atan2(o, l);
            } else {
              this._y = Math.atan2(-c, s);
              this._z = 0;
            }
            break;
          case "ZXY":
            this._x = Math.asin(E(A, -1, 1));
            if (Math.abs(A) < 0.9999999) {
              this._y = Math.atan2(-c, d);
              this._z = Math.atan2(-n, l);
            } else {
              this._y = 0;
              this._z = Math.atan2(o, s);
            }
            break;
          case "ZYX":
            this._y = Math.asin(-E(c, -1, 1));
            if (Math.abs(c) < 0.9999999) {
              this._x = Math.atan2(A, d);
              this._z = Math.atan2(o, s);
            } else {
              this._x = 0;
              this._z = Math.atan2(-n, l);
            }
            break;
          case "YZX":
            this._z = Math.asin(E(o, -1, 1));
            if (Math.abs(o) < 0.9999999) {
              this._x = Math.atan2(-h, l);
              this._y = Math.atan2(-c, s);
            } else {
              this._x = 0;
              this._y = Math.atan2(a, d);
            }
            break;
          case "XZY":
            this._z = Math.asin(-E(n, -1, 1));
            if (Math.abs(n) < 0.9999999) {
              this._x = Math.atan2(A, l);
              this._y = Math.atan2(a, s);
            } else {
              this._x = Math.atan2(-h, d);
              this._y = 0;
            }
            break;
          default:
            B("Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
        }
        this._order = e;
        if (i === true) {
          this._onChangeCallback();
        }
        return this;
      }
      setFromQuaternion(t, e, i) {
        zt.makeRotationFromQuaternion(t);
        return this.setFromRotationMatrix(zt, e, i);
      }
      setFromVector3(t, e = this._order) {
        return this.set(t.x, t.y, t.z, e);
      }
      reorder(t) {
        Wt.setFromEuler(this);
        return this.setFromQuaternion(Wt, t);
      }
      equals(t) {
        return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
      }
      fromArray(t) {
        this._x = t[0];
        this._y = t[1];
        this._z = t[2];
        if (t[3] !== undefined) {
          this._order = t[3];
        }
        this._onChangeCallback();
        return this;
      }
      toArray(t = [], e = 0) {
        t[e] = this._x;
        t[e + 1] = this._y;
        t[e + 2] = this._z;
        t[e + 3] = this._order;
        return t;
      }
      _onChange(t) {
        this._onChangeCallback = t;
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
    Ft.DEFAULT_ORDER = "XYZ";
    class Ut {
      constructor() {
        this.mask = 1;
      }
      set(t) {
        this.mask = 1 << t >>> 0;
      }
      enable(t) {
        this.mask |= 1 << t;
      }
      enableAll() {
        this.mask = -1;
      }
      toggle(t) {
        this.mask ^= 1 << t;
      }
      disable(t) {
        this.mask &= ~(1 << t);
      }
      disableAll() {
        this.mask = 0;
      }
      test(t) {
        return !!(this.mask & t.mask);
      }
      isEnabled(t) {
        return !!(this.mask & 1 << t);
      }
    }
    let Nt = 0;
    const Lt = new R();
    const Ot = new D();
    const Vt = new Et();
    const Ht = new R();
    const Gt = new R();
    const Jt = new R();
    const qt = new D();
    const Zt = new R(1, 0, 0);
    const Yt = new R(0, 1, 0);
    const Kt = new R(0, 0, 1);
    const jt = {
      type: "added"
    };
    const Xt = {
      type: "removed"
    };
    const $t = {
      type: "childadded",
      child: null
    };
    const te = {
      type: "childremoved",
      child: null
    };
    class ee extends S {
      constructor() {
        super();
        this.isObject3D = true;
        Object.defineProperty(this, "id", {
          value: Nt++
        });
        this.uuid = _();
        this.name = "";
        this.type = "Object3D";
        this.parent = null;
        this.children = [];
        this.up = ee.DEFAULT_UP.clone();
        const t = new R();
        const e = new Ft();
        const i = new D();
        const r = new R(1, 1, 1);
        e._onChange(function () {
          i.setFromEuler(e, false);
        });
        i._onChange(function () {
          e.setFromQuaternion(i, undefined, false);
        });
        Object.defineProperties(this, {
          position: {
            configurable: true,
            enumerable: true,
            value: t
          },
          rotation: {
            configurable: true,
            enumerable: true,
            value: e
          },
          quaternion: {
            configurable: true,
            enumerable: true,
            value: i
          },
          scale: {
            configurable: true,
            enumerable: true,
            value: r
          },
          modelViewMatrix: {
            value: new Et()
          },
          normalMatrix: {
            value: new F()
          }
        });
        this.matrix = new Et();
        this.matrixWorld = new Et();
        this.matrixAutoUpdate = ee.DEFAULT_MATRIX_AUTO_UPDATE;
        this.matrixWorldAutoUpdate = ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE;
        this.matrixWorldNeedsUpdate = false;
        this.layers = new Ut();
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
      applyMatrix4(t) {
        if (this.matrixAutoUpdate) {
          this.updateMatrix();
        }
        this.matrix.premultiply(t);
        this.matrix.decompose(this.position, this.quaternion, this.scale);
      }
      applyQuaternion(t) {
        this.quaternion.premultiply(t);
        return this;
      }
      setRotationFromAxisAngle(t, e) {
        this.quaternion.setFromAxisAngle(t, e);
      }
      setRotationFromEuler(t) {
        this.quaternion.setFromEuler(t, true);
      }
      setRotationFromMatrix(t) {
        this.quaternion.setFromRotationMatrix(t);
      }
      setRotationFromQuaternion(t) {
        this.quaternion.copy(t);
      }
      rotateOnAxis(t, e) {
        Ot.setFromAxisAngle(t, e);
        this.quaternion.multiply(Ot);
        return this;
      }
      rotateOnWorldAxis(t, e) {
        Ot.setFromAxisAngle(t, e);
        this.quaternion.premultiply(Ot);
        return this;
      }
      rotateX(t) {
        return this.rotateOnAxis(Zt, t);
      }
      rotateY(t) {
        return this.rotateOnAxis(Yt, t);
      }
      rotateZ(t) {
        return this.rotateOnAxis(Kt, t);
      }
      translateOnAxis(t, e) {
        Lt.copy(t).applyQuaternion(this.quaternion);
        this.position.add(Lt.multiplyScalar(e));
        return this;
      }
      translateX(t) {
        return this.translateOnAxis(Zt, t);
      }
      translateY(t) {
        return this.translateOnAxis(Yt, t);
      }
      translateZ(t) {
        return this.translateOnAxis(Kt, t);
      }
      localToWorld(t) {
        this.updateWorldMatrix(true, false);
        return t.applyMatrix4(this.matrixWorld);
      }
      worldToLocal(t) {
        this.updateWorldMatrix(true, false);
        return t.applyMatrix4(Vt.copy(this.matrixWorld).invert());
      }
      lookAt(t, e, i) {
        if (t.isVector3) {
          Ht.copy(t);
        } else {
          Ht.set(t, e, i);
        }
        const r = this.parent;
        this.updateWorldMatrix(true, false);
        Gt.setFromMatrixPosition(this.matrixWorld);
        if (this.isCamera || this.isLight) {
          Vt.lookAt(Gt, Ht, this.up);
        } else {
          Vt.lookAt(Ht, Gt, this.up);
        }
        this.quaternion.setFromRotationMatrix(Vt);
        if (r) {
          Vt.extractRotation(r.matrixWorld);
          Ot.setFromRotationMatrix(Vt);
          this.quaternion.premultiply(Ot.invert());
        }
      }
      add(t) {
        if (arguments.length > 1) {
          for (let t = 0; t < arguments.length; t++) {
            this.add(arguments[t]);
          }
          return this;
        }
        if (t === this) {
          x("Object3D.add: object can't be added as a child of itself.", t);
          return this;
        } else {
          if (t && t.isObject3D) {
            t.removeFromParent();
            t.parent = this;
            this.children.push(t);
            t.dispatchEvent(jt);
            $t.child = t;
            this.dispatchEvent($t);
            $t.child = null;
          } else {
            x("Object3D.add: object not an instance of THREE.Object3D.", t);
          }
          return this;
        }
      }
      remove(t) {
        if (arguments.length > 1) {
          for (let t = 0; t < arguments.length; t++) {
            this.remove(arguments[t]);
          }
          return this;
        }
        const e = this.children.indexOf(t);
        if (e !== -1) {
          t.parent = null;
          this.children.splice(e, 1);
          t.dispatchEvent(Xt);
          te.child = t;
          this.dispatchEvent(te);
          te.child = null;
        }
        return this;
      }
      removeFromParent() {
        const t = this.parent;
        if (t !== null) {
          t.remove(this);
        }
        return this;
      }
      clear() {
        return this.remove(...this.children);
      }
      attach(t) {
        this.updateWorldMatrix(true, false);
        Vt.copy(this.matrixWorld).invert();
        if (t.parent !== null) {
          t.parent.updateWorldMatrix(true, false);
          Vt.multiply(t.parent.matrixWorld);
        }
        t.applyMatrix4(Vt);
        t.removeFromParent();
        t.parent = this;
        this.children.push(t);
        t.updateWorldMatrix(false, true);
        t.dispatchEvent(jt);
        $t.child = t;
        this.dispatchEvent($t);
        $t.child = null;
        return this;
      }
      getObjectById(t) {
        return this.getObjectByProperty("id", t);
      }
      getObjectByName(t) {
        return this.getObjectByProperty("name", t);
      }
      getObjectByProperty(t, e) {
        if (this[t] === e) {
          return this;
        }
        for (let i = 0, r = this.children.length; i < r; i++) {
          const r = this.children[i].getObjectByProperty(t, e);
          if (r !== undefined) {
            return r;
          }
        }
      }
      getObjectsByProperty(t, e, i = []) {
        if (this[t] === e) {
          i.push(this);
        }
        const r = this.children;
        for (let s = 0, n = r.length; s < n; s++) {
          r[s].getObjectsByProperty(t, e, i);
        }
        return i;
      }
      getWorldPosition(t) {
        this.updateWorldMatrix(true, false);
        return t.setFromMatrixPosition(this.matrixWorld);
      }
      getWorldQuaternion(t) {
        this.updateWorldMatrix(true, false);
        this.matrixWorld.decompose(Gt, t, Jt);
        return t;
      }
      getWorldScale(t) {
        this.updateWorldMatrix(true, false);
        this.matrixWorld.decompose(Gt, qt, t);
        return t;
      }
      getWorldDirection(t) {
        this.updateWorldMatrix(true, false);
        const e = this.matrixWorld.elements;
        return t.set(e[8], e[9], e[10]).normalize();
      }
      raycast() {}
      traverse(t) {
        t(this);
        const e = this.children;
        for (let i = 0, r = e.length; i < r; i++) {
          e[i].traverse(t);
        }
      }
      traverseVisible(t) {
        if (this.visible === false) {
          return;
        }
        t(this);
        const e = this.children;
        for (let i = 0, r = e.length; i < r; i++) {
          e[i].traverseVisible(t);
        }
      }
      traverseAncestors(t) {
        const e = this.parent;
        if (e !== null) {
          t(e);
          e.traverseAncestors(t);
        }
      }
      updateMatrix() {
        this.matrix.compose(this.position, this.quaternion, this.scale);
        this.matrixWorldNeedsUpdate = true;
      }
      updateMatrixWorld(t) {
        if (this.matrixAutoUpdate) {
          this.updateMatrix();
        }
        if (this.matrixWorldNeedsUpdate || t) {
          if (this.matrixWorldAutoUpdate === true) {
            if (this.parent === null) {
              this.matrixWorld.copy(this.matrix);
            } else {
              this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
            }
          }
          this.matrixWorldNeedsUpdate = false;
          t = true;
        }
        const e = this.children;
        for (let i = 0, r = e.length; i < r; i++) {
          e[i].updateMatrixWorld(t);
        }
      }
      updateWorldMatrix(t, e) {
        const i = this.parent;
        if (t === true && i !== null) {
          i.updateWorldMatrix(true, false);
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
        if (e === true) {
          const t = this.children;
          for (let e = 0, i = t.length; e < i; e++) {
            t[e].updateWorldMatrix(false, true);
          }
        }
      }
      toJSON(t) {
        const e = t === undefined || typeof t == "string";
        const i = {};
        if (e) {
          t = {
            geometries: {},
            materials: {},
            textures: {},
            images: {},
            shapes: {},
            skeletons: {},
            animations: {},
            nodes: {}
          };
          i.metadata = {
            version: 4.7,
            type: "Object",
            generator: "Object3D.toJSON"
          };
        }
        const r = {};
        function s(e, i) {
          if (e[i.uuid] === undefined) {
            e[i.uuid] = i.toJSON(t);
          }
          return i.uuid;
        }
        r.uuid = this.uuid;
        r.type = this.type;
        if (this.name !== "") {
          r.name = this.name;
        }
        if (this.castShadow === true) {
          r.castShadow = true;
        }
        if (this.receiveShadow === true) {
          r.receiveShadow = true;
        }
        if (this.visible === false) {
          r.visible = false;
        }
        if (this.frustumCulled === false) {
          r.frustumCulled = false;
        }
        if (this.renderOrder !== 0) {
          r.renderOrder = this.renderOrder;
        }
        if (Object.keys(this.userData).length > 0) {
          r.userData = this.userData;
        }
        r.layers = this.layers.mask;
        r.matrix = this.matrix.toArray();
        r.up = this.up.toArray();
        if (this.matrixAutoUpdate === false) {
          r.matrixAutoUpdate = false;
        }
        if (this.isInstancedMesh) {
          r.type = "InstancedMesh";
          r.count = this.count;
          r.instanceMatrix = this.instanceMatrix.toJSON();
          if (this.instanceColor !== null) {
            r.instanceColor = this.instanceColor.toJSON();
          }
        }
        if (this.isBatchedMesh) {
          r.type = "BatchedMesh";
          r.perObjectFrustumCulled = this.perObjectFrustumCulled;
          r.sortObjects = this.sortObjects;
          r.drawRanges = this._drawRanges;
          r.reservedRanges = this._reservedRanges;
          r.geometryInfo = this._geometryInfo.map(t => ({
            ...t,
            boundingBox: t.boundingBox ? t.boundingBox.toJSON() : undefined,
            boundingSphere: t.boundingSphere ? t.boundingSphere.toJSON() : undefined
          }));
          r.instanceInfo = this._instanceInfo.map(t => ({
            ...t
          }));
          r.availableInstanceIds = this._availableInstanceIds.slice();
          r.availableGeometryIds = this._availableGeometryIds.slice();
          r.nextIndexStart = this._nextIndexStart;
          r.nextVertexStart = this._nextVertexStart;
          r.geometryCount = this._geometryCount;
          r.maxInstanceCount = this._maxInstanceCount;
          r.maxVertexCount = this._maxVertexCount;
          r.maxIndexCount = this._maxIndexCount;
          r.geometryInitialized = this._geometryInitialized;
          r.matricesTexture = this._matricesTexture.toJSON(t);
          r.indirectTexture = this._indirectTexture.toJSON(t);
          if (this._colorsTexture !== null) {
            r.colorsTexture = this._colorsTexture.toJSON(t);
          }
          if (this.boundingSphere !== null) {
            r.boundingSphere = this.boundingSphere.toJSON();
          }
          if (this.boundingBox !== null) {
            r.boundingBox = this.boundingBox.toJSON();
          }
        }
        if (this.isScene) {
          if (this.background) {
            if (this.background.isColor) {
              r.background = this.background.toJSON();
            } else if (this.background.isTexture) {
              r.background = this.background.toJSON(t).uuid;
            }
          }
          if (this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true) {
            r.environment = this.environment.toJSON(t).uuid;
          }
        } else if (this.isMesh || this.isLine || this.isPoints) {
          r.geometry = s(t.geometries, this.geometry);
          const e = this.geometry.parameters;
          if (e !== undefined && e.shapes !== undefined) {
            const i = e.shapes;
            if (Array.isArray(i)) {
              for (let e = 0, r = i.length; e < r; e++) {
                const r = i[e];
                s(t.shapes, r);
              }
            } else {
              s(t.shapes, i);
            }
          }
        }
        if (this.isSkinnedMesh) {
          r.bindMode = this.bindMode;
          r.bindMatrix = this.bindMatrix.toArray();
          if (this.skeleton !== undefined) {
            s(t.skeletons, this.skeleton);
            r.skeleton = this.skeleton.uuid;
          }
        }
        if (this.material !== undefined) {
          if (Array.isArray(this.material)) {
            const e = [];
            for (let i = 0, r = this.material.length; i < r; i++) {
              e.push(s(t.materials, this.material[i]));
            }
            r.material = e;
          } else {
            r.material = s(t.materials, this.material);
          }
        }
        if (this.children.length > 0) {
          r.children = [];
          for (let e = 0; e < this.children.length; e++) {
            r.children.push(this.children[e].toJSON(t).object);
          }
        }
        if (this.animations.length > 0) {
          r.animations = [];
          for (let e = 0; e < this.animations.length; e++) {
            const i = this.animations[e];
            r.animations.push(s(t.animations, i));
          }
        }
        if (e) {
          const e = n(t.geometries);
          const r = n(t.materials);
          const s = n(t.textures);
          const a = n(t.images);
          const o = n(t.shapes);
          const l = n(t.skeletons);
          const h = n(t.animations);
          const c = n(t.nodes);
          if (e.length > 0) {
            i.geometries = e;
          }
          if (r.length > 0) {
            i.materials = r;
          }
          if (s.length > 0) {
            i.textures = s;
          }
          if (a.length > 0) {
            i.images = a;
          }
          if (o.length > 0) {
            i.shapes = o;
          }
          if (l.length > 0) {
            i.skeletons = l;
          }
          if (h.length > 0) {
            i.animations = h;
          }
          if (c.length > 0) {
            i.nodes = c;
          }
        }
        i.object = r;
        return i;
        function n(t) {
          const e = [];
          for (const i in t) {
            const r = t[i];
            delete r.metadata;
            e.push(r);
          }
          return e;
        }
      }
      clone(t) {
        return new this.constructor().copy(this, t);
      }
      copy(t, e = true) {
        this.name = t.name;
        this.up.copy(t.up);
        this.position.copy(t.position);
        this.rotation.order = t.rotation.order;
        this.quaternion.copy(t.quaternion);
        this.scale.copy(t.scale);
        this.matrix.copy(t.matrix);
        this.matrixWorld.copy(t.matrixWorld);
        this.matrixAutoUpdate = t.matrixAutoUpdate;
        this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate;
        this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate;
        this.layers.mask = t.layers.mask;
        this.visible = t.visible;
        this.castShadow = t.castShadow;
        this.receiveShadow = t.receiveShadow;
        this.frustumCulled = t.frustumCulled;
        this.renderOrder = t.renderOrder;
        this.animations = t.animations.slice();
        this.userData = JSON.parse(JSON.stringify(t.userData));
        if (e === true) {
          for (let e = 0; e < t.children.length; e++) {
            const i = t.children[e];
            this.add(i.clone());
          }
        }
        return this;
      }
    }
    ee.DEFAULT_UP = new R(0, 1, 0);
    ee.DEFAULT_MATRIX_AUTO_UPDATE = true;
    ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
    const ie = new R();
    const re = new R();
    const se = new R();
    const ne = new R();
    const ae = new R();
    const oe = new R();
    const le = new R();
    const he = new R();
    const ce = new R();
    const Ae = new R();
    const de = new tt();
    const ue = new tt();
    const fe = new tt();
    class ge {
      constructor(t = new R(), e = new R(), i = new R()) {
        this.a = t;
        this.b = e;
        this.c = i;
      }
      static getNormal(t, e, i, r) {
        r.subVectors(i, e);
        ie.subVectors(t, e);
        r.cross(ie);
        const s = r.lengthSq();
        if (s > 0) {
          return r.multiplyScalar(1 / Math.sqrt(s));
        } else {
          return r.set(0, 0, 0);
        }
      }
      static getBarycoord(t, e, i, r, s) {
        ie.subVectors(r, e);
        re.subVectors(i, e);
        se.subVectors(t, e);
        const n = ie.dot(ie);
        const a = ie.dot(re);
        const o = ie.dot(se);
        const l = re.dot(re);
        const h = re.dot(se);
        const c = n * l - a * a;
        if (c === 0) {
          s.set(0, 0, 0);
          return null;
        }
        const A = 1 / c;
        const d = (l * o - a * h) * A;
        const u = (n * h - a * o) * A;
        return s.set(1 - d - u, u, d);
      }
      static containsPoint(t, e, i, r) {
        return this.getBarycoord(t, e, i, r, ne) !== null && ne.x >= 0 && ne.y >= 0 && ne.x + ne.y <= 1;
      }
      static getInterpolation(t, e, i, r, s, n, a, o) {
        if (this.getBarycoord(t, e, i, r, ne) === null) {
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
          o.addScaledVector(s, ne.x);
          o.addScaledVector(n, ne.y);
          o.addScaledVector(a, ne.z);
          return o;
        }
      }
      static getInterpolatedAttribute(t, e, i, r, s, n) {
        de.setScalar(0);
        ue.setScalar(0);
        fe.setScalar(0);
        de.fromBufferAttribute(t, e);
        ue.fromBufferAttribute(t, i);
        fe.fromBufferAttribute(t, r);
        n.setScalar(0);
        n.addScaledVector(de, s.x);
        n.addScaledVector(ue, s.y);
        n.addScaledVector(fe, s.z);
        return n;
      }
      static isFrontFacing(t, e, i, r) {
        ie.subVectors(i, e);
        re.subVectors(t, e);
        return ie.cross(re).dot(r) < 0;
      }
      set(t, e, i) {
        this.a.copy(t);
        this.b.copy(e);
        this.c.copy(i);
        return this;
      }
      setFromPointsAndIndices(t, e, i, r) {
        this.a.copy(t[e]);
        this.b.copy(t[i]);
        this.c.copy(t[r]);
        return this;
      }
      setFromAttributeAndIndices(t, e, i, r) {
        this.a.fromBufferAttribute(t, e);
        this.b.fromBufferAttribute(t, i);
        this.c.fromBufferAttribute(t, r);
        return this;
      }
      clone() {
        return new this.constructor().copy(this);
      }
      copy(t) {
        this.a.copy(t.a);
        this.b.copy(t.b);
        this.c.copy(t.c);
        return this;
      }
      getArea() {
        ie.subVectors(this.c, this.b);
        re.subVectors(this.a, this.b);
        return ie.cross(re).length() * 0.5;
      }
      getMidpoint(t) {
        return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
      }
      getNormal(t) {
        return ge.getNormal(this.a, this.b, this.c, t);
      }
      getPlane(t) {
        return t.setFromCoplanarPoints(this.a, this.b, this.c);
      }
      getBarycoord(t, e) {
        return ge.getBarycoord(t, this.a, this.b, this.c, e);
      }
      getInterpolation(t, e, i, r, s) {
        return ge.getInterpolation(t, this.a, this.b, this.c, e, i, r, s);
      }
      containsPoint(t) {
        return ge.containsPoint(t, this.a, this.b, this.c);
      }
      isFrontFacing(t) {
        return ge.isFrontFacing(this.a, this.b, this.c, t);
      }
      intersectsBox(t) {
        return t.intersectsTriangle(this);
      }
      closestPointToPoint(t, e) {
        const i = this.a;
        const r = this.b;
        const s = this.c;
        let n;
        let a;
        ae.subVectors(r, i);
        oe.subVectors(s, i);
        he.subVectors(t, i);
        const o = ae.dot(he);
        const l = oe.dot(he);
        if (o <= 0 && l <= 0) {
          return e.copy(i);
        }
        ce.subVectors(t, r);
        const h = ae.dot(ce);
        const c = oe.dot(ce);
        if (h >= 0 && c <= h) {
          return e.copy(r);
        }
        const A = o * c - h * l;
        if (A <= 0 && o >= 0 && h <= 0) {
          n = o / (o - h);
          return e.copy(i).addScaledVector(ae, n);
        }
        Ae.subVectors(t, s);
        const d = ae.dot(Ae);
        const u = oe.dot(Ae);
        if (u >= 0 && d <= u) {
          return e.copy(s);
        }
        const f = d * l - o * u;
        if (f <= 0 && l >= 0 && u <= 0) {
          a = l / (l - u);
          return e.copy(i).addScaledVector(oe, a);
        }
        const g = h * u - d * c;
        if (g <= 0 && c - h >= 0 && d - u >= 0) {
          le.subVectors(s, r);
          a = (c - h) / (c - h + (d - u));
          return e.copy(r).addScaledVector(le, a);
        }
        const p = 1 / (g + f + A);
        n = f * p;
        a = A * p;
        return e.copy(i).addScaledVector(ae, n).addScaledVector(oe, a);
      }
      equals(t) {
        return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
      }
    }
    const pe = {
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
    const me = {
      h: 0,
      s: 0,
      l: 0
    };
    const be = {
      h: 0,
      s: 0,
      l: 0
    };
    function ye(t, e, i) {
      if (i < 0) {
        i += 1;
      }
      if (i > 1) {
        i -= 1;
      }
      if (i < 1 / 6) {
        return t + (e - t) * 6 * i;
      } else if (i < 0.5) {
        return e;
      } else if (i < 2 / 3) {
        return t + (e - t) * 6 * (2 / 3 - i);
      } else {
        return t;
      }
    }
    class we {
      constructor(t, e, i) {
        this.isColor = true;
        this.r = 1;
        this.g = 1;
        this.b = 1;
        return this.set(t, e, i);
      }
      set(t, e, i) {
        if (e === undefined && i === undefined) {
          const e = t;
          if (e && e.isColor) {
            this.copy(e);
          } else if (typeof e == "number") {
            this.setHex(e);
          } else if (typeof e == "string") {
            this.setStyle(e);
          }
        } else {
          this.setRGB(t, e, i);
        }
        return this;
      }
      setScalar(t) {
        this.r = t;
        this.g = t;
        this.b = t;
        return this;
      }
      setHex(t, e = A) {
        t = Math.floor(t);
        this.r = (t >> 16 & 255) / 255;
        this.g = (t >> 8 & 255) / 255;
        this.b = (t & 255) / 255;
        V.colorSpaceToWorking(this, e);
        return this;
      }
      setRGB(t, e, i, r = V.workingColorSpace) {
        this.r = t;
        this.g = e;
        this.b = i;
        V.colorSpaceToWorking(this, r);
        return this;
      }
      setHSL(t, e, i, r = V.workingColorSpace) {
        t = M(t, 1);
        e = E(e, 0, 1);
        i = E(i, 0, 1);
        if (e === 0) {
          this.r = this.g = this.b = i;
        } else {
          const r = i <= 0.5 ? i * (1 + e) : i + e - i * e;
          const s = i * 2 - r;
          this.r = ye(s, r, t + 1 / 3);
          this.g = ye(s, r, t);
          this.b = ye(s, r, t - 1 / 3);
        }
        V.colorSpaceToWorking(this, r);
        return this;
      }
      setStyle(t, e = A) {
        function i(e) {
          if (e !== undefined && parseFloat(e) < 1) {
            B("Color: Alpha component of " + t + " will be ignored.");
          }
        }
        let r;
        if (r = /^(\w+)\(([^\)]*)\)/.exec(t)) {
          let s;
          const n = r[1];
          const a = r[2];
          switch (n) {
            case "rgb":
            case "rgba":
              if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) {
                i(s[4]);
                return this.setRGB(Math.min(255, parseInt(s[1], 10)) / 255, Math.min(255, parseInt(s[2], 10)) / 255, Math.min(255, parseInt(s[3], 10)) / 255, e);
              }
              if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) {
                i(s[4]);
                return this.setRGB(Math.min(100, parseInt(s[1], 10)) / 100, Math.min(100, parseInt(s[2], 10)) / 100, Math.min(100, parseInt(s[3], 10)) / 100, e);
              }
              break;
            case "hsl":
            case "hsla":
              if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) {
                i(s[4]);
                return this.setHSL(parseFloat(s[1]) / 360, parseFloat(s[2]) / 100, parseFloat(s[3]) / 100, e);
              }
              break;
            default:
              B("Color: Unknown color model " + t);
          }
        } else if (r = /^\#([A-Fa-f\d]+)$/.exec(t)) {
          const i = r[1];
          const s = i.length;
          if (s === 3) {
            return this.setRGB(parseInt(i.charAt(0), 16) / 15, parseInt(i.charAt(1), 16) / 15, parseInt(i.charAt(2), 16) / 15, e);
          }
          if (s === 6) {
            return this.setHex(parseInt(i, 16), e);
          }
          B("Color: Invalid hex color " + t);
        } else if (t && t.length > 0) {
          return this.setColorName(t, e);
        }
        return this;
      }
      setColorName(t, e = A) {
        const i = pe[t.toLowerCase()];
        if (i !== undefined) {
          this.setHex(i, e);
        } else {
          B("Color: Unknown color " + t);
        }
        return this;
      }
      clone() {
        return new this.constructor(this.r, this.g, this.b);
      }
      copy(t) {
        this.r = t.r;
        this.g = t.g;
        this.b = t.b;
        return this;
      }
      copySRGBToLinear(t) {
        this.r = H(t.r);
        this.g = H(t.g);
        this.b = H(t.b);
        return this;
      }
      copyLinearToSRGB(t) {
        this.r = G(t.r);
        this.g = G(t.g);
        this.b = G(t.b);
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
      getHex(t = A) {
        V.workingToColorSpace(Ie.copy(this), t);
        return Math.round(E(Ie.r * 255, 0, 255)) * 65536 + Math.round(E(Ie.g * 255, 0, 255)) * 256 + Math.round(E(Ie.b * 255, 0, 255));
      }
      getHexString(t = A) {
        return ("000000" + this.getHex(t).toString(16)).slice(-6);
      }
      getHSL(t, e = V.workingColorSpace) {
        V.workingToColorSpace(Ie.copy(this), e);
        const i = Ie.r;
        const r = Ie.g;
        const s = Ie.b;
        const n = Math.max(i, r, s);
        const a = Math.min(i, r, s);
        let o;
        let l;
        const h = (a + n) / 2;
        if (a === n) {
          o = 0;
          l = 0;
        } else {
          const t = n - a;
          l = h <= 0.5 ? t / (n + a) : t / (2 - n - a);
          switch (n) {
            case i:
              o = (r - s) / t + (r < s ? 6 : 0);
              break;
            case r:
              o = (s - i) / t + 2;
              break;
            case s:
              o = (i - r) / t + 4;
          }
          o /= 6;
        }
        t.h = o;
        t.s = l;
        t.l = h;
        return t;
      }
      getRGB(t, e = V.workingColorSpace) {
        V.workingToColorSpace(Ie.copy(this), e);
        t.r = Ie.r;
        t.g = Ie.g;
        t.b = Ie.b;
        return t;
      }
      getStyle(t = A) {
        V.workingToColorSpace(Ie.copy(this), t);
        const e = Ie.r;
        const i = Ie.g;
        const r = Ie.b;
        if (t !== A) {
          return `color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`;
        } else {
          return `rgb(${Math.round(e * 255)},${Math.round(i * 255)},${Math.round(r * 255)})`;
        }
      }
      offsetHSL(t, e, i) {
        this.getHSL(me);
        return this.setHSL(me.h + t, me.s + e, me.l + i);
      }
      add(t) {
        this.r += t.r;
        this.g += t.g;
        this.b += t.b;
        return this;
      }
      addColors(t, e) {
        this.r = t.r + e.r;
        this.g = t.g + e.g;
        this.b = t.b + e.b;
        return this;
      }
      addScalar(t) {
        this.r += t;
        this.g += t;
        this.b += t;
        return this;
      }
      sub(t) {
        this.r = Math.max(0, this.r - t.r);
        this.g = Math.max(0, this.g - t.g);
        this.b = Math.max(0, this.b - t.b);
        return this;
      }
      multiply(t) {
        this.r *= t.r;
        this.g *= t.g;
        this.b *= t.b;
        return this;
      }
      multiplyScalar(t) {
        this.r *= t;
        this.g *= t;
        this.b *= t;
        return this;
      }
      lerp(t, e) {
        this.r += (t.r - this.r) * e;
        this.g += (t.g - this.g) * e;
        this.b += (t.b - this.b) * e;
        return this;
      }
      lerpColors(t, e, i) {
        this.r = t.r + (e.r - t.r) * i;
        this.g = t.g + (e.g - t.g) * i;
        this.b = t.b + (e.b - t.b) * i;
        return this;
      }
      lerpHSL(t, e) {
        this.getHSL(me);
        t.getHSL(be);
        const i = P(me.h, be.h, e);
        const r = P(me.s, be.s, e);
        const s = P(me.l, be.l, e);
        this.setHSL(i, r, s);
        return this;
      }
      setFromVector3(t) {
        this.r = t.x;
        this.g = t.y;
        this.b = t.z;
        return this;
      }
      applyMatrix3(t) {
        const e = this.r;
        const i = this.g;
        const r = this.b;
        const s = t.elements;
        this.r = s[0] * e + s[3] * i + s[6] * r;
        this.g = s[1] * e + s[4] * i + s[7] * r;
        this.b = s[2] * e + s[5] * i + s[8] * r;
        return this;
      }
      equals(t) {
        return t.r === this.r && t.g === this.g && t.b === this.b;
      }
      fromArray(t, e = 0) {
        this.r = t[e];
        this.g = t[e + 1];
        this.b = t[e + 2];
        return this;
      }
      toArray(t = [], e = 0) {
        t[e] = this.r;
        t[e + 1] = this.g;
        t[e + 2] = this.b;
        return t;
      }
      fromBufferAttribute(t, e) {
        this.r = t.getX(e);
        this.g = t.getY(e);
        this.b = t.getZ(e);
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
    const Ie = new we();
    we.NAMES = pe;
    let Be = 0;
    class xe extends S {
      constructor() {
        super();
        this.isMaterial = true;
        Object.defineProperty(this, "id", {
          value: Be++
        });
        this.uuid = _();
        this.name = "";
        this.type = "Material";
        this.blending = 1;
        this.side = 0;
        this.vertexColors = false;
        this.opacity = 1;
        this.transparent = false;
        this.alphaHash = false;
        this.blendSrc = 204;
        this.blendDst = 205;
        this.blendEquation = 100;
        this.blendSrcAlpha = null;
        this.blendDstAlpha = null;
        this.blendEquationAlpha = null;
        this.blendColor = new we(0, 0, 0);
        this.blendAlpha = 0;
        this.depthFunc = 3;
        this.depthTest = true;
        this.depthWrite = true;
        this.stencilWriteMask = 255;
        this.stencilFunc = 519;
        this.stencilRef = 0;
        this.stencilFuncMask = 255;
        this.stencilFail = g;
        this.stencilZFail = g;
        this.stencilZPass = g;
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
      set alphaTest(t) {
        if (this._alphaTest > 0 != t > 0) {
          this.version++;
        }
        this._alphaTest = t;
      }
      onBeforeRender() {}
      onBeforeCompile() {}
      customProgramCacheKey() {
        return this.onBeforeCompile.toString();
      }
      setValues(t) {
        if (t !== undefined) {
          for (const e in t) {
            const i = t[e];
            if (i === undefined) {
              B(`Material: parameter '${e}' has value of undefined.`);
              continue;
            }
            const r = this[e];
            if (r !== undefined) {
              if (r && r.isColor) {
                r.set(i);
              } else if (r && r.isVector3 && i && i.isVector3) {
                r.copy(i);
              } else {
                this[e] = i;
              }
            } else {
              B(`Material: '${e}' is not a property of THREE.${this.type}.`);
            }
          }
        }
      }
      toJSON(t) {
        const e = t === undefined || typeof t == "string";
        if (e) {
          t = {
            textures: {},
            images: {}
          };
        }
        const i = {
          metadata: {
            version: 4.7,
            type: "Material",
            generator: "Material.toJSON"
          }
        };
        function r(t) {
          const e = [];
          for (const i in t) {
            const r = t[i];
            delete r.metadata;
            e.push(r);
          }
          return e;
        }
        i.uuid = this.uuid;
        i.type = this.type;
        if (this.name !== "") {
          i.name = this.name;
        }
        if (this.color && this.color.isColor) {
          i.color = this.color.getHex();
        }
        if (this.roughness !== undefined) {
          i.roughness = this.roughness;
        }
        if (this.metalness !== undefined) {
          i.metalness = this.metalness;
        }
        if (this.sheen !== undefined) {
          i.sheen = this.sheen;
        }
        if (this.sheenColor && this.sheenColor.isColor) {
          i.sheenColor = this.sheenColor.getHex();
        }
        if (this.sheenRoughness !== undefined) {
          i.sheenRoughness = this.sheenRoughness;
        }
        if (this.emissive && this.emissive.isColor) {
          i.emissive = this.emissive.getHex();
        }
        if (this.emissiveIntensity !== undefined && this.emissiveIntensity !== 1) {
          i.emissiveIntensity = this.emissiveIntensity;
        }
        if (this.specular && this.specular.isColor) {
          i.specular = this.specular.getHex();
        }
        if (this.specularIntensity !== undefined) {
          i.specularIntensity = this.specularIntensity;
        }
        if (this.specularColor && this.specularColor.isColor) {
          i.specularColor = this.specularColor.getHex();
        }
        if (this.shininess !== undefined) {
          i.shininess = this.shininess;
        }
        if (this.clearcoat !== undefined) {
          i.clearcoat = this.clearcoat;
        }
        if (this.clearcoatRoughness !== undefined) {
          i.clearcoatRoughness = this.clearcoatRoughness;
        }
        if (this.clearcoatMap && this.clearcoatMap.isTexture) {
          i.clearcoatMap = this.clearcoatMap.toJSON(t).uuid;
        }
        if (this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture) {
          i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid;
        }
        if (this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture) {
          i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid;
          i.clearcoatNormalScale = this.clearcoatNormalScale.toArray();
        }
        if (this.sheenColorMap && this.sheenColorMap.isTexture) {
          i.sheenColorMap = this.sheenColorMap.toJSON(t).uuid;
        }
        if (this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture) {
          i.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(t).uuid;
        }
        if (this.dispersion !== undefined) {
          i.dispersion = this.dispersion;
        }
        if (this.iridescence !== undefined) {
          i.iridescence = this.iridescence;
        }
        if (this.iridescenceIOR !== undefined) {
          i.iridescenceIOR = this.iridescenceIOR;
        }
        if (this.iridescenceThicknessRange !== undefined) {
          i.iridescenceThicknessRange = this.iridescenceThicknessRange;
        }
        if (this.iridescenceMap && this.iridescenceMap.isTexture) {
          i.iridescenceMap = this.iridescenceMap.toJSON(t).uuid;
        }
        if (this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture) {
          i.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid;
        }
        if (this.anisotropy !== undefined) {
          i.anisotropy = this.anisotropy;
        }
        if (this.anisotropyRotation !== undefined) {
          i.anisotropyRotation = this.anisotropyRotation;
        }
        if (this.anisotropyMap && this.anisotropyMap.isTexture) {
          i.anisotropyMap = this.anisotropyMap.toJSON(t).uuid;
        }
        if (this.map && this.map.isTexture) {
          i.map = this.map.toJSON(t).uuid;
        }
        if (this.matcap && this.matcap.isTexture) {
          i.matcap = this.matcap.toJSON(t).uuid;
        }
        if (this.alphaMap && this.alphaMap.isTexture) {
          i.alphaMap = this.alphaMap.toJSON(t).uuid;
        }
        if (this.lightMap && this.lightMap.isTexture) {
          i.lightMap = this.lightMap.toJSON(t).uuid;
          i.lightMapIntensity = this.lightMapIntensity;
        }
        if (this.aoMap && this.aoMap.isTexture) {
          i.aoMap = this.aoMap.toJSON(t).uuid;
          i.aoMapIntensity = this.aoMapIntensity;
        }
        if (this.bumpMap && this.bumpMap.isTexture) {
          i.bumpMap = this.bumpMap.toJSON(t).uuid;
          i.bumpScale = this.bumpScale;
        }
        if (this.normalMap && this.normalMap.isTexture) {
          i.normalMap = this.normalMap.toJSON(t).uuid;
          i.normalMapType = this.normalMapType;
          i.normalScale = this.normalScale.toArray();
        }
        if (this.displacementMap && this.displacementMap.isTexture) {
          i.displacementMap = this.displacementMap.toJSON(t).uuid;
          i.displacementScale = this.displacementScale;
          i.displacementBias = this.displacementBias;
        }
        if (this.roughnessMap && this.roughnessMap.isTexture) {
          i.roughnessMap = this.roughnessMap.toJSON(t).uuid;
        }
        if (this.metalnessMap && this.metalnessMap.isTexture) {
          i.metalnessMap = this.metalnessMap.toJSON(t).uuid;
        }
        if (this.emissiveMap && this.emissiveMap.isTexture) {
          i.emissiveMap = this.emissiveMap.toJSON(t).uuid;
        }
        if (this.specularMap && this.specularMap.isTexture) {
          i.specularMap = this.specularMap.toJSON(t).uuid;
        }
        if (this.specularIntensityMap && this.specularIntensityMap.isTexture) {
          i.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid;
        }
        if (this.specularColorMap && this.specularColorMap.isTexture) {
          i.specularColorMap = this.specularColorMap.toJSON(t).uuid;
        }
        if (this.envMap && this.envMap.isTexture) {
          i.envMap = this.envMap.toJSON(t).uuid;
          if (this.combine !== undefined) {
            i.combine = this.combine;
          }
        }
        if (this.envMapRotation !== undefined) {
          i.envMapRotation = this.envMapRotation.toArray();
        }
        if (this.envMapIntensity !== undefined) {
          i.envMapIntensity = this.envMapIntensity;
        }
        if (this.reflectivity !== undefined) {
          i.reflectivity = this.reflectivity;
        }
        if (this.refractionRatio !== undefined) {
          i.refractionRatio = this.refractionRatio;
        }
        if (this.gradientMap && this.gradientMap.isTexture) {
          i.gradientMap = this.gradientMap.toJSON(t).uuid;
        }
        if (this.transmission !== undefined) {
          i.transmission = this.transmission;
        }
        if (this.transmissionMap && this.transmissionMap.isTexture) {
          i.transmissionMap = this.transmissionMap.toJSON(t).uuid;
        }
        if (this.thickness !== undefined) {
          i.thickness = this.thickness;
        }
        if (this.thicknessMap && this.thicknessMap.isTexture) {
          i.thicknessMap = this.thicknessMap.toJSON(t).uuid;
        }
        if (this.attenuationDistance !== undefined && this.attenuationDistance !== Infinity) {
          i.attenuationDistance = this.attenuationDistance;
        }
        if (this.attenuationColor !== undefined) {
          i.attenuationColor = this.attenuationColor.getHex();
        }
        if (this.size !== undefined) {
          i.size = this.size;
        }
        if (this.shadowSide !== null) {
          i.shadowSide = this.shadowSide;
        }
        if (this.sizeAttenuation !== undefined) {
          i.sizeAttenuation = this.sizeAttenuation;
        }
        if (this.blending !== 1) {
          i.blending = this.blending;
        }
        if (this.side !== 0) {
          i.side = this.side;
        }
        if (this.vertexColors === true) {
          i.vertexColors = true;
        }
        if (this.opacity < 1) {
          i.opacity = this.opacity;
        }
        if (this.transparent === true) {
          i.transparent = true;
        }
        if (this.blendSrc !== 204) {
          i.blendSrc = this.blendSrc;
        }
        if (this.blendDst !== 205) {
          i.blendDst = this.blendDst;
        }
        if (this.blendEquation !== 100) {
          i.blendEquation = this.blendEquation;
        }
        if (this.blendSrcAlpha !== null) {
          i.blendSrcAlpha = this.blendSrcAlpha;
        }
        if (this.blendDstAlpha !== null) {
          i.blendDstAlpha = this.blendDstAlpha;
        }
        if (this.blendEquationAlpha !== null) {
          i.blendEquationAlpha = this.blendEquationAlpha;
        }
        if (this.blendColor && this.blendColor.isColor) {
          i.blendColor = this.blendColor.getHex();
        }
        if (this.blendAlpha !== 0) {
          i.blendAlpha = this.blendAlpha;
        }
        if (this.depthFunc !== 3) {
          i.depthFunc = this.depthFunc;
        }
        if (this.depthTest === false) {
          i.depthTest = this.depthTest;
        }
        if (this.depthWrite === false) {
          i.depthWrite = this.depthWrite;
        }
        if (this.colorWrite === false) {
          i.colorWrite = this.colorWrite;
        }
        if (this.stencilWriteMask !== 255) {
          i.stencilWriteMask = this.stencilWriteMask;
        }
        if (this.stencilFunc !== 519) {
          i.stencilFunc = this.stencilFunc;
        }
        if (this.stencilRef !== 0) {
          i.stencilRef = this.stencilRef;
        }
        if (this.stencilFuncMask !== 255) {
          i.stencilFuncMask = this.stencilFuncMask;
        }
        if (this.stencilFail !== g) {
          i.stencilFail = this.stencilFail;
        }
        if (this.stencilZFail !== g) {
          i.stencilZFail = this.stencilZFail;
        }
        if (this.stencilZPass !== g) {
          i.stencilZPass = this.stencilZPass;
        }
        if (this.stencilWrite === true) {
          i.stencilWrite = this.stencilWrite;
        }
        if (this.rotation !== undefined && this.rotation !== 0) {
          i.rotation = this.rotation;
        }
        if (this.polygonOffset === true) {
          i.polygonOffset = true;
        }
        if (this.polygonOffsetFactor !== 0) {
          i.polygonOffsetFactor = this.polygonOffsetFactor;
        }
        if (this.polygonOffsetUnits !== 0) {
          i.polygonOffsetUnits = this.polygonOffsetUnits;
        }
        if (this.linewidth !== undefined && this.linewidth !== 1) {
          i.linewidth = this.linewidth;
        }
        if (this.dashSize !== undefined) {
          i.dashSize = this.dashSize;
        }
        if (this.gapSize !== undefined) {
          i.gapSize = this.gapSize;
        }
        if (this.scale !== undefined) {
          i.scale = this.scale;
        }
        if (this.dithering === true) {
          i.dithering = true;
        }
        if (this.alphaTest > 0) {
          i.alphaTest = this.alphaTest;
        }
        if (this.alphaHash === true) {
          i.alphaHash = true;
        }
        if (this.alphaToCoverage === true) {
          i.alphaToCoverage = true;
        }
        if (this.premultipliedAlpha === true) {
          i.premultipliedAlpha = true;
        }
        if (this.forceSinglePass === true) {
          i.forceSinglePass = true;
        }
        if (this.wireframe === true) {
          i.wireframe = true;
        }
        if (this.wireframeLinewidth > 1) {
          i.wireframeLinewidth = this.wireframeLinewidth;
        }
        if (this.wireframeLinecap !== "round") {
          i.wireframeLinecap = this.wireframeLinecap;
        }
        if (this.wireframeLinejoin !== "round") {
          i.wireframeLinejoin = this.wireframeLinejoin;
        }
        if (this.flatShading === true) {
          i.flatShading = true;
        }
        if (this.visible === false) {
          i.visible = false;
        }
        if (this.toneMapped === false) {
          i.toneMapped = false;
        }
        if (this.fog === false) {
          i.fog = false;
        }
        if (Object.keys(this.userData).length > 0) {
          i.userData = this.userData;
        }
        if (e) {
          const e = r(t.textures);
          const s = r(t.images);
          if (e.length > 0) {
            i.textures = e;
          }
          if (s.length > 0) {
            i.images = s;
          }
        }
        return i;
      }
      clone() {
        return new this.constructor().copy(this);
      }
      copy(t) {
        this.name = t.name;
        this.blending = t.blending;
        this.side = t.side;
        this.vertexColors = t.vertexColors;
        this.opacity = t.opacity;
        this.transparent = t.transparent;
        this.blendSrc = t.blendSrc;
        this.blendDst = t.blendDst;
        this.blendEquation = t.blendEquation;
        this.blendSrcAlpha = t.blendSrcAlpha;
        this.blendDstAlpha = t.blendDstAlpha;
        this.blendEquationAlpha = t.blendEquationAlpha;
        this.blendColor.copy(t.blendColor);
        this.blendAlpha = t.blendAlpha;
        this.depthFunc = t.depthFunc;
        this.depthTest = t.depthTest;
        this.depthWrite = t.depthWrite;
        this.stencilWriteMask = t.stencilWriteMask;
        this.stencilFunc = t.stencilFunc;
        this.stencilRef = t.stencilRef;
        this.stencilFuncMask = t.stencilFuncMask;
        this.stencilFail = t.stencilFail;
        this.stencilZFail = t.stencilZFail;
        this.stencilZPass = t.stencilZPass;
        this.stencilWrite = t.stencilWrite;
        const e = t.clippingPlanes;
        let i = null;
        if (e !== null) {
          const t = e.length;
          i = new Array(t);
          for (let r = 0; r !== t; ++r) {
            i[r] = e[r].clone();
          }
        }
        this.clippingPlanes = i;
        this.clipIntersection = t.clipIntersection;
        this.clipShadows = t.clipShadows;
        this.shadowSide = t.shadowSide;
        this.colorWrite = t.colorWrite;
        this.precision = t.precision;
        this.polygonOffset = t.polygonOffset;
        this.polygonOffsetFactor = t.polygonOffsetFactor;
        this.polygonOffsetUnits = t.polygonOffsetUnits;
        this.dithering = t.dithering;
        this.alphaTest = t.alphaTest;
        this.alphaHash = t.alphaHash;
        this.alphaToCoverage = t.alphaToCoverage;
        this.premultipliedAlpha = t.premultipliedAlpha;
        this.forceSinglePass = t.forceSinglePass;
        this.visible = t.visible;
        this.toneMapped = t.toneMapped;
        this.userData = JSON.parse(JSON.stringify(t.userData));
        return this;
      }
      dispose() {
        this.dispatchEvent({
          type: "dispose"
        });
      }
      set needsUpdate(t) {
        if (t === true) {
          this.version++;
        }
      }
    }
    class Ce extends xe {
      constructor(t) {
        super();
        this.isMeshBasicMaterial = true;
        this.type = "MeshBasicMaterial";
        this.color = new we(16777215);
        this.map = null;
        this.lightMap = null;
        this.lightMapIntensity = 1;
        this.aoMap = null;
        this.aoMapIntensity = 1;
        this.specularMap = null;
        this.alphaMap = null;
        this.envMap = null;
        this.envMapRotation = new Ft();
        this.combine = 0;
        this.reflectivity = 1;
        this.refractionRatio = 0.98;
        this.wireframe = false;
        this.wireframeLinewidth = 1;
        this.wireframeLinecap = "round";
        this.wireframeLinejoin = "round";
        this.fog = true;
        this.setValues(t);
      }
      copy(t) {
        super.copy(t);
        this.color.copy(t.color);
        this.map = t.map;
        this.lightMap = t.lightMap;
        this.lightMapIntensity = t.lightMapIntensity;
        this.aoMap = t.aoMap;
        this.aoMapIntensity = t.aoMapIntensity;
        this.specularMap = t.specularMap;
        this.alphaMap = t.alphaMap;
        this.envMap = t.envMap;
        this.envMapRotation.copy(t.envMapRotation);
        this.combine = t.combine;
        this.reflectivity = t.reflectivity;
        this.refractionRatio = t.refractionRatio;
        this.wireframe = t.wireframe;
        this.wireframeLinewidth = t.wireframeLinewidth;
        this.wireframeLinecap = t.wireframeLinecap;
        this.wireframeLinejoin = t.wireframeLinejoin;
        this.fog = t.fog;
        return this;
      }
    }
    const Se = new R();
    const ke = new v();
    let _e = 0;
    class Ee {
      constructor(t, e, i = false) {
        if (Array.isArray(t)) {
          throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        }
        this.isBufferAttribute = true;
        Object.defineProperty(this, "id", {
          value: _e++
        });
        this.name = "";
        this.array = t;
        this.itemSize = e;
        this.count = t !== undefined ? t.length / e : 0;
        this.normalized = i;
        this.usage = p;
        this.updateRanges = [];
        this.gpuType = s;
        this.version = 0;
      }
      onUploadCallback() {}
      set needsUpdate(t) {
        if (t === true) {
          this.version++;
        }
      }
      setUsage(t) {
        this.usage = t;
        return this;
      }
      addUpdateRange(t, e) {
        this.updateRanges.push({
          start: t,
          count: e
        });
      }
      clearUpdateRanges() {
        this.updateRanges.length = 0;
      }
      copy(t) {
        this.name = t.name;
        this.array = new t.array.constructor(t.array);
        this.itemSize = t.itemSize;
        this.count = t.count;
        this.normalized = t.normalized;
        this.usage = t.usage;
        this.gpuType = t.gpuType;
        return this;
      }
      copyAt(t, e, i) {
        t *= this.itemSize;
        i *= e.itemSize;
        for (let r = 0, s = this.itemSize; r < s; r++) {
          this.array[t + r] = e.array[i + r];
        }
        return this;
      }
      copyArray(t) {
        this.array.set(t);
        return this;
      }
      applyMatrix3(t) {
        if (this.itemSize === 2) {
          for (let e = 0, i = this.count; e < i; e++) {
            ke.fromBufferAttribute(this, e);
            ke.applyMatrix3(t);
            this.setXY(e, ke.x, ke.y);
          }
        } else if (this.itemSize === 3) {
          for (let e = 0, i = this.count; e < i; e++) {
            Se.fromBufferAttribute(this, e);
            Se.applyMatrix3(t);
            this.setXYZ(e, Se.x, Se.y, Se.z);
          }
        }
        return this;
      }
      applyMatrix4(t) {
        for (let e = 0, i = this.count; e < i; e++) {
          Se.fromBufferAttribute(this, e);
          Se.applyMatrix4(t);
          this.setXYZ(e, Se.x, Se.y, Se.z);
        }
        return this;
      }
      applyNormalMatrix(t) {
        for (let e = 0, i = this.count; e < i; e++) {
          Se.fromBufferAttribute(this, e);
          Se.applyNormalMatrix(t);
          this.setXYZ(e, Se.x, Se.y, Se.z);
        }
        return this;
      }
      transformDirection(t) {
        for (let e = 0, i = this.count; e < i; e++) {
          Se.fromBufferAttribute(this, e);
          Se.transformDirection(t);
          this.setXYZ(e, Se.x, Se.y, Se.z);
        }
        return this;
      }
      set(t, e = 0) {
        this.array.set(t, e);
        return this;
      }
      getComponent(t, e) {
        let i = this.array[t * this.itemSize + e];
        if (this.normalized) {
          i = T(i, this.array);
        }
        return i;
      }
      setComponent(t, e, i) {
        if (this.normalized) {
          i = Q(i, this.array);
        }
        this.array[t * this.itemSize + e] = i;
        return this;
      }
      getX(t) {
        let e = this.array[t * this.itemSize];
        if (this.normalized) {
          e = T(e, this.array);
        }
        return e;
      }
      setX(t, e) {
        if (this.normalized) {
          e = Q(e, this.array);
        }
        this.array[t * this.itemSize] = e;
        return this;
      }
      getY(t) {
        let e = this.array[t * this.itemSize + 1];
        if (this.normalized) {
          e = T(e, this.array);
        }
        return e;
      }
      setY(t, e) {
        if (this.normalized) {
          e = Q(e, this.array);
        }
        this.array[t * this.itemSize + 1] = e;
        return this;
      }
      getZ(t) {
        let e = this.array[t * this.itemSize + 2];
        if (this.normalized) {
          e = T(e, this.array);
        }
        return e;
      }
      setZ(t, e) {
        if (this.normalized) {
          e = Q(e, this.array);
        }
        this.array[t * this.itemSize + 2] = e;
        return this;
      }
      getW(t) {
        let e = this.array[t * this.itemSize + 3];
        if (this.normalized) {
          e = T(e, this.array);
        }
        return e;
      }
      setW(t, e) {
        if (this.normalized) {
          e = Q(e, this.array);
        }
        this.array[t * this.itemSize + 3] = e;
        return this;
      }
      setXY(t, e, i) {
        t *= this.itemSize;
        if (this.normalized) {
          e = Q(e, this.array);
          i = Q(i, this.array);
        }
        this.array[t + 0] = e;
        this.array[t + 1] = i;
        return this;
      }
      setXYZ(t, e, i, r) {
        t *= this.itemSize;
        if (this.normalized) {
          e = Q(e, this.array);
          i = Q(i, this.array);
          r = Q(r, this.array);
        }
        this.array[t + 0] = e;
        this.array[t + 1] = i;
        this.array[t + 2] = r;
        return this;
      }
      setXYZW(t, e, i, r, s) {
        t *= this.itemSize;
        if (this.normalized) {
          e = Q(e, this.array);
          i = Q(i, this.array);
          r = Q(r, this.array);
          s = Q(s, this.array);
        }
        this.array[t + 0] = e;
        this.array[t + 1] = i;
        this.array[t + 2] = r;
        this.array[t + 3] = s;
        return this;
      }
      onUpload(t) {
        this.onUploadCallback = t;
        return this;
      }
      clone() {
        return new this.constructor(this.array, this.itemSize).copy(this);
      }
      toJSON() {
        const t = {
          itemSize: this.itemSize,
          type: this.array.constructor.name,
          array: Array.from(this.array),
          normalized: this.normalized
        };
        if (this.name !== "") {
          t.name = this.name;
        }
        if (this.usage !== p) {
          t.usage = this.usage;
        }
        return t;
      }
    }
    class Me extends Ee {
      constructor(t, e, i) {
        super(new Uint16Array(t), e, i);
      }
    }
    class Pe extends Ee {
      constructor(t, e, i) {
        super(new Uint32Array(t), e, i);
      }
    }
    class Te extends Ee {
      constructor(t, e, i) {
        super(new Float32Array(t), e, i);
      }
    }
    let Qe = 0;
    const ve = new Et();
    const De = new ee();
    const Re = new R();
    const ze = new et();
    const We = new et();
    const Fe = new R();
    class Ue extends S {
      constructor() {
        super();
        this.isBufferGeometry = true;
        Object.defineProperty(this, "id", {
          value: Qe++
        });
        this.uuid = _();
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
      setIndex(t) {
        if (Array.isArray(t)) {
          this.index = new (function (t) {
            for (let e = t.length - 1; e >= 0; --e) {
              if (t[e] >= 65535) {
                return true;
              }
            }
            return false;
          }(t) ? Pe : Me)(t, 1);
        } else {
          this.index = t;
        }
        return this;
      }
      setIndirect(t) {
        this.indirect = t;
        return this;
      }
      getIndirect() {
        return this.indirect;
      }
      getAttribute(t) {
        return this.attributes[t];
      }
      setAttribute(t, e) {
        this.attributes[t] = e;
        return this;
      }
      deleteAttribute(t) {
        delete this.attributes[t];
        return this;
      }
      hasAttribute(t) {
        return this.attributes[t] !== undefined;
      }
      addGroup(t, e, i = 0) {
        this.groups.push({
          start: t,
          count: e,
          materialIndex: i
        });
      }
      clearGroups() {
        this.groups = [];
      }
      setDrawRange(t, e) {
        this.drawRange.start = t;
        this.drawRange.count = e;
      }
      applyMatrix4(t) {
        const e = this.attributes.position;
        if (e !== undefined) {
          e.applyMatrix4(t);
          e.needsUpdate = true;
        }
        const i = this.attributes.normal;
        if (i !== undefined) {
          const e = new F().getNormalMatrix(t);
          i.applyNormalMatrix(e);
          i.needsUpdate = true;
        }
        const r = this.attributes.tangent;
        if (r !== undefined) {
          r.transformDirection(t);
          r.needsUpdate = true;
        }
        if (this.boundingBox !== null) {
          this.computeBoundingBox();
        }
        if (this.boundingSphere !== null) {
          this.computeBoundingSphere();
        }
        return this;
      }
      applyQuaternion(t) {
        ve.makeRotationFromQuaternion(t);
        this.applyMatrix4(ve);
        return this;
      }
      rotateX(t) {
        ve.makeRotationX(t);
        this.applyMatrix4(ve);
        return this;
      }
      rotateY(t) {
        ve.makeRotationY(t);
        this.applyMatrix4(ve);
        return this;
      }
      rotateZ(t) {
        ve.makeRotationZ(t);
        this.applyMatrix4(ve);
        return this;
      }
      translate(t, e, i) {
        ve.makeTranslation(t, e, i);
        this.applyMatrix4(ve);
        return this;
      }
      scale(t, e, i) {
        ve.makeScale(t, e, i);
        this.applyMatrix4(ve);
        return this;
      }
      lookAt(t) {
        De.lookAt(t);
        De.updateMatrix();
        this.applyMatrix4(De.matrix);
        return this;
      }
      center() {
        this.computeBoundingBox();
        this.boundingBox.getCenter(Re).negate();
        this.translate(Re.x, Re.y, Re.z);
        return this;
      }
      setFromPoints(t) {
        const e = this.getAttribute("position");
        if (e === undefined) {
          const e = [];
          for (let i = 0, r = t.length; i < r; i++) {
            const r = t[i];
            e.push(r.x, r.y, r.z || 0);
          }
          this.setAttribute("position", new Te(e, 3));
        } else {
          const i = Math.min(t.length, e.count);
          for (let r = 0; r < i; r++) {
            const i = t[r];
            e.setXYZ(r, i.x, i.y, i.z || 0);
          }
          if (t.length > e.count) {
            B("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");
          }
          e.needsUpdate = true;
        }
        return this;
      }
      computeBoundingBox() {
        if (this.boundingBox === null) {
          this.boundingBox = new et();
        }
        const t = this.attributes.position;
        const e = this.morphAttributes.position;
        if (t && t.isGLBufferAttribute) {
          x("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this);
          this.boundingBox.set(new R(-Infinity, -Infinity, -Infinity), new R(Infinity, Infinity, Infinity));
          return;
        }
        if (t !== undefined) {
          this.boundingBox.setFromBufferAttribute(t);
          if (e) {
            for (let t = 0, i = e.length; t < i; t++) {
              const i = e[t];
              ze.setFromBufferAttribute(i);
              if (this.morphTargetsRelative) {
                Fe.addVectors(this.boundingBox.min, ze.min);
                this.boundingBox.expandByPoint(Fe);
                Fe.addVectors(this.boundingBox.max, ze.max);
                this.boundingBox.expandByPoint(Fe);
              } else {
                this.boundingBox.expandByPoint(ze.min);
                this.boundingBox.expandByPoint(ze.max);
              }
            }
          }
        } else {
          this.boundingBox.makeEmpty();
        }
        if (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) {
          x("BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The \"position\" attribute is likely to have NaN values.", this);
        }
      }
      computeBoundingSphere() {
        if (this.boundingSphere === null) {
          this.boundingSphere = new yt();
        }
        const t = this.attributes.position;
        const e = this.morphAttributes.position;
        if (t && t.isGLBufferAttribute) {
          x("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this);
          this.boundingSphere.set(new R(), Infinity);
          return;
        }
        if (t) {
          const i = this.boundingSphere.center;
          ze.setFromBufferAttribute(t);
          if (e) {
            for (let t = 0, i = e.length; t < i; t++) {
              const i = e[t];
              We.setFromBufferAttribute(i);
              if (this.morphTargetsRelative) {
                Fe.addVectors(ze.min, We.min);
                ze.expandByPoint(Fe);
                Fe.addVectors(ze.max, We.max);
                ze.expandByPoint(Fe);
              } else {
                ze.expandByPoint(We.min);
                ze.expandByPoint(We.max);
              }
            }
          }
          ze.getCenter(i);
          let r = 0;
          for (let e = 0, s = t.count; e < s; e++) {
            Fe.fromBufferAttribute(t, e);
            r = Math.max(r, i.distanceToSquared(Fe));
          }
          if (e) {
            for (let s = 0, n = e.length; s < n; s++) {
              const n = e[s];
              const a = this.morphTargetsRelative;
              for (let e = 0, s = n.count; e < s; e++) {
                Fe.fromBufferAttribute(n, e);
                if (a) {
                  Re.fromBufferAttribute(t, e);
                  Fe.add(Re);
                }
                r = Math.max(r, i.distanceToSquared(Fe));
              }
            }
          }
          this.boundingSphere.radius = Math.sqrt(r);
          if (isNaN(this.boundingSphere.radius)) {
            x("BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The \"position\" attribute is likely to have NaN values.", this);
          }
        }
      }
      computeTangents() {
        const t = this.index;
        const e = this.attributes;
        if (t === null || e.position === undefined || e.normal === undefined || e.uv === undefined) {
          x("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
          return;
        }
        const i = e.position;
        const r = e.normal;
        const s = e.uv;
        if (this.hasAttribute("tangent") === false) {
          this.setAttribute("tangent", new Ee(new Float32Array(i.count * 4), 4));
        }
        const n = this.getAttribute("tangent");
        const a = [];
        const o = [];
        for (let t = 0; t < i.count; t++) {
          a[t] = new R();
          o[t] = new R();
        }
        const l = new R();
        const h = new R();
        const c = new R();
        const A = new v();
        const d = new v();
        const u = new v();
        const f = new R();
        const g = new R();
        function p(t, e, r) {
          l.fromBufferAttribute(i, t);
          h.fromBufferAttribute(i, e);
          c.fromBufferAttribute(i, r);
          A.fromBufferAttribute(s, t);
          d.fromBufferAttribute(s, e);
          u.fromBufferAttribute(s, r);
          h.sub(l);
          c.sub(l);
          d.sub(A);
          u.sub(A);
          const n = 1 / (d.x * u.y - u.x * d.y);
          if (isFinite(n)) {
            f.copy(h).multiplyScalar(u.y).addScaledVector(c, -d.y).multiplyScalar(n);
            g.copy(c).multiplyScalar(d.x).addScaledVector(h, -u.x).multiplyScalar(n);
            a[t].add(f);
            a[e].add(f);
            a[r].add(f);
            o[t].add(g);
            o[e].add(g);
            o[r].add(g);
          }
        }
        let m = this.groups;
        if (m.length === 0) {
          m = [{
            start: 0,
            count: t.count
          }];
        }
        for (let e = 0, i = m.length; e < i; ++e) {
          const i = m[e];
          const r = i.start;
          for (let e = r, s = r + i.count; e < s; e += 3) {
            p(t.getX(e + 0), t.getX(e + 1), t.getX(e + 2));
          }
        }
        const b = new R();
        const y = new R();
        const w = new R();
        const I = new R();
        function B(t) {
          w.fromBufferAttribute(r, t);
          I.copy(w);
          const e = a[t];
          b.copy(e);
          b.sub(w.multiplyScalar(w.dot(e))).normalize();
          y.crossVectors(I, e);
          const i = y.dot(o[t]) < 0 ? -1 : 1;
          n.setXYZW(t, b.x, b.y, b.z, i);
        }
        for (let e = 0, i = m.length; e < i; ++e) {
          const i = m[e];
          const r = i.start;
          for (let e = r, s = r + i.count; e < s; e += 3) {
            B(t.getX(e + 0));
            B(t.getX(e + 1));
            B(t.getX(e + 2));
          }
        }
      }
      computeVertexNormals() {
        const t = this.index;
        const e = this.getAttribute("position");
        if (e !== undefined) {
          let i = this.getAttribute("normal");
          if (i === undefined) {
            i = new Ee(new Float32Array(e.count * 3), 3);
            this.setAttribute("normal", i);
          } else {
            for (let t = 0, e = i.count; t < e; t++) {
              i.setXYZ(t, 0, 0, 0);
            }
          }
          const r = new R();
          const s = new R();
          const n = new R();
          const a = new R();
          const o = new R();
          const l = new R();
          const h = new R();
          const c = new R();
          if (t) {
            for (let A = 0, d = t.count; A < d; A += 3) {
              const d = t.getX(A + 0);
              const u = t.getX(A + 1);
              const f = t.getX(A + 2);
              r.fromBufferAttribute(e, d);
              s.fromBufferAttribute(e, u);
              n.fromBufferAttribute(e, f);
              h.subVectors(n, s);
              c.subVectors(r, s);
              h.cross(c);
              a.fromBufferAttribute(i, d);
              o.fromBufferAttribute(i, u);
              l.fromBufferAttribute(i, f);
              a.add(h);
              o.add(h);
              l.add(h);
              i.setXYZ(d, a.x, a.y, a.z);
              i.setXYZ(u, o.x, o.y, o.z);
              i.setXYZ(f, l.x, l.y, l.z);
            }
          } else {
            for (let t = 0, a = e.count; t < a; t += 3) {
              r.fromBufferAttribute(e, t + 0);
              s.fromBufferAttribute(e, t + 1);
              n.fromBufferAttribute(e, t + 2);
              h.subVectors(n, s);
              c.subVectors(r, s);
              h.cross(c);
              i.setXYZ(t + 0, h.x, h.y, h.z);
              i.setXYZ(t + 1, h.x, h.y, h.z);
              i.setXYZ(t + 2, h.x, h.y, h.z);
            }
          }
          this.normalizeNormals();
          i.needsUpdate = true;
        }
      }
      normalizeNormals() {
        const t = this.attributes.normal;
        for (let e = 0, i = t.count; e < i; e++) {
          Fe.fromBufferAttribute(t, e);
          Fe.normalize();
          t.setXYZ(e, Fe.x, Fe.y, Fe.z);
        }
      }
      toNonIndexed() {
        function t(t, e) {
          const i = t.array;
          const r = t.itemSize;
          const s = t.normalized;
          const n = new i.constructor(e.length * r);
          let a = 0;
          let o = 0;
          for (let s = 0, l = e.length; s < l; s++) {
            a = t.isInterleavedBufferAttribute ? e[s] * t.data.stride + t.offset : e[s] * r;
            for (let t = 0; t < r; t++) {
              n[o++] = i[a++];
            }
          }
          return new Ee(n, r, s);
        }
        if (this.index === null) {
          B("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.");
          return this;
        }
        const e = new Ue();
        const i = this.index.array;
        const r = this.attributes;
        for (const s in r) {
          const n = t(r[s], i);
          e.setAttribute(s, n);
        }
        const s = this.morphAttributes;
        for (const r in s) {
          const n = [];
          const a = s[r];
          for (let e = 0, r = a.length; e < r; e++) {
            const r = t(a[e], i);
            n.push(r);
          }
          e.morphAttributes[r] = n;
        }
        e.morphTargetsRelative = this.morphTargetsRelative;
        const n = this.groups;
        for (let t = 0, i = n.length; t < i; t++) {
          const i = n[t];
          e.addGroup(i.start, i.count, i.materialIndex);
        }
        return e;
      }
      toJSON() {
        const t = {
          metadata: {
            version: 4.7,
            type: "BufferGeometry",
            generator: "BufferGeometry.toJSON"
          }
        };
        t.uuid = this.uuid;
        t.type = this.type;
        if (this.name !== "") {
          t.name = this.name;
        }
        if (Object.keys(this.userData).length > 0) {
          t.userData = this.userData;
        }
        if (this.parameters !== undefined) {
          const e = this.parameters;
          for (const i in e) {
            if (e[i] !== undefined) {
              t[i] = e[i];
            }
          }
          return t;
        }
        t.data = {
          attributes: {}
        };
        const e = this.index;
        if (e !== null) {
          t.data.index = {
            type: e.array.constructor.name,
            array: Array.prototype.slice.call(e.array)
          };
        }
        const i = this.attributes;
        for (const e in i) {
          const r = i[e];
          t.data.attributes[e] = r.toJSON(t.data);
        }
        const r = {};
        let s = false;
        for (const e in this.morphAttributes) {
          const i = this.morphAttributes[e];
          const n = [];
          for (let e = 0, r = i.length; e < r; e++) {
            const r = i[e];
            n.push(r.toJSON(t.data));
          }
          if (n.length > 0) {
            r[e] = n;
            s = true;
          }
        }
        if (s) {
          t.data.morphAttributes = r;
          t.data.morphTargetsRelative = this.morphTargetsRelative;
        }
        const n = this.groups;
        if (n.length > 0) {
          t.data.groups = JSON.parse(JSON.stringify(n));
        }
        const a = this.boundingSphere;
        if (a !== null) {
          t.data.boundingSphere = a.toJSON();
        }
        return t;
      }
      clone() {
        return new this.constructor().copy(this);
      }
      copy(t) {
        this.index = null;
        this.attributes = {};
        this.morphAttributes = {};
        this.groups = [];
        this.boundingBox = null;
        this.boundingSphere = null;
        const e = {};
        this.name = t.name;
        const i = t.index;
        if (i !== null) {
          this.setIndex(i.clone());
        }
        const r = t.attributes;
        for (const t in r) {
          const i = r[t];
          this.setAttribute(t, i.clone(e));
        }
        const s = t.morphAttributes;
        for (const t in s) {
          const i = [];
          const r = s[t];
          for (let t = 0, s = r.length; t < s; t++) {
            i.push(r[t].clone(e));
          }
          this.morphAttributes[t] = i;
        }
        this.morphTargetsRelative = t.morphTargetsRelative;
        const n = t.groups;
        for (let t = 0, e = n.length; t < e; t++) {
          const e = n[t];
          this.addGroup(e.start, e.count, e.materialIndex);
        }
        const a = t.boundingBox;
        if (a !== null) {
          this.boundingBox = a.clone();
        }
        const o = t.boundingSphere;
        if (o !== null) {
          this.boundingSphere = o.clone();
        }
        this.drawRange.start = t.drawRange.start;
        this.drawRange.count = t.drawRange.count;
        this.userData = t.userData;
        return this;
      }
      dispose() {
        this.dispatchEvent({
          type: "dispose"
        });
      }
    }
    const Ne = new Et();
    const Le = new _t();
    const Oe = new yt();
    const Ve = new R();
    const He = new R();
    const Ge = new R();
    const Je = new R();
    const qe = new R();
    const Ze = new R();
    const Ye = new R();
    const Ke = new R();
    class je extends ee {
      constructor(t = new Ue(), e = new Ce()) {
        super();
        this.isMesh = true;
        this.type = "Mesh";
        this.geometry = t;
        this.material = e;
        this.morphTargetDictionary = undefined;
        this.morphTargetInfluences = undefined;
        this.count = 1;
        this.updateMorphTargets();
      }
      copy(t, e) {
        super.copy(t, e);
        if (t.morphTargetInfluences !== undefined) {
          this.morphTargetInfluences = t.morphTargetInfluences.slice();
        }
        if (t.morphTargetDictionary !== undefined) {
          this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary);
        }
        this.material = Array.isArray(t.material) ? t.material.slice() : t.material;
        this.geometry = t.geometry;
        return this;
      }
      updateMorphTargets() {
        const t = this.geometry.morphAttributes;
        const e = Object.keys(t);
        if (e.length > 0) {
          const i = t[e[0]];
          if (i !== undefined) {
            this.morphTargetInfluences = [];
            this.morphTargetDictionary = {};
            for (let t = 0, e = i.length; t < e; t++) {
              const e = i[t].name || String(t);
              this.morphTargetInfluences.push(0);
              this.morphTargetDictionary[e] = t;
            }
          }
        }
      }
      getVertexPosition(t, e) {
        const i = this.geometry;
        const r = i.attributes.position;
        const s = i.morphAttributes.position;
        const n = i.morphTargetsRelative;
        e.fromBufferAttribute(r, t);
        const a = this.morphTargetInfluences;
        if (s && a) {
          Ze.set(0, 0, 0);
          for (let i = 0, r = s.length; i < r; i++) {
            const r = a[i];
            const o = s[i];
            if (r !== 0) {
              qe.fromBufferAttribute(o, t);
              if (n) {
                Ze.addScaledVector(qe, r);
              } else {
                Ze.addScaledVector(qe.sub(e), r);
              }
            }
          }
          e.add(Ze);
        }
        return e;
      }
      raycast(t, e) {
        const i = this.geometry;
        const r = this.material;
        const s = this.matrixWorld;
        if (r !== undefined) {
          if (i.boundingSphere === null) {
            i.computeBoundingSphere();
          }
          Oe.copy(i.boundingSphere);
          Oe.applyMatrix4(s);
          Le.copy(t.ray).recast(t.near);
          if (Oe.containsPoint(Le.origin) === false) {
            if (Le.intersectSphere(Oe, Ve) === null) {
              return;
            }
            if (Le.origin.distanceToSquared(Ve) > (t.far - t.near) ** 2) {
              return;
            }
          }
          Ne.copy(s).invert();
          Le.copy(t.ray).applyMatrix4(Ne);
          if (i.boundingBox === null || Le.intersectsBox(i.boundingBox) !== false) {
            this._computeIntersections(t, e, Le);
          }
        }
      }
      _computeIntersections(t, e, i) {
        let r;
        const s = this.geometry;
        const n = this.material;
        const a = s.index;
        const o = s.attributes.position;
        const l = s.attributes.uv;
        const h = s.attributes.uv1;
        const c = s.attributes.normal;
        const A = s.groups;
        const d = s.drawRange;
        if (a !== null) {
          if (Array.isArray(n)) {
            for (let s = 0, o = A.length; s < o; s++) {
              const o = A[s];
              const u = n[o.materialIndex];
              for (let s = Math.max(o.start, d.start), n = Math.min(a.count, Math.min(o.start + o.count, d.start + d.count)); s < n; s += 3) {
                r = Xe(this, u, t, i, l, h, c, a.getX(s), a.getX(s + 1), a.getX(s + 2));
                if (r) {
                  r.faceIndex = Math.floor(s / 3);
                  r.face.materialIndex = o.materialIndex;
                  e.push(r);
                }
              }
            }
          } else {
            for (let s = Math.max(0, d.start), o = Math.min(a.count, d.start + d.count); s < o; s += 3) {
              r = Xe(this, n, t, i, l, h, c, a.getX(s), a.getX(s + 1), a.getX(s + 2));
              if (r) {
                r.faceIndex = Math.floor(s / 3);
                e.push(r);
              }
            }
          }
        } else if (o !== undefined) {
          if (Array.isArray(n)) {
            for (let s = 0, a = A.length; s < a; s++) {
              const a = A[s];
              const u = n[a.materialIndex];
              for (let s = Math.max(a.start, d.start), n = Math.min(o.count, Math.min(a.start + a.count, d.start + d.count)); s < n; s += 3) {
                r = Xe(this, u, t, i, l, h, c, s, s + 1, s + 2);
                if (r) {
                  r.faceIndex = Math.floor(s / 3);
                  r.face.materialIndex = a.materialIndex;
                  e.push(r);
                }
              }
            }
          } else {
            for (let s = Math.max(0, d.start), a = Math.min(o.count, d.start + d.count); s < a; s += 3) {
              r = Xe(this, n, t, i, l, h, c, s, s + 1, s + 2);
              if (r) {
                r.faceIndex = Math.floor(s / 3);
                e.push(r);
              }
            }
          }
        }
      }
    }
    function Xe(t, e, i, r, s, n, a, o, l, h) {
      t.getVertexPosition(o, He);
      t.getVertexPosition(l, Ge);
      t.getVertexPosition(h, Je);
      const c = function (t, e, i, r, s, n, a, o) {
        let l;
        l = e.side === 1 ? r.intersectTriangle(a, n, s, true, o) : r.intersectTriangle(s, n, a, e.side === 0, o);
        if (l === null) {
          return null;
        }
        Ke.copy(o);
        Ke.applyMatrix4(t.matrixWorld);
        const h = i.ray.origin.distanceTo(Ke);
        if (h < i.near || h > i.far) {
          return null;
        } else {
          return {
            distance: h,
            point: Ke.clone(),
            object: t
          };
        }
      }(t, e, i, r, He, Ge, Je, Ye);
      if (c) {
        const t = new R();
        ge.getBarycoord(Ye, He, Ge, Je, t);
        if (s) {
          c.uv = ge.getInterpolatedAttribute(s, o, l, h, t, new v());
        }
        if (n) {
          c.uv1 = ge.getInterpolatedAttribute(n, o, l, h, t, new v());
        }
        if (a) {
          c.normal = ge.getInterpolatedAttribute(a, o, l, h, t, new R());
          if (c.normal.dot(r.direction) > 0) {
            c.normal.multiplyScalar(-1);
          }
        }
        const e = {
          a: o,
          b: l,
          c: h,
          normal: new R(),
          materialIndex: 0
        };
        ge.getNormal(He, Ge, Je, e.normal);
        c.face = e;
        c.barycoord = t;
      }
      return c;
    }
    class $e extends $ {
      constructor(t = null, e = 1, i = 1, r, s, n, a, o, l = 1003, h = 1003, c, A) {
        super(null, n, a, o, l, h, r, s, c, A);
        this.isDataTexture = true;
        this.image = {
          data: t,
          width: e,
          height: i
        };
        this.generateMipmaps = false;
        this.flipY = false;
        this.unpackAlignment = 1;
      }
    }
    class ti extends Ee {
      constructor(t, e, i, r = 1) {
        super(t, e, i);
        this.isInstancedBufferAttribute = true;
        this.meshPerAttribute = r;
      }
      copy(t) {
        super.copy(t);
        this.meshPerAttribute = t.meshPerAttribute;
        return this;
      }
      toJSON() {
        const t = super.toJSON();
        t.meshPerAttribute = this.meshPerAttribute;
        t.isInstancedBufferAttribute = true;
        return t;
      }
    }
    const ei = new Et();
    const ii = new Et();
    const ri = [];
    const si = new et();
    const ni = new Et();
    const ai = new je();
    const oi = new yt();
    class li extends je {
      constructor(t, e, i) {
        super(t, e);
        this.isInstancedMesh = true;
        this.instanceMatrix = new ti(new Float32Array(i * 16), 16);
        this.instanceColor = null;
        this.morphTexture = null;
        this.count = i;
        this.boundingBox = null;
        this.boundingSphere = null;
        for (let t = 0; t < i; t++) {
          this.setMatrixAt(t, ni);
        }
      }
      computeBoundingBox() {
        const t = this.geometry;
        const e = this.count;
        if (this.boundingBox === null) {
          this.boundingBox = new et();
        }
        if (t.boundingBox === null) {
          t.computeBoundingBox();
        }
        this.boundingBox.makeEmpty();
        for (let i = 0; i < e; i++) {
          this.getMatrixAt(i, ei);
          si.copy(t.boundingBox).applyMatrix4(ei);
          this.boundingBox.union(si);
        }
      }
      computeBoundingSphere() {
        const t = this.geometry;
        const e = this.count;
        if (this.boundingSphere === null) {
          this.boundingSphere = new yt();
        }
        if (t.boundingSphere === null) {
          t.computeBoundingSphere();
        }
        this.boundingSphere.makeEmpty();
        for (let i = 0; i < e; i++) {
          this.getMatrixAt(i, ei);
          oi.copy(t.boundingSphere).applyMatrix4(ei);
          this.boundingSphere.union(oi);
        }
      }
      copy(t, e) {
        super.copy(t, e);
        this.instanceMatrix.copy(t.instanceMatrix);
        if (t.morphTexture !== null) {
          this.morphTexture = t.morphTexture.clone();
        }
        if (t.instanceColor !== null) {
          this.instanceColor = t.instanceColor.clone();
        }
        this.count = t.count;
        if (t.boundingBox !== null) {
          this.boundingBox = t.boundingBox.clone();
        }
        if (t.boundingSphere !== null) {
          this.boundingSphere = t.boundingSphere.clone();
        }
        return this;
      }
      getColorAt(t, e) {
        e.fromArray(this.instanceColor.array, t * 3);
      }
      getMatrixAt(t, e) {
        e.fromArray(this.instanceMatrix.array, t * 16);
      }
      getMorphAt(t, e) {
        const i = e.morphTargetInfluences;
        const r = this.morphTexture.source.data.data;
        const s = t * (i.length + 1) + 1;
        for (let t = 0; t < i.length; t++) {
          i[t] = r[s + t];
        }
      }
      raycast(t, e) {
        const i = this.matrixWorld;
        const r = this.count;
        ai.geometry = this.geometry;
        ai.material = this.material;
        if (ai.material !== undefined && (this.boundingSphere === null && this.computeBoundingSphere(), oi.copy(this.boundingSphere), oi.applyMatrix4(i), t.ray.intersectsSphere(oi) !== false)) {
          for (let s = 0; s < r; s++) {
            this.getMatrixAt(s, ei);
            ii.multiplyMatrices(i, ei);
            ai.matrixWorld = ii;
            ai.raycast(t, ri);
            for (let t = 0, i = ri.length; t < i; t++) {
              const i = ri[t];
              i.instanceId = s;
              i.object = this;
              e.push(i);
            }
            ri.length = 0;
          }
        }
      }
      setColorAt(t, e) {
        if (this.instanceColor === null) {
          this.instanceColor = new ti(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3);
        }
        e.toArray(this.instanceColor.array, t * 3);
      }
      setMatrixAt(t, e) {
        e.toArray(this.instanceMatrix.array, t * 16);
      }
      setMorphAt(t, e) {
        const i = e.morphTargetInfluences;
        const r = i.length + 1;
        if (this.morphTexture === null) {
          this.morphTexture = new $e(new Float32Array(r * this.count), r, this.count, 1028, s);
        }
        const n = this.morphTexture.source.data.data;
        let a = 0;
        for (let t = 0; t < i.length; t++) {
          a += i[t];
        }
        const o = this.geometry.morphTargetsRelative ? 1 : 1 - a;
        const l = r * t;
        n[l] = o;
        n.set(i, l + 1);
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
    const hi = new R();
    const ci = new R();
    const Ai = new F();
    class di {
      constructor(t = new R(1, 0, 0), e = 0) {
        this.isPlane = true;
        this.normal = t;
        this.constant = e;
      }
      set(t, e) {
        this.normal.copy(t);
        this.constant = e;
        return this;
      }
      setComponents(t, e, i, r) {
        this.normal.set(t, e, i);
        this.constant = r;
        return this;
      }
      setFromNormalAndCoplanarPoint(t, e) {
        this.normal.copy(t);
        this.constant = -e.dot(this.normal);
        return this;
      }
      setFromCoplanarPoints(t, e, i) {
        const r = hi.subVectors(i, e).cross(ci.subVectors(t, e)).normalize();
        this.setFromNormalAndCoplanarPoint(r, t);
        return this;
      }
      copy(t) {
        this.normal.copy(t.normal);
        this.constant = t.constant;
        return this;
      }
      normalize() {
        const t = 1 / this.normal.length();
        this.normal.multiplyScalar(t);
        this.constant *= t;
        return this;
      }
      negate() {
        this.constant *= -1;
        this.normal.negate();
        return this;
      }
      distanceToPoint(t) {
        return this.normal.dot(t) + this.constant;
      }
      distanceToSphere(t) {
        return this.distanceToPoint(t.center) - t.radius;
      }
      projectPoint(t, e) {
        return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t));
      }
      intersectLine(t, e) {
        const i = t.delta(hi);
        const r = this.normal.dot(i);
        if (r === 0) {
          if (this.distanceToPoint(t.start) === 0) {
            return e.copy(t.start);
          } else {
            return null;
          }
        }
        const s = -(t.start.dot(this.normal) + this.constant) / r;
        if (s < 0 || s > 1) {
          return null;
        } else {
          return e.copy(t.start).addScaledVector(i, s);
        }
      }
      intersectsLine(t) {
        const e = this.distanceToPoint(t.start);
        const i = this.distanceToPoint(t.end);
        return e < 0 && i > 0 || i < 0 && e > 0;
      }
      intersectsBox(t) {
        return t.intersectsPlane(this);
      }
      intersectsSphere(t) {
        return t.intersectsPlane(this);
      }
      coplanarPoint(t) {
        return t.copy(this.normal).multiplyScalar(-this.constant);
      }
      applyMatrix4(t, e) {
        const i = e || Ai.getNormalMatrix(t);
        const r = this.coplanarPoint(hi).applyMatrix4(t);
        const s = this.normal.applyMatrix3(i).normalize();
        this.constant = -r.dot(s);
        return this;
      }
      translate(t) {
        this.constant -= t.dot(this.normal);
        return this;
      }
      equals(t) {
        return t.normal.equals(this.normal) && t.constant === this.constant;
      }
      clone() {
        return new this.constructor().copy(this);
      }
    }
    function ui(t, e) {
      if (t && t.constructor !== e) {
        if (typeof e.BYTES_PER_ELEMENT == "number") {
          return new e(t);
        } else {
          return Array.prototype.slice.call(t);
        }
      } else {
        return t;
      }
    }
    function fi(t) {
      return ArrayBuffer.isView(t) && !(t instanceof DataView);
    }
    class gi {
      constructor(t, e, i, r) {
        this.parameterPositions = t;
        this._cachedIndex = 0;
        this.resultBuffer = r !== undefined ? r : new e.constructor(i);
        this.sampleValues = e;
        this.valueSize = i;
        this.settings = null;
        this.DefaultSettings_ = {};
      }
      evaluate(t) {
        const e = this.parameterPositions;
        let i = this._cachedIndex;
        let r = e[i];
        let s = e[i - 1];
        t: {
          e: {
            let n;
            i: {
              r: if (!(t < r)) {
                for (let n = i + 2;;) {
                  if (r === undefined) {
                    if (t < s) {
                      break r;
                    }
                    i = e.length;
                    this._cachedIndex = i;
                    return this.copySampleValue_(i - 1);
                  }
                  if (i === n) {
                    break;
                  }
                  s = r;
                  r = e[++i];
                  if (t < r) {
                    break e;
                  }
                }
                n = e.length;
                break i;
              }
              if (t >= s) {
                break t;
              }
              {
                const a = e[1];
                if (t < a) {
                  i = 2;
                  s = a;
                }
                for (let n = i - 2;;) {
                  if (s === undefined) {
                    this._cachedIndex = 0;
                    return this.copySampleValue_(0);
                  }
                  if (i === n) {
                    break;
                  }
                  r = s;
                  s = e[--i - 1];
                  if (t >= s) {
                    break e;
                  }
                }
                n = i;
                i = 0;
              }
            }
            while (i < n) {
              const r = i + n >>> 1;
              if (t < e[r]) {
                n = r;
              } else {
                i = r + 1;
              }
            }
            r = e[i];
            s = e[i - 1];
            if (s === undefined) {
              this._cachedIndex = 0;
              return this.copySampleValue_(0);
            }
            if (r === undefined) {
              i = e.length;
              this._cachedIndex = i;
              return this.copySampleValue_(i - 1);
            }
          }
          this._cachedIndex = i;
          this.intervalChanged_(i, s, r);
        }
        return this.interpolate_(i, s, t, r);
      }
      getSettings_() {
        return this.settings || this.DefaultSettings_;
      }
      copySampleValue_(t) {
        const e = this.resultBuffer;
        const i = this.sampleValues;
        const r = this.valueSize;
        const s = t * r;
        for (let t = 0; t !== r; ++t) {
          e[t] = i[s + t];
        }
        return e;
      }
      interpolate_() {
        throw new Error("call to abstract method");
      }
      intervalChanged_() {}
    }
    class pi extends gi {
      constructor(t, e, i, r) {
        super(t, e, i, r);
        this._weightPrev = -0;
        this._offsetPrev = -0;
        this._weightNext = -0;
        this._offsetNext = -0;
        this.DefaultSettings_ = {
          endingStart: l,
          endingEnd: l
        };
      }
      intervalChanged_(t, e, i) {
        const r = this.parameterPositions;
        let s = t - 2;
        let n = t + 1;
        let a = r[s];
        let o = r[n];
        if (a === undefined) {
          switch (this.getSettings_().endingStart) {
            case h:
              s = t;
              a = e * 2 - i;
              break;
            case c:
              s = r.length - 2;
              a = e + r[s] - r[s + 1];
              break;
            default:
              s = t;
              a = i;
          }
        }
        if (o === undefined) {
          switch (this.getSettings_().endingEnd) {
            case h:
              n = t;
              o = i * 2 - e;
              break;
            case c:
              n = 1;
              o = i + r[1] - r[0];
              break;
            default:
              n = t - 1;
              o = e;
          }
        }
        const l = (i - e) * 0.5;
        const A = this.valueSize;
        this._weightPrev = l / (e - a);
        this._weightNext = l / (o - i);
        this._offsetPrev = s * A;
        this._offsetNext = n * A;
      }
      interpolate_(t, e, i, r) {
        const s = this.resultBuffer;
        const n = this.sampleValues;
        const a = this.valueSize;
        const o = t * a;
        const l = o - a;
        const h = this._offsetPrev;
        const c = this._offsetNext;
        const A = this._weightPrev;
        const d = this._weightNext;
        const u = (i - e) / (r - e);
        const f = u * u;
        const g = f * u;
        const p = -A * g + A * 2 * f - A * u;
        const m = (1 + A) * g + (-1.5 - A * 2) * f + (-0.5 + A) * u + 1;
        const b = (-1 - d) * g + (1.5 + d) * f + u * 0.5;
        const y = d * g - d * f;
        for (let t = 0; t !== a; ++t) {
          s[t] = p * n[h + t] + m * n[l + t] + b * n[o + t] + y * n[c + t];
        }
        return s;
      }
    }
    class mi extends gi {
      constructor(t, e, i, r) {
        super(t, e, i, r);
      }
      interpolate_(t, e, i, r) {
        const s = this.resultBuffer;
        const n = this.sampleValues;
        const a = this.valueSize;
        const o = t * a;
        const l = o - a;
        const h = (i - e) / (r - e);
        const c = 1 - h;
        for (let t = 0; t !== a; ++t) {
          s[t] = n[l + t] * c + n[o + t] * h;
        }
        return s;
      }
    }
    class bi extends gi {
      constructor(t, e, i, r) {
        super(t, e, i, r);
      }
      interpolate_(t) {
        return this.copySampleValue_(t - 1);
      }
    }
    class yi {
      constructor(t, e, i, r) {
        if (t === undefined) {
          throw new Error("THREE.KeyframeTrack: track name is undefined");
        }
        if (e === undefined || e.length === 0) {
          throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
        }
        this.name = t;
        this.times = ui(e, this.TimeBufferType);
        this.values = ui(i, this.ValueBufferType);
        this.setInterpolation(r || this.DefaultInterpolation);
      }
      static toJSON(t) {
        const e = t.constructor;
        let i;
        if (e.toJSON !== this.toJSON) {
          i = e.toJSON(t);
        } else {
          i = {
            name: t.name,
            times: ui(t.times, Array),
            values: ui(t.values, Array)
          };
          const e = t.getInterpolation();
          if (e !== t.DefaultInterpolation) {
            i.interpolation = e;
          }
        }
        i.type = t.ValueTypeName;
        return i;
      }
      InterpolantFactoryMethodDiscrete(t) {
        return new bi(this.times, this.values, this.getValueSize(), t);
      }
      InterpolantFactoryMethodLinear(t) {
        return new mi(this.times, this.values, this.getValueSize(), t);
      }
      InterpolantFactoryMethodSmooth(t) {
        return new pi(this.times, this.values, this.getValueSize(), t);
      }
      setInterpolation(t) {
        let e;
        switch (t) {
          case n:
            e = this.InterpolantFactoryMethodDiscrete;
            break;
          case a:
            e = this.InterpolantFactoryMethodLinear;
            break;
          case o:
            e = this.InterpolantFactoryMethodSmooth;
        }
        if (e === undefined) {
          const e = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
          if (this.createInterpolant === undefined) {
            if (t === this.DefaultInterpolation) {
              throw new Error(e);
            }
            this.setInterpolation(this.DefaultInterpolation);
          }
          B("KeyframeTrack:", e);
          return this;
        }
        this.createInterpolant = e;
        return this;
      }
      getInterpolation() {
        switch (this.createInterpolant) {
          case this.InterpolantFactoryMethodDiscrete:
            return n;
          case this.InterpolantFactoryMethodLinear:
            return a;
          case this.InterpolantFactoryMethodSmooth:
            return o;
        }
      }
      getValueSize() {
        return this.values.length / this.times.length;
      }
      shift(t) {
        if (t !== 0) {
          const e = this.times;
          for (let i = 0, r = e.length; i !== r; ++i) {
            e[i] += t;
          }
        }
        return this;
      }
      scale(t) {
        if (t !== 1) {
          const e = this.times;
          for (let i = 0, r = e.length; i !== r; ++i) {
            e[i] *= t;
          }
        }
        return this;
      }
      trim(t, e) {
        const i = this.times;
        const r = i.length;
        let s = 0;
        let n = r - 1;
        while (s !== r && i[s] < t) {
          ++s;
        }
        while (n !== -1 && i[n] > e) {
          --n;
        }
        ++n;
        if (s !== 0 || n !== r) {
          if (s >= n) {
            n = Math.max(n, 1);
            s = n - 1;
          }
          const t = this.getValueSize();
          this.times = i.slice(s, n);
          this.values = this.values.slice(s * t, n * t);
        }
        return this;
      }
      validate() {
        let t = true;
        const e = this.getValueSize();
        if (e - Math.floor(e) != 0) {
          x("KeyframeTrack: Invalid value size in track.", this);
          t = false;
        }
        const i = this.times;
        const r = this.values;
        const s = i.length;
        if (s === 0) {
          x("KeyframeTrack: Track is empty.", this);
          t = false;
        }
        let n = null;
        for (let e = 0; e !== s; e++) {
          const r = i[e];
          if (typeof r == "number" && isNaN(r)) {
            x("KeyframeTrack: Time is not a valid number.", this, e, r);
            t = false;
            break;
          }
          if (n !== null && n > r) {
            x("KeyframeTrack: Out of order keys.", this, e, r, n);
            t = false;
            break;
          }
          n = r;
        }
        if (r !== undefined && fi(r)) {
          for (let e = 0, i = r.length; e !== i; ++e) {
            const i = r[e];
            if (isNaN(i)) {
              x("KeyframeTrack: Value is not a valid number.", this, e, i);
              t = false;
              break;
            }
          }
        }
        return t;
      }
      optimize() {
        const t = this.times.slice();
        const e = this.values.slice();
        const i = this.getValueSize();
        const r = this.getInterpolation() === o;
        const s = t.length - 1;
        let n = 1;
        for (let a = 1; a < s; ++a) {
          let s = false;
          const o = t[a];
          if (o !== t[a + 1] && (a !== 1 || o !== t[0])) {
            if (r) {
              s = true;
            } else {
              const t = a * i;
              const r = t - i;
              const n = t + i;
              for (let a = 0; a !== i; ++a) {
                const i = e[t + a];
                if (i !== e[r + a] || i !== e[n + a]) {
                  s = true;
                  break;
                }
              }
            }
          }
          if (s) {
            if (a !== n) {
              t[n] = t[a];
              const r = a * i;
              const s = n * i;
              for (let t = 0; t !== i; ++t) {
                e[s + t] = e[r + t];
              }
            }
            ++n;
          }
        }
        if (s > 0) {
          t[n] = t[s];
          for (let t = s * i, r = n * i, a = 0; a !== i; ++a) {
            e[r + a] = e[t + a];
          }
          ++n;
        }
        if (n !== t.length) {
          this.times = t.slice(0, n);
          this.values = e.slice(0, n * i);
        } else {
          this.times = t;
          this.values = e;
        }
        return this;
      }
      clone() {
        const t = this.times.slice();
        const e = this.values.slice();
        const i = new (0, this.constructor)(this.name, t, e);
        i.createInterpolant = this.createInterpolant;
        return i;
      }
    }
    yi.prototype.ValueTypeName = "";
    yi.prototype.TimeBufferType = Float32Array;
    yi.prototype.ValueBufferType = Float32Array;
    yi.prototype.DefaultInterpolation = a;
    class wi extends yi {
      constructor(t, e, i) {
        super(t, e, i);
      }
    }
    wi.prototype.ValueTypeName = "bool";
    wi.prototype.ValueBufferType = Array;
    wi.prototype.DefaultInterpolation = n;
    wi.prototype.InterpolantFactoryMethodLinear = undefined;
    wi.prototype.InterpolantFactoryMethodSmooth = undefined;
    class Ii extends yi {
      constructor(t, e, i, r) {
        super(t, e, i, r);
      }
    }
    Ii.prototype.ValueTypeName = "color";
    class Bi extends yi {
      constructor(t, e, i, r) {
        super(t, e, i, r);
      }
    }
    Bi.prototype.ValueTypeName = "number";
    class xi extends gi {
      constructor(t, e, i, r) {
        super(t, e, i, r);
      }
      interpolate_(t, e, i, r) {
        const s = this.resultBuffer;
        const n = this.sampleValues;
        const a = this.valueSize;
        const o = (i - e) / (r - e);
        let l = t * a;
        for (let t = l + a; l !== t; l += 4) {
          D.slerpFlat(s, 0, n, l - a, n, l, o);
        }
        return s;
      }
    }
    class Ci extends yi {
      constructor(t, e, i, r) {
        super(t, e, i, r);
      }
      InterpolantFactoryMethodLinear(t) {
        return new xi(this.times, this.values, this.getValueSize(), t);
      }
    }
    Ci.prototype.ValueTypeName = "quaternion";
    Ci.prototype.InterpolantFactoryMethodSmooth = undefined;
    class Si extends yi {
      constructor(t, e, i) {
        super(t, e, i);
      }
    }
    Si.prototype.ValueTypeName = "string";
    Si.prototype.ValueBufferType = Array;
    Si.prototype.DefaultInterpolation = n;
    Si.prototype.InterpolantFactoryMethodLinear = undefined;
    Si.prototype.InterpolantFactoryMethodSmooth = undefined;
    class ki extends yi {
      constructor(t, e, i, r) {
        super(t, e, i, r);
      }
    }
    ki.prototype.ValueTypeName = "vector";
    class _i {
      constructor(t, e, i) {
        const r = this;
        let s;
        let n = false;
        let a = 0;
        let o = 0;
        const l = [];
        this.onStart = undefined;
        this.onLoad = t;
        this.onProgress = e;
        this.onError = i;
        this._abortController = null;
        this.itemStart = function (t) {
          o++;
          if (n === false && r.onStart !== undefined) {
            r.onStart(t, a, o);
          }
          n = true;
        };
        this.itemEnd = function (t) {
          a++;
          if (r.onProgress !== undefined) {
            r.onProgress(t, a, o);
          }
          if (a === o) {
            n = false;
            if (r.onLoad !== undefined) {
              r.onLoad();
            }
          }
        };
        this.itemError = function (t) {
          if (r.onError !== undefined) {
            r.onError(t);
          }
        };
        this.resolveURL = function (t) {
          if (s) {
            return s(t);
          } else {
            return t;
          }
        };
        this.setURLModifier = function (t) {
          s = t;
          return this;
        };
        this.addHandler = function (t, e) {
          l.push(t, e);
          return this;
        };
        this.removeHandler = function (t) {
          const e = l.indexOf(t);
          if (e !== -1) {
            l.splice(e, 2);
          }
          return this;
        };
        this.getHandler = function (t) {
          for (let e = 0, i = l.length; e < i; e += 2) {
            const i = l[e];
            const r = l[e + 1];
            if (i.global) {
              i.lastIndex = 0;
            }
            if (i.test(t)) {
              return r;
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
    const Ei = new _i();
    class Mi {
      constructor(t) {
        this.manager = t !== undefined ? t : Ei;
        this.crossOrigin = "anonymous";
        this.withCredentials = false;
        this.path = "";
        this.resourcePath = "";
        this.requestHeader = {};
      }
      load() {}
      loadAsync(t, e) {
        const i = this;
        return new Promise(function (r, s) {
          i.load(t, r, e, s);
        });
      }
      parse() {}
      setCrossOrigin(t) {
        this.crossOrigin = t;
        return this;
      }
      setWithCredentials(t) {
        this.withCredentials = t;
        return this;
      }
      setPath(t) {
        this.path = t;
        return this;
      }
      setResourcePath(t) {
        this.resourcePath = t;
        return this;
      }
      setRequestHeader(t) {
        this.requestHeader = t;
        return this;
      }
      abort() {
        return this;
      }
    }
    Mi.DEFAULT_MATERIAL_NAME = "__DEFAULT";
    Error;
    new WeakMap();
    new WeakMap();
    const Pi = "\\[\\]\\.:\\/";
    const Ti = new RegExp("[" + Pi + "]", "g");
    const Qi = "[^" + Pi + "]";
    const vi = "[^" + Pi.replace("\\.", "") + "]";
    const Di = new RegExp("^" + /((?:WC+[\/:])*)/.source.replace("WC", Qi) + /(WCOD+)?/.source.replace("WCOD", vi) + /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Qi) + /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Qi) + "$");
    const Ri = ["material", "materials", "bones", "map"];
    class zi {
      constructor(t, e, i) {
        this.path = e;
        this.parsedPath = i || zi.parseTrackName(e);
        this.node = zi.findNode(t, this.parsedPath.nodeName);
        this.rootNode = t;
        this.getValue = this._getValue_unbound;
        this.setValue = this._setValue_unbound;
      }
      static create(t, e, i) {
        if (t && t.isAnimationObjectGroup) {
          return new zi.Composite(t, e, i);
        } else {
          return new zi(t, e, i);
        }
      }
      static sanitizeNodeName(t) {
        return t.replace(/\s/g, "_").replace(Ti, "");
      }
      static parseTrackName(t) {
        const e = Di.exec(t);
        if (e === null) {
          throw new Error("PropertyBinding: Cannot parse trackName: " + t);
        }
        const i = {
          nodeName: e[2],
          objectName: e[3],
          objectIndex: e[4],
          propertyName: e[5],
          propertyIndex: e[6]
        };
        const r = i.nodeName && i.nodeName.lastIndexOf(".");
        if (r !== undefined && r !== -1) {
          const t = i.nodeName.substring(r + 1);
          if (Ri.indexOf(t) !== -1) {
            i.nodeName = i.nodeName.substring(0, r);
            i.objectName = t;
          }
        }
        if (i.propertyName === null || i.propertyName.length === 0) {
          throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
        }
        return i;
      }
      static findNode(t, e) {
        if (e === undefined || e === "" || e === "." || e === -1 || e === t.name || e === t.uuid) {
          return t;
        }
        if (t.skeleton) {
          const i = t.skeleton.getBoneByName(e);
          if (i !== undefined) {
            return i;
          }
        }
        if (t.children) {
          const i = function (t) {
            for (let r = 0; r < t.length; r++) {
              const s = t[r];
              if (s.name === e || s.uuid === e) {
                return s;
              }
              const n = i(s.children);
              if (n) {
                return n;
              }
            }
            return null;
          };
          const r = i(t.children);
          if (r) {
            return r;
          }
        }
        return null;
      }
      _getValue_unavailable() {}
      _setValue_unavailable() {}
      _getValue_direct(t, e) {
        t[e] = this.targetObject[this.propertyName];
      }
      _getValue_array(t, e) {
        const i = this.resolvedProperty;
        for (let r = 0, s = i.length; r !== s; ++r) {
          t[e++] = i[r];
        }
      }
      _getValue_arrayElement(t, e) {
        t[e] = this.resolvedProperty[this.propertyIndex];
      }
      _getValue_toArray(t, e) {
        this.resolvedProperty.toArray(t, e);
      }
      _setValue_direct(t, e) {
        this.targetObject[this.propertyName] = t[e];
      }
      _setValue_direct_setNeedsUpdate(t, e) {
        this.targetObject[this.propertyName] = t[e];
        this.targetObject.needsUpdate = true;
      }
      _setValue_direct_setMatrixWorldNeedsUpdate(t, e) {
        this.targetObject[this.propertyName] = t[e];
        this.targetObject.matrixWorldNeedsUpdate = true;
      }
      _setValue_array(t, e) {
        const i = this.resolvedProperty;
        for (let r = 0, s = i.length; r !== s; ++r) {
          i[r] = t[e++];
        }
      }
      _setValue_array_setNeedsUpdate(t, e) {
        const i = this.resolvedProperty;
        for (let r = 0, s = i.length; r !== s; ++r) {
          i[r] = t[e++];
        }
        this.targetObject.needsUpdate = true;
      }
      _setValue_array_setMatrixWorldNeedsUpdate(t, e) {
        const i = this.resolvedProperty;
        for (let r = 0, s = i.length; r !== s; ++r) {
          i[r] = t[e++];
        }
        this.targetObject.matrixWorldNeedsUpdate = true;
      }
      _setValue_arrayElement(t, e) {
        this.resolvedProperty[this.propertyIndex] = t[e];
      }
      _setValue_arrayElement_setNeedsUpdate(t, e) {
        this.resolvedProperty[this.propertyIndex] = t[e];
        this.targetObject.needsUpdate = true;
      }
      _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) {
        this.resolvedProperty[this.propertyIndex] = t[e];
        this.targetObject.matrixWorldNeedsUpdate = true;
      }
      _setValue_fromArray(t, e) {
        this.resolvedProperty.fromArray(t, e);
      }
      _setValue_fromArray_setNeedsUpdate(t, e) {
        this.resolvedProperty.fromArray(t, e);
        this.targetObject.needsUpdate = true;
      }
      _setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) {
        this.resolvedProperty.fromArray(t, e);
        this.targetObject.matrixWorldNeedsUpdate = true;
      }
      _getValue_unbound(t, e) {
        this.bind();
        this.getValue(t, e);
      }
      _setValue_unbound(t, e) {
        this.bind();
        this.setValue(t, e);
      }
      bind() {
        let t = this.node;
        const e = this.parsedPath;
        const i = e.objectName;
        const r = e.propertyName;
        let s = e.propertyIndex;
        if (!t) {
          t = zi.findNode(this.rootNode, e.nodeName);
          this.node = t;
        }
        this.getValue = this._getValue_unavailable;
        this.setValue = this._setValue_unavailable;
        if (!t) {
          B("PropertyBinding: No target node found for track: " + this.path + ".");
          return;
        }
        if (i) {
          let r = e.objectIndex;
          switch (i) {
            case "materials":
              if (!t.material) {
                x("PropertyBinding: Can not bind to material as node does not have a material.", this);
                return;
              }
              if (!t.material.materials) {
                x("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                return;
              }
              t = t.material.materials;
              break;
            case "bones":
              if (!t.skeleton) {
                x("PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                return;
              }
              t = t.skeleton.bones;
              for (let e = 0; e < t.length; e++) {
                if (t[e].name === r) {
                  r = e;
                  break;
                }
              }
              break;
            case "map":
              if ("map" in t) {
                t = t.map;
                break;
              }
              if (!t.material) {
                x("PropertyBinding: Can not bind to material as node does not have a material.", this);
                return;
              }
              if (!t.material.map) {
                x("PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
                return;
              }
              t = t.material.map;
              break;
            default:
              if (t[i] === undefined) {
                x("PropertyBinding: Can not bind to objectName of node undefined.", this);
                return;
              }
              t = t[i];
          }
          if (r !== undefined) {
            if (t[r] === undefined) {
              x("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
              return;
            }
            t = t[r];
          }
        }
        const n = t[r];
        if (n === undefined) {
          x("PropertyBinding: Trying to update property for track: " + e.nodeName + "." + r + " but it wasn't found.", t);
          return;
        }
        let a = this.Versioning.None;
        this.targetObject = t;
        if (t.isMaterial === true) {
          a = this.Versioning.NeedsUpdate;
        } else if (t.isObject3D === true) {
          a = this.Versioning.MatrixWorldNeedsUpdate;
        }
        let o = this.BindingType.Direct;
        if (s !== undefined) {
          if (r === "morphTargetInfluences") {
            if (!t.geometry) {
              x("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
              return;
            }
            if (!t.geometry.morphAttributes) {
              x("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
              return;
            }
            if (t.morphTargetDictionary[s] !== undefined) {
              s = t.morphTargetDictionary[s];
            }
          }
          o = this.BindingType.ArrayElement;
          this.resolvedProperty = n;
          this.propertyIndex = s;
        } else if (n.fromArray !== undefined && n.toArray !== undefined) {
          o = this.BindingType.HasFromToArray;
          this.resolvedProperty = n;
        } else if (Array.isArray(n)) {
          o = this.BindingType.EntireArray;
          this.resolvedProperty = n;
        } else {
          this.propertyName = r;
        }
        this.getValue = this.GetterByBindingType[o];
        this.setValue = this.SetterByBindingTypeAndVersioning[o][a];
      }
      unbind() {
        this.node = null;
        this.getValue = this._getValue_unbound;
        this.setValue = this._setValue_unbound;
      }
    }
    zi.Composite = class {
      constructor(t, e, i) {
        const r = i || zi.parseTrackName(e);
        this._targetGroup = t;
        this._bindings = t.subscribe_(e, r);
      }
      getValue(t, e) {
        this.bind();
        const i = this._targetGroup.nCachedObjects_;
        const r = this._bindings[i];
        if (r !== undefined) {
          r.getValue(t, e);
        }
      }
      setValue(t, e) {
        const i = this._bindings;
        for (let r = this._targetGroup.nCachedObjects_, s = i.length; r !== s; ++r) {
          i[r].setValue(t, e);
        }
      }
      bind() {
        const t = this._bindings;
        for (let e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e) {
          t[e].bind();
        }
      }
      unbind() {
        const t = this._bindings;
        for (let e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e) {
          t[e].unbind();
        }
      }
    };
    zi.prototype.BindingType = {
      Direct: 0,
      EntireArray: 1,
      ArrayElement: 2,
      HasFromToArray: 3
    };
    zi.prototype.Versioning = {
      None: 0,
      NeedsUpdate: 1,
      MatrixWorldNeedsUpdate: 2
    };
    zi.prototype.GetterByBindingType = [zi.prototype._getValue_direct, zi.prototype._getValue_array, zi.prototype._getValue_arrayElement, zi.prototype._getValue_toArray];
    zi.prototype.SetterByBindingTypeAndVersioning = [[zi.prototype._setValue_direct, zi.prototype._setValue_direct_setNeedsUpdate, zi.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [zi.prototype._setValue_array, zi.prototype._setValue_array_setNeedsUpdate, zi.prototype._setValue_array_setMatrixWorldNeedsUpdate], [zi.prototype._setValue_arrayElement, zi.prototype._setValue_arrayElement_setNeedsUpdate, zi.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [zi.prototype._setValue_fromArray, zi.prototype._setValue_fromArray_setNeedsUpdate, zi.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];
    new Float32Array(1);
    if (typeof __THREE_DEVTOOLS__ != "undefined") {
      __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
        detail: {
          revision: "181"
        }
      }));
    }
    if (typeof window != "undefined") {
      if (window.__THREE__) {
        B("WARNING: Multiple instances of Three.js being imported.");
      } else {
        window.__THREE__ = "181";
      }
    }
    const Wi = 2.718281828459045;
    const Fi = 2.302585092994046;
    const Ui = 0.6931471805599453;
    const Ni = 1.4426950408889634;
    const Li = 0.4342944819032518;
    const Oi = 3.141592653589793;
    const Vi = 0.7071067811865476;
    const Hi = 1.4142135623730951;
    function Gi(t) {
      throw new Error(t + ": Waiting for WASM to compile");
    }
    function Ji(t) {
      if (!Number.isFinite(t)) {
        return NaN;
      }
      const e = (t = function (t) {
        if ((t %= Math.PI * 2) < 0) {
          t += Math.PI * 2;
        }
        return t;
      }(t)) / (Math.PI * 2) * Zi.length % Zi.length;
      const i = Math.floor(e);
      const r = (i + 1) % Zi.length;
      const s = e - i;
      return Zi[i] * (1 - s) + Zi[r] * s;
    }
    function qi(t) {
      return Math.sin(t + Math.PI / 2);
    }
    Math = {
      E: Wi,
      LN10: Fi,
      LN2: Ui,
      LOG2E: Ni,
      LOG10E: Li,
      PI: Oi,
      SQRT1_2: Vi,
      SQRT2: Hi,
      abs: Math.abs,
      acos: () => Gi("acos"),
      asin: () => Gi("asin"),
      atan: () => Gi("atan"),
      atan2: () => Gi("atan2"),
      ceil: Math.ceil,
      cos: qi,
      exp: () => Gi("exp"),
      floor: Math.floor,
      log: () => Gi("log"),
      max: Math.max,
      min: Math.min,
      pow: () => Gi("pow"),
      random: Math.random,
      round: Math.round,
      sin: Ji,
      sqrt: () => Gi("sqrt"),
      tan: () => Gi("tan"),
      clz32: Math.clz32,
      imul: Math.imul,
      sign: Math.sign,
      log10: () => Gi("log10"),
      log2: () => Gi("log2"),
      log1p: t => Math.log(1 + t),
      expm1: t => Math.exp(t) - 1,
      cosh: t => (Math.exp(t) + Math.exp(-t)) / 2,
      sinh: t => (Math.exp(t) - Math.exp(-t)) / 2,
      tanh: t => {
        const e = Math.exp(t * 2);
        return (e - 1) / (e + 1);
      },
      acosh: t => Math.log(t + Math.sqrt(t * t - 1)),
      asinh: t => Math.log(t + Math.sqrt(t * t + 1)),
      atanh: t => Math.log((1 + t) / (1 - t)) / 2,
      hypot: (...t) => {
        let e = 0;
        for (const i of t) {
          e += i * i;
        }
        return Math.sqrt(e);
      },
      trunc: Math.trunc,
      cbrt: t => t == Infinity ? Infinity : t == -Infinity ? -Infinity : t < 0 ? -Math.pow(-t, 1 / 3) : Math.pow(t, 1 / 3),
      fround: Math.fround,
      [Symbol.toStringTag]: "Math"
    };
    const Zi = [0, 0.01745240643728351, 0.03489949670250097, 0.05233595624294383, 0.0697564737441253, 0.08715574274765817, 0.10452846326765346, 0.12186934340514748, 0.13917310096006544, 0.15643446504023087, 0.17364817766693033, 0.1908089953765448, 0.20791169081775931, 0.22495105434386498, 0.24192189559966773, 0.25881904510252074, 0.27563735581699916, 0.2923717047227367, 0.3090169943749474, 0.3255681544571567, 0.3420201433256687, 0.35836794954530027, 0.374606593415912, 0.3907311284892737, 0.40673664307580015, 0.42261826174069944, 0.4383711467890774, 0.45399049973954675, 0.4694715627858908, 0.48480962024633706, 0.49999999999999994, 0.5150380749100542, 0.5299192642332049, 0.544639035015027, 0.5591929034707468, 0.573576436351046, 0.5877852522924731, 0.6018150231520483, 0.6156614753256583, 0.6293203910498375, 0.6427876096865393, 0.6560590289905073, 0.6691306063588582, 0.6819983600624985, 0.6946583704589973, 0.7071067811865475, 0.7193398003386511, 0.7313537016191705, 0.7431448254773942, 0.7547095802227719, 0.766044443118978, 0.7771459614569708, 0.7880107536067219, 0.7986355100472928, 0.8090169943749475, 0.8191520442889918, 0.8290375725550417, 0.8386705679454239, 0.848048096156426, 0.8571673007021122, 0.8660254037844386, 0.8746197071393957, 0.8829475928589269, 0.8910065241883678, 0.898794046299167, 0.9063077870366499, 0.9135454576426009, 0.9205048534524404, 0.9271838545667873, 0.9335804264972017, 0.9396926207859083, 0.9455185755993167, 0.9510565162951535, 0.9563047559630354, 0.9612616959383189, 0.9659258262890683, 0.9702957262759965, 0.9743700647852352, 0.9781476007338057, 0.981627183447664, 0.984807753012208, 0.9876883405951378, 0.9902680687415704, 0.992546151641322, 0.9945218953682733, 0.9961946980917455, 0.9975640502598242, 0.9986295347545738, 0.9993908270190958, 0.9998476951563913, 1, 0.9998476951563913, 0.9993908270190958, 0.9986295347545738, 0.9975640502598242, 0.9961946980917455, 0.9945218953682734, 0.9925461516413221, 0.9902680687415704, 0.9876883405951377, 0.984807753012208, 0.981627183447664, 0.9781476007338057, 0.9743700647852352, 0.9702957262759965, 0.9659258262890683, 0.9612616959383189, 0.9563047559630355, 0.9510565162951536, 0.9455185755993168, 0.9396926207859084, 0.9335804264972017, 0.9271838545667874, 0.9205048534524404, 0.913545457642601, 0.90630778703665, 0.8987940462991669, 0.8910065241883679, 0.8829475928589271, 0.8746197071393959, 0.8660254037844387, 0.8571673007021123, 0.8480480961564261, 0.8386705679454239, 0.8290375725550417, 0.819152044288992, 0.8090169943749475, 0.7986355100472927, 0.788010753606722, 0.777145961456971, 0.766044443118978, 0.7547095802227721, 0.7431448254773945, 0.7313537016191706, 0.7193398003386511, 0.7071067811865476, 0.6946583704589975, 0.6819983600624986, 0.669130606358858, 0.6560590289905073, 0.6427876096865395, 0.6293203910498374, 0.6156614753256584, 0.6018150231520486, 0.5877852522924732, 0.5735764363510459, 0.5591929034707469, 0.5446390350150273, 0.5299192642332049, 0.5150380749100544, 0.49999999999999994, 0.48480962024633717, 0.4694715627858907, 0.45399049973954686, 0.4383711467890777, 0.4226182617406995, 0.40673664307580004, 0.39073112848927377, 0.37460659341591224, 0.35836794954530066, 0.3420201433256689, 0.3255681544571566, 0.3090169943749475, 0.29237170472273705, 0.2756373558169992, 0.258819045102521, 0.24192189559966773, 0.2249510543438652, 0.20791169081775931, 0.19080899537654497, 0.1736481776669307, 0.15643446504023098, 0.13917310096006533, 0.12186934340514755, 0.10452846326765373, 0.0871557427476582, 0.06975647374412552, 0.05233595624294425, 0.03489949670250114, 0.01745240643728344, 1.2246467991473532e-16, -0.017452406437283192, -0.0348994967025009, -0.052335956242943564, -0.06975647374412483, -0.08715574274765794, -0.1045284632676535, -0.12186934340514774, -0.13917310096006552, -0.15643446504023073, -0.17364817766693047, -0.19080899537654472, -0.20791169081775907, -0.22495105434386498, -0.2419218955996675, -0.25881904510252035, -0.2756373558169986, -0.29237170472273677, -0.30901699437494773, -0.32556815445715676, -0.34202014332566866, -0.35836794954530043, -0.374606593415912, -0.39073112848927355, -0.4067366430757998, -0.4226182617406993, -0.43837114678907707, -0.45399049973954625, -0.4694715627858905, -0.48480962024633734, -0.5000000000000001, -0.5150380749100542, -0.5299192642332048, -0.5446390350150271, -0.5591929034707467, -0.5735764363510458, -0.587785252292473, -0.601815023152048, -0.6156614753256578, -0.6293203910498372, -0.6427876096865393, -0.6560590289905074, -0.6691306063588582, -0.6819983600624984, -0.6946583704589974, -0.7071067811865475, -0.7193398003386509, -0.7313537016191705, -0.743144825477394, -0.7547095802227717, -0.7660444431189779, -0.7771459614569711, -0.7880107536067221, -0.7986355100472928, -0.8090169943749473, -0.8191520442889916, -0.8290375725550414, -0.838670567945424, -0.848048096156426, -0.8571673007021121, -0.8660254037844384, -0.8746197071393955, -0.882947592858927, -0.8910065241883678, -0.8987940462991668, -0.90630778703665, -0.913545457642601, -0.9205048534524403, -0.9271838545667873, -0.9335804264972016, -0.9396926207859082, -0.9455185755993168, -0.9510565162951535, -0.9563047559630353, -0.961261695938319, -0.9659258262890683, -0.9702957262759965, -0.9743700647852351, -0.9781476007338056, -0.981627183447664, -0.984807753012208, -0.9876883405951377, -0.9902680687415703, -0.992546151641322, -0.9945218953682733, -0.9961946980917455, -0.9975640502598242, -0.9986295347545739, -0.9993908270190958, -0.9998476951563913, -1, -0.9998476951563913, -0.9993908270190958, -0.9986295347545739, -0.9975640502598243, -0.9961946980917455, -0.9945218953682733, -0.992546151641322, -0.9902680687415704, -0.9876883405951378, -0.9848077530122081, -0.9816271834476641, -0.9781476007338056, -0.9743700647852352, -0.9702957262759966, -0.9659258262890684, -0.961261695938319, -0.9563047559630354, -0.9510565162951536, -0.945518575599317, -0.9396926207859083, -0.9335804264972017, -0.9271838545667874, -0.9205048534524405, -0.9135454576426011, -0.9063077870366503, -0.898794046299167, -0.8910065241883679, -0.8829475928589271, -0.8746197071393956, -0.8660254037844386, -0.8571673007021123, -0.8480480961564262, -0.8386705679454243, -0.8290375725550416, -0.8191520442889918, -0.8090169943749476, -0.798635510047293, -0.7880107536067223, -0.7771459614569713, -0.7660444431189781, -0.7547095802227722, -0.743144825477394, -0.7313537016191703, -0.7193398003386512, -0.7071067811865477, -0.6946583704589976, -0.6819983600624989, -0.6691306063588588, -0.6560590289905074, -0.6427876096865396, -0.6293203910498372, -0.6156614753256582, -0.6018150231520483, -0.5877852522924734, -0.5735764363510465, -0.5591929034707473, -0.544639035015027, -0.529919264233205, -0.5150380749100545, -0.5000000000000004, -0.48480962024633767, -0.4694715627858908, -0.45399049973954697, -0.4383711467890778, -0.4226182617406992, -0.40673664307580015, -0.3907311284892739, -0.37460659341591235, -0.35836794954530077, -0.34202014332566943, -0.3255681544571567, -0.3090169943749477, -0.29237170472273716, -0.27563735581699894, -0.2588190451025207, -0.24192189559966787, -0.22495105434386534, -0.20791169081775987, -0.19080899537654467, -0.1736481776669304, -0.15643446504023112, -0.13917310096006588, -0.12186934340514811, -0.1045284632676543, -0.08715574274765832, -0.06975647374412564, -0.05233595624294348, -0.034899496702500823, -0.01745240643728356];
    var Yi;
    (function (t) {
      t[t.Init = 0] = "Init";
      t[t.Verify = 1] = "Verify";
      t[t.TestDeterminism = 2] = "TestDeterminism";
      t[t.CreateCar = 3] = "CreateCar";
      t[t.DeleteCar = 4] = "DeleteCar";
      t[t.StartCar = 5] = "StartCar";
      t[t.ControlCar = 6] = "ControlCar";
      t[t.PauseCar = 7] = "PauseCar";
      t[t.VerifyResult = 8] = "VerifyResult";
      t[t.DeterminismResult = 9] = "DeterminismResult";
      t[t.UpdateResult = 10] = "UpdateResult";
    })(Yi ||= {});
    const Ki = Yi;
    Object.create;
    Object.create;
    function ji(t, e, i, r) {
      if (i === "a" && !r) {
        throw new TypeError("Private accessor was defined without a getter");
      }
      if (typeof e == "function" ? t !== e || !r : !e.has(t)) {
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      }
      if (i === "m") {
        return r;
      } else if (i === "a") {
        return r.call(t);
      } else if (r) {
        return r.value;
      } else {
        return e.get(t);
      }
    }
    function Xi(t, e, i, r, s) {
      if (r === "m") {
        throw new TypeError("Private method is not writable");
      }
      if (r === "a" && !s) {
        throw new TypeError("Private accessor was defined without a setter");
      }
      if (typeof e == "function" ? t !== e || !s : !e.has(t)) {
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      }
      if (r === "a") {
        s.call(t, i);
      } else if (s) {
        s.value = i;
      } else {
        e.set(t, i);
      }
      return i;
    }
    if (typeof SuppressedError == "function") {
      SuppressedError;
    }
    var $i;
    $i = new WeakMap();
    const tr = class {
      constructor(t) {
        $i.set(this, undefined);
        Xi(this, $i, t, "f");
      }
      dispose() {}
      getControls(t) {
        return ji(this, $i, "f").getFrame(t);
      }
    };
    function er(t) {
      let e = t.length;
      while (--e >= 0) {
        t[e] = 0;
      }
    }
    const ir = 256;
    const rr = 286;
    const sr = 30;
    const nr = 15;
    const ar = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]);
    const or = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]);
    const lr = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]);
    const hr = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
    const cr = new Array(576);
    er(cr);
    const Ar = new Array(60);
    er(Ar);
    const dr = new Array(512);
    er(dr);
    const ur = new Array(256);
    er(ur);
    const fr = new Array(29);
    er(fr);
    const gr = new Array(sr);
    function pr(t, e, i, r, s) {
      this.static_tree = t;
      this.extra_bits = e;
      this.extra_base = i;
      this.elems = r;
      this.max_length = s;
      this.has_stree = t && t.length;
    }
    let mr;
    let br;
    let yr;
    function wr(t, e) {
      this.dyn_tree = t;
      this.max_code = 0;
      this.stat_desc = e;
    }
    er(gr);
    const Ir = t => t < 256 ? dr[t] : dr[256 + (t >>> 7)];
    const Br = (t, e) => {
      t.pending_buf[t.pending++] = e & 255;
      t.pending_buf[t.pending++] = e >>> 8 & 255;
    };
    const xr = (t, e, i) => {
      if (t.bi_valid > 16 - i) {
        t.bi_buf |= e << t.bi_valid & 65535;
        Br(t, t.bi_buf);
        t.bi_buf = e >> 16 - t.bi_valid;
        t.bi_valid += i - 16;
      } else {
        t.bi_buf |= e << t.bi_valid & 65535;
        t.bi_valid += i;
      }
    };
    const Cr = (t, e, i) => {
      xr(t, i[e * 2], i[e * 2 + 1]);
    };
    const Sr = (t, e) => {
      let i = 0;
      do {
        i |= t & 1;
        t >>>= 1;
        i <<= 1;
      } while (--e > 0);
      return i >>> 1;
    };
    const kr = (t, e, i) => {
      const r = new Array(16);
      let s;
      let n;
      let a = 0;
      for (s = 1; s <= nr; s++) {
        a = a + i[s - 1] << 1;
        r[s] = a;
      }
      for (n = 0; n <= e; n++) {
        let e = t[n * 2 + 1];
        if (e !== 0) {
          t[n * 2] = Sr(r[e]++, e);
        }
      }
    };
    const _r = t => {
      let e;
      for (e = 0; e < rr; e++) {
        t.dyn_ltree[e * 2] = 0;
      }
      for (e = 0; e < sr; e++) {
        t.dyn_dtree[e * 2] = 0;
      }
      for (e = 0; e < 19; e++) {
        t.bl_tree[e * 2] = 0;
      }
      t.dyn_ltree[512] = 1;
      t.opt_len = t.static_len = 0;
      t.sym_next = t.matches = 0;
    };
    const Er = t => {
      if (t.bi_valid > 8) {
        Br(t, t.bi_buf);
      } else if (t.bi_valid > 0) {
        t.pending_buf[t.pending++] = t.bi_buf;
      }
      t.bi_buf = 0;
      t.bi_valid = 0;
    };
    const Mr = (t, e, i, r) => {
      const s = e * 2;
      const n = i * 2;
      return t[s] < t[n] || t[s] === t[n] && r[e] <= r[i];
    };
    const Pr = (t, e, i) => {
      const r = t.heap[i];
      let s = i << 1;
      while (s <= t.heap_len && (s < t.heap_len && Mr(e, t.heap[s + 1], t.heap[s], t.depth) && s++, !Mr(e, r, t.heap[s], t.depth))) {
        t.heap[i] = t.heap[s];
        i = s;
        s <<= 1;
      }
      t.heap[i] = r;
    };
    const Tr = (t, e, i) => {
      let r;
      let s;
      let n;
      let a;
      let o = 0;
      if (t.sym_next !== 0) {
        do {
          r = t.pending_buf[t.sym_buf + o++] & 255;
          r += (t.pending_buf[t.sym_buf + o++] & 255) << 8;
          s = t.pending_buf[t.sym_buf + o++];
          if (r === 0) {
            Cr(t, s, e);
          } else {
            n = ur[s];
            Cr(t, n + ir + 1, e);
            a = ar[n];
            if (a !== 0) {
              s -= fr[n];
              xr(t, s, a);
            }
            r--;
            n = Ir(r);
            Cr(t, n, i);
            a = or[n];
            if (a !== 0) {
              r -= gr[n];
              xr(t, r, a);
            }
          }
        } while (o < t.sym_next);
      }
      Cr(t, 256, e);
    };
    const Qr = (t, e) => {
      const i = e.dyn_tree;
      const r = e.stat_desc.static_tree;
      const s = e.stat_desc.has_stree;
      const n = e.stat_desc.elems;
      let a;
      let o;
      let l;
      let h = -1;
      t.heap_len = 0;
      t.heap_max = 573;
      a = 0;
      for (; a < n; a++) {
        if (i[a * 2] !== 0) {
          t.heap[++t.heap_len] = h = a;
          t.depth[a] = 0;
        } else {
          i[a * 2 + 1] = 0;
        }
      }
      while (t.heap_len < 2) {
        l = t.heap[++t.heap_len] = h < 2 ? ++h : 0;
        i[l * 2] = 1;
        t.depth[l] = 0;
        t.opt_len--;
        if (s) {
          t.static_len -= r[l * 2 + 1];
        }
      }
      e.max_code = h;
      a = t.heap_len >> 1;
      for (; a >= 1; a--) {
        Pr(t, i, a);
      }
      l = n;
      do {
        a = t.heap[1];
        t.heap[1] = t.heap[t.heap_len--];
        Pr(t, i, 1);
        o = t.heap[1];
        t.heap[--t.heap_max] = a;
        t.heap[--t.heap_max] = o;
        i[l * 2] = i[a * 2] + i[o * 2];
        t.depth[l] = (t.depth[a] >= t.depth[o] ? t.depth[a] : t.depth[o]) + 1;
        i[a * 2 + 1] = i[o * 2 + 1] = l;
        t.heap[1] = l++;
        Pr(t, i, 1);
      } while (t.heap_len >= 2);
      t.heap[--t.heap_max] = t.heap[1];
      ((t, e) => {
        const i = e.dyn_tree;
        const r = e.max_code;
        const s = e.stat_desc.static_tree;
        const n = e.stat_desc.has_stree;
        const a = e.stat_desc.extra_bits;
        const o = e.stat_desc.extra_base;
        const l = e.stat_desc.max_length;
        let h;
        let c;
        let A;
        let d;
        let u;
        let f;
        let g = 0;
        for (d = 0; d <= nr; d++) {
          t.bl_count[d] = 0;
        }
        i[t.heap[t.heap_max] * 2 + 1] = 0;
        h = t.heap_max + 1;
        for (; h < 573; h++) {
          c = t.heap[h];
          d = i[i[c * 2 + 1] * 2 + 1] + 1;
          if (d > l) {
            d = l;
            g++;
          }
          i[c * 2 + 1] = d;
          if (!(c > r)) {
            t.bl_count[d]++;
            u = 0;
            if (c >= o) {
              u = a[c - o];
            }
            f = i[c * 2];
            t.opt_len += f * (d + u);
            if (n) {
              t.static_len += f * (s[c * 2 + 1] + u);
            }
          }
        }
        if (g !== 0) {
          do {
            for (d = l - 1; t.bl_count[d] === 0;) {
              d--;
            }
            t.bl_count[d]--;
            t.bl_count[d + 1] += 2;
            t.bl_count[l]--;
            g -= 2;
          } while (g > 0);
          for (d = l; d !== 0; d--) {
            for (c = t.bl_count[d]; c !== 0;) {
              A = t.heap[--h];
              if (!(A > r)) {
                if (i[A * 2 + 1] !== d) {
                  t.opt_len += (d - i[A * 2 + 1]) * i[A * 2];
                  i[A * 2 + 1] = d;
                }
                c--;
              }
            }
          }
        }
      })(t, e);
      kr(i, h, t.bl_count);
    };
    const vr = (t, e, i) => {
      let r;
      let s;
      let n = -1;
      let a = e[1];
      let o = 0;
      let l = 7;
      let h = 4;
      if (a === 0) {
        l = 138;
        h = 3;
      }
      e[(i + 1) * 2 + 1] = 65535;
      r = 0;
      for (; r <= i; r++) {
        s = a;
        a = e[(r + 1) * 2 + 1];
        if (!(++o < l) || s !== a) {
          if (o < h) {
            t.bl_tree[s * 2] += o;
          } else if (s !== 0) {
            if (s !== n) {
              t.bl_tree[s * 2]++;
            }
            t.bl_tree[32]++;
          } else if (o <= 10) {
            t.bl_tree[34]++;
          } else {
            t.bl_tree[36]++;
          }
          o = 0;
          n = s;
          if (a === 0) {
            l = 138;
            h = 3;
          } else if (s === a) {
            l = 6;
            h = 3;
          } else {
            l = 7;
            h = 4;
          }
        }
      }
    };
    const Dr = (t, e, i) => {
      let r;
      let s;
      let n = -1;
      let a = e[1];
      let o = 0;
      let l = 7;
      let h = 4;
      if (a === 0) {
        l = 138;
        h = 3;
      }
      r = 0;
      for (; r <= i; r++) {
        s = a;
        a = e[(r + 1) * 2 + 1];
        if (!(++o < l) || s !== a) {
          if (o < h) {
            do {
              Cr(t, s, t.bl_tree);
            } while (--o != 0);
          } else if (s !== 0) {
            if (s !== n) {
              Cr(t, s, t.bl_tree);
              o--;
            }
            Cr(t, 16, t.bl_tree);
            xr(t, o - 3, 2);
          } else if (o <= 10) {
            Cr(t, 17, t.bl_tree);
            xr(t, o - 3, 3);
          } else {
            Cr(t, 18, t.bl_tree);
            xr(t, o - 11, 7);
          }
          o = 0;
          n = s;
          if (a === 0) {
            l = 138;
            h = 3;
          } else if (s === a) {
            l = 6;
            h = 3;
          } else {
            l = 7;
            h = 4;
          }
        }
      }
    };
    let Rr = false;
    const zr = (t, e, i, r) => {
      xr(t, 0 + (r ? 1 : 0), 3);
      Er(t);
      Br(t, i);
      Br(t, ~i);
      if (i) {
        t.pending_buf.set(t.window.subarray(e, e + i), t.pending);
      }
      t.pending += i;
    };
    var Wr = (t, e, i, r) => {
      let s;
      let n;
      let a = 0;
      if (t.level > 0) {
        if (t.strm.data_type === 2) {
          t.strm.data_type = (t => {
            let e;
            let i = 4093624447;
            for (e = 0; e <= 31; e++, i >>>= 1) {
              if (i & 1 && t.dyn_ltree[e * 2] !== 0) {
                return 0;
              }
            }
            if (t.dyn_ltree[18] !== 0 || t.dyn_ltree[20] !== 0 || t.dyn_ltree[26] !== 0) {
              return 1;
            }
            for (e = 32; e < ir; e++) {
              if (t.dyn_ltree[e * 2] !== 0) {
                return 1;
              }
            }
            return 0;
          })(t);
        }
        Qr(t, t.l_desc);
        Qr(t, t.d_desc);
        a = (t => {
          let e;
          vr(t, t.dyn_ltree, t.l_desc.max_code);
          vr(t, t.dyn_dtree, t.d_desc.max_code);
          Qr(t, t.bl_desc);
          e = 18;
          for (; e >= 3 && t.bl_tree[hr[e] * 2 + 1] === 0; e--);
          t.opt_len += (e + 1) * 3 + 5 + 5 + 4;
          return e;
        })(t);
        s = t.opt_len + 3 + 7 >>> 3;
        n = t.static_len + 3 + 7 >>> 3;
        if (n <= s) {
          s = n;
        }
      } else {
        s = n = i + 5;
      }
      if (i + 4 <= s && e !== -1) {
        zr(t, e, i, r);
      } else if (t.strategy === 4 || n === s) {
        xr(t, 2 + (r ? 1 : 0), 3);
        Tr(t, cr, Ar);
      } else {
        xr(t, 4 + (r ? 1 : 0), 3);
        ((t, e, i, r) => {
          let s;
          xr(t, e - 257, 5);
          xr(t, i - 1, 5);
          xr(t, r - 4, 4);
          s = 0;
          for (; s < r; s++) {
            xr(t, t.bl_tree[hr[s] * 2 + 1], 3);
          }
          Dr(t, t.dyn_ltree, e - 1);
          Dr(t, t.dyn_dtree, i - 1);
        })(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, a + 1);
        Tr(t, t.dyn_ltree, t.dyn_dtree);
      }
      _r(t);
      if (r) {
        Er(t);
      }
    };
    var Fr = {
      _tr_init: t => {
        if (!Rr) {
          (() => {
            let t;
            let e;
            let i;
            let r;
            let s;
            const n = new Array(16);
            i = 0;
            r = 0;
            for (; r < 28; r++) {
              fr[r] = i;
              t = 0;
              for (; t < 1 << ar[r]; t++) {
                ur[i++] = r;
              }
            }
            ur[i - 1] = r;
            s = 0;
            r = 0;
            for (; r < 16; r++) {
              gr[r] = s;
              t = 0;
              for (; t < 1 << or[r]; t++) {
                dr[s++] = r;
              }
            }
            for (s >>= 7; r < sr; r++) {
              gr[r] = s << 7;
              t = 0;
              for (; t < 1 << or[r] - 7; t++) {
                dr[256 + s++] = r;
              }
            }
            for (e = 0; e <= nr; e++) {
              n[e] = 0;
            }
            for (t = 0; t <= 143;) {
              cr[t * 2 + 1] = 8;
              t++;
              n[8]++;
            }
            while (t <= 255) {
              cr[t * 2 + 1] = 9;
              t++;
              n[9]++;
            }
            while (t <= 279) {
              cr[t * 2 + 1] = 7;
              t++;
              n[7]++;
            }
            while (t <= 287) {
              cr[t * 2 + 1] = 8;
              t++;
              n[8]++;
            }
            kr(cr, 287, n);
            t = 0;
            for (; t < sr; t++) {
              Ar[t * 2 + 1] = 5;
              Ar[t * 2] = Sr(t, 5);
            }
            mr = new pr(cr, ar, 257, rr, nr);
            br = new pr(Ar, or, 0, sr, nr);
            yr = new pr(new Array(0), lr, 0, 19, 7);
          })();
          Rr = true;
        }
        t.l_desc = new wr(t.dyn_ltree, mr);
        t.d_desc = new wr(t.dyn_dtree, br);
        t.bl_desc = new wr(t.bl_tree, yr);
        t.bi_buf = 0;
        t.bi_valid = 0;
        _r(t);
      },
      _tr_stored_block: zr,
      _tr_flush_block: Wr,
      _tr_tally: (t, e, i) => {
        t.pending_buf[t.sym_buf + t.sym_next++] = e;
        t.pending_buf[t.sym_buf + t.sym_next++] = e >> 8;
        t.pending_buf[t.sym_buf + t.sym_next++] = i;
        if (e === 0) {
          t.dyn_ltree[i * 2]++;
        } else {
          t.matches++;
          e--;
          t.dyn_ltree[(ur[i] + ir + 1) * 2]++;
          t.dyn_dtree[Ir(e) * 2]++;
        }
        return t.sym_next === t.sym_end;
      },
      _tr_align: t => {
        xr(t, 2, 3);
        Cr(t, 256, cr);
        (t => {
          if (t.bi_valid === 16) {
            Br(t, t.bi_buf);
            t.bi_buf = 0;
            t.bi_valid = 0;
          } else if (t.bi_valid >= 8) {
            t.pending_buf[t.pending++] = t.bi_buf & 255;
            t.bi_buf >>= 8;
            t.bi_valid -= 8;
          }
        })(t);
      }
    };
    var Ur = (t, e, i, r) => {
      let s = t & 65535;
      let n = t >>> 16 & 65535;
      let a = 0;
      while (i !== 0) {
        a = i > 2000 ? 2000 : i;
        i -= a;
        do {
          s = s + e[r++] | 0;
          n = n + s | 0;
        } while (--a);
        s %= 65521;
        n %= 65521;
      }
      return s | n << 16;
    };
    const Nr = new Uint32Array((() => {
      let t;
      let e = [];
      for (var i = 0; i < 256; i++) {
        t = i;
        for (var r = 0; r < 8; r++) {
          t = t & 1 ? t >>> 1 ^ -306674912 : t >>> 1;
        }
        e[i] = t;
      }
      return e;
    })());
    var Lr = (t, e, i, r) => {
      const s = Nr;
      const n = r + i;
      t ^= -1;
      for (let i = r; i < n; i++) {
        t = t >>> 8 ^ s[(t ^ e[i]) & 255];
      }
      return ~t;
    };
    var Or = {
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
    var Vr = {
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
      _tr_init: Hr,
      _tr_stored_block: Gr,
      _tr_flush_block: Jr,
      _tr_tally: qr,
      _tr_align: Zr
    } = Fr;
    const {
      Z_NO_FLUSH: Yr,
      Z_PARTIAL_FLUSH: Kr,
      Z_FULL_FLUSH: jr,
      Z_FINISH: Xr,
      Z_BLOCK: $r,
      Z_OK: ts,
      Z_STREAM_END: es,
      Z_STREAM_ERROR: is,
      Z_DATA_ERROR: rs,
      Z_BUF_ERROR: ss,
      Z_DEFAULT_COMPRESSION: ns,
      Z_FILTERED: as,
      Z_HUFFMAN_ONLY: os,
      Z_RLE: ls,
      Z_FIXED: hs,
      Z_DEFAULT_STRATEGY: cs,
      Z_UNKNOWN: As,
      Z_DEFLATED: ds
    } = Vr;
    const us = 258;
    const fs = 262;
    const gs = 42;
    const ps = 113;
    const ms = 666;
    const bs = (t, e) => {
      t.msg = Or[e];
      return e;
    };
    const ys = t => t * 2 - (t > 4 ? 9 : 0);
    const ws = t => {
      let e = t.length;
      while (--e >= 0) {
        t[e] = 0;
      }
    };
    const Is = t => {
      let e;
      let i;
      let r;
      let s = t.w_size;
      e = t.hash_size;
      r = e;
      do {
        i = t.head[--r];
        t.head[r] = i >= s ? i - s : 0;
      } while (--e);
      e = s;
      r = e;
      do {
        i = t.prev[--r];
        t.prev[r] = i >= s ? i - s : 0;
      } while (--e);
    };
    let Bs = (t, e, i) => (e << t.hash_shift ^ i) & t.hash_mask;
    const xs = t => {
      const e = t.state;
      let i = e.pending;
      if (i > t.avail_out) {
        i = t.avail_out;
      }
      if (i !== 0) {
        t.output.set(e.pending_buf.subarray(e.pending_out, e.pending_out + i), t.next_out);
        t.next_out += i;
        e.pending_out += i;
        t.total_out += i;
        t.avail_out -= i;
        e.pending -= i;
        if (e.pending === 0) {
          e.pending_out = 0;
        }
      }
    };
    const Cs = (t, e) => {
      Jr(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e);
      t.block_start = t.strstart;
      xs(t.strm);
    };
    const Ss = (t, e) => {
      t.pending_buf[t.pending++] = e;
    };
    const ks = (t, e) => {
      t.pending_buf[t.pending++] = e >>> 8 & 255;
      t.pending_buf[t.pending++] = e & 255;
    };
    const _s = (t, e, i, r) => {
      let s = t.avail_in;
      if (s > r) {
        s = r;
      }
      if (s === 0) {
        return 0;
      } else {
        t.avail_in -= s;
        e.set(t.input.subarray(t.next_in, t.next_in + s), i);
        if (t.state.wrap === 1) {
          t.adler = Ur(t.adler, e, s, i);
        } else if (t.state.wrap === 2) {
          t.adler = Lr(t.adler, e, s, i);
        }
        t.next_in += s;
        t.total_in += s;
        return s;
      }
    };
    const Es = (t, e) => {
      let i;
      let r;
      let s = t.max_chain_length;
      let n = t.strstart;
      let a = t.prev_length;
      let o = t.nice_match;
      const l = t.strstart > t.w_size - fs ? t.strstart - (t.w_size - fs) : 0;
      const h = t.window;
      const c = t.w_mask;
      const A = t.prev;
      const d = t.strstart + us;
      let u = h[n + a - 1];
      let f = h[n + a];
      if (t.prev_length >= t.good_match) {
        s >>= 2;
      }
      if (o > t.lookahead) {
        o = t.lookahead;
      }
      do {
        i = e;
        if (h[i + a] === f && h[i + a - 1] === u && h[i] === h[n] && h[++i] === h[n + 1]) {
          n += 2;
          i++;
          do {} while (h[++n] === h[++i] && h[++n] === h[++i] && h[++n] === h[++i] && h[++n] === h[++i] && h[++n] === h[++i] && h[++n] === h[++i] && h[++n] === h[++i] && h[++n] === h[++i] && n < d);
          r = us - (d - n);
          n = d - us;
          if (r > a) {
            t.match_start = e;
            a = r;
            if (r >= o) {
              break;
            }
            u = h[n + a - 1];
            f = h[n + a];
          }
        }
      } while ((e = A[e & c]) > l && --s != 0);
      if (a <= t.lookahead) {
        return a;
      } else {
        return t.lookahead;
      }
    };
    const Ms = t => {
      const e = t.w_size;
      let i;
      let r;
      let s;
      do {
        r = t.window_size - t.lookahead - t.strstart;
        if (t.strstart >= e + (e - fs)) {
          t.window.set(t.window.subarray(e, e + e - r), 0);
          t.match_start -= e;
          t.strstart -= e;
          t.block_start -= e;
          if (t.insert > t.strstart) {
            t.insert = t.strstart;
          }
          Is(t);
          r += e;
        }
        if (t.strm.avail_in === 0) {
          break;
        }
        i = _s(t.strm, t.window, t.strstart + t.lookahead, r);
        t.lookahead += i;
        if (t.lookahead + t.insert >= 3) {
          s = t.strstart - t.insert;
          t.ins_h = t.window[s];
          t.ins_h = Bs(t, t.ins_h, t.window[s + 1]);
          while (t.insert && (t.ins_h = Bs(t, t.ins_h, t.window[s + 3 - 1]), t.prev[s & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = s, s++, t.insert--, !(t.lookahead + t.insert < 3)));
        }
      } while (t.lookahead < fs && t.strm.avail_in !== 0);
    };
    const Ps = (t, e) => {
      let i;
      let r;
      let s;
      let n = t.pending_buf_size - 5 > t.w_size ? t.w_size : t.pending_buf_size - 5;
      let a = 0;
      let o = t.strm.avail_in;
      do {
        i = 65535;
        s = t.bi_valid + 42 >> 3;
        if (t.strm.avail_out < s) {
          break;
        }
        s = t.strm.avail_out - s;
        r = t.strstart - t.block_start;
        if (i > r + t.strm.avail_in) {
          i = r + t.strm.avail_in;
        }
        if (i > s) {
          i = s;
        }
        if (i < n && (i === 0 && e !== Xr || e === Yr || i !== r + t.strm.avail_in)) {
          break;
        }
        a = e === Xr && i === r + t.strm.avail_in ? 1 : 0;
        Gr(t, 0, 0, a);
        t.pending_buf[t.pending - 4] = i;
        t.pending_buf[t.pending - 3] = i >> 8;
        t.pending_buf[t.pending - 2] = ~i;
        t.pending_buf[t.pending - 1] = ~i >> 8;
        xs(t.strm);
        if (r) {
          if (r > i) {
            r = i;
          }
          t.strm.output.set(t.window.subarray(t.block_start, t.block_start + r), t.strm.next_out);
          t.strm.next_out += r;
          t.strm.avail_out -= r;
          t.strm.total_out += r;
          t.block_start += r;
          i -= r;
        }
        if (i) {
          _s(t.strm, t.strm.output, t.strm.next_out, i);
          t.strm.next_out += i;
          t.strm.avail_out -= i;
          t.strm.total_out += i;
        }
      } while (a === 0);
      o -= t.strm.avail_in;
      if (o) {
        if (o >= t.w_size) {
          t.matches = 2;
          t.window.set(t.strm.input.subarray(t.strm.next_in - t.w_size, t.strm.next_in), 0);
          t.strstart = t.w_size;
          t.insert = t.strstart;
        } else {
          if (t.window_size - t.strstart <= o) {
            t.strstart -= t.w_size;
            t.window.set(t.window.subarray(t.w_size, t.w_size + t.strstart), 0);
            if (t.matches < 2) {
              t.matches++;
            }
            if (t.insert > t.strstart) {
              t.insert = t.strstart;
            }
          }
          t.window.set(t.strm.input.subarray(t.strm.next_in - o, t.strm.next_in), t.strstart);
          t.strstart += o;
          t.insert += o > t.w_size - t.insert ? t.w_size - t.insert : o;
        }
        t.block_start = t.strstart;
      }
      if (t.high_water < t.strstart) {
        t.high_water = t.strstart;
      }
      if (a) {
        return 4;
      } else if (e !== Yr && e !== Xr && t.strm.avail_in === 0 && t.strstart === t.block_start) {
        return 2;
      } else {
        s = t.window_size - t.strstart;
        if (t.strm.avail_in > s && t.block_start >= t.w_size) {
          t.block_start -= t.w_size;
          t.strstart -= t.w_size;
          t.window.set(t.window.subarray(t.w_size, t.w_size + t.strstart), 0);
          if (t.matches < 2) {
            t.matches++;
          }
          s += t.w_size;
          if (t.insert > t.strstart) {
            t.insert = t.strstart;
          }
        }
        if (s > t.strm.avail_in) {
          s = t.strm.avail_in;
        }
        if (s) {
          _s(t.strm, t.window, t.strstart, s);
          t.strstart += s;
          t.insert += s > t.w_size - t.insert ? t.w_size - t.insert : s;
        }
        if (t.high_water < t.strstart) {
          t.high_water = t.strstart;
        }
        s = t.bi_valid + 42 >> 3;
        s = t.pending_buf_size - s > 65535 ? 65535 : t.pending_buf_size - s;
        n = s > t.w_size ? t.w_size : s;
        r = t.strstart - t.block_start;
        if (r >= n || (r || e === Xr) && e !== Yr && t.strm.avail_in === 0 && r <= s) {
          i = r > s ? s : r;
          a = e === Xr && t.strm.avail_in === 0 && i === r ? 1 : 0;
          Gr(t, t.block_start, i, a);
          t.block_start += i;
          xs(t.strm);
        }
        if (a) {
          return 3;
        } else {
          return 1;
        }
      }
    };
    const Ts = (t, e) => {
      let i;
      let r;
      while (true) {
        if (t.lookahead < fs) {
          Ms(t);
          if (t.lookahead < fs && e === Yr) {
            return 1;
          }
          if (t.lookahead === 0) {
            break;
          }
        }
        i = 0;
        if (t.lookahead >= 3) {
          t.ins_h = Bs(t, t.ins_h, t.window[t.strstart + 3 - 1]);
          i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h];
          t.head[t.ins_h] = t.strstart;
        }
        if (i !== 0 && t.strstart - i <= t.w_size - fs) {
          t.match_length = Es(t, i);
        }
        if (t.match_length >= 3) {
          r = qr(t, t.strstart - t.match_start, t.match_length - 3);
          t.lookahead -= t.match_length;
          if (t.match_length <= t.max_lazy_match && t.lookahead >= 3) {
            t.match_length--;
            do {
              t.strstart++;
              t.ins_h = Bs(t, t.ins_h, t.window[t.strstart + 3 - 1]);
              i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h];
              t.head[t.ins_h] = t.strstart;
            } while (--t.match_length != 0);
            t.strstart++;
          } else {
            t.strstart += t.match_length;
            t.match_length = 0;
            t.ins_h = t.window[t.strstart];
            t.ins_h = Bs(t, t.ins_h, t.window[t.strstart + 1]);
          }
        } else {
          r = qr(t, 0, t.window[t.strstart]);
          t.lookahead--;
          t.strstart++;
        }
        if (r && (Cs(t, false), t.strm.avail_out === 0)) {
          return 1;
        }
      }
      t.insert = t.strstart < 2 ? t.strstart : 2;
      if (e === Xr) {
        Cs(t, true);
        if (t.strm.avail_out === 0) {
          return 3;
        } else {
          return 4;
        }
      } else if (t.sym_next && (Cs(t, false), t.strm.avail_out === 0)) {
        return 1;
      } else {
        return 2;
      }
    };
    const Qs = (t, e) => {
      let i;
      let r;
      let s;
      while (true) {
        if (t.lookahead < fs) {
          Ms(t);
          if (t.lookahead < fs && e === Yr) {
            return 1;
          }
          if (t.lookahead === 0) {
            break;
          }
        }
        i = 0;
        if (t.lookahead >= 3) {
          t.ins_h = Bs(t, t.ins_h, t.window[t.strstart + 3 - 1]);
          i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h];
          t.head[t.ins_h] = t.strstart;
        }
        t.prev_length = t.match_length;
        t.prev_match = t.match_start;
        t.match_length = 2;
        if (i !== 0 && t.prev_length < t.max_lazy_match && t.strstart - i <= t.w_size - fs) {
          t.match_length = Es(t, i);
          if (t.match_length <= 5 && (t.strategy === as || t.match_length === 3 && t.strstart - t.match_start > 4096)) {
            t.match_length = 2;
          }
        }
        if (t.prev_length >= 3 && t.match_length <= t.prev_length) {
          s = t.strstart + t.lookahead - 3;
          r = qr(t, t.strstart - 1 - t.prev_match, t.prev_length - 3);
          t.lookahead -= t.prev_length - 1;
          t.prev_length -= 2;
          do {
            if (++t.strstart <= s) {
              t.ins_h = Bs(t, t.ins_h, t.window[t.strstart + 3 - 1]);
              i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h];
              t.head[t.ins_h] = t.strstart;
            }
          } while (--t.prev_length != 0);
          t.match_available = 0;
          t.match_length = 2;
          t.strstart++;
          if (r && (Cs(t, false), t.strm.avail_out === 0)) {
            return 1;
          }
        } else if (t.match_available) {
          r = qr(t, 0, t.window[t.strstart - 1]);
          if (r) {
            Cs(t, false);
          }
          t.strstart++;
          t.lookahead--;
          if (t.strm.avail_out === 0) {
            return 1;
          }
        } else {
          t.match_available = 1;
          t.strstart++;
          t.lookahead--;
        }
      }
      if (t.match_available) {
        r = qr(t, 0, t.window[t.strstart - 1]);
        t.match_available = 0;
      }
      t.insert = t.strstart < 2 ? t.strstart : 2;
      if (e === Xr) {
        Cs(t, true);
        if (t.strm.avail_out === 0) {
          return 3;
        } else {
          return 4;
        }
      } else if (t.sym_next && (Cs(t, false), t.strm.avail_out === 0)) {
        return 1;
      } else {
        return 2;
      }
    };
    function vs(t, e, i, r, s) {
      this.good_length = t;
      this.max_lazy = e;
      this.nice_length = i;
      this.max_chain = r;
      this.func = s;
    }
    const Ds = [new vs(0, 0, 0, 0, Ps), new vs(4, 4, 8, 4, Ts), new vs(4, 5, 16, 8, Ts), new vs(4, 6, 32, 32, Ts), new vs(4, 4, 16, 16, Qs), new vs(8, 16, 32, 32, Qs), new vs(8, 16, 128, 128, Qs), new vs(8, 32, 128, 256, Qs), new vs(32, 128, 258, 1024, Qs), new vs(32, 258, 258, 4096, Qs)];
    function Rs() {
      this.strm = null;
      this.status = 0;
      this.pending_buf = null;
      this.pending_buf_size = 0;
      this.pending_out = 0;
      this.pending = 0;
      this.wrap = 0;
      this.gzhead = null;
      this.gzindex = 0;
      this.method = ds;
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
      ws(this.dyn_ltree);
      ws(this.dyn_dtree);
      ws(this.bl_tree);
      this.l_desc = null;
      this.d_desc = null;
      this.bl_desc = null;
      this.bl_count = new Uint16Array(16);
      this.heap = new Uint16Array(573);
      ws(this.heap);
      this.heap_len = 0;
      this.heap_max = 0;
      this.depth = new Uint16Array(573);
      ws(this.depth);
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
    const zs = t => {
      if (!t) {
        return 1;
      }
      const e = t.state;
      if (!e || e.strm !== t || e.status !== gs && e.status !== 57 && e.status !== 69 && e.status !== 73 && e.status !== 91 && e.status !== 103 && e.status !== ps && e.status !== ms) {
        return 1;
      } else {
        return 0;
      }
    };
    const Ws = t => {
      if (zs(t)) {
        return bs(t, is);
      }
      t.total_in = t.total_out = 0;
      t.data_type = As;
      const e = t.state;
      e.pending = 0;
      e.pending_out = 0;
      if (e.wrap < 0) {
        e.wrap = -e.wrap;
      }
      e.status = e.wrap === 2 ? 57 : e.wrap ? gs : ps;
      t.adler = e.wrap === 2 ? 0 : 1;
      e.last_flush = -2;
      Hr(e);
      return ts;
    };
    const Fs = t => {
      const e = Ws(t);
      var i;
      if (e === ts) {
        (i = t.state).window_size = i.w_size * 2;
        ws(i.head);
        i.max_lazy_match = Ds[i.level].max_lazy;
        i.good_match = Ds[i.level].good_length;
        i.nice_match = Ds[i.level].nice_length;
        i.max_chain_length = Ds[i.level].max_chain;
        i.strstart = 0;
        i.block_start = 0;
        i.lookahead = 0;
        i.insert = 0;
        i.match_length = i.prev_length = 2;
        i.match_available = 0;
        i.ins_h = 0;
      }
      return e;
    };
    const Us = (t, e, i, r, s, n) => {
      if (!t) {
        return is;
      }
      let a = 1;
      if (e === ns) {
        e = 6;
      }
      if (r < 0) {
        a = 0;
        r = -r;
      } else if (r > 15) {
        a = 2;
        r -= 16;
      }
      if (s < 1 || s > 9 || i !== ds || r < 8 || r > 15 || e < 0 || e > 9 || n < 0 || n > hs || r === 8 && a !== 1) {
        return bs(t, is);
      }
      if (r === 8) {
        r = 9;
      }
      const o = new Rs();
      t.state = o;
      o.strm = t;
      o.status = gs;
      o.wrap = a;
      o.gzhead = null;
      o.w_bits = r;
      o.w_size = 1 << o.w_bits;
      o.w_mask = o.w_size - 1;
      o.hash_bits = s + 7;
      o.hash_size = 1 << o.hash_bits;
      o.hash_mask = o.hash_size - 1;
      o.hash_shift = ~~((o.hash_bits + 3 - 1) / 3);
      o.window = new Uint8Array(o.w_size * 2);
      o.head = new Uint16Array(o.hash_size);
      o.prev = new Uint16Array(o.w_size);
      o.lit_bufsize = 1 << s + 6;
      o.pending_buf_size = o.lit_bufsize * 4;
      o.pending_buf = new Uint8Array(o.pending_buf_size);
      o.sym_buf = o.lit_bufsize;
      o.sym_end = (o.lit_bufsize - 1) * 3;
      o.level = e;
      o.strategy = n;
      o.method = i;
      return Fs(t);
    };
    var Ns = {
      deflateInit: (t, e) => Us(t, e, ds, 15, 8, cs),
      deflateInit2: Us,
      deflateReset: Fs,
      deflateResetKeep: Ws,
      deflateSetHeader: (t, e) => zs(t) || t.state.wrap !== 2 ? is : (t.state.gzhead = e, ts),
      deflate: (t, e) => {
        if (zs(t) || e > $r || e < 0) {
          if (t) {
            return bs(t, is);
          } else {
            return is;
          }
        }
        const i = t.state;
        if (!t.output || t.avail_in !== 0 && !t.input || i.status === ms && e !== Xr) {
          return bs(t, t.avail_out === 0 ? ss : is);
        }
        const r = i.last_flush;
        i.last_flush = e;
        if (i.pending !== 0) {
          xs(t);
          if (t.avail_out === 0) {
            i.last_flush = -1;
            return ts;
          }
        } else if (t.avail_in === 0 && ys(e) <= ys(r) && e !== Xr) {
          return bs(t, ss);
        }
        if (i.status === ms && t.avail_in !== 0) {
          return bs(t, ss);
        }
        if (i.status === gs && i.wrap === 0) {
          i.status = ps;
        }
        if (i.status === gs) {
          let e = ds + (i.w_bits - 8 << 4) << 8;
          let r = -1;
          r = i.strategy >= os || i.level < 2 ? 0 : i.level < 6 ? 1 : i.level === 6 ? 2 : 3;
          e |= r << 6;
          if (i.strstart !== 0) {
            e |= 32;
          }
          e += 31 - e % 31;
          ks(i, e);
          if (i.strstart !== 0) {
            ks(i, t.adler >>> 16);
            ks(i, t.adler & 65535);
          }
          t.adler = 1;
          i.status = ps;
          xs(t);
          if (i.pending !== 0) {
            i.last_flush = -1;
            return ts;
          }
        }
        if (i.status === 57) {
          t.adler = 0;
          Ss(i, 31);
          Ss(i, 139);
          Ss(i, 8);
          if (i.gzhead) {
            Ss(i, (i.gzhead.text ? 1 : 0) + (i.gzhead.hcrc ? 2 : 0) + (i.gzhead.extra ? 4 : 0) + (i.gzhead.name ? 8 : 0) + (i.gzhead.comment ? 16 : 0));
            Ss(i, i.gzhead.time & 255);
            Ss(i, i.gzhead.time >> 8 & 255);
            Ss(i, i.gzhead.time >> 16 & 255);
            Ss(i, i.gzhead.time >> 24 & 255);
            Ss(i, i.level === 9 ? 2 : i.strategy >= os || i.level < 2 ? 4 : 0);
            Ss(i, i.gzhead.os & 255);
            if (i.gzhead.extra && i.gzhead.extra.length) {
              Ss(i, i.gzhead.extra.length & 255);
              Ss(i, i.gzhead.extra.length >> 8 & 255);
            }
            if (i.gzhead.hcrc) {
              t.adler = Lr(t.adler, i.pending_buf, i.pending, 0);
            }
            i.gzindex = 0;
            i.status = 69;
          } else {
            Ss(i, 0);
            Ss(i, 0);
            Ss(i, 0);
            Ss(i, 0);
            Ss(i, 0);
            Ss(i, i.level === 9 ? 2 : i.strategy >= os || i.level < 2 ? 4 : 0);
            Ss(i, 3);
            i.status = ps;
            xs(t);
            if (i.pending !== 0) {
              i.last_flush = -1;
              return ts;
            }
          }
        }
        if (i.status === 69) {
          if (i.gzhead.extra) {
            let e = i.pending;
            let r = (i.gzhead.extra.length & 65535) - i.gzindex;
            while (i.pending + r > i.pending_buf_size) {
              let s = i.pending_buf_size - i.pending;
              i.pending_buf.set(i.gzhead.extra.subarray(i.gzindex, i.gzindex + s), i.pending);
              i.pending = i.pending_buf_size;
              if (i.gzhead.hcrc && i.pending > e) {
                t.adler = Lr(t.adler, i.pending_buf, i.pending - e, e);
              }
              i.gzindex += s;
              xs(t);
              if (i.pending !== 0) {
                i.last_flush = -1;
                return ts;
              }
              e = 0;
              r -= s;
            }
            let s = new Uint8Array(i.gzhead.extra);
            i.pending_buf.set(s.subarray(i.gzindex, i.gzindex + r), i.pending);
            i.pending += r;
            if (i.gzhead.hcrc && i.pending > e) {
              t.adler = Lr(t.adler, i.pending_buf, i.pending - e, e);
            }
            i.gzindex = 0;
          }
          i.status = 73;
        }
        if (i.status === 73) {
          if (i.gzhead.name) {
            let e;
            let r = i.pending;
            do {
              if (i.pending === i.pending_buf_size) {
                if (i.gzhead.hcrc && i.pending > r) {
                  t.adler = Lr(t.adler, i.pending_buf, i.pending - r, r);
                }
                xs(t);
                if (i.pending !== 0) {
                  i.last_flush = -1;
                  return ts;
                }
                r = 0;
              }
              e = i.gzindex < i.gzhead.name.length ? i.gzhead.name.charCodeAt(i.gzindex++) & 255 : 0;
              Ss(i, e);
            } while (e !== 0);
            if (i.gzhead.hcrc && i.pending > r) {
              t.adler = Lr(t.adler, i.pending_buf, i.pending - r, r);
            }
            i.gzindex = 0;
          }
          i.status = 91;
        }
        if (i.status === 91) {
          if (i.gzhead.comment) {
            let e;
            let r = i.pending;
            do {
              if (i.pending === i.pending_buf_size) {
                if (i.gzhead.hcrc && i.pending > r) {
                  t.adler = Lr(t.adler, i.pending_buf, i.pending - r, r);
                }
                xs(t);
                if (i.pending !== 0) {
                  i.last_flush = -1;
                  return ts;
                }
                r = 0;
              }
              e = i.gzindex < i.gzhead.comment.length ? i.gzhead.comment.charCodeAt(i.gzindex++) & 255 : 0;
              Ss(i, e);
            } while (e !== 0);
            if (i.gzhead.hcrc && i.pending > r) {
              t.adler = Lr(t.adler, i.pending_buf, i.pending - r, r);
            }
          }
          i.status = 103;
        }
        if (i.status === 103) {
          if (i.gzhead.hcrc) {
            if (i.pending + 2 > i.pending_buf_size && (xs(t), i.pending !== 0)) {
              i.last_flush = -1;
              return ts;
            }
            Ss(i, t.adler & 255);
            Ss(i, t.adler >> 8 & 255);
            t.adler = 0;
          }
          i.status = ps;
          xs(t);
          if (i.pending !== 0) {
            i.last_flush = -1;
            return ts;
          }
        }
        if (t.avail_in !== 0 || i.lookahead !== 0 || e !== Yr && i.status !== ms) {
          let r = i.level === 0 ? Ps(i, e) : i.strategy === os ? ((t, e) => {
            let i;
            while (true) {
              if (t.lookahead === 0 && (Ms(t), t.lookahead === 0)) {
                if (e === Yr) {
                  return 1;
                }
                break;
              }
              t.match_length = 0;
              i = qr(t, 0, t.window[t.strstart]);
              t.lookahead--;
              t.strstart++;
              if (i && (Cs(t, false), t.strm.avail_out === 0)) {
                return 1;
              }
            }
            t.insert = 0;
            if (e === Xr) {
              Cs(t, true);
              if (t.strm.avail_out === 0) {
                return 3;
              } else {
                return 4;
              }
            } else if (t.sym_next && (Cs(t, false), t.strm.avail_out === 0)) {
              return 1;
            } else {
              return 2;
            }
          })(i, e) : i.strategy === ls ? ((t, e) => {
            let i;
            let r;
            let s;
            let n;
            const a = t.window;
            while (true) {
              if (t.lookahead <= us) {
                Ms(t);
                if (t.lookahead <= us && e === Yr) {
                  return 1;
                }
                if (t.lookahead === 0) {
                  break;
                }
              }
              t.match_length = 0;
              if (t.lookahead >= 3 && t.strstart > 0 && (s = t.strstart - 1, r = a[s], r === a[++s] && r === a[++s] && r === a[++s])) {
                n = t.strstart + us;
                do {} while (r === a[++s] && r === a[++s] && r === a[++s] && r === a[++s] && r === a[++s] && r === a[++s] && r === a[++s] && r === a[++s] && s < n);
                t.match_length = us - (n - s);
                if (t.match_length > t.lookahead) {
                  t.match_length = t.lookahead;
                }
              }
              if (t.match_length >= 3) {
                i = qr(t, 1, t.match_length - 3);
                t.lookahead -= t.match_length;
                t.strstart += t.match_length;
                t.match_length = 0;
              } else {
                i = qr(t, 0, t.window[t.strstart]);
                t.lookahead--;
                t.strstart++;
              }
              if (i && (Cs(t, false), t.strm.avail_out === 0)) {
                return 1;
              }
            }
            t.insert = 0;
            if (e === Xr) {
              Cs(t, true);
              if (t.strm.avail_out === 0) {
                return 3;
              } else {
                return 4;
              }
            } else if (t.sym_next && (Cs(t, false), t.strm.avail_out === 0)) {
              return 1;
            } else {
              return 2;
            }
          })(i, e) : Ds[i.level].func(i, e);
          if (r === 3 || r === 4) {
            i.status = ms;
          }
          if (r === 1 || r === 3) {
            if (t.avail_out === 0) {
              i.last_flush = -1;
            }
            return ts;
          }
          if (r === 2 && (e === Kr ? Zr(i) : e !== $r && (Gr(i, 0, 0, false), e === jr && (ws(i.head), i.lookahead === 0 && (i.strstart = 0, i.block_start = 0, i.insert = 0))), xs(t), t.avail_out === 0)) {
            i.last_flush = -1;
            return ts;
          }
        }
        if (e !== Xr) {
          return ts;
        } else if (i.wrap <= 0) {
          return es;
        } else {
          if (i.wrap === 2) {
            Ss(i, t.adler & 255);
            Ss(i, t.adler >> 8 & 255);
            Ss(i, t.adler >> 16 & 255);
            Ss(i, t.adler >> 24 & 255);
            Ss(i, t.total_in & 255);
            Ss(i, t.total_in >> 8 & 255);
            Ss(i, t.total_in >> 16 & 255);
            Ss(i, t.total_in >> 24 & 255);
          } else {
            ks(i, t.adler >>> 16);
            ks(i, t.adler & 65535);
          }
          xs(t);
          if (i.wrap > 0) {
            i.wrap = -i.wrap;
          }
          if (i.pending !== 0) {
            return ts;
          } else {
            return es;
          }
        }
      },
      deflateEnd: t => {
        if (zs(t)) {
          return is;
        }
        const e = t.state.status;
        t.state = null;
        if (e === ps) {
          return bs(t, rs);
        } else {
          return ts;
        }
      },
      deflateSetDictionary: (t, e) => {
        let i = e.length;
        if (zs(t)) {
          return is;
        }
        const r = t.state;
        const s = r.wrap;
        if (s === 2 || s === 1 && r.status !== gs || r.lookahead) {
          return is;
        }
        if (s === 1) {
          t.adler = Ur(t.adler, e, i, 0);
        }
        r.wrap = 0;
        if (i >= r.w_size) {
          if (s === 0) {
            ws(r.head);
            r.strstart = 0;
            r.block_start = 0;
            r.insert = 0;
          }
          let t = new Uint8Array(r.w_size);
          t.set(e.subarray(i - r.w_size, i), 0);
          e = t;
          i = r.w_size;
        }
        const n = t.avail_in;
        const a = t.next_in;
        const o = t.input;
        t.avail_in = i;
        t.next_in = 0;
        t.input = e;
        Ms(r);
        while (r.lookahead >= 3) {
          let t = r.strstart;
          let e = r.lookahead - 2;
          do {
            r.ins_h = Bs(r, r.ins_h, r.window[t + 3 - 1]);
            r.prev[t & r.w_mask] = r.head[r.ins_h];
            r.head[r.ins_h] = t;
            t++;
          } while (--e);
          r.strstart = t;
          r.lookahead = 2;
          Ms(r);
        }
        r.strstart += r.lookahead;
        r.block_start = r.strstart;
        r.insert = r.lookahead;
        r.lookahead = 0;
        r.match_length = r.prev_length = 2;
        r.match_available = 0;
        t.next_in = a;
        t.input = o;
        t.avail_in = n;
        r.wrap = s;
        return ts;
      },
      deflateInfo: "pako deflate (from Nodeca project)"
    };
    const Ls = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
    function Os(t) {
      const e = Array.prototype.slice.call(arguments, 1);
      while (e.length) {
        const i = e.shift();
        if (i) {
          if (typeof i != "object") {
            throw new TypeError(i + "must be non-object");
          }
          for (const e in i) {
            if (Ls(i, e)) {
              t[e] = i[e];
            }
          }
        }
      }
      return t;
    }
    var Vs = t => {
      let e = 0;
      for (let i = 0, r = t.length; i < r; i++) {
        e += t[i].length;
      }
      const i = new Uint8Array(e);
      for (let e = 0, r = 0, s = t.length; e < s; e++) {
        let s = t[e];
        i.set(s, r);
        r += s.length;
      }
      return i;
    };
    let Hs = true;
    try {
      String.fromCharCode.apply(null, new Uint8Array(1));
    } catch (t) {
      Hs = false;
    }
    const Gs = new Uint8Array(256);
    for (let t = 0; t < 256; t++) {
      Gs[t] = t >= 252 ? 6 : t >= 248 ? 5 : t >= 240 ? 4 : t >= 224 ? 3 : t >= 192 ? 2 : 1;
    }
    Gs[254] = Gs[254] = 1;
    var Js = t => {
      if (typeof TextEncoder == "function" && TextEncoder.prototype.encode) {
        return new TextEncoder().encode(t);
      }
      let e;
      let i;
      let r;
      let s;
      let n;
      let a = t.length;
      let o = 0;
      for (s = 0; s < a; s++) {
        i = t.charCodeAt(s);
        if ((i & 64512) == 55296 && s + 1 < a) {
          r = t.charCodeAt(s + 1);
          if ((r & 64512) == 56320) {
            i = 65536 + (i - 55296 << 10) + (r - 56320);
            s++;
          }
        }
        o += i < 128 ? 1 : i < 2048 ? 2 : i < 65536 ? 3 : 4;
      }
      e = new Uint8Array(o);
      n = 0;
      s = 0;
      for (; n < o; s++) {
        i = t.charCodeAt(s);
        if ((i & 64512) == 55296 && s + 1 < a) {
          r = t.charCodeAt(s + 1);
          if ((r & 64512) == 56320) {
            i = 65536 + (i - 55296 << 10) + (r - 56320);
            s++;
          }
        }
        if (i < 128) {
          e[n++] = i;
        } else if (i < 2048) {
          e[n++] = i >>> 6 | 192;
          e[n++] = i & 63 | 128;
        } else if (i < 65536) {
          e[n++] = i >>> 12 | 224;
          e[n++] = i >>> 6 & 63 | 128;
          e[n++] = i & 63 | 128;
        } else {
          e[n++] = i >>> 18 | 240;
          e[n++] = i >>> 12 & 63 | 128;
          e[n++] = i >>> 6 & 63 | 128;
          e[n++] = i & 63 | 128;
        }
      }
      return e;
    };
    var qs = (t, e) => {
      const i = e || t.length;
      if (typeof TextDecoder == "function" && TextDecoder.prototype.decode) {
        return new TextDecoder().decode(t.subarray(0, e));
      }
      let r;
      let s;
      const n = new Array(i * 2);
      s = 0;
      r = 0;
      while (r < i) {
        let e = t[r++];
        if (e < 128) {
          n[s++] = e;
          continue;
        }
        let a = Gs[e];
        if (a > 4) {
          n[s++] = 65533;
          r += a - 1;
        } else {
          for (e &= a === 2 ? 31 : a === 3 ? 15 : 7; a > 1 && r < i;) {
            e = e << 6 | t[r++] & 63;
            a--;
          }
          if (a > 1) {
            n[s++] = 65533;
          } else if (e < 65536) {
            n[s++] = e;
          } else {
            e -= 65536;
            n[s++] = e >> 10 & 1023 | 55296;
            n[s++] = e & 1023 | 56320;
          }
        }
      }
      return ((t, e) => {
        if (e < 65534 && t.subarray && Hs) {
          return String.fromCharCode.apply(null, t.length === e ? t : t.subarray(0, e));
        }
        let i = "";
        for (let r = 0; r < e; r++) {
          i += String.fromCharCode(t[r]);
        }
        return i;
      })(n, s);
    };
    var Zs = (t, e) => {
      if ((e = e || t.length) > t.length) {
        e = t.length;
      }
      let i = e - 1;
      while (i >= 0 && (t[i] & 192) == 128) {
        i--;
      }
      if (i < 0 || i === 0) {
        return e;
      } else if (i + Gs[t[i]] > e) {
        return i;
      } else {
        return e;
      }
    };
    function Ys() {
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
    const Ks = Object.prototype.toString;
    const {
      Z_NO_FLUSH: js,
      Z_SYNC_FLUSH: Xs,
      Z_FULL_FLUSH: $s,
      Z_FINISH: tn,
      Z_OK: en,
      Z_STREAM_END: rn,
      Z_DEFAULT_COMPRESSION: sn,
      Z_DEFAULT_STRATEGY: nn,
      Z_DEFLATED: an
    } = Vr;
    function on(t) {
      this.options = Os({
        level: sn,
        method: an,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: nn
      }, t || {});
      let e = this.options;
      if (e.raw && e.windowBits > 0) {
        e.windowBits = -e.windowBits;
      } else if (e.gzip && e.windowBits > 0 && e.windowBits < 16) {
        e.windowBits += 16;
      }
      this.err = 0;
      this.msg = "";
      this.ended = false;
      this.chunks = [];
      this.strm = new Ys();
      this.strm.avail_out = 0;
      let i = Ns.deflateInit2(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy);
      if (i !== en) {
        throw new Error(Or[i]);
      }
      if (e.header) {
        Ns.deflateSetHeader(this.strm, e.header);
      }
      if (e.dictionary) {
        let t;
        t = typeof e.dictionary == "string" ? Js(e.dictionary) : Ks.call(e.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(e.dictionary) : e.dictionary;
        i = Ns.deflateSetDictionary(this.strm, t);
        if (i !== en) {
          throw new Error(Or[i]);
        }
        this._dict_set = true;
      }
    }
    function ln(t, e) {
      const i = new on(e);
      i.push(t, true);
      if (i.err) {
        throw i.msg || Or[i.err];
      }
      return i.result;
    }
    on.prototype.push = function (t, e) {
      const i = this.strm;
      const r = this.options.chunkSize;
      let s;
      let n;
      if (this.ended) {
        return false;
      }
      n = e === ~~e ? e : e === true ? tn : js;
      if (typeof t == "string") {
        i.input = Js(t);
      } else if (Ks.call(t) === "[object ArrayBuffer]") {
        i.input = new Uint8Array(t);
      } else {
        i.input = t;
      }
      i.next_in = 0;
      i.avail_in = i.input.length;
      while (true) {
        if (i.avail_out === 0) {
          i.output = new Uint8Array(r);
          i.next_out = 0;
          i.avail_out = r;
        }
        if ((n === Xs || n === $s) && i.avail_out <= 6) {
          this.onData(i.output.subarray(0, i.next_out));
          i.avail_out = 0;
        } else {
          s = Ns.deflate(i, n);
          if (s === rn) {
            if (i.next_out > 0) {
              this.onData(i.output.subarray(0, i.next_out));
            }
            s = Ns.deflateEnd(this.strm);
            this.onEnd(s);
            this.ended = true;
            return s === en;
          }
          if (i.avail_out !== 0) {
            if (n > 0 && i.next_out > 0) {
              this.onData(i.output.subarray(0, i.next_out));
              i.avail_out = 0;
            } else if (i.avail_in === 0) {
              break;
            }
          } else {
            this.onData(i.output);
          }
        }
      }
      return true;
    };
    on.prototype.onData = function (t) {
      this.chunks.push(t);
    };
    on.prototype.onEnd = function (t) {
      if (t === en) {
        this.result = Vs(this.chunks);
      }
      this.chunks = [];
      this.err = t;
      this.msg = this.strm.msg;
    };
    var hn = {
      Deflate: on,
      deflate: ln,
      deflateRaw: function (t, e) {
        (e = e || {}).raw = true;
        return ln(t, e);
      },
      gzip: function (t, e) {
        (e = e || {}).gzip = true;
        return ln(t, e);
      },
      constants: Vr
    };
    const cn = 16209;
    function An(t, e) {
      let i;
      let r;
      let s;
      let n;
      let a;
      let o;
      let l;
      let h;
      let c;
      let A;
      let d;
      let u;
      let f;
      let g;
      let p;
      let m;
      let b;
      let y;
      let w;
      let I;
      let B;
      let x;
      let C;
      let S;
      const k = t.state;
      i = t.next_in;
      C = t.input;
      r = i + (t.avail_in - 5);
      s = t.next_out;
      S = t.output;
      n = s - (e - t.avail_out);
      a = s + (t.avail_out - 257);
      o = k.dmax;
      l = k.wsize;
      h = k.whave;
      c = k.wnext;
      A = k.window;
      d = k.hold;
      u = k.bits;
      f = k.lencode;
      g = k.distcode;
      p = (1 << k.lenbits) - 1;
      m = (1 << k.distbits) - 1;
      t: do {
        if (u < 15) {
          d += C[i++] << u;
          u += 8;
          d += C[i++] << u;
          u += 8;
        }
        b = f[d & p];
        e: while (true) {
          y = b >>> 24;
          d >>>= y;
          u -= y;
          y = b >>> 16 & 255;
          if (y === 0) {
            S[s++] = b & 65535;
          } else {
            if (!(y & 16)) {
              if (y & 64) {
                if (y & 32) {
                  k.mode = 16191;
                  break t;
                }
                t.msg = "invalid literal/length code";
                k.mode = cn;
                break t;
              }
              b = f[(b & 65535) + (d & (1 << y) - 1)];
              continue e;
            }
            w = b & 65535;
            y &= 15;
            if (y) {
              if (u < y) {
                d += C[i++] << u;
                u += 8;
              }
              w += d & (1 << y) - 1;
              d >>>= y;
              u -= y;
            }
            if (u < 15) {
              d += C[i++] << u;
              u += 8;
              d += C[i++] << u;
              u += 8;
            }
            b = g[d & m];
            while (true) {
              y = b >>> 24;
              d >>>= y;
              u -= y;
              y = b >>> 16 & 255;
              if (y & 16) {
                I = b & 65535;
                y &= 15;
                if (u < y) {
                  d += C[i++] << u;
                  u += 8;
                  if (u < y) {
                    d += C[i++] << u;
                    u += 8;
                  }
                }
                I += d & (1 << y) - 1;
                if (I > o) {
                  t.msg = "invalid distance too far back";
                  k.mode = cn;
                  break t;
                }
                d >>>= y;
                u -= y;
                y = s - n;
                if (I > y) {
                  y = I - y;
                  if (y > h && k.sane) {
                    t.msg = "invalid distance too far back";
                    k.mode = cn;
                    break t;
                  }
                  B = 0;
                  x = A;
                  if (c === 0) {
                    B += l - y;
                    if (y < w) {
                      w -= y;
                      do {
                        S[s++] = A[B++];
                      } while (--y);
                      B = s - I;
                      x = S;
                    }
                  } else if (c < y) {
                    B += l + c - y;
                    y -= c;
                    if (y < w) {
                      w -= y;
                      do {
                        S[s++] = A[B++];
                      } while (--y);
                      B = 0;
                      if (c < w) {
                        y = c;
                        w -= y;
                        do {
                          S[s++] = A[B++];
                        } while (--y);
                        B = s - I;
                        x = S;
                      }
                    }
                  } else {
                    B += c - y;
                    if (y < w) {
                      w -= y;
                      do {
                        S[s++] = A[B++];
                      } while (--y);
                      B = s - I;
                      x = S;
                    }
                  }
                  while (w > 2) {
                    S[s++] = x[B++];
                    S[s++] = x[B++];
                    S[s++] = x[B++];
                    w -= 3;
                  }
                  if (w) {
                    S[s++] = x[B++];
                    if (w > 1) {
                      S[s++] = x[B++];
                    }
                  }
                } else {
                  B = s - I;
                  do {
                    S[s++] = S[B++];
                    S[s++] = S[B++];
                    S[s++] = S[B++];
                    w -= 3;
                  } while (w > 2);
                  if (w) {
                    S[s++] = S[B++];
                    if (w > 1) {
                      S[s++] = S[B++];
                    }
                  }
                }
                break;
              }
              if (y & 64) {
                t.msg = "invalid distance code";
                k.mode = cn;
                break t;
              }
              b = g[(b & 65535) + (d & (1 << y) - 1)];
            }
          }
          break;
        }
      } while (i < r && s < a);
      w = u >> 3;
      i -= w;
      u -= w << 3;
      d &= (1 << u) - 1;
      t.next_in = i;
      t.next_out = s;
      t.avail_in = i < r ? r - i + 5 : 5 - (i - r);
      t.avail_out = s < a ? a - s + 257 : 257 - (s - a);
      k.hold = d;
      k.bits = u;
    }
    const dn = 15;
    const un = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]);
    const fn = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]);
    const gn = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]);
    const pn = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
    var mn = (t, e, i, r, s, n, a, o) => {
      const l = o.bits;
      let h;
      let c;
      let A;
      let d;
      let u;
      let f;
      let g = 0;
      let p = 0;
      let m = 0;
      let b = 0;
      let y = 0;
      let w = 0;
      let I = 0;
      let B = 0;
      let x = 0;
      let C = 0;
      let S = null;
      const k = new Uint16Array(16);
      const _ = new Uint16Array(16);
      let E;
      let M;
      let P;
      let T = null;
      for (g = 0; g <= dn; g++) {
        k[g] = 0;
      }
      for (p = 0; p < r; p++) {
        k[e[i + p]]++;
      }
      y = l;
      b = dn;
      for (; b >= 1 && k[b] === 0; b--);
      if (y > b) {
        y = b;
      }
      if (b === 0) {
        s[n++] = 20971520;
        s[n++] = 20971520;
        o.bits = 1;
        return 0;
      }
      for (m = 1; m < b && k[m] === 0; m++);
      if (y < m) {
        y = m;
      }
      B = 1;
      g = 1;
      for (; g <= dn; g++) {
        B <<= 1;
        B -= k[g];
        if (B < 0) {
          return -1;
        }
      }
      if (B > 0 && (t === 0 || b !== 1)) {
        return -1;
      }
      _[1] = 0;
      g = 1;
      for (; g < dn; g++) {
        _[g + 1] = _[g] + k[g];
      }
      for (p = 0; p < r; p++) {
        if (e[i + p] !== 0) {
          a[_[e[i + p]]++] = p;
        }
      }
      if (t === 0) {
        S = T = a;
        f = 20;
      } else if (t === 1) {
        S = un;
        T = fn;
        f = 257;
      } else {
        S = gn;
        T = pn;
        f = 0;
      }
      C = 0;
      p = 0;
      g = m;
      u = n;
      w = y;
      I = 0;
      A = -1;
      x = 1 << y;
      d = x - 1;
      if (t === 1 && x > 852 || t === 2 && x > 592) {
        return 1;
      }
      while (true) {
        E = g - I;
        if (a[p] + 1 < f) {
          M = 0;
          P = a[p];
        } else if (a[p] >= f) {
          M = T[a[p] - f];
          P = S[a[p] - f];
        } else {
          M = 96;
          P = 0;
        }
        h = 1 << g - I;
        c = 1 << w;
        m = c;
        do {
          c -= h;
          s[u + (C >> I) + c] = E << 24 | M << 16 | P;
        } while (c !== 0);
        for (h = 1 << g - 1; C & h;) {
          h >>= 1;
        }
        if (h !== 0) {
          C &= h - 1;
          C += h;
        } else {
          C = 0;
        }
        p++;
        if (--k[g] == 0) {
          if (g === b) {
            break;
          }
          g = e[i + a[p]];
        }
        if (g > y && (C & d) !== A) {
          if (I === 0) {
            I = y;
          }
          u += m;
          w = g - I;
          B = 1 << w;
          while (w + I < b && (B -= k[w + I], !(B <= 0))) {
            w++;
            B <<= 1;
          }
          x += 1 << w;
          if (t === 1 && x > 852 || t === 2 && x > 592) {
            return 1;
          }
          A = C & d;
          s[A] = y << 24 | w << 16 | u - n;
        }
      }
      if (C !== 0) {
        s[u + C] = g - I << 24 | 4194304;
      }
      o.bits = y;
      return 0;
    };
    const {
      Z_FINISH: bn,
      Z_BLOCK: yn,
      Z_TREES: wn,
      Z_OK: In,
      Z_STREAM_END: Bn,
      Z_NEED_DICT: xn,
      Z_STREAM_ERROR: Cn,
      Z_DATA_ERROR: Sn,
      Z_MEM_ERROR: kn,
      Z_BUF_ERROR: _n,
      Z_DEFLATED: En
    } = Vr;
    const Mn = 16180;
    const Pn = 16190;
    const Tn = 16191;
    const Qn = 16192;
    const vn = 16194;
    const Dn = 16199;
    const Rn = 16200;
    const zn = 16206;
    const Wn = 16209;
    const Fn = t => (t >>> 24 & 255) + (t >>> 8 & 65280) + ((t & 65280) << 8) + ((t & 255) << 24);
    function Un() {
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
    const Nn = t => {
      if (!t) {
        return 1;
      }
      const e = t.state;
      if (!e || e.strm !== t || e.mode < Mn || e.mode > 16211) {
        return 1;
      } else {
        return 0;
      }
    };
    const Ln = t => {
      if (Nn(t)) {
        return Cn;
      }
      const e = t.state;
      t.total_in = t.total_out = e.total = 0;
      t.msg = "";
      if (e.wrap) {
        t.adler = e.wrap & 1;
      }
      e.mode = Mn;
      e.last = 0;
      e.havedict = 0;
      e.flags = -1;
      e.dmax = 32768;
      e.head = null;
      e.hold = 0;
      e.bits = 0;
      e.lencode = e.lendyn = new Int32Array(852);
      e.distcode = e.distdyn = new Int32Array(592);
      e.sane = 1;
      e.back = -1;
      return In;
    };
    const On = t => {
      if (Nn(t)) {
        return Cn;
      }
      const e = t.state;
      e.wsize = 0;
      e.whave = 0;
      e.wnext = 0;
      return Ln(t);
    };
    const Vn = (t, e) => {
      let i;
      if (Nn(t)) {
        return Cn;
      }
      const r = t.state;
      if (e < 0) {
        i = 0;
        e = -e;
      } else {
        i = 5 + (e >> 4);
        if (e < 48) {
          e &= 15;
        }
      }
      if (e && (e < 8 || e > 15)) {
        return Cn;
      } else {
        if (r.window !== null && r.wbits !== e) {
          r.window = null;
        }
        r.wrap = i;
        r.wbits = e;
        return On(t);
      }
    };
    const Hn = (t, e) => {
      if (!t) {
        return Cn;
      }
      const i = new Un();
      t.state = i;
      i.strm = t;
      i.window = null;
      i.mode = Mn;
      const r = Vn(t, e);
      if (r !== In) {
        t.state = null;
      }
      return r;
    };
    let Gn;
    let Jn;
    let qn = true;
    const Zn = t => {
      if (qn) {
        Gn = new Int32Array(512);
        Jn = new Int32Array(32);
        let e = 0;
        while (e < 144) {
          t.lens[e++] = 8;
        }
        while (e < 256) {
          t.lens[e++] = 9;
        }
        while (e < 280) {
          t.lens[e++] = 7;
        }
        while (e < 288) {
          t.lens[e++] = 8;
        }
        mn(1, t.lens, 0, 288, Gn, 0, t.work, {
          bits: 9
        });
        e = 0;
        while (e < 32) {
          t.lens[e++] = 5;
        }
        mn(2, t.lens, 0, 32, Jn, 0, t.work, {
          bits: 5
        });
        qn = false;
      }
      t.lencode = Gn;
      t.lenbits = 9;
      t.distcode = Jn;
      t.distbits = 5;
    };
    const Yn = (t, e, i, r) => {
      let s;
      const n = t.state;
      if (n.window === null) {
        n.wsize = 1 << n.wbits;
        n.wnext = 0;
        n.whave = 0;
        n.window = new Uint8Array(n.wsize);
      }
      if (r >= n.wsize) {
        n.window.set(e.subarray(i - n.wsize, i), 0);
        n.wnext = 0;
        n.whave = n.wsize;
      } else {
        s = n.wsize - n.wnext;
        if (s > r) {
          s = r;
        }
        n.window.set(e.subarray(i - r, i - r + s), n.wnext);
        if (r -= s) {
          n.window.set(e.subarray(i - r, i), 0);
          n.wnext = r;
          n.whave = n.wsize;
        } else {
          n.wnext += s;
          if (n.wnext === n.wsize) {
            n.wnext = 0;
          }
          if (n.whave < n.wsize) {
            n.whave += s;
          }
        }
      }
      return 0;
    };
    var Kn = {
      inflateReset: On,
      inflateReset2: Vn,
      inflateResetKeep: Ln,
      inflateInit: t => Hn(t, 15),
      inflateInit2: Hn,
      inflate: (t, e) => {
        let i;
        let r;
        let s;
        let n;
        let a;
        let o;
        let l;
        let h;
        let c;
        let A;
        let d;
        let u;
        let f;
        let g;
        let p;
        let m;
        let b;
        let y;
        let w;
        let I;
        let B;
        let x;
        let C = 0;
        const S = new Uint8Array(4);
        let k;
        let _;
        const E = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
        if (Nn(t) || !t.output || !t.input && t.avail_in !== 0) {
          return Cn;
        }
        i = t.state;
        if (i.mode === Tn) {
          i.mode = Qn;
        }
        a = t.next_out;
        s = t.output;
        l = t.avail_out;
        n = t.next_in;
        r = t.input;
        o = t.avail_in;
        h = i.hold;
        c = i.bits;
        A = o;
        d = l;
        x = In;
        t: while (true) {
          switch (i.mode) {
            case Mn:
              if (i.wrap === 0) {
                i.mode = Qn;
                break;
              }
              while (c < 16) {
                if (o === 0) {
                  break t;
                }
                o--;
                h += r[n++] << c;
                c += 8;
              }
              if (i.wrap & 2 && h === 35615) {
                if (i.wbits === 0) {
                  i.wbits = 15;
                }
                i.check = 0;
                S[0] = h & 255;
                S[1] = h >>> 8 & 255;
                i.check = Lr(i.check, S, 2, 0);
                h = 0;
                c = 0;
                i.mode = 16181;
                break;
              }
              if (i.head) {
                i.head.done = false;
              }
              if (!(i.wrap & 1) || (((h & 255) << 8) + (h >> 8)) % 31) {
                t.msg = "incorrect header check";
                i.mode = Wn;
                break;
              }
              if ((h & 15) !== En) {
                t.msg = "unknown compression method";
                i.mode = Wn;
                break;
              }
              h >>>= 4;
              c -= 4;
              B = 8 + (h & 15);
              if (i.wbits === 0) {
                i.wbits = B;
              }
              if (B > 15 || B > i.wbits) {
                t.msg = "invalid window size";
                i.mode = Wn;
                break;
              }
              i.dmax = 1 << i.wbits;
              i.flags = 0;
              t.adler = i.check = 1;
              i.mode = h & 512 ? 16189 : Tn;
              h = 0;
              c = 0;
              break;
            case 16181:
              while (c < 16) {
                if (o === 0) {
                  break t;
                }
                o--;
                h += r[n++] << c;
                c += 8;
              }
              i.flags = h;
              if ((i.flags & 255) !== En) {
                t.msg = "unknown compression method";
                i.mode = Wn;
                break;
              }
              if (i.flags & 57344) {
                t.msg = "unknown header flags set";
                i.mode = Wn;
                break;
              }
              if (i.head) {
                i.head.text = h >> 8 & 1;
              }
              if (i.flags & 512 && i.wrap & 4) {
                S[0] = h & 255;
                S[1] = h >>> 8 & 255;
                i.check = Lr(i.check, S, 2, 0);
              }
              h = 0;
              c = 0;
              i.mode = 16182;
            case 16182:
              while (c < 32) {
                if (o === 0) {
                  break t;
                }
                o--;
                h += r[n++] << c;
                c += 8;
              }
              if (i.head) {
                i.head.time = h;
              }
              if (i.flags & 512 && i.wrap & 4) {
                S[0] = h & 255;
                S[1] = h >>> 8 & 255;
                S[2] = h >>> 16 & 255;
                S[3] = h >>> 24 & 255;
                i.check = Lr(i.check, S, 4, 0);
              }
              h = 0;
              c = 0;
              i.mode = 16183;
            case 16183:
              while (c < 16) {
                if (o === 0) {
                  break t;
                }
                o--;
                h += r[n++] << c;
                c += 8;
              }
              if (i.head) {
                i.head.xflags = h & 255;
                i.head.os = h >> 8;
              }
              if (i.flags & 512 && i.wrap & 4) {
                S[0] = h & 255;
                S[1] = h >>> 8 & 255;
                i.check = Lr(i.check, S, 2, 0);
              }
              h = 0;
              c = 0;
              i.mode = 16184;
            case 16184:
              if (i.flags & 1024) {
                while (c < 16) {
                  if (o === 0) {
                    break t;
                  }
                  o--;
                  h += r[n++] << c;
                  c += 8;
                }
                i.length = h;
                if (i.head) {
                  i.head.extra_len = h;
                }
                if (i.flags & 512 && i.wrap & 4) {
                  S[0] = h & 255;
                  S[1] = h >>> 8 & 255;
                  i.check = Lr(i.check, S, 2, 0);
                }
                h = 0;
                c = 0;
              } else if (i.head) {
                i.head.extra = null;
              }
              i.mode = 16185;
            case 16185:
              if (i.flags & 1024 && (u = i.length, u > o && (u = o), u && (i.head && (B = i.head.extra_len - i.length, i.head.extra ||= new Uint8Array(i.head.extra_len), i.head.extra.set(r.subarray(n, n + u), B)), i.flags & 512 && i.wrap & 4 && (i.check = Lr(i.check, r, u, n)), o -= u, n += u, i.length -= u), i.length)) {
                break t;
              }
              i.length = 0;
              i.mode = 16186;
            case 16186:
              if (i.flags & 2048) {
                if (o === 0) {
                  break t;
                }
                u = 0;
                do {
                  B = r[n + u++];
                  if (i.head && B && i.length < 65536) {
                    i.head.name += String.fromCharCode(B);
                  }
                } while (B && u < o);
                if (i.flags & 512 && i.wrap & 4) {
                  i.check = Lr(i.check, r, u, n);
                }
                o -= u;
                n += u;
                if (B) {
                  break t;
                }
              } else if (i.head) {
                i.head.name = null;
              }
              i.length = 0;
              i.mode = 16187;
            case 16187:
              if (i.flags & 4096) {
                if (o === 0) {
                  break t;
                }
                u = 0;
                do {
                  B = r[n + u++];
                  if (i.head && B && i.length < 65536) {
                    i.head.comment += String.fromCharCode(B);
                  }
                } while (B && u < o);
                if (i.flags & 512 && i.wrap & 4) {
                  i.check = Lr(i.check, r, u, n);
                }
                o -= u;
                n += u;
                if (B) {
                  break t;
                }
              } else if (i.head) {
                i.head.comment = null;
              }
              i.mode = 16188;
            case 16188:
              if (i.flags & 512) {
                while (c < 16) {
                  if (o === 0) {
                    break t;
                  }
                  o--;
                  h += r[n++] << c;
                  c += 8;
                }
                if (i.wrap & 4 && h !== (i.check & 65535)) {
                  t.msg = "header crc mismatch";
                  i.mode = Wn;
                  break;
                }
                h = 0;
                c = 0;
              }
              if (i.head) {
                i.head.hcrc = i.flags >> 9 & 1;
                i.head.done = true;
              }
              t.adler = i.check = 0;
              i.mode = Tn;
              break;
            case 16189:
              while (c < 32) {
                if (o === 0) {
                  break t;
                }
                o--;
                h += r[n++] << c;
                c += 8;
              }
              t.adler = i.check = Fn(h);
              h = 0;
              c = 0;
              i.mode = Pn;
            case Pn:
              if (i.havedict === 0) {
                t.next_out = a;
                t.avail_out = l;
                t.next_in = n;
                t.avail_in = o;
                i.hold = h;
                i.bits = c;
                return xn;
              }
              t.adler = i.check = 1;
              i.mode = Tn;
            case Tn:
              if (e === yn || e === wn) {
                break t;
              }
            case Qn:
              if (i.last) {
                h >>>= c & 7;
                c -= c & 7;
                i.mode = zn;
                break;
              }
              while (c < 3) {
                if (o === 0) {
                  break t;
                }
                o--;
                h += r[n++] << c;
                c += 8;
              }
              i.last = h & 1;
              h >>>= 1;
              c -= 1;
              switch (h & 3) {
                case 0:
                  i.mode = 16193;
                  break;
                case 1:
                  Zn(i);
                  i.mode = Dn;
                  if (e === wn) {
                    h >>>= 2;
                    c -= 2;
                    break t;
                  }
                  break;
                case 2:
                  i.mode = 16196;
                  break;
                case 3:
                  t.msg = "invalid block type";
                  i.mode = Wn;
              }
              h >>>= 2;
              c -= 2;
              break;
            case 16193:
              h >>>= c & 7;
              c -= c & 7;
              while (c < 32) {
                if (o === 0) {
                  break t;
                }
                o--;
                h += r[n++] << c;
                c += 8;
              }
              if ((h & 65535) != (h >>> 16 ^ 65535)) {
                t.msg = "invalid stored block lengths";
                i.mode = Wn;
                break;
              }
              i.length = h & 65535;
              h = 0;
              c = 0;
              i.mode = vn;
              if (e === wn) {
                break t;
              }
            case vn:
              i.mode = 16195;
            case 16195:
              u = i.length;
              if (u) {
                if (u > o) {
                  u = o;
                }
                if (u > l) {
                  u = l;
                }
                if (u === 0) {
                  break t;
                }
                s.set(r.subarray(n, n + u), a);
                o -= u;
                n += u;
                l -= u;
                a += u;
                i.length -= u;
                break;
              }
              i.mode = Tn;
              break;
            case 16196:
              while (c < 14) {
                if (o === 0) {
                  break t;
                }
                o--;
                h += r[n++] << c;
                c += 8;
              }
              i.nlen = 257 + (h & 31);
              h >>>= 5;
              c -= 5;
              i.ndist = 1 + (h & 31);
              h >>>= 5;
              c -= 5;
              i.ncode = 4 + (h & 15);
              h >>>= 4;
              c -= 4;
              if (i.nlen > 286 || i.ndist > 30) {
                t.msg = "too many length or distance symbols";
                i.mode = Wn;
                break;
              }
              i.have = 0;
              i.mode = 16197;
            case 16197:
              while (i.have < i.ncode) {
                while (c < 3) {
                  if (o === 0) {
                    break t;
                  }
                  o--;
                  h += r[n++] << c;
                  c += 8;
                }
                i.lens[E[i.have++]] = h & 7;
                h >>>= 3;
                c -= 3;
              }
              while (i.have < 19) {
                i.lens[E[i.have++]] = 0;
              }
              i.lencode = i.lendyn;
              i.lenbits = 7;
              k = {
                bits: i.lenbits
              };
              x = mn(0, i.lens, 0, 19, i.lencode, 0, i.work, k);
              i.lenbits = k.bits;
              if (x) {
                t.msg = "invalid code lengths set";
                i.mode = Wn;
                break;
              }
              i.have = 0;
              i.mode = 16198;
            case 16198:
              while (i.have < i.nlen + i.ndist) {
                while (C = i.lencode[h & (1 << i.lenbits) - 1], p = C >>> 24, m = C >>> 16 & 255, b = C & 65535, !(p <= c)) {
                  if (o === 0) {
                    break t;
                  }
                  o--;
                  h += r[n++] << c;
                  c += 8;
                }
                if (b < 16) {
                  h >>>= p;
                  c -= p;
                  i.lens[i.have++] = b;
                } else {
                  if (b === 16) {
                    for (_ = p + 2; c < _;) {
                      if (o === 0) {
                        break t;
                      }
                      o--;
                      h += r[n++] << c;
                      c += 8;
                    }
                    h >>>= p;
                    c -= p;
                    if (i.have === 0) {
                      t.msg = "invalid bit length repeat";
                      i.mode = Wn;
                      break;
                    }
                    B = i.lens[i.have - 1];
                    u = 3 + (h & 3);
                    h >>>= 2;
                    c -= 2;
                  } else if (b === 17) {
                    for (_ = p + 3; c < _;) {
                      if (o === 0) {
                        break t;
                      }
                      o--;
                      h += r[n++] << c;
                      c += 8;
                    }
                    h >>>= p;
                    c -= p;
                    B = 0;
                    u = 3 + (h & 7);
                    h >>>= 3;
                    c -= 3;
                  } else {
                    for (_ = p + 7; c < _;) {
                      if (o === 0) {
                        break t;
                      }
                      o--;
                      h += r[n++] << c;
                      c += 8;
                    }
                    h >>>= p;
                    c -= p;
                    B = 0;
                    u = 11 + (h & 127);
                    h >>>= 7;
                    c -= 7;
                  }
                  if (i.have + u > i.nlen + i.ndist) {
                    t.msg = "invalid bit length repeat";
                    i.mode = Wn;
                    break;
                  }
                  while (u--) {
                    i.lens[i.have++] = B;
                  }
                }
              }
              if (i.mode === Wn) {
                break;
              }
              if (i.lens[256] === 0) {
                t.msg = "invalid code -- missing end-of-block";
                i.mode = Wn;
                break;
              }
              i.lenbits = 9;
              k = {
                bits: i.lenbits
              };
              x = mn(1, i.lens, 0, i.nlen, i.lencode, 0, i.work, k);
              i.lenbits = k.bits;
              if (x) {
                t.msg = "invalid literal/lengths set";
                i.mode = Wn;
                break;
              }
              i.distbits = 6;
              i.distcode = i.distdyn;
              k = {
                bits: i.distbits
              };
              x = mn(2, i.lens, i.nlen, i.ndist, i.distcode, 0, i.work, k);
              i.distbits = k.bits;
              if (x) {
                t.msg = "invalid distances set";
                i.mode = Wn;
                break;
              }
              i.mode = Dn;
              if (e === wn) {
                break t;
              }
            case Dn:
              i.mode = Rn;
            case Rn:
              if (o >= 6 && l >= 258) {
                t.next_out = a;
                t.avail_out = l;
                t.next_in = n;
                t.avail_in = o;
                i.hold = h;
                i.bits = c;
                An(t, d);
                a = t.next_out;
                s = t.output;
                l = t.avail_out;
                n = t.next_in;
                r = t.input;
                o = t.avail_in;
                h = i.hold;
                c = i.bits;
                if (i.mode === Tn) {
                  i.back = -1;
                }
                break;
              }
              for (i.back = 0; C = i.lencode[h & (1 << i.lenbits) - 1], p = C >>> 24, m = C >>> 16 & 255, b = C & 65535, !(p <= c);) {
                if (o === 0) {
                  break t;
                }
                o--;
                h += r[n++] << c;
                c += 8;
              }
              if (m && !(m & 240)) {
                y = p;
                w = m;
                I = b;
                while (C = i.lencode[I + ((h & (1 << y + w) - 1) >> y)], p = C >>> 24, m = C >>> 16 & 255, b = C & 65535, !(y + p <= c)) {
                  if (o === 0) {
                    break t;
                  }
                  o--;
                  h += r[n++] << c;
                  c += 8;
                }
                h >>>= y;
                c -= y;
                i.back += y;
              }
              h >>>= p;
              c -= p;
              i.back += p;
              i.length = b;
              if (m === 0) {
                i.mode = 16205;
                break;
              }
              if (m & 32) {
                i.back = -1;
                i.mode = Tn;
                break;
              }
              if (m & 64) {
                t.msg = "invalid literal/length code";
                i.mode = Wn;
                break;
              }
              i.extra = m & 15;
              i.mode = 16201;
            case 16201:
              if (i.extra) {
                for (_ = i.extra; c < _;) {
                  if (o === 0) {
                    break t;
                  }
                  o--;
                  h += r[n++] << c;
                  c += 8;
                }
                i.length += h & (1 << i.extra) - 1;
                h >>>= i.extra;
                c -= i.extra;
                i.back += i.extra;
              }
              i.was = i.length;
              i.mode = 16202;
            case 16202:
              while (C = i.distcode[h & (1 << i.distbits) - 1], p = C >>> 24, m = C >>> 16 & 255, b = C & 65535, !(p <= c)) {
                if (o === 0) {
                  break t;
                }
                o--;
                h += r[n++] << c;
                c += 8;
              }
              if (!(m & 240)) {
                y = p;
                w = m;
                I = b;
                while (C = i.distcode[I + ((h & (1 << y + w) - 1) >> y)], p = C >>> 24, m = C >>> 16 & 255, b = C & 65535, !(y + p <= c)) {
                  if (o === 0) {
                    break t;
                  }
                  o--;
                  h += r[n++] << c;
                  c += 8;
                }
                h >>>= y;
                c -= y;
                i.back += y;
              }
              h >>>= p;
              c -= p;
              i.back += p;
              if (m & 64) {
                t.msg = "invalid distance code";
                i.mode = Wn;
                break;
              }
              i.offset = b;
              i.extra = m & 15;
              i.mode = 16203;
            case 16203:
              if (i.extra) {
                for (_ = i.extra; c < _;) {
                  if (o === 0) {
                    break t;
                  }
                  o--;
                  h += r[n++] << c;
                  c += 8;
                }
                i.offset += h & (1 << i.extra) - 1;
                h >>>= i.extra;
                c -= i.extra;
                i.back += i.extra;
              }
              if (i.offset > i.dmax) {
                t.msg = "invalid distance too far back";
                i.mode = Wn;
                break;
              }
              i.mode = 16204;
            case 16204:
              if (l === 0) {
                break t;
              }
              u = d - l;
              if (i.offset > u) {
                u = i.offset - u;
                if (u > i.whave && i.sane) {
                  t.msg = "invalid distance too far back";
                  i.mode = Wn;
                  break;
                }
                if (u > i.wnext) {
                  u -= i.wnext;
                  f = i.wsize - u;
                } else {
                  f = i.wnext - u;
                }
                if (u > i.length) {
                  u = i.length;
                }
                g = i.window;
              } else {
                g = s;
                f = a - i.offset;
                u = i.length;
              }
              if (u > l) {
                u = l;
              }
              l -= u;
              i.length -= u;
              do {
                s[a++] = g[f++];
              } while (--u);
              if (i.length === 0) {
                i.mode = Rn;
              }
              break;
            case 16205:
              if (l === 0) {
                break t;
              }
              s[a++] = i.length;
              l--;
              i.mode = Rn;
              break;
            case zn:
              if (i.wrap) {
                while (c < 32) {
                  if (o === 0) {
                    break t;
                  }
                  o--;
                  h |= r[n++] << c;
                  c += 8;
                }
                d -= l;
                t.total_out += d;
                i.total += d;
                if (i.wrap & 4 && d) {
                  t.adler = i.check = i.flags ? Lr(i.check, s, d, a - d) : Ur(i.check, s, d, a - d);
                }
                d = l;
                if (i.wrap & 4 && (i.flags ? h : Fn(h)) !== i.check) {
                  t.msg = "incorrect data check";
                  i.mode = Wn;
                  break;
                }
                h = 0;
                c = 0;
              }
              i.mode = 16207;
            case 16207:
              if (i.wrap && i.flags) {
                while (c < 32) {
                  if (o === 0) {
                    break t;
                  }
                  o--;
                  h += r[n++] << c;
                  c += 8;
                }
                if (i.wrap & 4 && h !== (i.total & -1)) {
                  t.msg = "incorrect length check";
                  i.mode = Wn;
                  break;
                }
                h = 0;
                c = 0;
              }
              i.mode = 16208;
            case 16208:
              x = Bn;
              break t;
            case Wn:
              x = Sn;
              break t;
            case 16210:
              return kn;
            default:
              return Cn;
          }
        }
        t.next_out = a;
        t.avail_out = l;
        t.next_in = n;
        t.avail_in = o;
        i.hold = h;
        i.bits = c;
        if (i.wsize || d !== t.avail_out && i.mode < Wn && (i.mode < zn || e !== bn)) {
          Yn(t, t.output, t.next_out, d - t.avail_out);
        }
        A -= t.avail_in;
        d -= t.avail_out;
        t.total_in += A;
        t.total_out += d;
        i.total += d;
        if (i.wrap & 4 && d) {
          t.adler = i.check = i.flags ? Lr(i.check, s, d, t.next_out - d) : Ur(i.check, s, d, t.next_out - d);
        }
        t.data_type = i.bits + (i.last ? 64 : 0) + (i.mode === Tn ? 128 : 0) + (i.mode === Dn || i.mode === vn ? 256 : 0);
        if ((A === 0 && d === 0 || e === bn) && x === In) {
          x = _n;
        }
        return x;
      },
      inflateEnd: t => {
        if (Nn(t)) {
          return Cn;
        }
        let e = t.state;
        e.window &&= null;
        t.state = null;
        return In;
      },
      inflateGetHeader: (t, e) => {
        if (Nn(t)) {
          return Cn;
        }
        const i = t.state;
        if (i.wrap & 2) {
          i.head = e;
          e.done = false;
          return In;
        } else {
          return Cn;
        }
      },
      inflateSetDictionary: (t, e) => {
        const i = e.length;
        let r;
        let s;
        let n;
        if (Nn(t)) {
          return Cn;
        } else {
          r = t.state;
          if (r.wrap !== 0 && r.mode !== Pn) {
            return Cn;
          } else if (r.mode === Pn && (s = 1, s = Ur(s, e, i, 0), s !== r.check)) {
            return Sn;
          } else {
            n = Yn(t, e, i, i);
            if (n) {
              r.mode = 16210;
              return kn;
            } else {
              r.havedict = 1;
              return In;
            }
          }
        }
      },
      inflateInfo: "pako inflate (from Nodeca project)"
    };
    function jn() {
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
    const Xn = Object.prototype.toString;
    const {
      Z_NO_FLUSH: $n,
      Z_FINISH: ta,
      Z_OK: ea,
      Z_STREAM_END: ia,
      Z_NEED_DICT: ra,
      Z_STREAM_ERROR: sa,
      Z_DATA_ERROR: na,
      Z_MEM_ERROR: aa
    } = Vr;
    function oa(t) {
      this.options = Os({
        chunkSize: 65536,
        windowBits: 15,
        to: ""
      }, t || {});
      const e = this.options;
      if (e.raw && e.windowBits >= 0 && e.windowBits < 16) {
        e.windowBits = -e.windowBits;
        if (e.windowBits === 0) {
          e.windowBits = -15;
        }
      }
      if (!!(e.windowBits >= 0) && !!(e.windowBits < 16) && (!t || !t.windowBits)) {
        e.windowBits += 32;
      }
      if (e.windowBits > 15 && e.windowBits < 48) {
        if (!(e.windowBits & 15)) {
          e.windowBits |= 15;
        }
      }
      this.err = 0;
      this.msg = "";
      this.ended = false;
      this.chunks = [];
      this.strm = new Ys();
      this.strm.avail_out = 0;
      let i = Kn.inflateInit2(this.strm, e.windowBits);
      if (i !== ea) {
        throw new Error(Or[i]);
      }
      this.header = new jn();
      Kn.inflateGetHeader(this.strm, this.header);
      if (e.dictionary && (typeof e.dictionary == "string" ? e.dictionary = Js(e.dictionary) : Xn.call(e.dictionary) === "[object ArrayBuffer]" && (e.dictionary = new Uint8Array(e.dictionary)), e.raw && (i = Kn.inflateSetDictionary(this.strm, e.dictionary), i !== ea))) {
        throw new Error(Or[i]);
      }
    }
    function la(t, e) {
      const i = new oa(e);
      i.push(t);
      if (i.err) {
        throw i.msg || Or[i.err];
      }
      return i.result;
    }
    oa.prototype.push = function (t, e) {
      const i = this.strm;
      const r = this.options.chunkSize;
      const s = this.options.dictionary;
      let n;
      let a;
      let o;
      if (this.ended) {
        return false;
      }
      a = e === ~~e ? e : e === true ? ta : $n;
      if (Xn.call(t) === "[object ArrayBuffer]") {
        i.input = new Uint8Array(t);
      } else {
        i.input = t;
      }
      i.next_in = 0;
      i.avail_in = i.input.length;
      while (true) {
        if (i.avail_out === 0) {
          i.output = new Uint8Array(r);
          i.next_out = 0;
          i.avail_out = r;
        }
        n = Kn.inflate(i, a);
        if (n === ra && s) {
          n = Kn.inflateSetDictionary(i, s);
          if (n === ea) {
            n = Kn.inflate(i, a);
          } else if (n === na) {
            n = ra;
          }
        }
        while (i.avail_in > 0 && n === ia && i.state.wrap > 0 && t[i.next_in] !== 0) {
          Kn.inflateReset(i);
          n = Kn.inflate(i, a);
        }
        switch (n) {
          case sa:
          case na:
          case ra:
          case aa:
            this.onEnd(n);
            this.ended = true;
            return false;
        }
        o = i.avail_out;
        if (i.next_out && (i.avail_out === 0 || n === ia)) {
          if (this.options.to === "string") {
            let t = Zs(i.output, i.next_out);
            let e = i.next_out - t;
            let s = qs(i.output, t);
            i.next_out = e;
            i.avail_out = r - e;
            if (e) {
              i.output.set(i.output.subarray(t, t + e), 0);
            }
            this.onData(s);
          } else {
            this.onData(i.output.length === i.next_out ? i.output : i.output.subarray(0, i.next_out));
          }
        }
        if (n !== ea || o !== 0) {
          if (n === ia) {
            n = Kn.inflateEnd(this.strm);
            this.onEnd(n);
            this.ended = true;
            return true;
          }
          if (i.avail_in === 0) {
            break;
          }
        }
      }
      return true;
    };
    oa.prototype.onData = function (t) {
      this.chunks.push(t);
    };
    oa.prototype.onEnd = function (t) {
      if (t === ea) {
        if (this.options.to === "string") {
          this.result = this.chunks.join("");
        } else {
          this.result = Vs(this.chunks);
        }
      }
      this.chunks = [];
      this.err = t;
      this.msg = this.strm.msg;
    };
    var ha = {
      Inflate: oa,
      inflate: la,
      inflateRaw: function (t, e) {
        (e = e || {}).raw = true;
        return la(t, e);
      },
      ungzip: la,
      constants: Vr
    };
    const {
      Deflate: ca,
      deflate: Aa,
      deflateRaw: da,
      gzip: ua
    } = hn;
    const {
      Inflate: fa,
      inflate: ga,
      inflateRaw: pa,
      ungzip: ma
    } = ha;
    var ba;
    var ya;
    var wa;
    var Ia;
    var Ba;
    var xa;
    var Ca;
    var Sa;
    var ka;
    var _a;
    var Ea;
    var Ma = {
      Deflate: ca,
      deflate: Aa,
      deflateRaw: da,
      gzip: ua,
      Inflate: fa,
      inflate: ga,
      inflateRaw: pa,
      ungzip: ma,
      constants: Vr
    };
    function Pa(t) {
      let e;
      t = (t = t.replace(/-/g, "+")).replace(/_/g, "/");
      try {
        e = atob(t);
      } catch {
        return null;
      }
      const i = new Uint8Array(e.length);
      for (let t = 0; t < e.length; ++t) {
        const r = e.charCodeAt(t);
        if (r > 255) {
          return null;
        }
        i[t] = r;
      }
      return i;
    }
    class Ta {
      constructor(t) {
        ba.add(this);
        wa.set(this, []);
        Ia.set(this, []);
        Ba.set(this, []);
        xa.set(this, []);
        Ca.set(this, []);
        Sa.set(this, null);
        if (t != null) {
          Xi(this, wa, t.up, "f");
          Xi(this, Ia, t.right, "f");
          Xi(this, Ba, t.down, "f");
          Xi(this, xa, t.left, "f");
          Xi(this, Ca, t.reset, "f");
        }
      }
      recordFrame(t, e) {
        if (t > ya.maxFrames) {
          throw new Error("Frame number exceeds maximum frame count.");
        }
        if (ji(this, Sa, "f") != null && t <= ji(this, Sa, "f")) {
          throw new Error("Frame number must be greater than the previous recorded frame.");
        }
        Xi(this, Sa, t, "f");
        const i = ji(this, wa, "f").length % 2 != 0;
        const r = ji(this, Ia, "f").length % 2 != 0;
        const s = ji(this, Ba, "f").length % 2 != 0;
        const n = ji(this, xa, "f").length % 2 != 0;
        const a = ji(this, Ca, "f").length % 2 != 0;
        if (e.up != i) {
          ji(this, wa, "f").push(t);
        }
        if (e.right != r) {
          ji(this, Ia, "f").push(t);
        }
        if (e.down != s) {
          ji(this, Ba, "f").push(t);
        }
        if (e.left != n) {
          ji(this, xa, "f").push(t);
        }
        if (e.reset != a) {
          ji(this, Ca, "f").push(t);
        }
      }
      getFrame(t) {
        return {
          up: (ji(this, ba, "m", ka).call(this, t, ji(this, wa, "f")) + 1) % 2 != 0,
          right: (ji(this, ba, "m", ka).call(this, t, ji(this, Ia, "f")) + 1) % 2 != 0,
          down: (ji(this, ba, "m", ka).call(this, t, ji(this, Ba, "f")) + 1) % 2 != 0,
          left: (ji(this, ba, "m", ka).call(this, t, ji(this, xa, "f")) + 1) % 2 != 0,
          reset: (ji(this, ba, "m", ka).call(this, t, ji(this, Ca, "f")) + 1) % 2 != 0
        };
      }
      serialize() {
        const t = new Uint8Array(3 + ji(this, wa, "f").length * 3 + 3 + ji(this, Ia, "f").length * 3 + 3 + ji(this, Ba, "f").length * 3 + 3 + ji(this, xa, "f").length * 3 + 3 + ji(this, Ca, "f").length * 3);
        ji(this, ba, "m", _a).call(this, ji(this, wa, "f"), t.subarray(0, 3 + ji(this, wa, "f").length * 3));
        ji(this, ba, "m", _a).call(this, ji(this, Ia, "f"), t.subarray(3 + ji(this, wa, "f").length * 3, 3 + ji(this, wa, "f").length * 3 + 3 + ji(this, Ia, "f").length * 3));
        ji(this, ba, "m", _a).call(this, ji(this, Ba, "f"), t.subarray(3 + ji(this, wa, "f").length * 3 + 3 + ji(this, Ia, "f").length * 3, 3 + ji(this, wa, "f").length * 3 + 3 + ji(this, Ia, "f").length * 3 + 3 + ji(this, Ba, "f").length * 3));
        ji(this, ba, "m", _a).call(this, ji(this, xa, "f"), t.subarray(3 + ji(this, wa, "f").length * 3 + 3 + ji(this, Ia, "f").length * 3 + 3 + ji(this, Ba, "f").length * 3, 3 + ji(this, wa, "f").length * 3 + 3 + ji(this, Ia, "f").length * 3 + 3 + ji(this, Ba, "f").length * 3 + 3 + ji(this, xa, "f").length * 3));
        ji(this, ba, "m", _a).call(this, ji(this, Ca, "f"), t.subarray(3 + ji(this, wa, "f").length * 3 + 3 + ji(this, Ia, "f").length * 3 + 3 + ji(this, Ba, "f").length * 3 + 3 + ji(this, xa, "f").length * 3, 3 + ji(this, wa, "f").length * 3 + 3 + ji(this, Ia, "f").length * 3 + 3 + ji(this, Ba, "f").length * 3 + 3 + ji(this, xa, "f").length * 3 + 3 + ji(this, Ca, "f").length * 3));
        const e = new Ma.Deflate({
          level: 9
        });
        e.push(new Uint8Array(t), true);
        return function (t) {
          let e = "";
          for (const i of t) {
            e += String.fromCharCode(i);
          }
          let i = btoa(e);
          i = i.replace(/\+/g, "-");
          i = i.replace(/\//g, "_");
          i = i.replace(/=/g, "");
          return i;
        }(e.result);
      }
      static deserialize(t) {
        const e = Pa(t);
        if (e == null) {
          return null;
        }
        const i = new Ma.Inflate();
        i.push(e, true);
        if (i.err) {
          return null;
        }
        const r = i.result;
        if (!(r instanceof Uint8Array)) {
          return null;
        }
        const s = ji(ya, ya, "m", Ea).call(ya, r);
        if (s == null) {
          return null;
        }
        const n = ji(ya, ya, "m", Ea).call(ya, r.subarray(3 + s.length * 3));
        if (n == null) {
          return null;
        }
        const a = ji(ya, ya, "m", Ea).call(ya, r.subarray(3 + s.length * 3 + 3 + n.length * 3));
        if (a == null) {
          return null;
        }
        const o = ji(ya, ya, "m", Ea).call(ya, r.subarray(3 + s.length * 3 + 3 + n.length * 3 + 3 + a.length * 3));
        if (o == null) {
          return null;
        }
        const l = ji(ya, ya, "m", Ea).call(ya, r.subarray(3 + s.length * 3 + 3 + n.length * 3 + 3 + a.length * 3 + 3 + o.length * 3));
        if (l == null) {
          return null;
        } else {
          return new ya({
            up: s,
            right: n,
            down: a,
            left: o,
            reset: l
          });
        }
      }
    }
    ya = Ta;
    wa = new WeakMap();
    Ia = new WeakMap();
    Ba = new WeakMap();
    xa = new WeakMap();
    Ca = new WeakMap();
    Sa = new WeakMap();
    ba = new WeakSet();
    ka = function (t, e) {
      let i = -1;
      for (let r = 0; r < e.length; ++r) {
        const s = e[r];
        if (s == t) {
          i = r;
          break;
        }
        if (s > t) {
          break;
        }
        i = r;
      }
      return i;
    };
    _a = function (t, e) {
      e[0] = t.length & 255;
      e[1] = t.length >>> 8 & 255;
      e[2] = t.length >>> 16 & 255;
      for (let i = 0; i < t.length; ++i) {
        let r;
        r = i == 0 ? t[i] : t[i] - t[i - 1];
        e[3 + i * 3] = r & 255;
        e[3 + i * 3 + 1] = r >>> 8 & 255;
        e[3 + i * 3 + 2] = r >>> 16 & 255;
      }
    };
    Ea = function (t) {
      if (t.length < 3) {
        return null;
      }
      const e = t[0] | t[1] << 8 | t[2] << 16;
      if (t.length < 3 + e * 3) {
        return null;
      }
      const i = [];
      for (let r = 0; r < e; ++r) {
        const e = t[3 + r * 3] | t[3 + r * 3 + 1] << 8 | t[3 + r * 3 + 2] << 16;
        if (r == 0) {
          i.push(e);
        } else {
          i.push(i[r - 1] + e);
        }
      }
      return i;
    };
    Ta.maxFrames = 5999999;
    const Qa = Ta;
    var va = i(1312);
    const Da = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const Ra = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51];
    function za(t) {
      let e = 0;
      let i = "";
      while (e < t.length * 8) {
        const r = Fa(t, e);
        let s;
        if (~r & 30) {
          s = r;
          e += 6;
        } else {
          s = r & 31;
          e += 5;
        }
        i += Da[s];
      }
      return i;
    }
    function Wa(t) {
      let e = 0;
      const i = [];
      const r = t.length;
      for (let s = 0; s < r; s++) {
        const n = t.charCodeAt(s);
        if (n >= Ra.length) {
          return null;
        }
        const a = Ra[n];
        if (a == -1) {
          return null;
        }
        if (~a & 30) {
          Ua(i, e, 6, a, s == r - 1);
          e += 6;
        } else {
          Ua(i, e, 5, a, s == r - 1);
          e += 5;
        }
      }
      return new Uint8Array(i);
    }
    function Fa(t, e) {
      if (e >= t.length * 8) {
        throw new Error("Out of range");
      }
      const i = Math.floor(e / 8);
      const r = t[i];
      const s = e - i * 8;
      if (s <= 2 || i >= t.length - 1) {
        return (r & 63 << s) >>> s;
      }
      return (r & 63 << s) >>> s | (t[i + 1] & 63 >>> 8 - s) << 8 - s;
    }
    function Ua(t, e, i, r, s) {
      const n = Math.floor(e / 8);
      while (n >= t.length) {
        t.push(0);
      }
      const a = e - n * 8;
      t[n] |= r << a & 255;
      if (a > 8 - i && !s) {
        const e = n + 1;
        if (e >= t.length) {
          t.push(0);
        }
        t[e] |= r >> 8 - a;
      }
    }
    var Na;
    class La {
      constructor(t = 28) {
        Na.set(this, undefined);
        if (!Number.isSafeInteger(t) || !(t >= 0) || !(t < 180)) {
          throw new Error("Representation is not a safe integer or is out of range");
        }
        Xi(this, Na, t, "f");
      }
      clone() {
        return new La(ji(this, Na, "f"));
      }
      toDegrees() {
        return ji(this, Na, "f") * 2;
      }
      static fromDegrees(t) {
        const e = Math.round(t / 2 % 180);
        return new La(e);
      }
      getSunPosition() {
        const t = ji(this, Na, "f") * 2 * (Math.PI / 180);
        const e = Math.cos(t);
        const i = Math.sin(t);
        return new R(e, 0.78, i).normalize();
      }
      get representation() {
        return ji(this, Na, "f");
      }
    }
    Na = new WeakMap();
    const Oa = La;
    var Va;
    (function (t) {
      t[t.Summer = 0] = "Summer";
      t[t.Winter = 1] = "Winter";
      t[t.Desert = 2] = "Desert";
    })(Va ||= {});
    const Ha = Va;
    var Ga;
    (function (t) {
      t[t.Default = 0] = "Default";
      t[t.Summer = 1] = "Summer";
      t[t.Winter = 2] = "Winter";
      t[t.Desert = 3] = "Desert";
      t[t.Custom0 = 32] = "Custom0";
      t[t.Custom1 = 33] = "Custom1";
      t[t.Custom2 = 34] = "Custom2";
      t[t.Custom3 = 35] = "Custom3";
      t[t.Custom4 = 36] = "Custom4";
      t[t.Custom5 = 37] = "Custom5";
      t[t.Custom6 = 38] = "Custom6";
      t[t.Custom7 = 39] = "Custom7";
      t[t.Custom8 = 40] = "Custom8";
    })(Ga ||= {});
    const Ja = Ga;
    var qa;
    (function (t) {
      t[t.Straight = 0] = "Straight";
      t[t.TurnSharp = 1] = "TurnSharp";
      t[t.SlopeUp = 2] = "SlopeUp";
      t[t.SlopeDown = 3] = "SlopeDown";
      t[t.Slope = 4] = "Slope";
      t[t.Start = 5] = "Start";
      t[t.Finish = 6] = "Finish";
      t[t.ToWideMiddle = 7] = "ToWideMiddle";
      t[t.ToWideLeft = 8] = "ToWideLeft";
      t[t.ToWideRight = 9] = "ToWideRight";
      t[t.StraightWide = 10] = "StraightWide";
      t[t.InnerCornerWide = 11] = "InnerCornerWide";
      t[t.OuterCornerWide = 12] = "OuterCornerWide";
      t[t.SlopeUpLeftWide = 13] = "SlopeUpLeftWide";
      t[t.SlopeUpRightWide = 14] = "SlopeUpRightWide";
      t[t.SlopeDownLeftWide = 15] = "SlopeDownLeftWide";
      t[t.SlopeDownRightWide = 16] = "SlopeDownRightWide";
      t[t.SlopeLeftWide = 17] = "SlopeLeftWide";
      t[t.SlopeRightWide = 18] = "SlopeRightWide";
      t[t.PillarTop = 19] = "PillarTop";
      t[t.PillarMiddle = 20] = "PillarMiddle";
      t[t.PillarBottom = 21] = "PillarBottom";
      t[t.PillarShort = 22] = "PillarShort";
      t[t.PlanePillarBottom = 23] = "PlanePillarBottom";
      t[t.PlanePillarShort = 24] = "PlanePillarShort";
      t[t.Plane = 25] = "Plane";
      t[t.PlaneWall = 26] = "PlaneWall";
      t[t.PlaneWallCorner = 27] = "PlaneWallCorner";
      t[t.PlaneWallInnerCorner = 28] = "PlaneWallInnerCorner";
      t[t.Block = 29] = "Block";
      t[t.WallTrackTop = 30] = "WallTrackTop";
      t[t.WallTrackMiddle = 31] = "WallTrackMiddle";
      t[t.WallTrackBottom = 32] = "WallTrackBottom";
      t[t.PlaneSlopeUp = 33] = "PlaneSlopeUp";
      t[t.PlaneSlopeDown = 34] = "PlaneSlopeDown";
      t[t.PlaneSlope = 35] = "PlaneSlope";
      t[t.TurnShort = 36] = "TurnShort";
      t[t.TurnLong = 37] = "TurnLong";
      t[t.SlopeUpLong = 38] = "SlopeUpLong";
      t[t.SlopeDownLong = 39] = "SlopeDownLong";
      t[t.TurnSLeft = 41] = "TurnSLeft";
      t[t.TurnSRight = 42] = "TurnSRight";
      t[t.IntersectionT = 43] = "IntersectionT";
      t[t.IntersectionCross = 44] = "IntersectionCross";
      t[t.PillarBranch1 = 45] = "PillarBranch1";
      t[t.PillarBranch2 = 46] = "PillarBranch2";
      t[t.PillarBranch3 = 47] = "PillarBranch3";
      t[t.PillarBranch4 = 48] = "PillarBranch4";
      t[t.WallTrackBottomCorner = 49] = "WallTrackBottomCorner";
      t[t.WallTrackMiddleCorner = 50] = "WallTrackMiddleCorner";
      t[t.WallTrackTopCorner = 51] = "WallTrackTopCorner";
      t[t.Checkpoint = 52] = "Checkpoint";
      t[t.HalfBlock = 53] = "HalfBlock";
      t[t.QuarterBlock = 54] = "QuarterBlock";
      t[t.HalfPlane = 55] = "HalfPlane";
      t[t.QuarterPlane = 56] = "QuarterPlane";
      t[t.PlaneBridge = 57] = "PlaneBridge";
      t[t.SignArrowLeft = 58] = "SignArrowLeft";
      t[t.SignArrowRight = 59] = "SignArrowRight";
      t[t.SignArrowUp = 61] = "SignArrowUp";
      t[t.SignArrowDown = 62] = "SignArrowDown";
      t[t.SignWarning = 63] = "SignWarning";
      t[t.SignWrongWay = 64] = "SignWrongWay";
      t[t.CheckpointWide = 65] = "CheckpointWide";
      t[t.WallTrackCeiling = 66] = "WallTrackCeiling";
      t[t.WallTrackFloor = 67] = "WallTrackFloor";
      t[t.BlockSlopedDown = 68] = "BlockSlopedDown";
      t[t.BlockSlopedDownInnerCorner = 69] = "BlockSlopedDownInnerCorner";
      t[t.BlockSlopedDownOuterCorner = 70] = "BlockSlopedDownOuterCorner";
      t[t.BlockSlopedUp = 71] = "BlockSlopedUp";
      t[t.BlockSlopedUpInnerCorner = 72] = "BlockSlopedUpInnerCorner";
      t[t.BlockSlopedUpOuterCorner = 73] = "BlockSlopedUpOuterCorner";
      t[t.FinishWide = 74] = "FinishWide";
      t[t.PlaneCheckpoint = 75] = "PlaneCheckpoint";
      t[t.PlaneFinish = 76] = "PlaneFinish";
      t[t.PlaneCheckpointWide = 77] = "PlaneCheckpointWide";
      t[t.PlaneFinishWide = 78] = "PlaneFinishWide";
      t[t.WallTrackBottomInnerCorner = 79] = "WallTrackBottomInnerCorner";
      t[t.WallTrackInnerCorner = 80] = "WallTrackInnerCorner";
      t[t.WallTrackTopInnerCorner = 81] = "WallTrackTopInnerCorner";
      t[t.TurnLong2 = 82] = "TurnLong2";
      t[t.TurnLong3 = 83] = "TurnLong3";
      t[t.BlockSlopeUp = 85] = "BlockSlopeUp";
      t[t.BlockSlopeDown = 86] = "BlockSlopeDown";
      t[t.BlockSlopeVerticalTop = 87] = "BlockSlopeVerticalTop";
      t[t.BlockSlopeVerticalBottom = 88] = "BlockSlopeVerticalBottom";
      t[t.PlaneSlopeVerticalBottom = 90] = "PlaneSlopeVerticalBottom";
      t[t.StartWide = 91] = "StartWide";
      t[t.PlaneStart = 92] = "PlaneStart";
      t[t.PlaneStartWide = 93] = "PlaneStartWide";
      t[t.TurnShortLeftWide = 94] = "TurnShortLeftWide";
      t[t.TurnShortRightWide = 95] = "TurnShortRightWide";
      t[t.TurnLongLeftWide = 96] = "TurnLongLeftWide";
      t[t.TurnLongRightWide = 97] = "TurnLongRightWide";
      t[t.SlopeUpVertical = 98] = "SlopeUpVertical";
      t[t.IntersectionY = 99] = "IntersectionY";
      t[t.IntersectionYLong = 100] = "IntersectionYLong";
      t[t.PillarBranch1Top = 101] = "PillarBranch1Top";
      t[t.PillarBranch1Bottom = 102] = "PillarBranch1Bottom";
      t[t.PillarBranch1Middle = 103] = "PillarBranch1Middle";
      t[t.PillarBranch2Top = 104] = "PillarBranch2Top";
      t[t.PillarBranch2Middle = 105] = "PillarBranch2Middle";
      t[t.PillarBranch2Bottom = 106] = "PillarBranch2Bottom";
      t[t.PillarBranch3Top = 107] = "PillarBranch3Top";
      t[t.PillarBranch3Middle = 108] = "PillarBranch3Middle";
      t[t.PillarBranch3Bottom = 109] = "PillarBranch3Bottom";
      t[t.PillarBranch4Top = 110] = "PillarBranch4Top";
      t[t.PillarBranch4Middle = 111] = "PillarBranch4Middle";
      t[t.PillarBranch4Bottom = 112] = "PillarBranch4Bottom";
      t[t.PillarBranch5 = 113] = "PillarBranch5";
      t[t.PillarBranch5Top = 114] = "PillarBranch5Top";
      t[t.PillarBranch5Middle = 115] = "PillarBranch5Middle";
      t[t.PillarBranch5Bottom = 116] = "PillarBranch5Bottom";
      t[t.ToWideDouble = 117] = "ToWideDouble";
      t[t.ToWideDiagonal = 118] = "ToWideDiagonal";
      t[t.StraightPillarBottom = 119] = "StraightPillarBottom";
      t[t.StraightPillarShort = 120] = "StraightPillarShort";
      t[t.TurnSharpPillarBottom = 121] = "TurnSharpPillarBottom";
      t[t.TurnSharpPillarShort = 122] = "TurnSharpPillarShort";
      t[t.IntersectionTPillarBottom = 123] = "IntersectionTPillarBottom";
      t[t.IntersectionTPillarShort = 124] = "IntersectionTPillarShort";
      t[t.IntersectionCrossPillarBottom = 125] = "IntersectionCrossPillarBottom";
      t[t.IntersectionCrossPillarShort = 126] = "IntersectionCrossPillarShort";
      t[t.PlaneBridgeCorner = 127] = "PlaneBridgeCorner";
      t[t.PlaneBridgeIntersectionT = 128] = "PlaneBridgeIntersectionT";
      t[t.PlaneBridgeIntersectionCross = 129] = "PlaneBridgeIntersectionCross";
      t[t.BlockBridge = 130] = "BlockBridge";
      t[t.BlockBridgeCorner = 131] = "BlockBridgeCorner";
      t[t.BlockBridgeIntersectionT = 132] = "BlockBridgeIntersectionT";
      t[t.BlockBridgeIntersectionCross = 133] = "BlockBridgeIntersectionCross";
      t[t.WallTrackCeilingCorner = 134] = "WallTrackCeilingCorner";
      t[t.WallTrackCeilingPlaneCorner = 135] = "WallTrackCeilingPlaneCorner";
      t[t.WallTrackFloorCorner = 136] = "WallTrackFloorCorner";
      t[t.WallTrackFloorPlaneCorner = 137] = "WallTrackFloorPlaneCorner";
      t[t.SlopeUpVerticalLeftWide = 138] = "SlopeUpVerticalLeftWide";
      t[t.SlopeUpVerticalRightWide = 139] = "SlopeUpVerticalRightWide";
      t[t.BlockSlopeVerticalCornerTop = 140] = "BlockSlopeVerticalCornerTop";
      t[t.BlockSlopeVerticalCornerBottom = 141] = "BlockSlopeVerticalCornerBottom";
      t[t.WallTrackSlopeToVertical = 142] = "WallTrackSlopeToVertical";
      t[t.PlaneSlopeToVertical = 143] = "PlaneSlopeToVertical";
      t[t.BlockSlopeToVertical = 144] = "BlockSlopeToVertical";
      t[t.PlaneSlopeUpLong = 145] = "PlaneSlopeUpLong";
      t[t.PlaneSlopeDownLong = 146] = "PlaneSlopeDownLong";
      t[t.SlopeUpLongLeftWide = 147] = "SlopeUpLongLeftWide";
      t[t.SlopeUpLongRightWide = 148] = "SlopeUpLongRightWide";
      t[t.SlopeDownLongLeftWide = 149] = "SlopeDownLongLeftWide";
      t[t.SlopeDownLongRightWide = 150] = "SlopeDownLongRightWide";
      t[t.BlockSlopeUpLong = 151] = "BlockSlopeUpLong";
      t[t.BlockSlopeDownLong = 152] = "BlockSlopeDownLong";
      t[t.BlockSlopeVerticalInnerCornerBottom = 153] = "BlockSlopeVerticalInnerCornerBottom";
      t[t.BlockSlopeVerticalInnerCornerTop = 154] = "BlockSlopeVerticalInnerCornerTop";
      t[t.BlockInnerCorner = 155] = "BlockInnerCorner";
      t[t.SlopeToVertical = 156] = "SlopeToVertical";
      t[t.SlopeToVerticalLeftWide = 157] = "SlopeToVerticalLeftWide";
      t[t.SlopeToVerticalRightWide = 158] = "SlopeToVerticalRightWide";
      t[t.StraightTilted = 159] = "StraightTilted";
      t[t.TurnShortTilted = 160] = "TurnShortTilted";
      t[t.TurnLongTilted = 161] = "TurnLongTilted";
      t[t.TurnLong2Tilted = 162] = "TurnLong2Tilted";
      t[t.TurnLong3Tilted = 163] = "TurnLong3Tilted";
      t[t.TurnSLongLeft = 164] = "TurnSLongLeft";
      t[t.TurnSLongRight = 165] = "TurnSLongRight";
      t[t.ToTiltedLeft = 166] = "ToTiltedLeft";
      t[t.ToTiltedRight = 167] = "ToTiltedRight";
      t[t.PillarTopSlope = 168] = "PillarTopSlope";
      t[t.PillarShortSlope = 169] = "PillarShortSlope";
      t[t.HalfPlaneSlopeBottomLeft = 170] = "HalfPlaneSlopeBottomLeft";
      t[t.HalfPlaneSlopeBottomRight = 171] = "HalfPlaneSlopeBottomRight";
      t[t.HalfPlaneSlopeTopLeft = 172] = "HalfPlaneSlopeTopLeft";
      t[t.HalfPlaneSlopeTopRight = 173] = "HalfPlaneSlopeTopRight";
      t[t.HalfBlockSlopeBottomLeft = 174] = "HalfBlockSlopeBottomLeft";
      t[t.HalfBlockSlopeBottomRight = 175] = "HalfBlockSlopeBottomRight";
      t[t.HalfBlockSlopeTopLeft = 176] = "HalfBlockSlopeTopLeft";
      t[t.HalfBlockSlopeTopRight = 177] = "HalfBlockSlopeTopRight";
      t[t.PlaneWallSlopeLeft = 178] = "PlaneWallSlopeLeft";
      t[t.PlaneWallSlopeRight = 179] = "PlaneWallSlopeRight";
      t[t.PlaneWallSlopeUpLeft = 180] = "PlaneWallSlopeUpLeft";
      t[t.PlaneWallSlopeUpRight = 181] = "PlaneWallSlopeUpRight";
      t[t.PlaneWallSlopeDownLeft = 182] = "PlaneWallSlopeDownLeft";
      t[t.PlaneWallSlopeDownRight = 183] = "PlaneWallSlopeDownRight";
      t[t.PlaneWallSlopeUpLongLeft = 184] = "PlaneWallSlopeUpLongLeft";
      t[t.PlaneWallSlopeUpLongRight = 185] = "PlaneWallSlopeUpLongRight";
      t[t.PlaneWallSlopeDownLongLeft = 186] = "PlaneWallSlopeDownLongLeft";
      t[t.PlaneWallSlopeDownLongRight = 187] = "PlaneWallSlopeDownLongRight";
      t[t.BlockOuterCorner = 188] = "BlockOuterCorner";
      t[t.PlaneCorner = 189] = "PlaneCorner";
    })(qa ||= {});
    const Za = qa;
    var Ya;
    (function (t) {
      t[t.YPositive = 0] = "YPositive";
      t[t.YNegative = 1] = "YNegative";
      t[t.XPositive = 2] = "XPositive";
      t[t.XNegative = 3] = "XNegative";
      t[t.ZPositive = 4] = "ZPositive";
      t[t.ZNegative = 5] = "ZNegative";
    })(Ya ||= {});
    const Ka = Ya;
    var ja;
    (function (t) {
      t[t.Special = 0] = "Special";
      t[t.Road = 1] = "Road";
      t[t.RoadTurns = 2] = "RoadTurns";
      t[t.RoadWide = 3] = "RoadWide";
      t[t.Plane = 4] = "Plane";
      t[t.Block = 5] = "Block";
      t[t.WallTrack = 6] = "WallTrack";
      t[t.Pillar = 7] = "Pillar";
      t[t.Sign = 8] = "Sign";
    })(ja ||= {});
    const Xa = ja;
    var $a;
    (function (t) {
      t[t.Checkpoint = 0] = "Checkpoint";
      t[t.Finish = 1] = "Finish";
    })($a ||= {});
    const to = $a;
    const eo = [[new D(0, 0, 0, 1), new D(0, 0.7071067811865475, 0, 0.7071067811865476), new D(0, 1, 0, 0), new D(0, 0.7071067811865476, 0, -0.7071067811865475)], [new D(0, 0, 1, 0), new D(0.7071067811865475, 0, 0.7071067811865476, 0), new D(1, 0, 0, 0), new D(0.7071067811865476, 0, -0.7071067811865475, 0)], [new D(0, 0, -0.7071067811865477, 0.7071067811865475), new D(0.5, 0.5, -0.5, 0.5), new D(0.7071067811865475, 0.7071067811865477, 0, 0), new D(0.5, 0.5, 0.5, -0.5)], [new D(0, 0, 0.7071067811865475, 0.7071067811865476), new D(0.5, -0.5, 0.5, 0.5), new D(0.7071067811865476, -0.7071067811865475, 0, 0), new D(0.5, -0.5, -0.5, -0.5)], [new D(0.7071067811865475, 0, 0, 0.7071067811865476), new D(0.5, 0.5, 0.5, 0.5), new D(0, 0.7071067811865476, 0.7071067811865475, 0), new D(-0.5, 0.5, 0.5, -0.5)], [new D(-0.7071067811865477, 0, 0, 0.7071067811865475), new D(-0.5, -0.5, 0.5, 0.5), new D(0, -0.7071067811865475, 0.7071067811865477, 0), new D(0.5, -0.5, 0.5, -0.5)]];
    function io(t, e) {
      return eo[e][t].clone();
    }
    var ro;
    class so {
      constructor(t) {
        ro.set(this, undefined);
        const e = [];
        for (const [i, r, s] of t) {
          e.push([i, r, s]);
        }
        Xi(this, ro, e, "f");
      }
      rotated(t, e) {
        return new so(ji(this, ro, "f").map(([i, r, s]) => function (t, e, i, r, s) {
          if (s == Ka.YNegative || s == Ka.XNegative || s == Ka.ZNegative) {
            switch (r) {
              case 0:
                break;
              case 1:
                [t, i] = [-i - 1, t];
                break;
              case 2:
                [t, i] = [-t - 1, -i - 1];
                break;
              case 3:
                [t, i] = [i, -t - 1];
                break;
              default:
                throw new Error("Invalid rotation");
            }
          } else {
            switch (r) {
              case 0:
                break;
              case 1:
                [t, i] = [i, -t - 1];
                break;
              case 2:
                [t, i] = [-t - 1, -i - 1];
                break;
              case 3:
                [t, i] = [-i - 1, t];
                break;
              default:
                throw new Error("Invalid rotation");
            }
          }
          if (s != Ka.YPositive) {
            if (s == Ka.YNegative) {
              [t, e] = [-t - 1, -e - 1];
            } else if (s == Ka.XPositive) {
              [t, e] = [e, -t - 1];
            } else if (s == Ka.XNegative) {
              [t, e] = [-e - 1, t];
            } else if (s == Ka.ZPositive) {
              [e, i] = [-i - 1, e];
            } else {
              [e, i] = [i, -e - 1];
            }
          }
          return [t, e, i];
        }(i, r, s, t, e)));
      }
      forEach(t) {
        for (let e = 0; e < ji(this, ro, "f").length; e++) {
          const [i, r, s] = ji(this, ro, "f")[e];
          t(i, r, s, e);
        }
      }
      some(t) {
        for (let e = 0; e < ji(this, ro, "f").length; e++) {
          const [i, r, s] = ji(this, ro, "f")[e];
          if (t(i, r, s, e)) {
            return true;
          }
        }
        return false;
      }
      get length() {
        return ji(this, ro, "f").length;
      }
    }
    ro = new WeakMap();
    const no = so;
    const ao = [{
      id: Ja.Summer,
      colors: {}
    }, {
      id: Ja.Winter,
      colors: {
        Road: "#5077b2",
        RoadBarrier: "#898989",
        RoadEdgeWhite: "#ffffff",
        RoadEdgeRed: "#1f3d6b",
        BlockSurface: "#878787",
        Pillar: "#2b4d7f",
        PillarEdge: "#071428",
        WallTrack: "#5077b2",
        WallTrackBottom: "#878787",
        WallTrackSides: "#ffffff",
        PlaneWall: "#1f3d6b",
        PlaneWallDetail: "#878787",
        SignYellow: "#1b2a89",
        SignRed: "#841901",
        SignBlack: "#5077b2"
      }
    }, {
      id: Ja.Desert,
      colors: {
        Road: "#997240",
        RoadBarrier: "#211001",
        RoadEdgeRed: "#5b2424",
        RoadEdgeWhite: "#510808",
        BlockSurface: "#b78f5b",
        Pillar: "#99713d",
        PillarEdge: "#1c1105",
        WallTrack: "#260b0b",
        WallTrackBottom: "#160606",
        WallTrackSides: "#75562e",
        PlaneWall: "#633030",
        PlaneWallDetail: "#aa8a53",
        SignYellow: "#997240",
        SignRed: "#d80202",
        SignBlack: "#601d1d"
      }
    }];
    const oo = ao.concat([{
      id: Ja.Custom0,
      colors: {
        BlockSurface: "#131313"
      }
    }, {
      id: Ja.Custom1,
      colors: {
        BlockSurface: "#501b1b"
      }
    }, {
      id: Ja.Custom2,
      colors: {
        BlockSurface: "#7f4d2b"
      }
    }, {
      id: Ja.Custom3,
      colors: {
        BlockSurface: "#93862d"
      }
    }, {
      id: Ja.Custom4,
      colors: {
        BlockSurface: "#2a5e30"
      }
    }, {
      id: Ja.Custom5,
      colors: {
        BlockSurface: "#236363"
      }
    }, {
      id: Ja.Custom6,
      colors: {
        BlockSurface: "#20244b"
      }
    }, {
      id: Ja.Custom7,
      colors: {
        BlockSurface: "#592759"
      }
    }, {
      id: Ja.Custom8,
      colors: {
        BlockSurface: "#302318"
      }
    }]);
    class lo {
      constructor(t, e, i, r, s, n, a = null, o = null) {
        const l = [];
        for (const [t, e] of n) {
          for (let i = t[0]; i <= e[0]; i++) {
            for (let r = t[1]; r <= e[1]; r++) {
              for (let s = t[2]; s <= e[2]; s++) {
                if (l.find(([t, e, n]) => t == i && e == r && n == s) != null) {
                  throw new Error("Duplicate tile in track part");
                }
                l.push([i, r, s]);
              }
            }
          }
        }
        this.checksum = t;
        this.category = e;
        this.id = i;
        this.models = r;
        this.colors = s;
        this.tiles = new no(l);
        this.detector = a;
        this.startOffset = o;
        Object.freeze(this);
      }
    }
    const ho = [new lo("6d94d798abd14dc3bce4e99c180309d993ad43adb5f2c90eef8e350eedafe7cf", Xa.Special, Za.Start, [["Road", "Start"]], ao, [[[-2, 0, -2], [1, 0, 1]]], null, new R(0, 0.35, 1.35)), new lo("f29e34b2e05e0a4751109ae564b03fe8878a79cc6b26288f1117ed296d09c5bb", Xa.Special, Za.StartWide, [["RoadWide", "StartWide"]], ao, [[[-2, 0, -2], [5, 0, 1]]], null, new R(-10, 0.35, 1.35)), new lo("3c304054f415fbede4f73a43517db04302f38b16fa2cd4e587082b37b75e20e5", Xa.Special, Za.PlaneStart, [["Planes", "PlaneStart"]], ao, [[[-2, 0, -2], [1, 0, 1]]], null, new R(0, 0.35, 1.35)), new lo("f08710416bdaa3d91d0d43f014e45d421fdb4587a334993bad0056f3dbbcb6bb", Xa.Special, Za.PlaneStartWide, [["Planes", "PlaneStartWide"]], ao, [[[-2, 0, -2], [5, 0, 1]]], null, new R(-10, 0.35, 1.35)), new lo("223fc87c72bb64b58677062ffa08ab7eafd78071bced7c53233606763cd5316b", Xa.Special, Za.Checkpoint, [["Road", "Checkpoint"]], ao, [[[-2, 0, -2], [1, 0, 1]]], {
      type: to.Checkpoint,
      center: [0, 2.2, 0],
      size: [10.5, 3.8, 1]
    }), new lo("82d9a9879cee92c04c8d4ba2e16fc31bb1917a31f5802a3bb5177ca9a5cfee01", Xa.Special, Za.CheckpointWide, [["RoadWide", "CheckpointWide"]], ao, [[[-2, 0, -2], [5, 0, 1]]], {
      type: to.Checkpoint,
      center: [10, 2.2, 0],
      size: [30.6, 3.8, 1]
    }), new lo("fe8946d7f09724b5e11f493eb5c2a5b5e3d502b15beaad003f8134ac63558948", Xa.Special, Za.PlaneCheckpoint, [["Planes", "PlaneCheckpoint"]], ao, [[[-2, 0, -2], [1, 0, 1]]], {
      type: to.Checkpoint,
      center: [0, 2.2, 0],
      size: [18.25, 3.8, 1]
    }), new lo("d486d9b851db35dd44c15f9e0bb3bf582118daf7be514598a19307f61cf46678", Xa.Special, Za.PlaneCheckpointWide, [["Planes", "PlaneCheckpointWide"]], ao, [[[-2, 0, -2], [5, 0, 1]]], {
      type: to.Checkpoint,
      center: [10, 2.2, 0],
      size: [38.25, 3.8, 1]
    }), new lo("c01200d573a3594a6a4cb73ebb600964d653e4a89267d3297f3969220742aa79", Xa.Special, Za.Finish, [["Road", "Finish"]], ao, [[[-2, 0, -2], [1, 0, 1]]], {
      type: to.Finish,
      center: [0, 2.2, 0],
      size: [10.5, 3.8, 2]
    }), new lo("a9cefdff816e94a643210c58582c2809de0e3e0e0478b8d5baabd7fe81f13e73", Xa.Special, Za.FinishWide, [["RoadWide", "FinishWide"]], ao, [[[-2, 0, -2], [5, 0, 1]]], {
      type: to.Finish,
      center: [10, 2.2, 0],
      size: [30.6, 3.8, 2]
    }), new lo("75e5f09fe8a18ecafaf1fb80929173ef0a7dc0b785596bbe0ccd85a934d79578", Xa.Special, Za.PlaneFinish, [["Planes", "PlaneFinish"]], ao, [[[-2, 0, -2], [1, 0, 1]]], {
      type: to.Finish,
      center: [0, 2.2, 0],
      size: [18.25, 3.8, 2]
    }), new lo("5801b3268c75809728c63450d06000c5f6fcfd5d72691902f99d7d19d25e1d78", Xa.Special, Za.PlaneFinishWide, [["Planes", "PlaneFinishWide"]], ao, [[[-2, 0, -2], [5, 0, 1]]], {
      type: to.Finish,
      center: [10, 2.2, 0],
      size: [38.25, 3.8, 2]
    }), new lo("3421096c1986d008da88b5fac64cd4c475603138c9bf8a98ab6d581dda6befa7", Xa.Road, Za.Straight, [["Road", "Straight"]], ao, [[[-2, 0, -2], [1, 0, 1]]]), new lo("bdc3bcdafec9bc26835dc76159f7223da7da5babb3a5770129fa11046c748b69", Xa.Road, Za.StraightPillarBottom, [["Road", "Straight"], ["Pillar", "SurfacePillarBottom"]], ao, [[[-2, 0, -2], [1, 0, 1]]]), new lo("2758e984d87b3170f6618c9c689554ef169fd5f80ea7f0df292ffd69792d414e", Xa.Road, Za.StraightPillarShort, [["Road", "Straight"], ["Pillar", "SurfacePillarShort"]], ao, [[[-2, 0, -2], [1, 0, 1]]]), new lo("fb5a81784022cfc2d3d0007a032976c8dfd066e72a3bc92f671c98c5cca36aaa", Xa.Road, Za.TurnSharp, [["Road", "TurnSharp"]], ao, [[[-2, 0, -2], [1, 0, 1]]]), new lo("3da2e9a93da06b1376c33486f30a5f02d8c2f125f5b7d8b41166049ecd95f269", Xa.Road, Za.TurnSharpPillarBottom, [["Road", "TurnSharp"], ["Pillar", "SurfacePillarBottom"]], ao, [[[-2, 0, -2], [1, 0, 1]]]), new lo("c642122276547382e37dcb857b130088f4dc0d208dc7fdb6055b2a93080a3ffe", Xa.Road, Za.TurnSharpPillarShort, [["Road", "TurnSharp"], ["Pillar", "SurfacePillarShort"]], ao, [[[-2, 0, -2], [1, 0, 1]]]), new lo("7d8d1eed719515ba7e48b5ef4a53b6b4bb2bef42496b6b40d2551230435ecb66", Xa.Road, Za.SlopeUp, [["Road", "SlopeUp"]], ao, [[[-2, 0, -2], [1, 0, 1]], [[-2, 1, -2], [1, 1, -2]]]), new lo("d6d54dbf283f7209032541fc6b924dc879d914f253e391cf8b34dde8354661be", Xa.Road, Za.SlopeUpLong, [["Road", "SlopeUpLong"]], ao, [[[-2, 0, -4], [1, 0, 1]], [[-2, 1, -5], [1, 1, -4]], [[-2, 1, -6], [1, 2, -6]]]), new lo("435e8cf33d28e52f75890cba1cb6529991148afd701f9b40e9ab876c11b2c448", Xa.Road, Za.SlopeDown, [["Road", "SlopeDown"]], ao, [[[-2, 0, -2], [1, 0, 1]], [[-2, 1, 0], [1, 1, 1]]]), new lo("01990158f65e5d499030d8c6d0ce80d34c136189ae1a9430d4260ea7a85e91a9", Xa.Road, Za.SlopeDownLong, [["Road", "SlopeDownLong"]], ao, [[[-2, 0, -2], [1, 0, 0]], [[-2, 1, -1], [1, 1, 5]], [[-2, 2, 3], [1, 2, 5]]]), new lo("f4fe25138e88fc36b796c9251c696f1e44bf77502ee8e4e7d9ed2d8c8be2fd98", Xa.Road, Za.Slope, [["Road", "Slope"]], ao, [[[-2, 0, 0], [1, 0, 1]], [[-2, 1, -2], [1, 1, 0]], [[-2, 2, -2], [1, 2, -2]]]), new lo("2cfd3548dbd3dcf793f1597a1350864b5f14ed46e907d163977b73363896c3d4", Xa.Road, Za.SlopeUpVertical, [["Road", "SlopeUpVertical"]], ao, [[[-2, 0, -1], [1, 0, 1]], [[-2, 1, -1], [1, 1, -1]], [[-2, 1, -2], [1, 3, -2]]]), new lo("3de87fd1ea3a4ffbf353a03e3c90da97e62b03f85d07ad4bc947e9ceed20b7d8", Xa.Road, Za.SlopeToVertical, [["Road", "SlopeToVertical"]], ao, [[[-2, 0, 0], [1, 0, 1]], [[-2, 1, -2], [1, 1, 0]], [[-2, 2, -2], [1, 3, -2]], [[-2, 2, -1], [-2, 2, -1]], [[1, 2, -1], [1, 2, -1]]]), new lo("63628b23e104a3eb3c2ba8189cd408a10fbb6ebcd6fa4359d981e3c3804c13d8", Xa.Road, Za.IntersectionT, [["Road", "IntersectionT"]], ao, [[[-2, 0, -2], [1, 0, 1]]]), new lo("400dc4643653001d283bb13f740593fc2300c547bb4d2a962054ba6aabf3721c", Xa.Road, Za.IntersectionTPillarBottom, [["Road", "IntersectionT"], ["Pillar", "SurfacePillarBottom"]], ao, [[[-2, 0, -2], [1, 0, 1]]]), new lo("60355388650d35fcbddaaac29e0d03bc2ae46db1a05cd23ddd3f2722ec2d409e", Xa.Road, Za.IntersectionTPillarShort, [["Road", "IntersectionT"], ["Pillar", "SurfacePillarShort"]], ao, [[[-2, 0, -2], [1, 0, 1]]]), new lo("74197b3731c2befd03498bf5172859f0b3652f1972c19e43a99bb938769573df", Xa.Road, Za.IntersectionCross, [["Road", "IntersectionCross"]], ao, [[[-2, 0, -2], [1, 0, 1]]]), new lo("464e69b5c4f2667c246ade9ed33fd3e50b49438ed0ab787a086dfe74c217ff6c", Xa.Road, Za.IntersectionCrossPillarBottom, [["Road", "IntersectionCross"], ["Pillar", "SurfacePillarBottom"]], ao, [[[-2, 0, -2], [1, 0, 1]]]), new lo("90004caf354627289265314966f11b5656e6879ca7de10507e6c50cd95254b75", Xa.Road, Za.IntersectionCrossPillarShort, [["Road", "IntersectionCross"], ["Pillar", "SurfacePillarShort"]], ao, [[[-2, 0, -2], [1, 0, 1]]]), new lo("6259b51229152128dc859e1bffc614b60464799c401182dccae58131ee155b1c", Xa.Road, Za.IntersectionY, [["Road", "IntersectionY"]], ao, [[[-6, 0, -10], [-3, 0, -8]], [[-5, 0, -7], [-2, 0, -5]], [[-4, 0, -4], [3, 0, -4]], [[-3, 0, -3], [2, 0, -2]], [[-2, 0, -1], [1, 0, 1]], [[-1, 0, -5], [4, 0, -5]], [[1, 0, -7], [4, 0, -6]], [[2, 0, -10], [5, 0, -8]]]), new lo("846db907fcc382dd462283874fcbceab9c8c06fab6e7654a5cf6811dffcf086e", Xa.Road, Za.IntersectionYLong, [["Road", "IntersectionYLong"]], ao, [[[-6, 0, -14], [-3, 0, -11]], [[-5, 0, -10], [-2, 0, -8]], [[-4, 0, -7], [3, 0, -5]], [[-3, 0, -4], [2, 0, -3]], [[-2, 0, -2], [1, 0, 1]], [[-1, 0, -8], [4, 0, -8]], [[1, 0, -10], [4, 0, -9]], [[2, 0, -14], [5, 0, -11]]]), new lo("48992a178b504f5205eb7613e273f61a2916b16b9b3d402208dcf711b29d20d3", Xa.Road, Za.StraightTilted, [["Road", "Straight", {
      offset: new R(0, 5, 0),
      scale: new R(1, 0.894425810573391, 1),
      quaternion: new D().setFromEuler(new Ft(0, 0, -0.46364760900081))
    }]], ao, [[[-2, 1, -2], [0, 1, 1]], [[0, 0, -2], [1, 0, 1]]]), new lo("d06cc41bda0172e626ad85fca987f426c60b86c3fabd3635d8ddc17f0b38afcd", Xa.Road, Za.ToTiltedLeft, [["Road", "ToTilted", {
      flipX: true,
      offset: new R(0, 5, 0)
    }]], ao, [[[-2, 0, -10], [-1, 0, 1]], [[-2, 1, -3], [1, 1, 1]], [[-1, 1, -10], [1, 1, -4]]]), new lo("36bbe97fc3c199f694f3aefc0ba5ee6e6b3859cf8adeaabab77d53eb921d8979", Xa.Road, Za.ToTiltedRight, [["Road", "ToTilted", {
      offset: new R(0, 5, 0)
    }]], ao, [[[-2, 1, -10], [0, 1, 1]], [[0, 0, -10], [1, 0, 1]], [[1, 1, -3], [1, 1, 1]]]), new lo("fd261825d8261ce05c214e0f12e3640a38f448866ee662136fbdee4f2e0bae22", Xa.RoadTurns, Za.TurnShort, [["Road", "TurnShort"]], ao, [[[-2, 0, 0], [1, 0, 1]], [[-2, 0, -1], [2, 0, -1]], [[-1, 0, -2], [3, 0, -2]], [[-1, 0, -3], [5, 0, -3]], [[0, 0, -4], [5, 0, -4]], [[1, 0, -5], [5, 0, -5]], [[3, 0, -6], [5, 0, -6]]]), new lo("830000386e11f915cc7be618600256c438ace73ed2b6f0f3ec2990d8c25760fd", Xa.RoadTurns, Za.TurnLong, [["Road", "TurnLong"]], ao, [[[-2, 0, -1], [1, 0, 1]], [[-1, 0, -2], [2, 0, -2]], [[-1, 0, -3], [2, 0, -3]], [[-1, 0, -4], [3, 0, -4]], [[0, 0, -5], [4, 0, -5]], [[1, 0, -6], [6, 0, -6]], [[2, 0, -7], [9, 0, -7]], [[3, 0, -8], [9, 0, -8]], [[4, 0, -9], [9, 0, -9]], [[7, 0, -10], [9, 0, -10]]]), new lo("a02b464ce6f6348e13dc90199882e91be6f2220e7e13c79ad46ca9b2032adb01", Xa.RoadTurns, Za.TurnLong2, [["Road", "TurnLong2"]], ao, [[[-2, 0, -2], [1, 0, 1]], [[-1, 0, -4], [2, 0, -3]], [[-1, 0, -5], [3, 0, -5]], [[0, 0, -6], [4, 0, -6]], [[0, 0, -7], [5, 0, -7]], [[1, 0, -8], [6, 0, -8]], [[2, 0, -9], [7, 0, -9]], [[3, 0, -10], [9, 0, -10]], [[4, 0, -11], [13, 0, -11]], [[5, 0, -12], [13, 0, -12]], [[7, 0, -13], [13, 0, -13]], [[10, 0, -14], [13, 0, -14]]]), new lo("a9e794783cdb96e81c95a476f9cbe9e43a5f0357e34d7d278e449a701e44afc3", Xa.RoadTurns, Za.TurnLong3, [["Road", "TurnLong3"]], ao, [[[-2, 0, -2], [1, 0, 1]], [[-1, 0, -4], [2, 0, -3]], [[-1, 0, -5], [2, 0, -5]], [[0, 0, -6], [3, 0, -6]], [[0, 0, -7], [3, 0, -7]], [[0, 0, -8], [4, 0, -8]], [[1, 0, -9], [5, 0, -9]], [[2, 0, -10], [6, 0, -10]], [[2, 0, -11], [7, 0, -11]], [[3, 0, -12], [8, 0, -12]], [[4, 0, -13], [10, 0, -13]], [[5, 0, -14], [13, 0, -14]], [[7, 0, -15], [17, 0, -15]], [[8, 0, -16], [17, 0, -16]], [[11, 0, -17], [17, 0, -17]], [[14, 0, -18], [17, 0, -18]]]), new lo("285f8b84f4dcbb2cbf59be0a54038a01d7cd672cbce96fa0427b589562ebf45e", Xa.RoadTurns, Za.TurnSLeft, [["Road", "TurnS", {
      flipX: true
    }]], ao, [[[-2, 0, -1], [1, 0, 1]], [[-3, 0, -3], [0, 0, -2]], [[-4, 0, -4], [0, 0, -4]], [[-5, 0, -5], [-1, 0, -5]], [[-5, 0, -7], [-2, 0, -6]], [[-6, 0, -10], [-3, 0, -8]]]), new lo("fd7fea58c90ec42781be6192ac4f1086945d48986bc2f0f0702c1ede2c7bd6be", Xa.RoadTurns, Za.TurnSRight, [["Road", "TurnS"]], ao, [[[-2, 0, -1], [1, 0, 1]], [[-1, 0, -3], [2, 0, -2]], [[-1, 0, -4], [3, 0, -4]], [[0, 0, -5], [4, 0, -5]], [[1, 0, -7], [4, 0, -6]], [[2, 0, -10], [5, 0, -8]]]), new lo("190ba45df20d893be69c2f9e92d420e3aca4070340a836bb2062ea3ffdeb83e8", Xa.RoadTurns, Za.TurnSLongLeft, [["Road", "TurnSLong", {
      flipX: true
    }]], ao, [[[-6, 0, -14], [-3, 0, -11]], [[-5, 0, -10], [-2, 0, -8]], [[-4, 0, -7], [-1, 0, -5]], [[-3, 0, -4], [0, 0, -3]], [[-2, 0, -2], [1, 0, 1]], [[-1, 0, -8], [-1, 0, -8]], [[0, 0, -5], [0, 0, -5]]]), new lo("372b17815889b51da18fbcb77434f1a7ea0b93d2d62cd7c1ca9ec2a1854effe5", Xa.RoadTurns, Za.TurnSLongRight, [["Road", "TurnSLong"]], ao, [[[-2, 0, -2], [1, 0, 1]], [[-1, 0, -5], [2, 0, -3]], [[0, 0, -8], [3, 0, -6]], [[1, 0, -10], [4, 0, -9]], [[2, 0, -14], [5, 0, -11]], [[3, 0, -5], [3, 0, -5]], [[4, 0, -8], [4, 0, -8]]]), new lo("26bca19e63867bc0b755ff6fcca65de296c9d1f109f87540103565eb88a0e03d", Xa.RoadTurns, Za.TurnShortLeftWide, [["RoadWide", "TurnShortLeftWide"]], ao, [[[-2, 0, -1], [1, 0, 1]], [[-1, 0, -2], [1, 0, -2]], [[-1, 0, -4], [5, 0, -3]], [[0, 0, -5], [5, 0, -5]], [[1, 0, -6], [5, 0, -6]], [[2, 0, -7], [9, 0, -7]], [[3, 0, -8], [9, 0, -8]], [[4, 0, -9], [9, 0, -9]], [[7, 0, -10], [9, 0, -10]]]), new lo("e3845854f85dafd8cec193bcbecdac6cb79f625066de29524d5c10c5580611c5", Xa.RoadTurns, Za.TurnShortRightWide, [["RoadWide", "TurnShortRightWide"]], ao, [[[-2, 0, 0], [1, 0, 1]], [[-2, 0, -1], [2, 0, -1]], [[-2, 0, -2], [3, 0, -2]], [[2, 0, -6], [5, 0, -3]]]), new lo("dc6088960a65a55c74353a1e7c8a1ca8ec99e683f6273bf666d6909b288bb84b", Xa.RoadTurns, Za.TurnLongLeftWide, [["RoadWide", "TurnLongLeftWide"]], ao, [[[-2, 0, -2], [1, 0, 1]], [[-1, 0, -5], [1, 0, -3]], [[0, 0, -6], [1, 0, -6]], [[0, 0, -7], [5, 0, -7]], [[1, 0, -8], [5, 0, -8]], [[2, 0, -9], [5, 0, -9]], [[3, 0, -10], [5, 0, -10]], [[4, 0, -11], [13, 0, -11]], [[5, 0, -12], [13, 0, -12]], [[7, 0, -13], [13, 0, -13]], [[10, 0, -14], [13, 0, -14]]]), new lo("0bbb8d6c1e4a325e10643cf45546da725c1ea18e92a3a95f753339629a06ef6c", Xa.RoadTurns, Za.TurnLongRightWide, [["RoadWide", "TurnLongRightWide"]], ao, [[[-2, 0, -1], [1, 0, 1]], [[-2, 0, -3], [2, 0, -2]], [[-2, 0, -4], [3, 0, -4]], [[-2, 0, -5], [4, 0, -5]], [[-2, 0, -6], [6, 0, -6]], [[2, 0, -10], [9, 0, -7]]]), new lo("3d4972c41e0e1c39b31b98c8b4ba3377477c4370fbd32cbf5a92c88b46fb7614", Xa.RoadTurns, Za.TurnShortTilted, [["Road", "TurnShortTilted"]], ao, [[[-2, 1, 0], [0, 1, 1]], [[-1, 1, -2], [0, 1, -1]], [[0, 0, -2], [2, 0, -1]], [[0, 0, 0], [1, 0, 1]], [[0, 1, -4], [2, 1, -3]], [[1, 0, -3], [5, 0, -3]], [[1, 1, -2], [1, 1, -2]], [[2, 0, -4], [5, 0, -4]], [[2, 1, -5], [5, 1, -5]], [[3, 0, -2], [3, 0, -2]], [[3, 1, -4], [5, 1, -4]], [[4, 1, -6], [5, 1, -6]]]), new lo("5d48577ff2562e2abfe287bc0519dd0de692f3665e5596b3ef629069a59a21ab", Xa.RoadTurns, Za.TurnLongTilted, [["Road", "TurnLongTilted"]], ao, [[[-2, 1, 0], [0, 1, 1]], [[-1, 1, -3], [0, 1, -1]], [[0, 0, -3], [2, 0, -2]], [[0, 0, -1], [1, 0, 1]], [[0, 1, -5], [2, 1, -4]], [[1, 0, -4], [3, 0, -4]], [[1, 1, -6], [4, 1, -6]], [[1, 1, -3], [1, 1, -3]], [[2, 0, -5], [4, 0, -5]], [[2, 1, -7], [5, 1, -7]], [[3, 0, -6], [6, 0, -6]], [[3, 1, -8], [9, 1, -8]], [[4, 0, -7], [9, 0, -7]], [[5, 0, -8], [9, 0, -8]], [[5, 1, -9], [9, 1, -9]], [[8, 1, -10], [9, 1, -10]]]), new lo("abf9d95b8b0bf58bf4fe8df599e4ccee1b527c7c63f15636374742c1ebc2b93a", Xa.RoadTurns, Za.TurnLong2Tilted, [["Road", "TurnLong2Tilted"]], ao, [[[-2, 1, -1], [0, 1, 1]], [[-1, 1, -4], [0, 1, -2]], [[0, 0, -3], [1, 0, 1]], [[0, 1, -6], [1, 1, -5]], [[1, 0, -5], [2, 0, -4]], [[1, 1, -8], [3, 1, -7]], [[1, 1, -4], [1, 1, -4]], [[2, 0, -7], [4, 0, -6]], [[2, 0, -3], [2, 0, -3]], [[2, 1, -9], [5, 1, -9]], [[2, 1, -6], [2, 1, -6]], [[3, 0, -8], [6, 0, -8]], [[3, 0, -5], [3, 0, -5]], [[3, 1, -10], [6, 1, -10]], [[4, 0, -9], [7, 0, -9]], [[4, 1, -11], [8, 1, -11]], [[4, 1, -8], [4, 1, -8]], [[5, 0, -10], [9, 0, -10]], [[6, 1, -12], [13, 1, -12]], [[7, 0, -11], [13, 0, -11]], [[8, 1, -13], [13, 1, -13]], [[9, 0, -12], [13, 0, -12]], [[11, 1, -14], [13, 1, -14]]]), new lo("f64a25f9f9306a760e247f68ce37404d175462993e146853ce1f1b7ac7353bef", Xa.RoadTurns, Za.TurnLong3Tilted, [["Road", "TurnLong3Tilted"]], ao, [[[-2, 1, -1], [0, 1, 1]], [[-1, 1, -5], [1, 1, -4]], [[-1, 1, -3], [0, 1, -2]], [[0, 0, -4], [1, 0, 1]], [[0, 1, -7], [1, 1, -6]], [[1, 0, -7], [3, 0, -6]], [[1, 0, -5], [2, 0, -5]], [[1, 1, -9], [3, 1, -8]], [[2, 0, -8], [4, 0, -8]], [[2, 0, -4], [2, 0, -4]], [[2, 1, -10], [4, 1, -10]], [[2, 1, -7], [2, 1, -7]], [[3, 0, -10], [5, 0, -9]], [[3, 1, -12], [5, 1, -11]], [[4, 0, -11], [7, 0, -11]], [[4, 1, -13], [8, 1, -13]], [[5, 0, -12], [8, 0, -12]], [[6, 0, -13], [10, 0, -13]], [[6, 0, -10], [6, 0, -10]], [[6, 1, -14], [9, 1, -14]], [[6, 1, -12], [6, 1, -12]], [[7, 1, -15], [11, 1, -15]], [[8, 0, -14], [12, 0, -14]], [[9, 0, -15], [17, 0, -15]], [[9, 1, -16], [17, 1, -16]], [[11, 1, -17], [17, 1, -17]], [[12, 0, -16], [17, 0, -16]], [[15, 1, -18], [17, 1, -18]]]), new lo("2af8aa6050028dd6ee69b7150e83a6d8819e1848a7b1c782848d3f6448c5091a", Xa.RoadWide, Za.ToWideMiddle, [["RoadWide", "ToWideMiddle"]], ao, [[[-2, 0, -2], [1, 0, 1]]]), new lo("26341cfe6bec34f46b10ffcd9a7706a8156b9ac41ed2cdfd166f9f8d3e9bc8f3", Xa.RoadWide, Za.ToWideLeft, [["RoadWide", "ToWideSide", {
      flipX: true
    }]], ao, [[[-2, 0, -2], [1, 0, 1]]]), new lo("3f82ebd6c72110b532a20673f8b54c7b25ae5988a51d3793bf383fea8ffcffc3", Xa.RoadWide, Za.ToWideRight, [["RoadWide", "ToWideSide"]], ao, [[[-2, 0, -2], [1, 0, 1]]]), new lo("f5cecce9870f41f8cba7a9fbe631c315370a7a82824d04977ec857dbb1dfed29", Xa.RoadWide, Za.ToWideDouble, [["RoadWide", "ToWideDouble"]], ao, [[[-2, 0, -2], [1, 0, 1]]]), new lo("99dc726611397f81b47459d32c7bfb8232322d1ca976ba9a3e71cc15451d8cfb", Xa.RoadWide, Za.ToWideDiagonal, [["RoadWide", "ToWideDiagonal"]], ao, [[[-2, 0, -2], [1, 0, 1]]]), new lo("47d7e3fb334681911e122babef127881a36a763fb22176854114495802d5ce84", Xa.RoadWide, Za.StraightWide, [["RoadWide", "StraightWide"]], ao, [[[-2, 0, -2], [1, 0, 1]]]), new lo("521adc95ed5a4809eeff7eec872c3d6449e4d6a7e4941d672f1e06a50a6615de", Xa.RoadWide, Za.InnerCornerWide, [["RoadWide", "InnerCornerWide"]], ao, [[[-2, 0, -2], [1, 0, 1]]]), new lo("d82274b362794e3c1772510002d5015dde345f1e72dd675c8bac41cf2331398b", Xa.RoadWide, Za.OuterCornerWide, [["RoadWide", "OuterCornerWide"]], ao, [[[-2, 0, -2], [1, 0, 1]]]), new lo("8c2541fab7e5e930b9280b3ef1e5bfc3092c17901c87457515df577f625c4303", Xa.RoadWide, Za.SlopeUpLeftWide, [["RoadWide", "SlopeUpWide", {
      flipX: true
    }]], ao, [[[-2, 0, -2], [1, 0, 1]], [[-2, 1, -2], [1, 1, -2]]]), new lo("6c908d749b8150b47d96c2d0c493ed8bf125035a250025fbe94b6078503bcfce", Xa.RoadWide, Za.SlopeUpRightWide, [["RoadWide", "SlopeUpWide"]], ao, [[[-2, 0, -2], [1, 0, 1]], [[-2, 1, -2], [1, 1, -2]]]), new lo("676c22b45763bd86c8bb8d34a2fa7a38abde40618892742de598d866b4925b42", Xa.RoadWide, Za.SlopeUpLongLeftWide, [["RoadWide", "SlopeUpLongWide", {
      flipX: true
    }]], ao, [[[-2, 0, -4], [1, 0, 1]], [[-2, 1, -5], [1, 1, -4]], [[-2, 1, -6], [1, 2, -6]]]), new lo("e783f085e8ec313dcd1bbb0849fe5e669ccbb075baac4d289fd442a9cd4ba562", Xa.RoadWide, Za.SlopeUpLongRightWide, [["RoadWide", "SlopeUpLongWide"]], ao, [[[-2, 0, -4], [1, 0, 1]], [[-2, 1, -5], [1, 1, -4]], [[-2, 1, -6], [1, 2, -6]]]), new lo("4229bf84ab08f86a24d24b610a8225885f3cb68726ef74f4b314d7705c9eb2da", Xa.RoadWide, Za.SlopeDownLeftWide, [["RoadWide", "SlopeDownWide", {
      flipX: true
    }]], ao, [[[-2, 0, -2], [1, 0, 1]], [[-2, 1, 0], [1, 1, 1]]]), new lo("a141744b0ffb4df202f230f1f97443f4198032aacf94e7259b7b0127df6bd838", Xa.RoadWide, Za.SlopeDownRightWide, [["RoadWide", "SlopeDownWide"]], ao, [[[-2, 0, -2], [1, 0, 1]], [[-2, 1, 0], [1, 1, 1]]]), new lo("0fd78ec94545d4f7c41515ab7dafafb331b146118e3a14835fb6e6c9cb12e4af", Xa.RoadWide, Za.SlopeDownLongLeftWide, [["RoadWide", "SlopeDownLongWide", {
      flipX: true
    }]], ao, [[[-2, 0, -2], [1, 0, 0]], [[-2, 1, -1], [1, 1, 5]], [[-2, 2, 3], [1, 2, 5]]]), new lo("997f1fd3e53bc438066f32e6ea33300a8371b297c7d74f4c25f48f3370fd5752", Xa.RoadWide, Za.SlopeDownLongRightWide, [["RoadWide", "SlopeDownLongWide"]], ao, [[[-2, 0, -2], [1, 0, 0]], [[-2, 1, -1], [1, 1, 5]], [[-2, 2, 3], [1, 2, 5]]]), new lo("bde16df3b12aab766167803dc302428bc8d3a4f95efcdeb8660b773e00e6ecb0", Xa.RoadWide, Za.SlopeLeftWide, [["RoadWide", "SlopeWide", {
      flipX: true
    }]], ao, [[[-2, 0, 0], [1, 0, 1]], [[-2, 1, -2], [1, 1, 0]], [[-2, 2, -2], [1, 2, -2]]]), new lo("1524c4b16a08292aa84fbe0f0369d09453e75061fc39a9a0503e6caf4843a301", Xa.RoadWide, Za.SlopeRightWide, [["RoadWide", "SlopeWide"]], ao, [[[-2, 0, 0], [1, 0, 1]], [[-2, 1, -2], [1, 1, 0]], [[-2, 2, -2], [1, 2, -2]]]), new lo("b598ff14bda99600434b24a619132fec4bffcc535483b9b57b0c8c09c1be1f1b", Xa.RoadWide, Za.SlopeUpVerticalLeftWide, [["RoadWide", "SlopeUpVerticalWide"]], ao, [[[-2, 0, -1], [1, 0, 1]], [[-2, 1, -1], [1, 1, -1]], [[-2, 1, -2], [1, 3, -2]]]), new lo("4e0275d3a01eaca6ec5118b8b816ed292cb7172710cf9b7801068424ab684b22", Xa.RoadWide, Za.SlopeUpVerticalRightWide, [["RoadWide", "SlopeUpVerticalWide", {
      flipX: true
    }]], ao, [[[-2, 0, -1], [1, 0, 1]], [[-2, 1, -1], [1, 1, -1]], [[-2, 1, -2], [1, 3, -2]]]), new lo("feff879bfa80db0dc58d93fe8e34ca793aa508002df55a27cba2d99cfefa4691", Xa.RoadWide, Za.SlopeToVerticalLeftWide, [["RoadWide", "SlopeToVerticalWide", {
      flipX: true
    }]], ao, [[[-2, 0, 0], [1, 0, 1]], [[-2, 1, -2], [1, 1, 0]], [[-2, 2, -2], [1, 3, -2]], [[-2, 2, -1], [-2, 2, -1]]]), new lo("88a9c7425f1e5b287ce571f744348a4a330409fced83f13b5a1c7e8e51e9ead4", Xa.RoadWide, Za.SlopeToVerticalRightWide, [["RoadWide", "SlopeToVerticalWide"]], ao, [[[-2, 0, 0], [1, 0, 1]], [[-2, 1, -2], [1, 1, 0]], [[-2, 2, -2], [1, 3, -2]], [[1, 2, -1], [1, 2, -1]]]), new lo("896b47675cc2ff58494979168f6fd36c27c43da29aed6a52fdf80f054630166a", Xa.Plane, Za.Plane, [["Planes", "Plane"]], ao, [[[-2, 0, -2], [1, 0, 1]]]), new lo("dc9afb98a8bb998d3b76c3563385e58c1749e56ff43fbc7577b1f57ba8360702", Xa.Plane, Za.PlanePillarBottom, [["Planes", "Plane"], ["Pillar", "SurfacePillarBottom"]], ao, [[[-2, 0, -2], [1, 0, 1]]]), new lo("f59ad95edd26814236ab30b73f6f4f68003885ef150201a4ace14b832abcf438", Xa.Plane, Za.PlanePillarShort, [["Planes", "Plane"], ["Pillar", "SurfacePillarShort"]], ao, [[[-2, 0, -2], [1, 0, 1]]]), new lo("48247a66b232461083fa2aa36644e7e8779f5b426d474efd375ee7d21d009c9a", Xa.Plane, Za.HalfPlane, [["Planes", "HalfPlane"]], ao, [[[-2, 0, 1], [1, 0, 1]], [[-2, 0, 0], [0, 0, 0]], [[-2, 0, -1], [-1, 0, -1]], [[-2, 0, -2], [-2, 0, -2]]]), new lo("eac8530d1a025291674bf34b206f75700dc8626012d8d33ed398f7aed746dac8", Xa.Plane, Za.QuarterPlane, [["Planes", "QuarterPlane"]], ao, [[[-2, 0, 1], [-2, 0, 1]], [[-2, 0, -1], [-1, 0, 0]], [[-2, 0, -2], [-2, 0, -2]]]), new lo("f6809dcb8440d3c6043bfd91eb84add7facf61565ce4fd6c2aa73a5a9da32934", Xa.Plane, Za.PlaneCorner, [["Planes", "PlaneCorner"]], ao, [[[-2, 0, -1], [1, 0, 1]], [[-1, 0, -2], [1, 0, -2]]]), new lo("2dda4d3801c9cd4c117dc3c8239bea28cafe70ef2127986c2d6b455744fc8019", Xa.Plane, Za.PlaneSlopeUp, [["Planes", "PlaneSlopeUp"]], ao, [[[-2, 0, -2], [1, 0, 1]], [[-2, 1, -2], [1, 1, -2]]]), new lo("ff295081bdf76f76ad286007c813d37b5af22b06f337ad8fe43cddbd221255b4", Xa.Plane, Za.PlaneSlopeUpLong, [["Planes", "PlaneSlopeUpLong"]], ao, [[[-2, 0, -4], [1, 0, 1]], [[-2, 1, -5], [1, 1, -4]], [[-2, 1, -6], [1, 2, -6]]]), new lo("f1ac897525aa3fcae4fb678ca681bf559d993517b5f4f323b25789b64fe3f477", Xa.Plane, Za.PlaneSlopeDown, [["Planes", "PlaneSlopeDown"]], ao, [[[-2, 0, -2], [1, 0, 1]], [[-2, 1, 0], [1, 1, 1]]]), new lo("549dbef42b80ca6cfa7eecb1397918b2fc9ccd15ceb1c494c41944b8a0d50d7b", Xa.Plane, Za.PlaneSlopeDownLong, [["Planes", "PlaneSlopeDownLong"]], ao, [[[-2, 0, -2], [1, 0, 0]], [[-2, 1, -1], [1, 1, 5]], [[-2, 2, 3], [1, 2, 5]]]), new lo("2e9a2af92aea4a70361adba95230f3126911aa357299c0fe6c1e0611945961c0", Xa.Plane, Za.PlaneSlope, [["Planes", "PlaneSlope"]], ao, [[[-2, 0, 0], [1, 0, 1]], [[-2, 1, -2], [1, 1, 0]], [[-2, 2, -2], [1, 2, -2]]]), new lo("76408f7250687477995d65c39e60554466c6b96376d2ff0c9c9c497e1ee823bf", Xa.Plane, Za.HalfPlaneSlopeBottomLeft, [["Planes", "HalfPlaneSlopeBottom"]], ao, [[[-2, 0, 0], [0, 0, 1]], [[-2, 1, -2], [-2, 1, 0]], [[-2, 2, -2], [-2, 2, -2]], [[-1, 1, -1], [-1, 1, 0]], [[0, 1, 0], [0, 1, 0]], [[1, 0, 1], [1, 0, 1]]]), new lo("bb77b8de31e4d193112947bb0c3d9d62985b10d8982acaaf58df54d483863873", Xa.Plane, Za.HalfPlaneSlopeBottomRight, [["Planes", "HalfPlaneSlopeBottom", {
      flipX: true
    }]], ao, [[[-2, 0, 1], [1, 0, 1]], [[-1, 0, 0], [1, 1, 0]], [[0, 1, -1], [1, 1, -1]], [[1, 1, -2], [1, 2, -2]]]), new lo("6984589cd1276691a8c2161fec8205194ea7545c8962b3f61f672ec02cf534f9", Xa.Plane, Za.HalfPlaneSlopeTopLeft, [["Planes", "HalfPlaneSlopeTop", {
      flipX: true
    }]], ao, [[[-2, 0, 0], [-1, 1, 0]], [[-2, 0, 1], [-2, 0, 1]], [[-2, 1, -2], [0, 1, -1]], [[-2, 2, -2], [1, 2, -2]], [[1, 1, -2], [1, 1, -2]]]), new lo("992d36738e4882dd1da1ca3c2a396c79ae7fcb2ba47649de7cb0f888f18e04b3", Xa.Plane, Za.HalfPlaneSlopeTopRight, [["Planes", "HalfPlaneSlopeTop"]], ao, [[[-2, 1, -2], [1, 2, -2]], [[-1, 1, -1], [1, 1, -1]], [[0, 0, 0], [1, 1, 0]], [[1, 0, 1], [1, 0, 1]]]), new lo("ba0d6ec33647740bf4c60e542d1758095afa3ef451bdaec76c783dd32116e4cb", Xa.Plane, Za.PlaneSlopeVerticalBottom, [["Planes", "PlaneSlopeVertical"]], ao, [[[-2, 0, -1], [1, 0, 1]], [[-2, 1, -1], [1, 1, -1]], [[-2, 1, -2], [1, 3, -2]]]), new lo("6f750b74664474a57a22f22b4f8b7f2fef330eb00f9041385ec0acfbc2b09302", Xa.Plane, Za.PlaneSlopeToVertical, [["Planes", "PlaneSlopeToVertical"]], ao, [[[-2, 0, 0], [1, 0, 1]], [[-2, 1, -2], [1, 1, 0]], [[-2, 2, -2], [1, 3, -2]]]), new lo("5f6d1ece085d450643f1399af53673dcc6bbbf413094d8dd5ee6816d80e1c8ae", Xa.Plane, Za.PlaneBridge, [["Planes", "PlaneBridge"]], ao, [[[-1, 0, -2], [0, 0, 1]]]), new lo("32b91fc4cdf95f5b7a490d81058522bae14741601dd44c73cc110121aa1dd6e6", Xa.Plane, Za.PlaneBridgeCorner, [["Planes", "PlaneBridgeCorner"]], ao, [[[-1, 0, -1], [0, 0, 1]], [[1, 0, -1], [1, 0, 0]]]), new lo("2db870b1821fb655437bd0527569d5a6843718fa0775682701437432265a1a88", Xa.Plane, Za.PlaneBridgeIntersectionT, [["Planes", "PlaneBridgeIntersectionT"]], ao, [[[-1, 0, -1], [0, 0, 1]], [[1, 0, -1], [1, 0, 0]], [[-2, 0, -1], [-2, 0, 0]]]), new lo("33aa0e7524b74dcdae4aed89856c09d25248c4cab8f70dcc31b347f0a00fcb52", Xa.Plane, Za.PlaneBridgeIntersectionCross, [["Planes", "PlaneBridgeIntersectionCross"]], ao, [[[-1, 0, -1], [0, 0, 1]], [[1, 0, -1], [1, 0, 0]], [[-2, 0, -1], [-2, 0, 0]], [[-1, 0, -2], [0, 0, -2]]]), new lo("bd7cc4ab180fc0a6936fef828ae3a91566b3dd621b888fbcc57c9ac11dcb713b", Xa.Plane, Za.PlaneWall, [["Planes", "PlaneWall"]], ao, [[[-2, 0, 1], [1, 0, 1]]]), new lo("d92568164028bb2e65799abd9dc6ba66cfe8a28515c09fbe5ac175f5966af66a", Xa.Plane, Za.PlaneWallCorner, [["Planes", "PlaneWallCorner"]], ao, [[[-2, 0, 1], [1, 0, 1]], [[1, 0, -2], [1, 0, 0]]]), new lo("792ab5a6f0e2bf8e556575ef12731ec30755855d4394f98eb4ca7ec8b713933c", Xa.Plane, Za.PlaneWallInnerCorner, [["Planes", "PlaneWallInnerCorner"]], ao, [[[1, 0, 1], [1, 0, 1]]]), new lo("9f1a6ce37a3b0601346f4d30d8a81075c8eefd3d873cbb24fbe5cf6d5da3093f", Xa.Plane, Za.PlaneWallSlopeLeft, [["Planes", "PlaneWallSlope"]], ao, [[[1, 0, 0], [1, 1, 1]], [[1, 1, -2], [1, 2, -1]]]), new lo("0a28443c2fc0e51527b4d3a5a0d98302fc368839b614db5c7d90f151a97c7542", Xa.Plane, Za.PlaneWallSlopeRight, [["Planes", "PlaneWallSlope", {
      flipX: true
    }]], ao, [[[-2, 0, 0], [-2, 1, 1]], [[-2, 1, -2], [-2, 2, -1]]]), new lo("b55dca4b19a0f61db43849e444eaa1d9289519ef7e5a4b6e02c7c02ba80f84f4", Xa.Plane, Za.PlaneWallSlopeUpLeft, [["Planes", "PlaneWallSlopeUp"]], ao, [[[1, 0, -2], [1, 1, 1]]]), new lo("70c5288fe8e74957d820cc34995566ad26478e00e5314e36e836e0f803b38061", Xa.Plane, Za.PlaneWallSlopeUpRight, [["Planes", "PlaneWallSlopeUp", {
      flipX: true
    }]], ao, [[[-2, 0, -2], [-2, 1, 1]]]), new lo("9b16670e084f2e054c61f253abb7b24e29e0b11800de23b9a2877f17c33dd4a9", Xa.Plane, Za.PlaneWallSlopeDownLeft, [["Planes", "PlaneWallSlopeDown"]], ao, [[[1, 0, -2], [1, 1, 1]]]), new lo("bf441ad2d47b48000b7535e2dd39c209257f2614363494827200330dfea97e11", Xa.Plane, Za.PlaneWallSlopeDownRight, [["Planes", "PlaneWallSlopeDown", {
      flipX: true
    }]], ao, [[[-2, 0, -2], [-2, 1, 1]]]), new lo("8d561c6d1e116c92c5f9ecb9715e57b510dfd38d8e4ba2183429d28238c6ac83", Xa.Plane, Za.PlaneWallSlopeUpLongLeft, [["Planes", "PlaneWallSlopeUpLong"]], ao, [[[1, 0, -4], [1, 1, 1]], [[1, 1, -6], [1, 2, -5]], [[1, 2, -4], [1, 2, -4]]]), new lo("ab013301c7b3b91cf48ae1a8d47842f85ac688677cc14e0baa3b3a5a3ce0bb3b", Xa.Plane, Za.PlaneWallSlopeUpLongRight, [["Planes", "PlaneWallSlopeUpLong", {
      flipX: true
    }]], ao, [[[-2, 0, -4], [-2, 1, 1]], [[-2, 1, -6], [-2, 2, -5]], [[-2, 2, -4], [-2, 2, -4]]]), new lo("79fc30fd9032052b23a30f03fde4e4932b4a3a6a57c1e2b64631fb5d6c5f1052", Xa.Plane, Za.PlaneWallSlopeDownLongLeft, [["Planes", "PlaneWallSlopeDownLong"]], ao, [[[1, 0, -2], [1, 1, 0]], [[1, 1, 1], [1, 2, 5]], [[1, 2, 0], [1, 2, 0]]]), new lo("5aeda192c725700634faf36a401b9bf0b4df869b311da546080569f66c741a66", Xa.Plane, Za.PlaneWallSlopeDownLongRight, [["Planes", "PlaneWallSlopeDownLong", {
      flipX: true
    }]], ao, [[[-2, 0, -2], [-2, 1, 0]], [[-2, 1, 1], [-2, 2, 5]], [[-2, 2, 0], [-2, 2, 0]]]), new lo("de0d588c4b2fe6b32d72a7e0e2984285955f805ccb86d3c269f7155401cd6b20", Xa.Block, Za.Block, [["Blocks", "Block"]], oo, [[[-2, 0, -2], [1, 0, 1]]]), new lo("1ce6b585c0e99d71877fefe015ff16336ae62eb0caebeca62dd09d836092d7b6", Xa.Block, Za.HalfBlock, [["Blocks", "HalfBlock"]], oo, [[[-2, 0, 1], [1, 0, 1]], [[-2, 0, 0], [0, 0, 0]], [[-2, 0, -1], [-1, 0, -1]], [[-2, 0, -2], [-2, 0, -2]]]), new lo("0d5f0609c3c98f687d55d3a73313225c1642f6285ddaca3ed536db742c85958d", Xa.Block, Za.QuarterBlock, [["Blocks", "QuarterBlock"]], oo, [[[-2, 0, 1], [-2, 0, 1]], [[-2, 0, -1], [-1, 0, 0]], [[-2, 0, -2], [-2, 0, -2]]]), new lo("18fc1c569c6fc04f95f10174143d19e7a9ea4e387302363f4ae60883c1acd3f0", Xa.Block, Za.BlockSlopedDown, [["Blocks", "BlockSlopedDown"]], oo, [[[-2, 0, -2], [1, 0, -1]], [[-2, 1, -2], [1, 1, 1]]]), new lo("22dd5b2804c88994a4d283cb822f47de3c72f82376e4c9332d39feae85206c0f", Xa.Block, Za.BlockSlopedDownInnerCorner, [["Blocks", "BlockSlopedDownInnerCorner"]], oo, [[[-2, 0, -2], [-1, 0, 1]], [[0, 0, -2], [1, 0, -1]], [[-2, 1, -2], [1, 1, 1]]]), new lo("81a71b4cc6ef8520f20fd738457abc31b04258c97f9862f70190fd2a0ba91382", Xa.Block, Za.BlockSlopedDownOuterCorner, [["Blocks", "BlockSlopedDownOuterCorner"]], oo, [[[-2, 0, -2], [-1, 0, -1]], [[-2, 1, -2], [1, 1, 1]]]), new lo("f4e19d3bc49994a85fecd187b76c21d258e7f30f0506d90bc6f173336e11627d", Xa.Block, Za.BlockSlopedUp, [["Blocks", "BlockSlopedUp"]], oo, [[[-2, 0, -2], [1, 0, 1]], [[-2, 1, -2], [1, 1, -1]]]), new lo("fd9309468e97131bbbd1404fac34a7137cb176327789b955c1aea30267e1cded", Xa.Block, Za.BlockSlopedUpInnerCorner, [["Blocks", "BlockSlopedUpInnerCorner"]], oo, [[[-2, 1, -2], [-1, 1, 1]], [[0, 1, -2], [1, 1, -1]], [[-2, 0, -2], [1, 0, 1]]]), new lo("1321fb07ece1b80b99dc4671b52673ac028fbf43322e9e652ad633ff6afac21b", Xa.Block, Za.BlockSlopedUpOuterCorner, [["Blocks", "BlockSlopedUpOuterCorner"]], oo, [[[-2, 1, -2], [-1, 1, -1]], [[-2, 0, -2], [1, 0, 1]]]), new lo("84d11f91b9410afafd2801d85bcfd87f9390272180e3f49ab77d108e328dbd1d", Xa.Block, Za.HalfBlockSlopeBottomLeft, [["Blocks", "HalfBlockSlopeBottom"]], oo, [[[-2, 0, -2], [-2, 0, 1]], [[-2, 1, -2], [-2, 1, -1]], [[-1, 0, -1], [-1, 0, 1]], [[-1, 1, -1], [-1, 1, -1]], [[0, 0, 0], [0, 0, 1]], [[1, 0, 1], [1, 0, 1]]]), new lo("84d77134750b28ec4d4e66d37052a5d83cd97e18144e1b849155976d35418d3b", Xa.Block, Za.HalfBlockSlopeBottomRight, [["Blocks", "HalfBlockSlopeBottom", {
      flipX: true
    }]], oo, [[[-2, 0, 1], [1, 0, 1]], [[-1, 0, 0], [1, 0, 0]], [[0, 0, -1], [1, 1, -1]], [[1, 0, -2], [1, 1, -2]]]), new lo("185b3f1a8ed7f7b1eb8da5e6911a181560a3dab738e59f01cb54af58391eb223", Xa.Block, Za.HalfBlockSlopeTopLeft, [["Blocks", "HalfBlockSlopeTop", {
      flipX: true
    }]], oo, [[[-2, 0, -2], [0, 1, -1]], [[-2, 0, 0], [-1, 0, 0]], [[-2, 0, 1], [-2, 0, 1]], [[1, 0, -2], [1, 1, -2]]]), new lo("813b1bbe0eebb47629848d50e815cd28760b3e6c56e549a4a53faea4b33726ab", Xa.Block, Za.HalfBlockSlopeTopRight, [["Blocks", "HalfBlockSlopeTop"]], oo, [[[-2, 0, -2], [1, 1, -2]], [[-1, 0, -1], [1, 1, -1]], [[0, 0, 0], [1, 0, 0]], [[1, 0, 1], [1, 0, 1]]]), new lo("b97c17388fc38139f2f5a98a36d94831095f79db709dd97748ad2904bc54d689", Xa.Block, Za.BlockSlopeDown, [["Blocks", "BlockSlopeDown"]], oo, [[[-2, 0, -2], [1, 0, 1]]]), new lo("50276826bbfb9fcb11a8519b8dae8a2b1cf82817d5431418d9a376664261be82", Xa.Block, Za.BlockSlopeUp, [["Blocks", "BlockSlopeUp"]], oo, [[[-2, 0, -2], [1, 0, 1]]]), new lo("63fd3032796397f8e25669c1c1d3fc97b8ec0e5fc88bfcb5c00a2a2c2b517888", Xa.Block, Za.BlockSlopeDownLong, [["Blocks", "BlockSlopeDownLong"]], oo, [[[-2, 0, -2], [1, 0, 5]], [[-2, 1, 0], [1, 1, 5]]]), new lo("2d29131222a8d891b4350e6a2f335b114e001cf22e4e2f170dc9b86c4b2fd325", Xa.Block, Za.BlockSlopeUpLong, [["Blocks", "BlockSlopeUpLong"]], oo, [[[-2, 0, -6], [1, 0, 1]], [[-2, 1, -6], [1, 1, -4]]]), new lo("0bbcd96c91b69e6e8005bfae5b64455b0d6510cb1595f3fca7f77c86ddda4560", Xa.Block, Za.BlockSlopeVerticalTop, [["Blocks", "BlockSlopeVertical", {
      flipY: true
    }]], oo, [[[-2, 3, -2], [1, 3, 1]], [[-2, 2, -2], [1, 2, -1]], [[-2, 0, -2], [1, 1, -2]]]), new lo("e81a123c0be3f8f168fb584d53e8aa038785569bbf2cd1c1cead2272889591e0", Xa.Block, Za.BlockSlopeVerticalBottom, [["Blocks", "BlockSlopeVertical"]], oo, [[[-2, 0, -2], [1, 0, 1]], [[-2, 1, -2], [1, 1, -1]], [[-2, 2, -2], [1, 3, -2]]]), new lo("39c8bfd9a12ba536f34db14b3ac24afd133f3dd67ecc30f8ab90138a5a545520", Xa.Block, Za.BlockSlopeToVertical, [["Blocks", "BlockSlopeToVertical"]], oo, [[[-2, 0, -2], [1, 0, 1]], [[-2, 1, -2], [1, 1, -1]], [[-2, 2, -2], [1, 3, -2]]]), new lo("3a2f05b1c2c2fd976997fa473f1adb3ba14495701dc5a998f8697798384c6946", Xa.Block, Za.BlockSlopeVerticalCornerTop, [["Blocks", "BlockSlopeVerticalCornerBottom", {
      flipY: true
    }]], oo, [[[-2, 3, -2], [1, 3, 1]], [[-2, 2, -2], [0, 2, 0]], [[1, 2, -2], [1, 2, -1]], [[-2, 2, 1], [-1, 2, 1]], [[-2, 1, -2], [-1, 1, -1]], [[-2, 1, 0], [-1, 1, 0]], [[0, 1, -2], [0, 1, -1]], [[1, 1, -2], [1, 1, -2]], [[-2, 1, 1], [-2, 1, 1]], [[-2, 0, -2], [-1, 0, -1]], [[-2, 0, 0], [-2, 0, 1]], [[0, 0, -2], [1, 0, -2]]]), new lo("3e4fa43e69aa1dbee584e16451a95a16229bba8d638df2bf6f6c9ffb3a9629c9", Xa.Block, Za.BlockInnerCorner, [["Blocks", "BlockInnerCorner"]], oo, [[[-2, 0, 0], [-2, 0, 1]], [[-2, 0, -2], [-1, 0, -1]], [[0, 0, -2], [1, 0, -2]]]), new lo("5e3b086f679fc9ff779abba9a7ea0db59a0a4dbd0540cd4aa501e2bfea1673f5", Xa.Block, Za.BlockOuterCorner, [["Blocks", "BlockOuterCorner"]], oo, [[[-2, 0, -1], [1, 0, 1]], [[-1, 0, -2], [1, 0, -2]]]), new lo("cc9c95eef56def4cf013e4ac85b8013a2b4f4b4346f1f5dd41fa017de763ef17", Xa.Block, Za.BlockSlopeVerticalCornerBottom, [["Blocks", "BlockSlopeVerticalCornerBottom"]], oo, [[[-2, 0, -2], [1, 0, 1]], [[-2, 1, -2], [0, 1, 0]], [[1, 1, -2], [1, 1, -1]], [[-2, 1, 1], [-1, 1, 1]], [[-2, 2, -2], [-1, 2, -1]], [[-2, 2, 0], [-1, 2, 0]], [[0, 2, -2], [0, 2, -1]], [[1, 2, -2], [1, 2, -2]], [[-2, 2, 1], [-2, 2, 1]], [[-2, 3, -2], [-1, 3, -1]], [[-2, 3, 0], [-2, 3, 1]], [[0, 3, -2], [1, 3, -2]]]), new lo("e4c82c8e512d52269cb6588fa34b06c179340ea40e71f74cbadadc7e8353f5a2", Xa.Block, Za.BlockSlopeVerticalInnerCornerTop, [["Blocks", "BlockSlopeVerticalInnerCorner", {
      flipY: true
    }]], oo, [[[-2, 3, -2], [0, 3, 1]], [[1, 3, -2], [1, 3, 0]], [[-2, 2, -2], [-2, 2, -1]], [[-1, 2, -2], [-1, 2, -2]], [[-2, 0, -2], [-2, 1, -2]]]), new lo("926fdc6e82ecd709cc535faea6bb8778c6e2e91edb39eb6ae6308076dca2ed18", Xa.Block, Za.BlockSlopeVerticalInnerCornerBottom, [["Blocks", "BlockSlopeVerticalInnerCorner"]], oo, [[[-2, 0, -2], [0, 0, 1]], [[1, 0, -2], [1, 0, 0]], [[-2, 1, -2], [-2, 1, -1]], [[-1, 1, -2], [-1, 1, -2]], [[-2, 2, -2], [-2, 3, -2]]]), new lo("1086515ba3c1d8e5ec76b378f0bdbc77fc5a57fc8eba8972f0d5e611be945235", Xa.Block, Za.BlockBridge, [["Blocks", "BlockBridge"]], oo, [[[-1, 0, -2], [0, 0, 1]]]), new lo("5426ad4ff64af3f1a0f0794ad30cfc20434dfffdf44d93010f5f98671c246ff3", Xa.Block, Za.BlockBridgeCorner, [["Blocks", "BlockBridgeCorner"]], oo, [[[-1, 0, -1], [0, 0, 1]], [[1, 0, -1], [1, 0, 0]]]), new lo("784b9b4459e838e5b8f74f6250769ffa52ec5cc3608abc24c380a2e792c3d338", Xa.Block, Za.BlockBridgeIntersectionT, [["Blocks", "BlockBridgeIntersectionT"]], oo, [[[-1, 0, -1], [0, 0, 1]], [[1, 0, -1], [1, 0, 0]], [[-2, 0, -1], [-2, 0, 0]]]), new lo("dfbcbc107a3c12217bfa3b224a5757d08e995705d1c122bb2c2665bbb8447b1c", Xa.Block, Za.BlockBridgeIntersectionCross, [["Blocks", "BlockBridgeIntersectionCross"]], oo, [[[-1, 0, -1], [0, 0, 1]], [[1, 0, -1], [1, 0, 0]], [[-2, 0, -1], [-2, 0, 0]], [[-1, 0, -2], [0, 0, -2]]]), new lo("a00d7077d07af7f2125d4db731b5b76ca182b65eb90fbe76061e196a7c0b1652", Xa.WallTrack, Za.WallTrackTop, [["WallTrack", "WallTrackBottom", {
      flipY: true
    }]], ao, [[[-2, 3, -1], [1, 3, 1]], [[-2, 2, -1], [1, 2, -1]], [[-2, 0, -2], [1, 2, -2]]]), new lo("010d187fbfbd399bfe880bbea1b548678c239eba0be2913e5cb8a69fbd17adf7", Xa.WallTrack, Za.WallTrackMiddle, [["WallTrack", "WallTrackMiddle"]], ao, [[[-2, 0, -2], [1, 0, -2]]]), new lo("72934b2ee76e187eee519baf97df49128dc32e3583795f98645774ae5639f443", Xa.WallTrack, Za.WallTrackBottom, [["WallTrack", "WallTrackBottom"]], ao, [[[-2, 0, -1], [1, 0, 1]], [[-2, 1, -1], [1, 1, -1]], [[-2, 1, -2], [1, 3, -2]]]), new lo("1ff36280441e023bd066dc3c5cdf136bd9a3a0beb9eee0aad048c9a2dfd5eafb", Xa.WallTrack, Za.WallTrackSlopeToVertical, [["WallTrack", "WallTrackSlopeToVertical"]], ao, [[[-2, 0, 0], [1, 0, 1]], [[-2, 1, -2], [1, 1, 0]], [[-2, 2, -2], [1, 3, -2]]]), new lo("9c7c099734168051032425b6e228665caa581282ef23db6d1ae8c958f8675531", Xa.WallTrack, Za.WallTrackTopCorner, [["WallTrack", "WallTrackBottomCorner", {
      flipY: true
    }]], ao, [[[-2, 0, -1], [-2, 0, 1]], [[-1, 0, -1], [-1, 0, -1]], [[-1, 0, -2], [1, 0, -2]], [[-2, 1, -1], [-2, 1, 1]], [[-1, 1, -1], [-1, 1, 0]], [[0, 1, -1], [0, 1, -1]], [[-1, 1, -2], [1, 1, -2]], [[-2, 2, 0], [-2, 2, 1]], [[-1, 2, 1], [-1, 2, 1]], [[-1, 2, -1], [0, 2, 0]], [[1, 2, -1], [1, 2, -1]], [[0, 2, -2], [1, 2, -2]], [[0, 3, -1], [1, 3, 1]], [[-1, 3, 0], [-1, 3, 1]]]), new lo("4027a2439cc3e42ceda50ff3d427a31e127b25a6457b55edc2d498b474a296a7", Xa.WallTrack, Za.WallTrackMiddleCorner, [["WallTrack", "WallTrackMiddleCorner"]], ao, [[[-2, 0, -1], [-2, 0, 1]], [[-1, 0, -1], [-1, 0, -1]], [[-1, 0, -2], [1, 0, -2]]]), new lo("32c0ec55a47f619e277cb9efec3dd1b54792e7ea78c370f1e3102b7ba4ed2928", Xa.WallTrack, Za.WallTrackBottomCorner, [["WallTrack", "WallTrackBottomCorner"]], ao, [[[-2, 3, -1], [-2, 3, 1]], [[-1, 3, -1], [-1, 3, -1]], [[-1, 3, -2], [1, 3, -2]], [[-2, 2, -1], [-2, 2, 1]], [[-1, 2, -1], [-1, 2, 0]], [[0, 2, -1], [0, 2, -1]], [[-1, 2, -2], [1, 2, -2]], [[-2, 1, 0], [-2, 1, 1]], [[-1, 1, 1], [-1, 1, 1]], [[-1, 1, -1], [0, 1, 0]], [[1, 1, -1], [1, 1, -1]], [[0, 1, -2], [1, 1, -2]], [[0, 0, -1], [1, 0, 1]], [[-1, 0, 0], [-1, 0, 1]]]), new lo("786b8ff7fcb72c67e7b887a78fa7b823c48575ae1e4d3b48ae13620646ac34a7", Xa.WallTrack, Za.WallTrackTopInnerCorner, [["WallTrack", "WallTrackBottomInnerCorner", {
      flipY: true
    }]], ao, [[[-2, 3, -1], [1, 3, 1]], [[-1, 3, -2], [1, 3, -2]], [[-2, 2, -2], [-1, 2, -1]], [[-2, 0, -2], [-2, 1, -2]]]), new lo("16c9c8ece47c097f60cfc7f8a2daa2f0e7ad0befb0ebfd185402013fd1ec8e0f", Xa.WallTrack, Za.WallTrackInnerCorner, [["WallTrack", "WallTrackInnerCorner"]], ao, [[[-2, 0, -2], [-2, 0, -2]]]), new lo("413dcb45de9fdaf4fe8b78804feaa80891053063a5c432c09b50c24201166572", Xa.WallTrack, Za.WallTrackBottomInnerCorner, [["WallTrack", "WallTrackBottomInnerCorner"]], ao, [[[-2, 0, -1], [1, 0, 1]], [[-1, 0, -2], [1, 0, -2]], [[-2, 1, -2], [-1, 1, -1]], [[-2, 2, -2], [-2, 3, -2]]]), new lo("8b7023471502607ef19109760bee3b954ea3b3883c32f3960f75c6651c912ffd", Xa.WallTrack, Za.WallTrackFloor, [["WallTrack", "WallTrackFloor"]], ao, [[[-2, 0, -2], [1, 0, 1]]]), new lo("59e7f31827236c71db8b16f3f1f259c4c82c87a37e4d57a5a097c0d527d128f3", Xa.WallTrack, Za.WallTrackFloorCorner, [["WallTrack", "WallTrackFloorCorner"]], ao, [[[-2, 0, 1], [1, 0, 1]], [[0, 0, 0], [1, 0, 0]], [[1, 0, -2], [1, 0, -1]]]), new lo("d58e3805b550b70940c845a807086865b21a4c36da74ffddedcfe5ce2d08e093", Xa.WallTrack, Za.WallTrackFloorPlaneCorner, [["WallTrack", "WallTrackFloorPlaneCorner"]], ao, [[[-2, 0, 1], [1, 0, 1]], [[0, 0, 0], [1, 0, 0]], [[1, 0, -2], [1, 0, -1]]]), new lo("a56b0c1cf964b213a38167cbbac6f33acd403978ad75746eb51bcfd8c6a36148", Xa.WallTrack, Za.WallTrackCeiling, [["WallTrack", "WallTrackCeiling"]], ao, [[[-2, 0, -2], [1, 0, 1]]]), new lo("f87b592d02120312e8e93d8a27c02dcda1095ac2f09879c6efafb2ca2b49d127", Xa.WallTrack, Za.WallTrackCeilingCorner, [["WallTrack", "WallTrackCeilingCorner"]], ao, [[[-2, 0, 1], [1, 0, 1]], [[0, 0, 0], [1, 0, 0]], [[1, 0, -2], [1, 0, -1]]]), new lo("cfce1fe50f8cd26393eadd475783830e02f0b39bad4c0e00f7aa69614b22decc", Xa.WallTrack, Za.WallTrackCeilingPlaneCorner, [["WallTrack", "WallTrackCeilingPlaneCorner"]], ao, [[[-2, 0, 1], [1, 0, 1]], [[0, 0, 0], [1, 0, 0]], [[1, 0, -2], [1, 0, -1]]]), new lo("19656d02145f1a4ba07dbf2f236f865d34c86f823741b247b5d444a36d61c316", Xa.Pillar, Za.PillarTop, [["Pillar", "PillarTop"]], ao, [[[-1, 0, -1], [0, 0, 0]]]), new lo("dde596d55ffc00f0f00d361667239d9f71c414f03304fecb6a7d11f6f5e702f1", Xa.Pillar, Za.PillarMiddle, [["Pillar", "PillarMiddle"]], ao, [[[-1, 0, -1], [0, 0, 0]]]), new lo("dced5202d9373f9dd81a39530a87a1a7036c93ae71604a4e26c3a191abf3c197", Xa.Pillar, Za.PillarBottom, [["Pillar", "PillarBottom"]], ao, [[[-1, 0, -1], [0, 0, 0]]]), new lo("af83eebf50c302880377e4f8c1fb3b2ef96ae193e8d03c17e1fd77c73a847e63", Xa.Pillar, Za.PillarShort, [["Pillar", "PillarShort"]], ao, [[[-1, 0, -1], [0, 0, 0]]]), new lo("bad7c003302fe84912a2f36551fc9751220ebe6e747791a8df205dca9ae31cc0", Xa.Pillar, Za.PillarTopSlope, [["Pillar", "PillarTopSlope"]], ao, [[[-1, 0, -1], [0, 0, 0]], [[-1, 1, -1], [0, 1, -1]]]), new lo("9f34b2cd553c88364c36923d7ae5e606253865e0684f575e0538670b6116ac5a", Xa.Pillar, Za.PillarShortSlope, [["Pillar", "PillarShortSlope"]], ao, [[[-1, 0, -1], [0, 0, 0]], [[-1, 1, -1], [0, 1, -1]]]), new lo("25b41116fb04b1f3cdd3119f57e0000a6ea8cb12d435718ffd6bb765866c272f", Xa.Pillar, Za.PillarBranch1, [["Pillar", "PillarBranch1"]], ao, [[[-1, 0, -2], [0, 0, 0]]]), new lo("05ae39aea4f1ddd818fa57860e688c9cb875544f9b82eafe58a2eb9c19d8d91d", Xa.Pillar, Za.PillarBranch1Top, [["Pillar", "PillarBranch1Top"]], ao, [[[-1, 0, -2], [0, 0, 0]]]), new lo("06c29d92e42e0c32050af98d69eecc94ce15adf8ac81dbe53dfb577a83265f4e", Xa.Pillar, Za.PillarBranch1Middle, [["Pillar", "PillarBranch1Middle"]], ao, [[[-1, 0, -2], [0, 0, 0]]]), new lo("4a989027e0bd6db264f092bac729d9d450e012a710ea28d199f7ff52efd70fbd", Xa.Pillar, Za.PillarBranch1Bottom, [["Pillar", "PillarBranch1Bottom"]], ao, [[[-1, 0, -2], [0, 0, 0]]]), new lo("78b2ff83ad71e7f3d692abc35923fa20c2ae14c01e37d44ec430746ca1bac992", Xa.Pillar, Za.PillarBranch2, [["Pillar", "PillarBranch2"]], ao, [[[-1, 0, -2], [0, 0, 0]], [[1, 0, -1], [1, 0, 0]]]), new lo("b22c93bc73ec2da9dbff218da1676d7436527ed284e264f37294e48ef1307301", Xa.Pillar, Za.PillarBranch2Top, [["Pillar", "PillarBranch2Top"]], ao, [[[-1, 0, -2], [0, 0, 0]], [[1, 0, -1], [1, 0, 0]]]), new lo("79a456a8fa3da24bec6c033f6c736fa1c728745f9624ae78ca20b6a4a76afae8", Xa.Pillar, Za.PillarBranch2Middle, [["Pillar", "PillarBranch2Middle"]], ao, [[[-1, 0, -2], [0, 0, 0]], [[1, 0, -1], [1, 0, 0]]]), new lo("3b81b3f965cbc9fda4fe09e830ba25f1b96ce512d87b0146a1192a6cd0d07335", Xa.Pillar, Za.PillarBranch2Bottom, [["Pillar", "PillarBranch2Bottom"]], ao, [[[-1, 0, -2], [0, 0, 0]], [[1, 0, -1], [1, 0, 0]]]), new lo("27727678bbcac9d3b0172b165ca5c92b10f4b4584a3a18fef4c542f3e791f26f", Xa.Pillar, Za.PillarBranch3, [["Pillar", "PillarBranch3"]], ao, [[[-1, 0, -2], [0, 0, 0]], [[1, 0, -1], [1, 0, 0]], [[-2, 0, -1], [-2, 0, 0]]]), new lo("50c7ac511d30ab9e065c928b776652f038be7683d948082bbefc419ee049e505", Xa.Pillar, Za.PillarBranch3Top, [["Pillar", "PillarBranch3Top"]], ao, [[[-1, 0, -2], [0, 0, 0]], [[1, 0, -1], [1, 0, 0]], [[-2, 0, -1], [-2, 0, 0]]]), new lo("98b3bfe99e7132825f5aa93122e4e5fdec46eb2877c8eb91fa2648f709527b60", Xa.Pillar, Za.PillarBranch3Middle, [["Pillar", "PillarBranch3Middle"]], ao, [[[-1, 0, -2], [0, 0, 0]], [[1, 0, -1], [1, 0, 0]], [[-2, 0, -1], [-2, 0, 0]]]), new lo("7326bbb558f8bcc28d5875c43b1b8e3646caadb873a14fde3ab517f779aea345", Xa.Pillar, Za.PillarBranch3Bottom, [["Pillar", "PillarBranch3Bottom"]], ao, [[[-1, 0, -2], [0, 0, 0]], [[1, 0, -1], [1, 0, 0]], [[-2, 0, -1], [-2, 0, 0]]]), new lo("0e23c2615cfdb350bb3a700b6169589265a1d1079f61294fb497b8f80191d523", Xa.Pillar, Za.PillarBranch4, [["Pillar", "PillarBranch4"]], ao, [[[-1, 0, -2], [0, 0, 0]], [[1, 0, -1], [1, 0, 0]], [[-2, 0, -1], [-2, 0, 0]], [[-1, 0, 1], [0, 0, 1]]]), new lo("e62b55e111dbcb3faefed0a203eac5b55051a2b11911946660310e3df3588da3", Xa.Pillar, Za.PillarBranch4Top, [["Pillar", "PillarBranch4Top"]], ao, [[[-1, 0, -2], [0, 0, 0]], [[1, 0, -1], [1, 0, 0]], [[-2, 0, -1], [-2, 0, 0]], [[-1, 0, 1], [0, 0, 1]]]), new lo("4e2cfb89c1c591803a1440532a74c3ace37ec7fe78a526c1b57f6679c620df2e", Xa.Pillar, Za.PillarBranch4Middle, [["Pillar", "PillarBranch4Middle"]], ao, [[[-1, 0, -2], [0, 0, 0]], [[1, 0, -1], [1, 0, 0]], [[-2, 0, -1], [-2, 0, 0]], [[-1, 0, 1], [0, 0, 1]]]), new lo("e7807350788e4570c8bb74d4a635639ef731d83e52922fac5bc10f415f73f794", Xa.Pillar, Za.PillarBranch4Bottom, [["Pillar", "PillarBranch4Bottom"]], ao, [[[-1, 0, -2], [0, 0, 0]], [[1, 0, -1], [1, 0, 0]], [[-2, 0, -1], [-2, 0, 0]], [[-1, 0, 1], [0, 0, 1]]]), new lo("836bfd12791bfebd99aba70531da4c9bd6e332d16c1e120a8888ea54f59456f9", Xa.Pillar, Za.PillarBranch5, [["Pillar", "PillarBranch5"]], ao, [[[-2, 0, -1], [1, 0, 0]]]), new lo("ab85228116faf9ae7b1e6cb4a03530cbec808df3d3c1d7883eb41eb7cfe231d7", Xa.Pillar, Za.PillarBranch5Top, [["Pillar", "PillarBranch5Top"]], ao, [[[-2, 0, -1], [1, 0, 0]]]), new lo("db93d5cea4e523fd67a56f8d928084ab6355331a8e5d1899115c1841866006bb", Xa.Pillar, Za.PillarBranch5Middle, [["Pillar", "PillarBranch5Middle"]], ao, [[[-2, 0, -1], [1, 0, 0]]]), new lo("dd793efa234159e3a0ff28b064ecb715e6c8bb76e06acfe4bd0d9a2f2b9bba88", Xa.Pillar, Za.PillarBranch5Bottom, [["Pillar", "PillarBranch5Bottom"]], ao, [[[-2, 0, -1], [1, 0, 0]]]), new lo("350f7d3591ffd0b2cfb8204d1c6cd0022fd3bda81ea7e950fce3abea7ec89e1a", Xa.Sign, Za.SignArrowLeft, [["Signs", "SignArrowRight", {
      flipX: true
    }]], ao, [[[-2, 0, -2], [1, 0, -2]]]), new lo("22e104e58bba0a609d379578e391ce50ca523c9eee1c3fddebb6d1bb2246a0b9", Xa.Sign, Za.SignArrowRight, [["Signs", "SignArrowRight"]], ao, [[[-2, 0, -2], [1, 0, -2]]]), new lo("acba0cfe380e625285b973e09344e61740e77d6f8cac8691ef3e0a0b0878040e", Xa.Sign, Za.SignArrowUp, [["Signs", "SignArrowUp"]], ao, [[[-2, 0, -2], [1, 0, -2]]]), new lo("8d0dbea0a26bdf3addd372f5d9a2fdecfd776a48f31218acdeb036129b248ca5", Xa.Sign, Za.SignArrowDown, [["Signs", "SignArrowUp", {
      flipY: true
    }]], ao, [[[-2, 0, -2], [1, 0, -2]]]), new lo("e5e1b1ca69d7b230331171be07876c4b1bdebba557c19b18ab17d91eee2771d5", Xa.Sign, Za.SignWarning, [["Signs", "SignWarning"]], ao, [[[-2, 0, -2], [1, 0, -2]]]), new lo("64ed1fba4990a25bc774575ff8835117638d2c3e7c8f41bf0032d219e1083e4c", Xa.Sign, Za.SignWrongWay, [["Signs", "SignWrongWay"]], ao, [[[-2, 0, -2], [1, 0, -2]]])];
    const co = new Map();
    for (const t of ho) {
      if (co.has(t.id)) {
        throw new Error("Duplicate track part id " + t.id.toString());
      }
      co.set(t.id, t);
    }
    function Ao(t) {
      const e = co.get(t);
      if (e == null) {
        throw new Error("Unknown track part id " + t.toString());
      }
      return e;
    }
    const uo = ho.filter(t => t.detector?.type == to.Checkpoint).map(t => t.id);
    const fo = ho.filter(t => t.startOffset != null).map(t => t.id);
    function go(t) {
      if (typeof t != "object" || t == null) {
        return null;
      }
      if (!("parts" in t) || typeof t.parts != "object" || t.parts == null) {
        return null;
      }
      const e = t.parts;
      const i = new Ko(Ha.Summer, new Oa());
      const r = Object.keys(e);
      for (const t of r) {
        const r = parseInt(t, 10);
        if (!(r in Za)) {
          return null;
        }
        {
          const t = e[r];
          if (!Array.isArray(t)) {
            return null;
          }
          if (t.length % 4 != 0) {
            return null;
          }
          for (let e = 0; e < t.length; e += 4) {
            const s = t[e + 0];
            const n = t[e + 1];
            const a = t[e + 2];
            const o = t[e + 3];
            if (typeof s != "number" || typeof n != "number" || typeof a != "number" || typeof o != "number") {
              return null;
            }
            if (!Number.isSafeInteger(s) || !Number.isSafeInteger(n) || !Number.isSafeInteger(a) || !Number.isSafeInteger(o)) {
              return null;
            }
            if (!(o >= 0) || !(o <= 3) || !(Math.abs(s) <= 1000000000) || !(n >= 0) || !(n <= 1000000000) || !(Math.abs(a) <= 1000000000)) {
              return null;
            }
            {
              if (uo.includes(r)) {
                return null;
              }
              let l = null;
              if (fo.includes(r)) {
                l = e / 4 == t.length / 4 - 1 ? 1 : 0;
              }
              i.addPart(s * 4, n, a * 4, r, o, Ka.YPositive, Ja.Default, null, l);
            }
          }
        }
      }
      return i;
    }
    function po(t) {
      const e = Pa(t);
      if (e == null) {
        return null;
      }
      const i = new Ko(Ha.Summer, new Oa());
      let r = 0;
      while (r < e.length) {
        if (e.length - r < 2) {
          return null;
        }
        let t = e[r + 0] | e[r + 1] << 8;
        r += 2;
        let s = null;
        if (t == 40) {
          t = Za.Slope;
          s = Za.PillarTopSlope;
        }
        if (!(t in Za)) {
          return null;
        }
        if (e.length - r < 4) {
          return null;
        }
        const n = e[r + 0] | e[r + 1] << 8 | e[r + 2] << 16 | e[r + 3] << 24;
        r += 4;
        for (let a = 0; a < n; ++a) {
          if (e.length - r < 3) {
            return null;
          }
          const o = (e[r + 0] | e[r + 1] << 8 | e[r + 2] << 16) - 8388608;
          r += 3;
          if (e.length - r < 3) {
            return null;
          }
          const l = e[r + 0] | e[r + 1] << 8 | e[r + 2] << 16;
          r += 3;
          if (e.length - r < 3) {
            return null;
          }
          const h = (e[r + 0] | e[r + 1] << 8 | e[r + 2] << 16) - 8388608;
          r += 3;
          if (e.length - r < 1) {
            return null;
          }
          const c = e[r + 0] & 3;
          r += 1;
          if (c < 0 || c > 3) {
            return null;
          }
          if (uo.includes(t)) {
            return null;
          }
          let A = null;
          if (fo.includes(t)) {
            A = a == n - 1 ? 1 : 0;
          }
          if (s != null) {
            i.addPart(o * 4, l, h * 4, s, c, Ka.YPositive, Ja.Default, null, null);
          }
          i.addPart(o * 4, l, h * 4, t, c, Ka.YPositive, Ja.Default, null, A);
        }
      }
      return i;
    }
    function mo(t) {
      const e = Wa(t);
      if (e == null) {
        return null;
      }
      const i = new Ma.Inflate();
      i.push(e, true);
      if (i.err) {
        return null;
      }
      const r = i.result;
      if (!(r instanceof Uint8Array)) {
        return null;
      }
      const s = new Ko(Ha.Summer, new Oa());
      let n = 0;
      while (n < r.length) {
        if (r.length - n < 2) {
          return null;
        }
        let t = r[n + 0] | r[n + 1] << 8;
        n += 2;
        let e = null;
        if (t == 40) {
          t = Za.Slope;
          e = Za.PillarTopSlope;
        }
        if (!(t in Za)) {
          return null;
        }
        if (r.length - n < 4) {
          return null;
        }
        const i = r[n + 0] | r[n + 1] << 8 | r[n + 2] << 16 | r[n + 3] << 24;
        n += 4;
        for (let a = 0; a < i; ++a) {
          if (r.length - n < 3) {
            return null;
          }
          const o = (r[n + 0] | r[n + 1] << 8 | r[n + 2] << 16) - 8388608;
          n += 3;
          if (r.length - n < 3) {
            return null;
          }
          const l = r[n + 0] | r[n + 1] << 8 | r[n + 2] << 16;
          n += 3;
          if (r.length - n < 3) {
            return null;
          }
          const h = (r[n + 0] | r[n + 1] << 8 | r[n + 2] << 16) - 8388608;
          n += 3;
          if (r.length - n < 1) {
            return null;
          }
          const c = r[n + 0];
          n += 1;
          if (c < 0 || c > 3) {
            return null;
          }
          let A = null;
          if (uo.includes(t)) {
            if (r.length - n < 2) {
              return null;
            }
            A = r[n + 0] | r[n + 1] << 8;
            n += 2;
          }
          let d = null;
          if (fo.includes(t)) {
            d = a == i - 1 ? 1 : 0;
          }
          if (e != null) {
            s.addPart(o * 4, l, h * 4, e, c, Ka.YPositive, Ja.Default, null, null);
          }
          s.addPart(o * 4, l, h * 4, t, c, Ka.YPositive, Ja.Default, A, d);
        }
      }
      return s;
    }
    function bo(t) {
      const e = Wa(t);
      if (e == null) {
        return null;
      }
      const i = new Ma.Inflate();
      i.push(e, true);
      if (i.err) {
        return null;
      }
      const r = i.result;
      if (!(r instanceof Uint8Array)) {
        return null;
      }
      const s = new Ko(Ha.Summer, new Oa());
      let n = 0;
      while (n < r.length) {
        if (r.length - n < 2) {
          return null;
        }
        let t = r[n + 0] | r[n + 1] << 8;
        n += 2;
        let e = Ja.Default;
        if (t >= 134 && t <= 178) {
          switch (t) {
            case 134:
              t = Za.Block;
              e = Ja.Custom1;
              break;
            case 135:
              t = Za.HalfBlock;
              e = Ja.Custom1;
              break;
            case 136:
              t = Za.QuarterBlock;
              e = Ja.Custom1;
              break;
            case 137:
              t = Za.BlockSlopedDown;
              e = Ja.Custom1;
              break;
            case 138:
              t = Za.BlockSlopedDownInnerCorner;
              e = Ja.Custom1;
              break;
            case 139:
              t = Za.BlockSlopedDownOuterCorner;
              e = Ja.Custom1;
              break;
            case 140:
              t = Za.BlockSlopedUp;
              e = Ja.Custom1;
              break;
            case 141:
              t = Za.BlockSlopedUpInnerCorner;
              e = Ja.Custom1;
              break;
            case 142:
              t = Za.BlockSlopedUpOuterCorner;
              e = Ja.Custom1;
              break;
            case 143:
              t = Za.BlockSlopeDown;
              e = Ja.Custom1;
              break;
            case 144:
              t = Za.BlockSlopeUp;
              e = Ja.Custom1;
              break;
            case 145:
              t = Za.BlockBridge;
              e = Ja.Custom1;
              break;
            case 146:
              t = Za.BlockBridgeCorner;
              e = Ja.Custom1;
              break;
            case 147:
              t = Za.BlockBridgeIntersectionT;
              e = Ja.Custom1;
              break;
            case 148:
              t = Za.BlockBridgeIntersectionCross;
              e = Ja.Custom1;
              break;
            case 149:
              t = Za.Block;
              e = Ja.Custom6;
              break;
            case 150:
              t = Za.HalfBlock;
              e = Ja.Custom6;
              break;
            case 151:
              t = Za.QuarterBlock;
              e = Ja.Custom6;
              break;
            case 152:
              t = Za.BlockSlopedDown;
              e = Ja.Custom6;
              break;
            case 153:
              t = Za.BlockSlopedDownInnerCorner;
              e = Ja.Custom6;
              break;
            case 154:
              t = Za.BlockSlopedDownOuterCorner;
              e = Ja.Custom6;
              break;
            case 155:
              t = Za.BlockSlopedUp;
              e = Ja.Custom6;
              break;
            case 156:
              t = Za.BlockSlopedUpInnerCorner;
              e = Ja.Custom6;
              break;
            case 157:
              t = Za.BlockSlopedUpOuterCorner;
              e = Ja.Custom6;
              break;
            case 158:
              t = Za.BlockSlopeDown;
              e = Ja.Custom6;
              break;
            case 159:
              t = Za.BlockSlopeUp;
              e = Ja.Custom6;
              break;
            case 160:
              t = Za.BlockBridge;
              e = Ja.Custom6;
              break;
            case 161:
              t = Za.BlockBridgeCorner;
              e = Ja.Custom6;
              break;
            case 162:
              t = Za.BlockBridgeIntersectionT;
              e = Ja.Custom6;
              break;
            case 163:
              t = Za.BlockBridgeIntersectionCross;
              e = Ja.Custom6;
              break;
            case 164:
              t = Za.Block;
              e = Ja.Custom0;
              break;
            case 165:
              t = Za.HalfBlock;
              e = Ja.Custom0;
              break;
            case 166:
              t = Za.QuarterBlock;
              e = Ja.Custom0;
              break;
            case 167:
              t = Za.BlockSlopedDown;
              e = Ja.Custom0;
              break;
            case 168:
              t = Za.BlockSlopedDownInnerCorner;
              e = Ja.Custom0;
              break;
            case 169:
              t = Za.BlockSlopedDownOuterCorner;
              e = Ja.Custom0;
              break;
            case 170:
              t = Za.BlockSlopedUp;
              e = Ja.Custom0;
              break;
            case 171:
              t = Za.BlockSlopedUpInnerCorner;
              e = Ja.Custom0;
              break;
            case 172:
              t = Za.BlockSlopedUpOuterCorner;
              e = Ja.Custom0;
              break;
            case 173:
              t = Za.BlockSlopeDown;
              e = Ja.Custom0;
              break;
            case 174:
              t = Za.BlockSlopeUp;
              e = Ja.Custom0;
              break;
            case 175:
              t = Za.BlockBridge;
              e = Ja.Custom0;
              break;
            case 176:
              t = Za.BlockBridgeCorner;
              e = Ja.Custom0;
              break;
            case 177:
              t = Za.BlockBridgeIntersectionT;
              e = Ja.Custom0;
              break;
            case 178:
              t = Za.BlockBridgeIntersectionCross;
              e = Ja.Custom0;
          }
        }
        let i = null;
        let a = {
          x: 0,
          y: 0,
          z: 0
        };
        if (t == 79) {
          i = Za.WallTrackFloorPlaneCorner;
        } else if (t == 81) {
          i = Za.WallTrackCeilingPlaneCorner;
          a = {
            x: 0,
            y: 3,
            z: 0
          };
        } else if (t >= 87 && t <= 98) {
          switch (t) {
            case 87:
              t = Za.Slope;
              i = Za.BlockSlopedUp;
              break;
            case 88:
              t = Za.SlopeUp;
              i = Za.BlockSlopeUp;
              break;
            case 89:
              t = Za.SlopeDown;
              i = Za.BlockSlopeDown;
              break;
            case 90:
              t = Za.SlopeUpLeftWide;
              i = Za.BlockSlopeUp;
              break;
            case 91:
              t = Za.SlopeUpRightWide;
              i = Za.BlockSlopeUp;
              break;
            case 92:
              t = Za.SlopeDownLeftWide;
              i = Za.BlockSlopeDown;
              break;
            case 93:
              t = Za.SlopeDownRightWide;
              i = Za.BlockSlopeDown;
              break;
            case 94:
              t = Za.SlopeLeftWide;
              i = Za.BlockSlopedUp;
              break;
            case 95:
              t = Za.SlopeRightWide;
              i = Za.BlockSlopedUp;
              break;
            case 96:
              t = Za.PlaneSlopeUp;
              i = Za.BlockSlopeUp;
              break;
            case 97:
              t = Za.PlaneSlopeDown;
              i = Za.BlockSlopeDown;
              break;
            case 98:
              t = Za.PlaneSlope;
              i = Za.BlockSlopedUp;
              break;
            default:
              throw new Error("Invalid track part id");
          }
        } else if (t == 40) {
          t = Za.Slope;
          i = Za.PillarTopSlope;
        } else if (t == 84) {
          t = Za.Slope;
          i = Za.PillarShortSlope;
        } else if (t == 99) {
          t = Za.PlaneSlope;
          i = Za.PillarTopSlope;
        } else if (t == 100) {
          t = Za.PlaneSlope;
          i = Za.PillarShortSlope;
        }
        if (!(t in Za)) {
          return null;
        }
        if (r.length - n < 4) {
          return null;
        }
        const o = r[n + 0] | r[n + 1] << 8 | r[n + 2] << 16 | r[n + 3] << 24;
        n += 4;
        for (let l = 0; l < o; ++l) {
          if (r.length - n < 3) {
            return null;
          }
          const h = (r[n + 0] | r[n + 1] << 8 | r[n + 2] << 16) - 8388608;
          n += 3;
          if (r.length - n < 3) {
            return null;
          }
          const c = r[n + 0] | r[n + 1] << 8 | r[n + 2] << 16;
          n += 3;
          if (r.length - n < 3) {
            return null;
          }
          const A = (r[n + 0] | r[n + 1] << 8 | r[n + 2] << 16) - 8388608;
          n += 3;
          if (r.length - n < 1) {
            return null;
          }
          const d = r[n + 0];
          n += 1;
          if (d < 0 || d > 3) {
            return null;
          }
          let u = null;
          if (uo.includes(t)) {
            if (r.length - n < 2) {
              return null;
            }
            u = r[n + 0] | r[n + 1] << 8;
            n += 2;
          }
          let f = null;
          if (fo.includes(t)) {
            f = l == o - 1 ? 1 : 0;
          }
          if (i != null) {
            s.addPart(h * 4 + a.x, c + a.y, A * 4 + a.z, i, d, Ka.YPositive, Ja.Default, null, null);
          }
          s.addPart(h * 4, c, A * 4, t, d, Ka.YPositive, e, u, f);
        }
      }
      return s;
    }
    function yo(t, e) {
      let i = t;
      if (e.length - i < 1) {
        return null;
      }
      const r = e[i];
      i += 1;
      if (!(r in Ha)) {
        return null;
      }
      if (e.length - i < 1) {
        return null;
      }
      const s = e[i];
      i += 1;
      if (!Number.isSafeInteger(s) || s < 0 || s >= 180) {
        return null;
      }
      const n = new Ko(r, new Oa(s));
      if (e.length - i < 9) {
        return null;
      }
      const a = e[i] | e[i + 1] << 8 | e[i + 2] << 16 | e[i + 3] << 24;
      i += 4;
      const o = e[i] | e[i + 1] << 8 | e[i + 2] << 16 | e[i + 3] << 24;
      i += 4;
      const l = e[i] | e[i + 1] << 8 | e[i + 2] << 16 | e[i + 3] << 24;
      i += 4;
      const h = e[i] & 3;
      const c = e[i] >> 2 & 3;
      const A = e[i] >> 4 & 3;
      i += 1;
      if (h < 1 || h > 4 || c < 1 || c > 4 || A < 1 || A > 4) {
        return null;
      }
      const d = [];
      while (i < e.length) {
        if (e.length - i < 1) {
          return null;
        }
        let t = e[i + 0];
        i += 1;
        let r = null;
        if (t == 40) {
          t = Za.Slope;
          r = Za.PillarTopSlope;
        } else if (t == 84) {
          t = Za.Slope;
          r = Za.PillarShortSlope;
        } else if (t == 99) {
          t = Za.PlaneSlope;
          r = Za.PillarTopSlope;
        } else if (t == 100) {
          t = Za.PlaneSlope;
          r = Za.PillarShortSlope;
        }
        if (!(t in Za)) {
          return null;
        }
        if (e.length - i < 4) {
          return null;
        }
        const s = e[i + 0] | e[i + 1] << 8 | e[i + 2] << 16 | e[i + 3] << 24;
        i += 4;
        for (let n = 0; n < s; ++n) {
          if (e.length - i < h) {
            return null;
          }
          let s = 0;
          for (let t = 0; t < h; ++t) {
            s |= e[i + t] << t * 8;
          }
          s += a;
          i += h;
          if (e.length - i < c) {
            return null;
          }
          let n = 0;
          for (let t = 0; t < c; ++t) {
            n |= e[i + t] << t * 8;
          }
          n += o;
          i += c;
          if (e.length - i < A) {
            return null;
          }
          let u = 0;
          for (let t = 0; t < A; ++t) {
            u |= e[i + t] << t * 8;
          }
          u += l;
          i += A;
          if (e.length - i < 1) {
            return null;
          }
          const f = e[i + 0];
          i += 1;
          if (f < 0 || f > 3) {
            return null;
          }
          if (e.length - i < 1) {
            return null;
          }
          const g = e[i + 0];
          i += 1;
          if (!(g in Ka)) {
            return null;
          }
          if (e.length - i < 1) {
            return null;
          }
          const p = e[i + 0];
          i += 1;
          if (!(p in Ja)) {
            return null;
          }
          let m = null;
          if (uo.includes(t)) {
            if (e.length - i < 2) {
              return null;
            }
            m = e[i + 0] | e[i + 1] << 8;
            i += 2;
          }
          let b = null;
          if (fo.includes(t)) {
            if (e.length - i < 4) {
              return null;
            }
            b = e[i + 0] | e[i + 1] << 8 | e[i + 2] << 16 | e[i + 3] << 24;
            i += 4;
          }
          if (r != null) {
            d.push({
              x: s,
              y: n,
              z: u,
              partId: r,
              rotation: f,
              rotationAxis: g,
              color: p,
              checkpointOrder: null,
              startOrder: null
            });
          }
          d.push({
            x: s,
            y: n,
            z: u,
            partId: t,
            rotation: f,
            rotationAxis: g,
            color: p,
            checkpointOrder: m,
            startOrder: b
          });
        }
      }
      let u = null;
      let f = null;
      for (let t = 0; t < d.length; ++t) {
        const e = d[t];
        if (e.startOrder != null && (f == null || e.startOrder >= f)) {
          u = t;
          f = e.startOrder;
        }
      }
      for (let t = 0; t < d.length; ++t) {
        const e = d[t];
        let i = null;
        if (e.startOrder != null) {
          i = t == u ? 1 : 0;
        }
        n.addPart(e.x, e.y, e.z, e.partId, e.rotation, e.rotationAxis, e.color, e.checkpointOrder, i);
      }
      return n;
    }
    function wo(t, e) {
      let i = t;
      if (e.length - i < 1) {
        return null;
      }
      const r = e[i];
      i += 1;
      if (!(r in Ha)) {
        return null;
      }
      if (e.length - i < 1) {
        return null;
      }
      const s = e[i];
      i += 1;
      if (!Number.isSafeInteger(s) || s < 0 || s >= 180) {
        return null;
      }
      const n = new Ko(r, new Oa(s));
      if (e.length - i < 9) {
        return null;
      }
      const a = e[i] | e[i + 1] << 8 | e[i + 2] << 16 | e[i + 3] << 24;
      i += 4;
      const o = e[i] | e[i + 1] << 8 | e[i + 2] << 16 | e[i + 3] << 24;
      i += 4;
      const l = e[i] | e[i + 1] << 8 | e[i + 2] << 16 | e[i + 3] << 24;
      i += 4;
      const h = e[i] & 3;
      const c = e[i] >> 2 & 3;
      const A = e[i] >> 4 & 3;
      i += 1;
      if (h < 1 || h > 4 || c < 1 || c > 4 || A < 1 || A > 4) {
        return null;
      }
      while (i < e.length) {
        if (e.length - i < 1) {
          return null;
        }
        const t = e[i + 0];
        i += 1;
        if (!(t in Za)) {
          return null;
        }
        if (e.length - i < 4) {
          return null;
        }
        const r = e[i + 0] | e[i + 1] << 8 | e[i + 2] << 16 | e[i + 3] << 24;
        i += 4;
        for (let s = 0; s < r; ++s) {
          if (e.length - i < h) {
            return null;
          }
          let r = 0;
          for (let t = 0; t < h; ++t) {
            r |= e[i + t] << t * 8;
          }
          r += a;
          i += h;
          if (e.length - i < c) {
            return null;
          }
          let s = 0;
          for (let t = 0; t < c; ++t) {
            s |= e[i + t] << t * 8;
          }
          s += o;
          i += c;
          if (e.length - i < A) {
            return null;
          }
          let d = 0;
          for (let t = 0; t < A; ++t) {
            d |= e[i + t] << t * 8;
          }
          d += l;
          i += A;
          if (e.length - i < 1) {
            return null;
          }
          const u = e[i];
          i += 1;
          const f = u & 3;
          if (f < 0 || f > 3) {
            return null;
          }
          const g = u >> 2 & 7;
          if (!(g in Ka)) {
            return null;
          }
          if (e.length - i < 1) {
            return null;
          }
          const p = e[i + 0];
          i += 1;
          if (!(p in Ja)) {
            return null;
          }
          let m = null;
          if (uo.includes(t)) {
            if (e.length - i < 2) {
              return null;
            }
            m = e[i + 0] | e[i + 1] << 8;
            i += 2;
          }
          let b = null;
          if (fo.includes(t)) {
            if (e.length - i < 4) {
              return null;
            }
            b = e[i + 0] | e[i + 1] << 8 | e[i + 2] << 16 | e[i + 3] << 24;
            i += 4;
          }
          n.addPart(r, s, d, t, f, g, p, m, b);
        }
      }
      return n;
    }
    var Io;
    (function (t) {
      t[t.ImperialUnitsEnabled = 0] = "ImperialUnitsEnabled";
      t[t.ResetHintEnabled = 1] = "ResetHintEnabled";
      t[t.GhostCarEnabled = 2] = "GhostCarEnabled";
      t[t.DefaultCameraMode = 3] = "DefaultCameraMode";
      t[t.CockpitCameraToggle = 4] = "CockpitCameraToggle";
      t[t.Checkpoints = 5] = "Checkpoints";
      t[t.Timer = 6] = "Timer";
      t[t.Speedometer = 7] = "Speedometer";
      t[t.Language = 8] = "Language";
      t[t.ShadowQuality = 9] = "ShadowQuality";
      t[t.CloudsEnabled = 10] = "CloudsEnabled";
      t[t.ParticlesEnabled = 11] = "ParticlesEnabled";
      t[t.SkidmarksEnabled = 12] = "SkidmarksEnabled";
      t[t.FogEnabled = 13] = "FogEnabled";
      t[t.RenderScale = 14] = "RenderScale";
      t[t.ScreenPixelDensity = 15] = "ScreenPixelDensity";
      t[t.Antialiasing = 16] = "Antialiasing";
      t[t.MasterVolume = 17] = "MasterVolume";
      t[t.SoundEffectVolume = 18] = "SoundEffectVolume";
      t[t.MusicVolume = 19] = "MusicVolume";
      t[t.CheckpointVolume = 20] = "CheckpointVolume";
      t[t.GhostCarSoundsEnabled = 21] = "GhostCarSoundsEnabled";
      t[t.VibrationEnabled = 22] = "VibrationEnabled";
      t[t.TouchSteeringSide = 23] = "TouchSteeringSide";
    })(Io ||= {});
    const Bo = Io;
    class xo extends li {
      constructor(t, e) {
        const i = new Ce({
          color: e,
          depthWrite: false
        });
        super(t.geometry, i, t.count);
        for (let e = 0; e < t.count; ++e) {
          const i = new Et();
          t.getMatrixAt(e, i);
          this.setMatrixAt(e, i);
        }
        this.meshMatrix = t.matrixWorld;
        this.frustumCulled = false;
        this.matrixAutoUpdate = false;
        this.renderOrder = -1;
      }
      update(t, e) {
        var i = new Et();
        var r = t.normal.x * e.x + t.normal.y * e.y + t.normal.z * e.z + -t.constant * e.w;
        var s = i.elements;
        s[0] = r - e.x * t.normal.x;
        s[4] = -e.x * t.normal.y;
        s[8] = -e.x * t.normal.z;
        s[12] = -e.x * -t.constant;
        s[1] = -e.y * t.normal.x;
        s[5] = r - e.y * t.normal.y;
        s[9] = -e.y * t.normal.z;
        s[13] = -e.y * -t.constant;
        s[2] = -e.z * t.normal.x;
        s[6] = -e.z * t.normal.y;
        s[10] = r - e.z * t.normal.z;
        s[14] = -e.z * -t.constant;
        s[3] = -e.w * t.normal.x;
        s[7] = -e.w * t.normal.y;
        s[11] = -e.w * t.normal.z;
        s[15] = r - e.w * -t.constant;
        this.matrix.multiplyMatrices(i, this.meshMatrix);
      }
    }
    var Co;
    var So;
    var ko;
    var _o;
    var Eo;
    var Mo;
    var Po;
    var To;
    var Qo;
    var vo;
    var Do;
    var Ro;
    var zo;
    var Wo;
    var Fo;
    class Uo {
      constructor(t, e, i, r, s, n, a, o, l, h) {
        this.checkpointOrder = null;
        this.startOrder = null;
        this.x = t;
        this.y = e;
        this.z = i;
        this.rotation = r;
        this.rotationAxis = s;
        this.color = n;
        this.trackPartData = a;
        this.matrix = o;
        this.checkpointOrder = l;
        this.startOrder = h;
        if (a.configuration.detector != null && a.configuration.detector.type == to.Checkpoint) {
          if (l == null) {
            throw new Error("Checkpoint has no checkpoint order");
          }
        } else if (l != null) {
          throw new Error("Non-checkpoint has checkpoint order");
        }
        if (a.configuration.startOffset != null && h == null) {
          throw new Error("Start part has no start order");
        }
        if (a.configuration.startOffset == null && h != null) {
          throw new Error("Non-start part has start order");
        }
      }
    }
    class No {
      constructor(t, e, i) {
        Co.add(this);
        So.set(this, undefined);
        ko.set(this, undefined);
        _o.set(this, undefined);
        this.environment = Ha.Summer;
        Eo.set(this, new Oa());
        Mo.set(this, []);
        Po.set(this, new Map());
        To.set(this, new Map());
        Qo.set(this, {
          min: new v(0, 0),
          max: new v(0, 0)
        });
        vo.set(this, new Map());
        Do.set(this, null);
        Ro.set(this, []);
        Xi(this, So, t, "f");
        Xi(this, ko, e, "f");
        Xi(this, _o, i, "f");
      }
      get sunDirection() {
        return ji(this, Eo, "f");
      }
      set sunDirection(t) {
        Xi(this, Eo, t.clone(), "f");
      }
      clear() {
        ji(this, Mo, "f").length = 0;
        ji(this, Po, "f").clear();
        ji(this, To, "f").clear();
        for (const {
          mesh: t
        } of ji(this, Ro, "f")) {
          t.dispose();
          ji(this, So, "f").scene.remove(t);
        }
        ji(this, Ro, "f").length = 0;
      }
      getPartsWithin(t, e, i, r, s, n) {
        return ji(this, Mo, "f").filter(a => a.trackPartData.configuration.tiles.rotated(a.rotation, a.rotationAxis).some((o, l, h) => {
          const c = a.x + o;
          const A = a.y + l;
          const d = a.z + h;
          return c >= t && c <= r && A >= e && A <= s && d >= i && d <= n;
        })).map(t => ({
          id: t.trackPartData.configuration.id,
          x: t.x,
          y: t.y,
          z: t.z,
          rotation: t.rotation,
          rotationAxis: t.rotationAxis,
          color: t.color,
          checkpointOrder: t.checkpointOrder,
          startOrder: t.startOrder
        }));
      }
      getPartsAt(t, e, i) {
        const r = ji(this, Po, "f").get(t.toString() + "|" + e.toString() + "|" + i.toString());
        if (r == null) {
          return [];
        } else {
          return r.map(t => ({
            id: t.trackPartData.configuration.id,
            x: t.x,
            y: t.y,
            z: t.z,
            rotation: t.rotation,
            rotationAxis: t.rotationAxis,
            color: t.color,
            checkpointOrder: t.checkpointOrder,
            startOrder: t.startOrder
          }));
        }
      }
      setPart(t, e, i, r, s, n, a, o, l) {
        const h = ji(this, _o, "f").getPart(r);
        if (a != Ja.Default && !h.colors.has(a)) {
          throw new Error("Track part color does not exist");
        }
        const c = io(s, n);
        const A = new R(t * No.partSize, e * No.partSize, i * No.partSize);
        const d = new Et().compose(A, c, new R(1, 1, 1));
        const u = new Uo(t, e, i, s, n, a, h, d, o, l);
        ji(this, Mo, "f").push(u);
        h.configuration.tiles.rotated(s, n).forEach((r, s, n) => {
          const a = (t + r).toString() + "|" + (e + s).toString() + "|" + (i + n).toString();
          if (e + s < 0) {
            throw new Error("Track part below ground");
          }
          {
            const t = ji(this, Po, "f").get(a);
            if (t == null) {
              ji(this, Po, "f").set(a, [u]);
            } else {
              t.push(u);
            }
          }
        });
        const f = ji(this, To, "f").get(r);
        if (f == null) {
          ji(this, To, "f").set(r, [u]);
        } else {
          f.push(u);
        }
        const g = ji(this, vo, "f").get(r);
        if (g == null) {
          ji(this, vo, "f").set(r, new Set([a]));
        } else {
          g.add(a);
        }
      }
      deletePartsAt(t, e, i) {
        const r = [];
        const s = ji(this, Po, "f").get(t.toString() + "|" + e.toString() + "|" + i.toString());
        if (s != null) {
          for (let t = 0; t < s.length; ++t) {
            const e = s[t];
            r.push({
              id: e.trackPartData.configuration.id,
              x: e.x,
              y: e.y,
              z: e.z,
              rotation: e.rotation,
              rotationAxis: e.rotationAxis,
              color: e.color,
              checkpointOrder: e.checkpointOrder,
              startOrder: e.startOrder
            });
            ji(this, Co, "m", zo).call(this, ji(this, Mo, "f").indexOf(e));
            --t;
          }
        }
        return r;
      }
      deletePartsWithin(t, e, i, r, s, n) {
        const a = [];
        for (let o = 0; o < ji(this, Mo, "f").length; ++o) {
          const l = ji(this, Mo, "f")[o];
          if (l.trackPartData.configuration.tiles.rotated(l.rotation, l.rotationAxis).some((a, o, h) => {
            const c = l.x + a;
            const A = l.y + o;
            const d = l.z + h;
            return c >= t && c <= r && A >= e && A <= s && d >= i && d <= n;
          })) {
            a.push({
              id: l.trackPartData.configuration.id,
              x: l.x,
              y: l.y,
              z: l.z,
              rotation: l.rotation,
              rotationAxis: l.rotationAxis,
              color: l.color,
              checkpointOrder: l.checkpointOrder,
              startOrder: l.startOrder
            });
            ji(this, Co, "m", zo).call(this, o);
            --o;
          }
        }
        return a;
      }
      deleteSpecificPart(t, e, i, r, s, n) {
        for (let a = 0; a < ji(this, Mo, "f").length; ++a) {
          const o = ji(this, Mo, "f")[a];
          if (o.trackPartData.configuration.id == t && o.x == e && o.y == i && o.z == r && o.rotation == s && o.rotationAxis == n) {
            ji(this, Co, "m", zo).call(this, a);
            return {
              id: o.trackPartData.configuration.id,
              x: o.x,
              y: o.y,
              z: o.z,
              rotation: o.rotation,
              rotationAxis: o.rotationAxis,
              color: o.color,
              checkpointOrder: o.checkpointOrder,
              startOrder: o.startOrder
            };
          }
        }
        return null;
      }
      getBounds() {
        return ji(this, Qo, "f");
      }
      refreshMeshes() {
        const t = ji(this, Do, "f") != null && ji(this, Do, "f") != this.environment;
        let e;
        Xi(this, Do, this.environment, "f");
        switch (this.environment) {
          case Ha.Summer:
            e = Ja.Summer;
            break;
          case Ha.Winter:
            e = Ja.Winter;
            break;
          case Ha.Desert:
            e = Ja.Desert;
        }
        for (let i = 0; i < ji(this, Ro, "f").length; ++i) {
          const {
            trackPartId: r,
            color: s,
            mesh: n
          } = ji(this, Ro, "f")[i];
          const a = ji(this, vo, "f").get(r);
          if (t || a?.has(s) || s == e && a?.has(Ja.Default)) {
            n.dispose();
            ji(this, So, "f").scene.remove(n);
            ji(this, Ro, "f").splice(i, 1);
            --i;
          }
        }
        const i = ji(this, Eo, "f").getSunPosition();
        const r = new tt(i.x, i.y, i.z, 0);
        let s = null;
        if (ji(this, ko, "f").getSettingInteger(Bo.ShadowQuality) == 2) {
          switch (this.environment) {
            case Ha.Summer:
              s = new we(2511171);
              break;
            case Ha.Winter:
              s = new we(7904713);
              break;
            case Ha.Desert:
              s = new we(7958351);
          }
        }
        const n = ji(this, So, "f").isTrackShadowsEnabled();
        if (t) {
          for (const t of ji(this, _o, "f").getAllParts()) {
            for (const i of t.colors.keys()) {
              ji(this, Co, "m", Fo).call(this, t, i, e, n, s, r);
            }
          }
        } else {
          for (const [t, i] of ji(this, vo, "f").entries()) {
            const a = ji(this, _o, "f").getPart(t);
            for (const t of a.colors.keys()) {
              if (i.has(t) || t == e && i.has(Ja.Default)) {
                ji(this, Co, "m", Fo).call(this, a, t, e, n, s, r);
              }
            }
          }
        }
        ji(this, Co, "m", Wo).call(this);
        ji(this, vo, "f").clear();
      }
      getCheckpoints() {
        let t = [];
        const e = ji(this, _o, "f").getPartTypesWithDetector(to.Checkpoint);
        for (const i of e) {
          const e = ji(this, To, "f").get(i);
          if (e != null) {
            t = t.concat(e);
          }
        }
        return t.map(t => {
          if (t.checkpointOrder == null) {
            throw new Error("Checkpoint has no checkpoint order");
          }
          if (t.trackPartData.configuration.detector == null) {
            throw new Error("Checkpoint has no detector");
          }
          return {
            x: t.x,
            y: t.y,
            z: t.z,
            rotation: t.rotation,
            rotationAxis: t.rotationAxis,
            type: t.trackPartData.configuration.id,
            checkpointOrder: t.checkpointOrder,
            detector: t.trackPartData.configuration.detector
          };
        });
      }
      getCheckpointOrders() {
        let t = [];
        const e = ji(this, _o, "f").getPartTypesWithDetector(to.Checkpoint);
        for (const i of e) {
          const e = ji(this, To, "f").get(i);
          if (e != null) {
            t = t.concat(e);
          }
        }
        return t.map(t => {
          if (t.checkpointOrder == null) {
            throw new Error("Checkpoint has no checkpoint order");
          }
          if (t.trackPartData.configuration.detector == null) {
            throw new Error("Checkpoint has no detector");
          }
          return t.checkpointOrder;
        });
      }
      getTotalNumberOfCheckpointIndices() {
        let t = [];
        const e = ji(this, _o, "f").getPartTypesWithDetector(to.Checkpoint);
        for (const i of e) {
          const e = ji(this, To, "f").get(i);
          if (e != null) {
            t = t.concat(e);
          }
        }
        return t.map(t => t.checkpointOrder).filter((t, e, i) => i.indexOf(t) == e).length;
      }
      getStart() {
        let t = -Infinity;
        let e = null;
        for (const [i, r] of ji(this, To, "f")) {
          const s = ji(this, _o, "f").getPartStartOffset(i);
          if (r.length > 0 && s != null) {
            for (const i of r) {
              if (i.startOrder == null) {
                throw new Error("Start part has no start order");
              }
              if (i.startOrder >= t) {
                t = i.startOrder;
                e = {
                  part: i,
                  startOffset: s
                };
              }
            }
          }
        }
        if (e != null) {
          return {
            x: e.part.x,
            y: e.part.y,
            z: e.part.z,
            rotation: e.part.rotation,
            rotationAxis: e.part.rotationAxis,
            startOffset: e.startOffset
          };
        } else {
          return null;
        }
      }
      getStartTransform() {
        const t = this.getStart();
        if (t != null) {
          const e = io(t.rotation, t.rotationAxis).multiply(new D().setFromEuler(new Ft(0, Math.PI, 0)));
          const i = t.startOffset;
          i.applyQuaternion(e);
          return {
            position: new R(t.x * No.partSize + i.x, t.y * No.partSize + i.y, t.z * No.partSize + i.z),
            quaternion: e
          };
        }
        return null;
      }
      getNextStartOrder() {
        let t = 0;
        for (const [e, i] of ji(this, To, "f")) {
          const r = ji(this, _o, "f").getPartStartOffset(e);
          if (i.length > 0 && r != null) {
            for (const e of i) {
              if (e.startOrder == null) {
                throw new Error("Start part has no start order");
              }
              t = Math.max(t, e.startOrder + 1);
            }
          }
        }
        return t;
      }
      getTrackData() {
        const t = new Ko(this.environment, ji(this, Eo, "f"));
        for (const e of ji(this, Mo, "f")) {
          t.addPart(e.x, e.y, e.z, e.trackPartData.configuration.id, e.rotation, e.rotationAxis, e.color, e.checkpointOrder, e.startOrder);
        }
        return t;
      }
      loadTrackData(t) {
        this.clear();
        this.environment = t.environment;
        this.sunDirection = t.sunDirection.clone();
        t.forEachPart((t, e, i, r, s, n, a, o, l) => {
          this.setPart(t, e, i, r, s, n, a, o, l);
        });
        return true;
      }
    }
    So = new WeakMap();
    ko = new WeakMap();
    _o = new WeakMap();
    Eo = new WeakMap();
    Mo = new WeakMap();
    Po = new WeakMap();
    To = new WeakMap();
    Qo = new WeakMap();
    vo = new WeakMap();
    Do = new WeakMap();
    Ro = new WeakMap();
    Co = new WeakSet();
    zo = function (t) {
      if (t < 0 || t >= ji(this, Mo, "f").length) {
        throw new Error("Track part index out of bounds");
      }
      const e = ji(this, Mo, "f")[t];
      ji(this, Mo, "f").splice(t, 1);
      e.trackPartData.configuration.tiles.rotated(e.rotation, e.rotationAxis).forEach((t, i, r) => {
        const s = (e.x + t).toString() + "|" + (e.y + i).toString() + "|" + (e.z + r).toString();
        const n = ji(this, Po, "f").get(s);
        if (n == null) {
          throw new Error("Track part section missing");
        }
        {
          const t = n.indexOf(e);
          if (!(t >= 0)) {
            throw new Error("Track part missing from parts by position map");
          }
          n.splice(t, 1);
          if (n.length == 0) {
            ji(this, Po, "f").delete(s);
          }
        }
      });
      const i = ji(this, To, "f").get(e.trackPartData.configuration.id);
      if (i == null) {
        throw new Error("Track part type is missing from parts by type map");
      }
      for (let t = 0; t < i.length; ++t) {
        if (i[t] == e) {
          i.splice(t, 1);
          break;
        }
        if (t == i.length - 1) {
          throw new Error("Track part is missing from parts by type map");
        }
      }
      const r = ji(this, vo, "f").get(e.trackPartData.configuration.id);
      if (r == null) {
        ji(this, vo, "f").set(e.trackPartData.configuration.id, new Set([e.color]));
      } else {
        r.add(e.color);
      }
    };
    Wo = function () {
      let t = Infinity;
      let e = Infinity;
      let i = -Infinity;
      let r = -Infinity;
      for (const s of ji(this, Mo, "f")) {
        t = Math.min(s.x, t);
        e = Math.min(s.z, e);
        i = Math.max(s.x, i);
        r = Math.max(s.z, r);
      }
      if (Number.isFinite(t) && Number.isFinite(e) && Number.isFinite(i) && Number.isFinite(r)) {
        Xi(this, Qo, {
          min: new v(t, e),
          max: new v(i, r)
        }, "f");
      } else {
        Xi(this, Qo, {
          min: new v(),
          max: new v()
        }, "f");
      }
    };
    Fo = function (t, e, i, r, s, n) {
      const a = [];
      for (const r of ji(this, Mo, "f")) {
        let s = r.color;
        if (s == Ja.Default) {
          s = i;
        }
        if (r.trackPartData == t && s == e) {
          a.push(r);
        }
      }
      if (a.length > 0) {
        const i = t.colors.get(e);
        if (i == null) {
          throw new Error("Mesh is not loaded");
        }
        const o = new li(i.geometry, i.material, a.length);
        o.matrixAutoUpdate = false;
        o.matrixWorldAutoUpdate = false;
        o.frustumCulled = false;
        o.castShadow = r;
        o.receiveShadow = true;
        for (let t = 0; t < a.length; ++t) {
          o.setMatrixAt(t, a[t].matrix);
        }
        ji(this, So, "f").scene.add(o);
        ji(this, Ro, "f").push({
          trackPartId: t.configuration.id,
          color: e,
          mesh: o
        });
        if (s != null) {
          const i = new xo(o, s);
          i.update(new di(new R(0, 1, 0), 0), n);
          ji(this, So, "f").scene.add(i);
          ji(this, Ro, "f").push({
            trackPartId: t.configuration.id,
            color: e,
            mesh: i
          });
        }
      }
    };
    No.partSize = 5;
    const Lo = No;
    var Oo;
    var Vo;
    var Ho;
    var Go;
    var Jo;
    var qo;
    var Zo;
    var Yo;
    Vo = new WeakMap();
    Ho = new WeakMap();
    Go = new WeakMap();
    Jo = new WeakMap();
    qo = new WeakMap();
    Oo = new WeakSet();
    Zo = function () {
      let t = -Infinity;
      let e = null;
      for (const i of ji(this, Jo, "f")) {
        const r = ji(this, qo, "f").get(i);
        if (r == null) {
          throw new Error("Part list does not exist");
        }
        const s = Ao(i).startOffset;
        if (r.length > 0 && s != null) {
          for (const i of r) {
            if (i.startOrder == null) {
              throw new Error("Start part has no start order");
            }
            if (i.startOrder >= t) {
              t = i.startOrder;
              e = {
                part: i,
                startOffset: s
              };
            }
          }
        }
      }
      if (e != null) {
        return {
          x: e.part.x,
          y: e.part.y,
          z: e.part.z,
          rotation: e.part.rotation,
          rotationAxis: e.part.rotationAxis,
          startOffset: e.startOffset.clone()
        };
      } else {
        return null;
      }
    };
    Yo = function () {
      const t = [];
      t.push(ji(this, Ho, "f"));
      t.push(ji(this, Go, "f").representation);
      let e = Infinity;
      let i = Infinity;
      let r = Infinity;
      let s = -Infinity;
      let n = -Infinity;
      let a = -Infinity;
      for (const [, t] of ji(this, qo, "f")) {
        for (const o of t) {
          e = Math.min(o.x, e);
          i = Math.min(o.y, i);
          r = Math.min(o.z, r);
          s = Math.max(o.x, s);
          n = Math.max(o.y, n);
          a = Math.max(o.z, a);
        }
      }
      if (!Number.isFinite(e) || !Number.isFinite(i) || !Number.isFinite(r) || !Number.isFinite(s) || !Number.isFinite(n) || !Number.isFinite(a)) {
        e = 0;
        i = 0;
        r = 0;
        s = 0;
        n = 0;
        a = 0;
      }
      const o = s - e + 1;
      const l = n - i + 1;
      const h = a - r + 1;
      const c = Math.max(1, Math.min(4, Math.ceil(Math.log2(o + 1) / 8)));
      const A = Math.max(1, Math.min(4, Math.ceil(Math.log2(l + 1) / 8)));
      const d = Math.max(1, Math.min(4, Math.ceil(Math.log2(h + 1) / 8)));
      t.push(e & 255, e >>> 8 & 255, e >>> 16 & 255, e >>> 24 & 255, i & 255, i >>> 8 & 255, i >>> 16 & 255, i >>> 24 & 255, r & 255, r >>> 8 & 255, r >>> 16 & 255, r >>> 24 & 255, (c | A << 2 | d << 4) & 255);
      for (const s of ji(this, Jo, "f")) {
        const n = ji(this, qo, "f").get(s);
        if (n == null) {
          throw new Error("Part list does not exist");
        }
        if (s < 0 || s > 255) {
          throw new Error("Part id is out of range");
        }
        const a = n.length;
        t.push(s & 255, a & 255, a >>> 8 & 255, a >>> 16 & 255, a >>> 24 & 255);
        for (const a of n) {
          const n = a.x - e;
          const o = a.y - i;
          const l = a.z - r;
          if (c == 1) {
            t.push(n & 255);
          } else if (c == 2) {
            t.push(n & 255, n >>> 8 & 255);
          } else if (c == 3) {
            t.push(n & 255, n >>> 8 & 255, n >>> 16 & 255);
          } else if (c == 4) {
            t.push(n & 255, n >>> 8 & 255, n >>> 16 & 255, n >>> 24 & 255);
          }
          if (A == 1) {
            t.push(o & 255);
          } else if (A == 2) {
            t.push(o & 255, o >>> 8 & 255);
          } else if (A == 3) {
            t.push(o & 255, o >>> 8 & 255, o >>> 16 & 255);
          } else if (A == 4) {
            t.push(o & 255, o >>> 8 & 255, o >>> 16 & 255, o >>> 24 & 255);
          }
          if (d == 1) {
            t.push(l & 255);
          } else if (d == 2) {
            t.push(l & 255, l >>> 8 & 255);
          } else if (d == 3) {
            t.push(l & 255, l >>> 8 & 255, l >>> 16 & 255);
          } else if (d == 4) {
            t.push(l & 255, l >>> 8 & 255, l >>> 16 & 255, l >>> 24 & 255);
          }
          t.push((a.rotation & 3 | (a.rotationAxis & 7) << 2) & 255, a.color & 255);
          if (uo.includes(s)) {
            if (a.checkpointOrder == null) {
              throw new Error("Checkpoint has no checkpoint order");
            }
            t.push(a.checkpointOrder & 255, a.checkpointOrder >>> 8 & 255);
          }
          if (fo.includes(s)) {
            if (a.startOrder == null) {
              throw new Error("Start has no start order");
            }
            t.push(a.startOrder & 255, a.startOrder >>> 8 & 255, a.startOrder >>> 16 & 255, a.startOrder >>> 24 & 255);
          }
        }
      }
      return new Uint8Array(t);
    };
    const Ko = class {
      constructor(t, e) {
        Oo.add(this);
        Vo.set(this, null);
        Ho.set(this, undefined);
        Go.set(this, undefined);
        Jo.set(this, []);
        qo.set(this, new Map());
        Xi(this, Ho, t, "f");
        Xi(this, Go, e.clone(), "f");
      }
      get environment() {
        return ji(this, Ho, "f");
      }
      set environment(t) {
        Xi(this, Vo, null, "f");
        Xi(this, Ho, t, "f");
      }
      get sunDirection() {
        return ji(this, Go, "f").clone();
      }
      set sunDirection(t) {
        Xi(this, Vo, null, "f");
        Xi(this, Go, t.clone(), "f");
      }
      get numberOfParts() {
        let t = 0;
        for (const e of ji(this, qo, "f").values()) {
          t += e.length;
        }
        return t;
      }
      addPart(t, e, i, r, s, n, a, o, l) {
        Xi(this, Vo, null, "f");
        const h = {
          x: t,
          y: e,
          z: i,
          rotation: s,
          rotationAxis: n,
          color: a,
          checkpointOrder: o,
          startOrder: l
        };
        const c = ji(this, qo, "f").get(r);
        if (c != null) {
          let t = 0;
          let e = c.length;
          while (t < e) {
            const i = t + e >>> 1;
            const r = c[i];
            if ((h.x - r.x || h.y - r.y || h.z - r.z || h.rotation - r.rotation || h.rotationAxis - r.rotationAxis || h.color - r.color || (h.checkpointOrder ?? -1) - (r.checkpointOrder ?? -1) || (h.startOrder ?? -1) - (r.startOrder ?? -1)) < 0) {
              e = i;
            } else {
              t = i + 1;
            }
          }
          c.splice(t, 0, h);
        } else {
          ji(this, qo, "f").set(r, [h]);
          let t = 0;
          let e = ji(this, Jo, "f").length;
          while (t < e) {
            const i = t + e >>> 1;
            if (ji(this, Jo, "f")[i] < r) {
              t = i + 1;
            } else {
              e = i;
            }
          }
          ji(this, Jo, "f").splice(t, 0, r);
        }
      }
      forEachPart(t) {
        for (const e of ji(this, Jo, "f")) {
          const i = ji(this, qo, "f").get(e);
          if (i == null) {
            throw new Error("Part list does not exist");
          }
          for (const r of i) {
            t(r.x, r.y, r.z, e, r.rotation, r.rotationAxis, r.color, r.checkpointOrder, r.startOrder);
          }
        }
      }
      getId() {
        Xi(this, Vo, ji(this, Vo, "f") ?? (0, va.sha256)(ji(this, Oo, "m", Yo).call(this)), "f");
        return ji(this, Vo, "f");
      }
      getBounds() {
        let t = Infinity;
        let e = Infinity;
        let i = -Infinity;
        let r = -Infinity;
        this.forEachPart((s, n, a) => {
          t = Math.min(s, t);
          e = Math.min(a, e);
          i = Math.max(s, i);
          r = Math.max(a, r);
        });
        if (Number.isFinite(t) && Number.isFinite(e) && Number.isFinite(i) && Number.isFinite(r)) {
          return {
            min: new v(t, e),
            max: new v(i, r)
          };
        } else {
          return {
            min: new v(),
            max: new v()
          };
        }
      }
      hasStartingPoint() {
        return ji(this, Oo, "m", Zo).call(this) != null;
      }
      getStartTransform() {
        const t = ji(this, Oo, "m", Zo).call(this);
        if (t != null) {
          const e = io(t.rotation, t.rotationAxis).multiply(new D().setFromEuler(new Ft(0, Math.PI, 0)));
          const i = t.startOffset;
          i.applyQuaternion(e);
          return {
            position: new R(t.x * Lo.partSize + i.x, t.y * Lo.partSize + i.y, t.z * Lo.partSize + i.z),
            quaternion: e
          };
        }
        return null;
      }
      toSaveString() {
        const t = ji(this, Oo, "m", Yo).call(this);
        const e = new Ma.Deflate({
          level: 9,
          windowBits: 9,
          memLevel: 9
        });
        e.push(t, true);
        const i = za(e.result);
        const r = new Ma.Deflate({
          level: 9,
          windowBits: 15,
          memLevel: 9
        });
        r.push(i, true);
        return za(r.result);
      }
      toExportString(t) {
        const e = new TextEncoder().encode(t.name);
        let i;
        let r;
        if (t.author != null) {
          r = new TextEncoder().encode(t.author);
          i = r.length;
        } else {
          r = null;
          i = 0;
        }
        const s = [];
        if (t.lastModified == null) {
          s.push(0);
        } else {
          s.push(1);
          const e = Math.floor(t.lastModified.getTime() / 1000);
          s.push(e & 255, e >>> 8 & 255, e >>> 16 & 255, e >>> 24 & 255);
        }
        const n = new Uint8Array(1 + e.length + 1 + i + s.length);
        n[0] = e.length;
        n.set(e, 1);
        n[1 + e.length] = i;
        if (r != null) {
          n.set(r, 1 + e.length + 1);
        }
        n.set(s, 1 + e.length + 1 + i);
        const a = ji(this, Oo, "m", Yo).call(this);
        const o = new Ma.Deflate({
          level: 9,
          windowBits: 9,
          memLevel: 9
        });
        o.push(n, false);
        o.push(a, true);
        const l = za(o.result);
        const h = new Ma.Deflate({
          level: 9,
          windowBits: 15,
          memLevel: 9
        });
        h.push(l, true);
        return "PolyTrack2" + za(h.result);
      }
      static fromSaveString(t) {
        const e = function (t) {
          const e = Wa(t);
          if (e == null) {
            return null;
          }
          const i = new Ma.Inflate({
            to: "string"
          });
          i.push(e, true);
          if (i.err) {
            return null;
          }
          const r = i.result;
          if (typeof r != "string") {
            return null;
          }
          const s = Wa(r);
          if (s == null) {
            return null;
          }
          const n = new Ma.Inflate();
          n.push(s, true);
          if (n.err) {
            return null;
          }
          const a = n.result;
          if (a instanceof Uint8Array) {
            return wo(0, a);
          } else {
            return null;
          }
        }(t);
        if (e != null) {
          return e;
        }
        const i = function (t) {
          const e = Wa(t);
          if (e == null) {
            return null;
          }
          const i = new Ma.Inflate({
            to: "string"
          });
          i.push(e, true);
          if (i.err) {
            return null;
          }
          const r = i.result;
          if (typeof r != "string") {
            return null;
          }
          const s = Wa(r);
          if (s == null) {
            return null;
          }
          const n = new Ma.Inflate();
          n.push(s, true);
          if (n.err) {
            return null;
          }
          const a = n.result;
          if (a instanceof Uint8Array) {
            return yo(0, a);
          } else {
            return null;
          }
        }(t);
        if (i != null) {
          return i;
        }
        const r = bo(t);
        if (r != null) {
          return r;
        }
        const s = mo(t);
        if (s != null) {
          return s;
        }
        const n = po(t);
        if (n != null) {
          return n;
        }
        const a = go(t);
        return a ?? null;
      }
      static fromExportString(t) {
        const e = t.replace(/\s+/g, "");
        const i = function (t) {
          const e = "PolyTrack2";
          if (!t.startsWith(e)) {
            return null;
          }
          const i = Wa(t.substring(10));
          if (i == null) {
            return null;
          }
          const r = new Ma.Inflate({
            to: "string"
          });
          r.push(i, true);
          if (r.err) {
            return null;
          }
          const s = r.result;
          if (typeof s != "string") {
            return null;
          }
          const n = Wa(s);
          if (n == null) {
            return null;
          }
          const a = new Ma.Inflate();
          a.push(n, true);
          if (a.err) {
            return null;
          }
          const o = a.result;
          if (!(o instanceof Uint8Array)) {
            return null;
          }
          let l = 0;
          if (o.length < l + 1) {
            return null;
          }
          const h = o[l];
          l += 1;
          if (o.length < l + h) {
            return null;
          }
          const c = new TextDecoder("utf-8").decode(o.subarray(l, l + h));
          l += h;
          if (o.length < l + 1) {
            return null;
          }
          const A = o[l];
          let d;
          l += 1;
          if (A > 0) {
            if (o.length < l + A) {
              return null;
            }
            d = new TextDecoder("utf-8").decode(o.subarray(l, l + A));
            l += A;
          } else {
            d = null;
          }
          if (o.length < l + 1) {
            return null;
          }
          const u = o[l];
          let f;
          l += 1;
          if (u == 0) {
            f = null;
          } else {
            if (u != 1) {
              return null;
            }
            {
              if (o.length < l + 4) {
                return null;
              }
              const t = o[l + 0] | o[l + 1] << 8 | o[l + 2] << 16 | o[l + 3] << 24;
              l += 4;
              f = new Date(t * 1000);
            }
          }
          const g = wo(l, o);
          if (g == null) {
            return null;
          } else {
            return {
              trackMetadata: {
                name: c,
                author: d,
                lastModified: f
              },
              trackData: g
            };
          }
        }(e);
        if (i != null) {
          return i;
        }
        const r = function (t) {
          const e = "PolyTrack1";
          if (!t.startsWith(e)) {
            return null;
          }
          const i = Wa(t.substring(10));
          if (i == null) {
            return null;
          }
          const r = new Ma.Inflate({
            to: "string"
          });
          r.push(i, true);
          if (r.err) {
            return null;
          }
          const s = r.result;
          if (typeof s != "string") {
            return null;
          }
          const n = Wa(s);
          if (n == null) {
            return null;
          }
          const a = new Ma.Inflate();
          a.push(n, true);
          if (a.err) {
            return null;
          }
          const o = a.result;
          if (!(o instanceof Uint8Array)) {
            return null;
          }
          const l = o[0];
          if (o.length < 1 + l) {
            return null;
          }
          const h = new TextDecoder("utf-8").decode(o.subarray(1, 1 + l));
          const c = o[1 + l];
          if (o.length < 1 + l + 1 + c) {
            return null;
          }
          let A;
          A = c > 0 ? new TextDecoder("utf-8").decode(o.subarray(1 + l + 1, 1 + l + 1 + c)) : null;
          const d = yo(1 + l + 1 + c, o);
          if (d == null) {
            return null;
          } else {
            return {
              trackMetadata: {
                name: h,
                author: A,
                lastModified: null
              },
              trackData: d
            };
          }
        }(e);
        if (r != null) {
          return r;
        }
        const s = function (t) {
          if (!t.startsWith("v3")) {
            return null;
          }
          const e = Wa(t.substring(2, 4));
          if (e == null) {
            return null;
          }
          if (e.length != 1) {
            return null;
          }
          const i = e[0];
          const r = Wa(t.substring(4, 4 + i));
          if (r == null) {
            return null;
          }
          let s;
          try {
            s = new TextDecoder("utf-8").decode(r);
          } catch {
            return null;
          }
          const n = bo(t.substring(4 + i));
          if (n == null) {
            return null;
          } else {
            return {
              trackMetadata: {
                name: s,
                author: null,
                lastModified: null
              },
              trackData: n
            };
          }
        }(e);
        if (s != null) {
          return s;
        }
        const n = function (t) {
          if (!t.startsWith("v2")) {
            return null;
          }
          const e = Wa(t.substring(2, 4));
          if (e == null) {
            return null;
          }
          if (e.length != 1) {
            return null;
          }
          const i = e[0];
          const r = Math.ceil(i / 3 * 4);
          const s = Wa(t.substring(4, 4 + r));
          if (s == null) {
            return null;
          }
          let n;
          try {
            n = new TextDecoder("utf-8").decode(s);
          } catch {
            return null;
          }
          const a = mo(t.substring(4 + r));
          if (a == null) {
            return null;
          } else {
            return {
              trackMetadata: {
                name: n,
                author: null,
                lastModified: null
              },
              trackData: a
            };
          }
        }(e);
        if (n != null) {
          return n;
        }
        const a = function (t) {
          if (!t.startsWith("v1n")) {
            return null;
          }
          const e = Pa(t.substring(3, 5));
          if (e == null) {
            return null;
          }
          if (e.length != 1) {
            return null;
          }
          const i = e[0];
          const r = t.substring(5, 5 + i);
          let s;
          try {
            s = decodeURIComponent(r);
          } catch (t) {
            console.warn(t);
            return null;
          }
          const n = po(t.substring(5 + i));
          if (n == null) {
            return null;
          } else {
            return {
              trackMetadata: {
                name: s,
                author: null,
                lastModified: null
              },
              trackData: n
            };
          }
        }(e);
        if (a != null) {
          return a;
        }
        const o = function (t) {
          let e;
          let i;
          try {
            e = JSON.parse(t);
          } catch (t) {
            console.warn(t);
            return null;
          }
          if (typeof e != "object" || e == null) {
            return null;
          }
          if (!("name" in e) || typeof e.name != "string") {
            return null;
          }
          if (!("track" in e) || typeof e.track != "string") {
            return null;
          }
          try {
            i = JSON.parse(e.track);
          } catch (t) {
            console.warn(t);
            return null;
          }
          const r = go(i);
          if (r == null) {
            return null;
          } else {
            return {
              trackMetadata: {
                name: e.name,
                author: null,
                lastModified: null
              },
              trackData: r
            };
          }
        }(t);
        return o ?? null;
      }
      createThumbnail() {
        let t = Infinity;
        let e = Infinity;
        let i = -Infinity;
        let r = -Infinity;
        this.forEachPart((s, n, a, o, l, h) => {
          Ao(o).tiles.rotated(l, h).forEach((n, o, l) => {
            t = Math.min(t, Math.floor((s + n - 2) / 4));
            e = Math.min(e, Math.floor((a + l - 2) / 4));
            i = Math.max(i, Math.floor((s + n - 2) / 4));
            r = Math.max(r, Math.floor((a + l - 2) / 4));
          });
        });
        if (!Number.isFinite(t) || !Number.isFinite(e) || !Number.isFinite(i) || !Number.isFinite(r)) {
          t = 0;
          e = 0;
          i = 0;
          r = 0;
        }
        const s = 10;
        const n = i - t + 1;
        if (n <= s) {
          i += Math.ceil((s - n) / 2);
          t -= Math.ceil((s - n) / 2);
        }
        const a = r - e + 1;
        if (a <= s) {
          r += Math.ceil((s - a) / 2);
          e -= Math.ceil((s - a) / 2);
        }
        const o = document.createElement("canvas");
        o.width = Math.min(1024, i - t + 1);
        o.height = Math.min(1024, r - e + 1);
        const l = o.getContext("2d");
        if (l == null) {
          throw new Error("Failed to get canvas context");
        }
        const h = l.createImageData(o.width, o.height);
        const c = [];
        const A = [];
        const d = [];
        let u;
        let f;
        let g;
        switch (this.environment) {
          case Ha.Summer:
            u = 255;
            f = 255;
            g = 255;
            break;
          case Ha.Winter:
            u = 190;
            f = 216;
            g = 247;
            break;
          case Ha.Desert:
            u = 237;
            f = 226;
            g = 175;
        }
        this.forEachPart((i, r, s, n, a, l) => {
          const p = Ao(n);
          p.tiles.rotated(a, l).forEach((r, n, a) => {
            const l = Math.floor((i + r - 2) / 4) - t;
            const m = Math.floor((s + a - 2) / 4) - e;
            const b = (l + m * o.width) * 4;
            h.data[b + 0] = u;
            h.data[b + 1] = f;
            h.data[b + 2] = g;
            h.data[b + 3] = 255;
            if (p.startOffset != null) {
              A.push([l, m]);
            } else if (p.detector != null && p.detector.type == to.Checkpoint) {
              c.push([l, m]);
            } else if (p.detector != null && p.detector.type == to.Finish) {
              d.push([l, m]);
            }
          });
        });
        for (const [t, e] of c) {
          h.data[(t + e * o.width) * 4 + 0] = 226;
          h.data[(t + e * o.width) * 4 + 1] = 192;
          h.data[(t + e * o.width) * 4 + 2] = 38;
          h.data[(t + e * o.width) * 4 + 3] = 255;
        }
        for (const [t, e] of A) {
          h.data[(t + e * o.width) * 4 + 0] = 51;
          h.data[(t + e * o.width) * 4 + 1] = 140;
          h.data[(t + e * o.width) * 4 + 2] = 224;
          h.data[(t + e * o.width) * 4 + 3] = 255;
        }
        for (const [t, e] of d) {
          h.data[(t + e * o.width) * 4 + 0] = 209;
          h.data[(t + e * o.width) * 4 + 1] = 41;
          h.data[(t + e * o.width) * 4 + 2] = 41;
          h.data[(t + e * o.width) * 4 + 3] = 255;
        }
        l.putImageData(h, 0, 0);
        return o;
      }
    };
    const jo = class {
      constructor() {
        this.up = false;
        this.right = false;
        this.down = false;
        this.left = false;
        this.reset = false;
      }
      dispose() {}
      getControls() {
        return {
          up: this.up,
          right: this.right,
          down: this.down,
          left: this.left,
          reset: this.reset
        };
      }
    };
    function Xo(t) {
      if (t.length < 12) {
        throw new Error("CarState data is too short");
      }
      return !!(t[11] & 2);
    }
    self.addEventListener("unhandledrejection", t => {
      throw new Error("Simulation unhandled rejection: " + String(t.reason));
    });
    importScripts("lib/polytrack_physics.js");
    const $o = [];
    onmessage = t => {
      $o.push(t);
    };
    PolyTrackPhysics().then(async t => {
      await async function () {
        const t = Uint8Array.from("\0asm\0\0\0$`||`|||`\0`|\0``||\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\tAÀ\0U\fmemory\0acos\0asin\0atan\0atan2\0exp\0log\0pow\0sqrt\0tan\0log2\0log10\0\n°n«~|#\0AÀk\"$\0 A\bjA\xA0 A¨jA\xA0 AÈjA\xA0 AèjAÐ\0AÀ\0(\0\"\n Aj\"j! A}jAm\"A\0 A\0J\" k! At AtkAÀ\0j!\tA\0!@ A\bj Atj A\0H|D\0\0\0\0\0\0\0\0 \t(\0·9\0  I@ \tAj!\t Aj!   Ij\" M\r Ahj!A\0!@  j!\r  \nI!D\0\0\0\0\0\0\0\0!!A\0!@@ ! \0 Atj+\0 A\bj \r kAtj+\0¢\xA0!!  O\r\0   Ij\" M\r AÈj Atj !9\0  \nI@  j\" \nM\rD\0\0\0\0\0\0ðD\0\0\0\0\0\0à  Ahl\"j\"AþK\"D\0\0\0\0\0\0\0\0D\0\0\0\0\0\0` A¹pI\"D\0\0\0\0\0\0ð? AxH\" AÿJ\" Aý AýHApj Axj \" Aðh AðhJAj AÉj \"   Aÿj­B4¿¢!# Aäj\" \nAtj!\rA kAq!A kAq! AÀj! Aj! \n!@@ AÈj \"Atj+\0!!@ E\r\0 Aèj!\b !@ !D\0\0\0\0\0\0p>¢\"\"D\0\0\0\0\0\0àÁf! !A\0Aÿÿÿÿ \"D\0\0\0\0\0\0àAc \"ªAxAx  \"D\0\0ÀÿÿÿßAd \" \"b·\"\"D\0\0\0\0\0\0pÁ¢\xA0\"!D\0\0\0\0\0\0àÁf! \bA\0Aÿÿÿÿ !D\0\0\0\0\0\0àAc@ !ª\fAxAx  !D\0\0ÀÿÿÿßAd ! !b6\0  Atj+\0 \"\xA0!! AI\"\r \bAj!\bA Aj \"\r\0@ E@ \r \f !D\0\0\0\0\0\0à¢\"!D\0\0\0\0\0\0à¢ ! !! \f !D\0\0\0\0\0\0`¢\"!D\0\0\0\0\0\0`¢ ! !! !@ ! Aÿj­B4¿¢\"$D\0\0\0\0\0\0À?¢\"!D\0\0\0\0\0\0\0\0a\r\0 !½\" B4§Aÿq\"A²\bK\r\0@@  B\0Y@  !D\0\0\0\0\0 0C\xA0D\0\0\0\0\0 0Ã\xA0 !¡\"\"9¸ AÿO\r +¸D\0\0\0\0\0\0\0\0!!\f  !D\0\0\0\0\0 0Ã\xA0D\0\0\0\0\0 0C\xA0 !¡\"\"9¸ AÿI\r ! \"\xA0\"!D\0\0\0\0\0\0ð¿\xA0 ! \"D\0\0\0\0\0\0\0\0d!!\f +¸D\0\0\0\0\0\0ð¿!! $ !D\0\0\0\0\0\0 À¢\xA0\"!D\0\0\0\0\0\0àÁf! !A\0Aÿÿÿÿ !D\0\0\0\0\0\0àAc@ !ª\fAxAx  !D\0\0ÀÿÿÿßAd ! !b\"·¡!!@@@@ A\0J\"E@ E@  Atj(\0Au\fA!\fA\0 !D\0\0\0\0\0\0à?fE\r\f  Atj\" (\0\"  u\" tk\"6\0  j!  u\"\fAH\r \rA\0!\b\f \f\fA\0!A\0!\b AG@ Aq! Aèj!@ (\0!Aÿÿÿ!\t@ \b\r\0A\b!\t \r\0A\f  \t k6\0A\0!\t Aj\"(\0!\bAÿÿÿ!@ \tE\r\0A\b! \b\r\0A\0\f   \bk6\0A!\b A\bj!  Aj\"G\r\0 AqE\r\0 Aèj Atj\"\t(\0!Aÿÿÿ!@ \b\r\0A\b! \r\0A\0!\b\f \t  k6\0A!\b@ E\r\0Aÿÿÿ!@@ \0Aÿÿÿ!  Atj\" (\0 q6\0 Aj! \f \fAG\r\0D\0\0\0\0\0\0ð? !¡ #D\0\0\0\0\0\0\0\0 \b¡!!A!\f !D\0\0\0\0\0\0\0\0a@ \r! !@ \n Aj\"\bK\r\0A\0!\t@@ Aèj \bAtj(\0 \tr!\t \n \bO\r\0 \n \b \n \bIk\"\bM\r ! \tE\r\0 At jAäj!@ Aj! Ahj! (\0 A|j!E\r\0\f@ Aj! (\0 A|j!E\r\0  O\r Aj!\t@ A\bj \t j\"Atj \t jAtAÀ\0j(\0·9\0A\0!D\0\0\0\0\0\0\0\0!!@@ ! \0 Atj+\0 A\bj  kAtj+\0¢\xA0!!  O\r\0   Ij\" M\r AÈj \tAtj !9\0 \t O\r \t I \tj\"!\t  M\r\0\f@@@A\0 k\"AÿL@ AxN\r !D\0\0\0\0\0\0`¢!! A¸pM\rAÉ k!\f !D\0\0\0\0\0\0à¢!! AþK\rAx k!\f !D\0\0\0\0\0\0`¢!! Aðh AðhJAj!\f !D\0\0\0\0\0\0à¢!! Aý AýHApj! ! Aÿj­B4¿¢\"!D\0\0\0\0\0\0pAf@ !D\0\0\0\0\0\0p>¢\"\"D\0\0\0\0\0\0àÁf!\0 !A\0Aÿÿÿÿ \"D\0\0\0\0\0\0àAc@ \"ª\fAxAx \0 \"D\0\0ÀÿÿÿßAd \" \"b·\"!D\0\0\0\0\0\0pÁ¢\xA0\"\"D\0\0\0\0\0\0àÁf!\0 Aèj AtjA\0Aÿÿÿÿ \"D\0\0\0\0\0\0àAc@ \"ª\fAxAx \0 \"D\0\0ÀÿÿÿßAd \" \"b6\0  j! Aj! !D\0\0\0\0\0\0àÁf!\0 Aèj AtjA\0Aÿÿÿÿ !D\0\0\0\0\0\0àAc@ !ª\fAxAx \0 !D\0\0ÀÿÿÿßAd ! !b6\0|@@ AÿL@D\0\0\0\0\0\0ð? AxN\r A¸pM\r AÉj!D\0\0\0\0\0\0`\f AþK\r Axj!D\0\0\0\0\0\0à\f Aðh AðhJAj!D\0\0\0\0\0\0\0\0\f Aý AýHApj!D\0\0\0\0\0\0ð Aÿj­B4¿¢!! Aq  AÈj Atj ! Aèj Atj(\0·¢9\0 !D\0\0\0\0\0\0p>¢!! Aj!\0 @ \0At jAÀj! \0At jAäj!@  !D\0\0\0\0\0\0p>¢\"\" (\0·¢9\0 A\bj ! Aj(\0·¢9\0 Apj! Axj! \"D\0\0\0\0\0\0p>¢!! \0AG \0A~j!\0\r\0 Aj! AÈj Atj!\b !@@ \n  \"\0k\" \n I\"\rE@A\0!D\0\0\0\0\0\0\0\0!!\f \rAjA~q!\tD\0\0\0\0\0\0\0\0!!A\0!A\0!@ ! AÀ\0j+\0  \bj\"+\0¢\xA0 A\xA0À\0j+\0 A\bj+\0¢\xA0!! Aj! \t Aj\"G\r\0 A¨j Atj \rAq| ! ! AtAÀ\0j+\0 AÈj \0 jAtj+\0¢\xA09\0 \bAxj!\b \0Aj! \0\r\0@ Aq\"\0E@D\0\0\0\0\0\0\0\0!! !\f A¨j Atj!D\0\0\0\0\0\0\0\0!! !@ Aj! ! +\0\xA0!! Axj! \0Aj\"\0\r\0 AO@ At jAj!@ ! Aj+\0\xA0 Aj+\0\xA0 A\bj+\0\xA0 +\0\xA0!! A`j! AG A|j!\r\0  ! ! \f9\0 +¨ !¡!!@ E\r\0A!@ ! A¨j Atj+\0\xA0!!  O\r   Ij\" M\r\0  ! ! \f9\b AÀj$\0 Aq·~|#\0A0k\"$\0@@@@@ ½\"B §\"Aÿÿÿÿq\"AûÔ½O@ A¼ñO@ A\0Aÿÿÿÿ@ AûÃäO@ Aÿÿ¿ÿK\r BÿÿÿÿÿÿÿB°Á\0¿\"D\0\0\0\0\0\0àÁf! D\0\0\0\0\0\0àAcE\r ª\f@ Av\"  DÈÉm0_ä?¢D\0\0\0\0\0 8C\xA0D\0\0\0\0\0 8Ã\xA0\"D\0\0@Tû!ù¿¢\xA0\" D1cba´Ð=¢\"\t¡\"\b½B4§AÿqkAH\r\0   D\0\0`a´Ð=¢\"\b¡\" Dsp.£;¢  ¡ \b¡¡\"\t¡\"\b½B4§AÿqkA2H@ !\f  D\0\0\0.£;¢\"\b¡\" DÁI %{9¢  ¡ \b¡¡\"\t¡!\b \0 \b9\0 \0  \b¡ \t¡9 D\0\0\0\0\0\0àÁf! \0A\0Aÿÿÿÿ D\0\0\0\0\0\0àAc@ ª\fAxAx  D\0\0ÀÿÿÿßAd  b6\b\f\bAxAx  D\0\0ÀÿÿÿßAd  b·\"9\0  ¡D\0\0\0\0\0\0pA¢\"D\0\0\0\0\0\0àÁf! A\0Aÿÿÿÿ D\0\0\0\0\0\0àAc@ ª\fAxAx  D\0\0ÀÿÿÿßAd  b\"·\"9\b   ¡D\0\0\0\0\0\0pA¢\"9 A(jB 7\0 A jB 7\0 B 7 AA A D\0\0\0\0\0\0\0\0a Aj AvAêwj\0! BU@ \0 6\b \0 + 9 \0 +9\0\f \0A\0 k6\b \0 + 9 \0 +9\0\f A½û×O@ AûÃäF@@  DÈÉm0_ä?¢D\0\0\0\0\0 8C\xA0D\0\0\0\0\0 8Ã\xA0\"D\0\0@Tû!ù¿¢\xA0\" D1cba´Ð=¢\"\t¡\"\b½Bøÿ\0Bÿÿÿÿÿÿÿ?V\r\0  D\0\0`a´Ð=¢\"\b¡\" Dsp.£;¢  ¡ \b¡¡\"\t¡\"\b½Bÿ\0Bÿÿÿÿÿÿÿÿ<V@ !\f  D\0\0\0.£;¢\"\b¡\" DÁI %{9¢  ¡ \b¡¡\"\t¡!\b \0 \b9\0 \0  \b¡ \t¡9 D\0\0\0\0\0\0àÁf! \0A\0Aÿÿÿÿ D\0\0\0\0\0\0àAc@ ª\fAxAx  D\0\0ÀÿÿÿßAd  b6\b\f B\0Y@ \0A6\b \0 D\0\0@Tû!À\xA0\"D1cba´ð½\xA0\"9\0 \0  ¡D1cba´ð½\xA09\f \0A|6\b \0 D\0\0@Tû!@\xA0\"D1cba´ð=\xA0\"9\0 \0  ¡D1cba´ð=\xA09\f Aü²ËF\r B\0Y@ \0A6\b \0 D\0 0|ÙÀ\xA0\"DÊ§é½\xA0\"9\0 \0  ¡DÊ§é½\xA09\f \0A}6\b \0 D\0 0|Ù@\xA0\"DÊ§é=\xA0\"9\0 \0  ¡DÊ§é=\xA09\f Aÿÿ?qAûÃ$F\r Aý²O@ BU@ \0A6\b \0 D\0\0@Tû!\tÀ\xA0\"D1cba´à½\xA0\"9\0 \0  ¡D1cba´à½\xA09\f \0A~6\b \0 D\0\0@Tû!\t@\xA0\"D1cba´à=\xA0\"9\0 \0  ¡D1cba´à=\xA09\f BU\r \0A6\b \0 D\0\0@Tû!ù?\xA0\"D1cba´Ð=\xA0\"9\0 \0  ¡D1cba´Ð=\xA09\f \0A 6\b \0  ¡\"9 \0 9\0\f \0A6\b \0 D\0\0@Tû!ù¿\xA0\"D1cba´Ð½\xA0\"9\0 \0  ¡D1cba´Ð½\xA09\f@ Av\"  DÈÉm0_ä?¢D\0\0\0\0\0 8C\xA0D\0\0\0\0\0 8Ã\xA0\"D\0\0@Tû!ù¿¢\xA0\" D1cba´Ð=¢\"\t¡\"\b½B4§AÿqkAH\r\0   D\0\0`a´Ð=¢\"\b¡\" Dsp.£;¢  ¡ \b¡¡\"\t¡\"\b½B4§AÿqkA2H@ !\f  D\0\0\0.£;¢\"\b¡\" DÁI %{9¢  ¡ \b¡¡\"\t¡!\b \0 \b9\0 \0  \b¡ \t¡9 D\0\0\0\0\0\0àÁf! \0A\0Aÿÿÿÿ D\0\0\0\0\0\0àAc@ ª\fAxAx  D\0\0ÀÿÿÿßAd  b6\b\f@  DÈÉm0_ä?¢D\0\0\0\0\0 8C\xA0D\0\0\0\0\0 8Ã\xA0\"D\0\0@Tû!ù¿¢\xA0\" D1cba´Ð=¢\"\t¡\"\b½Bøÿ\0Bÿÿÿÿÿÿÿ?V\r\0  D\0\0`a´Ð=¢\"\b¡\" Dsp.£;¢  ¡ \b¡¡\"\t¡\"\b½Bÿ\0Bÿÿÿÿÿÿÿÿ<V@ !\f  D\0\0\0.£;¢\"\b¡\" DÁI %{9¢  ¡ \b¡¡\"\t¡!\b \0 \b9\0 \0  \b¡ \t¡9 D\0\0\0\0\0\0àÁf! \0A\0Aÿÿÿÿ D\0\0\0\0\0\0àAc@ ª\fAxAx  D\0\0ÀÿÿÿßAd  b6\b A0j$\0Ì\t~|D\0\0\0\0\0\0ð?!\r@@@@ ½\"B §\"\bAÿÿÿÿq\" §\"rE\r\0 \0½\"\fB §! \f§\"\tEA\0 AÀÿF\r\0@@@@@@ Aÿÿÿÿq\"AÀÿK\r\0@ AÀÿF@ \t AÀÿKr\r\f AÀÿO\r AÀÿG\r \r\0 AÀ|j \trE\r Aÿÿ¿ÿK\rD\0\0\0\0\0\0\0\0  BU \0 \xA0 \fB\0S\r \r AÀÿG\r\f D\0\0\0\0\0\0\0\0 BUA!@@ AÿÿÿK\r\0A\0! AÀÿI\r\0 Av! AÿÿÿM@ \r A k\"v\" t G\rA Aqk!\f A k\"v\"\n t G\r\0A \nAqk! \r\f \r AÀÿF\r \bAÿG@ \bAG\r \0 \0¢ \fB\0S\r\0 \0 \0!\r@@ \t\r\0 AL@ AxF AÀÿ{Fr\r A@G\r\f E AÀÿFr AÀÿFr\rD\0\0\0\0\0\0ð?!@ \fB\0Y\r\0@@ \0 \0 \0¡\"\0 \0£D\0\0\0\0\0\0ð¿!@ AM@ \rD\0\0\0\0\0\0@C¢\"\0 \r AÀ\0I\"!\r \0½B §  \"Aÿÿ?q\"AÀÿr! AuAÌwAx j!A\0!@ A±I\r\0 Aúì.I@A!\f Aÿr! Aj! At\"A¨À\0j+\0D\0\0\0\0\0\0ð? AÀ\0j+\0\"\0 \r½Bÿÿÿÿ ­B ¿\"\xA0£\"\r  \0¡\" At AvjA\xA0j­B ¿\"  \r¢\"½Bp¿\"\r¢¡   \0¡¡ \r¢¡¢\"\0 \r \r¢\"D\0\0\0\0\0\0\b@\xA0 \0  \r\xA0¢  ¢\"\0 \0¢ \0 \0 \0 \0 \0DïNEJ(~Ê?¢DeÛÉJÍ?\xA0¢DA©`tÑ?\xA0¢DM&QUUÕ?\xA0¢Dÿ«oÛ¶mÛ?\xA0¢D33333ã?\xA0¢\xA0\"\xA0½Bp¿\"\0¢   \0D\0\0\0\0\0\0\bÀ\xA0 ¡¡¢\xA0\"  \r \0¢\"\r\xA0½Bp¿\"\0 \r¡¡Dý:Ü\tÇî?¢ \0Dõ[à/>¾¢\xA0\xA0\"\r A¸À\0j+\0\" \r \0D\0\0\0à\tÇî?¢\"\r\xA0\xA0 ·\"\xA0½Bp¿\"\0 ¡ ¡ \r¡¡!\f@@ AÀM@ Aÿÿ¿ÿI\r AÀÿK\r \rD\0\0\0\0\0\0ð¿\xA0\"\0DDß]ø®T>¢ \0 \0¢D\0\0\0\0\0\0à? \0 \0D\0\0\0\0\0\0Ð¿¢DUUUUUUÕ?\xA0¢¡¢Dþ+eG÷¿¢\xA0\"\r \r \0D\0\0\0`G÷?¢\"\r\xA0½Bp¿\"\0 \r¡¡!\f Aÿÿ¿ÿM@D\0\0\0\0\0\0ðD\0\0\0\0\0\0\0\0 B\0SD\0\0\0\0\0\0ðD\0\0\0\0\0\0\0\0 \bA\0J \bA\0L\r\f B\0Y\r\f \0 Bp¿\"¢\"\r  ¢  ¡ \0¢\xA0\"\0\xA0\"½\"§!@ B §\"Aÿÿ¿L@ AøÿÿqAÿÃM\r Aè¼ûj r\r \0  \r¡eE\r\f AÀû{j r\r \0Dþ+eG<\xA0  \r¡dE\r\0\fA\0! | AÿÿÿÿqAÿK~A\0AÀ\0 AvAjv j\"Aÿÿ?qAÀ\0rA Av\"kv\"k  B\0S! \0 \rA@ Aju q­B ¿¡\"\r\xA0½ Bp¿\"D\0\0\0\0C.æ?¢\" \0  \r¡¡Dï9úþB.æ?¢ D9l¨\fa\\ ¾¢\xA0\"\r\xA0\"\0 \0 \0 \0 \0¢\"    DÐ¤¾ri7f>¢DñkÒÅA½»¾\xA0¢D,Þ%¯jV?\xA0¢D½¾lÁf¿\xA0¢D>UUUUUÅ?\xA0¢¡\"¢ D\0\0\0\0\0\0\0À\xA0£ \r \0 ¡¡\" \0 ¢\xA0¡¡D\0\0\0\0\0\0ð?\xA0\"\0½\"B § Atj\"AÀ\0N@ Bÿÿÿÿ ­B ¿\f \0 ¢!\r\fD\0\0\0\0\0\0ð? \r£ \r B\0S!\r \fBU\r\0  AÀ|jrE@ \r \r¡\"\0 \0£ \r \r AF \r BU@ \0D\0\0\0\0\0\0ð? \0£ DYóøÂn¥¢DYóøÂn¥¢ Du\0<ä7~¢Du\0<ä7~¢³~|#\0A k\"$\0@@|@@ \0½\"B §Aÿÿÿÿq\"AüÃ¤ÿO@ Aÿÿ¿ÿM@ A\bj \0 (! +!\b +\b\"½\"Bÿÿÿÿ\0Bðåò?V\"\r\f \0 \0¡!\0\f AòO@ Bÿÿÿÿ\0Bðåò?V\"\r \0\f  \0D\0\0\0\0\0\0p8¢ \0D\0\0\0\0\0\0pG\xA0 AÀ\0I9\b +\b\fD-DTû!é?   BU\"¡D\\3&¦< \b \b ¡\xA0!D\0\0\0\0\0\0\0\0!\b\fD-DTû!é? \0 \0 B\0S¡D\\3&¦<\xA0\"   ¢\"¢\"\0DcUUUUUÕ?¢  \0  ¢\"\0 \0 \0 \0 \0DsS`ÛËuó¾¢D¦7\xA0~?\xA0¢DeòòØDC?\xA0¢D(VÉ\"mm?\xA0¢D7Öôd?\xA0¢DzþÁ?\xA0  \0 \0 \0 \0 \0DÔz¿tp*û>¢Dé§ð2¸?\xA0¢Dh÷&0?\xA0¢DàþÈÛW?\xA0¢Dnéã&?\xA0¢DþA³º¡«?\xA0¢\xA0¢D\0\0\0\0\0\0\0\0\xA0¢D\0\0\0\0\0\0\0\0\xA0\xA0\"\xA0!\0 E\rD\0\0\0\0\0\0ð?   \0 \0¢ \0D\0\0\0\0\0\0ð?\xA0£¡\xA0\"\0 \0\xA0¡\"\0 \0 B\0S!\0\f Aq!    ¢\"¢\"\0DcUUUUUÕ?¢ \b  \b \0  ¢\"\0 \0 \0 \0 \0DsS`ÛËuó¾¢D¦7\xA0~?\xA0¢DeòòØDC?\xA0¢D(VÉ\"mm?\xA0¢D7Öôd?\xA0¢DzþÁ?\xA0  \0 \0 \0 \0 \0DÔz¿tp*û>¢Dé§ð2¸?\xA0¢Dh÷&0?\xA0¢DàþÈÛW?\xA0¢Dnéã&?\xA0¢DþA³º¡«?\xA0¢\xA0¢\xA0¢\xA0\xA0\"\b\xA0!\0 E@ E\rD\0\0\0\0\0\0ð¿ \0£\" \0½Bp¿\"\0 ½Bp¿\"¢D\0\0\0\0\0\0ð?\xA0 \b \0 ¡¡ ¢\xA0¢ \xA0!\0\fD\0\0\0\0\0\0ð? ·\" \xA0¡\"  \b \0 \0¢  \0\xA0£¡\xA0\"\0 \0\xA0¡\"\0 \0 B\0S!\0 A j$\0 \0Õ\t~ \0½\"\nB §\"AÀÿqAÀÿF@ \0 \0¢ \0\xA0 \n§!@@@@ A\0L@ Aÿÿÿÿq rE\r \nBW\r Au Aÿÿ?K\rA! @ !\f !@ Akj! \"At! AI\r\0\f \0 \0¡\"\0 \0£!\0 \0 Av\" A\0H\r A gAsk\"t!  t! A\0 kv r!  k Aÿÿ?qAÀ\0r!Axj\"\tAq@ At Avr! At! At Avr! At!A!A\0!@   j\" j  J\"! A\0  kAt Avr! At!A\0   j! AK Av!\r\0Ax!A\0!@  LA\0  G  \b \"j\"IrE@  k  Ik!  A\0H  j\"\bAJqj!  j!  k! At Avr! Av! At! AO\r\0@  rE\r\0 AF@ Aj!A\0!\f Aq j! At Avr­ \tAtA@q AujAÿj­B ¿­~|#\0Ak! \0½\"B?§!@| \0@@@@ B §Aÿÿÿÿq\"A«ÆO@ \0 \0b@ \0 \0Dï9úþB.@d\r \0DÒ¼zÝ+#ÀcE\r D\0\0\0\0\0\0\xA0¶ \0£¶8 * \0DQ0-ÕIÀcE\r\f AÂÜØþM@ AÀñM\rA\0! \0\f A±ÅÂÿM\r \0Dþ+eG÷?¢ AtAÀ\0j+\0\xA0\"D\0\0\0\0\0\0àÁf!A\0Aÿÿÿÿ D\0\0\0\0\0\0àAc@ ª\fAxAx  D\0\0ÀÿÿÿßAd  b\f \0D\0\0\0\0\0\0à¢  \0D\0\0\0\0\0\0à\xA09\b +\b \0D\0\0\0\0\0\0ð?\xA0 As k\"·\"D\0\0àþB.æ¿¢\xA0\"\0 Dv<y5ï9ê=¢\"¡! \0    ¢\"\0 \0 \0 \0 \0DÐ¤¾ri7f>¢DñkÒÅA½»¾\xA0¢D,Þ%¯jV?\xA0¢D½¾lÁf¿\xA0¢D>UUUUUÅ?\xA0¢¡\"\0¢D\0\0\0\0\0\0\0@ \0¡£ ¡\xA0D\0\0\0\0\0\0ð?\xA0! E\r\0@@@ AÿL@ AxN\r D\0\0\0\0\0\0`¢! A¸pM\r AÉj!\f D\0\0\0\0\0\0à¢! AþK\r Axj!\f D\0\0\0\0\0\0`¢! Aðh AðhJAj!\f D\0\0\0\0\0\0à¢! Aý AýHApj!  Aÿj­B4¿¢! Ê~|@ \0½\"B §Aÿÿÿÿq\"Aÿÿ¿ÿM@ AÿO@ BU@D\0\0\0\0\0\0ð? \0¡D\0\0\0\0\0\0à?¢\"\0 \0 \0 \0 \0 \0D\t÷ý\rá=?¢D²uàïI?\xA0¢D;hµ(¤¿\xA0¢DUDUÁÉ?\xA0¢D}oëÖÔ¿\xA0¢DUUUUUUÅ?\xA0¢ \0 \0 \0 \0D.±Å¸³?¢DYlæ¿\xA0¢DÈYå*\0@\xA0¢DK-':À\xA0¢D\0\0\0\0\0\0ð?\xA0£ \0\"¢ \0 ½Bp¿\"\0 \0¢¡  \0\xA0£\xA0 \0\xA0\"\0 \0\xA0D-DTû!ù? \0D\0\0\0\0\0\0ð?\xA0D\0\0\0\0\0\0à?¢\"\0\"  \0 \0 \0 \0 \0 \0D\t÷ý\rá=?¢D²uàïI?\xA0¢D;hµ(¤¿\xA0¢DUDUÁÉ?\xA0¢D}oëÖÔ¿\xA0¢DUUUUUUÅ?\xA0¢ \0 \0 \0 \0D.±Å¸³?¢DYlæ¿\xA0¢DÈYå*\0@\xA0¢DK-':À\xA0¢D\0\0\0\0\0\0ð?\xA0£¢D\\3&¦¼\xA0\xA0¡\"\0 \0\xA0!\fD-DTû!ù?! AãI\rD\\3&¦< \0 \0¢\"     D\t÷ý\rá=?¢D²uàïI?\xA0¢D;hµ(¤¿\xA0¢DUDUÁÉ?\xA0¢D}oëÖÔ¿\xA0¢DUUUUUUÅ?\xA0¢    D.±Å¸³?¢DYlæ¿\xA0¢DÈYå*\0@\xA0¢DK-':À\xA0¢D\0\0\0\0\0\0ð?\xA0£ \0¢¡ \0¡D-DTû!ù?\xA0 § AÀ|jr@D\0\0\0\0\0\0\0\0 \0 \0¡£D\0\0\0\0\0\0\0\0D-DTû!\t@ BU É~| \0½\"B §Aÿÿÿÿq\"Aÿÿ¿ÿM@@|@ AÿO@D\0\0\0\0\0\0ð? \0¡D\0\0\0\0\0\0à?¢\"\0 \0 \0 \0 \0 \0D\t÷ý\rá=?¢D²uàïI?\xA0¢D;hµ(¤¿\xA0¢DUDUÁÉ?\xA0¢D}oëÖÔ¿\xA0¢DUUUUUUÅ?\xA0¢ \0 \0 \0 \0D.±Å¸³?¢DYlæ¿\xA0¢DÈYå*\0@\xA0¢DK-':À\xA0¢D\0\0\0\0\0\0ð?\xA0£! \0! A²æ¼ÿK\rD-DTû!é? ½Bp¿\" \xA0¡D\\3&¦< \0  ¢¡  \xA0£\"\0 \0\xA0¡   \xA0¢¡\xA0D-DTû!é?\xA0\f A@jAòI\r \0 \0¢\"     D\t÷ý\rá=?¢D²uàïI?\xA0¢D;hµ(¤¿\xA0¢DUDUÁÉ?\xA0¢D}oëÖÔ¿\xA0¢DUUUUUUÅ?\xA0¢    D.±Å¸³?¢DYlæ¿\xA0¢DÈYå*\0@\xA0¢DK-':À\xA0¢D\0\0\0\0\0\0ð?\xA0£ \0¢ \0\xA0D-DTû!ù?   ¢\xA0\"\0 \0\xA0D\\3&¦¼\xA0¡\"\0 \0 B\0S!\0 \0 § AÀ|jr@D\0\0\0\0\0\0\0\0 \0 \0¡£ \0D-DTû!ù?¢D\0\0\0\0\0\0p8\xA0~|#\0Ak!@@@@ \0½\"B §Aÿÿÿÿq\"Aÿÿ¿\xA0M@ AðþI\r \0!\0 AÌÿI\r AI\rD\0\0\0\0\0\0ð¿ \0£!\0A\f \0 \0b\rD-DTû!ù? \0¦A AòO\r AÀ\0O\r  \0¶8\f *\f \0 \0D\0\0\0\0\0\0ø¿\xA0 \0D\0\0\0\0\0\0ø?¢D\0\0\0\0\0\0ð?\xA0£!\0A\f AÿO@ \0D\0\0\0\0\0\0ð¿\xA0 \0D\0\0\0\0\0\0ð?\xA0£!\0A\f \0 \0\xA0D\0\0\0\0\0\0ð¿\xA0 \0D\0\0\0\0\0\0\0@\xA0£!\0A\0! \0 \0¢\" ¢\"    D/lj,D´¢¿¢DýÞR-Þ­¿\xA0¢Dmt¯ò°³¿\xA0¢Dq#þÆq¼¿\xA0¢DÄëÉ¿\xA0¢!      DÚ\"ã:­?¢Dë\rv$K{©?\xA0¢DQ=Ð\xA0f\r±?\xA0¢Dn LÅÍE·?\xA0¢Dÿ\0$IÂ?\xA0¢D\rUUUUUÕ?\xA0¢! AðþO@ At\"AÈÀ\0j+\0 \0  \xA0¢ AèÀ\0j+\0¡ \0¡¡\"\0 \0 B\0S \0 \0  \xA0¢¡!\0 \0ç~|@@@@ \0½\"B\0S\r\0 B §\"AÀ\0I\r\0 Aÿÿ¿ÿK\rAÀÿ!Ax! AÀÿG@ !\f §\rD\0\0\0\0\0\0\0\0 \0½Bÿÿÿÿÿÿÿÿÿ\0P@D\0\0\0\0\0\0ð¿ \0 \0¢£ B\0S\r \0D\0\0\0\0\0\0PC¢½\"B §!AËw! Aâ¾%j\"Av j·\"D\0`PDÓ?¢\"\b Bÿÿÿÿ Aÿÿ?qAÁÿj­B ¿D\0\0\0\0\0\0ð¿\xA0\"\0 \0 \0D\0\0\0\0\0\0à?¢¢\"¡½Bp¿\"D\0\0 {ËÛ?¢\"\t\xA0\"\n \t \b \n¡\xA0 \0 ¡ ¡ \0 \0D\0\0\0\0\0\0\0@\xA0£\"\0  \0 \0¢\" ¢\"\0 \0 \0DÆxÐ\tÃ?¢D¯xÅqÌ?\xA0¢DúÙ?\xA0¢  \0 \0 \0DDR>ßñÂ?¢DÞËdFÇ?\xA0¢DY\"$IÒ?\xA0¢DUUUUUå?\xA0¢\xA0\xA0¢\xA0\"\0D\0\0 {ËÛ?¢ D6+ñóþY=¢ \0 \xA0DÕ­Ê8»=¢\xA0\xA0\xA0\xA0 \0 \0¡D\0\0\0\0\0\0\0\0£!\0 \0Î~|@@@@ \0½\"B\0S\r\0 B §\"AÀ\0I\r\0 Aÿÿ¿ÿK\rAÀÿ!Ax! AÀÿG@ !\f §\rD\0\0\0\0\0\0\0\0 \0½Bÿÿÿÿÿÿÿÿÿ\0P@D\0\0\0\0\0\0ð¿ \0 \0¢£ B\0S\r \0D\0\0\0\0\0\0PC¢½\"B §!AËw! Bÿÿÿÿ Aâ¾%j\"Aÿÿ?qAÁÿj­B ¿D\0\0\0\0\0\0ð¿\xA0\"\0 \0 \0D\0\0\0\0\0\0à?¢¢\"¡½Bp¿\"D\0\0 eG÷?¢\" Av j·\"\b\xA0\"\t  \b \t¡\xA0 \0 ¡ ¡ \0 \0D\0\0\0\0\0\0\0@\xA0£\"\0  \0 \0¢\" ¢\"\0 \0 \0DÆxÐ\tÃ?¢D¯xÅqÌ?\xA0¢DúÙ?\xA0¢  \0 \0 \0DDR>ßñÂ?¢DÞËdFÇ?\xA0¢DY\"$IÒ?\xA0¢DUUUUUå?\xA0¢\xA0\xA0¢\xA0\"\0D\0\0 eG÷?¢ \0 \xA0D\0¢ï.üç=¢\xA0\xA0\xA0 \0 \0¡D\0\0\0\0\0\0\0\0£!\0 \0¥~  a \0 \0aqE@ \0 \xA0 ½\"B §\"AÀ|j §\"rE@ \0\b AvAq\" \0½\"B?§r!@@@ B §Aÿÿÿÿq\" §rE@D-DTû!\tÀ!@@ \0\0 \0D-DTû!\t@ Aÿÿÿÿq\" rE\r@ AÀÿF@ AÀÿG\rDÒ!3|ÙÀ! AF\r AtAØÀ\0j+\0 AÀÿF A j Ir\r| @D\0\0\0\0\0\0\0\0 A j I\r \0 £\b!@@@ \0 D\\3&¦¡¼\xA0D-DTû!\tÀ\xA0 D-DTû!\t@ D\\3&¦¡¼\xA0¡D-DTû!\tÀ! AF\r\0 AtAðÀ\0j+\0! D-DTû!ù? \0¦D-DTû!ù? \0¦~|@@@@ \0½\"B\0S\r\0 B §\"AÀ\0I\r\0 Aÿÿ¿ÿK\rAÀÿ!Ax! AÀÿG@ !\f §\rD\0\0\0\0\0\0\0\0 \0½Bÿÿÿÿÿÿÿÿÿ\0P@D\0\0\0\0\0\0ð¿ \0 \0¢£ B\0S\r \0D\0\0\0\0\0\0PC¢½\"B §!AËw! Aâ¾%j\"Av j·\"D\0\0àþB.æ?¢ Bÿÿÿÿ Aÿÿ?qAÁÿj­B ¿D\0\0\0\0\0\0ð¿\xA0\"\0 Dv<y5ï9ê=¢ \0 \0D\0\0\0\0\0\0\0@\xA0£\" \0 \0D\0\0\0\0\0\0à?¢¢\"  ¢\" ¢\"\0 \0 \0DÆxÐ\tÃ?¢D¯xÅqÌ?\xA0¢DúÙ?\xA0¢  \0 \0 \0DDR>ßñÂ?¢DÞËdFÇ?\xA0¢DY\"$IÒ?\xA0¢DUUUUUå?\xA0¢\xA0\xA0¢\xA0 ¡\xA0\xA0 \0 \0¡D\0\0\0\0\0\0\0\0£!\0 \0 AO@ \0A\0 \0kAq\"j! @@ \0A\0:\0\0 \0Aj\"\0 I\r\0   k\"A|q\"j!\0 AN@@ A 6\0 Aj\" \0I\r\0 Aq! @ \0 j!@ \0A\0:\0\0 \0Aj\"\0 I\r\0¬\0@@@ AÿL@ AxN\r \0D\0\0\0\0\0\0`¢!\0 A¸pM\r AÉj!\f \0D\0\0\0\0\0\0à¢!\0 AþK\r Axj!\f \0D\0\0\0\0\0\0`¢!\0 Aðh AðhJAj!\f \0D\0\0\0\0\0\0à¢!\0 Aý AýHApj! \0 Aÿj­B4¿¢\b\0 \0 \r\b\0 \0 \b\0 \0 \0 \0\0 \0\0 \0\b\0 \0\0 \0\f\0 \0\0 \0\0 \0\n\0 \0\tæ\n\0AÀ\0ð\0\0\0\0\0\0\0\0\0\0\0\0ù¢\0DNn\0ü)\0ÑW'\0Ý4õ\0bÛÀ\0<\0AC\0cQþ\0»Þ«\0·aÅ\0:n$\0ÒMB\0Ià\0\tê.\0Ñ\0ëþ\0)±\0è>§\0õ5\0D».\0é\0´&p\0A~_\0Ö9\0S9\0ô9\0_\0(ù½\0ø;\0Þÿ\0\0/ï\0\nZ\0mm\0Ï~6\0\tË'\0FO·\0f?\0-ê_\0º'u\0åëÇ\0={ñ\0÷9\0R\0ûkê\0±_\0\b] 0V\0{üF\0ð«k\0 ¼Ï 6ô\0ã©\0^a\0\bæ\0e\0\xA0_\0@h\0Øÿ\0'sM\01\0ÊV\0É¨s\0{â`\0kÀ\0\0\0\0@û!ù?\0\0\0\0-Dt>\0\0\0Fø<\0\0\0`QÌx;\0\0\0ð9\0\0\0@ %z8\0\0\0\"ã6\0\0\0\0ói5-DTû!é?-DTû!é¿Ò!3|Ù@\0AÿÀ\0)-DTû!\t@\0\0\0\0\0\0à?\0\0\0\0\0\0à¿\0\0\0\0\0\0ð?\0\0\0\0\0\0ø?\0A°À\0\bÐÏCëýL>\0AÃÀ\0@¸â?O»ag¬Ý?-DTû!é?öÒsï?-DTû!ù?âe/\"+z<\\3&¦<½Ëðzp<\\3&¦<Lazy instance has previously been poisoned\0\0\b\0*\0\0\0C:\\Users\\Jonathan\\.cargo\\registry\\src\\index.crates.io-6f17d22bba15001f\\once_cell-1.20.2\\src/lib.rs\0\0<\0b\0\0\0\b\0\0\0\0\0reentrant init\0\0°\0\0\0\0<\0b\0\0\0z\0\0\r\0\0\0\0\0\0\f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0/rust/deps/dlmalloc-0.2.6/src/dlmalloc.rsassertion failed: psize >= size + min_overhead\0ð\0)\0\0\0¨\0\0\t\0\0\0assertion failed: psize <= size + max_overhead\0\0ð\0)\0\0\0®\0\0\r\0\0\0memory allocation of  bytes failed\0\0\0\0\0\0­\0\r\0\0\0library/std/src/alloc.rsÌ\0\0\0\0d\0\0\t\0\0\0\0\0\0\f\0\0\0\0\0\0\b\0\0\0\0\0\0\0\b\0\0\0\0\0\0\t\0\0\0\0\0\0\0\b\0\0\0\0\0\0\n\0\0\0\0\0\0\f\0\0\0\r\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0capacity overflow\0\0\0L\0\0\0\0library/alloc/src/raw_vec.rsh\0\0\0\0\0\0\0\0\0 00010203040506070809101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899\0AôÀ\0\0|\tproducers\blanguageRust\0\fprocessed-byrustc1.81.0 (eeb90cda1 2024-09-04)walrus0.23.3\fwasm-bindgen0.2.100 (2405ec2b4)\0,target_features+mutable-globals+\bsign-ext", t => t.charCodeAt(0));
        const e = await WebAssembly.compile(t);
        const i = (await WebAssembly.instantiate(e)).exports;
        Math = {
          E: Wi,
          LN10: Fi,
          LN2: Ui,
          LOG2E: Ni,
          LOG10E: Li,
          PI: Oi,
          SQRT1_2: Vi,
          SQRT2: Hi,
          abs: Math.abs,
          acos: i.acos,
          asin: i.asin,
          atan: i.atan,
          atan2: i.atan2,
          ceil: Math.ceil,
          cos: qi,
          exp: i.exp,
          floor: Math.floor,
          log: i.log,
          max: Math.max,
          min: Math.min,
          pow: i.pow,
          random: Math.random,
          round: Math.round,
          sin: Ji,
          sqrt: i.sqrt,
          tan: i.tan,
          clz32: Math.clz32,
          imul: Math.imul,
          sign: Math.sign,
          log10: i.log10,
          log2: i.log2,
          log1p: Math.log1p,
          expm1: Math.expm1,
          cosh: Math.cosh,
          sinh: Math.sinh,
          tanh: Math.tanh,
          acosh: Math.acosh,
          asinh: Math.asinh,
          atanh: Math.atanh,
          hypot: Math.hypot,
          trunc: Math.trunc,
          cbrt: Math.cbrt,
          fround: Math.fround,
          [Symbol.toStringTag]: "Math"
        };
      }();
      const e = [];
      const i = (() => {
        const e = t.ccall("malloc", "number", ["number"], [227]);
        if (typeof e != "number" || e == 0) {
          throw new Error("Failed to allocate memory for car state buffer");
        }
        return e;
      })();
      function r(i) {
        const r = i.data;
        switch (r.messageType) {
          case Ki.Init:
            (function (e) {
              const i = e.version;
              if (i != "0.6.2") {
                throw new Error("Simulation worker mismatch: 0.6.2");
              }
              const r = e.isRealtime;
              const s = e.trackParts;
              const n = e.carMassOffset;
              const a = e.carCollisionShapeVertices;
              const o = t.ccall("malloc", "number", ["number"], [a.length * 4]);
              if (typeof o != "number" || o == 0) {
                throw new Error("Failed to allocate memory for car collision shape vertices");
              }
              t.HEAPF32.set(a, o / 4);
              t.ccall("initializeCarCollisionShape", "void", ["number", "number", "number"], [n, o, a.length]);
              t.ccall("free", "void", ["number"], [o]);
              for (const c of s) {
                const A = t.ccall("malloc", "number", ["number"], [c.vertices.byteLength]);
                if (typeof A != "number" || A == 0) {
                  throw new Error("Failed to allocate memory for track part vertices");
                }
                t.HEAPF32.set(c.vertices, A / 4);
                t.ccall("addTrackPartConfiguration", "void", ["number", "number", "number", "number", "number", "number", "number", "number", "number", "number", "boolean", "number", "number", "number"], [c.id, A, c.vertices.length, c.detector != null ? c.detector.type : -1, c.detector != null ? c.detector.center[0] : 0, c.detector != null ? c.detector.center[1] : 0, c.detector != null ? c.detector.center[2] : 0, c.detector != null ? c.detector.size[0] : 0, c.detector != null ? c.detector.size[1] : 0, c.detector != null ? c.detector.size[2] : 0, c.startOffset != null, c.startOffset != null ? c.startOffset[0] : 0, c.startOffset != null ? c.startOffset[1] : 0, c.startOffset != null ? c.startOffset[2] : 0]);
                t.ccall("free", "void", ["number"], [A]);
              }
              if (r) {
                if (self.requestAnimationFrame) {
                  let d = performance.now();
                  function u() {
                    l();
                    self.requestAnimationFrame(u);
                    d = performance.now();
                  }
                  u();
                  setInterval(() => {
                    if (performance.now() - d > 100) {
                      l();
                    }
                  }, 1000 / 60);
                } else {
                  setInterval(l, 1000 / 60);
                }
              } else {
                setInterval(h);
              }
            })(r);
            break;
          case Ki.Verify:
            (function (e) {
              const i = Ko.fromSaveString(e.trackData);
              if (i == null) {
                throw new Error("Failed to load track");
              }
              const r = Qa.deserialize(e.carRecording);
              if (r == null) {
                throw new Error("Failed to deserialize recording");
              }
              const a = new tr(r);
              const o = i.getStartTransform();
              if (o == null) {
                throw new Error("Track has no starting point");
              }
              const l = e.carId;
              s(l, e.mountainVertices, new R(e.mountainOffset.x, e.mountainOffset.y, e.mountainOffset.z), i, o);
              const h = {
                id: l,
                hasFinished: false,
                frames: 0
              };
              const c = e.targetFrames;
              while (!h.hasFinished && h.frames < c) {
                const t = n(h, a.getControls(h.frames));
                h.hasFinished = Xo(new Uint8Array(t));
                h.frames++;
              }
              const A = h.hasFinished && h.frames == c;
              postMessage({
                messageType: Ki.VerifyResult,
                carId: l,
                result: A
              });
              t.ccall("deleteCarModel", "void", ["number"], [l]);
              a.dispose();
            })(r);
            break;
          case Ki.TestDeterminism:
            {
              const e = t.ccall("testDeterminism", "boolean");
              if (typeof e != "boolean") {
                throw new Error("Determinism result has invalid type");
              }
              postMessage({
                messageType: Ki.DeterminismResult,
                isDeterminstic: e
              });
              break;
            }
          case Ki.CreateCar:
            (function (t) {
              const i = Ko.fromSaveString(t.trackData);
              if (i == null) {
                throw new Error("Failed to load track");
              }
              let r;
              let n = null;
              const a = t.carRecording;
              if (a == null) {
                r = new jo();
                n = {
                  up: false,
                  right: false,
                  down: false,
                  left: false,
                  reset: false,
                  buffer: []
                };
              } else {
                const t = Qa.deserialize(a);
                if (t == null) {
                  throw new Error("Failed to deserialize recording");
                }
                r = new tr(t);
              }
              const o = i.getStartTransform();
              if (o == null) {
                throw new Error("Track has no starting point");
              }
              const l = t.carId;
              s(l, t.mountainVertices, new R(t.mountainOffset.x, t.mountainOffset.y, t.mountainOffset.z), i, o);
              e.push({
                id: l,
                controls: r,
                userControls: n,
                hasStarted: false,
                frames: 0,
                targetSimulationFrames: null,
                isPaused: false
              });
            })(r);
            break;
          case Ki.DeleteCar:
            (function (i) {
              const r = i.carId;
              for (let i = 0; i < e.length; i++) {
                const s = e[i];
                if (s.id == r) {
                  s.controls.dispose();
                  t.ccall("deleteCarModel", "void", ["number"], [r]);
                  e.splice(i, 1);
                  break;
                }
              }
            })(r);
            break;
          case Ki.StartCar:
            (function (t) {
              const i = t.carId;
              for (const r of e) {
                if (r.id == i) {
                  r.hasStarted = true;
                  r.targetSimulationFrames = t.targetSimulationTimeFrames;
                  break;
                }
              }
            })(r);
            break;
          case Ki.ControlCar:
            (function (t) {
              const i = performance.now();
              const r = t.carId;
              for (const s of e) {
                if (s.id == r) {
                  if (s.userControls == null) {
                    throw new Error("Tried to control uncontrollable car");
                  }
                  const e = Math.max(0, i - a);
                  let r = s.frames + e;
                  if (!s.hasStarted) {
                    r = 0;
                  }
                  if (s.userControls.buffer.length == 0) {
                    s.userControls.buffer.push({
                      frame: r,
                      up: t.up,
                      right: t.right,
                      down: t.down,
                      left: t.left,
                      reset: t.reset
                    });
                  } else {
                    const e = s.userControls.buffer[s.userControls.buffer.length - 1].frame;
                    if (r == e) {
                      s.userControls.buffer[s.userControls.buffer.length - 1] = {
                        frame: r,
                        up: t.up,
                        right: t.right,
                        down: t.down,
                        left: t.left,
                        reset: t.reset
                      };
                    } else if (r > e) {
                      s.userControls.buffer.push({
                        frame: r,
                        up: t.up,
                        right: t.right,
                        down: t.down,
                        left: t.left,
                        reset: t.reset
                      });
                    }
                  }
                  break;
                }
              }
            })(r);
            break;
          case Ki.PauseCar:
            (function (t) {
              const i = t.carId;
              for (const r of e) {
                if (r.id == i) {
                  r.isPaused = t.isPaused;
                  break;
                }
              }
            })(r);
        }
      }
      for (const t of $o) {
        r(t);
      }
      function s(e, i, r, s, n) {
        const a = t.ccall("malloc", "number", ["number"], [i.length * 4]);
        if (typeof a != "number" || a == 0) {
          throw new Error("Failed to allocate memory for mountain vertices");
        }
        t.HEAPF32.set(i, a / 4);
        const o = s.numberOfParts;
        const l = t.ccall("malloc", "number", ["number"], [o * 19]);
        if (typeof l != "number" || l == 0) {
          throw new Error("Failed to allocate memory for track data");
        }
        let h = l;
        const c = new DataView(t.HEAPU8.buffer);
        s.forEachPart((t, e, i, r, s, n, a, o) => {
          c.setUint8(h, r);
          h++;
          c.setInt32(h, t, true);
          h += 4;
          c.setInt32(h, e, true);
          h += 4;
          c.setInt32(h, i, true);
          h += 4;
          c.setUint8(h, s);
          h++;
          c.setUint8(h, n);
          h++;
          const l = o ?? -1;
          c.setInt32(h, l, true);
          h += 4;
        });
        t.ccall("createCarModel", "void", ["number", "number", "number", "number", "number", "number", "number", "number", "number", "number", "number", "number", "number", "number", "number"], [e, a, i.length, r.x, r.y, r.z, l, o, n.position.x, n.position.y, n.position.z, n.quaternion.x, n.quaternion.y, n.quaternion.z, n.quaternion.w]);
        t.ccall("free", "void", ["number"], [a]);
        t.ccall("free", "void", ["number"], [l]);
      }
      function n(e, r) {
        t.ccall("updateCarModel", "void", ["number", "boolean", "boolean", "boolean", "boolean", "boolean", "number"], [e.id, r.up, r.right, r.down, r.left, r.reset, i]);
        return new Uint8Array(t.HEAPU8.buffer, i, 227).slice().buffer;
      }
      $o.length = 0;
      onmessage = r;
      let a = performance.now();
      let o = 0;
      function l() {
        const t = performance.now();
        o += Math.max(0, Math.min(0.1, (t - a) / 1000));
        a = t;
        const i = [];
        while (o > 0.001) {
          o -= 0.001;
          for (const t of e) {
            if (t.targetSimulationFrames != null) {
              throw new Error("Realtime simulation does not support targetSimulationFrames");
            }
            if (t.hasStarted && t.frames < Qa.maxFrames && !t.isPaused) {
              if (t.userControls != null) {
                while (t.userControls.buffer.length > 0 && t.userControls.buffer[0].frame <= t.frames) {
                  const e = t.userControls.buffer.shift();
                  if (e != null) {
                    t.userControls.up = e.up;
                    t.userControls.right = e.right;
                    t.userControls.down = e.down;
                    t.userControls.left = e.left;
                    t.userControls.reset = e.reset;
                  }
                }
                i.push({
                  car: t,
                  controls: {
                    up: t.userControls.up,
                    right: t.userControls.right,
                    down: t.userControls.down,
                    left: t.userControls.left,
                    reset: t.userControls.reset
                  }
                });
                t.frames++;
              } else {
                const e = t.controls.getControls(t.frames);
                i.push({
                  car: t,
                  controls: e
                });
                t.frames++;
              }
            }
          }
        }
        const r = [];
        for (const {
          car: t,
          controls: e
        } of i) {
          r.push(n(t, e));
        }
        if (r.length > 0) {
          postMessage({
            messageType: Ki.UpdateResult,
            carStateBuffers: r
          }, {
            transfer: r
          });
        }
      }
      function h() {
        const t = performance.now();
        if (e.length > 0) {
          const i = [];
          let r;
          do {
            r = true;
            for (let t = 0; t < Math.max(1, Math.ceil(100 / e.length)); t++) {
              for (const t of e) {
                if (t.hasStarted) {
                  if (t.targetSimulationFrames == null) {
                    throw new Error("Non-realtime simulation requires targetSimulationFrames");
                  }
                  if (t.frames < Qa.maxFrames && t.frames < t.targetSimulationFrames && !t.isPaused) {
                    const e = t.controls.getControls(t.frames);
                    i.push(n(t, e));
                    t.frames++;
                    r = false;
                  }
                }
              }
              if (r) {
                break;
              }
            }
          } while (Math.max(0, performance.now() - t) / 1000 < 0.01 && !r);
          if (i.length > 0) {
            postMessage({
              messageType: Ki.UpdateResult,
              carStateBuffers: i
            }, {
              transfer: i
            });
          }
        }
      }
    });
  })();
})();