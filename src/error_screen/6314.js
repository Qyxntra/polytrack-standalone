module.exports = function (e) {
  var t = [];
  t.toString = function () {
    return this.map(function (t) {
      var n = "";
      var r = t[5] !== undefined;
      if (t[4]) {
        n += `@supports (${t[4]}) {`;
      }
      if (t[2]) {
        n += `@media ${t[2]} {`;
      }
      if (r) {
        n += `@layer${t[5].length > 0 ? ` ${t[5]}` : ""} {`;
      }
      n += e(t);
      if (r) {
        n += "}";
      }
      if (t[2]) {
        n += "}";
      }
      if (t[4]) {
        n += "}";
      }
      return n;
    }).join("");
  };
  t.i = function (e, n, r, o, a) {
    if (typeof e == "string") {
      e = [[null, e, undefined]];
    }
    var c = {};
    if (r) {
      for (var i = 0; i < this.length; i++) {
        var s = this[i][0];
        if (s != null) {
          c[s] = true;
        }
      }
    }
    for (var l = 0; l < e.length; l++) {
      var d = [].concat(e[l]);
      if (!r || !c[d[0]]) {
        if (a !== undefined) {
          if (d[5] !== undefined) {
            d[1] = `@layer${d[5].length > 0 ? ` ${d[5]}` : ""} {${d[1]}}`;
          }
          d[5] = a;
        }
        if (n) {
          if (d[2]) {
            d[1] = `@media ${d[2]} {${d[1]}}`;
            d[2] = n;
          } else {
            d[2] = n;
          }
        }
        if (o) {
          if (d[4]) {
            d[1] = `@supports (${d[4]}) {${d[1]}}`;
            d[4] = o;
          } else {
            d[4] = `${o}`;
          }
        }
        t.push(d);
      }
    }
  };
  return t;
};