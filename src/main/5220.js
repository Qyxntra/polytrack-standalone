var i;
var r = require("./1635.js");
var a = require("./641.js");
var s = require("./6421.js");
(function (e) {
  e[e.Init = 0] = "Init";
  e[e.Verify = 1] = "Verify";
  e[e.TestDeterminism = 2] = "TestDeterminism";
  e[e.CreateCar = 3] = "CreateCar";
  e[e.DeleteCar = 4] = "DeleteCar";
  e[e.StartCar = 5] = "StartCar";
  e[e.ControlCar = 6] = "ControlCar";
  e[e.PauseCar = 7] = "PauseCar";
  e[e.VerifyResult = 8] = "VerifyResult";
  e[e.DeterminismResult = 9] = "DeterminismResult";
  e[e.UpdateResult = 10] = "UpdateResult";
})(i ||= {});
const o = i;
var l;
var c;
var h;
var d;
var u;
var f;
var p;
var g;
var m = require("./3899.js");
c = new WeakMap();
h = new WeakMap();
d = new WeakMap();
u = new WeakMap();
f = new WeakMap();
p = new WeakMap();
l = new WeakSet();
g = function (e, t) {
  if (a.A.models == null) {
    throw new Error("Car collision model not loaded");
  }
  const n = t.getPhysicsParts().map(e => ({
    id: e.id,
    vertices: e.vertices,
    detector: e.detector == null ? null : {
      type: e.detector.type,
      center: e.detector.center,
      size: e.detector.size
    },
    startOffset: e.startOffset
  }));
  const i = {
    messageType: o.Init,
    version: "0.6.2",
    isRealtime: e,
    trackParts: n,
    carCollisionShapeVertices: a.A.models.collisionShapeVertices,
    carMassOffset: a.A.massOffset
  };
  (0, r.gn)(this, h, "f").postMessage(i);
};
export const A = class {
  constructor(e, t, n) {
    l.add(this);
    c.set(this, undefined);
    h.set(this, undefined);
    d.set(this, 0);
    u.set(this, new Map());
    f.set(this, []);
    p.set(this, new Map());
    (0, r.GG)(this, h, new Worker("simulation_worker.bundle.js"), "f");
    (0, r.gn)(this, h, "f").addEventListener("error", e => {
      throw new Error("Simulation error: " + e.message);
    });
    (0, r.gn)(this, h, "f").addEventListener("message", e => {
      const t = e.data;
      switch (t.messageType) {
        case o.VerifyResult:
          {
            const e = t.carId;
            const n = (0, r.gn)(this, u, "f").get(e);
            if (n != null) {
              (0, r.gn)(this, u, "f").delete(e);
              n.resolve(t.result);
            }
            break;
          }
        case o.DeterminismResult:
          {
            const e = t.isDeterminstic;
            for (const t of (0, r.gn)(this, f, "f")) {
              t(e);
            }
            (0, r.gn)(this, f, "f").length = 0;
            break;
          }
        case o.UpdateResult:
          {
            const e = t.carStateBuffers;
            for (const t of e) {
              const e = new Uint8Array(t);
              const n = e[0] | e[1] << 8 | e[2] << 16 | e[3] << 24;
              const i = (0, r.gn)(this, p, "f").get(n);
              if (i != null) {
                i(m.VO(e.subarray(4)).carState);
              }
            }
            break;
          }
      }
    });
    if (t != null && n != null) {
      (0, r.GG)(this, c, t, "f");
      if (n.hasLoaded()) {
        (0, r.gn)(this, l, "m", g).call(this, e, t);
      } else {
        n.addCompleteListener(() => {
          (0, r.gn)(this, l, "m", g).call(this, e, t);
        });
      }
    } else {
      (0, r.GG)(this, c, null, "f");
    }
  }
  dispose() {
    (0, r.gn)(this, h, "f").terminate();
    for (const {
      reject: e
    } of (0, r.gn)(this, u, "f").values()) {
      e(new Error("Simulation has been disposed"));
    }
    (0, r.gn)(this, u, "f").clear();
    (0, r.gn)(this, f, "f").length = 0;
  }
  validate(e, t, n) {
    return new Promise((i, a) => {
      var l;
      var f;
      if ((0, r.gn)(this, c, "f") == null) {
        throw new Error("TrackPartManager is not initialized");
      }
      if (e.getStartTransform() == null) {
        i(false);
      } else {
        const c = s.A.createMountainVertices(e.getBounds());
        (0, r.GG)(this, d, (f = (0, r.gn)(this, d, "f"), l = f++, f), "f");
        const p = l;
        (0, r.gn)(this, u, "f").set(p, {
          resolve: i,
          reject: a
        });
        const g = {
          messageType: o.Verify,
          mountainVertices: c.vertices,
          mountainOffset: {
            x: c.offset.x,
            y: c.offset.y,
            z: c.offset.z
          },
          trackData: e.toSaveString(),
          carId: p,
          carRecording: t.serialize(),
          targetFrames: n.numberOfFrames
        };
        (0, r.gn)(this, h, "f").postMessage(g);
      }
    });
  }
  testDeterminism() {
    return new Promise(e => {
      (0, r.gn)(this, f, "f").push(e);
      const t = {
        messageType: o.TestDeterminism
      };
      (0, r.gn)(this, h, "f").postMessage(t);
    });
  }
  createCar(e, t, n, i, s, l) {
    var u;
    var f;
    if ((0, r.gn)(this, c, "f") == null) {
      throw new Error("TrackPartManager is not initialized");
    }
    (0, r.GG)(this, d, (f = (0, r.gn)(this, d, "f"), u = f++, f), "f");
    const g = u;
    (0, r.gn)(this, p, "f").set(g, l);
    const m = {
      messageType: o.CreateCar,
      mountainVertices: t,
      mountainOffset: {
        x: n.x,
        y: n.y,
        z: n.z
      },
      trackData: i.toSaveString(),
      carId: g,
      carRecording: s?.serialize() ?? null
    };
    (0, r.gn)(this, h, "f").postMessage(m);
    return {
      id: g,
      carState: {
        frames: 0,
        speedKmh: 0,
        hasStarted: false,
        finishFrames: null,
        nextCheckpointIndex: 0,
        hasCheckpointToRespawnAt: false,
        position: {
          x: e.position.x,
          y: e.position.y,
          z: e.position.z
        },
        quaternion: {
          x: e.quaternion.x,
          y: e.quaternion.y,
          z: e.quaternion.z,
          w: e.quaternion.w
        },
        collisionImpulses: [],
        wheelContact: [null, null, null, null],
        wheelSuspensionLength: [a.A.suspensionResetLengthFront, a.A.suspensionResetLengthFront, a.A.suspensionResetLengthRear, a.A.suspensionResetLengthRear],
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
      }
    };
  }
  deleteCar(e) {
    const t = {
      messageType: o.DeleteCar,
      carId: e
    };
    (0, r.gn)(this, h, "f").postMessage(t);
    if (!(0, r.gn)(this, p, "f").delete(e)) {
      throw new Error("Deleting non-existant car");
    }
  }
  startCar(e, t) {
    const n = {
      messageType: o.StartCar,
      carId: e,
      targetSimulationTimeFrames: t?.numberOfFrames ?? null
    };
    (0, r.gn)(this, h, "f").postMessage(n);
  }
  controlCar(e, t, n, i, a, s) {
    const l = {
      messageType: o.ControlCar,
      carId: e,
      up: t,
      right: n,
      down: i,
      left: a,
      reset: s
    };
    (0, r.gn)(this, h, "f").postMessage(l);
  }
  pauseCar(e, t) {
    const n = {
      messageType: o.PauseCar,
      carId: e,
      isPaused: t
    };
    (0, r.gn)(this, h, "f").postMessage(n);
  }
};