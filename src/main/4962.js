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
var m = require("./4464.js");
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
v = new WeakMap();
b = new WeakMap();
export const A = class {
  constructor(e) {
    v.set(this, undefined);
    b.set(this, undefined);
    const t = document.getElementById("ui");
    if (t == null) {
      throw new Error("UI element not found");
    }
    (0, i.GG)(this, v, t, "f");
    (0, i.GG)(this, b, document.createElement("div"), "f");
    (0, i.gn)(this, b, "f").className = "loading-screen-ui";
    if (e) {
      (0, i.gn)(this, b, "f").classList.add("background");
    }
    (0, i.gn)(this, v, "f").appendChild((0, i.gn)(this, b, "f"));
    const n = document.createElement("div");
    n.className = "loading-spinner-container";
    (0, i.gn)(this, b, "f").appendChild(n);
    const r = document.createElement("div");
    r.className = "loading-spinner-ui";
    n.appendChild(r);
  }
  dispose() {
    (0, i.gn)(this, v, "f").removeChild((0, i.gn)(this, b, "f"));
  }
};