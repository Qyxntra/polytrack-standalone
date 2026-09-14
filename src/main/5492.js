var i = require("./1312.js");
var r = require("./8724.js");
var a = require("./2522.js");
class s {
  constructor(e = a.A.createToken(), t = a.A.defaultNickname, n = null, i = r.A.default(), s = false) {
    this.token = e;
    this.nickname = t;
    this.countryCode = n;
    this.carStyle = i;
    this.isVerifier = s;
  }
  get tokenHash() {
    return (0, i.sha256)(this.token);
  }
  clone() {
    return new s(this.token, this.nickname, this.countryCode, this.carStyle, this.isVerifier);
  }
}
export const A = s;