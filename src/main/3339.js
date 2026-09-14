var i;
var r;
var a;
var s;
var o;
var l;
var c;
var h;
var d = require("./1635.js");
var u = require("./4922.js");
class f {
  constructor(e) {
    r.set(this, undefined);
    a.set(this, undefined);
    s.set(this, []);
    o.set(this, 256);
    l.set(this, new u.Pq0(0, 1, 0));
    (0, d.GG)(this, r, e, "f");
    (0, d.GG)(this, a, new u.ZLX((0, d.gn)(i, i, "f", c), (0, d.gn)(i, i, "f", h), (0, d.gn)(this, o, "f")), "f");
    (0, d.gn)(this, a, "f").frustumCulled = false;
    e.scene.add((0, d.gn)(this, a, "f"));
    this.clear();
  }
  dispose() {
    (0, d.gn)(this, a, "f").dispose();
    (0, d.gn)(this, r, "f").scene.remove((0, d.gn)(this, a, "f"));
  }
  clear() {
    (0, d.gn)(this, s, "f").length = 0;
    (0, d.gn)(this, a, "f").count = 0;
    (0, d.gn)(this, a, "f").instanceMatrix.needsUpdate = true;
  }
  spawn(e, t, n) {
    (0, d.gn)(this, s, "f").push({
      x: e + (Math.random() - 0.5) * 0.25,
      y: t + (Math.random() - 0.5) * 0.25,
      z: n + (Math.random() - 0.5) * 0.25,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      vz: (Math.random() - 0.5) * 0.5,
      rotation: Math.random() * Math.PI * 2,
      lifetime: 0.5
    });
  }
  update(e) {
    for (let t = (0, d.gn)(this, s, "f").length - 1; t >= 0; --t) {
      const n = (0, d.gn)(this, s, "f")[t];
      n.vy += e * 15;
      n.x += n.vx * e;
      n.y += n.vy * e;
      n.z += n.vz * e;
      n.lifetime -= e;
      if (n.lifetime <= 0) {
        (0, d.gn)(this, s, "f").splice(t, 1);
      }
    }
    let t = false;
    if ((0, d.gn)(this, a, "f").count != (0, d.gn)(this, s, "f").length) {
      (0, d.gn)(this, a, "f").count = Math.min((0, d.gn)(this, s, "f").length, (0, d.gn)(this, o, "f"));
      t = true;
    }
    for (let e = 0; e < (0, d.gn)(this, a, "f").count; ++e) {
      const t = (0, d.gn)(this, s, "f")[(0, d.gn)(this, s, "f").length - 1 - e];
      const n = new u.kn4();
      n.lookAt(new u.Pq0(t.x, t.y, t.z), (0, d.gn)(this, r, "f").camera.position, (0, d.gn)(this, l, "f"));
      n.setPosition(t.x, t.y, t.z);
      n.multiply(new u.kn4().makeRotationZ(t.rotation));
      const i = 0.5 + (0.5 - t.lifetime) * 2;
      n.scale(new u.Pq0(i, i, i));
      (0, d.gn)(this, a, "f").setMatrixAt(e, n);
    }
    if (t || (0, d.gn)(this, s, "f").length > 0) {
      (0, d.gn)(this, a, "f").instanceMatrix.needsUpdate = true;
    }
  }
  static initResources(e) {
    const t = "images/smoke.png";
    e.addResource();
    const n = new u.Tap().load(t, () => {
      e.loadedResource();
    }, undefined, () => {
      e.loadedResource();
      throw new Error("Failed to load texture: " + t);
    });
    (0, d.gn)(this, i, "f", h).map = n;
  }
}
i = f;
r = new WeakMap();
a = new WeakMap();
s = new WeakMap();
o = new WeakMap();
l = new WeakMap();
c = {
  value: (() => {
    const e = new u.bdM();
    e.rotateX(Math.PI);
    return e;
  })()
};
h = {
  value: new u.V9B({
    opacity: 0.3,
    depthWrite: false,
    transparent: true
  })
};
export const A = f;