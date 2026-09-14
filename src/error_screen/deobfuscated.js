(() => {
  "use strict";

  var e = {
    540: e => {
      e.exports = function (e) {
        var t = document.createElement("style");
        e.setAttributes(t, e.attributes);
        e.insert(t, e.options);
        return t;
      };
    },
    1113: e => {
      e.exports = function (e, t) {
        if (t.styleSheet) {
          t.styleSheet.cssText = e;
        } else {
          while (t.firstChild) {
            t.removeChild(t.firstChild);
          }
          t.appendChild(document.createTextNode(e));
        }
      };
    },
    1601: e => {
      e.exports = function (e) {
        return e[1];
      };
    },
    4503: (e, t, n) => {
      n.d(t, {
        A: () => i
      });
      var r = n(1601);
      var o = n.n(r);
      var a = n(6314);
      var c = n.n(a)()(o());
      c.push([e.id, "#error-screen {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: max(10px, var(--safe-area-top-unscaled)) max(10px, var(--safe-area-right-unscaled)) max(10px, var(--safe-area-bottom-unscaled)) max(10px, var(--safe-area-left-unscaled));\n\tbox-sizing: border-box;\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\tz-index: 1000;\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: var(--surface-color);\n}\n\n#error-screen > .title {\n\tfont-size: 28px;\n\tcolor: var(--text-color);\n}\n\n#error-screen > .version, #error-screen > .platform, #error-screen > .user-agent {\n\tfont-size: 20px;\n\tcolor: var(--text-color);\n\topacity: 0.5;\n}\n\n#error-screen > textarea {\n\tmargin: 10px 0;\n\theight: 100%;\n\tflex-grow: 1;\n\tbackground-color: var(--surface-tertiary-color);\n\tborder: none;\n\tresize: none;\n\tcolor: var(--text-color);\n\tword-break: break-word;\n\tfont-size: 20px;\n}\n#error-screen > textarea:focus-visible {\n\toutline: none;\n}\n\n#error-screen > .button-container {\n\tdisplay: flex;\n}\n\n#error-screen > .button-container > button:first-of-type {\n\tmargin-right: auto;\n}\n", ""]);
      const i = c;
    },
    5056: (e, t, n) => {
      e.exports = function (e) {
        var t = n.nc;
        if (t) {
          e.setAttribute("nonce", t);
        }
      };
    },
    5072: e => {
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
      e.exports = function (e, o) {
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
    },
    6314: e => {
      e.exports = function (e) {
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
    },
    7659: e => {
      var t = {};
      e.exports = function (e, n) {
        var r = function (e) {
          if (t[e] === undefined) {
            var n = document.querySelector(e);
            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) {
              try {
                n = n.contentDocument.head;
              } catch (e) {
                n = null;
              }
            }
            t[e] = n;
          }
          return t[e];
        }(e);
        if (!r) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }
        r.appendChild(n);
      };
    },
    7825: e => {
      e.exports = function (e) {
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
              var r = "";
              if (n.supports) {
                r += `@supports (${n.supports}) {`;
              }
              if (n.media) {
                r += `@media ${n.media} {`;
              }
              var o = n.layer !== undefined;
              if (o) {
                r += `@layer${n.layer.length > 0 ? ` ${n.layer}` : ""} {`;
              }
              r += n.css;
              if (o) {
                r += "}";
              }
              if (n.media) {
                r += "}";
              }
              if (n.supports) {
                r += "}";
              }
              var a = n.sourceMap;
              if (a && typeof btoa != "undefined") {
                r += `
/*# sourceMappingURL=data:application/json;base64,${btoa(unescape(encodeURIComponent(JSON.stringify(a))))} */`;
              }
              t.styleTagTransform(r, e, t.options);
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
    }
  };
  var t = {};
  function n(r) {
    var o = t[r];
    if (o !== undefined) {
      return o.exports;
    }
    var a = t[r] = {
      id: r,
      exports: {}
    };
    e[r](a, a.exports, n);
    return a.exports;
  }
  n.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    n.d(t, {
      a: t
    });
    return t;
  };
  n.d = (e, t) => {
    for (var r in t) {
      if (n.o(t, r) && !n.o(e, r)) {
        Object.defineProperty(e, r, {
          enumerable: true,
          get: t[r]
        });
      }
    }
  };
  n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
  n.nc = undefined;
  var r = n(5072);
  var o = n.n(r);
  var a = n(7825);
  var c = n.n(a);
  var i = n(7659);
  var s = n.n(i);
  var l = n(5056);
  var d = n.n(l);
  var u = n(540);
  var p = n.n(u);
  var f = n(1113);
  var m = n.n(f);
  var v = n(4503);
  var h = {};
  h.styleTagTransform = m();
  h.setAttributes = d();
  h.insert = s().bind(null, "head");
  h.domAPI = c();
  h.insertStyleElement = p();
  o()(v.A, h);
  if (v.A && v.A.locals) {
    v.A.locals;
  }
  const x = (() => {
    let e = "polytrack_v5_";
    e += "prod_";
    return e;
  })();
  const y = {
    migrationFinishedKey: x + "migrated",
    startupInfoKey: x + "startup_info",
    recordKeyPrefix: x + "record_",
    trackKeyPrefix: x + "track_",
    userProfileSlotKey: x + "user_slot",
    userProfileKeyPrefix: x + "user_",
    isMusicEnabledKey: x + "is_music_enabled",
    settingsKey: x + "settings",
    keyBindingsKey: x + "key_bindings",
    trackSelectionTabKey: x + "selected_track_tab",
    unlockedCarStylesKey: x + "unlocked_car_styles"
  };
  Object.freeze(y);
  const g = y;
  let b = null;
  let C = false;
  function w(e) {
    if (!C) {
      if (b == null) {
        const e = document.createElement("div");
        e.id = "error-screen";
        document.body.appendChild(e);
        const t = document.createElement("div");
        t.className = "title";
        t.textContent = "Oh no! PolyTrack encountered an unexpected error!";
        e.appendChild(t);
        const n = document.createElement("div");
        n.className = "version";
        n.textContent = "Version: 0.6.2";
        if (window.polytrackModConfiguration?.modName != null) {
          n.textContent += " (Modded)";
        }
        e.appendChild(n);
        const r = document.createElement("div");
        r.className = "platform";
        r.textContent = "Platform: kodub";
        if (window.location.hostname.length > 0) {
          r.textContent += " (" + window.location.hostname + ")";
        }
        e.appendChild(r);
        const o = document.createElement("div");
        o.className = "user-agent";
        o.textContent = "User Agent: " + navigator.userAgent;
        e.appendChild(o);
        const a = document.createElement("textarea");
        a.readOnly = true;
        e.appendChild(a);
        const c = document.createElement("div");
        c.className = "button-container";
        e.appendChild(c);
        {
          const e = document.createElement("button");
          e.className = "button";
          e.textContent = "Reload";
          e.addEventListener("click", () => {
            window.location.reload();
          });
          c.appendChild(e);
        }
        const i = document.createElement("button");
        i.className = "button";
        i.textContent = "Close";
        i.addEventListener("click", () => {
          document.body.removeChild(e);
          b = null;
          C = true;
        });
        c.appendChild(i);
        {
          const e = document.createElement("button");
          e.className = "button";
          e.textContent = "Reset Settings";
          e.addEventListener("click", () => {
            try {
              window.localStorage.removeItem(g.settingsKey);
              e.disabled = true;
            } catch (e) {
              console.error("Failed to reset settings:", e);
            }
          });
          c.appendChild(e);
        }
        b = {
          element: e,
          textArea: a
        };
      }
      b.textArea.value = e + "\n" + b.textArea.value;
    }
  }
  window.addEventListener("error", e => {
    w(`${e.message}\nSource: ${e.filename}\nLine: ${e.lineno.toString()}\nColumn: ${e.colno.toString()}\n`);
  });
  window.addEventListener("unhandledrejection", e => {
    let t;
    if (e.reason instanceof Error) {
      t = `Unhandled Rejection:\n${e.reason.message}`;
      if (e.reason.stack != null) {
        t += `\nStack:\n${e.reason.stack}`;
      }
    } else {
      t = `Unhandled Rejection:\n${String(e.reason)}`;
    }
    w(t);
  });
})();