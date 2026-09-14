export function _c(e) {
  let t = 0;
  t += 3;
  t += 4;
  t += 1;
  if (e.finishFrames != null) {
    t += 3;
  }
  t += 2;
  t += 12;
  t += 16;
  t += 1 + e.collisionImpulses.length * 4;
  for (const n of e.wheelContact) {
    if (n != null) {
      t += 24;
    }
  }
  t += 16;
  t += 16;
  t += 16;
  t += 16;
  t += 4;
  t += 1;
  let n = 0;
  const i = new Uint8Array(t);
  i.set(new Uint8Array(new Uint32Array([e.frames]).buffer).subarray(0, 3), n);
  n += 3;
  i.set(new Uint8Array(new Float32Array([e.speedKmh]).buffer), n);
  n += 4;
  i[n] = (e.hasStarted ? 1 : 0) | (e.finishFrames != null ? 1 : 0) << 1 | (e.hasCheckpointToRespawnAt ? 1 : 0) << 2 | (e.wheelContact[0] != null ? 1 : 0) << 3 | (e.wheelContact[1] != null ? 1 : 0) << 4 | (e.wheelContact[2] != null ? 1 : 0) << 5 | (e.wheelContact[3] != null ? 1 : 0) << 6;
  n += 1;
  if (e.finishFrames != null) {
    i.set(new Uint8Array(new Uint32Array([e.finishFrames]).buffer).subarray(0, 3), n);
    n += 3;
  }
  i.set(new Uint8Array(new Uint16Array([e.nextCheckpointIndex]).buffer), n);
  n += 2;
  i.set(new Uint8Array(new Float32Array([e.position.x, e.position.y, e.position.z]).buffer), n);
  n += 12;
  i.set(new Uint8Array(new Float32Array([e.quaternion.x, e.quaternion.y, e.quaternion.z, e.quaternion.w]).buffer), n);
  n += 16;
  i[n + 0] = e.collisionImpulses.length & 255;
  n += 1;
  i.set(new Uint8Array(new Float32Array(e.collisionImpulses).buffer), n);
  n += e.collisionImpulses.length * 4;
  for (const t of e.wheelContact) {
    if (t != null) {
      i.set(new Uint8Array(new Float32Array([t.position.x, t.position.y, t.position.z]).buffer), n);
      n += 12;
      i.set(new Uint8Array(new Float32Array([t.normal.x, t.normal.y, t.normal.z]).buffer), n);
      n += 12;
    }
  }
  i.set(new Uint8Array(new Float32Array(e.wheelSuspensionLength).buffer), n);
  n += 16;
  i.set(new Uint8Array(new Float32Array(e.wheelSuspensionVelocity).buffer), n);
  n += 16;
  i.set(new Uint8Array(new Float32Array(e.wheelDeltaRotation).buffer), n);
  n += 16;
  i.set(new Uint8Array(new Float32Array(e.wheelSkidInfo).buffer), n);
  n += 16;
  i.set(new Uint8Array(new Float32Array([e.steering]).buffer), n);
  n += 4;
  i[n] = (e.controls.up ? 1 : 0) | (e.controls.right ? 1 : 0) << 1 | (e.controls.down ? 1 : 0) << 2 | (e.controls.left ? 1 : 0) << 3 | (e.controls.reset ? 1 : 0) << 4 | (e.brakeLightEnabled ? 1 : 0) << 5;
  n += 1;
  return i;
}
export function VO(e) {
  const t = "CarState data is too short";
  const n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  let i = 0;
  if (e.length < i + 3) {
    throw new Error(t);
  }
  const r = e[i] | e[i + 1] << 8 | e[i + 2] << 16;
  i += 3;
  if (e.length < i + 4) {
    throw new Error(t);
  }
  const a = n.getFloat32(i, true);
  i += 4;
  if (e.length < i + 1) {
    throw new Error(t);
  }
  const s = !!(e[i] & 1);
  const o = !!(e[i] & 2);
  const l = !!(e[i] & 4);
  const c = [!!(e[i] & 8), !!(e[i] & 16), !!(e[i] & 32), !!(e[i] & 64)];
  i += 1;
  if (e.length < i + 1) {
    throw new Error(t);
  }
  let h;
  if (o) {
    if (e.length < i + 3) {
      throw new Error(t);
    }
    h = e[i] | e[i + 1] << 8 | e[i + 2] << 16;
    i += 3;
  } else {
    h = null;
  }
  if (e.length < i + 2) {
    throw new Error(t);
  }
  const d = n.getUint16(i, true);
  i += 2;
  if (e.length < i + 12) {
    throw new Error(t);
  }
  const u = {
    x: n.getFloat32(i, true),
    y: n.getFloat32(i + 4, true),
    z: n.getFloat32(i + 8, true)
  };
  i += 12;
  if (e.length < i + 16) {
    throw new Error(t);
  }
  const f = {
    x: n.getFloat32(i, true),
    y: n.getFloat32(i + 4, true),
    z: n.getFloat32(i + 8, true),
    w: n.getFloat32(i + 12, true)
  };
  i += 16;
  if (e.length < i + 1) {
    throw new Error(t);
  }
  const p = n.getUint8(i);
  i += 1;
  if (p > 4) {
    throw new Error("Number of collision impulses exceeds maximum allowed");
  }
  const g = [];
  for (let r = 0; r < p; r++) {
    if (e.length < i + 4) {
      throw new Error(t);
    }
    g.push(n.getFloat32(i, true));
    i += 4;
  }
  const m = [null, null, null, null];
  for (let r = 0; r < 4; r++) {
    if (c[r]) {
      if (e.length < i + 24) {
        throw new Error(t);
      }
      const a = {
        x: n.getFloat32(i, true),
        y: n.getFloat32(i + 4, true),
        z: n.getFloat32(i + 8, true)
      };
      i += 12;
      const s = {
        x: n.getFloat32(i, true),
        y: n.getFloat32(i + 4, true),
        z: n.getFloat32(i + 8, true)
      };
      i += 12;
      m[r] = {
        position: a,
        normal: s
      };
    }
  }
  const A = [0, 0, 0, 0];
  for (let r = 0; r < 4; r++) {
    if (e.length < i + 4) {
      throw new Error(t);
    }
    A[r] = n.getFloat32(i, true);
    i += 4;
  }
  const v = [0, 0, 0, 0];
  for (let r = 0; r < 4; r++) {
    if (e.length < i + 4) {
      throw new Error(t);
    }
    v[r] = n.getFloat32(i, true);
    i += 4;
  }
  const b = [0, 0, 0, 0];
  for (let r = 0; r < 4; r++) {
    if (e.length < i + 4) {
      throw new Error(t);
    }
    b[r] = n.getFloat32(i, true);
    i += 4;
  }
  const y = [0, 0, 0, 0];
  for (let r = 0; r < 4; r++) {
    if (e.length < i + 4) {
      throw new Error(t);
    }
    y[r] = n.getFloat32(i, true);
    i += 4;
  }
  if (e.length < i + 4) {
    throw new Error(t);
  }
  const w = n.getFloat32(i, true);
  i += 4;
  if (e.length < i + 1) {
    throw new Error(t);
  }
  const x = {
    up: !!(e[i] & 1),
    right: !!(e[i] & 2),
    down: !!(e[i] & 4),
    left: !!(e[i] & 8),
    reset: !!(e[i] & 16)
  };
  const S = !!(e[i] & 32);
  i += 1;
  return {
    numberOfBytes: i,
    carState: {
      frames: r,
      speedKmh: a,
      hasStarted: s,
      finishFrames: h,
      nextCheckpointIndex: d,
      hasCheckpointToRespawnAt: l,
      position: u,
      quaternion: f,
      collisionImpulses: g,
      wheelContact: m,
      wheelSuspensionLength: A,
      wheelSuspensionVelocity: v,
      wheelDeltaRotation: b,
      wheelSkidInfo: y,
      steering: w,
      brakeLightEnabled: S,
      controls: x
    }
  };
}