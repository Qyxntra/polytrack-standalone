var i = require("./4922.js");
var r = require("./1566.js");
export class B extends i.aHM {
  constructor(e) {
    super(e);
    this.dracoLoader = null;
    this.ktx2Loader = null;
    this.meshoptDecoder = null;
    this.pluginCallbacks = [];
    this.register(function (e) {
      return new d(e);
    });
    this.register(function (e) {
      return new u(e);
    });
    this.register(function (e) {
      return new w(e);
    });
    this.register(function (e) {
      return new x(e);
    });
    this.register(function (e) {
      return new S(e);
    });
    this.register(function (e) {
      return new p(e);
    });
    this.register(function (e) {
      return new g(e);
    });
    this.register(function (e) {
      return new m(e);
    });
    this.register(function (e) {
      return new A(e);
    });
    this.register(function (e) {
      return new h(e);
    });
    this.register(function (e) {
      return new v(e);
    });
    this.register(function (e) {
      return new f(e);
    });
    this.register(function (e) {
      return new y(e);
    });
    this.register(function (e) {
      return new b(e);
    });
    this.register(function (e) {
      return new l(e);
    });
    this.register(function (e) {
      return new k(e);
    });
    this.register(function (e) {
      return new T(e);
    });
  }
  load(e, t, n, r) {
    const a = this;
    let s;
    if (this.resourcePath !== "") {
      s = this.resourcePath;
    } else if (this.path !== "") {
      const t = i.r6x.extractUrlBase(e);
      s = i.r6x.resolveURL(t, this.path);
    } else {
      s = i.r6x.extractUrlBase(e);
    }
    this.manager.itemStart(e);
    const o = function (t) {
      if (r) {
        r(t);
      } else {
        console.error(t);
      }
      a.manager.itemError(e);
      a.manager.itemEnd(e);
    };
    const l = new i.Y9S(this.manager);
    l.setPath(this.path);
    l.setResponseType("arraybuffer");
    l.setRequestHeader(this.requestHeader);
    l.setWithCredentials(this.withCredentials);
    l.load(e, function (n) {
      try {
        a.parse(n, s, function (n) {
          t(n);
          a.manager.itemEnd(e);
        }, o);
      } catch (e) {
        o(e);
      }
    }, n, o);
  }
  setDRACOLoader(e) {
    this.dracoLoader = e;
    return this;
  }
  setKTX2Loader(e) {
    this.ktx2Loader = e;
    return this;
  }
  setMeshoptDecoder(e) {
    this.meshoptDecoder = e;
    return this;
  }
  register(e) {
    if (this.pluginCallbacks.indexOf(e) === -1) {
      this.pluginCallbacks.push(e);
    }
    return this;
  }
  unregister(e) {
    if (this.pluginCallbacks.indexOf(e) !== -1) {
      this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1);
    }
    return this;
  }
  parse(e, t, n, i) {
    let r;
    const a = {};
    const s = {};
    const l = new TextDecoder();
    if (typeof e == "string") {
      r = JSON.parse(e);
    } else if (e instanceof ArrayBuffer) {
      if (l.decode(new Uint8Array(e, 0, 4)) === E) {
        try {
          a[o.KHR_BINARY_GLTF] = new C(e);
        } catch (e) {
          if (i) {
            i(e);
          }
          return;
        }
        r = JSON.parse(a[o.KHR_BINARY_GLTF].content);
      } else {
        r = JSON.parse(l.decode(e));
      }
    } else {
      r = e;
    }
    if (r.asset === undefined || r.asset.version[0] < 2) {
      if (i) {
        i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      }
      return;
    }
    const h = new ee(r, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    h.fileLoader.setRequestHeader(this.requestHeader);
    for (let e = 0; e < this.pluginCallbacks.length; e++) {
      const t = this.pluginCallbacks[e](h);
      if (!t.name) {
        console.error("THREE.GLTFLoader: Invalid plugin found: missing name");
      }
      s[t.name] = t;
      a[t.name] = true;
    }
    if (r.extensionsUsed) {
      for (let e = 0; e < r.extensionsUsed.length; ++e) {
        const t = r.extensionsUsed[e];
        const n = r.extensionsRequired || [];
        switch (t) {
          case o.KHR_MATERIALS_UNLIT:
            a[t] = new c();
            break;
          case o.KHR_DRACO_MESH_COMPRESSION:
            a[t] = new R(r, this.dracoLoader);
            break;
          case o.KHR_TEXTURE_TRANSFORM:
            a[t] = new P();
            break;
          case o.KHR_MESH_QUANTIZATION:
            a[t] = new I();
            break;
          default:
            if (n.indexOf(t) >= 0 && s[t] === undefined) {
              console.warn("THREE.GLTFLoader: Unknown extension \"" + t + "\".");
            }
        }
      }
    }
    h.setExtensions(a);
    h.setPlugins(s);
    h.parse(n, i);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function (i, r) {
      n.parse(e, t, i, r);
    });
  }
}
function s() {
  let e = {};
  return {
    get: function (t) {
      return e[t];
    },
    add: function (t, n) {
      e[t] = n;
    },
    remove: function (t) {
      delete e[t];
    },
    removeAll: function () {
      e = {};
    }
  };
}
const o = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_MATERIALS_BUMP: "EXT_materials_bump",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class l {
  constructor(e) {
    this.parser = e;
    this.name = o.KHR_LIGHTS_PUNCTUAL;
    this.cache = {
      refs: {},
      uses: {}
    };
  }
  _markDefs() {
    const e = this.parser;
    const t = this.parser.json.nodes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const i = t[n];
      if (i.extensions && i.extensions[this.name] && i.extensions[this.name].light !== undefined) {
        e._addNodeRef(this.cache, i.extensions[this.name].light);
      }
    }
  }
  _loadLight(e) {
    const t = this.parser;
    const n = "light:" + e;
    let r = t.cache.get(n);
    if (r) {
      return r;
    }
    const a = t.json;
    const s = ((a.extensions && a.extensions[this.name] || {}).lights || [])[e];
    let o;
    const l = new i.Q1f(16777215);
    if (s.color !== undefined) {
      l.setRGB(s.color[0], s.color[1], s.color[2], i.Zr2);
    }
    const c = s.range !== undefined ? s.range : 0;
    switch (s.type) {
      case "directional":
        o = new i.ZyN(l);
        o.target.position.set(0, 0, -1);
        o.add(o.target);
        break;
      case "point":
        o = new i.HiM(l);
        o.distance = c;
        break;
      case "spot":
        o = new i.nCl(l);
        o.distance = c;
        s.spot = s.spot || {};
        s.spot.innerConeAngle = s.spot.innerConeAngle !== undefined ? s.spot.innerConeAngle : 0;
        s.spot.outerConeAngle = s.spot.outerConeAngle !== undefined ? s.spot.outerConeAngle : Math.PI / 4;
        o.angle = s.spot.outerConeAngle;
        o.penumbra = 1 - s.spot.innerConeAngle / s.spot.outerConeAngle;
        o.target.position.set(0, 0, -1);
        o.add(o.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + s.type);
    }
    o.position.set(0, 0, 0);
    Q(o, s);
    if (s.intensity !== undefined) {
      o.intensity = s.intensity;
    }
    o.name = t.createUniqueName(s.name || "light_" + e);
    r = Promise.resolve(o);
    t.cache.add(n, r);
    return r;
  }
  getDependency(e, t) {
    if (e === "light") {
      return this._loadLight(t);
    }
  }
  createNodeAttachment(e) {
    const t = this;
    const n = this.parser;
    const i = n.json.nodes[e];
    const r = (i.extensions && i.extensions[this.name] || {}).light;
    if (r === undefined) {
      return null;
    } else {
      return this._loadLight(r).then(function (e) {
        return n._getNodeRef(t.cache, r, e);
      });
    }
  }
}
class c {
  constructor() {
    this.name = o.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return i.V9B;
  }
  extendParams(e, t, n) {
    const r = [];
    e.color = new i.Q1f(1, 1, 1);
    e.opacity = 1;
    const a = t.pbrMetallicRoughness;
    if (a) {
      if (Array.isArray(a.baseColorFactor)) {
        const t = a.baseColorFactor;
        e.color.setRGB(t[0], t[1], t[2], i.Zr2);
        e.opacity = t[3];
      }
      if (a.baseColorTexture !== undefined) {
        r.push(n.assignTexture(e, "map", a.baseColorTexture, i.er$));
      }
    }
    return Promise.all(r);
  }
}
class h {
  constructor(e) {
    this.parser = e;
    this.name = o.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const n = this.parser.json.materials[e];
    if (!n.extensions || !n.extensions[this.name]) {
      return Promise.resolve();
    }
    const i = n.extensions[this.name].emissiveStrength;
    if (i !== undefined) {
      t.emissiveIntensity = i;
    }
    return Promise.resolve();
  }
}
class d {
  constructor(e) {
    this.parser = e;
    this.name = o.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const t = this.parser.json.materials[e];
    if (t.extensions && t.extensions[this.name]) {
      return i.uSd;
    } else {
      return null;
    }
  }
  extendMaterialParams(e, t) {
    const n = this.parser;
    const r = n.json.materials[e];
    if (!r.extensions || !r.extensions[this.name]) {
      return Promise.resolve();
    }
    const a = [];
    const s = r.extensions[this.name];
    if (s.clearcoatFactor !== undefined) {
      t.clearcoat = s.clearcoatFactor;
    }
    if (s.clearcoatTexture !== undefined) {
      a.push(n.assignTexture(t, "clearcoatMap", s.clearcoatTexture));
    }
    if (s.clearcoatRoughnessFactor !== undefined) {
      t.clearcoatRoughness = s.clearcoatRoughnessFactor;
    }
    if (s.clearcoatRoughnessTexture !== undefined) {
      a.push(n.assignTexture(t, "clearcoatRoughnessMap", s.clearcoatRoughnessTexture));
    }
    if (s.clearcoatNormalTexture !== undefined && (a.push(n.assignTexture(t, "clearcoatNormalMap", s.clearcoatNormalTexture)), s.clearcoatNormalTexture.scale !== undefined)) {
      const e = s.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new i.I9Y(e, e);
    }
    return Promise.all(a);
  }
}
class u {
  constructor(e) {
    this.parser = e;
    this.name = o.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(e) {
    const t = this.parser.json.materials[e];
    if (t.extensions && t.extensions[this.name]) {
      return i.uSd;
    } else {
      return null;
    }
  }
  extendMaterialParams(e, t) {
    const n = this.parser.json.materials[e];
    if (!n.extensions || !n.extensions[this.name]) {
      return Promise.resolve();
    }
    const i = n.extensions[this.name];
    t.dispersion = i.dispersion !== undefined ? i.dispersion : 0;
    return Promise.resolve();
  }
}
class f {
  constructor(e) {
    this.parser = e;
    this.name = o.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const t = this.parser.json.materials[e];
    if (t.extensions && t.extensions[this.name]) {
      return i.uSd;
    } else {
      return null;
    }
  }
  extendMaterialParams(e, t) {
    const n = this.parser;
    const i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) {
      return Promise.resolve();
    }
    const r = [];
    const a = i.extensions[this.name];
    if (a.iridescenceFactor !== undefined) {
      t.iridescence = a.iridescenceFactor;
    }
    if (a.iridescenceTexture !== undefined) {
      r.push(n.assignTexture(t, "iridescenceMap", a.iridescenceTexture));
    }
    if (a.iridescenceIor !== undefined) {
      t.iridescenceIOR = a.iridescenceIor;
    }
    if (t.iridescenceThicknessRange === undefined) {
      t.iridescenceThicknessRange = [100, 400];
    }
    if (a.iridescenceThicknessMinimum !== undefined) {
      t.iridescenceThicknessRange[0] = a.iridescenceThicknessMinimum;
    }
    if (a.iridescenceThicknessMaximum !== undefined) {
      t.iridescenceThicknessRange[1] = a.iridescenceThicknessMaximum;
    }
    if (a.iridescenceThicknessTexture !== undefined) {
      r.push(n.assignTexture(t, "iridescenceThicknessMap", a.iridescenceThicknessTexture));
    }
    return Promise.all(r);
  }
}
class p {
  constructor(e) {
    this.parser = e;
    this.name = o.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const t = this.parser.json.materials[e];
    if (t.extensions && t.extensions[this.name]) {
      return i.uSd;
    } else {
      return null;
    }
  }
  extendMaterialParams(e, t) {
    const n = this.parser;
    const r = n.json.materials[e];
    if (!r.extensions || !r.extensions[this.name]) {
      return Promise.resolve();
    }
    const a = [];
    t.sheenColor = new i.Q1f(0, 0, 0);
    t.sheenRoughness = 0;
    t.sheen = 1;
    const s = r.extensions[this.name];
    if (s.sheenColorFactor !== undefined) {
      const e = s.sheenColorFactor;
      t.sheenColor.setRGB(e[0], e[1], e[2], i.Zr2);
    }
    if (s.sheenRoughnessFactor !== undefined) {
      t.sheenRoughness = s.sheenRoughnessFactor;
    }
    if (s.sheenColorTexture !== undefined) {
      a.push(n.assignTexture(t, "sheenColorMap", s.sheenColorTexture, i.er$));
    }
    if (s.sheenRoughnessTexture !== undefined) {
      a.push(n.assignTexture(t, "sheenRoughnessMap", s.sheenRoughnessTexture));
    }
    return Promise.all(a);
  }
}
class g {
  constructor(e) {
    this.parser = e;
    this.name = o.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const t = this.parser.json.materials[e];
    if (t.extensions && t.extensions[this.name]) {
      return i.uSd;
    } else {
      return null;
    }
  }
  extendMaterialParams(e, t) {
    const n = this.parser;
    const i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) {
      return Promise.resolve();
    }
    const r = [];
    const a = i.extensions[this.name];
    if (a.transmissionFactor !== undefined) {
      t.transmission = a.transmissionFactor;
    }
    if (a.transmissionTexture !== undefined) {
      r.push(n.assignTexture(t, "transmissionMap", a.transmissionTexture));
    }
    return Promise.all(r);
  }
}
class m {
  constructor(e) {
    this.parser = e;
    this.name = o.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const t = this.parser.json.materials[e];
    if (t.extensions && t.extensions[this.name]) {
      return i.uSd;
    } else {
      return null;
    }
  }
  extendMaterialParams(e, t) {
    const n = this.parser;
    const r = n.json.materials[e];
    if (!r.extensions || !r.extensions[this.name]) {
      return Promise.resolve();
    }
    const a = [];
    const s = r.extensions[this.name];
    t.thickness = s.thicknessFactor !== undefined ? s.thicknessFactor : 0;
    if (s.thicknessTexture !== undefined) {
      a.push(n.assignTexture(t, "thicknessMap", s.thicknessTexture));
    }
    t.attenuationDistance = s.attenuationDistance || Infinity;
    const o = s.attenuationColor || [1, 1, 1];
    t.attenuationColor = new i.Q1f().setRGB(o[0], o[1], o[2], i.Zr2);
    return Promise.all(a);
  }
}
class A {
  constructor(e) {
    this.parser = e;
    this.name = o.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const t = this.parser.json.materials[e];
    if (t.extensions && t.extensions[this.name]) {
      return i.uSd;
    } else {
      return null;
    }
  }
  extendMaterialParams(e, t) {
    const n = this.parser.json.materials[e];
    if (!n.extensions || !n.extensions[this.name]) {
      return Promise.resolve();
    }
    const i = n.extensions[this.name];
    t.ior = i.ior !== undefined ? i.ior : 1.5;
    return Promise.resolve();
  }
}
class v {
  constructor(e) {
    this.parser = e;
    this.name = o.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const t = this.parser.json.materials[e];
    if (t.extensions && t.extensions[this.name]) {
      return i.uSd;
    } else {
      return null;
    }
  }
  extendMaterialParams(e, t) {
    const n = this.parser;
    const r = n.json.materials[e];
    if (!r.extensions || !r.extensions[this.name]) {
      return Promise.resolve();
    }
    const a = [];
    const s = r.extensions[this.name];
    t.specularIntensity = s.specularFactor !== undefined ? s.specularFactor : 1;
    if (s.specularTexture !== undefined) {
      a.push(n.assignTexture(t, "specularIntensityMap", s.specularTexture));
    }
    const o = s.specularColorFactor || [1, 1, 1];
    t.specularColor = new i.Q1f().setRGB(o[0], o[1], o[2], i.Zr2);
    if (s.specularColorTexture !== undefined) {
      a.push(n.assignTexture(t, "specularColorMap", s.specularColorTexture, i.er$));
    }
    return Promise.all(a);
  }
}
class b {
  constructor(e) {
    this.parser = e;
    this.name = o.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    const t = this.parser.json.materials[e];
    if (t.extensions && t.extensions[this.name]) {
      return i.uSd;
    } else {
      return null;
    }
  }
  extendMaterialParams(e, t) {
    const n = this.parser;
    const i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) {
      return Promise.resolve();
    }
    const r = [];
    const a = i.extensions[this.name];
    t.bumpScale = a.bumpFactor !== undefined ? a.bumpFactor : 1;
    if (a.bumpTexture !== undefined) {
      r.push(n.assignTexture(t, "bumpMap", a.bumpTexture));
    }
    return Promise.all(r);
  }
}
class y {
  constructor(e) {
    this.parser = e;
    this.name = o.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const t = this.parser.json.materials[e];
    if (t.extensions && t.extensions[this.name]) {
      return i.uSd;
    } else {
      return null;
    }
  }
  extendMaterialParams(e, t) {
    const n = this.parser;
    const i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) {
      return Promise.resolve();
    }
    const r = [];
    const a = i.extensions[this.name];
    if (a.anisotropyStrength !== undefined) {
      t.anisotropy = a.anisotropyStrength;
    }
    if (a.anisotropyRotation !== undefined) {
      t.anisotropyRotation = a.anisotropyRotation;
    }
    if (a.anisotropyTexture !== undefined) {
      r.push(n.assignTexture(t, "anisotropyMap", a.anisotropyTexture));
    }
    return Promise.all(r);
  }
}
class w {
  constructor(e) {
    this.parser = e;
    this.name = o.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser;
    const n = t.json;
    const i = n.textures[e];
    if (!i.extensions || !i.extensions[this.name]) {
      return null;
    }
    const r = i.extensions[this.name];
    const a = t.options.ktx2Loader;
    if (!a) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0) {
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      }
      return null;
    }
    return t.loadTextureImage(e, r.source, a);
  }
}
class x {
  constructor(e) {
    this.parser = e;
    this.name = o.EXT_TEXTURE_WEBP;
  }
  loadTexture(e) {
    const t = this.name;
    const n = this.parser;
    const i = n.json;
    const r = i.textures[e];
    if (!r.extensions || !r.extensions[t]) {
      return null;
    }
    const a = r.extensions[t];
    const s = i.images[a.source];
    let o = n.textureLoader;
    if (s.uri) {
      const e = n.options.manager.getHandler(s.uri);
      if (e !== null) {
        o = e;
      }
    }
    return n.loadTextureImage(e, a.source, o);
  }
}
class S {
  constructor(e) {
    this.parser = e;
    this.name = o.EXT_TEXTURE_AVIF;
  }
  loadTexture(e) {
    const t = this.name;
    const n = this.parser;
    const i = n.json;
    const r = i.textures[e];
    if (!r.extensions || !r.extensions[t]) {
      return null;
    }
    const a = r.extensions[t];
    const s = i.images[a.source];
    let o = n.textureLoader;
    if (s.uri) {
      const e = n.options.manager.getHandler(s.uri);
      if (e !== null) {
        o = e;
      }
    }
    return n.loadTextureImage(e, a.source, o);
  }
}
class k {
  constructor(e) {
    this.name = o.EXT_MESHOPT_COMPRESSION;
    this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json;
    const n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const e = n.extensions[this.name];
      const i = this.parser.getDependency("buffer", e.buffer);
      const r = this.parser.options.meshoptDecoder;
      if (!r || !r.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0) {
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        }
        return null;
      }
      return i.then(function (t) {
        const n = e.byteOffset || 0;
        const i = e.byteLength || 0;
        const a = e.count;
        const s = e.byteStride;
        const o = new Uint8Array(t, n, i);
        if (r.decodeGltfBufferAsync) {
          return r.decodeGltfBufferAsync(a, s, o, e.mode, e.filter).then(function (e) {
            return e.buffer;
          });
        } else {
          return r.ready.then(function () {
            const t = new ArrayBuffer(a * s);
            r.decodeGltfBuffer(new Uint8Array(t), a, s, o, e.mode, e.filter);
            return t;
          });
        }
      });
    }
    return null;
  }
}
class T {
  constructor(e) {
    this.name = o.EXT_MESH_GPU_INSTANCING;
    this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json;
    const n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === undefined) {
      return null;
    }
    const r = t.meshes[n.mesh];
    for (const e of r.primitives) {
      if (e.mode !== z.TRIANGLES && e.mode !== z.TRIANGLE_STRIP && e.mode !== z.TRIANGLE_FAN && e.mode !== undefined) {
        return null;
      }
    }
    const a = n.extensions[this.name].attributes;
    const s = [];
    const o = {};
    for (const e in a) {
      s.push(this.parser.getDependency("accessor", a[e]).then(t => {
        o[e] = t;
        return o[e];
      }));
    }
    if (s.length < 1) {
      return null;
    } else {
      s.push(this.parser.createNodeMesh(e));
      return Promise.all(s).then(e => {
        const t = e.pop();
        const n = t.isGroup ? t.children : [t];
        const r = e[0].count;
        const a = [];
        for (const e of n) {
          const t = new i.kn4();
          const n = new i.Pq0();
          const s = new i.PTz();
          const l = new i.Pq0(1, 1, 1);
          const c = new i.ZLX(e.geometry, e.material, r);
          for (let e = 0; e < r; e++) {
            if (o.TRANSLATION) {
              n.fromBufferAttribute(o.TRANSLATION, e);
            }
            if (o.ROTATION) {
              s.fromBufferAttribute(o.ROTATION, e);
            }
            if (o.SCALE) {
              l.fromBufferAttribute(o.SCALE, e);
            }
            c.setMatrixAt(e, t.compose(n, s, l));
          }
          for (const t in o) {
            if (t === "_COLOR_0") {
              const e = o[t];
              c.instanceColor = new i.uWO(e.array, e.itemSize, e.normalized);
            } else if (t !== "TRANSLATION" && t !== "ROTATION" && t !== "SCALE") {
              e.geometry.setAttribute(t, o[t]);
            }
          }
          i.B69.prototype.copy.call(c, e);
          this.parser.assignFinalMaterial(c);
          a.push(c);
        }
        if (t.isGroup) {
          t.clear();
          t.add(...a);
          return t;
        } else {
          return a[0];
        }
      });
    }
  }
}
const E = "glTF";
const M = 1313821514;
const _ = 5130562;
class C {
  constructor(e) {
    this.name = o.KHR_BINARY_GLTF;
    this.content = null;
    this.body = null;
    const t = new DataView(e, 0, 12);
    const n = new TextDecoder();
    this.header = {
      magic: n.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, true),
      length: t.getUint32(8, true)
    };
    if (this.header.magic !== E) {
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    }
    if (this.header.version < 2) {
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    }
    const i = this.header.length - 12;
    const r = new DataView(e, 12);
    let a = 0;
    while (a < i) {
      const t = r.getUint32(a, true);
      a += 4;
      const i = r.getUint32(a, true);
      a += 4;
      if (i === M) {
        const i = new Uint8Array(e, 12 + a, t);
        this.content = n.decode(i);
      } else if (i === _) {
        const n = 12 + a;
        this.body = e.slice(n, n + t);
      }
      a += t;
    }
    if (this.content === null) {
      throw new Error("THREE.GLTFLoader: JSON content not found.");
    }
  }
}
class R {
  constructor(e, t) {
    if (!t) {
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    }
    this.name = o.KHR_DRACO_MESH_COMPRESSION;
    this.json = e;
    this.dracoLoader = t;
    this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json;
    const r = this.dracoLoader;
    const a = e.extensions[this.name].bufferView;
    const s = e.extensions[this.name].attributes;
    const o = {};
    const l = {};
    const c = {};
    for (const e in s) {
      const t = O[e] || e.toLowerCase();
      o[t] = s[e];
    }
    for (const t in e.attributes) {
      const i = O[t] || t.toLowerCase();
      if (s[t] !== undefined) {
        const r = n.accessors[e.attributes[t]];
        const a = D[r.componentType];
        c[i] = a.name;
        l[i] = r.normalized === true;
      }
    }
    return t.getDependency("bufferView", a).then(function (e) {
      return new Promise(function (t, n) {
        r.decodeDracoFile(e, function (e) {
          for (const t in e.attributes) {
            const n = e.attributes[t];
            const i = l[t];
            if (i !== undefined) {
              n.normalized = i;
            }
          }
          t(e);
        }, o, c, i.Zr2, n);
      });
    });
  }
}
class P {
  constructor() {
    this.name = o.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    if (t.texCoord !== undefined && t.texCoord !== e.channel || t.offset !== undefined || t.rotation !== undefined || t.scale !== undefined) {
      e = e.clone();
      if (t.texCoord !== undefined) {
        e.channel = t.texCoord;
      }
      if (t.offset !== undefined) {
        e.offset.fromArray(t.offset);
      }
      if (t.rotation !== undefined) {
        e.rotation = t.rotation;
      }
      if (t.scale !== undefined) {
        e.repeat.fromArray(t.scale);
      }
      e.needsUpdate = true;
      return e;
    } else {
      return e;
    }
  }
}
class I {
  constructor() {
    this.name = o.KHR_MESH_QUANTIZATION;
  }
}
class L extends i.lGw {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer;
    const n = this.sampleValues;
    const i = this.valueSize;
    const r = e * i * 3 + i;
    for (let e = 0; e !== i; e++) {
      t[e] = n[r + e];
    }
    return t;
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer;
    const a = this.sampleValues;
    const s = this.valueSize;
    const o = s * 2;
    const l = s * 3;
    const c = i - t;
    const h = (n - t) / c;
    const d = h * h;
    const u = d * h;
    const f = e * l;
    const p = f - l;
    const g = u * -2 + d * 3;
    const m = u - d;
    const A = 1 - g;
    const v = m - d + h;
    for (let e = 0; e !== s; e++) {
      const t = a[p + e + s];
      const n = a[p + e + o] * c;
      const i = a[f + e + s];
      const l = a[f + e] * c;
      r[e] = A * t + v * n + g * i + m * l;
    }
    return r;
  }
}
const U = new i.PTz();
class N extends L {
  interpolate_(e, t, n, i) {
    const r = super.interpolate_(e, t, n, i);
    U.fromArray(r).normalize().toArray(r);
    return r;
  }
}
const z = {
  FLOAT: 5126,
  FLOAT_MAT3: 35675,
  FLOAT_MAT4: 35676,
  FLOAT_VEC2: 35664,
  FLOAT_VEC3: 35665,
  FLOAT_VEC4: 35666,
  LINEAR: 9729,
  REPEAT: 10497,
  SAMPLER_2D: 35678,
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6,
  UNSIGNED_BYTE: 5121,
  UNSIGNED_SHORT: 5123
};
const D = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
};
const _B = {
  9728: i.hxR,
  9729: i.k6q,
  9984: i.pHI,
  9985: i.kRr,
  9986: i.Cfg,
  9987: i.$_I
};
const G = {
  33071: i.ghU,
  33648: i.kTW,
  10497: i.GJx
};
const F = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
};
const O = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv1",
  TEXCOORD_2: "uv2",
  TEXCOORD_3: "uv3",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
};
const W = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
};
const V = {
  CUBICSPLINE: undefined,
  LINEAR: i.PJ3,
  STEP: i.ljd
};
const H = "OPAQUE";
const j = "MASK";
const K = "BLEND";
function q(e, t, n) {
  for (const i in n.extensions) {
    if (e[i] === undefined) {
      t.userData.gltfExtensions = t.userData.gltfExtensions || {};
      t.userData.gltfExtensions[i] = n.extensions[i];
    }
  }
}
function Q(e, t) {
  if (t.extras !== undefined) {
    if (typeof t.extras == "object") {
      Object.assign(e.userData, t.extras);
    } else {
      console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras);
    }
  }
}
function J(e, t) {
  e.updateMorphTargets();
  if (t.weights !== undefined) {
    for (let n = 0, i = t.weights.length; n < i; n++) {
      e.morphTargetInfluences[n] = t.weights[n];
    }
  }
  if (t.extras && Array.isArray(t.extras.targetNames)) {
    const n = t.extras.targetNames;
    if (e.morphTargetInfluences.length === n.length) {
      e.morphTargetDictionary = {};
      for (let t = 0, i = n.length; t < i; t++) {
        e.morphTargetDictionary[n[t]] = t;
      }
    } else {
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
    }
  }
}
function X(e) {
  let t;
  const n = e.extensions && e.extensions[o.KHR_DRACO_MESH_COMPRESSION];
  t = n ? "draco:" + n.bufferView + ":" + n.indices + ":" + Y(n.attributes) : e.indices + ":" + Y(e.attributes) + ":" + e.mode;
  if (e.targets !== undefined) {
    for (let n = 0, i = e.targets.length; n < i; n++) {
      t += ":" + Y(e.targets[n]);
    }
  }
  return t;
}
function Y(e) {
  let t = "";
  const n = Object.keys(e).sort();
  for (let i = 0, r = n.length; i < r; i++) {
    t += n[i] + ":" + e[n[i]] + ";";
  }
  return t;
}
function Z(e) {
  switch (e) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
const $ = new i.kn4();
class ee {
  constructor(e = {}, t = {}) {
    this.json = e;
    this.extensions = {};
    this.plugins = {};
    this.options = t;
    this.cache = new s();
    this.associations = new Map();
    this.primitiveCache = {};
    this.nodeCache = {};
    this.meshCache = {
      refs: {},
      uses: {}
    };
    this.cameraCache = {
      refs: {},
      uses: {}
    };
    this.lightCache = {
      refs: {},
      uses: {}
    };
    this.sourceCache = {};
    this.textureCache = {};
    this.nodeNamesUsed = {};
    let n = false;
    let r = -1;
    let a = false;
    let o = -1;
    if (typeof navigator != "undefined") {
      const e = navigator.userAgent;
      n = /^((?!chrome|android).)*safari/i.test(e) === true;
      const t = e.match(/Version\/(\d+)/);
      r = n && t ? parseInt(t[1], 10) : -1;
      a = e.indexOf("Firefox") > -1;
      o = a ? e.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    if (typeof createImageBitmap == "undefined" || n && r < 17 || a && o < 98) {
      this.textureLoader = new i.Tap(this.options.manager);
    } else {
      this.textureLoader = new i.Kzg(this.options.manager);
    }
    this.textureLoader.setCrossOrigin(this.options.crossOrigin);
    this.textureLoader.setRequestHeader(this.options.requestHeader);
    this.fileLoader = new i.Y9S(this.options.manager);
    this.fileLoader.setResponseType("arraybuffer");
    if (this.options.crossOrigin === "use-credentials") {
      this.fileLoader.setWithCredentials(true);
    }
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this;
    const i = this.json;
    const r = this.extensions;
    this.cache.removeAll();
    this.nodeCache = {};
    this._invokeAll(function (e) {
      return e._markDefs && e._markDefs();
    });
    Promise.all(this._invokeAll(function (e) {
      return e.beforeRoot && e.beforeRoot();
    })).then(function () {
      return Promise.all([n.getDependencies("scene"), n.getDependencies("animation"), n.getDependencies("camera")]);
    }).then(function (t) {
      const a = {
        scene: t[0][i.scene || 0],
        scenes: t[0],
        animations: t[1],
        cameras: t[2],
        asset: i.asset,
        parser: n,
        userData: {}
      };
      q(r, a, i);
      Q(a, i);
      return Promise.all(n._invokeAll(function (e) {
        return e.afterRoot && e.afterRoot(a);
      })).then(function () {
        for (const e of a.scenes) {
          e.updateMatrixWorld();
        }
        e(a);
      });
    }).catch(t);
  }
  _markDefs() {
    const e = this.json.nodes || [];
    const t = this.json.skins || [];
    const n = this.json.meshes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const i = t[n].joints;
      for (let t = 0, n = i.length; t < n; t++) {
        e[i[t]].isBone = true;
      }
    }
    for (let t = 0, i = e.length; t < i; t++) {
      const i = e[t];
      if (i.mesh !== undefined) {
        this._addNodeRef(this.meshCache, i.mesh);
        if (i.skin !== undefined) {
          n[i.mesh].isSkinnedMesh = true;
        }
      }
      if (i.camera !== undefined) {
        this._addNodeRef(this.cameraCache, i.camera);
      }
    }
  }
  _addNodeRef(e, t) {
    if (t !== undefined) {
      if (e.refs[t] === undefined) {
        e.refs[t] = e.uses[t] = 0;
      }
      e.refs[t]++;
    }
  }
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1) {
      return n;
    }
    const i = n.clone();
    const r = (e, t) => {
      const n = this.associations.get(e);
      if (n != null) {
        this.associations.set(t, n);
      }
      for (const [n, i] of e.children.entries()) {
        r(i, t.children[n]);
      }
    };
    r(n, i);
    i.name += "_instance_" + e.uses[t]++;
    return i;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const i = e(t[n]);
      if (i) {
        return i;
      }
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let i = 0; i < t.length; i++) {
      const r = e(t[i]);
      if (r) {
        n.push(r);
      }
    }
    return n;
  }
  getDependency(e, t) {
    const n = e + ":" + t;
    let i = this.cache.get(n);
    if (!i) {
      switch (e) {
        case "scene":
          i = this.loadScene(t);
          break;
        case "node":
          i = this._invokeOne(function (e) {
            return e.loadNode && e.loadNode(t);
          });
          break;
        case "mesh":
          i = this._invokeOne(function (e) {
            return e.loadMesh && e.loadMesh(t);
          });
          break;
        case "accessor":
          i = this.loadAccessor(t);
          break;
        case "bufferView":
          i = this._invokeOne(function (e) {
            return e.loadBufferView && e.loadBufferView(t);
          });
          break;
        case "buffer":
          i = this.loadBuffer(t);
          break;
        case "material":
          i = this._invokeOne(function (e) {
            return e.loadMaterial && e.loadMaterial(t);
          });
          break;
        case "texture":
          i = this._invokeOne(function (e) {
            return e.loadTexture && e.loadTexture(t);
          });
          break;
        case "skin":
          i = this.loadSkin(t);
          break;
        case "animation":
          i = this._invokeOne(function (e) {
            return e.loadAnimation && e.loadAnimation(t);
          });
          break;
        case "camera":
          i = this.loadCamera(t);
          break;
        default:
          i = this._invokeOne(function (n) {
            return n != this && n.getDependency && n.getDependency(e, t);
          });
          if (!i) {
            throw new Error("Unknown type: " + e);
          }
      }
      this.cache.add(n, i);
    }
    return i;
  }
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this;
      const i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(i.map(function (t, i) {
        return n.getDependency(e, i);
      }));
      this.cache.add(e, t);
    }
    return t;
  }
  loadBuffer(e) {
    const t = this.json.buffers[e];
    const n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer") {
      throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    }
    if (t.uri === undefined && e === 0) {
      return Promise.resolve(this.extensions[o.KHR_BINARY_GLTF].body);
    }
    const r = this.options;
    return new Promise(function (e, a) {
      n.load(i.r6x.resolveURL(t.uri, r.path), e, undefined, function () {
        a(new Error("THREE.GLTFLoader: Failed to load buffer \"" + t.uri + "\"."));
      });
    });
  }
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function (e) {
      const n = t.byteLength || 0;
      const i = t.byteOffset || 0;
      return e.slice(i, i + n);
    });
  }
  loadAccessor(e) {
    const t = this;
    const n = this.json;
    const r = this.json.accessors[e];
    if (r.bufferView === undefined && r.sparse === undefined) {
      const e = F[r.type];
      const t = D[r.componentType];
      const n = r.normalized === true;
      const a = new t(r.count * e);
      return Promise.resolve(new i.THS(a, e, n));
    }
    const a = [];
    if (r.bufferView !== undefined) {
      a.push(this.getDependency("bufferView", r.bufferView));
    } else {
      a.push(null);
    }
    if (r.sparse !== undefined) {
      a.push(this.getDependency("bufferView", r.sparse.indices.bufferView));
      a.push(this.getDependency("bufferView", r.sparse.values.bufferView));
    }
    return Promise.all(a).then(function (e) {
      const a = e[0];
      const s = F[r.type];
      const o = D[r.componentType];
      const l = o.BYTES_PER_ELEMENT;
      const c = l * s;
      const h = r.byteOffset || 0;
      const d = r.bufferView !== undefined ? n.bufferViews[r.bufferView].byteStride : undefined;
      const u = r.normalized === true;
      let f;
      let p;
      if (d && d !== c) {
        const e = Math.floor(h / d);
        const n = "InterleavedBuffer:" + r.bufferView + ":" + r.componentType + ":" + e + ":" + r.count;
        let c = t.cache.get(n);
        if (!c) {
          f = new o(a, e * d, r.count * d / l);
          c = new i.eB$(f, d / l);
          t.cache.add(n, c);
        }
        p = new i.eHs(c, s, h % d / l, u);
      } else {
        f = a === null ? new o(r.count * s) : new o(a, h, r.count * s);
        p = new i.THS(f, s, u);
      }
      if (r.sparse !== undefined) {
        const t = F.SCALAR;
        const n = D[r.sparse.indices.componentType];
        const l = r.sparse.indices.byteOffset || 0;
        const c = r.sparse.values.byteOffset || 0;
        const h = new n(e[1], l, r.sparse.count * t);
        const d = new o(e[2], c, r.sparse.count * s);
        if (a !== null) {
          p = new i.THS(p.array.slice(), p.itemSize, p.normalized);
        }
        p.normalized = false;
        for (let e = 0, t = h.length; e < t; e++) {
          const t = h[e];
          p.setX(t, d[e * s]);
          if (s >= 2) {
            p.setY(t, d[e * s + 1]);
          }
          if (s >= 3) {
            p.setZ(t, d[e * s + 2]);
          }
          if (s >= 4) {
            p.setW(t, d[e * s + 3]);
          }
          if (s >= 5) {
            throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
          }
        }
        p.normalized = u;
      }
      return p;
    });
  }
  loadTexture(e) {
    const t = this.json;
    const n = this.options;
    const i = t.textures[e].source;
    const r = t.images[i];
    let a = this.textureLoader;
    if (r.uri) {
      const e = n.manager.getHandler(r.uri);
      if (e !== null) {
        a = e;
      }
    }
    return this.loadTextureImage(e, i, a);
  }
  loadTextureImage(e, t, n) {
    const r = this;
    const a = this.json;
    const s = a.textures[e];
    const o = a.images[t];
    const l = (o.uri || o.bufferView) + ":" + s.sampler;
    if (this.textureCache[l]) {
      return this.textureCache[l];
    }
    const c = this.loadImageSource(t, n).then(function (t) {
      t.flipY = false;
      t.name = s.name || o.name || "";
      if (t.name === "" && typeof o.uri == "string" && o.uri.startsWith("data:image/") === false) {
        t.name = o.uri;
      }
      const n = (a.samplers || {})[s.sampler] || {};
      t.magFilter = _B[n.magFilter] || i.k6q;
      t.minFilter = _B[n.minFilter] || i.$_I;
      t.wrapS = G[n.wrapS] || i.GJx;
      t.wrapT = G[n.wrapT] || i.GJx;
      t.generateMipmaps = !t.isCompressedTexture && t.minFilter !== i.hxR && t.minFilter !== i.k6q;
      r.associations.set(t, {
        textures: e
      });
      return t;
    }).catch(function () {
      return null;
    });
    this.textureCache[l] = c;
    return c;
  }
  loadImageSource(e, t) {
    const n = this;
    const r = this.json;
    const a = this.options;
    if (this.sourceCache[e] !== undefined) {
      return this.sourceCache[e].then(e => e.clone());
    }
    const s = r.images[e];
    const o = self.URL || self.webkitURL;
    let l = s.uri || "";
    let c = false;
    if (s.bufferView !== undefined) {
      l = n.getDependency("bufferView", s.bufferView).then(function (e) {
        c = true;
        const t = new Blob([e], {
          type: s.mimeType
        });
        l = o.createObjectURL(t);
        return l;
      });
    } else if (s.uri === undefined) {
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    }
    const h = Promise.resolve(l).then(function (e) {
      return new Promise(function (n, r) {
        let s = n;
        if (t.isImageBitmapLoader === true) {
          s = function (e) {
            const t = new i.gPd(e);
            t.needsUpdate = true;
            n(t);
          };
        }
        t.load(i.r6x.resolveURL(e, a.path), s, undefined, r);
      });
    }).then(function (e) {
      var t;
      if (c === true) {
        o.revokeObjectURL(l);
      }
      Q(e, s);
      e.userData.mimeType = s.mimeType || ((t = s.uri).search(/\.jpe?g($|\?)/i) > 0 || t.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : t.search(/\.webp($|\?)/i) > 0 || t.search(/^data\:image\/webp/) === 0 ? "image/webp" : t.search(/\.ktx2($|\?)/i) > 0 || t.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png");
      return e;
    }).catch(function (e) {
      console.error("THREE.GLTFLoader: Couldn't load texture", l);
      throw e;
    });
    this.sourceCache[e] = h;
    return h;
  }
  assignTexture(e, t, n, i) {
    const r = this;
    return this.getDependency("texture", n.index).then(function (a) {
      if (!a) {
        return null;
      }
      if (n.texCoord !== undefined && n.texCoord > 0) {
        (a = a.clone()).channel = n.texCoord;
      }
      if (r.extensions[o.KHR_TEXTURE_TRANSFORM]) {
        const e = n.extensions !== undefined ? n.extensions[o.KHR_TEXTURE_TRANSFORM] : undefined;
        if (e) {
          const t = r.associations.get(a);
          a = r.extensions[o.KHR_TEXTURE_TRANSFORM].extendTexture(a, e);
          r.associations.set(a, t);
        }
      }
      if (i !== undefined) {
        a.colorSpace = i;
      }
      e[t] = a;
      return a;
    });
  }
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const r = t.attributes.tangent === undefined;
    const a = t.attributes.color !== undefined;
    const s = t.attributes.normal === undefined;
    if (e.isPoints) {
      const e = "PointsMaterial:" + n.uuid;
      let t = this.cache.get(e);
      if (!t) {
        t = new i.BH$();
        i.imn.prototype.copy.call(t, n);
        t.color.copy(n.color);
        t.map = n.map;
        t.sizeAttenuation = false;
        this.cache.add(e, t);
      }
      n = t;
    } else if (e.isLine) {
      const e = "LineBasicMaterial:" + n.uuid;
      let t = this.cache.get(e);
      if (!t) {
        t = new i.mrM();
        i.imn.prototype.copy.call(t, n);
        t.color.copy(n.color);
        t.map = n.map;
        this.cache.add(e, t);
      }
      n = t;
    }
    if (r || a || s) {
      let e = "ClonedMaterial:" + n.uuid + ":";
      if (r) {
        e += "derivative-tangents:";
      }
      if (a) {
        e += "vertex-colors:";
      }
      if (s) {
        e += "flat-shading:";
      }
      let t = this.cache.get(e);
      if (!t) {
        t = n.clone();
        if (a) {
          t.vertexColors = true;
        }
        if (s) {
          t.flatShading = true;
        }
        if (r) {
          if (t.normalScale) {
            t.normalScale.y *= -1;
          }
          if (t.clearcoatNormalScale) {
            t.clearcoatNormalScale.y *= -1;
          }
        }
        this.cache.add(e, t);
        this.associations.set(t, this.associations.get(n));
      }
      n = t;
    }
    e.material = n;
  }
  getMaterialType() {
    return i._4j;
  }
  loadMaterial(e) {
    const t = this;
    const n = this.json;
    const r = this.extensions;
    const a = n.materials[e];
    let s;
    const l = {};
    const c = [];
    if ((a.extensions || {})[o.KHR_MATERIALS_UNLIT]) {
      const e = r[o.KHR_MATERIALS_UNLIT];
      s = e.getMaterialType();
      c.push(e.extendParams(l, a, t));
    } else {
      const n = a.pbrMetallicRoughness || {};
      l.color = new i.Q1f(1, 1, 1);
      l.opacity = 1;
      if (Array.isArray(n.baseColorFactor)) {
        const e = n.baseColorFactor;
        l.color.setRGB(e[0], e[1], e[2], i.Zr2);
        l.opacity = e[3];
      }
      if (n.baseColorTexture !== undefined) {
        c.push(t.assignTexture(l, "map", n.baseColorTexture, i.er$));
      }
      l.metalness = n.metallicFactor !== undefined ? n.metallicFactor : 1;
      l.roughness = n.roughnessFactor !== undefined ? n.roughnessFactor : 1;
      if (n.metallicRoughnessTexture !== undefined) {
        c.push(t.assignTexture(l, "metalnessMap", n.metallicRoughnessTexture));
        c.push(t.assignTexture(l, "roughnessMap", n.metallicRoughnessTexture));
      }
      s = this._invokeOne(function (t) {
        return t.getMaterialType && t.getMaterialType(e);
      });
      c.push(Promise.all(this._invokeAll(function (t) {
        return t.extendMaterialParams && t.extendMaterialParams(e, l);
      })));
    }
    if (a.doubleSided === true) {
      l.side = i.$EB;
    }
    const h = a.alphaMode || H;
    if (h === K) {
      l.transparent = true;
      l.depthWrite = false;
    } else {
      l.transparent = false;
      if (h === j) {
        l.alphaTest = a.alphaCutoff !== undefined ? a.alphaCutoff : 0.5;
      }
    }
    if (a.normalTexture !== undefined && s !== i.V9B && (c.push(t.assignTexture(l, "normalMap", a.normalTexture)), l.normalScale = new i.I9Y(1, 1), a.normalTexture.scale !== undefined)) {
      const e = a.normalTexture.scale;
      l.normalScale.set(e, e);
    }
    if (a.occlusionTexture !== undefined && s !== i.V9B) {
      c.push(t.assignTexture(l, "aoMap", a.occlusionTexture));
      if (a.occlusionTexture.strength !== undefined) {
        l.aoMapIntensity = a.occlusionTexture.strength;
      }
    }
    if (a.emissiveFactor !== undefined && s !== i.V9B) {
      const e = a.emissiveFactor;
      l.emissive = new i.Q1f().setRGB(e[0], e[1], e[2], i.Zr2);
    }
    if (a.emissiveTexture !== undefined && s !== i.V9B) {
      c.push(t.assignTexture(l, "emissiveMap", a.emissiveTexture, i.er$));
    }
    return Promise.all(c).then(function () {
      const n = new s(l);
      if (a.name) {
        n.name = a.name;
      }
      Q(n, a);
      t.associations.set(n, {
        materials: e
      });
      if (a.extensions) {
        q(r, n, a);
      }
      return n;
    });
  }
  createUniqueName(e) {
    const t = i.Nwf.sanitizeNodeName(e || "");
    if (t in this.nodeNamesUsed) {
      return t + "_" + ++this.nodeNamesUsed[t];
    } else {
      this.nodeNamesUsed[t] = 0;
      return t;
    }
  }
  loadGeometries(e) {
    const t = this;
    const n = this.extensions;
    const r = this.primitiveCache;
    function a(e) {
      return n[o.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e, t).then(function (n) {
        return te(n, e, t);
      });
    }
    const s = [];
    for (let n = 0, l = e.length; n < l; n++) {
      const l = e[n];
      const c = X(l);
      const h = r[c];
      if (h) {
        s.push(h.promise);
      } else {
        let e;
        e = l.extensions && l.extensions[o.KHR_DRACO_MESH_COMPRESSION] ? a(l) : te(new i.LoY(), l, t);
        r[c] = {
          primitive: l,
          promise: e
        };
        s.push(e);
      }
    }
    return Promise.all(s);
  }
  loadMesh(e) {
    const t = this;
    const n = this.json;
    const a = this.extensions;
    const s = n.meshes[e];
    const o = s.primitives;
    const l = [];
    for (let e = 0, t = o.length; e < t; e++) {
      const t = o[e].material === undefined ? ((c = this.cache).DefaultMaterial === undefined && (c.DefaultMaterial = new i._4j({
        color: 16777215,
        emissive: 0,
        metalness: 1,
        roughness: 1,
        transparent: false,
        depthTest: true,
        side: i.hB5
      })), c.DefaultMaterial) : this.getDependency("material", o[e].material);
      l.push(t);
    }
    var c;
    l.push(t.loadGeometries(o));
    return Promise.all(l).then(function (n) {
      const l = n.slice(0, n.length - 1);
      const c = n[n.length - 1];
      const h = [];
      for (let n = 0, d = c.length; n < d; n++) {
        const d = c[n];
        const u = o[n];
        let f;
        const p = l[n];
        if (u.mode === z.TRIANGLES || u.mode === z.TRIANGLE_STRIP || u.mode === z.TRIANGLE_FAN || u.mode === undefined) {
          f = s.isSkinnedMesh === true ? new i.I46(d, p) : new i.eaF(d, p);
          if (f.isSkinnedMesh === true) {
            f.normalizeSkinWeights();
          }
          if (u.mode === z.TRIANGLE_STRIP) {
            f.geometry = (0, r._c)(f.geometry, i.O49);
          } else if (u.mode === z.TRIANGLE_FAN) {
            f.geometry = (0, r._c)(f.geometry, i.rYR);
          }
        } else if (u.mode === z.LINES) {
          f = new i.DXC(d, p);
        } else if (u.mode === z.LINE_STRIP) {
          f = new i.N1A(d, p);
        } else if (u.mode === z.LINE_LOOP) {
          f = new i.FCc(d, p);
        } else {
          if (u.mode !== z.POINTS) {
            throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + u.mode);
          }
          f = new i.ONl(d, p);
        }
        if (Object.keys(f.geometry.morphAttributes).length > 0) {
          J(f, s);
        }
        f.name = t.createUniqueName(s.name || "mesh_" + e);
        Q(f, s);
        if (u.extensions) {
          q(a, f, u);
        }
        t.assignFinalMaterial(f);
        h.push(f);
      }
      for (let n = 0, i = h.length; n < i; n++) {
        t.associations.set(h[n], {
          meshes: e,
          primitives: n
        });
      }
      if (h.length === 1) {
        if (s.extensions) {
          q(a, h[0], s);
        }
        return h[0];
      }
      const d = new i.YJl();
      if (s.extensions) {
        q(a, d, s);
      }
      t.associations.set(d, {
        meshes: e
      });
      for (let e = 0, t = h.length; e < t; e++) {
        d.add(h[e]);
      }
      return d;
    });
  }
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e];
    const r = n[n.type];
    if (r) {
      if (n.type === "perspective") {
        t = new i.ubm(i.cj9.radToDeg(r.yfov), r.aspectRatio || 1, r.znear || 1, r.zfar || 2000000);
      } else if (n.type === "orthographic") {
        t = new i.qUd(-r.xmag, r.xmag, r.ymag, -r.ymag, r.znear, r.zfar);
      }
      if (n.name) {
        t.name = this.createUniqueName(n.name);
      }
      Q(t, n);
      return Promise.resolve(t);
    }
    console.warn("THREE.GLTFLoader: Missing camera parameters.");
  }
  loadSkin(e) {
    const t = this.json.skins[e];
    const n = [];
    for (let e = 0, i = t.joints.length; e < i; e++) {
      n.push(this._loadNodeShallow(t.joints[e]));
    }
    if (t.inverseBindMatrices !== undefined) {
      n.push(this.getDependency("accessor", t.inverseBindMatrices));
    } else {
      n.push(null);
    }
    return Promise.all(n).then(function (e) {
      const n = e.pop();
      const r = e;
      const a = [];
      const s = [];
      for (let e = 0, o = r.length; e < o; e++) {
        const o = r[e];
        if (o) {
          a.push(o);
          const t = new i.kn4();
          if (n !== null) {
            t.fromArray(n.array, e * 16);
          }
          s.push(t);
        } else {
          console.warn("THREE.GLTFLoader: Joint \"%s\" could not be found.", t.joints[e]);
        }
      }
      return new i.EAD(a, s);
    });
  }
  loadAnimation(e) {
    const t = this.json;
    const n = this;
    const r = t.animations[e];
    const a = r.name ? r.name : "animation_" + e;
    const s = [];
    const o = [];
    const l = [];
    const c = [];
    const h = [];
    for (let e = 0, t = r.channels.length; e < t; e++) {
      const t = r.channels[e];
      const n = r.samplers[t.sampler];
      const i = t.target;
      const a = i.node;
      const d = r.parameters !== undefined ? r.parameters[n.input] : n.input;
      const u = r.parameters !== undefined ? r.parameters[n.output] : n.output;
      if (i.node !== undefined) {
        s.push(this.getDependency("node", a));
        o.push(this.getDependency("accessor", d));
        l.push(this.getDependency("accessor", u));
        c.push(n);
        h.push(i);
      }
    }
    return Promise.all([Promise.all(s), Promise.all(o), Promise.all(l), Promise.all(c), Promise.all(h)]).then(function (e) {
      const t = e[0];
      const s = e[1];
      const o = e[2];
      const l = e[3];
      const c = e[4];
      const h = [];
      for (let e = 0, i = t.length; e < i; e++) {
        const i = t[e];
        const r = s[e];
        const a = o[e];
        const d = l[e];
        const u = c[e];
        if (i === undefined) {
          continue;
        }
        if (i.updateMatrix) {
          i.updateMatrix();
        }
        const f = n._createAnimationTracks(i, r, a, d, u);
        if (f) {
          for (let e = 0; e < f.length; e++) {
            h.push(f[e]);
          }
        }
      }
      const d = new i.tz3(a, undefined, h);
      Q(d, r);
      return d;
    });
  }
  createNodeMesh(e) {
    const t = this.json;
    const n = this;
    const i = t.nodes[e];
    if (i.mesh === undefined) {
      return null;
    } else {
      return n.getDependency("mesh", i.mesh).then(function (e) {
        const t = n._getNodeRef(n.meshCache, i.mesh, e);
        if (i.weights !== undefined) {
          t.traverse(function (e) {
            if (e.isMesh) {
              for (let t = 0, n = i.weights.length; t < n; t++) {
                e.morphTargetInfluences[t] = i.weights[t];
              }
            }
          });
        }
        return t;
      });
    }
  }
  loadNode(e) {
    const t = this;
    const n = this.json.nodes[e];
    const i = t._loadNodeShallow(e);
    const r = [];
    const a = n.children || [];
    for (let e = 0, n = a.length; e < n; e++) {
      r.push(t.getDependency("node", a[e]));
    }
    const s = n.skin === undefined ? Promise.resolve(null) : t.getDependency("skin", n.skin);
    return Promise.all([i, Promise.all(r), s]).then(function (e) {
      const t = e[0];
      const n = e[1];
      const i = e[2];
      if (i !== null) {
        t.traverse(function (e) {
          if (e.isSkinnedMesh) {
            e.bind(i, $);
          }
        });
      }
      for (let e = 0, i = n.length; e < i; e++) {
        t.add(n[e]);
      }
      return t;
    });
  }
  _loadNodeShallow(e) {
    const t = this.json;
    const n = this.extensions;
    const r = this;
    if (this.nodeCache[e] !== undefined) {
      return this.nodeCache[e];
    }
    const a = t.nodes[e];
    const s = a.name ? r.createUniqueName(a.name) : "";
    const o = [];
    const l = r._invokeOne(function (t) {
      return t.createNodeMesh && t.createNodeMesh(e);
    });
    if (l) {
      o.push(l);
    }
    if (a.camera !== undefined) {
      o.push(r.getDependency("camera", a.camera).then(function (e) {
        return r._getNodeRef(r.cameraCache, a.camera, e);
      }));
    }
    r._invokeAll(function (t) {
      return t.createNodeAttachment && t.createNodeAttachment(e);
    }).forEach(function (e) {
      o.push(e);
    });
    this.nodeCache[e] = Promise.all(o).then(function (t) {
      let o;
      o = a.isBone === true ? new i.$Kf() : t.length > 1 ? new i.YJl() : t.length === 1 ? t[0] : new i.B69();
      if (o !== t[0]) {
        for (let e = 0, n = t.length; e < n; e++) {
          o.add(t[e]);
        }
      }
      if (a.name) {
        o.userData.name = a.name;
        o.name = s;
      }
      Q(o, a);
      if (a.extensions) {
        q(n, o, a);
      }
      if (a.matrix !== undefined) {
        const e = new i.kn4();
        e.fromArray(a.matrix);
        o.applyMatrix4(e);
      } else {
        if (a.translation !== undefined) {
          o.position.fromArray(a.translation);
        }
        if (a.rotation !== undefined) {
          o.quaternion.fromArray(a.rotation);
        }
        if (a.scale !== undefined) {
          o.scale.fromArray(a.scale);
        }
      }
      if (r.associations.has(o)) {
        if (a.mesh !== undefined && r.meshCache.refs[a.mesh] > 1) {
          const e = r.associations.get(o);
          r.associations.set(o, {
            ...e
          });
        }
      } else {
        r.associations.set(o, {});
      }
      r.associations.get(o).nodes = e;
      return o;
    });
    return this.nodeCache[e];
  }
  loadScene(e) {
    const t = this.extensions;
    const n = this.json.scenes[e];
    const r = this;
    const a = new i.YJl();
    if (n.name) {
      a.name = r.createUniqueName(n.name);
    }
    Q(a, n);
    if (n.extensions) {
      q(t, a, n);
    }
    const s = n.nodes || [];
    const o = [];
    for (let e = 0, t = s.length; e < t; e++) {
      o.push(r.getDependency("node", s[e]));
    }
    return Promise.all(o).then(function (e) {
      for (let t = 0, n = e.length; t < n; t++) {
        a.add(e[t]);
      }
      r.associations = (e => {
        const t = new Map();
        for (const [e, n] of r.associations) {
          if (e instanceof i.imn || e instanceof i.gPd) {
            t.set(e, n);
          }
        }
        e.traverse(e => {
          const n = r.associations.get(e);
          if (n != null) {
            t.set(e, n);
          }
        });
        return t;
      })(a);
      return a;
    });
  }
  _createAnimationTracks(e, t, n, r, a) {
    const s = [];
    const o = e.name ? e.name : e.uuid;
    const l = [];
    let c;
    if (W[a.path] === W.weights) {
      e.traverse(function (e) {
        if (e.morphTargetInfluences) {
          l.push(e.name ? e.name : e.uuid);
        }
      });
    } else {
      l.push(o);
    }
    switch (W[a.path]) {
      case W.weights:
        c = i.Hit;
        break;
      case W.rotation:
        c = i.MBL;
        break;
      case W.translation:
      case W.scale:
        c = i.RiT;
        break;
      default:
        if (n.itemSize === 1) {
          c = i.Hit;
        } else {
          c = i.RiT;
        }
    }
    const h = r.interpolation !== undefined ? V[r.interpolation] : i.PJ3;
    const d = this._getArrayFromAccessor(n);
    for (let e = 0, n = l.length; e < n; e++) {
      const n = new c(l[e] + "." + W[a.path], t.array, d, h);
      if (r.interpolation === "CUBICSPLINE") {
        this._createCubicSplineTrackInterpolant(n);
      }
      s.push(n);
    }
    return s;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const e = Z(t.constructor);
      const n = new Float32Array(t.length);
      for (let i = 0, r = t.length; i < r; i++) {
        n[i] = t[i] * e;
      }
      t = n;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function (e) {
      return new (this instanceof i.MBL ? N : L)(this.times, this.values, this.getValueSize() / 3, e);
    };
    e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;
  }
}
function te(e, t, n) {
  const r = t.attributes;
  const a = [];
  function s(t, i) {
    return n.getDependency("accessor", t).then(function (t) {
      e.setAttribute(i, t);
    });
  }
  for (const t in r) {
    const n = O[t] || t.toLowerCase();
    if (!(n in e.attributes)) {
      a.push(s(r[t], n));
    }
  }
  if (t.indices !== undefined && !e.index) {
    const i = n.getDependency("accessor", t.indices).then(function (t) {
      e.setIndex(t);
    });
    a.push(i);
  }
  if (i.ppV.workingColorSpace !== i.Zr2 && "COLOR_0" in r) {
    console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${i.ppV.workingColorSpace}" not supported.`);
  }
  Q(e, t);
  (function (e, t, n) {
    const r = t.attributes;
    const a = new i.NRn();
    if (r.POSITION === undefined) {
      return;
    }
    {
      const e = n.json.accessors[r.POSITION];
      const t = e.min;
      const s = e.max;
      if (t === undefined || s === undefined) {
        console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
        return;
      }
      a.set(new i.Pq0(t[0], t[1], t[2]), new i.Pq0(s[0], s[1], s[2]));
      if (e.normalized) {
        const t = Z(D[e.componentType]);
        a.min.multiplyScalar(t);
        a.max.multiplyScalar(t);
      }
    }
    const s = t.targets;
    if (s !== undefined) {
      const e = new i.Pq0();
      const t = new i.Pq0();
      for (let i = 0, r = s.length; i < r; i++) {
        const r = s[i];
        if (r.POSITION !== undefined) {
          const i = n.json.accessors[r.POSITION];
          const a = i.min;
          const s = i.max;
          if (a !== undefined && s !== undefined) {
            t.setX(Math.max(Math.abs(a[0]), Math.abs(s[0])));
            t.setY(Math.max(Math.abs(a[1]), Math.abs(s[1])));
            t.setZ(Math.max(Math.abs(a[2]), Math.abs(s[2])));
            if (i.normalized) {
              const e = Z(D[i.componentType]);
              t.multiplyScalar(e);
            }
            e.max(t);
          } else {
            console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
          }
        }
      }
      a.expandByVector(e);
    }
    e.boundingBox = a;
    const o = new i.iyt();
    a.getCenter(o.center);
    o.radius = a.min.distanceTo(a.max) / 2;
    e.boundingSphere = o;
  })(e, t, n);
  return Promise.all(a).then(function () {
    if (t.targets !== undefined) {
      return function (e, t, n) {
        let i = false;
        let r = false;
        let a = false;
        for (let e = 0, n = t.length; e < n; e++) {
          const n = t[e];
          if (n.POSITION !== undefined) {
            i = true;
          }
          if (n.NORMAL !== undefined) {
            r = true;
          }
          if (n.COLOR_0 !== undefined) {
            a = true;
          }
          if (i && r && a) {
            break;
          }
        }
        if (!i && !r && !a) {
          return Promise.resolve(e);
        }
        const s = [];
        const o = [];
        const l = [];
        for (let c = 0, h = t.length; c < h; c++) {
          const h = t[c];
          if (i) {
            const t = h.POSITION !== undefined ? n.getDependency("accessor", h.POSITION) : e.attributes.position;
            s.push(t);
          }
          if (r) {
            const t = h.NORMAL !== undefined ? n.getDependency("accessor", h.NORMAL) : e.attributes.normal;
            o.push(t);
          }
          if (a) {
            const t = h.COLOR_0 !== undefined ? n.getDependency("accessor", h.COLOR_0) : e.attributes.color;
            l.push(t);
          }
        }
        return Promise.all([Promise.all(s), Promise.all(o), Promise.all(l)]).then(function (t) {
          const n = t[0];
          const s = t[1];
          const o = t[2];
          if (i) {
            e.morphAttributes.position = n;
          }
          if (r) {
            e.morphAttributes.normal = s;
          }
          if (a) {
            e.morphAttributes.color = o;
          }
          e.morphTargetsRelative = true;
          return e;
        });
      }(e, t.targets, n);
    } else {
      return e;
    }
  });
}