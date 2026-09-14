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
var m = require("./7687.js");
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
var T = require("./9117.js");
var E = require("./9643.js");
v = new WeakMap();
b = new WeakMap();
y = new WeakMap();
w = new WeakMap();
x = new WeakMap();
S = new WeakMap();
k = new WeakMap();
export const A = class {
  constructor(e, t, n, r, a, s, o, l) {
    v.set(this, undefined);
    b.set(this, undefined);
    y.set(this, undefined);
    w.set(this, undefined);
    x.set(this, undefined);
    S.set(this, undefined);
    k.set(this, undefined);
    (0, i.GG)(this, v, r, "f");
    const c = document.getElementById("ui");
    if (c == null) {
      throw new Error("UI element not found");
    }
    (0, i.GG)(this, b, c, "f");
    (0, i.GG)(this, y, document.createElement("div"), "f");
    (0, i.gn)(this, y, "f").className = "track-export-ui";
    (0, i.gn)(this, b, "f").appendChild((0, i.gn)(this, y, "f"));
    const h = document.createElement("div");
    h.className = "background";
    (0, i.gn)(this, y, "f").appendChild(h);
    const d = document.createElement("div");
    d.className = "box";
    (0, i.gn)(this, y, "f").appendChild(d);
    const u = document.createElement("div");
    u.className = "bar";
    d.appendChild(u);
    const f = document.createElement("button");
    f.className = "button";
    f.innerHTML = "<img class=\"button-icon\" src=\"images/back.svg\"> ";
    f.append(document.createTextNode(r.get("Back")));
    f.addEventListener("click", () => {
      a.playUIClick();
      t();
    });
    u.appendChild(f);
    if (n == null) {
      (0, i.GG)(this, x, new E.A(a, r, () => (0, i.gn)(this, w, "f").value), "f");
      (0, i.gn)(this, x, "f").element.classList.add("right");
      u.appendChild((0, i.gn)(this, x, "f").element);
      (0, i.GG)(this, S, null, "f");
    } else {
      (0, i.GG)(this, x, null, "f");
      (0, i.GG)(this, S, document.createElement("button"), "f");
      (0, i.gn)(this, S, "f").className = "button right";
      (0, i.gn)(this, S, "f").innerHTML = "<img class=\"button-icon\" src=\"images/import.svg\"> ";
      (0, i.gn)(this, S, "f").append(document.createTextNode(r.get("Import")));
      (0, i.gn)(this, S, "f").addEventListener("click", () => {
        a.playUIClick();
        const e = (0, i.gn)(this, w, "f").value.split(/\s+/).map(e => e.trim()).filter(e => e.length > 0);
        const t = e.length > 1;
        const c = e => {
          (0, i.gn)(this, y, "f").classList.add("hidden");
          o.show(e, r.get("Ok"), () => {
            (0, i.gn)(this, y, "f").classList.remove("hidden");
          });
        };
        const h = t => {
          if (e.length == 1) {
            c(r.get("Failed to save track"));
          } else {
            c(r.get("Failed to save track {0}", [(t + 1).toString()]));
          }
        };
        (async () => {
          const i = [];
          for (let t = 0; t < e.length; t++) {
            await new Promise(n => {
              const a = e[t];
              const l = T.A.fromExportString(a);
              if (l == null) {
                d = t;
                if (e.length == 1) {
                  c(r.get("Invalid track code"));
                } else {
                  c(r.get("Invalid track code for track {0}", [(d + 1).toString()]));
                }
                n();
              } else {
                const {
                  trackMetadata: e,
                  trackData: a
                } = l;
                const c = a.getId();
                const d = a.createThumbnail();
                if (s.checkCustomTrackNameExists(e.name)) {
                  o.showConfirm(r.get("The track \"{0}\" already exists. Do you wish to overwrite it?", [e.name]), r.get("Cancel"), r.get("Overwrite"), () => {
                    n();
                  }, () => {
                    if (s.saveCustomTrack(e, a)) {
                      i.push({
                        trackMetadata: e,
                        trackData: a,
                        trackId: c,
                        trackThumbnail: d
                      });
                    } else {
                      h(t);
                    }
                    n();
                  });
                } else {
                  if (s.saveCustomTrack(e, a)) {
                    i.push({
                      trackMetadata: e,
                      trackData: a,
                      trackId: c,
                      trackThumbnail: d
                    });
                  } else {
                    h(t);
                  }
                  n();
                }
              }
              var d;
            });
          }
          if (i.length > 0) {
            l.tryActivatePersistentStorage();
            n(i, t);
          }
        })();
      });
      u.appendChild((0, i.gn)(this, S, "f"));
    }
    (0, i.GG)(this, w, document.createElement("textarea"), "f");
    (0, i.gn)(this, w, "f").spellcheck = false;
    d.appendChild((0, i.gn)(this, w, "f"));
    if (n != null) {
      (0, i.gn)(this, w, "f").placeholder = (0, i.gn)(this, v, "f").get("Paste track data here...");
    }
    (0, i.gn)(this, w, "f").value = e;
    (0, i.gn)(this, w, "f").readOnly = n == null;
    window.addEventListener("keydown", (0, i.GG)(this, k, e => {
      if (e.code == "Escape" && !o.isOpen) {
        t();
        e.preventDefault();
      }
    }, "f"));
  }
  dispose() {
    (0, i.gn)(this, b, "f").removeChild((0, i.gn)(this, y, "f"));
    window.removeEventListener("keydown", (0, i.gn)(this, k, "f"));
  }
};