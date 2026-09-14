module.exports = function (e) {
  if (typeof document == "undefined") {
    return {
      update: function () {},
      remove: function () {}
    };
  }
  var t = e.insertStyleElement(e);
  return {
    update: function (n) {
      (function (e, t, n) {
        var i = "";
        if (n.supports) {
          i += `@supports (${n.supports}) {`;
        }
        if (n.media) {
          i += `@media ${n.media} {`;
        }
        var r = n.layer !== undefined;
        if (r) {
          i += `@layer${n.layer.length > 0 ? ` ${n.layer}` : ""} {`;
        }
        i += n.css;
        if (r) {
          i += "}";
        }
        if (n.media) {
          i += "}";
        }
        if (n.supports) {
          i += "}";
        }
        var a = n.sourceMap;
        if (a && typeof btoa != "undefined") {
          i += `
/*# sourceMappingURL=data:application/json;base64,${btoa(unescape(encodeURIComponent(JSON.stringify(a))))} */`;
        }
        t.styleTagTransform(i, e, t.options);
      })(t, e, n);
    },
    remove: function () {
      (function (e) {
        if (e.parentNode === null) {
          return false;
        }
        e.parentNode.removeChild(e);
      })(t);
    }
  };
};