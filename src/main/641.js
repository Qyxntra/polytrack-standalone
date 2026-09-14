var i;
var r;
var a;
var s;
var o;
var l = require("./1635.js");
var c = require("./4922.js");
var h = require("./1566.js");
var d = require("./1507.js");
class u {
  constructor() {
    i.add(this);
    s.set(this, new c.ubm((0, l.gn)(r, r, "f", a), 1, 0.5, d.A.maxViewDistance));
  }
  reset(e, t, n) {
    this.update(e, t, 0);
    (0, l.gn)(this, s, "f").fov = (0, l.gn)(this, i, "m", o).call(this, n ?? 0);
    (0, l.gn)(this, s, "f").updateProjectionMatrix();
  }
  update(e, t, n) {
    (0, l.gn)(this, s, "f").fov = (0, l.gn)(this, i, "m", o).call(this, n);
    (0, l.gn)(this, s, "f").updateProjectionMatrix();
    const r = new c.Pq0(0, 1.1 + 0.46 / (0, l.gn)(this, s, "f").zoom - 0.46, 0.4);
    (0, l.gn)(this, s, "f").position.addVectors(e, r.applyQuaternion(t));
    (0, l.gn)(this, s, "f").quaternion.copy(t);
    (0, l.gn)(this, s, "f").quaternion.multiply(new c.PTz().setFromEuler(new c.O9p(0, Math.PI, 0)));
    (0, l.gn)(this, s, "f").updateMatrix();
  }
  get camera() {
    return (0, l.gn)(this, s, "f");
  }
}
r = u;
s = new WeakMap();
i = new WeakSet();
o = function (e) {
  return (0, l.gn)(r, r, "f", a) + (80 - (0, l.gn)(r, r, "f", a)) * (1 - Math.exp(-Math.abs(e) / 200));
};
a = {
  value: 70
};
const f = u;
var p;
var g;
var m;
var _A;
var v;
var b;
var y;
var w = require("./8724.js");
class x {
  constructor() {
    p.add(this);
    _A.set(this, new c.ubm((0, l.gn)(g, g, "f", m), 1, 0.5, d.A.maxViewDistance));
    v.set(this, new c.Pq0());
    b.set(this, new c.Pq0(0, 1, 0));
  }
  reset(e, t, n) {
    (0, l.GG)(this, v, new c.Pq0(0.00001, 0, -1), "f");
    (0, l.gn)(this, v, "f").applyQuaternion(t);
    (0, l.gn)(this, v, "f").add(e);
    (0, l.GG)(this, b, new c.Pq0(0, 1, 0), "f");
    (0, l.gn)(this, b, "f").applyQuaternion(t);
    this.update(0, e, t, 0);
    (0, l.gn)(this, _A, "f").fov = (0, l.gn)(this, p, "m", y).call(this, n ?? 0);
    (0, l.gn)(this, _A, "f").updateProjectionMatrix();
  }
  update(e, t, n, i) {
    (0, l.gn)(this, _A, "f").fov = (0, l.gn)(this, p, "m", y).call(this, i);
    (0, l.gn)(this, _A, "f").updateProjectionMatrix();
    const r = new c.Pq0(0, 1, 0);
    r.applyQuaternion(n);
    const a = Math.min(1, e * 5);
    (0, l.gn)(this, b, "f").set(a * r.x + (1 - a) * (0, l.gn)(this, b, "f").x, a * r.y + (1 - a) * (0, l.gn)(this, b, "f").y, a * r.z + (1 - a) * (0, l.gn)(this, b, "f").z);
    const s = new c.Pq0().subVectors(t, (0, l.gn)(this, v, "f"));
    s.normalize();
    const o = 5.5;
    const h = 1.8 / Math.min((0, l.gn)(this, _A, "f").zoom, 2);
    (0, l.gn)(this, _A, "f").position.x = t.x - s.x * o + (0, l.gn)(this, b, "f").x * 2;
    (0, l.gn)(this, _A, "f").position.y = Math.max(0.25, t.y - s.y * o + (0, l.gn)(this, b, "f").y * 2);
    (0, l.gn)(this, _A, "f").position.z = t.z - s.z * o + (0, l.gn)(this, b, "f").z * 2;
    (0, l.gn)(this, _A, "f").lookAt(t.x + (0, l.gn)(this, b, "f").x * h, t.y + (0, l.gn)(this, b, "f").y * h, t.z + (0, l.gn)(this, b, "f").z * h);
    (0, l.gn)(this, _A, "f").updateMatrix();
    (0, l.gn)(this, v, "f").set(t.x - s.x * o, t.y - s.y * o, t.z - s.z * o);
  }
  get camera() {
    return (0, l.gn)(this, _A, "f");
  }
}
g = x;
_A = new WeakMap();
v = new WeakMap();
b = new WeakMap();
p = new WeakSet();
y = function (e) {
  return (0, l.gn)(g, g, "f", m) + (100 - (0, l.gn)(g, g, "f", m)) * (1 - Math.exp(-Math.abs(e) / 200));
};
m = {
  value: 70
};
const S = x;
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
var U = require("./3339.js");
class N {
  constructor(e) {
    T.set(this, undefined);
    E.set(this, undefined);
    M.set(this, undefined);
    _.set(this, undefined);
    C.set(this, 1000);
    R.set(this, 0);
    P.set(this, null);
    I.set(this, null);
    (0, l.GG)(this, T, e, "f");
    const t = new c.LoY();
    (0, l.GG)(this, M, new Float32Array((0, l.gn)(this, C, "f") * 6 * 3), "f");
    (0, l.GG)(this, _, new c.THS((0, l.gn)(this, M, "f"), 3), "f");
    t.setAttribute("position", (0, l.gn)(this, _, "f"));
    (0, l.GG)(this, E, new c.eaF(t, (0, l.gn)(k, k, "f", L)), "f");
    (0, l.gn)(this, E, "f").frustumCulled = false;
    (0, l.gn)(this, T, "f").scene.add((0, l.gn)(this, E, "f"));
  }
  dispose() {
    (0, l.gn)(this, E, "f").geometry.dispose();
    (0, l.gn)(this, T, "f").scene.remove((0, l.gn)(this, E, "f"));
  }
  clear() {
    for (let e = 0; e < (0, l.gn)(this, M, "f").length; ++e) {
      (0, l.gn)(this, M, "f")[e] = 0;
    }
    (0, l.gn)(this, _, "f").needsUpdate = true;
    (0, l.GG)(this, R, 0, "f");
    this.break();
  }
  break() {
    (0, l.GG)(this, P, null, "f");
    (0, l.GG)(this, I, null, "f");
  }
  spawn(e, t, n, i) {
    var r;
    var a;
    const s = (0, l.gn)(this, P, "f");
    const o = (0, l.gn)(this, I, "f");
    const h = new c.Pq0().addVectors(e, new c.Pq0(0.172, -0.3, 0).applyQuaternion(t));
    const d = new c.Pq0().addVectors(e, new c.Pq0(-0.172, -0.3, 0).applyQuaternion(t));
    const u = new c.Pq0().copy(h);
    const f = new c.Pq0().copy(d);
    const p = new c.Pq0().subVectors(h, n).dot(i);
    u.addScaledVector(i, -p);
    const g = new c.Pq0().subVectors(d, n).dot(i);
    f.addScaledVector(i, -g);
    if (s != null && o != null) {
      (0, l.GG)(this, R, (a = (0, l.gn)(this, R, "f"), r = a++, a), "f");
      const e = r;
      (0, l.gn)(this, M, "f")[e * 6 * 3 + 0] = u.x;
      (0, l.gn)(this, M, "f")[e * 6 * 3 + 1] = u.y;
      (0, l.gn)(this, M, "f")[e * 6 * 3 + 2] = u.z;
      (0, l.gn)(this, M, "f")[e * 6 * 3 + 3] = s.x;
      (0, l.gn)(this, M, "f")[e * 6 * 3 + 4] = s.y;
      (0, l.gn)(this, M, "f")[e * 6 * 3 + 5] = s.z;
      (0, l.gn)(this, M, "f")[e * 6 * 3 + 6] = f.x;
      (0, l.gn)(this, M, "f")[e * 6 * 3 + 7] = f.y;
      (0, l.gn)(this, M, "f")[e * 6 * 3 + 8] = f.z;
      (0, l.gn)(this, M, "f")[e * 6 * 3 + 9] = f.x;
      (0, l.gn)(this, M, "f")[e * 6 * 3 + 10] = f.y;
      (0, l.gn)(this, M, "f")[e * 6 * 3 + 11] = f.z;
      (0, l.gn)(this, M, "f")[e * 6 * 3 + 12] = s.x;
      (0, l.gn)(this, M, "f")[e * 6 * 3 + 13] = s.y;
      (0, l.gn)(this, M, "f")[e * 6 * 3 + 14] = s.z;
      (0, l.gn)(this, M, "f")[e * 6 * 3 + 15] = o.x;
      (0, l.gn)(this, M, "f")[e * 6 * 3 + 16] = o.y;
      (0, l.gn)(this, M, "f")[e * 6 * 3 + 17] = o.z;
      (0, l.gn)(this, _, "f").needsUpdate = true;
      if ((0, l.gn)(this, R, "f") >= (0, l.gn)(this, C, "f") - 1) {
        (0, l.GG)(this, R, 0, "f");
      }
    }
    (0, l.GG)(this, P, u, "f");
    (0, l.GG)(this, I, f, "f");
  }
}
k = N;
T = new WeakMap();
E = new WeakMap();
M = new WeakMap();
_ = new WeakMap();
C = new WeakMap();
R = new WeakMap();
P = new WeakMap();
I = new WeakMap();
L = {
  value: new c.V9B({
    color: 1118481,
    side: c.$EB,
    polygonOffset: true,
    polygonOffsetFactor: -1,
    polygonOffsetUnits: 0
  })
};
const z = N;
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
var X;
var Y;
var Z;
var $;
var ee;
var te;
var ne;
var ie;
var re;
var ae;
var se;
var oe;
var le;
var ce;
var he;
var de;
var ue;
var fe;
var pe;
var ge;
var me;
var Ae;
var ve;
var be;
var ye;
var we;
var xe;
var Se;
var ke;
var Te;
var Ee;
var Me;
var _e;
var Ce;
var Re;
var Pe;
var Ie;
var Le;
var Ue;
var Ne;
var ze;
var De;
var Be;
var Ge;
var Fe;
var Oe;
var We;
var Ve;
var He;
var je;
var Ke;
var qe;
var Qe;
var Je;
var Xe;
var Ye;
var Ze;
var $e;
var et;
var tt;
var nt;
var it;
var rt = require("./5287.js");
var at = require("./6146.js");
var st = require("./1754.js");
class ot {
  constructor(e, t, n, i, r, a, s, o, h, d, u) {
    D.add(this);
    G.set(this, undefined);
    F.set(this, null);
    O.set(this, 1);
    W.set(this, null);
    V.set(this, []);
    H.set(this, null);
    j.set(this, null);
    K.set(this, null);
    q.set(this, []);
    this.notificationAudioEnabled = false;
    Q.set(this, undefined);
    J.set(this, undefined);
    X.set(this, undefined);
    Y.set(this, undefined);
    Z.set(this, false);
    $.set(this, false);
    ee.set(this, null);
    te.set(this, undefined);
    ne.set(this, undefined);
    ie.set(this, undefined);
    re.set(this, undefined);
    ce.set(this, []);
    he.set(this, []);
    de.set(this, []);
    ue.set(this, [0, 0, 0, 0]);
    fe.set(this, [0, 0, 0, 0]);
    pe.set(this, [0, 0, 0, 0]);
    ge.set(this, undefined);
    me.set(this, undefined);
    Ae.set(this, null);
    ve.set(this, null);
    be.set(this, undefined);
    ye.set(this, undefined);
    we.set(this, undefined);
    xe.set(this, undefined);
    Se.set(this, null);
    ke.set(this, undefined);
    Te.set(this, undefined);
    Ee.set(this, undefined);
    Me.set(this, undefined);
    _e.set(this, undefined);
    Ce.set(this, undefined);
    Re.set(this, undefined);
    Pe.set(this, []);
    Ie.set(this, null);
    Le.set(this, [0.075, 0.075, 0.075, 0.075]);
    Ue.set(this, null);
    Ne.set(this, undefined);
    ze.set(this, null);
    De.set(this, undefined);
    Be.set(this, false);
    (0, l.GG)(this, G, a, "f");
    (0, l.GG)(this, ge, r, "f");
    (0, l.GG)(this, _e, s, "f");
    (0, l.GG)(this, Ce, o, "f");
    (0, l.GG)(this, Re, d, "f");
    (0, l.GG)(this, X, e, "f");
    (0, l.GG)(this, Y, u, "f");
    if (d?.getSettingBoolean(rt.A.ParticlesEnabled)) {
      (0, l.GG)(this, Ne, new U.A(r), "f");
    } else {
      (0, l.GG)(this, Ne, null, "f");
    }
    if ((0, l.gn)(this, _e, "f") != null && (0, l.gn)(this, Ce, "f") != null) {
      (0, l.GG)(this, Pe, [new z((0, l.gn)(this, ge, "f")), new z((0, l.gn)(this, ge, "f")), new z((0, l.gn)(this, ge, "f")), new z((0, l.gn)(this, ge, "f"))], "f");
    }
    (0, l.GG)(this, Q, new S(), "f");
    (0, l.gn)(this, Q, "f").reset(t.position, t.quaternion);
    r.scene.add((0, l.gn)(this, Q, "f").camera);
    (0, l.GG)(this, J, new f(), "f");
    (0, l.gn)(this, J, "f").reset(t.position, t.quaternion);
    r.scene.add((0, l.gn)(this, J, "f").camera);
    if (B.models == null) {
      throw new Error("Car model isn't loaded yet");
    }
    if ((0, l.gn)(this, X, "f") != null && (0, l.gn)(this, _e, "f") != null && (0, l.gn)(this, Ce, "f") != null && h != null) {
      const e = (0, l.gn)(this, X, "f").createCar(t, (0, l.gn)(this, _e, "f").getMountainVertices(), (0, l.gn)(this, _e, "f").getMountainOffset(), h, n, e => {
        this.setCarState(e, false);
      });
      (0, l.GG)(this, ee, e.id, "f");
      (0, l.GG)(this, te, e.carState, "f");
    } else {
      (0, l.GG)(this, te, {
        frames: 0,
        speedKmh: 0,
        hasStarted: false,
        finishFrames: null,
        nextCheckpointIndex: 0,
        hasCheckpointToRespawnAt: false,
        position: {
          x: t.position.x,
          y: t.position.y,
          z: t.position.z
        },
        quaternion: {
          x: t.quaternion.x,
          y: t.quaternion.y,
          z: t.quaternion.z,
          w: t.quaternion.w
        },
        collisionImpulses: [],
        wheelContact: [null, null, null, null],
        wheelSuspensionLength: [B.suspensionResetLengthFront, B.suspensionResetLengthFront, B.suspensionResetLengthRear, B.suspensionResetLengthRear],
        wheelSuspensionVelocity: [0, 0, 0, 0],
        wheelDeltaRotation: [0, 0, 0, 0],
        wheelSkidInfo: [0, 0, 0, 0],
        steering: 0,
        brakeLightEnabled: false,
        controls: {
          up: false,
          right: false,
          down: false,
          left: false,
          reset: false
        }
      }, "f");
    }
    (0, l.gn)(this, Y, "f")?.call(this, (0, l.gn)(this, te, "f"));
    (0, l.GG)(this, ne, i, "f");
    if (n == null) {
      (0, l.GG)(this, ie, (0, l.gn)(this, ne, "f") != null, "f");
      (0, l.GG)(this, re, new st.A(), "f");
    } else {
      if ((0, l.gn)(this, ne, "f") != null) {
        throw new Error("Can't control car when recording is set");
      }
      (0, l.GG)(this, ie, false, "f");
      (0, l.GG)(this, re, n, "f");
    }
    (0, l.GG)(this, Me, w.A.default(), "f");
    (0, l.GG)(this, ke, (0, l.gn)(B, B, "m", We).call(B, r, (0, l.gn)(this, Me, "f").pattern), "f");
    (0, l.GG)(this, Te, {
      value: (0, l.gn)(this, ke, "f")
    }, "f");
    (0, l.GG)(this, Ee, {
      value: new c.Pq0(0, 0, 0)
    }, "f");
    (0, l.GG)(this, be, B.models.chassis.clone(), "f");
    (0, l.gn)(this, D, "m", Oe).call(this, (0, l.gn)(this, be, "f"));
    (0, l.GG)(this, ye, B.models.suspension.clone(), "f");
    (0, l.gn)(this, D, "m", Oe).call(this, (0, l.gn)(this, ye, "f"));
    (0, l.GG)(this, we, (0, l.gn)(B, B, "m", He).call(B, (0, l.gn)(this, Me, "f").exhaust), "f");
    (0, l.gn)(this, D, "m", Oe).call(this, (0, l.gn)(this, we, "f"));
    (0, l.GG)(this, xe, [0, 1, 2, 3].map(e => {
      const t = (0, l.gn)(B, B, "m", Ve).call(B, (0, l.gn)(this, Me, "f").rims);
      (0, l.gn)(this, D, "m", Oe).call(this, t);
      if (e == 1 || e == 3) {
        t.scale.x = -1;
      }
      return t;
    }), "f");
    (0, l.GG)(this, me, new c.YJl(), "f");
    (0, l.gn)(this, me, "f").add((0, l.gn)(this, be, "f"));
    (0, l.gn)(this, me, "f").add((0, l.gn)(this, ye, "f"));
    (0, l.gn)(this, be, "f").add((0, l.gn)(this, we, "f"));
    for (const e of (0, l.gn)(this, xe, "f")) {
      (0, l.gn)(this, me, "f").add(e);
    }
    (0, l.gn)(this, ge, "f").scene.add((0, l.gn)(this, me, "f"));
    if ((0, l.gn)(this, ne, "f") != null && (0, l.gn)(this, ee, "f") != null) {
      const e = (0, l.gn)(this, ee, "f");
      (0, l.gn)(this, X, "f")?.controlCar(e, (0, l.gn)(this, ne, "f").up, (0, l.gn)(this, ne, "f").right, (0, l.gn)(this, ne, "f").down, (0, l.gn)(this, ne, "f").left, (0, l.gn)(this, ne, "f").reset);
      (0, l.gn)(this, ne, "f").addChangeCallback((0, l.GG)(this, ze, t => {
        if (!(0, l.gn)(this, $, "f")) {
          (0, l.gn)(this, X, "f")?.controlCar(e, t.up, t.right, t.down, t.left, t.reset);
        }
      }, "f"));
    }
    r.addContextRestoredEventListener((0, l.GG)(this, De, () => {
      (0, l.gn)(this, ke, "f").dispose();
      (0, l.GG)(this, ke, (0, l.gn)(B, B, "m", We).call(B, r, (0, l.gn)(this, Me, "f").pattern), "f");
      (0, l.gn)(this, Te, "f").value = (0, l.gn)(this, ke, "f");
      (0, l.gn)(this, D, "m", Fe).call(this);
    }, "f"));
  }
  dispose() {
    (0, l.GG)(this, Be, true, "f");
    (0, l.gn)(this, D, "m", Ge).call(this);
    (0, l.gn)(this, ge, "f").scene.remove((0, l.gn)(this, Q, "f").camera);
    (0, l.gn)(this, ge, "f").scene.remove((0, l.gn)(this, J, "f").camera);
    (0, l.gn)(this, Ne, "f")?.dispose();
    for (const e of (0, l.gn)(this, Pe, "f")) {
      e.dispose();
    }
    (0, l.gn)(this, Pe, "f").length = 0;
    if ((0, l.gn)(this, ve, "f") != null) {
      (0, l.gn)(this, ve, "f").geometry.dispose();
      (0, l.gn)(this, ve, "f").material.map?.dispose();
      (0, l.gn)(this, ve, "f").material.dispose();
      (0, l.gn)(this, ge, "f").scene.remove((0, l.gn)(this, ve, "f"));
      (0, l.GG)(this, ve, null, "f");
    }
    (0, l.gn)(this, ge, "f").scene.remove((0, l.gn)(this, me, "f"));
    (0, l.gn)(this, ke, "f").dispose();
    (0, l.gn)(this, me, "f").traverse(e => {
      if (e instanceof c.eaF) {
        (0, l.gn)(this, ge, "f").removeMaterial(e.material);
      }
    });
    if ((0, l.gn)(this, ee, "f") != null) {
      (0, l.gn)(this, X, "f")?.deleteCar((0, l.gn)(this, ee, "f"));
    }
    if ((0, l.gn)(this, ze, "f") != null) {
      (0, l.gn)(this, ne, "f")?.removeChangeCallback((0, l.gn)(this, ze, "f"));
    }
    (0, l.gn)(this, ge, "f").removeContextRestoredEventListener((0, l.gn)(this, De, "f"));
  }
  addResetCallback(e) {
    (0, l.gn)(this, ce, "f").push(e);
  }
  addCheckpointCallback(e) {
    (0, l.gn)(this, he, "f").push(e);
  }
  addFinishCallback(e) {
    (0, l.gn)(this, de, "f").push(e);
  }
  getChassisMatrix() {
    return (0, l.gn)(this, be, "f").matrix;
  }
  getSpeedKmh() {
    return (0, l.gn)(this, te, "f").speedKmh;
  }
  start() {
    if ((0, l.gn)(this, ee, "f") != null) {
      (0, l.gn)(this, X, "f")?.startCar((0, l.gn)(this, ee, "f"), null);
    }
  }
  hasStarted() {
    return (0, l.gn)(this, te, "f").hasStarted;
  }
  hasFinished() {
    return (0, l.gn)(this, te, "f").finishFrames != null;
  }
  getFinishTime() {
    if ((0, l.gn)(this, te, "f").finishFrames == null) {
      return null;
    } else {
      return new at.A((0, l.gn)(this, te, "f").finishFrames);
    }
  }
  getRecording() {
    return (0, l.gn)(this, re, "f");
  }
  getTime() {
    return new at.A((0, l.gn)(this, te, "f").frames);
  }
  getNextCheckpointIndex() {
    return (0, l.gn)(this, te, "f").nextCheckpointIndex;
  }
  hasCheckpointToRespawnAt() {
    return (0, l.gn)(this, te, "f").hasCheckpointToRespawnAt;
  }
  getPosition() {
    return new c.Pq0((0, l.gn)(this, te, "f").position.x, (0, l.gn)(this, te, "f").position.y, (0, l.gn)(this, te, "f").position.z);
  }
  getQuaternion() {
    return new c.PTz((0, l.gn)(this, te, "f").quaternion.x, (0, l.gn)(this, te, "f").quaternion.y, (0, l.gn)(this, te, "f").quaternion.z, (0, l.gn)(this, te, "f").quaternion.w);
  }
  getMatrix4() {
    const e = this.getPosition();
    const t = this.getQuaternion();
    const n = new c.kn4().makeRotationFromQuaternion(t);
    n.setPosition(e);
    return n;
  }
  get isPaused() {
    return (0, l.gn)(this, Z, "f");
  }
  set isPaused(e) {
    if ((0, l.gn)(this, Z, "f") != e) {
      if ((0, l.gn)(this, ee, "f") != null) {
        (0, l.gn)(this, X, "f")?.pauseCar((0, l.gn)(this, ee, "f"), e);
      }
      (0, l.GG)(this, Z, e, "f");
    }
  }
  get isControlsDisabled() {
    return (0, l.gn)(this, $, "f");
  }
  set isControlsDisabled(e) {
    if (e != (0, l.gn)(this, $, "f")) {
      if ((0, l.gn)(this, ne, "f") != null && (0, l.gn)(this, ee, "f") != null) {
        if (e) {
          (0, l.gn)(this, X, "f")?.controlCar((0, l.gn)(this, ee, "f"), false, false, false, false, false);
        } else {
          (0, l.gn)(this, X, "f")?.controlCar((0, l.gn)(this, ee, "f"), (0, l.gn)(this, ne, "f").up, (0, l.gn)(this, ne, "f").right, (0, l.gn)(this, ne, "f").down, (0, l.gn)(this, ne, "f").left, (0, l.gn)(this, ne, "f").reset);
        }
      }
      (0, l.GG)(this, $, e, "f");
    }
  }
  getControls() {
    if ((0, l.gn)(this, $, "f")) {
      return {
        up: false,
        right: false,
        down: false,
        left: false,
        reset: false
      };
    } else if ((0, l.gn)(this, ne, "f") != null) {
      return (0, l.gn)(this, ne, "f").getControls();
    } else {
      return (0, l.gn)(this, te, "f").controls;
    }
  }
  setNameTag(e, t) {
    if ((0, l.gn)(this, Ae, "f") == null || (0, l.gn)(this, Ae, "f").countryCode != e || (0, l.gn)(this, Ae, "f").name != t) {
      (0, l.GG)(this, Ae, {
        countryCode: e,
        name: t
      }, "f");
      (0, l.gn)(this, D, "m", Fe).call(this);
    }
  }
  getCarStyle() {
    return (0, l.gn)(this, Me, "f");
  }
  setCarStyle(e) {
    if (!(0, l.gn)(this, Me, "f").equals(e)) {
      if (e.pattern != (0, l.gn)(this, Me, "f").pattern) {
        (0, l.gn)(this, ke, "f").dispose();
        (0, l.GG)(this, ke, (0, l.gn)(B, B, "m", We).call(B, (0, l.gn)(this, ge, "f"), e.pattern), "f");
        (0, l.gn)(this, Te, "f").value = (0, l.gn)(this, ke, "f");
      }
      if (e.rims != (0, l.gn)(this, Me, "f").rims) {
        for (let t = 0; t < (0, l.gn)(this, xe, "f").length; t++) {
          const n = (0, l.gn)(this, xe, "f")[t];
          (0, l.gn)(this, me, "f").remove(n);
          (0, l.gn)(this, ge, "f").removeMaterial(n.material);
          const i = (0, l.gn)(B, B, "m", Ve).call(B, e.rims);
          (0, l.gn)(this, D, "m", Oe).call(this, i);
          i.position.copy(n.position);
          i.quaternion.copy(n.quaternion);
          i.scale.copy(n.scale);
          (0, l.gn)(this, me, "f").add(i);
          (0, l.gn)(this, xe, "f")[t] = i;
        }
      }
      if (e.exhaust != (0, l.gn)(this, Me, "f").exhaust) {
        (0, l.gn)(this, be, "f").remove((0, l.gn)(this, we, "f"));
        (0, l.gn)(this, ge, "f").removeMaterial((0, l.gn)(this, we, "f").material);
        (0, l.GG)(this, we, (0, l.gn)(B, B, "m", He).call(B, e.exhaust), "f");
        (0, l.gn)(this, D, "m", Oe).call(this, (0, l.gn)(this, we, "f"));
        (0, l.gn)(this, be, "f").add((0, l.gn)(this, we, "f"));
      }
      (0, l.gn)(this, Ee, "f").value = new c.Pq0().setFromColor(e.secondaryColor);
      (0, l.gn)(this, me, "f").traverse(t => {
        if (t instanceof c.eaF) {
          let n;
          n = Array.isArray(t.material) ? t.material : [t.material];
          for (const t of n) {
            if (t.name == "Main") {
              t.color.set(e.primaryColor);
            } else if (t.name == "Metal") {
              t.color.set(e.frameColor);
            } else if (t.name == "Rim") {
              t.color.set(e.rimsColor);
            }
          }
        }
      });
      (0, l.GG)(this, Me, e.clone(), "f");
    }
  }
  setOpacity(e) {
    (0, l.gn)(this, me, "f").traverse(t => {
      if (t instanceof c.eaF) {
        let n;
        n = Array.isArray(t.material) ? t.material : [t.material];
        for (const t of n) {
          t.opacity = e;
          const n = e < 1;
          t.needsUpdate = n != t.transparent;
          t.transparent = n;
        }
      }
    });
  }
  setVisible(e) {
    (0, l.gn)(this, me, "f").visible = e;
  }
  getCarState() {
    return (0, l.gn)(this, te, "f");
  }
  setCarState(e, t) {
    if ((0, l.gn)(this, Be, "f")) {
      return;
    }
    const n = (0, l.gn)(this, te, "f");
    (0, l.GG)(this, te, e, "f");
    const i = 0.001;
    if (t) {
      (0, l.GG)(this, Ue, null, "f");
      (0, l.gn)(this, Ne, "f")?.clear();
      for (const e of (0, l.gn)(this, Pe, "f")) {
        e.clear();
      }
    }
    if ((0, l.gn)(this, Ue, "f") == null || (0, l.gn)(this, Ue, "f") + 10 <= (0, l.gn)(this, te, "f").frames) {
      (0, l.GG)(this, Ue, (0, l.gn)(this, te, "f").frames, "f");
      (0, l.gn)(this, D, "m", qe).call(this, 0.01);
    }
    if (t || !n.controls.reset && (0, l.gn)(this, te, "f").controls.reset) {
      (0, l.gn)(this, Q, "f").reset(this.getPosition(), this.getQuaternion(), this.getSpeedKmh());
      (0, l.gn)(this, J, "f").reset(this.getPosition(), this.getQuaternion(), this.getSpeedKmh());
      for (const e of (0, l.gn)(this, ce, "f")) {
        e();
      }
    }
    (0, l.gn)(this, D, "m", Xe).call(this, i);
    (0, l.gn)(this, D, "m", Ze).call(this, i);
    if ((0, l.gn)(this, ie, "f") && (0, l.gn)(this, te, "f").hasStarted && n.finishFrames == null) {
      (0, l.gn)(this, re, "f").recordFrame(n.frames, (0, l.gn)(this, te, "f").controls);
    }
    if ((0, l.gn)(this, te, "f").nextCheckpointIndex > n.nextCheckpointIndex) {
      if (this.notificationAudioEnabled) {
        (0, l.gn)(this, D, "m", Ke).call(this);
      }
      for (const e of (0, l.gn)(this, he, "f")) {
        e(n.nextCheckpointIndex);
      }
    }
    if ((0, l.gn)(this, te, "f").finishFrames != null && n.finishFrames == null) {
      if (this.notificationAudioEnabled) {
        (0, l.gn)(this, D, "m", Ke).call(this);
      }
      for (const e of (0, l.gn)(this, de, "f")) {
        e(this);
      }
    }
    if (t || (0, l.gn)(this, te, "f").frames % 50 == 0) {
      (0, l.gn)(this, Y, "f")?.call(this, (0, l.gn)(this, te, "f"));
    }
  }
  update(e) {
    (0, l.gn)(this, D, "m", Qe).call(this);
    (0, l.gn)(this, Ne, "f")?.update(e);
    if ((0, l.gn)(this, ve, "f") != null) {
      const e = this.getPosition();
      const t = new c.Pq0(0, 1, 0).applyQuaternion(this.getQuaternion());
      const n = 1.75;
      (0, l.gn)(this, ve, "f").position.copy(e.clone().addScaledVector(t, n));
      const i = (0, l.gn)(this, ve, "f").position.distanceToSquared((0, l.gn)(this, ge, "f").camera.position);
      const r = 2.5;
      const a = 50;
      (0, l.gn)(this, ve, "f").visible = (0, l.gn)(this, te, "f").hasStarted && i >= r * r && i <= a * a;
      if ((0, l.gn)(this, ve, "f").visible) {
        (0, l.gn)(this, ve, "f").lookAt((0, l.gn)(this, ge, "f").camera.position);
      }
    }
    const t = this.getMatrix4();
    const n = this.getQuaternion();
    (0, l.gn)(this, be, "f").matrixAutoUpdate = false;
    (0, l.gn)(this, be, "f").matrix.copy(t);
    (0, l.gn)(this, be, "f").matrix.multiply(new c.kn4().makeTranslation(0, B.massOffset, 0));
    (0, l.gn)(this, ye, "f").matrixAutoUpdate = false;
    (0, l.gn)(this, ye, "f").matrix.copy((0, l.gn)(this, be, "f").matrix);
    for (let i = 0; i < 4; i++) {
      const r = (0, l.gn)(this, te, "f").wheelContact[i] != null;
      const a = (0, l.gn)(this, te, "f").wheelDeltaRotation[i];
      if (this.hasStarted()) {
        if (r) {
          (0, l.gn)(this, ue, "f")[i] = a * 1000;
          (0, l.gn)(this, fe, "f")[i] = a * 1000;
        } else {
          const {
            up: t,
            down: n
          } = this.getControls();
          const r = i == 2 || i == 3;
          if (n) {
            if ((0, l.gn)(this, te, "f").brakeLightEnabled) {
              if ((0, l.gn)(this, fe, "f")[i] > 0) {
                (0, l.gn)(this, fe, "f")[i] = Math.max(0, (0, l.gn)(this, fe, "f")[i] - e * 50);
              } else if ((0, l.gn)(this, fe, "f")[i] < 0) {
                (0, l.gn)(this, fe, "f")[i] = Math.min(0, (0, l.gn)(this, fe, "f")[i] + e * 50);
              }
            } else if (r) {
              (0, l.gn)(this, ue, "f")[i] -= e * 25;
              (0, l.gn)(this, fe, "f")[i] -= e * 25;
            }
          } else if (t && r) {
            (0, l.gn)(this, ue, "f")[i] += e * 25;
            (0, l.gn)(this, fe, "f")[i] += e * 50;
          }
          (0, l.gn)(this, ue, "f")[i] *= Math.max(0, 1 - e);
          (0, l.gn)(this, fe, "f")[i] *= Math.max(0, 1 - e);
        }
        (0, l.gn)(this, pe, "f")[i] += (0, l.gn)(this, fe, "f")[i] * e;
      }
      const s = (0, l.gn)(B, B, "f", ae)[i].clone().add(new c.Pq0(0, -(0, l.gn)(this, te, "f").wheelSuspensionLength[i], 0)).applyMatrix4(t);
      const o = n.clone();
      if (i == 0 || i == 1) {
        o.multiply(new c.PTz().setFromAxisAngle(new c.Pq0(0, 1, 0), (0, l.gn)(this, te, "f").steering));
      }
      o.multiply(new c.PTz().setFromAxisAngle(new c.Pq0(1, 0, 0), (0, l.gn)(this, pe, "f")[i]));
      (0, l.gn)(this, xe, "f")[i].position.copy(s);
      (0, l.gn)(this, xe, "f")[i].quaternion.copy(o);
      const h = (0, l.gn)(this, te, "f").wheelSuspensionLength[i];
      const d = (0, l.gn)(this, te, "f").wheelSkidInfo[i];
      (0, l.gn)(this, ye, "f").morphTargetInfluences ||= [];
      (0, l.gn)(this, ye, "f").morphTargetInfluences[i] = h * 2 + 0.06;
      if (e > 0 && (0, l.gn)(this, Re, "f")?.getSettingBoolean(rt.A.SkidmarksEnabled) && i < (0, l.gn)(this, Pe, "f").length) {
        const e = (0, l.gn)(this, te, "f").wheelContact[i];
        const t = Math.min(1, Math.abs(a) / (0, l.gn)(B, B, "f", se));
        const r = Math.pow(t, (0, l.gn)(B, B, "f", oe)) * (0, l.gn)(B, B, "f", le);
        if (e != null && d < r && (0, l.gn)(this, Le, "f")[i] == 0) {
          (0, l.gn)(this, Pe, "f")[i].spawn(new c.Pq0(s.x, s.y, s.z), n, new c.Pq0(e.position.x, e.position.y, e.position.z), new c.Pq0(e.normal.x, e.normal.y, e.normal.z));
        }
      }
    }
    (0, l.gn)(this, D, "m", tt).call(this, (0, l.gn)(this, te, "f").brakeLightEnabled);
  }
  updateCameras(e) {
    if ((0, l.gn)(this, te, "f").finishFrames == null) {
      const t = this.getPosition();
      const n = this.getQuaternion();
      const i = this.getSpeedKmh();
      (0, l.gn)(this, Q, "f").update(e, t, n, i);
      (0, l.gn)(this, J, "f").update(t, n, i);
    }
  }
  get cameraOrbit() {
    return (0, l.gn)(this, Q, "f").camera;
  }
  get cameraCockpit() {
    return (0, l.gn)(this, J, "f").camera;
  }
  set audioVolume(e) {
    (0, l.GG)(this, O, e, "f");
    if ((0, l.gn)(this, F, "f") != null) {
      (0, l.gn)(this, F, "f").gain.setTargetAtTime((0, l.gn)(this, O, "f"), 0, 0.01);
    }
  }
  static async initResources(e) {
    const t = await new Promise((t, n) => {
      e.load("models/car.glb", e => {
        function i(t, n) {
          const i = e.scene.getObjectByName(t);
          if (i == null) {
            throw new Error("Mesh \"" + t + "\" does not exist");
          }
          if (i.children.length == 0) {
            if (!(i instanceof c.eaF)) {
              throw new Error("Mesh \"" + t + "\" is not a valid mesh");
            }
            const e = i;
            if (n) {
              e.updateMatrixWorld(true);
              e.geometry.applyMatrix4(e.matrix.clone());
              e.geometry.computeVertexNormals();
              e.matrix.identity();
            }
            return e;
          }
          const r = i.children.map(e => {
            if (!(e instanceof c.eaF)) {
              throw new Error("Mesh \"" + t + "\" has invalid child meshes");
            }
            return e;
          });
          const a = r.map(e => e.geometry);
          const s = h.pP(a, true);
          if (n) {
            i.updateMatrixWorld(true);
            s.applyMatrix4(i.matrix.clone());
          }
          s.computeVertexNormals();
          const o = r.map(e => e.material);
          const l = new c.eaF(s, o);
          l.name = t;
          return l;
        }
        function r(e) {
          let t;
          t = Array.isArray(e.material) ? e.material : [e.material];
          for (const e of t) {
            e.side = c.hB5;
            e.shadowSide = c.hB5;
          }
          return e;
        }
        const a = new Map();
        for (let e = 0; e < w.A.rims.length; e++) {
          if (!w.A.isValidRims(e)) {
            throw new Error("Invalid car style rims");
          }
          a.set(e, r(i(w.A.rims[e].model, false)));
        }
        const s = new Map();
        for (let e = 0; e < w.A.exhausts.length; e++) {
          if (!w.A.isValidExhaust(e)) {
            throw new Error("Invalid car style exhaust");
          }
          s.set(e, r(i(w.A.exhausts[e].model, true)));
        }
        B.models = {
          chassis: r(i("Body", true)),
          suspension: r(i("Suspension", true)),
          rims: a,
          exhausts: s,
          collisionShapeVertices: (0, l.gn)(B, B, "m", nt).call(B, i("Collision", true))
        };
        (0, l.gn)(B, B, "m", it).call(B).then(e => {
          t(e);
        }).catch(n);
      }, undefined, n);
    });
    const n = w.A.patterns.map(({
      url: e
    }) => new Promise(t => {
      const n = new Image();
      n.addEventListener("load", () => {
        t(n);
      });
      n.addEventListener("error", () => {
        t(null);
      });
      n.src = e;
    }));
    B.patterns = await Promise.all(n);
    return t;
  }
}
B = ot;
G = new WeakMap();
F = new WeakMap();
O = new WeakMap();
W = new WeakMap();
V = new WeakMap();
H = new WeakMap();
j = new WeakMap();
K = new WeakMap();
q = new WeakMap();
Q = new WeakMap();
J = new WeakMap();
X = new WeakMap();
Y = new WeakMap();
Z = new WeakMap();
$ = new WeakMap();
ee = new WeakMap();
te = new WeakMap();
ne = new WeakMap();
ie = new WeakMap();
re = new WeakMap();
ce = new WeakMap();
he = new WeakMap();
de = new WeakMap();
ue = new WeakMap();
fe = new WeakMap();
pe = new WeakMap();
ge = new WeakMap();
me = new WeakMap();
Ae = new WeakMap();
ve = new WeakMap();
be = new WeakMap();
ye = new WeakMap();
we = new WeakMap();
xe = new WeakMap();
Se = new WeakMap();
ke = new WeakMap();
Te = new WeakMap();
Ee = new WeakMap();
Me = new WeakMap();
_e = new WeakMap();
Ce = new WeakMap();
Re = new WeakMap();
Pe = new WeakMap();
Ie = new WeakMap();
Le = new WeakMap();
Ue = new WeakMap();
Ne = new WeakMap();
ze = new WeakMap();
De = new WeakMap();
Be = new WeakMap();
D = new WeakSet();
Ge = function () {
  (0, l.gn)(this, D, "m", je).call(this);
  setTimeout(() => {
    if ((0, l.gn)(this, W, "f") != null) {
      (0, l.gn)(this, W, "f").source.stop();
      (0, l.GG)(this, W, null, "f");
    }
    if ((0, l.gn)(this, H, "f") != null) {
      for (const {
        source: e
      } of (0, l.gn)(this, H, "f")) {
        e.stop();
      }
      (0, l.GG)(this, H, null, "f");
    }
  }, 200);
};
Fe = function () {
  if ((0, l.gn)(this, ve, "f") != null) {
    (0, l.gn)(this, ve, "f").geometry.dispose();
    (0, l.gn)(this, ve, "f").material.map?.dispose();
    (0, l.gn)(this, ve, "f").material.dispose();
    (0, l.gn)(this, ge, "f").scene.remove((0, l.gn)(this, ve, "f"));
    (0, l.GG)(this, ve, null, "f");
  }
  if ((0, l.gn)(this, Ae, "f") != null) {
    const e = document.createElement("canvas");
    const t = e.getContext("2d");
    if (t != null) {
      const n = 64;
      const i = `bold ${n.toString()}px ForcedSquare, Arial, sans-serif`;
      let r;
      let a;
      t.font = i;
      if ((0, l.gn)(this, Ae, "f").countryCode == null) {
        r = 0;
        a = 0;
      } else {
        r = n * (4 / 3);
        a = 10;
      }
      const s = t.measureText((0, l.gn)(this, Ae, "f").name).width;
      e.width = r + a + s + 20;
      e.height = n + 20;
      if ((0, l.gn)(this, Ae, "f").countryCode != null) {
        const e = new Image();
        e.src = "images/countries/" + (0, l.gn)(this, Ae, "f").countryCode + ".svg";
        e.addEventListener("load", () => {
          t.drawImage(e, 10, 10, r, n);
          o.needsUpdate = true;
        });
      }
      t.fillStyle = "rgba(0,0,0,0.4)";
      t.fillRect(0, 0, e.width, e.height);
      t.fillStyle = "rgba(255,255,255,0.9)";
      t.font = i;
      t.fillText((0, l.gn)(this, Ae, "f").name, 10 + r + a, n - 5);
      const o = new c.gPd(e);
      o.needsUpdate = true;
      const h = 0.4;
      const d = h * e.width / e.height;
      const u = new c.bdM(d, h);
      const f = new c.V9B({
        map: o,
        transparent: true,
        depthTest: false,
        depthWrite: false
      });
      (0, l.GG)(this, ve, new c.eaF(u, f), "f");
      (0, l.gn)(this, ve, "f").renderOrder = 1;
      (0, l.gn)(this, ge, "f").scene.add((0, l.gn)(this, ve, "f"));
    }
  }
};
Oe = function (e) {
  let t;
  if (Array.isArray(e.material)) {
    t = e.material.map(e => {
      if (!(e instanceof c.imn)) {
        throw new Error("Material is not a THREE.Material");
      }
      return e.clone();
    });
    e.material = t;
  } else {
    t = [e.material.clone()];
    e.material = t[0];
  }
  for (const e of t) {
    if (e.name == "Main") {
      if (!(e instanceof c._4j)) {
        throw new Error("Main material must be MeshStandardMaterial");
      }
      e.onBeforeCompile = e => {
        e.fragmentShader = "uniform sampler2D carColorPattern;\nuniform vec3 carColorSecondary;\n" + e.fragmentShader;
        e.fragmentShader = e.fragmentShader.replace("vec4 diffuseColor = vec4( diffuse, opacity );", "float colorSource = texture(carColorPattern, vUv).g;\nvec4 diffuseColor = vec4( carColorSecondary * colorSource + diffuse * (1.0 - colorSource), opacity );");
        e.uniforms.carColorPattern = (0, l.gn)(this, Te, "f");
        e.uniforms.carColorSecondary = (0, l.gn)(this, Ee, "f");
        e.defines ??= {};
        e.defines.USE_UV = true;
      };
      e.needsUpdate = true;
    } else if (e.name == "Metal") {
      e.needsUpdate = true;
    } else if (e.name == "BrakeLight") {
      if (!(e instanceof c._4j)) {
        throw new Error("Brake light material must be MeshStandardMaterial");
      }
      (0, l.GG)(this, Se, e, "f");
    }
  }
  e.castShadow = true;
  e.receiveShadow = true;
  e.frustumCulled = false;
  (0, l.gn)(this, ge, "f").addMaterial(e.material);
};
We = function (e, t) {
  if (B.patterns == null) {
    throw new Error("Car patterns are not loaded yet");
  }
  const n = document.createElement("canvas");
  n.width = 2048;
  n.height = 2048;
  const i = new c.gPd(n);
  i.flipY = false;
  i.anisotropy = e.getMaxAnisotropy();
  i.needsUpdate = true;
  const r = n.getContext("2d", {
    alpha: false
  });
  if (r != null) {
    r.clearRect(0, 0, r.canvas.width, r.canvas.height);
    const e = B.patterns[t];
    if (e != null) {
      r.drawImage(e, 0, 0, r.canvas.width, r.canvas.height);
    }
    i.needsUpdate = true;
  } else {
    console.error("Failed to get 2d-context for car texture");
  }
  return i;
};
Ve = function (e) {
  if (B.models == null) {
    throw new Error("Car models aren't loaded yet");
  }
  const t = B.models.rims.get(e);
  if (t == null) {
    throw new Error("Rims model not found");
  }
  return t.clone();
};
He = function (e) {
  if (B.models == null) {
    throw new Error("Car models aren't loaded yet");
  }
  const t = B.models.exhausts.get(e);
  if (t == null) {
    throw new Error("Exhaust model not found");
  }
  return t.clone();
};
je = function () {
  if ((0, l.gn)(this, W, "f") != null) {
    (0, l.gn)(this, W, "f").source.playbackRate.setTargetAtTime(0.7, 0, 0.15);
    (0, l.gn)(this, W, "f").gain.gain.setTargetAtTime(0, 0, 0.15);
  }
  if ((0, l.gn)(this, H, "f") != null) {
    for (const e of (0, l.gn)(this, H, "f")) {
      e.source.playbackRate.setTargetAtTime(0.3, 0, 0.15);
      e.gain.gain.setTargetAtTime(0, 0, 0.15);
    }
  }
  if ((0, l.gn)(this, Ie, "f") != null) {
    for (const {
      source: e
    } of (0, l.gn)(this, Ie, "f")) {
      e.stop();
    }
    (0, l.GG)(this, Ie, null, "f");
  }
};
Ke = function () {
  const e = (0, l.gn)(this, Re, "f")?.getSettingFloat(rt.A.CheckpointVolume) ?? 0;
  let t = Math.min(Math.max((0, l.gn)(this, O, "f") * e, 0), 1);
  if (Number.isNaN(t)) {
    t = 0;
  }
  if (t > 0 && (0, l.gn)(this, G, "f") != null) {
    const e = (0, l.gn)(this, G, "f").getBuffer("checkpoint");
    if (e != null && (0, l.gn)(this, G, "f").context != null && (0, l.gn)(this, G, "f").destinationMaster != null) {
      const n = (0, l.gn)(this, G, "f").context.createBufferSource();
      n.buffer = e;
      n.playbackRate.value = 1.25;
      const i = (0, l.gn)(this, G, "f").context.createGain();
      i.gain.value = t * 0.03;
      n.connect(i);
      i.connect((0, l.gn)(this, G, "f").destinationMaster);
      n.start(0);
    }
  }
};
qe = function (e) {
  const t = this.getMatrix4();
  for (let n = 0; n < 4; n++) {
    const i = (0, l.gn)(B, B, "f", ae)[n].clone().add(new c.Pq0(0, -(0, l.gn)(this, te, "f").wheelSuspensionLength[n], 0)).applyMatrix4(t);
    const r = (0, l.gn)(this, te, "f").wheelContact[n] != null;
    const a = (0, l.gn)(this, te, "f").wheelDeltaRotation[n];
    const s = (0, l.gn)(this, te, "f").wheelSkidInfo[n];
    const o = Math.min(1, Math.abs(a) / (0, l.gn)(B, B, "f", se));
    const h = Math.pow(o, (0, l.gn)(B, B, "f", oe)) * (0, l.gn)(B, B, "f", le);
    if (r && s < h) {
      if (n < (0, l.gn)(this, Pe, "f").length) {
        (0, l.gn)(this, Le, "f")[n] = Math.max(0, (0, l.gn)(this, Le, "f")[n] - e);
      }
      if ((0, l.gn)(this, Le, "f")[n] == 0 && (0, l.gn)(this, Ne, "f") != null) {
        (0, l.gn)(this, Ne, "f").spawn(i.x, i.y, i.z);
      }
    } else {
      if (n < (0, l.gn)(this, Pe, "f").length && (0, l.gn)(this, Re, "f")?.getSettingBoolean(rt.A.SkidmarksEnabled)) {
        (0, l.gn)(this, Pe, "f")[n].break();
      }
      (0, l.gn)(this, Le, "f")[n] = 0.075;
    }
  }
};
Qe = function () {
  if ((0, l.gn)(this, G, "f") != null && (0, l.gn)(this, G, "f").context != null && (0, l.gn)(this, G, "f").destinationSfx != null) {
    if ((0, l.gn)(this, F, "f") == null) {
      (0, l.GG)(this, F, (0, l.gn)(this, G, "f").context.createGain(), "f");
      (0, l.gn)(this, F, "f").gain.value = (0, l.gn)(this, O, "f");
      (0, l.gn)(this, F, "f").connect((0, l.gn)(this, G, "f").destinationSfx);
    }
    if ((0, l.gn)(this, K, "f") == null) {
      (0, l.GG)(this, K, (0, l.gn)(this, G, "f").context.createPanner(), "f");
      (0, l.gn)(this, K, "f").refDistance = 5;
      (0, l.gn)(this, K, "f").connect((0, l.gn)(this, F, "f"));
    }
    const e = this.getPosition();
    (0, l.gn)(this, K, "f").positionX.value = e.x;
    (0, l.gn)(this, K, "f").positionY.value = e.y;
    (0, l.gn)(this, K, "f").positionZ.value = e.z;
    const t = 4;
    if ((0, l.gn)(this, q, "f").length < t) {
      (0, l.gn)(this, q, "f").length = 0;
      for (let e = 0; e < t; ++e) {
        const e = (0, l.gn)(this, G, "f").context.createPanner();
        e.refDistance = 5;
        e.connect((0, l.gn)(this, F, "f"));
        (0, l.gn)(this, q, "f").push(e);
      }
    }
    const n = this.getMatrix4();
    for (let e = 0; e < t; ++e) {
      const t = (0, l.gn)(this, q, "f")[e];
      const i = (0, l.gn)(B, B, "f", ae)[e].clone().add(new c.Pq0(0, -(0, l.gn)(this, te, "f").wheelSuspensionLength[e], 0)).applyMatrix4(n);
      t.positionX.value = i.x;
      t.positionY.value = i.y;
      t.positionZ.value = i.z;
    }
    if ((0, l.gn)(this, ge, "f").camera == (0, l.gn)(this, Q, "f").camera || (0, l.gn)(this, ge, "f").camera == (0, l.gn)(this, J, "f").camera) {
      (0, l.gn)(this, G, "f").refreshListener((0, l.gn)(this, ge, "f"));
    }
    (0, l.gn)(this, D, "m", Je).call(this);
    (0, l.gn)(this, D, "m", Ye).call(this);
    (0, l.gn)(this, D, "m", et).call(this);
  }
};
Je = function () {
  if ((0, l.gn)(this, W, "f") == null && (0, l.gn)(this, K, "f") != null && (0, l.gn)(this, G, "f") != null) {
    const e = (0, l.gn)(this, G, "f").getBuffer("engine");
    if (e != null && (0, l.gn)(this, G, "f").context != null) {
      const t = (0, l.gn)(this, G, "f").context.createBufferSource();
      t.buffer = e;
      t.loop = true;
      t.playbackRate.value = 0.7;
      const n = (0, l.gn)(this, G, "f").context.createGain();
      n.gain.value = 0;
      t.connect(n);
      n.connect((0, l.gn)(this, K, "f"));
      t.start(0, Math.random() * 2);
      (0, l.GG)(this, W, {
        source: t,
        gain: n
      }, "f");
    }
  }
  if ((0, l.gn)(this, W, "f") != null) {
    const e = ((0, l.gn)(this, ue, "f")[0] + (0, l.gn)(this, ue, "f")[1] + (0, l.gn)(this, ue, "f")[2] + (0, l.gn)(this, ue, "f")[3]) / 4;
    const t = 0.7 + Math.pow(Math.abs(e), 1 / 3) / 3;
    const n = (0, l.gn)(this, te, "f").wheelContact[0] != null || (0, l.gn)(this, te, "f").wheelContact[1] != null || (0, l.gn)(this, te, "f").wheelContact[2] != null || (0, l.gn)(this, te, "f").wheelContact[3] != null;
    const {
      up: i,
      down: r
    } = this.getControls();
    const a = this.hasStarted() && !this.hasFinished() && (i && (!r || !(0, l.gn)(this, te, "f").brakeLightEnabled) || r && !(0, l.gn)(this, te, "f").brakeLightEnabled);
    let s;
    s = n ? a ? t : Math.max(0.7, t / 2) : a ? Math.max(0.7, t * 1.15) : Math.max(0.7, t / 2);
    (0, l.gn)(this, W, "f").source.playbackRate.setTargetAtTime(s, 0, 0.05);
    (0, l.gn)(this, W, "f").gain.gain.setTargetAtTime(Math.min(0.285, s / 14), 0, 0.05);
  }
};
Xe = function (e) {
  if ((0, l.gn)(this, V, "f").length < 4) {
    (0, l.gn)(this, V, "f").length = 0;
    for (let e = 0; e < 4; ++e) {
      (0, l.gn)(this, V, "f").push(0);
    }
  }
  for (let t = 0; t < 4 && t < (0, l.gn)(this, q, "f").length; t++) {
    (0, l.gn)(this, V, "f")[t] -= e;
    if ((0, l.gn)(this, V, "f")[t] <= 0) {
      const e = Math.abs((0, l.gn)(this, te, "f").wheelSuspensionVelocity[t]);
      if (e > 4 && (0, l.gn)(this, G, "f") != null) {
        const n = (0, l.gn)(this, G, "f").getBuffer("suspension");
        if (n != null && (0, l.gn)(this, G, "f").context != null) {
          const i = (0, l.gn)(this, G, "f").context.createBufferSource();
          i.buffer = n;
          i.playbackRate.value = 0.7 + Math.random() * 0.1;
          const r = (0, l.gn)(this, G, "f").context.createGain();
          r.gain.value = Math.min(0.285, e / 140);
          i.connect(r);
          r.connect((0, l.gn)(this, q, "f")[t]);
          i.start((0, l.gn)(this, G, "f").context.currentTime + Math.random() * 0.02);
          (0, l.gn)(this, V, "f")[t] = 0.1;
        }
      }
    }
  }
};
Ye = function () {
  if ((0, l.gn)(this, H, "f") == null && (0, l.gn)(this, G, "f") != null) {
    const e = (0, l.gn)(this, G, "f").getBuffer("tires");
    if (e != null && (0, l.gn)(this, G, "f").context != null) {
      (0, l.GG)(this, H, [], "f");
      const t = 4;
      for (let n = 0; n < t; n++) {
        const i = (0, l.gn)(this, G, "f").context.createBufferSource();
        i.buffer = e;
        i.loop = true;
        i.playbackRate.value = 0.3;
        const r = (0, l.gn)(this, G, "f").context.createGain();
        r.gain.value = 0;
        i.connect(r);
        r.connect((0, l.gn)(this, q, "f")[n]);
        i.start(0, n / t * 3.5 + Math.random() * 0.25);
        (0, l.gn)(this, H, "f").push({
          source: i,
          gain: r
        });
      }
    }
  }
  if ((0, l.gn)(this, H, "f") != null) {
    for (let e = 0; e < (0, l.gn)(this, H, "f").length; ++e) {
      const t = (0, l.gn)(this, H, "f")[e];
      if ((0, l.gn)(this, te, "f").wheelContact[e] != null) {
        const e = Math.min(3, Math.abs(this.getSpeedKmh()) / 110);
        t.gain.gain.setTargetAtTime(e / 10.5, 0, 0.15);
      } else {
        t.gain.gain.setTargetAtTime(0, 0, 0.15);
      }
      const n = 0.3 + Math.min(0.4, Math.abs(this.getSpeedKmh()) / 800);
      t.source.playbackRate.setTargetAtTime(n, 0, 0.15);
    }
  }
};
Ze = function (e) {
  if ((0, l.gn)(this, j, "f") != null) {
    (0, l.gn)(this, j, "f").timeout -= e;
    if ((0, l.gn)(this, j, "f").timeout <= 0) {
      (0, l.GG)(this, j, null, "f");
    }
  }
  const t = (0, l.gn)(this, te, "f").collisionImpulses;
  for (const e of t) {
    (0, l.gn)(this, D, "m", $e).call(this, e);
  }
};
$e = function (e) {
  if (e > 25 && (0, l.gn)(this, K, "f") != null && (0, l.gn)(this, G, "f") != null && ((0, l.gn)(this, j, "f") == null || (0, l.gn)(this, j, "f").impulse + 100 < e)) {
    (0, l.GG)(this, j, {
      timeout: 0.2,
      impulse: e
    }, "f");
    const t = (0, l.gn)(this, G, "f").getBuffer("collision");
    if (t != null && (0, l.gn)(this, G, "f").context != null) {
      const n = (0, l.gn)(this, G, "f").context.createBufferSource();
      n.buffer = t;
      n.playbackRate.value = 0.1 + Math.min(e / 4000, 1) * 0.15;
      const i = (0, l.gn)(this, G, "f").context.createGain();
      i.gain.value = Math.max(0.3, Math.min(e / 4000, 1)) / 2.5;
      n.connect(i);
      i.connect((0, l.gn)(this, K, "f"));
      n.start(0);
    }
  }
};
et = function () {
  if ((0, l.gn)(this, Ie, "f") == null && (0, l.gn)(this, G, "f") != null) {
    const e = (0, l.gn)(this, G, "f").getBuffer("skidding");
    if (e != null && (0, l.gn)(this, G, "f").context != null) {
      (0, l.GG)(this, Ie, [], "f");
      const t = 4;
      for (let n = 0; n < t; ++n) {
        const i = (0, l.gn)(this, G, "f").context.createBufferSource();
        i.buffer = e;
        i.loop = true;
        i.playbackRate.value = 0.5;
        const r = (0, l.gn)(this, G, "f").context.createGain();
        r.gain.value = 0;
        i.connect(r);
        r.connect((0, l.gn)(this, q, "f")[n]);
        i.start(0, n / t * 3.5 + Math.random() * 0.25);
        (0, l.gn)(this, Ie, "f").push({
          source: i,
          gain: r
        });
      }
    }
  }
  if ((0, l.gn)(this, Ie, "f") != null) {
    for (let e = 0; e < (0, l.gn)(this, Ie, "f").length; ++e) {
      const t = (0, l.gn)(this, Ie, "f")[e];
      if ((0, l.gn)(this, Le, "f")[e] == 0) {
        t.gain.gain.setTargetAtTime(0.75 / 3.5, 0, 0.1);
      } else {
        t.gain.gain.setTargetAtTime(0, 0, 0.1);
      }
    }
  }
};
tt = function (e) {
  if ((0, l.gn)(this, Se, "f") != null) {
    if (e) {
      (0, l.gn)(this, Se, "f").emissive.setRGB(1, 0.4, 0.3);
    } else {
      (0, l.gn)(this, Se, "f").emissive.setRGB(0, 0, 0);
    }
  }
};
nt = function (e) {
  const t = e.geometry.toNonIndexed();
  if (!(t.attributes.position instanceof c.THS)) {
    throw new Error("Vertices must use BufferAttribute");
  }
  return Array.from(t.attributes.position.array);
};
it = async function () {
  if (B.models == null) {
    throw new Error("Car models are not loaded yet");
  }
  const e = new Float32Array(B.models.collisionShapeVertices);
  const t = await window.crypto.subtle.digest("SHA-256", e.buffer);
  const n = Array.from(new Uint8Array(t)).map(e => e.toString(16).padStart(2, "0")).join("");
  const i = "c12d4421883ae86b922550f98efea3cf5e6b9c168436f9f5c989ad33a41ce50b";
  const r = n == i;
  if (!r) {
    console.error("Car collision model checksum mismatch: " + n + " != " + i);
  }
  return r;
};
ot.massOffset = 0.6;
ot.detectorBoxCenter = new c.Pq0(0, 0.48, -0.15);
ot.detectorBoxSize = new c.Pq0(0.89, 0.22, 1.8);
ae = {
  value: [new c.Pq0(0.627909, 0.27, 1.3478), new c.Pq0(-0.627909, 0.27, 1.3478), new c.Pq0(0.720832, 0.27, -1.52686), new c.Pq0(-0.720832, 0.27, -1.52686)]
};
ot.suspensionResetLengthFront = 0.07809501004219055;
ot.suspensionResetLengthRear = 0.0781289680480957;
se = {
  value: 0.08
};
oe = {
  value: 3
};
le = {
  value: 0.5
};
ot.models = null;
ot.patterns = null;
export const A = ot;