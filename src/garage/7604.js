var i = require(/*webcrack:missing*/"./1635.js");
var s = require(/*webcrack:missing*/"./4922.js");
var o = require(/*webcrack:missing*/"./1728.js");
var a = require(/*webcrack:missing*/"./7888.js");
var l = require(/*webcrack:missing*/"./641.js");
var c = require(/*webcrack:missing*/"./5072.js");
var r = c;
var h = require(/*webcrack:missing*/"./7825.js");
var d = h;
var g = require(/*webcrack:missing*/"./7659.js");
var f = g;
var p = require(/*webcrack:missing*/"./5056.js");
var u = p;
var m = require(/*webcrack:missing*/"./540.js");
var v = m;
var w = require(/*webcrack:missing*/"./1113.js");
var b = w;
var x = require("./8026.js");
var k = {};
k.styleTagTransform = b;
k.setAttributes = u;
k.insert = f.bind(null, "head");
k.domAPI = d;
k.insertStyleElement = v;
r(x.A, k);
if (x.A && x.A.locals) {
  x.A.locals;
}
var G = require(/*webcrack:missing*/"./7024.js");
var y = require(/*webcrack:missing*/"./8724.js");
var C = require(/*webcrack:missing*/"./1507.js");
var E = require("./2561.js");
var M = {};
M.styleTagTransform = b;
M.setAttributes = u;
M.insert = f.bind(null, "head");
M.domAPI = d;
M.insertStyleElement = v;
r(E.A, M);
if (E.A && E.A.locals) {
  E.A.locals;
}
var L = require(/*webcrack:missing*/"./5569.js");
var N = require(/*webcrack:missing*/"./2522.js");
var A = require(/*webcrack:missing*/"./7381.js");
var W = require("./9000.js");
var S = {};
S.styleTagTransform = b;
S.setAttributes = u;
S.insert = f.bind(null, "head");
S.domAPI = d;
S.insertStyleElement = v;
r(W.A, S);
if (W.A && W.A.locals) {
  W.A.locals;
}
var T;
var z;
var P;
var I;
var U;
var H;
var O;
var D;
var R;
var B;
var F;
var q;
var V;
z = new WeakMap();
P = new WeakMap();
I = new WeakMap();
U = new WeakMap();
H = new WeakMap();
O = new WeakMap();
D = new WeakMap();
R = new WeakMap();
B = new WeakMap();
F = new WeakMap();
T = new WeakSet();
q = function (t) {
  let n;
  let e;
  if (t == null) {
    n = "images/blank_flag.svg";
    e = (0, i.gn)(this, z, "f").get("None");
  } else {
    n = "images/countries/" + t.code + ".svg";
    e = t.name;
  }
  const s = document.createElement("button");
  s.className = "button country-button";
  s.addEventListener("click", () => {
    (0, i.gn)(this, P, "f").playUIClick();
    (0, i.gn)(this, I, "f").call(this, t?.code ?? null);
  });
  (0, i.gn)(this, D, "f").appendChild(s);
  const o = document.createElement("img");
  o.className = "loading";
  o.addEventListener("load", () => {
    o.classList.remove("loading");
  });
  o.loading = "lazy";
  o.src = n;
  s.appendChild(o);
  const a = document.createElement("div");
  a.className = "name";
  a.textContent = e;
  s.appendChild(a);
  const l = [e.toLowerCase()];
  if (t != null) {
    l.push(t.code);
    switch (t.code) {
      case "ae":
        l.push("uae");
        break;
      case "cd":
        l.push("dr congo", "drc", "congo-kinshasa");
        break;
      case "cz":
        l.push("czech republic");
        break;
      case "gb":
        l.push("uk", "great britain");
        break;
      case "kp":
        l.push("north korea");
        break;
      case "kr":
        l.push("south korea");
        break;
      case "nl":
        l.push("holland");
        break;
      case "la":
        l.push("laos");
        break;
      case "tr":
        l.push("turkey", "turkiye");
        break;
      case "us":
        l.push("usa");
        break;
      case "vn":
        l.push("vietnam");
    }
  }
  return {
    searchNames: l,
    button: s
  };
};
V = function () {
  const t = (0, i.gn)(this, O, "f").value.trim().toLowerCase().split(" ");
  let n = false;
  for (const {
    searchNames: e,
    button: s
  } of (0, i.gn)(this, R, "f")) {
    const i = e.flatMap(t => t.split(" "));
    if (t.every(t => i.some(n => n.startsWith(t)))) {
      n = true;
      s.style.display = "";
    } else {
      s.style.display = "none";
    }
  }
  (0, i.gn)(this, B, "f").style.display = n ? "none" : "";
};
const X = class {
  constructor(t, n, e, s, o) {
    T.add(this);
    z.set(this, undefined);
    P.set(this, undefined);
    I.set(this, undefined);
    U.set(this, undefined);
    H.set(this, undefined);
    O.set(this, undefined);
    D.set(this, undefined);
    R.set(this, []);
    B.set(this, undefined);
    F.set(this, undefined);
    (0, i.GG)(this, z, t, "f");
    (0, i.GG)(this, P, n, "f");
    (0, i.GG)(this, I, o, "f");
    const a = document.getElementById("ui");
    if (a == null) {
      throw new Error("UI element not found");
    }
    (0, i.GG)(this, U, a, "f");
    (0, i.GG)(this, H, document.createElement("div"), "f");
    (0, i.gn)(this, H, "f").className = "country-selection-ui";
    (0, i.gn)(this, U, "f").appendChild((0, i.gn)(this, H, "f"));
    const l = document.createElement("div");
    l.className = "background";
    (0, i.gn)(this, H, "f").appendChild(l);
    const c = document.createElement("div");
    c.className = "container";
    (0, i.gn)(this, H, "f").appendChild(c);
    const r = document.createElement("h1");
    r.textContent = t.get("Select country");
    c.appendChild(r);
    const h = document.createElement("div");
    h.className = "search-bar-container";
    c.appendChild(h);
    (0, i.GG)(this, O, document.createElement("input"), "f");
    (0, i.gn)(this, O, "f").type = "text";
    (0, i.gn)(this, O, "f").spellcheck = false;
    (0, i.gn)(this, O, "f").autocomplete = "off";
    (0, i.gn)(this, O, "f").enterKeyHint = "search";
    (0, i.gn)(this, O, "f").placeholder = (0, i.gn)(this, z, "f").get("Search country...");
    (0, i.gn)(this, O, "f").addEventListener("input", () => {
      (0, i.gn)(this, T, "m", V).call(this);
    });
    h.appendChild((0, i.gn)(this, O, "f"));
    (0, i.gn)(this, O, "f").focus();
    const d = document.createElement("img");
    d.src = "images/search.svg";
    h.appendChild(d);
    (0, i.GG)(this, D, document.createElement("div"), "f");
    (0, i.gn)(this, D, "f").className = "content";
    c.appendChild((0, i.gn)(this, D, "f"));
    (0, i.GG)(this, B, document.createElement("div"), "f");
    (0, i.gn)(this, B, "f").className = "nothing-found-message";
    (0, i.gn)(this, B, "f").style.display = "none";
    (0, i.gn)(this, B, "f").textContent = (0, i.gn)(this, z, "f").get("No countries found");
    (0, i.gn)(this, D, "f").appendChild((0, i.gn)(this, B, "f"));
    let g = null;
    const f = [null].concat((0, L.O)());
    for (const t of f) {
      const {
        searchNames: n,
        button: s
      } = (0, i.gn)(this, T, "m", q).call(this, t);
      if (t?.code == e) {
        g = s;
      }
      (0, i.gn)(this, R, "f").push({
        searchNames: n,
        button: s
      });
    }
    const p = document.createElement("div");
    p.className = "button-wrapper";
    c.appendChild(p);
    const u = document.createElement("button");
    u.className = "button";
    u.innerHTML = "<img class=\"button-icon\" src=\"images/cancel.svg\"> ";
    u.appendChild(document.createTextNode(t.get("Cancel")));
    u.addEventListener("click", () => {
      n.playUIClick();
      s();
    });
    p.appendChild(u);
    if (g != null) {
      g.classList.add("selected");
      (0, i.gn)(this, D, "f").scrollTop = Math.max(0, g.offsetTop - (0, i.gn)(this, D, "f").offsetTop - (0, i.gn)(this, D, "f").clientHeight / 2 + g.clientHeight / 2);
    }
    window.addEventListener("keydown", (0, i.GG)(this, F, t => {
      if (t.code == "Escape") {
        s();
        t.preventDefault();
      }
    }, "f"));
  }
  dispose() {
    (0, i.gn)(this, U, "f").removeChild((0, i.gn)(this, H, "f"));
    window.removeEventListener("keydown", (0, i.gn)(this, F, "f"));
  }
};
var Q;
var Y;
var _;
var j;
var Z;
var J;
var K;
var $;
Y = new WeakMap();
_ = new WeakMap();
j = new WeakMap();
Z = new WeakMap();
J = new WeakMap();
K = new WeakMap();
Q = new WeakSet();
$ = function () {
  let t = (0, i.gn)(this, j, "f").value;
  if (!/\S/.test(t)) {
    t = "Anonymous";
  }
  return {
    nickname: t,
    countryCode: (0, i.gn)(this, J, "f")
  };
};
const tt = class {
  constructor(t, n, e, s, o, a, l, c, r) {
    Q.add(this);
    Y.set(this, undefined);
    _.set(this, undefined);
    j.set(this, undefined);
    Z.set(this, undefined);
    J.set(this, undefined);
    K.set(this, null);
    (0, i.GG)(this, J, s, "f");
    const h = document.getElementById("ui");
    if (h == null) {
      throw new Error("UI element not found");
    }
    (0, i.GG)(this, Y, h, "f");
    (0, i.GG)(this, _, document.createElement("div"), "f");
    (0, i.gn)(this, _, "f").className = "profile-settings-ui";
    (0, i.gn)(this, Y, "f").appendChild((0, i.gn)(this, _, "f"));
    const d = document.createElement("div");
    d.className = "background";
    (0, i.gn)(this, _, "f").appendChild(d);
    const g = document.createElement("div");
    g.className = "container";
    (0, i.gn)(this, _, "f").appendChild(g);
    const f = document.createElement("h1");
    f.textContent = t.get("Profile");
    g.appendChild(f);
    const p = document.createElement("div");
    p.className = "content";
    g.appendChild(p);
    const u = document.createElement("div");
    u.className = "box";
    p.appendChild(u);
    const m = document.createElement("label");
    m.className = "title";
    m.append(document.createTextNode(t.get("Nickname")));
    u.appendChild(m);
    (0, i.GG)(this, j, document.createElement("input"), "f");
    (0, i.gn)(this, j, "f").type = "text";
    (0, i.gn)(this, j, "f").placeholder = N.A.defaultNickname;
    (0, i.gn)(this, j, "f").spellcheck = false;
    if (e != (0, i.gn)(this, j, "f").placeholder) {
      (0, i.gn)(this, j, "f").value = e;
    }
    u.appendChild((0, i.gn)(this, j, "f"));
    (0, i.gn)(this, j, "f").focus();
    (0, i.gn)(this, j, "f").addEventListener("input", () => {
      let t = (0, i.gn)(this, j, "f").value;
      while ((0, A.k)(t) >= 50) {
        t = t.substring(0, t.length - 1);
      }
      (0, i.gn)(this, j, "f").value = t;
    });
    const v = document.createElement("div");
    v.className = "description";
    v.textContent = t.get("Choose a nickname to be shown in the leaderboard. Your nickname can be changed at any time.");
    u.appendChild(v);
    const w = document.createElement("div");
    w.className = "box";
    p.appendChild(w);
    const b = document.createElement("label");
    b.className = "title";
    b.append(document.createTextNode(t.get("Country")));
    w.appendChild(b);
    const x = (0, L.O)();
    const k = x.find(t => t.code == (0, i.gn)(this, J, "f"));
    const G = k?.name ?? t.get("None");
    let y;
    y = k == null ? "images/blank_flag.svg" : "images/countries/" + k.code + ".svg";
    const C = document.createElement("button");
    C.className = "button country-button";
    const E = document.createElement("img");
    E.src = y;
    C.appendChild(E);
    const M = document.createElement("div");
    M.className = "name";
    M.textContent = G;
    C.append(M);
    C.addEventListener("click", () => {
      n.playUIClick();
      if ((0, i.gn)(this, K, "f") == null) {
        (0, i.gn)(this, _, "f").classList.add("hidden");
        const e = (0, i.gn)(this, J, "f");
        (0, i.GG)(this, K, new X(t, n, e, () => {
          (0, i.gn)(this, _, "f").classList.remove("hidden");
          (0, i.gn)(this, K, "f")?.dispose();
          (0, i.GG)(this, K, null, "f");
        }, n => {
          (0, i.gn)(this, _, "f").classList.remove("hidden");
          (0, i.GG)(this, J, n, "f");
          const e = x.find(t => t.code == (0, i.gn)(this, J, "f"));
          const s = e?.name ?? t.get("None");
          let o;
          o = e == null ? "images/blank_flag.svg" : "images/countries/" + e.code + ".svg";
          E.src = o;
          M.textContent = s;
          (0, i.gn)(this, K, "f")?.dispose();
          (0, i.GG)(this, K, null, "f");
        }), "f");
      }
    });
    w.appendChild(C);
    const W = document.createElement("div");
    W.className = "description";
    W.textContent = t.get("Select your country to be shown in the leaderboard. This is optional and can be changed at any time. Only UN member states are listed.");
    w.appendChild(W);
    const S = document.createElement("div");
    S.className = "user-token-hash";
    S.textContent = t.get("User ID") + ": " + o.tokenHash;
    p.appendChild(S);
    const T = document.createElement("div");
    T.className = "double-box-container";
    p.appendChild(T);
    const z = document.createElement("div");
    z.className = "box";
    T.appendChild(z);
    const P = document.createElement("button");
    P.className = "button delete";
    P.innerHTML = " <img class=\"button-icon\" src=\"images/delete.svg\"> ";
    P.append(t.get("Delete"));
    P.addEventListener("click", () => {
      n.playUIClick();
      l((0, i.gn)(this, Q, "m", $).call(this));
    });
    z.appendChild(P);
    const I = document.createElement("div");
    I.className = "description";
    I.textContent = t.get("Delete your profile from this device. The profile will remain on other devices and can be restored using the private token.");
    z.appendChild(I);
    const U = document.createElement("div");
    U.className = "box";
    T.appendChild(U);
    const H = document.createElement("button");
    H.className = "button";
    H.innerHTML = "<img class=\"button-icon\" src=\"images/export.svg\"> ";
    H.append(t.get("Export"));
    H.addEventListener("click", () => {
      n.playUIClick();
      c((0, i.gn)(this, Q, "m", $).call(this), o.token);
    });
    U.appendChild(H);
    const O = document.createElement("div");
    O.className = "description";
    O.textContent = t.get("Export your private token. This token can be used to back up your account or restore it on another device.");
    U.appendChild(O);
    const D = document.createElement("div");
    D.className = "button-wrapper";
    g.appendChild(D);
    const R = document.createElement("button");
    R.className = "button";
    R.innerHTML = "<img class=\"button-icon\" src=\"images/cancel.svg\"> ";
    R.appendChild(document.createTextNode(t.get("Cancel")));
    R.addEventListener("click", () => {
      n.playUIClick();
      r(null);
    });
    D.appendChild(R);
    if (a) {
      const e = document.createElement("button");
      e.className = "button";
      e.innerHTML = " <img class=\"button-icon\" src=\"images/save.svg\">";
      e.prepend(document.createTextNode(t.get("Save")));
      e.addEventListener("click", () => {
        n.playUIClick();
        r((0, i.gn)(this, Q, "m", $).call(this));
      });
      D.appendChild(e);
    } else {
      const e = document.createElement("button");
      e.className = "button";
      e.innerHTML = " <img class=\"button-icon\" src=\"images/apply.svg\">";
      e.prepend(document.createTextNode(t.get("Confirm")));
      e.addEventListener("click", () => {
        n.playUIClick();
        r((0, i.gn)(this, Q, "m", $).call(this));
      });
      D.appendChild(e);
    }
    window.addEventListener("keydown", (0, i.GG)(this, Z, t => {
      if ((0, i.gn)(this, K, "f") == null) {
        if (t.code == "Escape") {
          r(null);
          t.preventDefault();
        } else if (t.code == "Enter") {
          r((0, i.gn)(this, Q, "m", $).call(this));
          t.preventDefault();
        }
      }
    }, "f"));
  }
  dispose() {
    (0, i.gn)(this, Y, "f").removeChild((0, i.gn)(this, _, "f"));
    (0, i.gn)(this, K, "f")?.dispose();
    (0, i.GG)(this, K, null, "f");
    window.removeEventListener("keydown", (0, i.gn)(this, Z, "f"));
  }
};
var nt = require("./3257.js");
var et = {};
et.styleTagTransform = b;
et.setAttributes = u;
et.insert = f.bind(null, "head");
et.domAPI = d;
et.insertStyleElement = v;
r(nt.A, et);
if (nt.A && nt.A.locals) {
  nt.A.locals;
}
var it;
var st;
var ot;
var at = require(/*webcrack:missing*/"./9643.js");
it = new WeakMap();
st = new WeakMap();
ot = new WeakMap();
const lt = class {
  constructor(t, n, e, s, o) {
    it.set(this, undefined);
    st.set(this, undefined);
    ot.set(this, undefined);
    const a = document.getElementById("ui");
    if (a == null) {
      throw new Error("UI element not found");
    }
    (0, i.GG)(this, it, a, "f");
    (0, i.GG)(this, st, document.createElement("div"), "f");
    (0, i.gn)(this, st, "f").className = "user-export-ui";
    (0, i.gn)(this, it, "f").appendChild((0, i.gn)(this, st, "f"));
    const l = document.createElement("div");
    l.className = "background";
    (0, i.gn)(this, st, "f").appendChild(l);
    const c = document.createElement("div");
    c.className = "container";
    (0, i.gn)(this, st, "f").appendChild(c);
    const r = document.createElement("textarea");
    r.value = e;
    r.readOnly = o == null;
    r.placeholder = "Paste user token here...";
    c.appendChild(r);
    const h = document.createElement("div");
    h.className = "bar";
    c.appendChild(h);
    const d = document.createElement("button");
    d.className = "button";
    d.innerHTML = "<img class=\"button-icon\" src=\"images/back.svg\"> ";
    d.append(document.createTextNode(n.get("Back")));
    d.addEventListener("click", () => {
      t.playUIClick();
      s();
    });
    h.appendChild(d);
    if (o != null) {
      const e = document.createElement("button");
      e.className = "button right";
      e.innerHTML = "<img class=\"button-icon\" src=\"images/import.svg\"> ";
      e.append(document.createTextNode(n.get("Import")));
      e.addEventListener("click", () => {
        t.playUIClick();
        o(r.value);
      });
      h.appendChild(e);
    } else {
      const e = new at.A(t, n, () => r.value);
      e.element.classList.add("right");
      h.appendChild(e.element);
    }
    window.addEventListener("keydown", (0, i.GG)(this, ot, t => {
      if (t.code == "Escape") {
        s();
        t.preventDefault();
      }
    }, "f"));
  }
  dispose() {
    (0, i.gn)(this, it, "f").removeChild((0, i.gn)(this, st, "f"));
    window.removeEventListener("keydown", (0, i.gn)(this, ot, "f"));
  }
};
var ct = require("./35.js");
var rt = {};
rt.styleTagTransform = b;
rt.setAttributes = u;
rt.insert = f.bind(null, "head");
rt.domAPI = d;
rt.insertStyleElement = v;
r(ct.A, rt);
if (ct.A && ct.A.locals) {
  ct.A.locals;
}
var ht;
var dt;
var gt;
var ft;
var pt;
var ut;
var mt;
var vt;
var wt;
var bt;
var xt = require(/*webcrack:missing*/"./5628.js");
var kt = require(/*webcrack:missing*/"./3787.js");
dt = new WeakMap();
gt = new WeakMap();
ft = new WeakMap();
pt = new WeakMap();
ut = new WeakMap();
mt = new WeakMap();
vt = new WeakMap();
wt = new WeakMap();
ht = new WeakSet();
bt = function (t, n, e) {
  const s = (0, i.gn)(this, pt, "f").getUserProfile(n);
  const o = document.createElement("div");
  o.className = "slot";
  const a = document.createElement("button");
  a.className = "button main";
  if (n == (0, i.gn)(this, pt, "f").profileSlot) {
    a.classList.add("selected");
  }
  a.addEventListener("click", () => {
    (0, i.gn)(this, ft, "f").playUIClick();
    for (const t of (0, i.gn)(this, mt, "f")) {
      t.classList.remove("selected");
    }
    a.classList.add("selected");
    e(n);
  });
  o.appendChild(a);
  (0, i.gn)(this, mt, "f").push(a);
  if (s != null) {
    const t = document.createElement("div");
    t.className = "image-container";
    a.appendChild(t);
    const n = document.createElement("img");
    n.className = "placeholder show";
    n.src = "images/car_thumbnail_placeholder.png";
    t.appendChild(n);
    const e = document.createElement("img");
    kt.F(s.carStyle, (0, i.gn)(this, wt, "f")).then(t => {
      e.src = t;
      n.classList.remove("show");
      e.classList.add("show");
    });
    t.appendChild(e);
    const o = document.createElement("div");
    o.className = "name-container";
    a.appendChild(o);
    const l = (0, L.O)();
    const c = s.countryCode == null ? null : l.find(t => t.code == s.countryCode);
    if (c != null) {
      const t = document.createElement("img");
      t.className = "country-flag";
      t.src = "images/countries/" + c.code + ".svg";
      t.draggable = false;
      t.title = c.name;
      o.appendChild(t);
    }
    const r = document.createElement("span");
    r.className = "name";
    r.textContent = s.nickname;
    o.appendChild(r);
  } else {
    const t = document.createElement("div");
    t.className = "image-container";
    a.appendChild(t);
    const n = document.createElement("img");
    n.className = "show";
    n.src = "images/car_thumbnail_placeholder.png";
    t.appendChild(n);
    const e = document.createElement("div");
    e.className = "name-container";
    a.appendChild(e);
    const s = document.createElement("span");
    s.className = "name empty";
    s.textContent = (0, i.gn)(this, gt, "f").get("Empty");
    e.appendChild(s);
  }
  t.appendChild(o);
};
const Gt = class {
  constructor(t, n, e, s, o, a) {
    ht.add(this);
    dt.set(this, undefined);
    gt.set(this, undefined);
    ft.set(this, undefined);
    pt.set(this, undefined);
    ut.set(this, undefined);
    mt.set(this, []);
    vt.set(this, undefined);
    wt.set(this, new xt.A());
    const l = document.getElementById("ui");
    if (l == null) {
      throw new Error("UI element not found");
    }
    (0, i.GG)(this, dt, l, "f");
    (0, i.GG)(this, gt, t, "f");
    (0, i.GG)(this, ft, n, "f");
    (0, i.GG)(this, pt, e, "f");
    (0, i.GG)(this, ut, document.createElement("div"), "f");
    (0, i.gn)(this, ut, "f").className = "profile-selection-ui";
    (0, i.gn)(this, dt, "f").appendChild((0, i.gn)(this, ut, "f"));
    const c = document.createElement("div");
    c.className = "background";
    (0, i.gn)(this, ut, "f").appendChild(c);
    const r = document.createElement("div");
    r.className = "container";
    (0, i.gn)(this, ut, "f").appendChild(r);
    const h = document.createElement("div");
    h.className = "top-bar";
    r.appendChild(h);
    const d = document.createElement("h2");
    d.textContent = t.get("Profiles");
    h.appendChild(d);
    for (let t = 0; t < N.A.maxNumberOfProfiles; t++) {
      (0, i.gn)(this, ht, "m", bt).call(this, r, t, a);
    }
    const g = document.createElement("div");
    g.className = "bottom-bar";
    r.appendChild(g);
    const f = document.createElement("button");
    f.className = "button";
    f.innerHTML = "<img class=\"button-icon\" src=\"images/cancel.svg\"> ";
    f.append(document.createTextNode(t.get("Close")));
    f.addEventListener("click", () => {
      n.playUIClick();
      s();
    });
    g.appendChild(f);
    const p = document.createElement("button");
    p.className = "button right";
    p.innerHTML = "<img class=\"button-icon\" src=\"images/import.svg\"> ";
    p.append(document.createTextNode(t.get("Import")));
    p.addEventListener("click", () => {
      n.playUIClick();
      o();
    });
    g.appendChild(p);
    window.addEventListener("keydown", (0, i.GG)(this, vt, t => {
      if (t.code == "Escape") {
        s();
        t.preventDefault();
      }
    }, "f"));
  }
  dispose() {
    (0, i.gn)(this, wt, "f").cancel();
    (0, i.gn)(this, dt, "f").removeChild((0, i.gn)(this, ut, "f"));
    window.removeEventListener("keydown", (0, i.gn)(this, vt, "f"));
  }
};
var yt = require("./4975.js");
var Ct = {};
Ct.styleTagTransform = b;
Ct.setAttributes = u;
Ct.insert = f.bind(null, "head");
Ct.domAPI = d;
Ct.insertStyleElement = v;
r(yt.A, Ct);
if (yt.A && yt.A.locals) {
  yt.A.locals;
}
var Et = require("./4191.js");
var Mt = {};
Mt.styleTagTransform = b;
Mt.setAttributes = u;
Mt.insert = f.bind(null, "head");
Mt.domAPI = d;
Mt.insertStyleElement = v;
r(Et.A, Mt);
if (Et.A && Et.A.locals) {
  Et.A.locals;
}
var Lt;
var Nt;
var At;
var Wt;
var St;
var Tt;
var zt;
var Pt;
var It;
var Ut;
var Ht;
var Ot;
var Dt;
var Rt;
var Bt;
var Ft;
var qt;
var Vt;
var Xt;
Nt = new WeakMap();
At = new WeakMap();
Wt = new WeakMap();
St = new WeakMap();
Tt = new WeakMap();
zt = new WeakMap();
Pt = new WeakMap();
It = new WeakMap();
Ut = new WeakMap();
Ht = new WeakMap();
Ot = new WeakMap();
Dt = new WeakMap();
Rt = new WeakMap();
Bt = new WeakMap();
Ft = new WeakMap();
qt = new WeakMap();
Lt = new WeakSet();
Vt = function () {
  (0, i.gn)(this, It, "f").style.left = "calc(" + ((0, i.gn)(this, Dt, "f") * 100 / 360).toString() + "% - 1px)";
  (0, i.gn)(this, St, "f").style.backgroundImage = "linear-gradient(transparent, #000), linear-gradient(to right, transparent, hsla(" + (0, i.gn)(this, Dt, "f").toString() + ", 100%, 50%, 1))";
};
Xt = function () {
  (0, i.gn)(this, Tt, "f").style.left = "calc(" + (0, i.gn)(this, Ot, "f").toString() + "% - 6px)";
  (0, i.gn)(this, Tt, "f").style.top = "calc(" + (100 - (0, i.gn)(this, Ht, "f")).toString() + "% - 6px)";
};
const Qt = class {
  constructor(t, n) {
    Lt.add(this);
    Nt.set(this, undefined);
    At.set(this, undefined);
    Wt.set(this, undefined);
    St.set(this, undefined);
    Tt.set(this, undefined);
    zt.set(this, false);
    Pt.set(this, undefined);
    It.set(this, undefined);
    Ut.set(this, false);
    Ht.set(this, 0);
    Ot.set(this, 0);
    Dt.set(this, 0);
    Rt.set(this, undefined);
    Bt.set(this, undefined);
    Ft.set(this, undefined);
    qt.set(this, undefined);
    (0, i.GG)(this, Nt, t, "f");
    (0, i.GG)(this, At, n, "f");
    (0, i.GG)(this, Wt, document.createElement("div"), "f");
    (0, i.gn)(this, Wt, "f").className = "color-picker-ui";
    (0, i.GG)(this, St, document.createElement("div"), "f");
    (0, i.gn)(this, St, "f").className = "value-saturation-picker";
    (0, i.gn)(this, Wt, "f").appendChild((0, i.gn)(this, St, "f"));
    (0, i.GG)(this, Tt, document.createElement("div"), "f");
    (0, i.gn)(this, Tt, "f").className = "marker";
    (0, i.gn)(this, St, "f").appendChild((0, i.gn)(this, Tt, "f"));
    (0, i.GG)(this, Pt, document.createElement("div"), "f");
    (0, i.gn)(this, Pt, "f").className = "hue-picker";
    (0, i.gn)(this, Wt, "f").appendChild((0, i.gn)(this, Pt, "f"));
    (0, i.GG)(this, It, document.createElement("div"), "f");
    (0, i.gn)(this, It, "f").className = "marker";
    (0, i.gn)(this, Pt, "f").appendChild((0, i.gn)(this, It, "f"));
    (0, i.gn)(this, Nt, "f").appendChild((0, i.gn)(this, Wt, "f"));
    (0, i.GG)(this, Rt, t => {
      let e = null;
      if (t instanceof MouseEvent) {
        if ((0, i.gn)(this, zt, "f")) {
          e = t;
        }
      } else if (t instanceof TouchEvent && t.targetTouches.length > 0) {
        e = t.targetTouches[t.targetTouches.length - 1];
      }
      if (e != null) {
        const t = (0, i.gn)(this, St, "f").getBoundingClientRect();
        const s = Math.max(0, Math.min(1, (e.clientX - t.left) / t.width));
        const o = Math.max(0, Math.min(1, (e.clientY - t.top) / t.height));
        (0, i.GG)(this, Ot, s * 100, "f");
        (0, i.GG)(this, Ht, (1 - o) * 100, "f");
        (0, i.gn)(this, Lt, "m", Xt).call(this);
        n(this.color);
      }
    }, "f");
    (0, i.GG)(this, Bt, t => {
      if (t.button == 0) {
        (0, i.GG)(this, zt, false, "f");
      }
    }, "f");
    (0, i.gn)(this, St, "f").addEventListener("mousedown", t => {
      if (t.button == 0) {
        (0, i.GG)(this, zt, true, "f");
      }
      (0, i.gn)(this, Rt, "f").call(this, t);
    });
    window.addEventListener("mouseup", (0, i.gn)(this, Bt, "f"));
    window.addEventListener("mousemove", (0, i.gn)(this, Rt, "f"));
    (0, i.gn)(this, St, "f").addEventListener("touchstart", (0, i.gn)(this, Rt, "f"));
    (0, i.gn)(this, St, "f").addEventListener("touchmove", (0, i.gn)(this, Rt, "f"));
    (0, i.GG)(this, Ft, t => {
      let e = null;
      if (t instanceof MouseEvent) {
        if ((0, i.gn)(this, Ut, "f")) {
          e = t;
        }
      } else if (t instanceof TouchEvent && t.targetTouches.length > 0) {
        e = t.targetTouches[t.targetTouches.length - 1];
      }
      if (e != null) {
        const t = (0, i.gn)(this, Pt, "f").getBoundingClientRect();
        const s = Math.max(0, Math.min(1, (e.clientX - t.left) / t.width));
        (0, i.GG)(this, Dt, s * 360, "f");
        (0, i.gn)(this, Lt, "m", Vt).call(this);
        n(this.color);
      }
    }, "f");
    (0, i.GG)(this, qt, t => {
      if (t.button == 0) {
        (0, i.GG)(this, Ut, false, "f");
      }
    }, "f");
    (0, i.gn)(this, Pt, "f").addEventListener("mousedown", t => {
      if (t.button == 0) {
        (0, i.GG)(this, Ut, true, "f");
      }
      (0, i.gn)(this, Ft, "f").call(this, t);
    });
    window.addEventListener("mouseup", (0, i.gn)(this, qt, "f"));
    window.addEventListener("mousemove", (0, i.gn)(this, Ft, "f"));
    (0, i.gn)(this, Pt, "f").addEventListener("touchstart", (0, i.gn)(this, Ft, "f"));
    (0, i.gn)(this, Pt, "f").addEventListener("touchmove", (0, i.gn)(this, Ft, "f"));
    (0, i.gn)(this, Lt, "m", Vt).call(this);
    (0, i.gn)(this, Lt, "m", Xt).call(this);
  }
  dispose() {
    window.removeEventListener("mouseup", (0, i.gn)(this, Bt, "f"));
    window.removeEventListener("mousemove", (0, i.gn)(this, Rt, "f"));
    window.removeEventListener("mouseup", (0, i.gn)(this, qt, "f"));
    window.removeEventListener("mousemove", (0, i.gn)(this, Ft, "f"));
  }
  get color() {
    const t = (0, i.gn)(this, Ot, "f") / 100;
    const n = (0, i.gn)(this, Ht, "f") / 100;
    const e = n - n * t / 2;
    const o = Math.min(e, 1 - e);
    const a = o != 0 ? (n - e) / o : 0;
    return new s.Q1f("hsl(" + (0, i.gn)(this, Dt, "f").toString() + "," + (a * 100).toString() + "%," + (e * 100).toString() + "%)");
  }
  set color(t) {
    const {
      h: n,
      s: e,
      l: o
    } = t.getHSL({
      h: 0,
      s: 0,
      l: 0
    }, s.er$);
    const a = o + e * Math.min(o, 1 - o);
    const l = a == 0 ? 0 : (1 - o / a) * 2;
    (0, i.GG)(this, Dt, n * 360, "f");
    (0, i.GG)(this, Ot, l * 100, "f");
    (0, i.GG)(this, Ht, a * 100, "f");
    (0, i.gn)(this, Lt, "m", Vt).call(this);
    (0, i.gn)(this, Lt, "m", Xt).call(this);
    (0, i.gn)(this, At, "f").call(this, this.color);
  }
};
var Yt;
var _t;
var jt;
var Zt;
var Jt;
var Kt;
var $t;
var tn;
var nn;
var en;
var sn;
var on;
var an;
var ln;
var cn;
var rn;
var hn;
var dn;
var gn;
var fn;
var pn;
var un;
var mn;
var vn;
var wn;
var bn;
var xn = require(/*webcrack:missing*/"./4256.js");
class kn {
  constructor(t, n, e, o, a, l, c) {
    Yt.add(this);
    jt.set(this, undefined);
    Zt.set(this, undefined);
    Jt.set(this, undefined);
    Kt.set(this, y.A.defaultPattern);
    $t.set(this, y.A.defaultRims);
    tn.set(this, y.A.defaultExhaust);
    nn.set(this, undefined);
    en.set(this, new Map());
    sn.set(this, undefined);
    on.set(this, new Map());
    an.set(this, undefined);
    ln.set(this, new Map());
    cn.set(this, []);
    rn.set(this, undefined);
    hn.set(this, new xt.A());
    (0, i.GG)(this, jt, o, "f");
    (0, i.GG)(this, Zt, a, "f");
    (0, i.GG)(this, rn, l, "f");
    (0, i.GG)(this, Jt, document.createElement("div"), "f");
    (0, i.gn)(this, Jt, "f").className = "customization-panel-ui";
    (0, i.gn)(this, Zt, "f").appendChild((0, i.gn)(this, Jt, "f"));
    const r = document.createElement("div");
    r.className = "tab-bar";
    (0, i.gn)(this, Jt, "f").appendChild(r);
    const h = document.createElement("div");
    h.className = "panel color-panel";
    (0, i.gn)(this, Jt, "f").appendChild(h);
    const d = document.createElement("div");
    d.className = "left";
    h.appendChild(d);
    const g = document.createElement("div");
    g.className = "right";
    h.appendChild(g);
    (0, i.gn)(this, Yt, "m", bn).call(this, n.get("Primary"), d);
    (0, i.gn)(this, Yt, "m", bn).call(this, n.get("Secondary"), d);
    (0, i.gn)(this, Yt, "m", bn).call(this, n.get("Frame"), g);
    (0, i.gn)(this, Yt, "m", bn).call(this, n.get("Rims"), g);
    (0, i.GG)(this, nn, document.createElement("div"), "f");
    (0, i.gn)(this, nn, "f").className = "panel options-panel hidden";
    (0, i.gn)(this, Jt, "f").appendChild((0, i.gn)(this, nn, "f"));
    for (let s = 0; s < y.A.patterns.length; s++) {
      if (!y.A.isValidPattern(s)) {
        throw new Error("Invalid car style pattern");
      }
      let o = null;
      const a = document.createElement("button");
      a.addEventListener("click", () => {
        t.playUIClick();
        if ((0, i.gn)(this, jt, "f").isPatternUnlocked(s)) {
          (0, i.GG)(this, Kt, s, "f");
          (0, i.gn)(this, Yt, "m", gn).call(this);
          (0, i.gn)(this, Yt, "m", dn).call(this);
        } else {
          e.showConfirm(n.get("Would you like to watch an ad to unlock this item?"), n.get("Cancel"), n.get("Watch"), null, () => {
            xn.$L("unlock-pattern").then(t => {
              if (t.success) {
                (0, i.GG)(this, Kt, s, "f");
                (0, i.gn)(this, Yt, "m", gn).call(this);
                (0, i.gn)(this, Yt, "m", dn).call(this);
                if (o != null) {
                  a.removeChild(o);
                  o = null;
                }
                (0, i.gn)(this, jt, "f").unlockPattern(s);
              } else {
                e.show(n.get("Ad not completed"), n.get("Ok"), null);
              }
            });
          });
        }
      });
      if (s == (0, i.gn)(this, Kt, "f")) {
        a.classList.add("selected");
      }
      (0, i.gn)(this, nn, "f").appendChild(a);
      const l = new y.A(s, y.A.defaultRims, y.A.defaultExhaust, 2236962, 9868950, 1250067, 6710886);
      const c = document.createElement("img");
      c.className = "loading";
      kt.F(l, (0, i.gn)(this, hn, "f")).then(t => {
        c.src = t;
        c.classList.remove("loading");
      });
      a.appendChild(c);
      if (!(0, i.gn)(this, jt, "f").isPatternUnlocked(s)) {
        o = document.createElement("img");
        o.className = "video-icon";
        o.src = "images/video.svg";
        a.appendChild(o);
      }
      (0, i.gn)(this, en, "f").set(s, a);
    }
    (0, i.GG)(this, sn, document.createElement("div"), "f");
    (0, i.gn)(this, sn, "f").className = "panel options-panel hidden";
    (0, i.gn)(this, Jt, "f").appendChild((0, i.gn)(this, sn, "f"));
    for (let o = 0; o < y.A.rims.length; o++) {
      if (!y.A.isValidRims(o)) {
        throw new Error("Invalid car style rims");
      }
      let a = null;
      const l = document.createElement("button");
      l.addEventListener("click", () => {
        t.playUIClick();
        if ((0, i.gn)(this, jt, "f").isRimsUnlocked(o)) {
          (0, i.GG)(this, $t, o, "f");
          (0, i.gn)(this, Yt, "m", fn).call(this);
          (0, i.gn)(this, Yt, "m", dn).call(this);
        } else {
          e.showConfirm(n.get("Would you like to watch an ad to unlock this item?"), n.get("Cancel"), n.get("Watch"), null, () => {
            xn.$L("unlock-rims").then(t => {
              if (t.success) {
                (0, i.GG)(this, $t, o, "f");
                (0, i.gn)(this, Yt, "m", fn).call(this);
                (0, i.gn)(this, Yt, "m", dn).call(this);
                if (a != null) {
                  l.removeChild(a);
                  a = null;
                }
                (0, i.gn)(this, jt, "f").unlockRims(o);
              } else {
                e.show(n.get("Ad not completed"), n.get("Ok"), null);
              }
            }).catch(t => {
              console.error(t);
            });
          });
        }
      });
      if (o == (0, i.gn)(this, $t, "f")) {
        l.classList.add("selected");
      }
      (0, i.gn)(this, sn, "f").appendChild(l);
      const c = new y.A(y.A.defaultPattern, o, y.A.defaultExhaust, 9868950, 9868950, 1250067, 6710886);
      const r = document.createElement("img");
      r.className = "loading";
      kt.F(c, (0, i.gn)(this, hn, "f"), {
        position: new s.Pq0(1000, 0.19190498995780947, 1.3478),
        look: new s.Pq0(0, 0.19190498995780947, 1.3478),
        zoom: 2.5
      }).then(t => {
        r.src = t;
        r.classList.remove("loading");
      });
      l.appendChild(r);
      if (!(0, i.gn)(this, jt, "f").isRimsUnlocked(o)) {
        a = document.createElement("img");
        a.className = "video-icon";
        a.src = "images/video.svg";
        l.appendChild(a);
      }
      (0, i.gn)(this, on, "f").set(o, l);
    }
    (0, i.GG)(this, an, document.createElement("div"), "f");
    (0, i.gn)(this, an, "f").className = "panel options-panel hidden";
    (0, i.gn)(this, Jt, "f").appendChild((0, i.gn)(this, an, "f"));
    for (let o = 0; o < y.A.exhausts.length; o++) {
      if (!y.A.isValidExhaust(o)) {
        throw new Error("Invalid car style exhaust");
      }
      let a = null;
      const l = document.createElement("button");
      l.addEventListener("click", () => {
        t.playUIClick();
        if ((0, i.gn)(this, jt, "f").isExhaustUnlocked(o)) {
          (0, i.GG)(this, tn, o, "f");
          (0, i.gn)(this, Yt, "m", pn).call(this);
          (0, i.gn)(this, Yt, "m", dn).call(this);
        } else {
          e.showConfirm(n.get("Would you like to watch an ad to unlock this item?"), n.get("Cancel"), n.get("Watch"), null, () => {
            xn.$L("unlock-exhaust").then(t => {
              if (t.success) {
                (0, i.GG)(this, tn, o, "f");
                (0, i.gn)(this, Yt, "m", pn).call(this);
                (0, i.gn)(this, Yt, "m", dn).call(this);
                if (a != null) {
                  l.removeChild(a);
                  a = null;
                }
                (0, i.gn)(this, jt, "f").unlockExhaust(o);
              } else {
                e.show(n.get("Ad not completed"), n.get("Ok"), null);
              }
            }).catch(t => {
              console.error(t);
            });
          });
        }
      });
      if (o == (0, i.gn)(this, tn, "f")) {
        l.classList.add("selected");
      }
      (0, i.gn)(this, an, "f").appendChild(l);
      const c = new y.A(y.A.defaultPattern, y.A.defaultRims, o, 9868950, 9868950, 1250067, 6710886);
      const r = document.createElement("img");
      r.className = "loading";
      kt.F(c, (0, i.gn)(this, hn, "f"), {
        position: new s.Pq0(1100, -800.5, -1001.7),
        look: new s.Pq0(0, 0.5, -1.7),
        zoom: 2
      }).then(t => {
        r.src = t;
        r.classList.remove("loading");
      });
      l.appendChild(r);
      if (!(0, i.gn)(this, jt, "f").isExhaustUnlocked(o)) {
        a = document.createElement("img");
        a.className = "video-icon";
        a.src = "images/video.svg";
        l.appendChild(a);
      }
      (0, i.gn)(this, ln, "f").set(o, l);
    }
    const f = [{
      title: n.get("Paint"),
      icon: "images/paint.svg",
      panel: h
    }, {
      title: n.get("Pattern"),
      icon: "images/pattern.svg",
      panel: (0, i.gn)(this, nn, "f")
    }, {
      title: n.get("Rims"),
      icon: "images/rims.svg",
      panel: (0, i.gn)(this, sn, "f")
    }, {
      title: n.get("Exhaust"),
      icon: "images/exhaust.svg",
      panel: (0, i.gn)(this, an, "f")
    }];
    let p = f[0];
    const u = [];
    for (const n of f) {
      const e = document.createElement("button");
      e.className = "button";
      e.textContent = n.title;
      e.addEventListener("click", () => {
        t.playUIClick();
        for (const t of u) {
          t.classList.remove("selected");
        }
        h.classList.add("hidden");
        (0, i.gn)(this, nn, "f").classList.add("hidden");
        (0, i.gn)(this, sn, "f").classList.add("hidden");
        (0, i.gn)(this, an, "f").classList.add("hidden");
        e.classList.add("selected");
        n.panel.classList.remove("hidden");
        if (p != n) {
          if (n.panel == h) {
            c(new s.Pq0(0, 2, 6));
          } else if (n.panel == (0, i.gn)(this, nn, "f")) {
            (0, i.gn)(this, Yt, "m", un).call(this);
            c(new s.Pq0(0, 2, 6));
          } else if (n.panel == (0, i.gn)(this, sn, "f")) {
            (0, i.gn)(this, Yt, "m", mn).call(this);
            c(new s.Pq0(-0.5155052947032, 0.74948865866975, 3.8370986018837385));
          } else if (n.panel == (0, i.gn)(this, an, "f")) {
            (0, i.gn)(this, Yt, "m", vn).call(this);
            c(new s.Pq0(2.874291197536667, 0.9837316369014955, -0.7283975369068978));
          }
        }
        p = n;
      });
      if (u.length == 0) {
        e.classList.add("selected");
      }
      e.appendChild(document.createTextNode(" "));
      const o = document.createElement("img");
      o.className = "button-icon";
      o.src = n.icon;
      e.appendChild(o);
      r.appendChild(e);
      u.push(e);
    }
  }
  dispose() {
    (0, i.gn)(this, hn, "f").cancel();
    (0, i.gn)(this, Zt, "f").removeChild((0, i.gn)(this, Jt, "f"));
    for (const t of (0, i.gn)(this, cn, "f")) {
      t.dispose();
    }
  }
  setCarStyle(t) {
    (0, i.GG)(this, Kt, t.pattern, "f");
    (0, i.GG)(this, $t, t.rims, "f");
    (0, i.GG)(this, tn, t.exhaust, "f");
    if (!(0, i.gn)(this, jt, "f").isPatternUnlocked((0, i.gn)(this, Kt, "f"))) {
      (0, i.gn)(this, jt, "f").unlockPattern((0, i.gn)(this, Kt, "f"));
    }
    if (!(0, i.gn)(this, jt, "f").isRimsUnlocked((0, i.gn)(this, $t, "f"))) {
      (0, i.gn)(this, jt, "f").unlockRims((0, i.gn)(this, $t, "f"));
    }
    if (!(0, i.gn)(this, jt, "f").isExhaustUnlocked((0, i.gn)(this, tn, "f"))) {
      (0, i.gn)(this, jt, "f").unlockExhaust((0, i.gn)(this, tn, "f"));
    }
    (0, i.gn)(this, Yt, "m", gn).call(this);
    (0, i.gn)(this, Yt, "m", fn).call(this);
    (0, i.gn)(this, Yt, "m", pn).call(this);
    (0, i.gn)(this, Yt, "m", un).call(this);
    (0, i.gn)(this, Yt, "m", mn).call(this);
    (0, i.gn)(this, Yt, "m", vn).call(this);
    (0, i.gn)(this, cn, "f")[0].color = t.primaryColor;
    (0, i.gn)(this, cn, "f")[1].color = t.secondaryColor;
    (0, i.gn)(this, cn, "f")[2].color = t.frameColor;
    (0, i.gn)(this, cn, "f")[3].color = t.rimsColor;
  }
}
_t = kn;
jt = new WeakMap();
Zt = new WeakMap();
Jt = new WeakMap();
Kt = new WeakMap();
$t = new WeakMap();
tn = new WeakMap();
nn = new WeakMap();
en = new WeakMap();
sn = new WeakMap();
on = new WeakMap();
an = new WeakMap();
ln = new WeakMap();
cn = new WeakMap();
rn = new WeakMap();
hn = new WeakMap();
Yt = new WeakSet();
dn = function () {
  const t = new y.A((0, i.gn)(this, Kt, "f"), (0, i.gn)(this, $t, "f"), (0, i.gn)(this, tn, "f"), (0, i.gn)(this, cn, "f")[0].color.getHex(), (0, i.gn)(this, cn, "f")[1].color.getHex(), (0, i.gn)(this, cn, "f")[2].color.getHex(), (0, i.gn)(this, cn, "f")[3].color.getHex());
  (0, i.gn)(this, rn, "f").call(this, t);
};
gn = function () {
  for (const [t, n] of (0, i.gn)(this, en, "f")) {
    if (t == (0, i.gn)(this, Kt, "f")) {
      n.classList.add("selected");
    } else {
      n.classList.remove("selected");
    }
  }
};
fn = function () {
  for (const [t, n] of (0, i.gn)(this, on, "f")) {
    if (t == (0, i.gn)(this, $t, "f")) {
      n.classList.add("selected");
    } else {
      n.classList.remove("selected");
    }
  }
};
pn = function () {
  for (const [t, n] of (0, i.gn)(this, ln, "f")) {
    if (t == (0, i.gn)(this, tn, "f")) {
      n.classList.add("selected");
    } else {
      n.classList.remove("selected");
    }
  }
};
un = function () {
  const t = (0, i.gn)(this, en, "f").get((0, i.gn)(this, Kt, "f"));
  if (t != null) {
    (0, i.gn)(_t, _t, "m", wn).call(_t, (0, i.gn)(this, nn, "f"), t);
  }
};
mn = function () {
  const t = (0, i.gn)(this, on, "f").get((0, i.gn)(this, $t, "f"));
  if (t != null) {
    (0, i.gn)(_t, _t, "m", wn).call(_t, (0, i.gn)(this, sn, "f"), t);
  }
};
vn = function () {
  const t = (0, i.gn)(this, ln, "f").get((0, i.gn)(this, tn, "f"));
  if (t != null) {
    (0, i.gn)(_t, _t, "m", wn).call(_t, (0, i.gn)(this, an, "f"), t);
  }
};
wn = function (t, n) {
  if (t.scrollTo) {
    const e = t.clientHeight;
    const i = n.offsetTop - t.offsetTop - e / 2 + n.offsetHeight / 2;
    t.scrollTo({
      top: i,
      behavior: "instant"
    });
  } else {
    n.scrollIntoView({
      behavior: "instant",
      block: "nearest",
      inline: "start"
    });
  }
};
bn = function (t, n) {
  const e = document.createElement("div");
  e.className = "color";
  n.appendChild(e);
  const o = document.createElement("h2");
  o.textContent = t;
  e.appendChild(o);
  const a = document.createElement("div");
  a.className = "input-container";
  e.appendChild(a);
  const l = document.createElement("input");
  l.type = "text";
  l.addEventListener("input", () => {
    let t = l.value;
    if (/^[0-9A-F]{6}$/i.test(t)) {
      t = "#" + t;
    }
    r.color = new s.Q1f(t);
    (0, i.gn)(this, Yt, "m", dn).call(this);
  });
  l.addEventListener("blur", () => {
    l.value = "#" + r.color.getHexString();
  });
  a.appendChild(l);
  const c = document.createElement("div");
  c.className = "color-preview";
  a.appendChild(c);
  const r = new Qt(e, t => {
    if (document.activeElement != l) {
      l.value = "#" + t.getHexString();
    }
    c.style.backgroundColor = "#" + t.getHexString();
    (0, i.gn)(this, Yt, "m", dn).call(this);
  });
  l.value = "#" + r.color.getHexString();
  (0, i.gn)(this, cn, "f").push(r);
};
const Gn = kn;
var yn;
var Cn;
var En;
var Mn;
var Ln;
var Nn;
Cn = new WeakMap();
En = new WeakMap();
Mn = new WeakMap();
Ln = new WeakMap();
yn = new WeakSet();
Nn = function () {
  (0, i.gn)(this, Cn, "f").saveUnlockedCarStyles(Array.from((0, i.gn)(this, En, "f")), Array.from((0, i.gn)(this, Mn, "f")), Array.from((0, i.gn)(this, Ln, "f")));
};
const An = class {
  constructor(t) {
    yn.add(this);
    Cn.set(this, undefined);
    En.set(this, new Set());
    Mn.set(this, new Set());
    Ln.set(this, new Set());
    (0, i.GG)(this, Cn, t, "f");
    if (xn.XZ()) {
      const {
        patterns: t,
        rims: n,
        exhausts: e
      } = (0, i.gn)(this, Cn, "f").loadUnlockedCarStyles();
      for (const n of t) {
        (0, i.gn)(this, En, "f").add(n);
      }
      for (const t of n) {
        (0, i.gn)(this, Mn, "f").add(t);
      }
      for (const t of e) {
        (0, i.gn)(this, Ln, "f").add(t);
      }
      for (let t = 0; t < 4; t++) {
        if (!y.A.isValidPattern(t)) {
          throw new Error("Invalid car style pattern");
        }
        (0, i.gn)(this, En, "f").add(t);
      }
      for (let t = 0; t < 3; t++) {
        if (!y.A.isValidRims(t)) {
          throw new Error("Invalid car style rims");
        }
        (0, i.gn)(this, Mn, "f").add(t);
      }
      for (let t = 0; t < 2; t++) {
        if (!y.A.isValidExhaust(t)) {
          throw new Error("Invalid car style exhaust");
        }
        (0, i.gn)(this, Ln, "f").add(t);
      }
    }
  }
  isPatternUnlocked(t) {
    return !xn.XZ() || (0, i.gn)(this, En, "f").has(t);
  }
  unlockPattern(t) {
    if (!this.isPatternUnlocked(t)) {
      (0, i.gn)(this, En, "f").add(t);
      (0, i.gn)(this, yn, "m", Nn).call(this);
    }
  }
  isRimsUnlocked(t) {
    return !xn.XZ() || (0, i.gn)(this, Mn, "f").has(t);
  }
  unlockRims(t) {
    if (!this.isRimsUnlocked(t)) {
      (0, i.gn)(this, Mn, "f").add(t);
      (0, i.gn)(this, yn, "m", Nn).call(this);
    }
  }
  isExhaustUnlocked(t) {
    return !xn.XZ() || (0, i.gn)(this, Ln, "f").has(t);
  }
  unlockExhaust(t) {
    if (!this.isExhaustUnlocked(t)) {
      (0, i.gn)(this, Ln, "f").add(t);
      (0, i.gn)(this, yn, "m", Nn).call(this);
    }
  }
};
var Wn;
var Sn;
var Tn;
var zn;
var Pn;
var In;
var Un;
var Hn;
var On;
var Dn;
var Rn;
var Bn;
var Fn;
var qn;
var Vn;
var Xn;
var Qn;
var Yn;
var _n;
var jn;
var Zn;
var Jn;
var Kn;
var $n;
var te;
var ne;
var ee;
var ie;
var se;
var oe;
var ae;
var le;
var ce;
var re;
var he;
var de;
var ge;
var fe;
var pe;
var ue;
Sn = new WeakMap();
Tn = new WeakMap();
zn = new WeakMap();
Pn = new WeakMap();
In = new WeakMap();
Un = new WeakMap();
Hn = new WeakMap();
On = new WeakMap();
Dn = new WeakMap();
Rn = new WeakMap();
Bn = new WeakMap();
Fn = new WeakMap();
qn = new WeakMap();
Vn = new WeakMap();
Xn = new WeakMap();
Qn = new WeakMap();
Yn = new WeakMap();
_n = new WeakMap();
jn = new WeakMap();
Zn = new WeakMap();
Jn = new WeakMap();
Kn = new WeakMap();
$n = new WeakMap();
te = new WeakMap();
ne = new WeakMap();
ee = new WeakMap();
ie = new WeakMap();
se = new WeakMap();
oe = new WeakMap();
ae = new WeakMap();
Wn = new WeakSet();
le = function () {
  const t = y.A.default();
  (0, i.gn)(this, te, "f").setCarStyle(t);
  (0, i.gn)(this, Sn, "f").setCarStyle(t);
  (0, i.GG)(this, oe, true, "f");
};
ce = function () {
  const t = y.A.patterns.map((t, n) => {
    if (!y.A.isValidPattern(n)) {
      throw new Error("Invalid car style pattern");
    }
    return n;
  }).filter(t => (0, i.gn)(this, Xn, "f").isPatternUnlocked(t));
  const n = y.A.rims.map((t, n) => {
    if (!y.A.isValidRims(n)) {
      throw new Error("Invalid car style rims");
    }
    return n;
  }).filter(t => (0, i.gn)(this, Xn, "f").isRimsUnlocked(t));
  const e = y.A.exhausts.map((t, n) => {
    if (!y.A.isValidExhaust(n)) {
      throw new Error("Invalid car style exhaust");
    }
    return n;
  }).filter(t => (0, i.gn)(this, Xn, "f").isExhaustUnlocked(t));
  const o = t[Math.floor(Math.random() * t.length)];
  const a = n[Math.floor(Math.random() * n.length)];
  const l = e[Math.floor(Math.random() * e.length)];
  const c = Math.random() * 360;
  let r;
  let h;
  if (Math.random() < 0.9) {
    r = (1 - Math.pow(Math.random(), 2)) * 100;
    h = (0.05 + (1 - Math.pow(Math.random(), 2)) * 0.25) * 100;
  } else {
    r = 0;
    h = Math.random() * 100;
  }
  const d = new s.Q1f("hsl(" + c.toString() + "," + r.toString() + "%," + h.toString() + "%)").getHex();
  let g;
  let f;
  let p;
  g = Math.random() < 0.5 ? (c + 180) % 360 : Math.random() < 0.5 ? (c + 120) % 360 : (c - 120) % 360;
  if (Math.random() < 0.9) {
    f = r;
    p = (0.05 + (1 - Math.pow(Math.random(), 2)) * 0.25) * 100;
  } else {
    f = 0;
    p = Math.random() * 100;
  }
  const u = new s.Q1f("hsl(" + g.toString() + "," + f.toString() + "%," + p.toString() + "%)").getHex();
  let m;
  let v;
  m = Math.random() < 0.5 ? 1250067 : Math.random() < 0.4 ? d : u;
  v = Math.random() < 0.5 ? 6710886 : m == d ? u : m == u || Math.random() < 0.4 ? d : u;
  const w = new y.A(o, a, l, d, u, m, v);
  (0, i.gn)(this, te, "f").setCarStyle(w);
  (0, i.gn)(this, Sn, "f").setCarStyle(w);
  (0, i.GG)(this, oe, true, "f");
};
re = function () {
  for (let t = 0; t < (0, i.gn)(this, Tn, "f").length; t++) {
    const n = (0, i.gn)(this, Tn, "f")[t];
    const e = (0, i.gn)(this, Hn, "f").getUserProfile(t);
    if (e != null && t != (0, i.gn)(this, ne, "f")) {
      n.setCarStyle(e.carStyle);
      n.setVisible(true);
    } else {
      n.setVisible(false);
    }
  }
};
he = function t(n, e, s, o) {
  const a = o != null;
  (0, i.GG)(this, Fn, new tt((0, i.gn)(this, zn, "f"), (0, i.gn)(this, In, "f"), e, s, (0, i.gn)(this, ee, "f"), a, e => {
    (0, i.gn)(this, Fn, "f")?.dispose();
    (0, i.GG)(this, Fn, null, "f");
    (0, i.gn)(this, On, "f").showConfirm((0, i.gn)(this, zn, "f").get("Are you sure you would like to delete \"{0}\"?", [e.nickname]), (0, i.gn)(this, zn, "f").get("Cancel"), (0, i.gn)(this, zn, "f").get("Confirm"), () => {
      (0, i.gn)(this, Wn, "m", t).call(this, n, e.nickname, e.countryCode, o);
    }, () => {
      (0, i.gn)(this, Hn, "f").deleteProfileSlot(n);
      if (n == (0, i.gn)(this, Hn, "f").profileSlot) {
        (0, i.gn)(this, Hn, "f").setProfileSlot((0, i.gn)(this, Hn, "f").firstOccupiedProfileSlot() ?? 0);
        (0, i.GG)(this, ne, (0, i.gn)(this, Hn, "f").profileSlot, "f");
        (0, i.GG)(this, ee, (0, i.gn)(this, Hn, "f").getCurrentUserProfile(), "f");
        (0, i.GG)(this, ie, (0, i.gn)(this, ee, "f").nickname, "f");
        (0, i.GG)(this, se, (0, i.gn)(this, ee, "f").countryCode, "f");
        (0, i.gn)(this, Jn, "f").textContent = (0, i.gn)(this, ie, "f");
        const t = (0, L.O)();
        const n = (0, i.gn)(this, se, "f") == null ? null : t.find(t => t.code == (0, i.gn)(this, se, "f"));
        if (n != null) {
          (0, i.gn)(this, Zn, "f").classList.add("loading");
          (0, i.gn)(this, Zn, "f").src = "images/countries/" + n.code + ".svg";
          (0, i.gn)(this, Zn, "f").title = n.name;
          (0, i.gn)(this, Zn, "f").classList.remove("hidden");
        } else {
          (0, i.gn)(this, Zn, "f").classList.add("hidden");
        }
        (0, i.gn)(this, te, "f").setCarStyle((0, i.gn)(this, ee, "f").carStyle);
        (0, i.gn)(this, Sn, "f").setCarStyle((0, i.gn)(this, ee, "f").carStyle);
        (0, i.GG)(this, oe, false, "f");
        (0, i.gn)(this, Wn, "m", re).call(this);
      }
      (0, i.gn)(this, jn, "f").classList.remove("hidden");
    });
  }, (e, s) => {
    (0, i.gn)(this, Fn, "f")?.dispose();
    (0, i.GG)(this, Fn, null, "f");
    (0, i.gn)(this, On, "f").showConfirm((0, i.gn)(this, zn, "f").get("Are you sure you want to display your private key?") + "\n\n" + (0, i.gn)(this, zn, "f").get("DO NOT SHARE THIS KEY WITH ANYONE."), (0, i.gn)(this, zn, "f").get("Cancel"), (0, i.gn)(this, zn, "f").get("Confirm"), () => {
      (0, i.gn)(this, Wn, "m", t).call(this, n, e.nickname, e.countryCode, o);
    }, () => {
      (0, i.GG)(this, qn, new lt((0, i.gn)(this, In, "f"), (0, i.gn)(this, zn, "f"), s, () => {
        (0, i.gn)(this, qn, "f")?.dispose();
        (0, i.GG)(this, qn, null, "f");
        (0, i.gn)(this, Wn, "m", t).call(this, n, e.nickname, e.countryCode, o);
      }, null), "f");
    });
  }, t => {
    (0, i.gn)(this, Fn, "f")?.dispose();
    (0, i.GG)(this, Fn, null, "f");
    if (t != null) {
      if (t.nickname != (0, i.gn)(this, ie, "f")) {
        (0, i.GG)(this, ie, t.nickname, "f");
        (0, i.gn)(this, Jn, "f").textContent = (0, i.gn)(this, ie, "f");
        (0, i.GG)(this, oe, true, "f");
      }
      if (t.countryCode != (0, i.gn)(this, se, "f")) {
        (0, i.GG)(this, se, t.countryCode, "f");
        const n = (0, L.O)();
        const e = (0, i.gn)(this, se, "f") == null ? null : n.find(t => t.code == (0, i.gn)(this, se, "f"));
        if (e != null) {
          (0, i.gn)(this, Zn, "f").classList.add("loading");
          (0, i.gn)(this, Zn, "f").src = "images/countries/" + e.code + ".svg";
          (0, i.gn)(this, Zn, "f").title = e.name;
          (0, i.gn)(this, Zn, "f").classList.remove("hidden");
        } else {
          (0, i.gn)(this, Zn, "f").classList.add("hidden");
        }
        (0, i.GG)(this, oe, true, "f");
      }
      if (a) {
        (0, i.gn)(this, Wn, "m", pe).call(this);
      }
    }
    (0, i.gn)(this, jn, "f").classList.remove("hidden");
  }), "f");
};
de = function t(n, e) {
  (0, i.GG)(this, qn, new lt((0, i.gn)(this, In, "f"), (0, i.gn)(this, zn, "f"), e, () => {
    (0, i.gn)(this, qn, "f")?.dispose();
    (0, i.GG)(this, qn, null, "f");
    (0, i.gn)(this, Wn, "m", ge).call(this);
  }, e => {
    (0, i.gn)(this, qn, "f")?.dispose();
    (0, i.GG)(this, qn, null, "f");
    if ((0, i.gn)(this, Hn, "f").hasDuplicateToken(e)) {
      (0, i.gn)(this, On, "f").show((0, i.gn)(this, zn, "f").get("You cannot have duplicate user profiles"), (0, i.gn)(this, zn, "f").get("Ok"), () => {
        (0, i.gn)(this, Wn, "m", t).call(this, n, e);
      });
    } else if ((0, i.gn)(this, Hn, "f").isValidToken(e)) {
      (0, i.gn)(this, Un, "f").getUser(e).then(s => {
        if (s != null) {
          if ((0, i.gn)(this, Hn, "f").createProfile(n, e, s.nickname, s.countryCode, s.carStyle)) {
            (0, i.GG)(this, ne, n, "f");
            (0, i.gn)(this, Hn, "f").setProfileSlot(n);
            (0, i.GG)(this, ee, (0, i.gn)(this, Hn, "f").getCurrentUserProfile(), "f");
            (0, i.GG)(this, ie, (0, i.gn)(this, ee, "f").nickname, "f");
            (0, i.GG)(this, se, (0, i.gn)(this, ee, "f").countryCode, "f");
            (0, i.gn)(this, Jn, "f").textContent = (0, i.gn)(this, ie, "f");
            const t = (0, L.O)();
            const e = (0, i.gn)(this, se, "f") == null ? null : t.find(t => t.code == (0, i.gn)(this, se, "f"));
            if (e != null) {
              (0, i.gn)(this, Zn, "f").classList.add("loading");
              (0, i.gn)(this, Zn, "f").src = "images/countries/" + e.code + ".svg";
              (0, i.gn)(this, Zn, "f").title = e.name;
              (0, i.gn)(this, Zn, "f").classList.remove("hidden");
            } else {
              (0, i.gn)(this, Zn, "f").classList.add("hidden");
            }
            (0, i.gn)(this, te, "f").setCarStyle((0, i.gn)(this, ee, "f").carStyle);
            (0, i.gn)(this, Sn, "f").setCarStyle((0, i.gn)(this, ee, "f").carStyle);
            (0, i.GG)(this, oe, false, "f");
            (0, i.gn)(this, Wn, "m", re).call(this);
            (0, i.gn)(this, jn, "f").classList.remove("hidden");
          } else {
            (0, i.gn)(this, On, "f").show((0, i.gn)(this, zn, "f").get("Failed to create user profile"), (0, i.gn)(this, zn, "f").get("Ok"), () => {
              (0, i.gn)(this, Wn, "m", t).call(this, n, e);
            });
          }
        } else {
          (0, i.gn)(this, On, "f").show((0, i.gn)(this, zn, "f").get("This user profile does not exist on the server"), (0, i.gn)(this, zn, "f").get("Ok"), () => {
            (0, i.gn)(this, Wn, "m", t).call(this, n, e);
          });
        }
      }).catch(s => {
        console.error(s);
        (0, i.gn)(this, On, "f").show((0, i.gn)(this, zn, "f").get("Failed to download user profile from the server"), (0, i.gn)(this, zn, "f").get("Ok"), () => {
          (0, i.gn)(this, Wn, "m", t).call(this, n, e);
        });
      });
    } else {
      (0, i.gn)(this, On, "f").show((0, i.gn)(this, zn, "f").get("User token is invalid"), (0, i.gn)(this, zn, "f").get("Ok"), () => {
        (0, i.gn)(this, Wn, "m", t).call(this, n, e);
      });
    }
  }), "f");
};
ge = function t() {
  (0, i.gn)(this, jn, "f").classList.add("hidden");
  (0, i.GG)(this, Vn, new Gt((0, i.gn)(this, zn, "f"), (0, i.gn)(this, In, "f"), (0, i.gn)(this, Hn, "f"), () => {
    (0, i.gn)(this, Vn, "f")?.dispose();
    (0, i.GG)(this, Vn, null, "f");
    (0, i.gn)(this, jn, "f").classList.remove("hidden");
  }, () => {
    (0, i.gn)(this, Vn, "f")?.dispose();
    (0, i.GG)(this, Vn, null, "f");
    const n = (0, i.gn)(this, Hn, "f").firstFreeProfileSlot();
    if (n == null) {
      (0, i.gn)(this, On, "f").show((0, i.gn)(this, zn, "f").get("You need a free user profile slot to import a new user profile"), (0, i.gn)(this, zn, "f").get("Ok"), () => {
        (0, i.gn)(this, Wn, "m", t).call(this);
      });
    } else {
      (0, i.gn)(this, Wn, "m", de).call(this, n, "");
    }
  }, t => {
    (0, i.gn)(this, Vn, "f")?.dispose();
    (0, i.GG)(this, Vn, null, "f");
    (0, i.GG)(this, ne, t, "f");
    (0, i.gn)(this, Hn, "f").setProfileSlot(t);
    (0, i.GG)(this, ee, (0, i.gn)(this, Hn, "f").getCurrentUserProfile(), "f");
    (0, i.GG)(this, ie, (0, i.gn)(this, ee, "f").nickname, "f");
    (0, i.GG)(this, se, (0, i.gn)(this, ee, "f").countryCode, "f");
    (0, i.gn)(this, Jn, "f").textContent = (0, i.gn)(this, ie, "f");
    const n = (0, L.O)();
    const e = (0, i.gn)(this, se, "f") == null ? null : n.find(t => t.code == (0, i.gn)(this, se, "f"));
    if (e != null) {
      (0, i.gn)(this, Zn, "f").classList.add("loading");
      (0, i.gn)(this, Zn, "f").src = "images/countries/" + e.code + ".svg";
      (0, i.gn)(this, Zn, "f").title = e.name;
      (0, i.gn)(this, Zn, "f").classList.remove("hidden");
    } else {
      (0, i.gn)(this, Zn, "f").classList.add("hidden");
    }
    (0, i.gn)(this, te, "f").setCarStyle((0, i.gn)(this, ee, "f").carStyle);
    (0, i.gn)(this, Sn, "f").setCarStyle((0, i.gn)(this, ee, "f").carStyle);
    (0, i.GG)(this, oe, false, "f");
    (0, i.gn)(this, Wn, "m", re).call(this);
    (0, i.gn)(this, jn, "f").classList.remove("hidden");
  }), "f");
};
fe = function (t) {
  if ((0, i.gn)(this, oe, "f")) {
    (0, i.gn)(this, On, "f").showConfirm((0, i.gn)(this, zn, "f").get("Are you sure you want to exit without saving?") + "\n\n" + (0, i.gn)(this, zn, "f").get("All changes will be lost!"), (0, i.gn)(this, zn, "f").get("Cancel"), (0, i.gn)(this, zn, "f").get("Confirm"), null, () => {
      t();
    });
  } else {
    t();
  }
};
pe = function () {
  if ((0, i.gn)(this, oe, "f")) {
    (0, i.gn)(this, Hn, "f").setNickname((0, i.gn)(this, ie, "f"));
    (0, i.gn)(this, Hn, "f").setCountryCode((0, i.gn)(this, se, "f"));
    (0, i.gn)(this, Hn, "f").setCarStyle((0, i.gn)(this, Sn, "f").getCarStyle());
    (0, i.GG)(this, ne, (0, i.gn)(this, Hn, "f").profileSlot, "f");
    (0, i.GG)(this, ee, (0, i.gn)(this, Hn, "f").getCurrentUserProfile(), "f");
    (0, i.GG)(this, oe, false, "f");
    (0, i.GG)(this, ae, true, "f");
  }
  (0, i.gn)(this, Dn, "f").tryActivatePersistentStorage();
  (0, i.gn)(this, Wn, "m", ue).call(this);
};
ue = function () {
  if ((0, i.gn)(this, $n, "f") != null) {
    clearTimeout((0, i.gn)(this, $n, "f"));
    (0, i.GG)(this, $n, null, "f");
  }
  (0, i.gn)(this, Kn, "f").classList.remove("show");
  (0, i.gn)(this, Kn, "f").classList.remove("hide");
  (0, i.GG)(this, $n, window.setTimeout(() => {
    (0, i.gn)(this, Kn, "f").textContent = (0, i.gn)(this, zn, "f").get("Car saved!");
    (0, i.gn)(this, Kn, "f").classList.add("show");
    (0, i.GG)(this, $n, window.setTimeout(() => {
      (0, i.gn)(this, Kn, "f").classList.remove("show");
      (0, i.gn)(this, Kn, "f").classList.add("hide");
    }, 3000), "f");
  }, 0), "f");
};
const me = class {
  constructor(t, n, e, o, a, l, c, r, h, d) {
    Wn.add(this);
    Sn.set(this, undefined);
    Tn.set(this, undefined);
    zn.set(this, undefined);
    Pn.set(this, undefined);
    In.set(this, undefined);
    Un.set(this, undefined);
    Hn.set(this, undefined);
    On.set(this, undefined);
    Dn.set(this, undefined);
    Rn.set(this, undefined);
    Bn.set(this, undefined);
    Fn.set(this, null);
    qn.set(this, null);
    Vn.set(this, null);
    Xn.set(this, undefined);
    Qn.set(this, undefined);
    Yn.set(this, null);
    _n.set(this, undefined);
    jn.set(this, undefined);
    Zn.set(this, undefined);
    Jn.set(this, undefined);
    Kn.set(this, undefined);
    $n.set(this, null);
    te.set(this, undefined);
    ne.set(this, undefined);
    ee.set(this, undefined);
    ie.set(this, undefined);
    se.set(this, undefined);
    oe.set(this, false);
    ae.set(this, false);
    (0, i.GG)(this, Sn, t, "f");
    (0, i.GG)(this, Tn, n, "f");
    (0, i.GG)(this, Pn, o, "f");
    (0, i.GG)(this, In, a, "f");
    (0, i.GG)(this, Un, l, "f");
    (0, i.GG)(this, Hn, c, "f");
    (0, i.GG)(this, On, r, "f");
    (0, i.GG)(this, Dn, h, "f");
    (0, i.GG)(this, zn, e, "f");
    (0, i.GG)(this, Xn, new An(h), "f");
    (0, i.GG)(this, ne, (0, i.gn)(this, Hn, "f").profileSlot, "f");
    (0, i.GG)(this, ee, (0, i.gn)(this, Hn, "f").getCurrentUserProfile(), "f");
    (0, i.GG)(this, ie, (0, i.gn)(this, ee, "f").nickname, "f");
    (0, i.GG)(this, se, (0, i.gn)(this, ee, "f").countryCode, "f");
    (0, i.GG)(this, Qn, new s.ubm(70, 1, 0.1, C.A.maxViewDistance), "f");
    (0, i.gn)(this, Qn, "f").position.set(0, 2, 6);
    o.scene.add((0, i.gn)(this, Qn, "f"));
    (0, i.GG)(this, _n, new G.N((0, i.gn)(this, Qn, "f"), o.canvas), "f");
    (0, i.gn)(this, _n, "f").addEventListener("start", () => {
      (0, i.GG)(this, Yn, null, "f");
    });
    (0, i.gn)(this, _n, "f").target.set(0, 0, 1.2);
    (0, i.gn)(this, _n, "f").update();
    (0, i.gn)(this, _n, "f").mouseButtons = {
      LEFT: s.kBv.ROTATE,
      MIDDLE: s.kBv.ROTATE,
      RIGHT: s.kBv.ROTATE
    };
    (0, i.gn)(this, _n, "f").enablePan = false;
    (0, i.gn)(this, _n, "f").minDistance = 2.5;
    (0, i.gn)(this, _n, "f").maxDistance = 7;
    (0, i.gn)(this, _n, "f").maxPolarAngle = Math.PI / 2 - 0.15;
    const g = document.getElementById("ui");
    if (g == null) {
      throw new Error("UI element not found");
    }
    (0, i.GG)(this, Rn, g, "f");
    (0, i.GG)(this, jn, document.createElement("div"), "f");
    (0, i.gn)(this, jn, "f").className = "customization-ui";
    const f = document.createElement("div");
    f.className = "safe-area-left";
    (0, i.gn)(this, jn, "f").appendChild(f);
    const p = document.createElement("div");
    p.className = "safe-area-right";
    (0, i.gn)(this, jn, "f").appendChild(p);
    const u = document.createElement("div");
    u.className = "top";
    (0, i.gn)(this, jn, "f").appendChild(u);
    const m = document.createElement("button");
    m.className = "button";
    m.innerHTML = "<img class=\"button-icon\" src=\"images/quit.svg\"> ";
    m.append(document.createTextNode(e.get("Exit")));
    m.addEventListener("click", () => {
      a.playUIClick();
      if (!xn.Xx()) {
        (0, i.gn)(this, Wn, "m", fe).call(this, d);
      }
    });
    u.appendChild(m);
    window.addEventListener("keydown", (0, i.GG)(this, Bn, t => {
      if (t.code == "Escape" && !xn.Xx() && (0, i.gn)(this, Fn, "f") == null && (0, i.gn)(this, qn, "f") == null && (0, i.gn)(this, Vn, "f") == null && !(0, i.gn)(this, On, "f").isOpen) {
        (0, i.gn)(this, Wn, "m", fe).call(this, d);
        t.preventDefault();
      }
    }, "f"));
    const v = document.createElement("button");
    v.className = "button";
    v.innerHTML = "<img class=\"button-icon\" src=\"images/save.svg\"> ";
    v.append(document.createTextNode(e.get("Save")));
    v.addEventListener("click", () => {
      a.playUIClick();
      (0, i.gn)(this, jn, "f").classList.add("hidden");
      (0, i.gn)(this, Wn, "m", he).call(this, (0, i.gn)(this, ne, "f"), (0, i.gn)(this, ie, "f"), (0, i.gn)(this, se, "f"), () => {
        (0, i.gn)(this, jn, "f").classList.remove("hidden");
        (0, i.gn)(this, Wn, "m", pe).call(this);
      });
    });
    u.appendChild(v);
    const w = document.createElement("button");
    w.className = "button";
    w.innerHTML = "<img class=\"button-icon\" src=\"images/reset.svg\"> ";
    w.append(document.createTextNode(e.get("Default")));
    w.addEventListener("click", () => {
      a.playUIClick();
      (0, i.gn)(this, Wn, "m", le).call(this);
    });
    u.appendChild(w);
    const b = document.createElement("button");
    b.className = "button";
    b.innerHTML = "<img class=\"button-icon\" src=\"images/random.svg\"> ";
    b.append(document.createTextNode(e.get("Random")));
    b.addEventListener("click", () => {
      a.playUIClick();
      (0, i.gn)(this, Wn, "m", ce).call(this);
    });
    u.appendChild(b);
    const x = document.createElement("button");
    x.className = "button right";
    x.innerHTML = "<img class=\"button-icon\" src=\"images/list.svg\"> ";
    x.append(document.createTextNode(e.get("Switch Profile")));
    x.addEventListener("click", () => {
      a.playUIClick();
      if (!xn.Xx()) {
        if ((0, i.gn)(this, oe, "f")) {
          (0, i.gn)(this, On, "f").showConfirm(e.get("Are you sure you want to switch profile without saving?") + "\n\n" + e.get("All changes will be lost!"), e.get("Cancel"), e.get("Confirm"), null, () => {
            (0, i.gn)(this, Wn, "m", ge).call(this);
          });
        } else {
          (0, i.gn)(this, Wn, "m", ge).call(this);
        }
      }
    });
    u.appendChild(x);
    const k = document.createElement("div");
    k.className = "profile-button-container";
    (0, i.gn)(this, jn, "f").appendChild(k);
    const y = document.createElement("button");
    y.className = "button";
    (0, i.GG)(this, Zn, document.createElement("img"), "f");
    (0, i.gn)(this, Zn, "f").className = "country-flag loading";
    (0, i.gn)(this, Zn, "f").addEventListener("load", () => {
      (0, i.gn)(this, Zn, "f").classList.remove("loading");
    });
    (0, i.gn)(this, Zn, "f").draggable = false;
    y.appendChild((0, i.gn)(this, Zn, "f"));
    const E = (0, L.O)();
    const M = (0, i.gn)(this, se, "f") == null ? null : E.find(t => t.code == (0, i.gn)(this, se, "f"));
    if (M != null) {
      (0, i.gn)(this, Zn, "f").src = "images/countries/" + M.code + ".svg";
      (0, i.gn)(this, Zn, "f").title = M.name;
    } else {
      (0, i.gn)(this, Zn, "f").classList.add("hidden");
    }
    (0, i.GG)(this, Jn, document.createTextNode((0, i.gn)(this, ie, "f")), "f");
    y.append((0, i.gn)(this, Jn, "f"));
    y.addEventListener("click", () => {
      a.playUIClick();
      (0, i.gn)(this, jn, "f").classList.add("hidden");
      (0, i.gn)(this, Wn, "m", he).call(this, (0, i.gn)(this, ne, "f"), (0, i.gn)(this, ie, "f"), (0, i.gn)(this, se, "f"), null);
    });
    k.appendChild(y);
    (0, i.GG)(this, Kn, document.createElement("div"), "f");
    (0, i.gn)(this, Kn, "f").className = "save-message";
    (0, i.gn)(this, jn, "f").appendChild((0, i.gn)(this, Kn, "f"));
    (0, i.GG)(this, te, new Gn((0, i.gn)(this, In, "f"), (0, i.gn)(this, zn, "f"), (0, i.gn)(this, On, "f"), (0, i.gn)(this, Xn, "f"), (0, i.gn)(this, jn, "f"), t => {
      (0, i.gn)(this, Sn, "f").setCarStyle(t);
      (0, i.GG)(this, oe, true, "f");
    }, t => {
      (0, i.GG)(this, Yn, t, "f");
    }), "f");
    (0, i.gn)(this, Rn, "f").appendChild((0, i.gn)(this, jn, "f"));
    (0, i.gn)(this, te, "f").setCarStyle((0, i.gn)(this, ee, "f").carStyle);
    (0, i.gn)(this, Sn, "f").setCarStyle((0, i.gn)(this, ee, "f").carStyle);
    (0, i.gn)(this, Wn, "m", re).call(this);
    (0, i.GG)(this, oe, false, "f");
  }
  dispose() {
    if ((0, i.gn)(this, ae, "f")) {
      const {
        token: t,
        nickname: n,
        countryCode: e,
        carStyle: s
      } = (0, i.gn)(this, Hn, "f").getCurrentUserProfile();
      (0, i.gn)(this, Un, "f").submitUserProfile(t, n, e, s).catch(t => {
        console.warn(t);
      });
    }
    (0, i.gn)(this, Pn, "f").scene.remove((0, i.gn)(this, Qn, "f"));
    window.removeEventListener("keydown", (0, i.gn)(this, Bn, "f"));
    (0, i.gn)(this, te, "f").dispose();
    (0, i.gn)(this, Rn, "f").removeChild((0, i.gn)(this, jn, "f"));
    (0, i.gn)(this, _n, "f").dispose();
    (0, i.gn)(this, Pn, "f").canvas.style.touchAction = "";
  }
  update(t) {
    if ((0, i.gn)(this, Yn, "f") != null) {
      (0, i.gn)(this, Qn, "f").position.lerp((0, i.gn)(this, Yn, "f"), Math.min(1, t * 10));
      (0, i.gn)(this, _n, "f").update();
    }
  }
  get camera() {
    return (0, i.gn)(this, Qn, "f");
  }
};
var ve;
var we;
var be;
var xe;
var ke;
var Ge;
var ye;
var Ce;
var Ee;
var Me;
var Le;
var Ne = require(/*webcrack:missing*/"./6582.js");
class Ae {
  constructor(t, n, e, o, a, c, r, h, d, g, f, p) {
    we.set(this, undefined);
    be.set(this, undefined);
    xe.set(this, undefined);
    ke.set(this, undefined);
    Ge.set(this, undefined);
    ye.set(this, undefined);
    Ce.set(this, undefined);
    Ee.set(this, undefined);
    Me.set(this, undefined);
    (0, i.GG)(this, we, c, "f");
    (0, i.GG)(this, be, n, "f");
    (0, i.GG)(this, xe, e, "f");
    (0, i.GG)(this, ke, o, "f");
    (0, i.GG)(this, Ge, a, "f");
    const u = Ne.U("PolyTrack24pdBBHsYCCCAAA9XK12cdEBcBplkDN42ExQNdSWh5Xf9eEp1009dQICjjB7eqqlx7YH8BnFJzsokZScpwEDHaBDwkHFLDPYfxQPqFblOkZfJVS5YWIfXDZru01TebKuEiCCvXfpfxuTe0adAH1wf51aX4OmtpXr6XJPfHfSPO3CemUiRGceD0OBJGnIjkU5RJaqf8t5u5RFgcOawuRoIeAp088v3gpv4u2fe6kqKyyFaX5HQk17dqpwUldfSAL32crBslQfPAQfwSaC");
    if (u == null) {
      throw new Error("Failed to load track data");
    }
    n.loadTrackData(u.trackData);
    n.refreshMeshes();
    e.generateMountains(n.getBounds());
    if ((0, i.gn)(ve, ve, "f", Le) == null) {
      throw new Error("CustomizationState resources not initialized");
    }
    (0, i.GG)(this, Ce, (0, i.gn)(ve, ve, "f", Le).clone(), "f");
    (0, i.gn)(this, Ce, "f").traverse(t => {
      if (t instanceof s.eaF) {
        let n;
        if ((0, i.gn)(this, Ge, "f").isTrackShadowsEnabled()) {
          t.castShadow = true;
          t.receiveShadow = true;
        }
        n = Array.isArray(t.material) ? t.material : [t.material];
        for (const t of n) {
          t.side = s.hB5;
          (0, i.gn)(this, Ge, "f").addMaterial(t);
        }
      }
    });
    a.scene.add((0, i.gn)(this, Ce, "f"));
    const m = {
      position: new s.Pq0(0, 0.35, 1.35),
      quaternion: new s.PTz().setFromEuler(new s.O9p(0, Math.PI * -0.24, 0))
    };
    (0, i.GG)(this, Ee, new l.A(null, m, null, null, a, c, e, n, n.getTrackData(), h, null), "f");
    (0, i.gn)(this, Ee, "f").audioVolume = 0;
    const v = (0, i.gn)(this, Ee, "f").getCarState();
    (0, i.gn)(this, Ee, "f").setCarState({
      ...v,
      steering: -0.2
    }, true);
    (0, i.gn)(this, Ee, "f").update(0);
    (0, i.GG)(this, Me, [], "f");
    for (let t = 0; t < N.A.maxNumberOfProfiles; t++) {
      const o = {
        position: new s.Pq0(t * 10.5 - 22, 0.35, -34),
        quaternion: new s.PTz().setFromEuler(new s.O9p(0, 0, 0))
      };
      const r = new l.A(null, o, null, null, a, c, e, n, n.getTrackData(), h, null);
      r.audioVolume = 0;
      r.update(0);
      (0, i.gn)(this, Me, "f").push(r);
    }
    (0, i.GG)(this, ye, new me((0, i.gn)(this, Ee, "f"), (0, i.gn)(this, Me, "f"), t, a, c, d, r, g, f, p), "f");
    a.setCamera((0, i.gn)(this, ye, "f").camera);
  }
  dispose() {
    (0, i.gn)(this, be, "f").clear();
    (0, i.gn)(this, xe, "f").clearMountains();
    (0, i.gn)(this, ye, "f").dispose();
    (0, i.gn)(this, Ge, "f").scene.remove((0, i.gn)(this, Ce, "f"));
    (0, i.gn)(this, Ce, "f").traverse(t => {
      if (t instanceof s.eaF) {
        let n;
        t.geometry.dispose();
        n = Array.isArray(t.material) ? t.material : [t.material];
        for (const t of n) {
          t.dispose();
          (0, i.gn)(this, Ge, "f").removeMaterial(t);
        }
      }
    });
    (0, i.gn)(this, Ee, "f").dispose();
    for (const t of (0, i.gn)(this, Me, "f")) {
      t.dispose();
    }
    (0, i.GG)(this, Me, [], "f");
  }
  update(t) {
    (0, i.gn)(this, ye, "f").update(t);
    (0, i.gn)(this, xe, "f").update((0, i.gn)(this, be, "f"));
    (0, i.gn)(this, ke, "f").update(t, (0, i.gn)(this, Ge, "f").camera, (0, i.gn)(this, be, "f").sunDirection);
    (0, i.gn)(this, we, "f").update(t, false, (0, i.gn)(this, Ge, "f"));
    (0, i.gn)(this, Ge, "f").update((0, i.gn)(this, be, "f").sunDirection);
  }
  static async initResources() {
    if ((0, i.gn)(ve, ve, "f", Le) != null) {
      return;
    }
    const t = new a.B();
    const n = new o.Z();
    try {
      n.setWorkerLimit(1);
      n.setDecoderPath("lib/draco/");
      t.setDRACOLoader(n);
      await new Promise((n, e) => {
        t.load("models/garage.glb", t => {
          (0, i.GG)(ve, ve, t.scene, "f", Le);
          (0, i.gn)(ve, ve, "f", Le).traverse(t => {
            if (t instanceof s.eaF) {
              if (Array.isArray(t.material)) {
                for (let n = 0; n < t.material.length; n++) {
                  const e = t.material[n];
                  if (!(e instanceof s._4j)) {
                    throw new Error("Material is not a MeshStandardMaterial");
                  }
                  t.material[n] = new s.G_z({
                    color: e.color
                  });
                }
              } else {
                t.material = new s.G_z({
                  color: t.material.color
                });
              }
              t.geometry = t.geometry.toNonIndexed();
              t.geometry.computeVertexNormals(false);
            }
          });
          n();
        }, undefined, e);
      });
    } finally {
      n.dispose();
    }
  }
}
ve = Ae;
we = new WeakMap();
be = new WeakMap();
xe = new WeakMap();
ke = new WeakMap();
Ge = new WeakMap();
ye = new WeakMap();
Ce = new WeakMap();
Ee = new WeakMap();
Me = new WeakMap();
Le = {
  value: null
};
export default Ae;