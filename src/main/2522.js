var i;
var r;
var a;
var s;
var o;
var l;
var c;
var h = require("./1635.js");
var d = require("./1312.js");
var u = require("./8724.js");
var f = require("./5492.js");
class p {
  constructor(e) {
    i.add(this);
    a.set(this, undefined);
    s.set(this, undefined);
    o.set(this, undefined);
    (0, h.GG)(this, a, e, "f");
    (0, h.GG)(this, s, (0, h.gn)(this, a, "f").loadUserProfileSlot() ?? 0, "f");
    (0, h.GG)(this, o, (0, h.gn)(this, i, "m", c).call(this, (0, h.gn)(this, s, "f")), "f");
  }
  static createToken() {
    let e = "";
    try {
      const t = new Uint8Array(32);
      crypto.getRandomValues(t);
      e += t.toString();
    } catch {}
    try {
      e += crypto.randomUUID();
    } catch {}
    if (e.length == 0) {
      throw new Error("Failed to generate user token");
    }
    return (0, d.sha256)(e);
  }
  createProfile(e, t, n, i, r) {
    return !!this.isValidToken(t) && ((0, h.gn)(this, a, "f").saveUserProfile(e, new f.A(t, n, i, r, false)), (0, h.gn)(this, a, "f").loadUserProfile(e) != null);
  }
  isValidToken(e) {
    return !!/^[0-9a-f]*$/.test(e) && e.length == 64;
  }
  hasDuplicateToken(e) {
    for (let t = 0; t < r.maxNumberOfProfiles; t++) {
      if ((0, h.gn)(this, a, "f").loadUserProfile(t)?.token == e) {
        return true;
      }
    }
    return false;
  }
  firstOccupiedProfileSlot() {
    for (let e = 0; e < r.maxNumberOfProfiles; e++) {
      if ((0, h.gn)(this, a, "f").loadUserProfile(e) != null) {
        return e;
      }
    }
    return null;
  }
  firstFreeProfileSlot() {
    for (let e = 0; e < r.maxNumberOfProfiles; e++) {
      if ((0, h.gn)(this, a, "f").loadUserProfile(e) == null) {
        return e;
      }
    }
    return null;
  }
  deleteProfileSlot(e) {
    (0, h.gn)(this, a, "f").deleteAllRecordsForProfile(e);
    (0, h.gn)(this, a, "f").deleteUserProfile(e);
  }
  setProfileSlot(e) {
    if (!Number.isSafeInteger(e) || e < 0) {
      throw new Error("Profile slot is invalid");
    }
    (0, h.GG)(this, s, e, "f");
    (0, h.GG)(this, o, (0, h.gn)(this, i, "m", c).call(this, (0, h.gn)(this, s, "f")), "f");
    (0, h.gn)(this, a, "f").saveUserProfileSlot((0, h.gn)(this, s, "f"));
  }
  setNickname(e, t = (0, h.gn)(this, s, "f")) {
    let n;
    n = t == (0, h.gn)(this, s, "f") ? (0, h.gn)(this, o, "f") : (0, h.gn)(this, i, "m", c).call(this, t);
    n.nickname = e;
    (0, h.gn)(this, a, "f").saveUserProfile(t, n);
  }
  setCountryCode(e, t = (0, h.gn)(this, s, "f")) {
    let n;
    n = t == (0, h.gn)(this, s, "f") ? (0, h.gn)(this, o, "f") : (0, h.gn)(this, i, "m", c).call(this, t);
    n.countryCode = e;
    (0, h.gn)(this, a, "f").saveUserProfile(t, n);
  }
  setCarStyle(e, t = (0, h.gn)(this, s, "f")) {
    let n;
    n = t == (0, h.gn)(this, s, "f") ? (0, h.gn)(this, o, "f") : (0, h.gn)(this, i, "m", c).call(this, t);
    n.carStyle = e;
    (0, h.gn)(this, a, "f").saveUserProfile(t, n);
  }
  setIsVerifier(e, t = (0, h.gn)(this, s, "f")) {
    let n;
    n = t == (0, h.gn)(this, s, "f") ? (0, h.gn)(this, o, "f") : (0, h.gn)(this, i, "m", c).call(this, t);
    n.isVerifier = e;
    (0, h.gn)(this, a, "f").saveUserProfile(t, n);
  }
  get profileSlot() {
    return (0, h.gn)(this, s, "f");
  }
  getCurrentUserProfile() {
    return (0, h.gn)(this, o, "f").clone();
  }
  getUserProfile(e) {
    if (e == (0, h.gn)(this, s, "f")) {
      return this.getCurrentUserProfile();
    }
    {
      const t = (0, h.gn)(this, a, "f").loadUserProfile(e);
      return t ?? null;
    }
  }
  syncUserProfile(e) {
    const t = this.getCurrentUserProfile();
    e.getUser(t.token).then(e => {
      if (e == null) {
        return;
      }
      const n = this.getCurrentUserProfile();
      if (n.token == t.token && n.nickname == t.nickname && n.countryCode == t.countryCode && n.carStyle.serialize() == t.carStyle.serialize()) {
        this.setNickname(e.nickname);
        this.setCountryCode(e.countryCode);
        this.setCarStyle(e.carStyle);
        this.setIsVerifier(e.isVerifier);
      }
    }).catch(e => {
      console.error(e);
    });
  }
}
r = p;
a = new WeakMap();
s = new WeakMap();
o = new WeakMap();
i = new WeakSet();
l = function (e) {
  const t = r.createToken();
  const n = r.defaultNickname;
  const i = u.A.default();
  (0, h.gn)(this, a, "f").saveUserProfile(e, new f.A(t, n, null, i, false));
};
c = function (e) {
  if ((0, h.gn)(this, a, "f").loadUserProfile(e) == null) {
    (0, h.gn)(this, i, "m", l).call(this, e);
  }
  return (0, h.gn)(this, a, "f").loadUserProfile(e) ?? new f.A();
};
p.defaultNickname = "Anonymous";
p.maxNumberOfProfiles = 3;
export const A = p;