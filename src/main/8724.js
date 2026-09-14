var i;
var r;
var a;
var s;
var o;
var l;
var c = require("./1635.js");
var h = require("./4922.js");
var d = require("./6551.js");
class u {
  constructor(e, t, n, i, l, h, d) {
    r.set(this, undefined);
    a.set(this, undefined);
    s.set(this, undefined);
    o.set(this, undefined);
    this.pattern = e;
    this.rims = t;
    this.exhaust = n;
    (0, c.GG)(this, r, i, "f");
    (0, c.GG)(this, a, l, "f");
    (0, c.GG)(this, s, h, "f");
    (0, c.GG)(this, o, d, "f");
  }
  static default() {
    const e = Math.random() * 360;
    const t = (1 - Math.pow(Math.random(), 2)) * 100;
    const n = (0.05 + (1 - Math.pow(Math.random(), 2)) * 0.25) * 100;
    return new i(i.defaultPattern, i.defaultRims, i.defaultExhaust, new h.Q1f("hsl(" + e.toString() + "," + t.toString() + "%," + n.toString() + "%)").getHex(), 16777215, 1250067, 6710886);
  }
  get primaryHex() {
    return (0, c.gn)(this, r, "f");
  }
  set primaryHex(e) {
    if (e < 0 || e > 16777215 || !Number.isSafeInteger(e)) {
      throw new Error("Invalid primary color hex value");
    }
    (0, c.GG)(this, r, e, "f");
  }
  get secondaryHex() {
    return (0, c.gn)(this, a, "f");
  }
  set secondaryHex(e) {
    if (e < 0 || e > 16777215 || !Number.isSafeInteger(e)) {
      throw new Error("Invalid secondary color hex value");
    }
    (0, c.GG)(this, a, e, "f");
  }
  get frameHex() {
    return (0, c.gn)(this, s, "f");
  }
  set frameHex(e) {
    if (e < 0 || e > 16777215 || !Number.isSafeInteger(e)) {
      throw new Error("Invalid frame color hex value");
    }
    (0, c.GG)(this, s, e, "f");
  }
  get rimsHex() {
    return (0, c.gn)(this, o, "f");
  }
  set rimsHex(e) {
    if (e < 0 || e > 16777215 || !Number.isSafeInteger(e)) {
      throw new Error("Invalid rims color hex value");
    }
    (0, c.GG)(this, o, e, "f");
  }
  get primaryColor() {
    return new h.Q1f((0, c.gn)(this, r, "f"));
  }
  get secondaryColor() {
    return new h.Q1f((0, c.gn)(this, a, "f"));
  }
  get frameColor() {
    return new h.Q1f((0, c.gn)(this, s, "f"));
  }
  get rimsColor() {
    return new h.Q1f((0, c.gn)(this, o, "f"));
  }
  equals(e) {
    return this.pattern == e.pattern && this.rims == e.rims && this.exhaust == e.exhaust && this.primaryHex == e.primaryHex && this.secondaryHex == e.secondaryHex && this.frameHex == e.frameHex && this.rimsHex == e.rimsHex;
  }
  clone() {
    return new i(this.pattern, this.rims, this.exhaust, (0, c.gn)(this, r, "f"), (0, c.gn)(this, a, "f"), (0, c.gn)(this, s, "f"), (0, c.gn)(this, o, "f"));
  }
  serialize() {
    return d.l(this.serializeBinary());
  }
  static deserializeSafe(e) {
    const t = d.D(e);
    if (t == null) {
      return (0, c.gn)(i, i, "m", l).call(i);
    }
    try {
      return i.deserializeBinary(t);
    } catch {
      return (0, c.gn)(i, i, "m", l).call(i);
    }
  }
  serializeBinary() {
    const e = new Uint8Array(i.binaryLength);
    e[0] = 0;
    e[1] = this.pattern;
    e[2] = this.rims;
    e[3] = this.exhaust;
    e.set([(0, c.gn)(this, r, "f") & 255, (0, c.gn)(this, r, "f") >> 8 & 255, (0, c.gn)(this, r, "f") >> 16 & 255], 4);
    e.set([(0, c.gn)(this, a, "f") & 255, (0, c.gn)(this, a, "f") >> 8 & 255, (0, c.gn)(this, a, "f") >> 16 & 255], 7);
    e.set([(0, c.gn)(this, s, "f") & 255, (0, c.gn)(this, s, "f") >> 8 & 255, (0, c.gn)(this, s, "f") >> 16 & 255], 10);
    e.set([(0, c.gn)(this, o, "f") & 255, (0, c.gn)(this, o, "f") >> 8 & 255, (0, c.gn)(this, o, "f") >> 16 & 255], 13);
    return e;
  }
  static deserializeBinary(e) {
    if (e.length < i.binaryLength) {
      throw new Error("Data length is too short");
    }
    if (e[0] != 0) {
      throw new Error("Unsupported car style version");
    }
    const t = e[1];
    if (!i.isValidPattern(t)) {
      throw new Error("Invalid car style pattern");
    }
    const n = e[2];
    if (!i.isValidRims(n)) {
      throw new Error("Invalid car style rims");
    }
    const r = e[3];
    if (!i.isValidExhaust(r)) {
      throw new Error("Invalid car style exhaust");
    }
    const a = e[4] | e[5] << 8 | e[6] << 16;
    const s = e[7] | e[8] << 8 | e[9] << 16;
    const o = e[10] | e[11] << 8 | e[12] << 16;
    const l = e[13] | e[14] << 8 | e[15] << 16;
    return new i(t, n, r, a, s, o, l);
  }
  static get defaultPattern() {
    return 0;
  }
  static get defaultRims() {
    return 0;
  }
  static get defaultExhaust() {
    return 0;
  }
  static isValidPattern(e) {
    return Number.isSafeInteger(e) && e >= 0 && e < i.patterns.length;
  }
  static isValidRims(e) {
    return Number.isSafeInteger(e) && e >= 0 && e < i.rims.length;
  }
  static isValidExhaust(e) {
    return Number.isSafeInteger(e) && e >= 0 && e < i.exhausts.length;
  }
}
i = u;
r = new WeakMap();
a = new WeakMap();
s = new WeakMap();
o = new WeakMap();
l = function () {
  return new i(i.defaultPattern, i.defaultRims, i.defaultExhaust, 5592405, 5592405, 5592405, 5592405);
};
u.binaryLength = 16;
u.patterns = Object.freeze((() => {
  const e = [];
  e[0] = {
    url: "images/pattern_stripe.svg"
  };
  e[1] = {
    url: "images/pattern_stripe2.svg"
  };
  e[2] = {
    url: "images/pattern_stripe3.svg"
  };
  e[3] = {
    url: "images/pattern_double_stripe.svg"
  };
  e[4] = {
    url: "images/pattern_edge.svg"
  };
  e[5] = {
    url: "images/pattern_half.svg"
  };
  e[6] = {
    url: "images/pattern_arrow.svg"
  };
  e[7] = {
    url: "images/pattern_circle.svg"
  };
  e[8] = {
    url: "images/pattern_horseshoe.svg"
  };
  e[9] = {
    url: "images/pattern_needle.svg"
  };
  e[10] = {
    url: "images/pattern_triangle.svg"
  };
  e[11] = {
    url: "images/pattern_diamonds.svg"
  };
  e[12] = {
    url: "images/pattern_zigzag.svg"
  };
  e[13] = {
    url: "images/pattern_circles.svg"
  };
  e[14] = {
    url: "images/pattern_gradient.svg"
  };
  e[15] = {
    url: "images/pattern_outline.svg"
  };
  return e.map(e => Object.freeze(e));
})());
u.rims = Object.freeze((() => {
  const e = [];
  e[0] = {
    model: "Wheel0"
  };
  e[1] = {
    model: "Wheel1"
  };
  e[2] = {
    model: "Wheel2"
  };
  e[3] = {
    model: "Wheel3"
  };
  e[4] = {
    model: "Wheel4"
  };
  e[5] = {
    model: "Wheel5"
  };
  e[6] = {
    model: "Wheel6"
  };
  e[7] = {
    model: "Wheel7"
  };
  e[8] = {
    model: "Wheel8"
  };
  e[9] = {
    model: "Wheel9"
  };
  e[10] = {
    model: "Wheel10"
  };
  e[11] = {
    model: "Wheel11"
  };
  return e.map(e => Object.freeze(e));
})());
u.exhausts = Object.freeze((() => {
  const e = [];
  e[0] = {
    model: "Exhaust0"
  };
  e[1] = {
    model: "Exhaust1"
  };
  e[2] = {
    model: "Exhaust2"
  };
  e[3] = {
    model: "Exhaust3"
  };
  e[4] = {
    model: "Exhaust4"
  };
  e[5] = {
    model: "Exhaust5"
  };
  e[6] = {
    model: "Exhaust6"
  };
  e[7] = {
    model: "Exhaust7"
  };
  return e.map(e => Object.freeze(e));
})());
export const A = u;