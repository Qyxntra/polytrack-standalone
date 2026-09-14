var i = require(/*webcrack:missing*/"./1635.js");
var s = require(/*webcrack:missing*/"./1754.js");
var a = require(/*webcrack:missing*/"./6146.js");
var r = require(/*webcrack:missing*/"./5220.js");
var o = require(/*webcrack:missing*/"./9117.js");
var d = require(/*webcrack:missing*/"./5072.js");
var l = d;
var h = require(/*webcrack:missing*/"./7825.js");
var g = h;
var f = require(/*webcrack:missing*/"./7659.js");
var c = f;
var m = require(/*webcrack:missing*/"./5056.js");
var u = m;
var p = require(/*webcrack:missing*/"./540.js");
var w = p;
var v = require(/*webcrack:missing*/"./1113.js");
var k = v;
var x = require("./5467.js");
var G = {};
G.styleTagTransform = k;
G.setAttributes = u;
G.insert = c.bind(null, "head");
G.domAPI = g;
G.insertStyleElement = w;
l(x.A, G);
if (x.A && x.A.locals) {
  x.A.locals;
}
var M;
var R;
var C;
var y;
var b;
var W;
var S;
M = new WeakMap();
R = new WeakMap();
C = new WeakMap();
y = new WeakMap();
b = new WeakMap();
W = new WeakMap();
S = new WeakMap();
const E = class {
  constructor(e, t, n, a, r, o) {
    M.set(this, undefined);
    R.set(this, undefined);
    C.set(this, undefined);
    y.set(this, undefined);
    b.set(this, undefined);
    W.set(this, undefined);
    S.set(this, new Map());
    const d = document.getElementById("ui");
    if (d == null) {
      throw new Error("UI element not found");
    }
    (0, i.GG)(this, M, d, "f");
    (0, i.GG)(this, R, document.createElement("div"), "f");
    (0, i.gn)(this, R, "f").className = "verifier-ui";
    (0, i.gn)(this, M, "f").appendChild((0, i.gn)(this, R, "f"));
    (0, i.GG)(this, C, document.createElement("p"), "f");
    (0, i.gn)(this, R, "f").appendChild((0, i.gn)(this, C, "f"));
    const l = document.createElement("p");
    l.textContent = "Number of threads: " + t.toString();
    (0, i.gn)(this, R, "f").appendChild(l);
    const h = document.createElement("input");
    h.type = "range";
    h.min = "0";
    h.max = t.toString();
    h.value = t.toString();
    h.addEventListener("change", () => {
      const e = parseInt(h.value, 10);
      l.textContent = "Number of threads: " + e.toString();
      r(e);
    });
    (0, i.gn)(this, R, "f").appendChild(h);
    const g = document.createElement("p");
    g.textContent = "Max time: " + Math.floor(n / 60 / 1000).toString() + " minutes";
    (0, i.gn)(this, R, "f").appendChild(g);
    const f = document.createElement("input");
    f.type = "range";
    f.min = 60000 .toString();
    f.max = s.A.maxFrames.toString();
    f.value = n.toString();
    f.addEventListener("input", () => {
      const e = parseInt(f.value, 10);
      g.textContent = "Max time: " + Math.floor(e / 60 / 1000).toString() + " minutes";
      o(e);
    });
    (0, i.gn)(this, R, "f").appendChild(f);
    const c = document.createElement("table");
    (0, i.gn)(this, R, "f").appendChild(c);
    (0, i.GG)(this, y, c.createTHead(), "f");
    (0, i.GG)(this, b, c.createTBody(), "f");
    const m = (0, i.gn)(this, y, "f").insertRow();
    for (const e of ["Track", "State", "Verified", "Invalid", "Estimated remaining"]) {
      const t = document.createElement("th");
      t.textContent = e;
      m.appendChild(t);
    }
    const u = document.createElement("button");
    u.className = "button";
    u.textContent = "Stop";
    u.addEventListener("click", () => {
      e.playUIClick();
      a();
    });
    (0, i.gn)(this, R, "f").appendChild(u);
    window.addEventListener("keydown", (0, i.GG)(this, W, e => {
      if (e.code == "Escape") {
        a();
        e.preventDefault();
      }
    }, "f"));
  }
  dispose() {
    (0, i.gn)(this, M, "f").removeChild((0, i.gn)(this, R, "f"));
    window.removeEventListener("keydown", (0, i.gn)(this, W, "f"));
  }
  setText(e) {
    (0, i.gn)(this, C, "f").textContent = e;
  }
  setTracks(e) {
    for (const t of e) {
      let e = (0, i.gn)(this, S, "f").get(t.id);
      if (e == null) {
        e = {
          element: (0, i.gn)(this, b, "f").insertRow(),
          name: t.name,
          exhausted: t.exhausted,
          recordingsVerified: t.recordingsVerified,
          invalidRecordings: t.invalidRecordings,
          estimatedRemaining: t.estimatedRemaining
        };
        (0, i.gn)(this, S, "f").set(t.id, e);
        e.element.insertCell().textContent = t.name;
        e.element.insertCell().textContent = t.exhausted ? "Empty" : "Processing";
        e.element.insertCell().textContent = t.recordingsVerified.toString();
        e.element.insertCell().textContent = t.invalidRecordings.toString();
        const n = e.element.insertCell();
        if (t.estimatedRemaining != null) {
          n.textContent = t.estimatedRemaining.toString();
        } else {
          n.textContent = "?";
        }
      } else {
        if (e.name != t.name) {
          e.element.cells[0].textContent = t.name;
          e.name = t.name;
        }
        if (e.exhausted != t.exhausted) {
          e.element.cells[1].textContent = t.exhausted ? "Empty" : "Processing";
          e.exhausted = t.exhausted;
        }
        if (e.recordingsVerified != t.recordingsVerified) {
          e.element.cells[2].textContent = t.recordingsVerified.toString();
          e.recordingsVerified = t.recordingsVerified;
        }
        if (e.invalidRecordings != t.invalidRecordings) {
          e.element.cells[3].textContent = t.invalidRecordings.toString();
          e.invalidRecordings = t.invalidRecordings;
        }
        if (e.estimatedRemaining != t.estimatedRemaining) {
          if (t.estimatedRemaining != null) {
            e.element.cells[4].textContent = t.estimatedRemaining.toString();
          } else {
            e.element.cells[4].textContent = "?";
          }
          e.estimatedRemaining = t.estimatedRemaining;
        }
      }
    }
  }
};
var T;
var D;
var V;
var I;
var A;
var F;
var B;
var L;
var P;
var N;
var U;
var z;
var Y;
var O;
var H;
var j;
var q;
var J;
var K;
var Q;
var X;
var Z;
var $;
var _;
var ee;
var te;
var ne;
var ie;
var se;
var ae;
var re;
var oe;
var de;
var le;
var he = require(/*webcrack:missing*/"./2522.js");
var ge = require(/*webcrack:missing*/"./8583.js");
class fe {
  constructor(e, t, n, a, o, d, l, h, g) {
    T.add(this);
    V.set(this, undefined);
    I.set(this, undefined);
    A.set(this, undefined);
    F.set(this, undefined);
    B.set(this, undefined);
    L.set(this, undefined);
    P.set(this, undefined);
    N.set(this, []);
    U.set(this, []);
    z.set(this, []);
    Y.set(this, false);
    O.set(this, new Date());
    H.set(this, []);
    j.set(this, true);
    q.set(this, undefined);
    J.set(this, new Date());
    K.set(this, 0);
    Q.set(this, 0);
    X.set(this, 0);
    Z.set(this, 0);
    $.set(this, 100);
    _.set(this, 100);
    ee.set(this, 1000);
    te.set(this, 3600000);
    ne.set(this, s.A.maxFrames);
    ie.set(this, 4);
    se.set(this, undefined);
    (0, i.GG)(this, V, e, "f");
    (0, i.GG)(this, I, t, "f");
    (0, i.GG)(this, A, n, "f");
    (0, i.GG)(this, F, a, "f");
    (0, i.GG)(this, B, l, "f");
    (0, i.GG)(this, L, h, "f");
    if (typeof navigator != "undefined" && "hardwareConcurrency" in navigator && navigator.hardwareConcurrency > 0) {
      (0, i.GG)(this, ie, navigator.hardwareConcurrency, "f");
    }
    (0, i.GG)(this, se, (0, i.gn)(this, ie, "f"), "f");
    t.clear();
    (0, i.GG)(this, P, new E(e, (0, i.gn)(this, ie, "f"), (0, i.gn)(this, ne, "f"), g, e => {
      for ((0, i.GG)(this, se, e, "f"); (0, i.gn)(this, N, "f").length < (0, i.gn)(this, se, "f");) {
        (0, i.gn)(this, N, "f").push({
          simulation: new r.A(false, d, l),
          isBusy: false,
          isDisposed: false
        });
      }
      while ((0, i.gn)(this, N, "f").length > (0, i.gn)(this, se, "f")) {
        const e = (0, i.gn)(this, N, "f").pop();
        if (e != null) {
          e.simulation.dispose();
          e.isDisposed = true;
        }
      }
    }, e => {
      (0, i.GG)(this, ne, e, "f");
      for (const e of (0, i.gn)(this, U, "f")) {
        e.timeout = new Date();
        e.estimatedRemaining = null;
      }
    }), "f");
    for (let e = 0; e < (0, i.gn)(this, se, "f"); e++) {
      (0, i.gn)(this, N, "f").push({
        simulation: new r.A(false, d, (0, i.gn)(this, B, "f")),
        isBusy: false,
        isDisposed: false
      });
    }
    o.forEachTrack((e, t, n, s, a) => {
      (0, i.gn)(this, U, "f").push({
        id: e,
        name: t.name,
        trackData: () => a().then(({
          trackData: e
        }) => e),
        trackCategory: n,
        timeout: new Date(),
        recordingsVerified: 0,
        invalidRecordings: 0,
        estimatedRemaining: null,
        lastEstimatedRemainingTime: null
      });
    });
    (0, i.GG)(this, q, setInterval(() => {
      (0, i.gn)(this, T, "m", oe).call(this);
    }, 10), "f");
    if (window.electron) {
      const e = () => {
        if (window.electron) {
          const e = new Date();
          const t = "--- PolyTrack Verifier ---\n" + (0, i.gn)(this, T, "m", de).call(this, e);
          window.electron.log(t);
        }
      };
      setInterval(e, 10000);
      e();
    }
  }
  dispose() {
    (0, i.gn)(this, P, "f").dispose();
    for (const e of (0, i.gn)(this, N, "f")) {
      e.simulation.dispose();
      e.isDisposed = true;
    }
    (0, i.gn)(this, N, "f").length = 0;
    clearInterval((0, i.gn)(this, q, "f"));
  }
  update(e) {
    if ((0, i.gn)(this, B, "f").hasLoaded()) {
      const e = new Date();
      (0, i.gn)(this, P, "f").setText((0, i.gn)(this, T, "m", de).call(this, e));
      (0, i.gn)(this, P, "f").setTracks((0, i.gn)(this, U, "f").map(({
        id: t,
        name: n,
        timeout: i,
        recordingsVerified: s,
        invalidRecordings: a,
        estimatedRemaining: r
      }) => ({
        id: t,
        name: n,
        exhausted: i > e,
        recordingsVerified: s,
        invalidRecordings: a,
        estimatedRemaining: r
      })));
    }
    (0, i.gn)(this, V, "f").update(e, false, (0, i.gn)(this, I, "f"));
  }
}
D = fe;
V = new WeakMap();
I = new WeakMap();
A = new WeakMap();
F = new WeakMap();
B = new WeakMap();
L = new WeakMap();
P = new WeakMap();
N = new WeakMap();
U = new WeakMap();
z = new WeakMap();
Y = new WeakMap();
O = new WeakMap();
H = new WeakMap();
j = new WeakMap();
q = new WeakMap();
J = new WeakMap();
K = new WeakMap();
Q = new WeakMap();
X = new WeakMap();
Z = new WeakMap();
$ = new WeakMap();
_ = new WeakMap();
ee = new WeakMap();
te = new WeakMap();
ne = new WeakMap();
ie = new WeakMap();
se = new WeakMap();
T = new WeakSet();
ae = function (e) {
  const t = (0, i.gn)(this, U, "f").slice();
  do {
    const n = Math.floor(Math.random() * t.length);
    const i = t.splice(n, 1)[0];
    if (e > i.timeout) {
      return i;
    }
  } while (t.length > 0);
  return null;
};
re = function () {
  const e = new Date();
  if (!(0, i.gn)(this, Y, "f") && (0, i.gn)(this, H, "f").length < (0, i.gn)(this, _, "f") && Math.abs(e.getTime() - (0, i.gn)(this, O, "f").getTime()) >= (0, i.gn)(this, ee, "f")) {
    (0, i.GG)(this, Y, true, "f");
    (0, i.GG)(this, O, e, "f");
    const t = (0, i.gn)(this, T, "m", ae).call(this, e);
    if (t != null || (0, i.gn)(this, z, "f").length > 0 && (0, i.gn)(this, H, "f").length == 0 || (0, i.gn)(this, z, "f").length > (0, i.gn)(this, $, "f")) {
      const n = (0, i.gn)(this, z, "f");
      (0, i.GG)(this, z, [], "f");
      const r = t != null && (t.lastEstimatedRemainingTime == null || Math.abs(e.getTime() - t.lastEstimatedRemainingTime.getTime()) >= (0, i.gn)(this, te, "f"));
      (0, i.gn)(this, A, "f").verifyRecordings((0, i.gn)(this, L, "f"), t?.id ?? null, (0, i.gn)(this, ne, "f"), r, n).then(({
        unverifiedRecordings: n,
        exhaustive: r,
        estimatedRemaining: o
      }) => {
        if (t != null) {
          (0, i.GG)(this, H, (0, i.gn)(this, H, "f").concat(n.map(({
            id: e,
            recording: n,
            frames: i
          }) => ({
            track: t,
            recordingId: e,
            recording: s.A.deserialize(n),
            time: new a.A(i)
          }))), "f");
          if (r) {
            let i;
            switch (t.trackCategory) {
              case "official":
                i = Math.floor(900000 + Math.random() * 15 * 60 * 1000);
                break;
              case "community":
                i = Math.floor(3600000 + Math.random() * 60 * 60 * 1000);
                break;
              case "custom":
                i = Math.floor(43200000 + Math.random() * 12 * 60 * 60 * 1000);
                break;
              default:
                t.trackCategory;
                throw new Error("Unknown track category");
            }
            t.timeout = new Date(e.getTime() + i);
            t.estimatedRemaining = n.length;
            t.lastEstimatedRemainingTime = e;
          } else if (o != null) {
            t.estimatedRemaining = o;
            t.lastEstimatedRemainingTime = e;
          }
        }
      }).catch(e => {
        console.error(e);
        (0, i.gn)(this, A, "f").getUser((0, i.gn)(this, L, "f")).then(e => {
          if (!e?.isVerifier) {
            for (let e = 0; e < he.A.maxNumberOfProfiles; e++) {
              const t = (0, i.gn)(this, F, "f").getUserProfile(e);
              if (t != null && t.isVerifier && t.token == (0, i.gn)(this, L, "f")) {
                (0, i.gn)(this, F, "f").setIsVerifier(false, e);
                break;
              }
            }
            (0, i.GG)(this, j, false, "f");
          }
        }).catch(e => {
          console.warn(e);
        });
      }).finally(() => {
        (0, i.GG)(this, Y, false, "f");
      });
    } else {
      (0, i.GG)(this, Y, false, "f");
    }
  }
};
oe = async function () {
  var e;
  var t;
  var n;
  var s;
  var a;
  var r;
  if ((0, i.gn)(this, B, "f").hasLoaded() && (0, i.gn)(this, j, "f")) {
    (0, i.gn)(this, T, "m", re).call(this);
    for (const d of (0, i.gn)(this, N, "f")) {
      if (!d.isBusy && (0, i.gn)(this, H, "f").length > 0) {
        d.isBusy = true;
        const {
          track: l,
          recordingId: h,
          recording: g,
          time: f
        } = (0, i.gn)(this, H, "f").splice(0, 1)[0];
        if (g == null) {
          (0, i.GG)(this, Q, (e = (0, i.gn)(this, Q, "f"), ++e), "f");
          l.recordingsVerified++;
          (0, i.GG)(this, X, (t = (0, i.gn)(this, X, "f"), ++t), "f");
          l.invalidRecordings++;
          if (l.estimatedRemaining != null) {
            l.estimatedRemaining = Math.max(0, l.estimatedRemaining - 1);
            if (l.estimatedRemaining == 0) {
              l.lastEstimatedRemainingTime = null;
            }
          }
          (0, i.gn)(this, z, "f").push({
            id: h,
            verifiedState: ge.Y.Invalid
          });
          d.isBusy = false;
        } else {
          let e;
          (0, i.GG)(this, K, (n = (0, i.gn)(this, K, "f"), ++n), "f");
          try {
            if (l.trackData instanceof o.A) {
              e = l.trackData;
            } else {
              e = await l.trackData();
              l.trackData = e;
            }
          } catch (t) {
            console.error("Failed to load track data for track \"" + l.name + "\":", t);
            e = null;
          }
          try {
            if (e != null) {
              const t = await d.simulation.validate(e, g, f);
              (0, i.GG)(this, Q, (s = (0, i.gn)(this, Q, "f"), ++s), "f");
              l.recordingsVerified++;
              if (!t) {
                (0, i.GG)(this, X, (a = (0, i.gn)(this, X, "f"), ++a), "f");
                l.invalidRecordings++;
              }
              if (l.estimatedRemaining != null) {
                l.estimatedRemaining = Math.max(0, l.estimatedRemaining - 1);
                if (l.estimatedRemaining == 0) {
                  l.lastEstimatedRemainingTime = null;
                }
              }
              (0, i.GG)(this, Z, (0, i.gn)(this, Z, "f") + f.numberOfFrames, "f");
              (0, i.gn)(this, z, "f").push({
                id: h,
                verifiedState: t ? ge.Y.Verified : ge.Y.Invalid
              });
            }
          } catch (e) {
            if (!d.isDisposed) {
              throw e;
            }
          } finally {
            d.isBusy = false;
            (0, i.GG)(this, K, (r = (0, i.gn)(this, K, "f"), --r), "f");
          }
        }
      }
    }
  }
};
de = function (e) {
  const t = (e.getTime() - (0, i.gn)(this, J, "f").getTime()) / 1000;
  let n = "";
  if ((0, i.gn)(this, j, "f")) {
    n += "Recordings are being verified...\n";
  } else {
    n += "Error: User is no longer a verifier\n";
  }
  n += "\nBacklog: " + (0, i.gn)(this, H, "f").length.toString();
  n += "\nProcessing: " + (0, i.gn)(this, K, "f").toString();
  n += "\nRecordings verified: " + (0, i.gn)(this, Q, "f").toString();
  n += "\nInvalid recordings found: " + (0, i.gn)(this, X, "f").toString();
  n += "\n";
  const s = (0, i.gn)(this, Q, "f") / t;
  n += "\nVerifications per second: " + s.toFixed(2);
  n += "\nSimulated frames per second: " + Math.floor((0, i.gn)(this, Z, "f") / t).toString();
  n += "\n";
  const a = (0, i.gn)(this, U, "f").reduce((e, t) => t.estimatedRemaining != null ? e + t.estimatedRemaining : e, 0);
  n += "\nTotal estimated remaining: " + a.toString();
  n += "\nTotal estimated remaining time: " + (0, i.gn)(D, D, "m", le).call(D, a / s);
  return n;
};
le = function (e) {
  if (e <= 0 || !Number.isFinite(e)) {
    return "0s";
  }
  if (e < 60) {
    return e.toFixed(0) + "s";
  }
  if (e < 3600) {
    const t = e % 60;
    return Math.floor(e / 60).toString() + "m " + t.toFixed(0) + "s";
  }
  if (e < 86400) {
    const t = Math.floor(e / 3600);
    const n = Math.floor(e % 3600 / 60);
    const i = e % 60;
    return t.toString() + "h " + n.toString() + "m " + i.toFixed(0) + "s";
  }
  {
    const t = Math.floor(e / 86400);
    const n = Math.floor(e % 86400 / 3600);
    const i = Math.floor(e % 3600 / 60);
    const s = e % 60;
    return t.toString() + "d " + n.toString() + "h " + i.toString() + "m " + s.toFixed(0) + "s";
  }
};
export default fe;