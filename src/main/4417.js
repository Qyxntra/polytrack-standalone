module.exports = function (e, t) {
  t ||= {};
  if (e) {
    e = String(e.__esModule ? e.default : e);
    if (/^['"].*['"]$/.test(e)) {
      e = e.slice(1, -1);
    }
    if (t.hash) {
      e += t.hash;
    }
    if (/["'() \t\n]|(%20)/.test(e) || t.needQuotes) {
      return `"${e.replace(/"/g, "\\\"").replace(/\n/g, "\\n")}"`;
    } else {
      return e;
    }
  } else {
    return e;
  }
};