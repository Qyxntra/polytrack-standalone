var i = require("./1635.js");
var r = require("./5072.js");
var a = r;
var s = require("./7825.js");
var o = s;
var l = require("./7659.js");
var c = l;
var h = require("./5056.js");
var d = h;
var u = require("./540.js");
var f = u;
var p = require("./1113.js");
var g = p;
var m = require("./9178.js");
var _A = {};
_A.styleTagTransform = g;
_A.setAttributes = d;
_A.insert = c.bind(null, "head");
_A.domAPI = o;
_A.insertStyleElement = f;
a(m.A, _A);
if (m.A && m.A.locals) {
  m.A.locals;
}
var v;
var b;
var y;
var w;
var x;
var S;
var k;
var T;
var E;
var M;
var _;
var C;
var R;
var P;
var I;
var L;
var U;
var N = require("./5287.js");
class z {
  constructor(e, t, n, r = false) {
    v.set(this, undefined);
    b.set(this, undefined);
    y.set(this, undefined);
    w.set(this, undefined);
    x.set(this, null);
    S.set(this, undefined);
    k.set(this, null);
    T.set(this, null);
    E.set(this, undefined);
    M.set(this, null);
    _.set(this, []);
    C.set(this, undefined);
    R.set(this, undefined);
    P.set(this, undefined);
    I.set(this, null);
    L.set(this, null);
    U.set(this, null);
    this.record = null;
    (0, i.GG)(this, v, e, "f");
    (0, i.GG)(this, b, t, "f");
    (0, i.GG)(this, y, n, "f");
    (0, i.GG)(this, w, document.createElement("div"), "f");
    if (n.getSetting(N.A.Timer) == "off") {
      (0, i.gn)(this, w, "f").className = "timer-ui hidden";
    } else if (n.getSetting(N.A.Timer) == "top") {
      (0, i.gn)(this, w, "f").className = "timer-ui up";
    } else {
      (0, i.gn)(this, w, "f").className = "timer-ui";
    }
    if (r) {
      (0, i.GG)(this, C, null, "f");
    } else {
      const e = document.createElement("div");
      e.className = "left";
      (0, i.gn)(this, w, "f").appendChild(e);
      const n = document.createElement("div");
      n.className = "title-container";
      e.appendChild(n);
      (0, i.GG)(this, x, document.createElement("h2"), "f");
      (0, i.gn)(this, x, "f").className = "title";
      (0, i.gn)(this, x, "f").textContent = t.get("Record");
      n.appendChild((0, i.gn)(this, x, "f"));
      (0, i.GG)(this, T, document.createElement("h2"), "f");
      (0, i.gn)(this, T, "f").className = "checkpoint-time";
      n.appendChild((0, i.gn)(this, T, "f"));
      const r = document.createElement("div");
      r.className = "time";
      e.appendChild(r);
      (0, i.GG)(this, C, document.createElement("p"), "f");
      (0, i.gn)(this, C, "f").className = "small";
      (0, i.gn)(this, C, "f").textContent = "- - -";
      r.appendChild((0, i.gn)(this, C, "f"));
    }
    const a = document.createElement("div");
    a.className = "center";
    (0, i.gn)(this, w, "f").appendChild(a);
    const s = document.createElement("div");
    s.className = "title-container";
    a.appendChild(s);
    (0, i.GG)(this, S, document.createElement("h2"), "f");
    (0, i.gn)(this, S, "f").className = "title";
    (0, i.gn)(this, S, "f").textContent = t.get("Current");
    s.appendChild((0, i.gn)(this, S, "f"));
    (0, i.GG)(this, E, document.createElement("h2"), "f");
    (0, i.gn)(this, E, "f").className = "checkpoint-time";
    s.appendChild((0, i.gn)(this, E, "f"));
    const o = document.createElement("div");
    o.className = "time";
    a.appendChild(o);
    (0, i.GG)(this, R, document.createElement("p"), "f");
    (0, i.gn)(this, R, "f").textContent = "- - -";
    o.appendChild((0, i.gn)(this, R, "f"));
    if (r) {
      (0, i.GG)(this, P, null, "f");
    } else {
      const e = document.createElement("div");
      e.className = "right";
      (0, i.gn)(this, w, "f").appendChild(e);
      const n = document.createElement("div");
      n.className = "title-container";
      e.appendChild(n);
      (0, i.GG)(this, k, document.createElement("h2"), "f");
      (0, i.gn)(this, k, "f").className = "title";
      (0, i.gn)(this, k, "f").textContent = t.get("Difference");
      n.appendChild((0, i.gn)(this, k, "f"));
      (0, i.GG)(this, M, document.createElement("h2"), "f");
      (0, i.gn)(this, M, "f").className = "checkpoint-time";
      n.appendChild((0, i.gn)(this, M, "f"));
      const r = document.createElement("div");
      r.className = "time";
      e.appendChild(r);
      (0, i.GG)(this, P, document.createElement("p"), "f");
      (0, i.gn)(this, P, "f").className = "small";
      (0, i.gn)(this, P, "f").textContent = "- - -";
      r.appendChild((0, i.gn)(this, P, "f"));
    }
    (0, i.gn)(this, v, "f").appendChild((0, i.gn)(this, w, "f"));
  }
  dispose() {
    if ((0, i.gn)(this, w, "f").parentElement == (0, i.gn)(this, v, "f")) {
      (0, i.gn)(this, v, "f").removeChild((0, i.gn)(this, w, "f"));
    }
  }
  setOverridePosition(e) {
    const t = (0, i.gn)(this, y, "f").getSetting(N.A.Timer);
    (0, i.gn)(this, w, "f").className = t == "off" ? "timer-ui hidden" : e ?? t == "top" ? "timer-ui up" : "timer-ui";
  }
  setBottomOffset(e) {
    (0, i.gn)(this, w, "f").style.bottom = e.toString() + "px";
  }
  hideCheckpointTime() {
    for (const e of (0, i.gn)(this, _, "f")) {
      e.cancel();
    }
    (0, i.gn)(this, _, "f").length = 0;
  }
  showCheckpointTime(e, t) {
    this.hideCheckpointTime();
    if ((0, i.gn)(this, T, "f") != null && t != null) {
      (0, i.gn)(this, T, "f").textContent = z.formatTimeString(t, false);
      (0, i.gn)(this, _, "f").push((0, i.gn)(this, T, "f").animate([{
        opacity: 0,
        transform: "translateX(20px)",
        offset: 0,
        easing: "ease-in-out"
      }, {
        opacity: 1,
        transform: "translateX(0)",
        offset: 1 / 28,
        easing: "ease-in-out"
      }, {
        opacity: 1,
        transform: "translateX(0)",
        offset: 27 / 28,
        easing: "ease-in-out"
      }, {
        opacity: 0,
        transform: "translateX(-10px)",
        offset: 1,
        easing: "ease-in-out"
      }], {
        duration: 3500
      }));
    }
    (0, i.gn)(this, E, "f").textContent = z.formatTimeString(e, false);
    (0, i.gn)(this, _, "f").push((0, i.gn)(this, E, "f").animate([{
      opacity: 0,
      transform: "translateX(20px)",
      offset: 0,
      easing: "ease-in-out"
    }, {
      opacity: 1,
      transform: "translateX(0)",
      offset: 1 / 28,
      easing: "ease-in-out"
    }, {
      opacity: 1,
      transform: "translateX(0)",
      offset: 27 / 28,
      easing: "ease-in-out"
    }, {
      opacity: 0,
      transform: "translateX(-10px)",
      offset: 1,
      easing: "ease-in-out"
    }], {
      duration: 3500
    }));
    if ((0, i.gn)(this, M, "f") != null && t != null) {
      const n = e.difference(t);
      (0, i.gn)(this, M, "f").textContent = z.formatTimeString(n, true);
      if (n.isNegative()) {
        (0, i.gn)(this, M, "f").classList.remove("red");
        (0, i.gn)(this, M, "f").classList.add("green");
      } else {
        (0, i.gn)(this, M, "f").classList.add("red");
        (0, i.gn)(this, M, "f").classList.remove("green");
      }
      (0, i.gn)(this, _, "f").push((0, i.gn)(this, M, "f").animate([{
        opacity: 0,
        transform: "translateX(20px)",
        offset: 0,
        easing: "ease-in-out"
      }, {
        opacity: 1,
        transform: "translateX(0)",
        offset: 1 / 28,
        easing: "ease-in-out"
      }, {
        opacity: 1,
        transform: "translateX(0)",
        offset: 27 / 28,
        easing: "ease-in-out"
      }, {
        opacity: 0,
        transform: "translateX(-10px)",
        offset: 1,
        easing: "ease-in-out"
      }], {
        duration: 3500
      }));
    }
    if ((0, i.gn)(this, x, "f") != null && t != null) {
      (0, i.gn)(this, _, "f").push((0, i.gn)(this, x, "f").animate([{
        opacity: 1,
        offset: 0,
        easing: "ease-in-out"
      }, {
        opacity: 0,
        offset: 1 / 28,
        easing: "ease-in-out"
      }, {
        opacity: 0,
        offset: 27 / 28,
        easing: "ease-in-out"
      }, {
        opacity: 1,
        offset: 1,
        easing: "ease-in-out"
      }], {
        duration: 3500
      }));
    }
    (0, i.gn)(this, _, "f").push((0, i.gn)(this, S, "f").animate([{
      opacity: 1,
      offset: 0,
      easing: "ease-in-out"
    }, {
      opacity: 0,
      offset: 1 / 28,
      easing: "ease-in-out"
    }, {
      opacity: 0,
      offset: 27 / 28,
      easing: "ease-in-out"
    }, {
      opacity: 1,
      offset: 1,
      easing: "ease-in-out"
    }], {
      duration: 3500
    }));
    if ((0, i.gn)(this, k, "f") != null && t != null) {
      (0, i.gn)(this, _, "f").push((0, i.gn)(this, k, "f").animate([{
        opacity: 1,
        offset: 0,
        easing: "ease-in-out"
      }, {
        opacity: 0,
        offset: 1 / 28,
        easing: "ease-in-out"
      }, {
        opacity: 0,
        offset: 27 / 28,
        easing: "ease-in-out"
      }, {
        opacity: 1,
        offset: 1,
        easing: "ease-in-out"
      }], {
        duration: 3500
      }));
    }
  }
  static formatTimeString(e, t = false) {
    if (e == null) {
      return "---";
    }
    {
      const n = Math.abs(e.numberOfFrames);
      const i = Math.floor(n / 60000);
      const r = Math.floor((n - i * 60000) / 1000);
      const a = n - i * 60000 - r * 1000;
      let s;
      s = t ? e.isNegative() ? "-" : "+" : "";
      return s + i.toString().padStart(2, "0") + ":" + r.toString().padStart(2, "0") + "." + a.toString().padStart(3, "0");
    }
  }
  update(e) {
    const t = e.getFinishTime() ?? e.getTime();
    let n;
    n = this.record != null ? t.difference(this.record) : null;
    if ((0, i.gn)(this, C, "f") != null) {
      const e = z.formatTimeString(this.record, false);
      if (e != (0, i.gn)(this, I, "f")) {
        (0, i.gn)(this, C, "f").innerHTML = "";
        for (const t of e) {
          const e = document.createElement("span");
          e.textContent = t;
          (0, i.gn)(this, C, "f").appendChild(e);
        }
        (0, i.GG)(this, I, e, "f");
      }
      if (this.record == null) {
        if ((0, i.gn)(this, C, "f").className != "small center") {
          (0, i.gn)(this, C, "f").className = "small center";
        }
      } else if ((0, i.gn)(this, C, "f").className != "small") {
        (0, i.gn)(this, C, "f").className = "small";
      }
    }
    const r = z.formatTimeString(t, false);
    if (r != (0, i.gn)(this, L, "f")) {
      (0, i.gn)(this, R, "f").innerHTML = "";
      for (const e of r) {
        const t = document.createElement("span");
        t.textContent = e;
        (0, i.gn)(this, R, "f").appendChild(t);
      }
      (0, i.GG)(this, L, r, "f");
    }
    if ((0, i.gn)(this, P, "f") != null) {
      const e = z.formatTimeString(n, true);
      if (e != (0, i.gn)(this, U, "f")) {
        (0, i.gn)(this, P, "f").innerHTML = "";
        for (let t = 0; t < e.length; ++t) {
          const r = document.createElement("span");
          if (t == 0 && Number.isFinite(n)) {
            r.className = "sign";
          }
          r.textContent = e[t];
          (0, i.gn)(this, P, "f").appendChild(r);
        }
        (0, i.GG)(this, U, e, "f");
      }
      if (n == null) {
        if ((0, i.gn)(this, P, "f").className != "small center") {
          (0, i.gn)(this, P, "f").className = "small center";
        }
      } else if (n.isNegative()) {
        if ((0, i.gn)(this, P, "f").className != "small green") {
          (0, i.gn)(this, P, "f").className = "small green";
        }
      } else if ((0, i.gn)(this, P, "f").className != "small red") {
        (0, i.gn)(this, P, "f").className = "small red";
      }
    }
  }
  set nickname(e) {
    if ((0, i.gn)(this, x, "f") != null) {
      (0, i.gn)(this, x, "f").textContent = e != null ? "\"" + e + "\"" : (0, i.gn)(this, b, "f").get("Record");
    } else {
      (0, i.gn)(this, S, "f").textContent = e != null ? "\"" + e + "\"" : (0, i.gn)(this, b, "f").get("Current");
    }
  }
}
v = new WeakMap();
b = new WeakMap();
y = new WeakMap();
w = new WeakMap();
x = new WeakMap();
S = new WeakMap();
k = new WeakMap();
T = new WeakMap();
E = new WeakMap();
M = new WeakMap();
_ = new WeakMap();
C = new WeakMap();
R = new WeakMap();
P = new WeakMap();
I = new WeakMap();
L = new WeakMap();
U = new WeakMap();
export const A = z;