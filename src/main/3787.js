var i = require("./4922.js");
var r = require("./641.js");
var a = require("./1507.js");
var s = require("./7929.js");
let o = null;
let l = null;
let c = null;
let h = null;
let d = null;
export async function F(e, t, n) {
  while (d != null) {
    await d;
  }
  const u = function (e, t, n) {
    return new Promise(d => {
      const u = setTimeout(() => {
        if (o == null || l == null || c == null || h == null) {
          l = document.createElement("canvas");
          l.width = 200;
          l.height = 200;
          c = new a.A(l, null, false);
          h = new i.qUd(-1, 1, 1, -1, 0.1, 10000);
          c.scene.add(h);
          c.setCamera(h);
          o = new r.A(null, {
            position: new i.Pq0(),
            quaternion: new i.PTz()
          }, null, null, c, null, null, null, null, null, null);
          o.update(0);
        }
        h.position.copy(n?.position ?? new i.Pq0(1000.1, 1000.3, 1000));
        h.lookAt(n?.look ?? new i.Pq0(0.1, 0.3, 0));
        h.zoom = n?.zoom ?? 0.5;
        h.updateProjectionMatrix();
        o.setCarStyle(e);
        c.update(new s.A());
        d(l.toDataURL());
      }, 25);
      t.addCancelCallback(() => {
        clearTimeout(u);
        d("");
      });
    });
  }(e, t, n);
  let f;
  d = u;
  try {
    f = await u;
  } finally {
    d = null;
  }
  return f;
}