var i = require("./1601.js");
var r = i;
var a = require("./6314.js");
var s = a(r);
s.push([module.id, ".ghost-loading-ui {\n\tposition: absolute;\n\tright: 0;\n\ttop: 0;\n\tmargin: 4px;\n\tcolor: var(--text-color);\n\tfont-size: 22px;\n\tfont-weight: normal;\n\ttext-shadow: 1px 1px 1px var(--surface-color), -1px 1px 1px var(--surface-color), -1px -1px 1px var(--surface-color), 1px -1px 1px var(--surface-color);\n\ttransition: opacity 0.25s ease-in-out;\n}\n.ghost-loading-ui.hide {\n\topacity: 0;\n\ttransform: translateX(20px);\n\ttransition: opacity 0.25s ease-in-out 0.5s, transform 0.25s ease-in-out 0.5s;\n}\n.ghost-loading-ui.down {\n\ttop: initial;\n\tbottom: 0;\n}\n\n.ghost-loading-ui > .percentage {\n\tdisplay: inline-block;\n\twidth: 60px;\n\ttext-align: center;\n}\n", ""]);
export const A = s;