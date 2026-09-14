var i = require("./4922.js");
const r = new WeakMap();
export class Z extends i.aHM {
  constructor(e) {
    super(e);
    this.decoderPath = "";
    this.decoderConfig = {};
    this.decoderBinary = null;
    this.decoderPending = null;
    this.workerLimit = 4;
    this.workerPool = [];
    this.workerNextTaskID = 1;
    this.workerSourceURL = "";
    this.defaultAttributeIDs = {
      position: "POSITION",
      normal: "NORMAL",
      color: "COLOR",
      uv: "TEX_COORD"
    };
    this.defaultAttributeTypes = {
      position: "Float32Array",
      normal: "Float32Array",
      color: "Float32Array",
      uv: "Float32Array"
    };
  }
  setDecoderPath(e) {
    this.decoderPath = e;
    return this;
  }
  setDecoderConfig(e) {
    this.decoderConfig = e;
    return this;
  }
  setWorkerLimit(e) {
    this.workerLimit = e;
    return this;
  }
  load(e, t, n, r) {
    const a = new i.Y9S(this.manager);
    a.setPath(this.path);
    a.setResponseType("arraybuffer");
    a.setRequestHeader(this.requestHeader);
    a.setWithCredentials(this.withCredentials);
    a.load(e, e => {
      this.parse(e, t, r);
    }, n, r);
  }
  parse(e, t, n = () => {}) {
    this.decodeDracoFile(e, t, null, null, i.er$, n).catch(n);
  }
  decodeDracoFile(e, t, n, r, a = i.Zr2, s = () => {}) {
    const o = {
      attributeIDs: n || this.defaultAttributeIDs,
      attributeTypes: r || this.defaultAttributeTypes,
      useUniqueIDs: !!n,
      vertexColorSpace: a
    };
    return this.decodeGeometry(e, o).then(t).catch(s);
  }
  decodeGeometry(e, t) {
    const n = JSON.stringify(t);
    if (r.has(e)) {
      const t = r.get(e);
      if (t.key === n) {
        return t.promise;
      }
      if (e.byteLength === 0) {
        throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.");
      }
    }
    let i;
    const a = this.workerNextTaskID++;
    const s = e.byteLength;
    const o = this._getWorker(a, s).then(n => {
      i = n;
      return new Promise((n, r) => {
        i._callbacks[a] = {
          resolve: n,
          reject: r
        };
        i.postMessage({
          type: "decode",
          id: a,
          taskConfig: t,
          buffer: e
        }, [e]);
      });
    }).then(e => this._createGeometry(e.geometry));
    o.catch(() => true).then(() => {
      if (i && a) {
        this._releaseTask(i, a);
      }
    });
    r.set(e, {
      key: n,
      promise: o
    });
    return o;
  }
  _createGeometry(e) {
    const t = new i.LoY();
    if (e.index) {
      t.setIndex(new i.THS(e.index.array, 1));
    }
    for (let n = 0; n < e.attributes.length; n++) {
      const {
        name: r,
        array: a,
        itemSize: s,
        stride: o,
        vertexColorSpace: l
      } = e.attributes[n];
      let c;
      if (s === o) {
        c = new i.THS(a, s);
      } else {
        const e = new i.eB$(a, o);
        c = new i.eHs(e, s, 0);
      }
      if (r === "color") {
        this._assignVertexColorSpace(c, l);
        c.normalized = a instanceof Float32Array == false;
      }
      t.setAttribute(r, c);
    }
    return t;
  }
  _assignVertexColorSpace(e, t) {
    if (t !== i.er$) {
      return;
    }
    const n = new i.Q1f();
    for (let t = 0, r = e.count; t < r; t++) {
      n.fromBufferAttribute(e, t);
      i.ppV.colorSpaceToWorking(n, i.er$);
      e.setXYZ(t, n.r, n.g, n.b);
    }
  }
  _loadLibrary(e, t) {
    const n = new i.Y9S(this.manager);
    n.setPath(this.decoderPath);
    n.setResponseType(t);
    n.setWithCredentials(this.withCredentials);
    return new Promise((t, i) => {
      n.load(e, t, undefined, i);
    });
  }
  preload() {
    this._initDecoder();
    return this;
  }
  _initDecoder() {
    if (this.decoderPending) {
      return this.decoderPending;
    }
    const e = typeof WebAssembly != "object" || this.decoderConfig.type === "js";
    const t = [];
    if (e) {
      t.push(this._loadLibrary("draco_decoder.js", "text"));
    } else {
      t.push(this._loadLibrary("draco_wasm_wrapper.js", "text"));
      t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"));
    }
    this.decoderPending = Promise.all(t).then(t => {
      const n = t[0];
      if (!e) {
        this.decoderConfig.wasmBinary = t[1];
      }
      const i = s.toString();
      const r = ["/* draco decoder */", n, "", "/* worker */", i.substring(i.indexOf("{") + 1, i.lastIndexOf("}"))].join("\n");
      this.workerSourceURL = URL.createObjectURL(new Blob([r]));
    });
    return this.decoderPending;
  }
  _getWorker(e, t) {
    return this._initDecoder().then(() => {
      if (this.workerPool.length < this.workerLimit) {
        const e = new Worker(this.workerSourceURL);
        e._callbacks = {};
        e._taskCosts = {};
        e._taskLoad = 0;
        e.postMessage({
          type: "init",
          decoderConfig: this.decoderConfig
        });
        e.onmessage = function (t) {
          const n = t.data;
          switch (n.type) {
            case "decode":
              e._callbacks[n.id].resolve(n);
              break;
            case "error":
              e._callbacks[n.id].reject(n);
              break;
            default:
              console.error("THREE.DRACOLoader: Unexpected message, \"" + n.type + "\"");
          }
        };
        this.workerPool.push(e);
      } else {
        this.workerPool.sort(function (e, t) {
          if (e._taskLoad > t._taskLoad) {
            return -1;
          } else {
            return 1;
          }
        });
      }
      const n = this.workerPool[this.workerPool.length - 1];
      n._taskCosts[e] = t;
      n._taskLoad += t;
      return n;
    });
  }
  _releaseTask(e, t) {
    e._taskLoad -= e._taskCosts[t];
    delete e._callbacks[t];
    delete e._taskCosts[t];
  }
  debug() {
    console.log("Task load: ", this.workerPool.map(e => e._taskLoad));
  }
  dispose() {
    for (let e = 0; e < this.workerPool.length; ++e) {
      this.workerPool[e].terminate();
    }
    this.workerPool.length = 0;
    if (this.workerSourceURL !== "") {
      URL.revokeObjectURL(this.workerSourceURL);
    }
    return this;
  }
}
function s() {
  let e;
  let t;
  function n(e, t, n, i, r, a) {
    const s = n.num_points();
    const o = a.num_components();
    const l = function (e, t) {
      switch (t) {
        case Float32Array:
          return e.DT_FLOAT32;
        case Int8Array:
          return e.DT_INT8;
        case Int16Array:
          return e.DT_INT16;
        case Int32Array:
          return e.DT_INT32;
        case Uint8Array:
          return e.DT_UINT8;
        case Uint16Array:
          return e.DT_UINT16;
        case Uint32Array:
          return e.DT_UINT32;
      }
    }(e, r);
    const c = o * r.BYTES_PER_ELEMENT;
    const h = Math.ceil(c / 4) * 4;
    const d = h / r.BYTES_PER_ELEMENT;
    const u = s * c;
    const f = s * h;
    const p = e._malloc(u);
    t.GetAttributeDataArrayForAllPoints(n, a, l, u, p);
    const g = new r(e.HEAPF32.buffer, p, u / r.BYTES_PER_ELEMENT);
    let m;
    if (c === h) {
      m = g.slice();
    } else {
      m = new r(f / r.BYTES_PER_ELEMENT);
      let e = 0;
      for (let t = 0, n = g.length; t < n; t++) {
        for (let n = 0; n < o; n++) {
          m[e + n] = g[t * o + n];
        }
        e += d;
      }
    }
    e._free(p);
    return {
      name: i,
      count: s,
      itemSize: o,
      array: m,
      stride: d
    };
  }
  onmessage = function (i) {
    const r = i.data;
    switch (r.type) {
      case "init":
        e = r.decoderConfig;
        t = new Promise(function (t) {
          e.onModuleLoaded = function (e) {
            t({
              draco: e
            });
          };
          DracoDecoderModule(e);
        });
        break;
      case "decode":
        const i = r.buffer;
        const a = r.taskConfig;
        t.then(e => {
          const t = e.draco;
          const s = new t.Decoder();
          try {
            const e = function (e, t, i, r) {
              const a = r.attributeIDs;
              const s = r.attributeTypes;
              let o;
              let l;
              const c = t.GetEncodedGeometryType(i);
              if (c === e.TRIANGULAR_MESH) {
                o = new e.Mesh();
                l = t.DecodeArrayToMesh(i, i.byteLength, o);
              } else {
                if (c !== e.POINT_CLOUD) {
                  throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
                }
                o = new e.PointCloud();
                l = t.DecodeArrayToPointCloud(i, i.byteLength, o);
              }
              if (!l.ok() || o.ptr === 0) {
                throw new Error("THREE.DRACOLoader: Decoding failed: " + l.error_msg());
              }
              const h = {
                index: null,
                attributes: []
              };
              for (const i in a) {
                const l = self[s[i]];
                let c;
                let d;
                if (r.useUniqueIDs) {
                  d = a[i];
                  c = t.GetAttributeByUniqueId(o, d);
                } else {
                  d = t.GetAttributeId(o, e[a[i]]);
                  if (d === -1) {
                    continue;
                  }
                  c = t.GetAttribute(o, d);
                }
                const u = n(e, t, o, i, l, c);
                if (i === "color") {
                  u.vertexColorSpace = r.vertexColorSpace;
                }
                h.attributes.push(u);
              }
              if (c === e.TRIANGULAR_MESH) {
                h.index = function (e, t, n) {
                  const i = n.num_faces();
                  const r = i * 3;
                  const a = r * 4;
                  const s = e._malloc(a);
                  t.GetTrianglesUInt32Array(n, a, s);
                  const o = new Uint32Array(e.HEAPF32.buffer, s, r).slice();
                  e._free(s);
                  return {
                    array: o,
                    itemSize: 1
                  };
                }(e, t, o);
              }
              e.destroy(o);
              return h;
            }(t, s, new Int8Array(i), a);
            const o = e.attributes.map(e => e.array.buffer);
            if (e.index) {
              o.push(e.index.array.buffer);
            }
            self.postMessage({
              type: "decode",
              id: r.id,
              geometry: e
            }, o);
          } catch (e) {
            console.error(e);
            self.postMessage({
              type: "error",
              id: r.id,
              error: e.message
            });
          } finally {
            t.destroy(s);
          }
        });
    }
  };
}