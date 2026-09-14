var i = require("./4922.js");
const r = {
  type: "change"
};
const a = {
  type: "start"
};
const s = {
  type: "end"
};
const o = new i.RlV();
const l = new i.Zcv();
const c = Math.cos(i.cj9.DEG2RAD * 70);
const h = new i.Pq0();
const d = Math.PI * 2;
const u = -1;
const f = 0;
const p = 1;
const g = 2;
const m = 3;
const A = 4;
const v = 5;
const b = 6;
const y = 0.000001;
export class N extends i.H2z {
  constructor(e, t = null) {
    super(e, t);
    this.state = u;
    this.target = new i.Pq0();
    this.cursor = new i.Pq0();
    this.minDistance = 0;
    this.maxDistance = Infinity;
    this.minZoom = 0;
    this.maxZoom = Infinity;
    this.minTargetRadius = 0;
    this.maxTargetRadius = Infinity;
    this.minPolarAngle = 0;
    this.maxPolarAngle = Math.PI;
    this.minAzimuthAngle = -Infinity;
    this.maxAzimuthAngle = Infinity;
    this.enableDamping = false;
    this.dampingFactor = 0.05;
    this.enableZoom = true;
    this.zoomSpeed = 1;
    this.enableRotate = true;
    this.rotateSpeed = 1;
    this.keyRotateSpeed = 1;
    this.enablePan = true;
    this.panSpeed = 1;
    this.screenSpacePanning = true;
    this.keyPanSpeed = 7;
    this.zoomToCursor = false;
    this.autoRotate = false;
    this.autoRotateSpeed = 2;
    this.keys = {
      LEFT: "ArrowLeft",
      UP: "ArrowUp",
      RIGHT: "ArrowRight",
      BOTTOM: "ArrowDown"
    };
    this.mouseButtons = {
      LEFT: i.kBv.ROTATE,
      MIDDLE: i.kBv.DOLLY,
      RIGHT: i.kBv.PAN
    };
    this.touches = {
      ONE: i.wtR.ROTATE,
      TWO: i.wtR.DOLLY_PAN
    };
    this.target0 = this.target.clone();
    this.position0 = this.object.position.clone();
    this.zoom0 = this.object.zoom;
    this._domElementKeyEvents = null;
    this._lastPosition = new i.Pq0();
    this._lastQuaternion = new i.PTz();
    this._lastTargetPosition = new i.Pq0();
    this._quat = new i.PTz().setFromUnitVectors(e.up, new i.Pq0(0, 1, 0));
    this._quatInverse = this._quat.clone().invert();
    this._spherical = new i.YHV();
    this._sphericalDelta = new i.YHV();
    this._scale = 1;
    this._panOffset = new i.Pq0();
    this._rotateStart = new i.I9Y();
    this._rotateEnd = new i.I9Y();
    this._rotateDelta = new i.I9Y();
    this._panStart = new i.I9Y();
    this._panEnd = new i.I9Y();
    this._panDelta = new i.I9Y();
    this._dollyStart = new i.I9Y();
    this._dollyEnd = new i.I9Y();
    this._dollyDelta = new i.I9Y();
    this._dollyDirection = new i.Pq0();
    this._mouse = new i.I9Y();
    this._performCursorZoom = false;
    this._pointers = [];
    this._pointerPositions = {};
    this._controlActive = false;
    this._onPointerMove = S.bind(this);
    this._onPointerDown = x.bind(this);
    this._onPointerUp = k.bind(this);
    this._onContextMenu = P.bind(this);
    this._onMouseWheel = M.bind(this);
    this._onKeyDown = _.bind(this);
    this._onTouchStart = C.bind(this);
    this._onTouchMove = R.bind(this);
    this._onMouseDown = T.bind(this);
    this._onMouseMove = E.bind(this);
    this._interceptControlDown = I.bind(this);
    this._interceptControlUp = L.bind(this);
    if (this.domElement !== null) {
      this.connect(this.domElement);
    }
    this.update();
  }
  connect(e) {
    super.connect(e);
    this.domElement.addEventListener("pointerdown", this._onPointerDown);
    this.domElement.addEventListener("pointercancel", this._onPointerUp);
    this.domElement.addEventListener("contextmenu", this._onContextMenu);
    this.domElement.addEventListener("wheel", this._onMouseWheel, {
      passive: false
    });
    this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, {
      passive: true,
      capture: true
    });
    this.domElement.style.touchAction = "none";
  }
  disconnect() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown);
    this.domElement.removeEventListener("pointermove", this._onPointerMove);
    this.domElement.removeEventListener("pointerup", this._onPointerUp);
    this.domElement.removeEventListener("pointercancel", this._onPointerUp);
    this.domElement.removeEventListener("wheel", this._onMouseWheel);
    this.domElement.removeEventListener("contextmenu", this._onContextMenu);
    this.stopListenToKeyEvents();
    this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, {
      capture: true
    });
    this.domElement.style.touchAction = "auto";
  }
  dispose() {
    this.disconnect();
  }
  getPolarAngle() {
    return this._spherical.phi;
  }
  getAzimuthalAngle() {
    return this._spherical.theta;
  }
  getDistance() {
    return this.object.position.distanceTo(this.target);
  }
  listenToKeyEvents(e) {
    e.addEventListener("keydown", this._onKeyDown);
    this._domElementKeyEvents = e;
  }
  stopListenToKeyEvents() {
    if (this._domElementKeyEvents !== null) {
      this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown);
      this._domElementKeyEvents = null;
    }
  }
  saveState() {
    this.target0.copy(this.target);
    this.position0.copy(this.object.position);
    this.zoom0 = this.object.zoom;
  }
  reset() {
    this.target.copy(this.target0);
    this.object.position.copy(this.position0);
    this.object.zoom = this.zoom0;
    this.object.updateProjectionMatrix();
    this.dispatchEvent(r);
    this.update();
    this.state = u;
  }
  update(e = null) {
    const t = this.object.position;
    h.copy(t).sub(this.target);
    h.applyQuaternion(this._quat);
    this._spherical.setFromVector3(h);
    if (this.autoRotate && this.state === u) {
      this._rotateLeft(this._getAutoRotationAngle(e));
    }
    if (this.enableDamping) {
      this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor;
      this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor;
    } else {
      this._spherical.theta += this._sphericalDelta.theta;
      this._spherical.phi += this._sphericalDelta.phi;
    }
    let n = this.minAzimuthAngle;
    let a = this.maxAzimuthAngle;
    if (isFinite(n) && isFinite(a)) {
      if (n < -Math.PI) {
        n += d;
      } else if (n > Math.PI) {
        n -= d;
      }
      if (a < -Math.PI) {
        a += d;
      } else if (a > Math.PI) {
        a -= d;
      }
      this._spherical.theta = n <= a ? Math.max(n, Math.min(a, this._spherical.theta)) : this._spherical.theta > (n + a) / 2 ? Math.max(n, this._spherical.theta) : Math.min(a, this._spherical.theta);
    }
    this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi));
    this._spherical.makeSafe();
    if (this.enableDamping === true) {
      this.target.addScaledVector(this._panOffset, this.dampingFactor);
    } else {
      this.target.add(this._panOffset);
    }
    this.target.sub(this.cursor);
    this.target.clampLength(this.minTargetRadius, this.maxTargetRadius);
    this.target.add(this.cursor);
    let s = false;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) {
      this._spherical.radius = this._clampDistance(this._spherical.radius);
    } else {
      const e = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale);
      s = e != this._spherical.radius;
    }
    h.setFromSpherical(this._spherical);
    h.applyQuaternion(this._quatInverse);
    t.copy(this.target).add(h);
    this.object.lookAt(this.target);
    if (this.enableDamping === true) {
      this._sphericalDelta.theta *= 1 - this.dampingFactor;
      this._sphericalDelta.phi *= 1 - this.dampingFactor;
      this._panOffset.multiplyScalar(1 - this.dampingFactor);
    } else {
      this._sphericalDelta.set(0, 0, 0);
      this._panOffset.set(0, 0, 0);
    }
    if (this.zoomToCursor && this._performCursorZoom) {
      let e = null;
      if (this.object.isPerspectiveCamera) {
        const t = h.length();
        e = this._clampDistance(t * this._scale);
        const n = t - e;
        this.object.position.addScaledVector(this._dollyDirection, n);
        this.object.updateMatrixWorld();
        s = !!n;
      } else if (this.object.isOrthographicCamera) {
        const t = new i.Pq0(this._mouse.x, this._mouse.y, 0);
        t.unproject(this.object);
        const n = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale));
        this.object.updateProjectionMatrix();
        s = n !== this.object.zoom;
        const r = new i.Pq0(this._mouse.x, this._mouse.y, 0);
        r.unproject(this.object);
        this.object.position.sub(r).add(t);
        this.object.updateMatrixWorld();
        e = h.length();
      } else {
        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.");
        this.zoomToCursor = false;
      }
      if (e !== null) {
        if (this.screenSpacePanning) {
          this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position);
        } else {
          o.origin.copy(this.object.position);
          o.direction.set(0, 0, -1).transformDirection(this.object.matrix);
          if (Math.abs(this.object.up.dot(o.direction)) < c) {
            this.object.lookAt(this.target);
          } else {
            l.setFromNormalAndCoplanarPoint(this.object.up, this.target);
            o.intersectPlane(l, this.target);
          }
        }
      }
    } else if (this.object.isOrthographicCamera) {
      const e = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale));
      if (e !== this.object.zoom) {
        this.object.updateProjectionMatrix();
        s = true;
      }
    }
    this._scale = 1;
    this._performCursorZoom = false;
    return (!!s || !!(this._lastPosition.distanceToSquared(this.object.position) > y) || !!((1 - this._lastQuaternion.dot(this.object.quaternion)) * 8 > y) || !!(this._lastTargetPosition.distanceToSquared(this.target) > y)) && (this.dispatchEvent(r), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), true);
  }
  _getAutoRotationAngle(e) {
    if (e !== null) {
      return d / 60 * this.autoRotateSpeed * e;
    } else {
      return d / 60 / 60 * this.autoRotateSpeed;
    }
  }
  _getZoomScale(e) {
    const t = Math.abs(e * 0.01);
    return Math.pow(0.95, this.zoomSpeed * t);
  }
  _rotateLeft(e) {
    this._sphericalDelta.theta -= e;
  }
  _rotateUp(e) {
    this._sphericalDelta.phi -= e;
  }
  _panLeft(e, t) {
    h.setFromMatrixColumn(t, 0);
    h.multiplyScalar(-e);
    this._panOffset.add(h);
  }
  _panUp(e, t) {
    if (this.screenSpacePanning === true) {
      h.setFromMatrixColumn(t, 1);
    } else {
      h.setFromMatrixColumn(t, 0);
      h.crossVectors(this.object.up, h);
    }
    h.multiplyScalar(e);
    this._panOffset.add(h);
  }
  _pan(e, t) {
    const n = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const i = this.object.position;
      h.copy(i).sub(this.target);
      let r = h.length();
      r *= Math.tan(this.object.fov / 2 * Math.PI / 180);
      this._panLeft(e * 2 * r / n.clientHeight, this.object.matrix);
      this._panUp(t * 2 * r / n.clientHeight, this.object.matrix);
    } else if (this.object.isOrthographicCamera) {
      this._panLeft(e * (this.object.right - this.object.left) / this.object.zoom / n.clientWidth, this.object.matrix);
      this._panUp(t * (this.object.top - this.object.bottom) / this.object.zoom / n.clientHeight, this.object.matrix);
    } else {
      console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.");
      this.enablePan = false;
    }
  }
  _dollyOut(e) {
    if (this.object.isPerspectiveCamera || this.object.isOrthographicCamera) {
      this._scale /= e;
    } else {
      console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.");
      this.enableZoom = false;
    }
  }
  _dollyIn(e) {
    if (this.object.isPerspectiveCamera || this.object.isOrthographicCamera) {
      this._scale *= e;
    } else {
      console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.");
      this.enableZoom = false;
    }
  }
  _updateZoomParameters(e, t) {
    if (!this.zoomToCursor) {
      return;
    }
    this._performCursorZoom = true;
    const n = this.domElement.getBoundingClientRect();
    const i = e - n.left;
    const r = t - n.top;
    const a = n.width;
    const s = n.height;
    this._mouse.x = i / a * 2 - 1;
    this._mouse.y = -r / s * 2 + 1;
    this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
  }
  _clampDistance(e) {
    return Math.max(this.minDistance, Math.min(this.maxDistance, e));
  }
  _handleMouseDownRotate(e) {
    this._rotateStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownDolly(e) {
    this._updateZoomParameters(e.clientX, e.clientX);
    this._dollyStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownPan(e) {
    this._panStart.set(e.clientX, e.clientY);
  }
  _handleMouseMoveRotate(e) {
    this._rotateEnd.set(e.clientX, e.clientY);
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft(d * this._rotateDelta.x / t.clientHeight);
    this._rotateUp(d * this._rotateDelta.y / t.clientHeight);
    this._rotateStart.copy(this._rotateEnd);
    this.update();
  }
  _handleMouseMoveDolly(e) {
    this._dollyEnd.set(e.clientX, e.clientY);
    this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart);
    if (this._dollyDelta.y > 0) {
      this._dollyOut(this._getZoomScale(this._dollyDelta.y));
    } else if (this._dollyDelta.y < 0) {
      this._dollyIn(this._getZoomScale(this._dollyDelta.y));
    }
    this._dollyStart.copy(this._dollyEnd);
    this.update();
  }
  _handleMouseMovePan(e) {
    this._panEnd.set(e.clientX, e.clientY);
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed);
    this._pan(this._panDelta.x, this._panDelta.y);
    this._panStart.copy(this._panEnd);
    this.update();
  }
  _handleMouseWheel(e) {
    this._updateZoomParameters(e.clientX, e.clientY);
    if (e.deltaY < 0) {
      this._dollyIn(this._getZoomScale(e.deltaY));
    } else if (e.deltaY > 0) {
      this._dollyOut(this._getZoomScale(e.deltaY));
    }
    this.update();
  }
  _handleKeyDown(e) {
    let t = false;
    switch (e.code) {
      case this.keys.UP:
        if (e.ctrlKey || e.metaKey || e.shiftKey) {
          if (this.enableRotate) {
            this._rotateUp(d * this.keyRotateSpeed / this.domElement.clientHeight);
          }
        } else if (this.enablePan) {
          this._pan(0, this.keyPanSpeed);
        }
        t = true;
        break;
      case this.keys.BOTTOM:
        if (e.ctrlKey || e.metaKey || e.shiftKey) {
          if (this.enableRotate) {
            this._rotateUp(-d * this.keyRotateSpeed / this.domElement.clientHeight);
          }
        } else if (this.enablePan) {
          this._pan(0, -this.keyPanSpeed);
        }
        t = true;
        break;
      case this.keys.LEFT:
        if (e.ctrlKey || e.metaKey || e.shiftKey) {
          if (this.enableRotate) {
            this._rotateLeft(d * this.keyRotateSpeed / this.domElement.clientHeight);
          }
        } else if (this.enablePan) {
          this._pan(this.keyPanSpeed, 0);
        }
        t = true;
        break;
      case this.keys.RIGHT:
        if (e.ctrlKey || e.metaKey || e.shiftKey) {
          if (this.enableRotate) {
            this._rotateLeft(-d * this.keyRotateSpeed / this.domElement.clientHeight);
          }
        } else if (this.enablePan) {
          this._pan(-this.keyPanSpeed, 0);
        }
        t = true;
    }
    if (t) {
      e.preventDefault();
      this.update();
    }
  }
  _handleTouchStartRotate(e) {
    if (this._pointers.length === 1) {
      this._rotateStart.set(e.pageX, e.pageY);
    } else {
      const t = this._getSecondPointerPosition(e);
      const n = (e.pageX + t.x) * 0.5;
      const i = (e.pageY + t.y) * 0.5;
      this._rotateStart.set(n, i);
    }
  }
  _handleTouchStartPan(e) {
    if (this._pointers.length === 1) {
      this._panStart.set(e.pageX, e.pageY);
    } else {
      const t = this._getSecondPointerPosition(e);
      const n = (e.pageX + t.x) * 0.5;
      const i = (e.pageY + t.y) * 0.5;
      this._panStart.set(n, i);
    }
  }
  _handleTouchStartDolly(e) {
    const t = this._getSecondPointerPosition(e);
    const n = e.pageX - t.x;
    const i = e.pageY - t.y;
    const r = Math.sqrt(n * n + i * i);
    this._dollyStart.set(0, r);
  }
  _handleTouchStartDollyPan(e) {
    if (this.enableZoom) {
      this._handleTouchStartDolly(e);
    }
    if (this.enablePan) {
      this._handleTouchStartPan(e);
    }
  }
  _handleTouchStartDollyRotate(e) {
    if (this.enableZoom) {
      this._handleTouchStartDolly(e);
    }
    if (this.enableRotate) {
      this._handleTouchStartRotate(e);
    }
  }
  _handleTouchMoveRotate(e) {
    if (this._pointers.length == 1) {
      this._rotateEnd.set(e.pageX, e.pageY);
    } else {
      const t = this._getSecondPointerPosition(e);
      const n = (e.pageX + t.x) * 0.5;
      const i = (e.pageY + t.y) * 0.5;
      this._rotateEnd.set(n, i);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft(d * this._rotateDelta.x / t.clientHeight);
    this._rotateUp(d * this._rotateDelta.y / t.clientHeight);
    this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(e) {
    if (this._pointers.length === 1) {
      this._panEnd.set(e.pageX, e.pageY);
    } else {
      const t = this._getSecondPointerPosition(e);
      const n = (e.pageX + t.x) * 0.5;
      const i = (e.pageY + t.y) * 0.5;
      this._panEnd.set(n, i);
    }
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed);
    this._pan(this._panDelta.x, this._panDelta.y);
    this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(e) {
    const t = this._getSecondPointerPosition(e);
    const n = e.pageX - t.x;
    const i = e.pageY - t.y;
    const r = Math.sqrt(n * n + i * i);
    this._dollyEnd.set(0, r);
    this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed));
    this._dollyOut(this._dollyDelta.y);
    this._dollyStart.copy(this._dollyEnd);
    const a = (e.pageX + t.x) * 0.5;
    const s = (e.pageY + t.y) * 0.5;
    this._updateZoomParameters(a, s);
  }
  _handleTouchMoveDollyPan(e) {
    if (this.enableZoom) {
      this._handleTouchMoveDolly(e);
    }
    if (this.enablePan) {
      this._handleTouchMovePan(e);
    }
  }
  _handleTouchMoveDollyRotate(e) {
    if (this.enableZoom) {
      this._handleTouchMoveDolly(e);
    }
    if (this.enableRotate) {
      this._handleTouchMoveRotate(e);
    }
  }
  _addPointer(e) {
    this._pointers.push(e.pointerId);
  }
  _removePointer(e) {
    delete this._pointerPositions[e.pointerId];
    for (let t = 0; t < this._pointers.length; t++) {
      if (this._pointers[t] == e.pointerId) {
        this._pointers.splice(t, 1);
        return;
      }
    }
  }
  _isTrackingPointer(e) {
    for (let t = 0; t < this._pointers.length; t++) {
      if (this._pointers[t] == e.pointerId) {
        return true;
      }
    }
    return false;
  }
  _trackPointer(e) {
    let t = this._pointerPositions[e.pointerId];
    if (t === undefined) {
      t = new i.I9Y();
      this._pointerPositions[e.pointerId] = t;
    }
    t.set(e.pageX, e.pageY);
  }
  _getSecondPointerPosition(e) {
    const t = e.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[t];
  }
  _customWheelEvent(e) {
    const t = e.deltaMode;
    const n = {
      clientX: e.clientX,
      clientY: e.clientY,
      deltaY: e.deltaY
    };
    switch (t) {
      case 1:
        n.deltaY *= 16;
        break;
      case 2:
        n.deltaY *= 100;
    }
    if (e.ctrlKey && !this._controlActive) {
      n.deltaY *= 10;
    }
    return n;
  }
}
function x(e) {
  if (this.enabled !== false) {
    if (this._pointers.length === 0) {
      this.domElement.setPointerCapture(e.pointerId);
      this.domElement.addEventListener("pointermove", this._onPointerMove);
      this.domElement.addEventListener("pointerup", this._onPointerUp);
    }
    if (!this._isTrackingPointer(e)) {
      this._addPointer(e);
      if (e.pointerType === "touch") {
        this._onTouchStart(e);
      } else {
        this._onMouseDown(e);
      }
    }
  }
}
function S(e) {
  if (this.enabled !== false) {
    if (e.pointerType === "touch") {
      this._onTouchMove(e);
    } else {
      this._onMouseMove(e);
    }
  }
}
function k(e) {
  this._removePointer(e);
  switch (this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(e.pointerId);
      this.domElement.removeEventListener("pointermove", this._onPointerMove);
      this.domElement.removeEventListener("pointerup", this._onPointerUp);
      this.dispatchEvent(s);
      this.state = u;
      break;
    case 1:
      const t = this._pointers[0];
      const n = this._pointerPositions[t];
      this._onTouchStart({
        pointerId: t,
        pageX: n.x,
        pageY: n.y
      });
  }
}
function T(e) {
  let t;
  switch (e.button) {
    case 0:
      t = this.mouseButtons.LEFT;
      break;
    case 1:
      t = this.mouseButtons.MIDDLE;
      break;
    case 2:
      t = this.mouseButtons.RIGHT;
      break;
    default:
      t = -1;
  }
  switch (t) {
    case i.kBv.DOLLY:
      if (this.enableZoom === false) {
        return;
      }
      this._handleMouseDownDolly(e);
      this.state = p;
      break;
    case i.kBv.ROTATE:
      if (e.ctrlKey || e.metaKey || e.shiftKey) {
        if (this.enablePan === false) {
          return;
        }
        this._handleMouseDownPan(e);
        this.state = g;
      } else {
        if (this.enableRotate === false) {
          return;
        }
        this._handleMouseDownRotate(e);
        this.state = f;
      }
      break;
    case i.kBv.PAN:
      if (e.ctrlKey || e.metaKey || e.shiftKey) {
        if (this.enableRotate === false) {
          return;
        }
        this._handleMouseDownRotate(e);
        this.state = f;
      } else {
        if (this.enablePan === false) {
          return;
        }
        this._handleMouseDownPan(e);
        this.state = g;
      }
      break;
    default:
      this.state = u;
  }
  if (this.state !== u) {
    this.dispatchEvent(a);
  }
}
function E(e) {
  switch (this.state) {
    case f:
      if (this.enableRotate === false) {
        return;
      }
      this._handleMouseMoveRotate(e);
      break;
    case p:
      if (this.enableZoom === false) {
        return;
      }
      this._handleMouseMoveDolly(e);
      break;
    case g:
      if (this.enablePan === false) {
        return;
      }
      this._handleMouseMovePan(e);
  }
}
function M(e) {
  if (this.enabled !== false && this.enableZoom !== false && this.state === u) {
    e.preventDefault();
    this.dispatchEvent(a);
    this._handleMouseWheel(this._customWheelEvent(e));
    this.dispatchEvent(s);
  }
}
function _(e) {
  if (this.enabled !== false) {
    this._handleKeyDown(e);
  }
}
function C(e) {
  this._trackPointer(e);
  switch (this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case i.wtR.ROTATE:
          if (this.enableRotate === false) {
            return;
          }
          this._handleTouchStartRotate(e);
          this.state = m;
          break;
        case i.wtR.PAN:
          if (this.enablePan === false) {
            return;
          }
          this._handleTouchStartPan(e);
          this.state = A;
          break;
        default:
          this.state = u;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case i.wtR.DOLLY_PAN:
          if (this.enableZoom === false && this.enablePan === false) {
            return;
          }
          this._handleTouchStartDollyPan(e);
          this.state = v;
          break;
        case i.wtR.DOLLY_ROTATE:
          if (this.enableZoom === false && this.enableRotate === false) {
            return;
          }
          this._handleTouchStartDollyRotate(e);
          this.state = b;
          break;
        default:
          this.state = u;
      }
      break;
    default:
      this.state = u;
  }
  if (this.state !== u) {
    this.dispatchEvent(a);
  }
}
function R(e) {
  this._trackPointer(e);
  switch (this.state) {
    case m:
      if (this.enableRotate === false) {
        return;
      }
      this._handleTouchMoveRotate(e);
      this.update();
      break;
    case A:
      if (this.enablePan === false) {
        return;
      }
      this._handleTouchMovePan(e);
      this.update();
      break;
    case v:
      if (this.enableZoom === false && this.enablePan === false) {
        return;
      }
      this._handleTouchMoveDollyPan(e);
      this.update();
      break;
    case b:
      if (this.enableZoom === false && this.enableRotate === false) {
        return;
      }
      this._handleTouchMoveDollyRotate(e);
      this.update();
      break;
    default:
      this.state = u;
  }
}
function P(e) {
  if (this.enabled !== false) {
    e.preventDefault();
  }
}
function I(e) {
  if (e.key === "Control") {
    this._controlActive = true;
    this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, {
      passive: true,
      capture: true
    });
  }
}
function L(e) {
  if (e.key === "Control") {
    this._controlActive = false;
    this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, {
      passive: true,
      capture: true
    });
  }
}