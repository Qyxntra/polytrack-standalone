var i = require("./4922.js");
export class t extends i.ZLX {
  constructor(e, t) {
    const n = new i.V9B({
      color: t,
      depthWrite: false
    });
    super(e.geometry, n, e.count);
    for (let t = 0; t < e.count; ++t) {
      const n = new i.kn4();
      e.getMatrixAt(t, n);
      this.setMatrixAt(t, n);
    }
    this.meshMatrix = e.matrixWorld;
    this.frustumCulled = false;
    this.matrixAutoUpdate = false;
    this.renderOrder = -1;
  }
  update(e, t) {
    var n = new i.kn4();
    var r = e.normal.x * t.x + e.normal.y * t.y + e.normal.z * t.z + -e.constant * t.w;
    var a = n.elements;
    a[0] = r - t.x * e.normal.x;
    a[4] = -t.x * e.normal.y;
    a[8] = -t.x * e.normal.z;
    a[12] = -t.x * -e.constant;
    a[1] = -t.y * e.normal.x;
    a[5] = r - t.y * e.normal.y;
    a[9] = -t.y * e.normal.z;
    a[13] = -t.y * -e.constant;
    a[2] = -t.z * e.normal.x;
    a[6] = -t.z * e.normal.y;
    a[10] = r - t.z * e.normal.z;
    a[14] = -t.z * -e.constant;
    a[3] = -t.w * e.normal.x;
    a[7] = -t.w * e.normal.y;
    a[11] = -t.w * e.normal.z;
    a[15] = r - t.w * -e.constant;
    this.matrix.multiplyMatrices(n, this.meshMatrix);
  }
}