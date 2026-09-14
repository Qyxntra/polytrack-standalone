var t = [];
function n(e) {
  var n = -1;
  for (var i = 0; i < t.length; i++) {
    if (t[i].identifier === e) {
      n = i;
      break;
    }
  }
  return n;
}
function i(e, i) {
  var a = {};
  var s = [];
  for (var o = 0; o < e.length; o++) {
    var l = e[o];
    var c = i.base ? l[0] + i.base : l[0];
    var h = a[c] || 0;
    var d = `${c} ${h}`;
    a[c] = h + 1;
    var u = n(d);
    var f = {
      css: l[1],
      media: l[2],
      sourceMap: l[3],
      supports: l[4],
      layer: l[5]
    };
    if (u !== -1) {
      t[u].references++;
      t[u].updater(f);
    } else {
      var p = r(f, i);
      i.byIndex = o;
      t.splice(o, 0, {
        identifier: d,
        updater: p,
        references: 1
      });
    }
    s.push(d);
  }
  return s;
}
function r(e, t) {
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
module.exports = function (e, r) {
  var a = i(e = e || [], r = r || {});
  return function (e) {
    e = e || [];
    for (var s = 0; s < a.length; s++) {
      var o = n(a[s]);
      t[o].references--;
    }
    var l = i(e, r);
    for (var c = 0; c < a.length; c++) {
      var h = n(a[c]);
      if (t[h].references === 0) {
        t[h].updater();
        t.splice(h, 1);
      }
    }
    a = l;
  };
};