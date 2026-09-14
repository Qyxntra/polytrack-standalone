var i;
var r;
var a;
var s;
var o;
var l = require("./1635.js");
r = new WeakMap();
a = new WeakMap();
s = new WeakMap();
i = new WeakSet();
o = function (e) {
  (0, l.gn)(this, a, "f").textContent = e;
  if ((0, l.gn)(this, s, "f") != null) {
    clearTimeout((0, l.gn)(this, s, "f"));
  }
  (0, l.GG)(this, s, setTimeout(() => {
    (0, l.gn)(this, a, "f").textContent = (0, l.gn)(this, r, "f").get("Copy");
    (0, l.GG)(this, s, null, "f");
  }, 2000), "f");
};
export const A = class {
  constructor(e, t, n) {
    i.add(this);
    r.set(this, undefined);
    a.set(this, undefined);
    s.set(this, null);
    (0, l.GG)(this, r, t, "f");
    this.element = document.createElement("button");
    this.element.className = "button";
    this.element.innerHTML = "<img class=\"button-icon\" src=\"images/copy.svg\"> ";
    (0, l.GG)(this, a, document.createTextNode(t.get("Copy")), "f");
    this.element.append((0, l.gn)(this, a, "f"));
    this.element.addEventListener("click", () => {
      e.playUIClick();
      const t = n();
      (async () => {
        try {
          await navigator.clipboard.writeText(t);
          (0, l.gn)(this, i, "m", o).call(this, (0, l.gn)(this, r, "f").get("Copied!"));
        } catch (e) {
          console.error(e);
          const n = document.createElement("textarea");
          n.value = t;
          n.style.position = "fixed";
          document.body.appendChild(n);
          try {
            n.select();
            document.execCommand("copy");
            (0, l.gn)(this, i, "m", o).call(this, (0, l.gn)(this, r, "f").get("Copied!"));
          } catch (e) {
            console.error(e);
            (0, l.gn)(this, i, "m", o).call(this, (0, l.gn)(this, r, "f").get("Error!"));
          } finally {
            document.body.removeChild(n);
          }
        }
      })();
    });
  }
};