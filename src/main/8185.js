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
var m = require("./8353.js");
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
var N;
var z;
var D;
var B;
var G;
var F;
var O;
var W;
var V;
var H;
var j;
var K;
var q;
var Q;
var J;
var X = require("./6789.js");
var Y = require("./7100.js");
var Z = require("./7852.js");
let $ = null;
let ee = 0;
let te = 0;
let ne = 0;
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
N = new WeakMap();
z = new WeakMap();
D = new WeakMap();
B = new WeakMap();
G = new WeakMap();
F = new WeakMap();
O = new WeakMap();
W = new WeakMap();
V = new WeakMap();
H = new WeakMap();
j = new WeakMap();
K = new WeakMap();
v = new WeakSet();
q = function (e, t, n, r, a, s, o, l = null) {
  const c = document.createElement("div");
  let h;
  let d;
  c.className = "track";
  switch (e) {
    case "official":
      h = (0, i.gn)(this, I, "f");
      d = (0, i.gn)(this, N, "f");
      break;
    case "community":
      h = (0, i.gn)(this, L, "f");
      d = (0, i.gn)(this, z, "f");
      break;
    case "custom":
      h = (0, i.gn)(this, U, "f");
      d = (0, i.gn)(this, D, "f");
  }
  if (t == null) {
    h.appendChild(c);
  } else {
    let e = d.get(t);
    if (e == null) {
      e = document.createElement("div");
      d.set(t, e);
      if (typeof t == "string") {
        h.appendChild(e);
        const n = document.createElement("div");
        n.className = "group-title";
        n.textContent = t;
        e.appendChild(n);
      } else {
        switch (t) {
          case Z.A.Summer:
            h.prepend(e);
            break;
          case Z.A.Winter:
            {
              const t = d.get(Z.A.Desert);
              if (t != null) {
                h.insertBefore(e, t);
              } else {
                h.appendChild(e);
              }
              break;
            }
          case Z.A.Desert:
            h.appendChild(e);
        }
        let n;
        let a;
        let s;
        switch (r) {
          case Z.A.Summer:
            n = "";
            a = (0, i.gn)(this, y, "f").get("Summer");
            s = "images/summer.svg";
            break;
          case Z.A.Winter:
            n = "winter";
            a = (0, i.gn)(this, y, "f").get("Winter");
            s = "images/winter_colored.svg";
            break;
          case Z.A.Desert:
            n = "desert";
            a = (0, i.gn)(this, y, "f").get("Desert");
            s = "images/desert_colored.svg";
        }
        const o = document.createElement("div");
        o.className = "group-title " + n;
        o.textContent = a;
        e.appendChild(o);
        const l = document.createElement("img");
        l.src = s;
        o.prepend(l);
      }
    }
    e.appendChild(c);
  }
  const u = document.createElement("button");
  u.className = "button";
  u.addEventListener("click", () => {
    (0, i.gn)(this, w, "f").playUIClick();
    (0, i.gn)(this, M, "f").call(this, n, r, a, e, s, o);
  });
  c.appendChild(u);
  const f = document.createElement("div");
  f.className = "track-title";
  u.appendChild(f);
  const p = document.createElement("p");
  p.textContent = n.name;
  f.appendChild(p);
  if (o instanceof HTMLCanvasElement) {
    u.appendChild(o);
  } else {
    const e = document.createElement("img");
    e.loading = "lazy";
    e.className = "loading";
    e.addEventListener("load", () => {
      e.classList.remove("loading");
    });
    e.src = o;
    u.appendChild(e);
  }
  let g;
  switch (r) {
    case Z.A.Summer:
      g = "images/summer.svg";
      break;
    case Z.A.Winter:
      g = "images/winter.svg";
      break;
    case Z.A.Desert:
      g = "images/desert.svg";
  }
  const m = document.createElement("img");
  m.className = "environment";
  m.src = g;
  u.appendChild(m);
  const A = (0, i.gn)(this, x, "f").getRecordTime((0, i.gn)(this, k, "f").profileSlot, s);
  const v = document.createElement("div");
  v.className = "record";
  v.textContent = A != null ? X.A.formatTimeString(A) : (0, i.gn)(this, y, "f").get("No record");
  u.appendChild(v);
  if (l != null) {
    const e = document.createElement("button");
    e.className = "delete-button";
    e.innerHTML = "<img src=\"images/delete.svg\">";
    e.addEventListener("click", () => {
      (0, i.gn)(this, w, "f").playUIClick();
      l();
    });
    c.appendChild(e);
  }
  (0, i.gn)(this, B, "f").push({
    category: e,
    group: t,
    trackMetadata: n,
    trackEnvironment: r,
    trackData: a,
    buttonContainer: c
  });
};
Q = function (e) {
  $ = e;
  (0, i.gn)(this, E, "f").saveTrackSelectionTab($);
  if (e == "official") {
    (0, i.gn)(this, C, "f").classList.add("selected");
    (0, i.gn)(this, R, "f").classList.remove("selected");
    (0, i.gn)(this, P, "f").classList.remove("selected");
    (0, i.gn)(this, I, "f").classList.add("open");
    (0, i.gn)(this, L, "f").classList.remove("open");
    (0, i.gn)(this, U, "f").classList.remove("open");
  } else if (e == "community") {
    (0, i.gn)(this, C, "f").classList.remove("selected");
    (0, i.gn)(this, R, "f").classList.add("selected");
    (0, i.gn)(this, P, "f").classList.remove("selected");
    (0, i.gn)(this, I, "f").classList.remove("open");
    (0, i.gn)(this, L, "f").classList.add("open");
    (0, i.gn)(this, U, "f").classList.remove("open");
  } else {
    (0, i.gn)(this, C, "f").classList.remove("selected");
    (0, i.gn)(this, R, "f").classList.remove("selected");
    (0, i.gn)(this, P, "f").classList.add("selected");
    (0, i.gn)(this, I, "f").classList.remove("open");
    (0, i.gn)(this, L, "f").classList.remove("open");
    (0, i.gn)(this, U, "f").classList.add("open");
  }
};
J = function () {
  const e = (0, i.gn)(this, G, "f").value.trim().toLowerCase();
  for (const t of (0, i.gn)(this, B, "f")) {
    if (t.trackMetadata.name.toLowerCase().includes(e) || t.trackMetadata.author?.toLowerCase().includes(e)) {
      t.buttonContainer.style.display = "";
    } else {
      t.buttonContainer.style.display = "none";
    }
  }
  for (const e of ["official", "community", "custom"]) {
    let t;
    switch (e) {
      case "official":
        t = (0, i.gn)(this, N, "f");
        break;
      case "community":
        t = (0, i.gn)(this, z, "f");
        break;
      case "custom":
        t = (0, i.gn)(this, D, "f");
    }
    for (const [n, r] of t.entries()) {
      if ((0, i.gn)(this, B, "f").some(t => t.category == e && t.group == n && t.buttonContainer.style.display != "none")) {
        r.style.display = "";
      } else {
        r.style.display = "none";
      }
    }
  }
  $ ??= (0, i.gn)(this, E, "f").loadTrackSelectionTab();
  if ((0, i.gn)(this, B, "f").filter(e => e.category == $).every(e => e.buttonContainer.style.display == "none")) {
    for (const e of ["official", "community", "custom"]) {
      if ((0, i.gn)(this, B, "f").some(t => t.category == e && t.buttonContainer.style.display != "none")) {
        (0, i.gn)(this, v, "m", Q).call(this, e);
        break;
      }
    }
  }
};
export const A = class {
  constructor(e, t, n, r, a, s, o, l, c, h, d, u) {
    v.add(this);
    b.set(this, undefined);
    y.set(this, undefined);
    w.set(this, undefined);
    x.set(this, undefined);
    S.set(this, undefined);
    k.set(this, undefined);
    T.set(this, undefined);
    E.set(this, undefined);
    M.set(this, undefined);
    _.set(this, undefined);
    C.set(this, undefined);
    R.set(this, undefined);
    P.set(this, undefined);
    I.set(this, undefined);
    L.set(this, undefined);
    U.set(this, undefined);
    N.set(this, new Map());
    z.set(this, new Map());
    D.set(this, new Map());
    B.set(this, []);
    G.set(this, undefined);
    F.set(this, null);
    O.set(this, false);
    W.set(this, false);
    V.set(this, undefined);
    H.set(this, undefined);
    j.set(this, undefined);
    K.set(this, undefined);
    if (e == null) {
      const t = document.getElementById("ui");
      if (t == null) {
        throw new Error("UI element not found");
      }
      e = t;
    }
    (0, i.GG)(this, b, e, "f");
    (0, i.GG)(this, y, t, "f");
    (0, i.GG)(this, w, n, "f");
    (0, i.GG)(this, x, r, "f");
    (0, i.GG)(this, S, a, "f");
    (0, i.GG)(this, k, s, "f");
    (0, i.GG)(this, T, o, "f");
    (0, i.GG)(this, E, l, "f");
    (0, i.GG)(this, M, u, "f");
    (0, i.GG)(this, _, document.createElement("div"), "f");
    (0, i.gn)(this, _, "f").className = h ? "track-selection-ui with-background hidden" : "track-selection-ui hidden";
    e.appendChild((0, i.gn)(this, _, "f"));
    const f = document.createElement("div");
    f.className = "safe-area-left";
    (0, i.gn)(this, _, "f").appendChild(f);
    const p = document.createElement("div");
    p.className = "safe-area-right";
    (0, i.gn)(this, _, "f").appendChild(p);
    const g = document.createElement("div");
    g.className = "bar";
    (0, i.gn)(this, _, "f").appendChild(g);
    const m = document.createElement("div");
    m.className = "category-container";
    (0, i.gn)(this, _, "f").appendChild(m);
    (0, i.GG)(this, C, document.createElement("button"), "f");
    (0, i.gn)(this, C, "f").className = "button official selected";
    (0, i.gn)(this, C, "f").append(document.createTextNode((0, i.gn)(this, y, "f").get("Official tracks")));
    (0, i.gn)(this, C, "f").addEventListener("click", () => {
      (0, i.gn)(this, w, "f").playUIClick();
      (0, i.gn)(this, v, "m", Q).call(this, "official");
    });
    m.appendChild((0, i.gn)(this, C, "f"));
    const A = document.createElement("div");
    A.className = "cover";
    (0, i.gn)(this, C, "f").prepend(A);
    (0, i.GG)(this, R, document.createElement("button"), "f");
    (0, i.gn)(this, R, "f").className = "button community";
    (0, i.gn)(this, R, "f").append(document.createTextNode((0, i.gn)(this, y, "f").get("Community tracks")));
    (0, i.gn)(this, R, "f").addEventListener("click", () => {
      (0, i.gn)(this, w, "f").playUIClick();
      (0, i.gn)(this, v, "m", Q).call(this, "community");
    });
    m.appendChild((0, i.gn)(this, R, "f"));
    const q = document.createElement("div");
    q.className = "cover";
    (0, i.gn)(this, R, "f").prepend(q);
    (0, i.GG)(this, P, document.createElement("button"), "f");
    (0, i.gn)(this, P, "f").className = "button custom";
    (0, i.gn)(this, P, "f").append(document.createTextNode((0, i.gn)(this, y, "f").get("Custom tracks")));
    (0, i.gn)(this, P, "f").addEventListener("click", () => {
      (0, i.gn)(this, w, "f").playUIClick();
      (0, i.gn)(this, v, "m", Q).call(this, "custom");
    });
    m.appendChild((0, i.gn)(this, P, "f"));
    const X = document.createElement("div");
    X.className = "cover";
    (0, i.gn)(this, P, "f").prepend(X);
    (0, i.GG)(this, I, document.createElement("div"), "f");
    (0, i.gn)(this, I, "f").className = "tracks-container open";
    (0, i.gn)(this, _, "f").appendChild((0, i.gn)(this, I, "f"));
    (0, i.GG)(this, L, document.createElement("div"), "f");
    (0, i.gn)(this, L, "f").className = "tracks-container";
    (0, i.gn)(this, _, "f").appendChild((0, i.gn)(this, L, "f"));
    (0, i.GG)(this, U, document.createElement("div"), "f");
    (0, i.gn)(this, U, "f").className = "tracks-container no-group-containers";
    (0, i.gn)(this, _, "f").appendChild((0, i.gn)(this, U, "f"));
    let Z = null;
    const ie = e => {
      Z = e.touches.length == 1 ? {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        time: Date.now()
      } : null;
    };
    const re = e => {
      if (Z != null && e.changedTouches.length == 1) {
        const t = e.changedTouches[0].clientX - Z.x;
        const n = e.changedTouches[0].clientY - Z.y;
        if (Date.now() - Z.time < 500 && Math.abs(t) > 75 && Math.abs(n) < Math.abs(t)) {
          if (t > 0) {
            if ($ == "community") {
              (0, i.gn)(this, v, "m", Q).call(this, "official");
            } else if ($ == "custom") {
              (0, i.gn)(this, v, "m", Q).call(this, "community");
            }
          } else if ($ == "official") {
            (0, i.gn)(this, v, "m", Q).call(this, "community");
          } else if ($ == "community") {
            (0, i.gn)(this, v, "m", Q).call(this, "custom");
          }
        }
      }
      Z = null;
    };
    (0, i.gn)(this, I, "f").addEventListener("touchstart", ie, {
      passive: true
    });
    (0, i.gn)(this, L, "f").addEventListener("touchstart", ie, {
      passive: true
    });
    (0, i.gn)(this, U, "f").addEventListener("touchstart", ie, {
      passive: true
    });
    (0, i.gn)(this, I, "f").addEventListener("touchend", re, {
      passive: true
    });
    (0, i.gn)(this, L, "f").addEventListener("touchend", re, {
      passive: true
    });
    (0, i.gn)(this, U, "f").addEventListener("touchend", re, {
      passive: true
    });
    const ae = document.createElement("button");
    ae.className = "button";
    if (c == "cancel") {
      ae.innerHTML = "<img class=\"button-icon\" src=\"images/erase.svg\"> ";
      ae.append(document.createTextNode((0, i.gn)(this, y, "f").get("Cancel")));
    } else {
      ae.innerHTML = "<img class=\"button-icon\" src=\"images/back.svg\"> ";
      ae.append(document.createTextNode((0, i.gn)(this, y, "f").get("Back")));
    }
    ae.addEventListener("click", () => {
      (0, i.gn)(this, w, "f").playUIClick();
      d();
    });
    g.appendChild(ae);
    const se = document.createElement("div");
    se.className = "search-bar-container";
    g.appendChild(se);
    (0, i.GG)(this, G, document.createElement("input"), "f");
    (0, i.gn)(this, G, "f").type = "text";
    (0, i.gn)(this, G, "f").spellcheck = false;
    (0, i.gn)(this, G, "f").autocomplete = "off";
    (0, i.gn)(this, G, "f").autocapitalize = "off";
    (0, i.gn)(this, G, "f").enterKeyHint = "search";
    (0, i.gn)(this, G, "f").placeholder = (0, i.gn)(this, y, "f").get("Search by track or author...");
    (0, i.gn)(this, G, "f").addEventListener("input", () => {
      (0, i.gn)(this, v, "m", J).call(this);
    });
    se.appendChild((0, i.gn)(this, G, "f"));
    const oe = document.createElement("img");
    oe.src = "images/search.svg";
    se.appendChild(oe);
    const le = document.createElement("button");
    le.className = "button";
    le.innerHTML = "<img class=\"button-icon\" src=\"images/import.svg\"> ";
    le.append(document.createTextNode((0, i.gn)(this, y, "f").get("Import")));
    le.addEventListener("click", () => {
      (0, i.gn)(this, w, "f").playUIClick();
      this.hide();
      (0, i.GG)(this, F, new Y.A("", () => {
        this.show();
        (0, i.gn)(this, F, "f")?.dispose();
        (0, i.GG)(this, F, null, "f");
      }, (e, t) => {
        (0, i.gn)(this, F, "f")?.dispose();
        (0, i.GG)(this, F, null, "f");
        (0, i.gn)(this, v, "m", Q).call(this, "custom");
        if (t || e.length != 1) {
          this.show();
        } else {
          const {
            trackMetadata: t,
            trackData: n,
            trackId: r,
            trackThumbnail: a
          } = e[0];
          (0, i.gn)(this, M, "f").call(this, t, n.environment, () => Promise.resolve(n), "custom", r, a);
        }
      }, t, n, a, o, l), "f");
    });
    g.appendChild(le);
    window.addEventListener("keydown", (0, i.GG)(this, V, e => {
      if ((0, i.gn)(this, O, "f") && e.code == "Escape") {
        d();
        e.preventDefault();
      }
      if (e.code == "ShiftLeft" || e.code == "ShiftRight") {
        (0, i.GG)(this, W, true, "f");
      }
    }, "f"));
    window.addEventListener("keyup", (0, i.GG)(this, H, e => {
      if (e.code == "ShiftLeft" || e.code == "ShiftRight") {
        (0, i.GG)(this, W, false, "f");
      }
    }, "f"));
    (0, i.gn)(this, S, "f").addCustomTracksChangedListener((0, i.GG)(this, j, () => {
      this.refresh();
    }, "f"));
    (0, i.gn)(this, I, "f").addEventListener("scroll", () => {
      ee = (0, i.gn)(this, I, "f").scrollTop;
    }, {
      passive: true
    });
    (0, i.gn)(this, L, "f").addEventListener("scroll", () => {
      te = (0, i.gn)(this, L, "f").scrollTop;
    }, {
      passive: true
    });
    (0, i.gn)(this, U, "f").addEventListener("scroll", () => {
      ne = (0, i.gn)(this, U, "f").scrollTop;
    }, {
      passive: true
    });
    (0, i.gn)(this, x, "f").addRecordChangedCallback((0, i.GG)(this, K, () => {
      this.refresh();
    }, "f"));
  }
  dispose() {
    (0, i.gn)(this, b, "f").removeChild((0, i.gn)(this, _, "f"));
    window.removeEventListener("keydown", (0, i.gn)(this, V, "f"));
    window.removeEventListener("keyup", (0, i.gn)(this, H, "f"));
    (0, i.gn)(this, F, "f")?.dispose();
    (0, i.GG)(this, F, null, "f");
    (0, i.gn)(this, S, "f").removeCustomTracksChangedListener((0, i.gn)(this, j, "f"));
    (0, i.gn)(this, x, "f").removeRecordChangedCallback((0, i.gn)(this, K, "f"));
  }
  hide() {
    (0, i.gn)(this, F, "f")?.dispose();
    (0, i.GG)(this, F, null, "f");
    (0, i.gn)(this, _, "f").classList.add("hidden");
    (0, i.GG)(this, O, false, "f");
  }
  show() {
    (0, i.gn)(this, _, "f").classList.remove("hidden");
    (0, i.GG)(this, O, true, "f");
    this.refresh();
    $ ??= (0, i.gn)(this, E, "f").loadTrackSelectionTab();
    if ($ == "official") {
      (0, i.gn)(this, C, "f").classList.add("selected");
      (0, i.gn)(this, R, "f").classList.remove("selected");
      (0, i.gn)(this, P, "f").classList.remove("selected");
      (0, i.gn)(this, I, "f").classList.add("open");
      (0, i.gn)(this, L, "f").classList.remove("open");
      (0, i.gn)(this, U, "f").classList.remove("open");
      (0, i.gn)(this, I, "f").scrollTop = ee;
    } else if ($ == "community") {
      (0, i.gn)(this, C, "f").classList.remove("selected");
      (0, i.gn)(this, R, "f").classList.add("selected");
      (0, i.gn)(this, P, "f").classList.remove("selected");
      (0, i.gn)(this, I, "f").classList.remove("open");
      (0, i.gn)(this, L, "f").classList.add("open");
      (0, i.gn)(this, U, "f").classList.remove("open");
      (0, i.gn)(this, L, "f").scrollTop = te;
    } else {
      (0, i.gn)(this, C, "f").classList.remove("selected");
      (0, i.gn)(this, R, "f").classList.remove("selected");
      (0, i.gn)(this, P, "f").classList.add("selected");
      (0, i.gn)(this, I, "f").classList.remove("open");
      (0, i.gn)(this, L, "f").classList.remove("open");
      (0, i.gn)(this, U, "f").classList.add("open");
      (0, i.gn)(this, U, "f").scrollTop = ne;
    }
  }
  get isOpen() {
    return (0, i.gn)(this, O, "f") || (0, i.gn)(this, F, "f") != null;
  }
  refresh() {
    (0, i.GG)(this, B, [], "f");
    (0, i.gn)(this, I, "f").innerHTML = "";
    (0, i.gn)(this, L, "f").innerHTML = "";
    (0, i.gn)(this, U, "f").innerHTML = "";
    (0, i.gn)(this, N, "f").clear();
    (0, i.gn)(this, z, "f").clear();
    (0, i.gn)(this, D, "f").clear();
    (0, i.gn)(this, S, "f").forEachOfficialTrack((e, t, n, r, a, s) => {
      (0, i.gn)(this, v, "m", q).call(this, "official", t, n, r, () => a().then(({
        trackData: e
      }) => e), e, s);
    });
    (0, i.gn)(this, S, "f").forEachCommunityTrack((e, t, n, r, a, s) => {
      (0, i.gn)(this, v, "m", q).call(this, "community", t, n, r, () => a().then(({
        trackData: e
      }) => e), e, s);
    });
    if ((0, i.gn)(this, S, "f").isCustomTracksEmpty()) {
      const e = document.createElement("div");
      e.className = "empty";
      const t = document.createElement("div");
      t.className = "title";
      t.textContent = (0, i.gn)(this, y, "f").get("No custom tracks");
      e.appendChild(t);
      const n = document.createElement("div");
      n.className = "description";
      n.textContent = (0, i.gn)(this, y, "f").get("Create a track using the editor or import a track code");
      e.appendChild(n);
      (0, i.gn)(this, U, "f").appendChild(e);
    } else {
      (0, i.gn)(this, S, "f").forEachCustomTrack((e, t, n, r) => {
        (0, i.gn)(this, v, "m", q).call(this, "custom", null, t, n.environment, () => Promise.resolve(n), e, r, () => {
          if ((0, i.gn)(this, W, "f")) {
            (0, i.gn)(this, S, "f").deleteCustomTrack(t.name);
          } else {
            this.hide();
            (0, i.gn)(this, T, "f").showConfirm((0, i.gn)(this, y, "f").get("Are you sure you want to delete \"{0}\"?", [t.name]), (0, i.gn)(this, y, "f").get("Cancel"), (0, i.gn)(this, y, "f").get("Delete"), () => {
              this.show();
            }, () => {
              (0, i.gn)(this, S, "f").deleteCustomTrack(t.name);
              this.show();
            });
          }
        });
      });
    }
    (0, i.gn)(this, v, "m", J).call(this);
  }
};