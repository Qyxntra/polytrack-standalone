var a = require(/*webcrack:missing*/"./1635.js");
var i = require(/*webcrack:missing*/"./1312.js");
var d = require(/*webcrack:missing*/"./5072.js");
var o = d;
var l = require(/*webcrack:missing*/"./7825.js");
var r = l;
var c = require(/*webcrack:missing*/"./7659.js");
var s = c;
var p = require(/*webcrack:missing*/"./5056.js");
var u = p;
var m = require(/*webcrack:missing*/"./540.js");
var h = m;
var f = require(/*webcrack:missing*/"./1113.js");
var b = f;
var v = require("./5768.js");
var C = {};
C.styleTagTransform = b;
C.setAttributes = u;
C.insert = s.bind(null, "head");
C.domAPI = r;
C.insertStyleElement = h;
o(v.A, C);
if (v.A && v.A.locals) {
  v.A.locals;
}
var x;
var g;
var k;
var w = require(/*webcrack:missing*/"./8583.js");
x = new WeakMap();
g = new WeakMap();
k = new WeakMap();
const E = class {
  constructor(t, e, n, d, o, l) {
    x.set(this, undefined);
    g.set(this, undefined);
    k.set(this, undefined);
    const r = (0, i.sha256)(o);
    const c = document.getElementById("ui");
    if (c == null) {
      throw new Error("UI element not found");
    }
    (0, a.GG)(this, x, c, "f");
    (0, a.GG)(this, g, document.createElement("div"), "f");
    (0, a.gn)(this, g, "f").className = "admin-ui";
    (0, a.gn)(this, x, "f").appendChild((0, a.gn)(this, g, "f"));
    const s = document.createElement("div");
    s.className = "tracks-list";
    (0, a.gn)(this, g, "f").appendChild(s);
    let p = null;
    let u = 1;
    async function m(n, a) {
      p = n;
      u = a;
      E.value = a.toString();
      b.innerHTML = "";
      const i = document.createElement("tr");
      b.appendChild(i);
      const l = document.createElement("th");
      l.textContent = "Name";
      i.appendChild(l);
      const c = document.createElement("th");
      c.textContent = "Frames";
      i.appendChild(c);
      const s = document.createElement("th");
      s.textContent = "Verified State";
      i.appendChild(s);
      const h = document.createElement("th");
      h.textContent = "Action";
      i.appendChild(h);
      let f = [];
      if (n != null) {
        try {
          f = (await d.getLeaderboard(r, n, (a - 1) * 20, 20, false)).entries;
        } catch {}
      }
      for (let i = 0; i < 20; i++) {
        const l = document.createElement("tr");
        b.appendChild(l);
        if (f.length > i) {
          const r = f[i];
          const c = document.createElement("td");
          c.textContent = r.nickname;
          l.appendChild(c);
          const s = document.createElement("td");
          s.textContent = r.frames.numberOfFrames.toString();
          l.appendChild(s);
          const p = document.createElement("td");
          switch (r.verifiedState) {
            case w.Y.Pending:
              p.textContent = "Pending";
              break;
            case w.Y.Verified:
              p.textContent = "Verified";
              break;
            case w.Y.Invalid:
              p.textContent = "Invalid";
              break;
            case w.Y.InvalidDuplicate:
              p.textContent = "Invalid Duplicate";
              break;
            case w.Y.InvalidManual:
              p.textContent = "Invalid Manual";
              break;
            default:
              p.textContent = "Unknown";
          }
          l.appendChild(p);
          const u = document.createElement("td");
          const h = document.createElement("button");
          h.className = "button";
          h.textContent = "Invalidate";
          h.addEventListener("click", () => {
            t.playUIClick();
            e.showConfirm("Are you sure you want to invalidate \"" + r.nickname + "\"'s leaderboard entry?", "Cancel", "Invalidate", null, () => {
              d.verifyRecordings(o, null, 1, false, [{
                id: r.id,
                verifiedState: w.Y.InvalidManual
              }]).then(() => {
                m(n, a);
              }).catch(() => {
                e.show("Failed to invalidate entry", "Ok", null);
              });
            });
          });
          u.appendChild(h);
          l.appendChild(u);
        } else {
          l.appendChild(document.createElement("td"));
          l.appendChild(document.createElement("td"));
          l.appendChild(document.createElement("td"));
          l.appendChild(document.createElement("td"));
        }
      }
    }
    const h = [];
    n.forEachTrack((e, n) => {
      const a = document.createElement("button");
      a.className = "button";
      a.textContent = n.name;
      a.addEventListener("click", () => {
        t.playUIClick();
        for (const t of h) {
          t.classList.remove("selected");
        }
        a.classList.add("selected");
        m(e, 1);
      });
      s.appendChild(a);
      h.push(a);
    });
    const f = document.createElement("div");
    f.className = "leaderboard-container";
    (0, a.gn)(this, g, "f").appendChild(f);
    const b = document.createElement("table");
    f.appendChild(b);
    const v = document.createElement("div");
    v.className = "navigation";
    f.appendChild(v);
    const C = document.createElement("button");
    C.className = "button";
    C.textContent = "<";
    C.addEventListener("click", () => {
      t.playUIClick();
      if (p != null) {
        m(p, Math.max(1, u - 1));
      }
    });
    v.appendChild(C);
    const E = document.createElement("input");
    E.type = "text";
    E.min = "1";
    E.value = "1";
    E.addEventListener("change", () => {
      const t = parseInt(E.value, 10);
      if (p != null && Number.isSafeInteger(t) && t >= 1) {
        m(p, t);
      }
    });
    v.appendChild(E);
    const y = document.createElement("button");
    y.className = "button";
    y.textContent = ">";
    y.addEventListener("click", () => {
      t.playUIClick();
      if (p != null) {
        m(p, u + 1);
      }
    });
    v.appendChild(y);
    m(null, 1);
    const I = document.createElement("button");
    I.className = "button";
    I.textContent = "Quit";
    I.addEventListener("click", () => {
      t.playUIClick();
      l();
    });
    (0, a.gn)(this, g, "f").appendChild(I);
    window.addEventListener("keydown", (0, a.GG)(this, k, t => {
      if (t.code == "Escape") {
        l();
        t.preventDefault();
      }
    }, "f"));
  }
  dispose() {
    (0, a.gn)(this, x, "f").removeChild((0, a.gn)(this, g, "f"));
    window.removeEventListener("keydown", (0, a.gn)(this, k, "f"));
  }
};
var y;
var I;
var G;
y = new WeakMap();
I = new WeakMap();
G = new WeakMap();
export default (class {
  constructor(t, e, n, i, d, o, l) {
    y.set(this, undefined);
    I.set(this, undefined);
    G.set(this, undefined);
    (0, a.GG)(this, y, t, "f");
    (0, a.GG)(this, I, e, "f");
    (0, a.GG)(this, G, new E(t, n, i, d, o, l), "f");
  }
  dispose() {
    (0, a.gn)(this, G, "f").dispose();
  }
  update(t) {
    (0, a.gn)(this, y, "f").update(t, false, (0, a.gn)(this, I, "f"));
  }
});