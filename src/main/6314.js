module.exports = function (e) {
  var t = [];
  t.toString = function () {
    return this.map(function (t) {
      var n = "";
      var i = t[5] !== undefined;
      if (t[4]) {
        n += `@supports (${t[4]}) {`;
      }
      if (t[2]) {
        n += `@media ${t[2]} {`;
      }
      if (i) {
        n += `@layer${t[5].length > 0 ? ` ${t[5]}` : ""} {`;
      }
      n += e(t);
      if (i) {
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
  t.i = function (e, n, i, r, a) {
    if (typeof e == "string") {
      e = [[null, e, undefined]];
    }
    var s = {};
    if (i) {
      for (var o = 0; o < this.length; o++) {
        var l = this[o][0];
        if (l != null) {
          s[l] = true;
        }
      }
    }
    for (var c = 0; c < e.length; c++) {
      var h = [].concat(e[c]);
      if (!i || !s[h[0]]) {
        if (a !== undefined) {
          if (h[5] !== undefined) {
            h[1] = `@layer${h[5].length > 0 ? ` ${h[5]}` : ""} {${h[1]}}`;
          }
          h[5] = a;
        }
        if (n) {
          if (h[2]) {
            h[1] = `@media ${h[2]} {${h[1]}}`;
            h[2] = n;
          } else {
            h[2] = n;
          }
        }
        if (r) {
          if (h[4]) {
            h[1] = `@supports (${h[4]}) {${h[1]}}`;
            h[4] = r;
          } else {
            h[4] = `${r}`;
          }
        }
        t.push(h);
      }
    }
  };
  return t;
};