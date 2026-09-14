var i = require("./1601.js");
var r = i;
var a = require("./6314.js");
var s = a(r);
s.push([module.id, ".loading-screen-ui {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n}\n.loading-screen-ui.background {\n\tbackground-color: rgba(20, 20, 45, 0.8);\n\t-webkit-backdrop-filter: blur(4px);\n\tbackdrop-filter: blur(4px);\n}\n\n.loading-screen-ui > .loading-spinner-container {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: 100%;\n\theight: 100%;\n\topacity: 0;\n\tanimation: loading-screen-ui-fade-in 0.5s forwards;\n}\n\n@keyframes loading-screen-ui-fade-in {\n\tfrom {\n\t\topacity: 0;\n\t}\n\tto {\n\t\topacity: 1;\n\t}\n}", ""]);
export const A = s;