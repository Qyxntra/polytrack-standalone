var t = [];
function n(e) {
  var n = -1;
  for (var r = 0; r < t.length; r++) {
    if (t[r].identifier === e) {
      n = r;
      break;
    }
  }
  return n;
}
function r(e, r) {
  var a = {};
  var c = [];
  for (var i = 0; i < e.length; i++) {
    var s = e[i];
    var l = r.base ? s[0] + r.base : s[0];
    var d = a[l] || 0;
    var u = `${l} ${d}`;
    a[l] = d + 1;
    var p = n(u);
    var f = {
      css: s[1],
      media: s[2],
      sourceMap: s[3],
      supports: s[4],
      layer: s[5]
    };
    if (p !== -1) {
      t[p].references++;
      t[p].updater(f);
    } else {
      var m = o(f, r);
      r.byIndex = i;
      t.splice(i, 0, {
        identifier: u,
        updater: m,
        references: 1
      });
    }
    c.push(u);
  }
  return c;
}
function o(e, t) {
  var n = t.domAPI(t);
  n.update(e);
  return function (t) {
    if (t) {
      if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer) {
        return;
      }
      n.update(e = t);
    } else {
      n.remove();
    }
  };
}
module.exports = function (e, o) {
  var a = r(e = e || [], o = o || {});
  return function (e) {
    e = e || [];
    for (var c = 0; c < a.length; c++) {
      var i = n(a[c]);
      t[i].references--;
    }
    var s = r(e, o);
    for (var l = 0; l < a.length; l++) {
      var d = n(a[l]);
      if (t[d].references === 0) {
        t[d].updater();
        t.splice(d, 1);
      }
    }
    a = s;
  };
};