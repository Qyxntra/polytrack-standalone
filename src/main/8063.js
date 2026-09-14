var i = require("./3075.js");
var r = require("./7754.js");
var a = require("./9117.js");
var s = require("./494.js");
var o = require("./2498.js");
var l = require("./7852.js");
var c = require("./7781.js");
var h = require("./7929.js");
var d = require("./2600.js");
export function _(e) {
  const t = r.D(e);
  if (t == null) {
    return null;
  }
  const n = new i.Ay.Inflate();
  n.push(t, true);
  if (n.err) {
    return null;
  }
  const u = n.result;
  if (!(u instanceof Uint8Array)) {
    return null;
  }
  const f = new a.A(l.A.Summer, new h.A());
  let p = 0;
  while (p < u.length) {
    if (u.length - p < 2) {
      return null;
    }
    let e = u[p + 0] | u[p + 1] << 8;
    p += 2;
    let t = o.A.Default;
    if (e >= 134 && e <= 178) {
      switch (e) {
        case 134:
          e = s.A.Block;
          t = o.A.Custom1;
          break;
        case 135:
          e = s.A.HalfBlock;
          t = o.A.Custom1;
          break;
        case 136:
          e = s.A.QuarterBlock;
          t = o.A.Custom1;
          break;
        case 137:
          e = s.A.BlockSlopedDown;
          t = o.A.Custom1;
          break;
        case 138:
          e = s.A.BlockSlopedDownInnerCorner;
          t = o.A.Custom1;
          break;
        case 139:
          e = s.A.BlockSlopedDownOuterCorner;
          t = o.A.Custom1;
          break;
        case 140:
          e = s.A.BlockSlopedUp;
          t = o.A.Custom1;
          break;
        case 141:
          e = s.A.BlockSlopedUpInnerCorner;
          t = o.A.Custom1;
          break;
        case 142:
          e = s.A.BlockSlopedUpOuterCorner;
          t = o.A.Custom1;
          break;
        case 143:
          e = s.A.BlockSlopeDown;
          t = o.A.Custom1;
          break;
        case 144:
          e = s.A.BlockSlopeUp;
          t = o.A.Custom1;
          break;
        case 145:
          e = s.A.BlockBridge;
          t = o.A.Custom1;
          break;
        case 146:
          e = s.A.BlockBridgeCorner;
          t = o.A.Custom1;
          break;
        case 147:
          e = s.A.BlockBridgeIntersectionT;
          t = o.A.Custom1;
          break;
        case 148:
          e = s.A.BlockBridgeIntersectionCross;
          t = o.A.Custom1;
          break;
        case 149:
          e = s.A.Block;
          t = o.A.Custom6;
          break;
        case 150:
          e = s.A.HalfBlock;
          t = o.A.Custom6;
          break;
        case 151:
          e = s.A.QuarterBlock;
          t = o.A.Custom6;
          break;
        case 152:
          e = s.A.BlockSlopedDown;
          t = o.A.Custom6;
          break;
        case 153:
          e = s.A.BlockSlopedDownInnerCorner;
          t = o.A.Custom6;
          break;
        case 154:
          e = s.A.BlockSlopedDownOuterCorner;
          t = o.A.Custom6;
          break;
        case 155:
          e = s.A.BlockSlopedUp;
          t = o.A.Custom6;
          break;
        case 156:
          e = s.A.BlockSlopedUpInnerCorner;
          t = o.A.Custom6;
          break;
        case 157:
          e = s.A.BlockSlopedUpOuterCorner;
          t = o.A.Custom6;
          break;
        case 158:
          e = s.A.BlockSlopeDown;
          t = o.A.Custom6;
          break;
        case 159:
          e = s.A.BlockSlopeUp;
          t = o.A.Custom6;
          break;
        case 160:
          e = s.A.BlockBridge;
          t = o.A.Custom6;
          break;
        case 161:
          e = s.A.BlockBridgeCorner;
          t = o.A.Custom6;
          break;
        case 162:
          e = s.A.BlockBridgeIntersectionT;
          t = o.A.Custom6;
          break;
        case 163:
          e = s.A.BlockBridgeIntersectionCross;
          t = o.A.Custom6;
          break;
        case 164:
          e = s.A.Block;
          t = o.A.Custom0;
          break;
        case 165:
          e = s.A.HalfBlock;
          t = o.A.Custom0;
          break;
        case 166:
          e = s.A.QuarterBlock;
          t = o.A.Custom0;
          break;
        case 167:
          e = s.A.BlockSlopedDown;
          t = o.A.Custom0;
          break;
        case 168:
          e = s.A.BlockSlopedDownInnerCorner;
          t = o.A.Custom0;
          break;
        case 169:
          e = s.A.BlockSlopedDownOuterCorner;
          t = o.A.Custom0;
          break;
        case 170:
          e = s.A.BlockSlopedUp;
          t = o.A.Custom0;
          break;
        case 171:
          e = s.A.BlockSlopedUpInnerCorner;
          t = o.A.Custom0;
          break;
        case 172:
          e = s.A.BlockSlopedUpOuterCorner;
          t = o.A.Custom0;
          break;
        case 173:
          e = s.A.BlockSlopeDown;
          t = o.A.Custom0;
          break;
        case 174:
          e = s.A.BlockSlopeUp;
          t = o.A.Custom0;
          break;
        case 175:
          e = s.A.BlockBridge;
          t = o.A.Custom0;
          break;
        case 176:
          e = s.A.BlockBridgeCorner;
          t = o.A.Custom0;
          break;
        case 177:
          e = s.A.BlockBridgeIntersectionT;
          t = o.A.Custom0;
          break;
        case 178:
          e = s.A.BlockBridgeIntersectionCross;
          t = o.A.Custom0;
      }
    }
    let n = null;
    let i = {
      x: 0,
      y: 0,
      z: 0
    };
    if (e == 79) {
      n = s.A.WallTrackFloorPlaneCorner;
    } else if (e == 81) {
      n = s.A.WallTrackCeilingPlaneCorner;
      i = {
        x: 0,
        y: 3,
        z: 0
      };
    } else if (e >= 87 && e <= 98) {
      switch (e) {
        case 87:
          e = s.A.Slope;
          n = s.A.BlockSlopedUp;
          break;
        case 88:
          e = s.A.SlopeUp;
          n = s.A.BlockSlopeUp;
          break;
        case 89:
          e = s.A.SlopeDown;
          n = s.A.BlockSlopeDown;
          break;
        case 90:
          e = s.A.SlopeUpLeftWide;
          n = s.A.BlockSlopeUp;
          break;
        case 91:
          e = s.A.SlopeUpRightWide;
          n = s.A.BlockSlopeUp;
          break;
        case 92:
          e = s.A.SlopeDownLeftWide;
          n = s.A.BlockSlopeDown;
          break;
        case 93:
          e = s.A.SlopeDownRightWide;
          n = s.A.BlockSlopeDown;
          break;
        case 94:
          e = s.A.SlopeLeftWide;
          n = s.A.BlockSlopedUp;
          break;
        case 95:
          e = s.A.SlopeRightWide;
          n = s.A.BlockSlopedUp;
          break;
        case 96:
          e = s.A.PlaneSlopeUp;
          n = s.A.BlockSlopeUp;
          break;
        case 97:
          e = s.A.PlaneSlopeDown;
          n = s.A.BlockSlopeDown;
          break;
        case 98:
          e = s.A.PlaneSlope;
          n = s.A.BlockSlopedUp;
          break;
        default:
          throw new Error("Invalid track part id");
      }
    } else if (e == 40) {
      e = s.A.Slope;
      n = s.A.PillarTopSlope;
    } else if (e == 84) {
      e = s.A.Slope;
      n = s.A.PillarShortSlope;
    } else if (e == 99) {
      e = s.A.PlaneSlope;
      n = s.A.PillarTopSlope;
    } else if (e == 100) {
      e = s.A.PlaneSlope;
      n = s.A.PillarShortSlope;
    }
    if (!(e in s.A)) {
      return null;
    }
    if (u.length - p < 4) {
      return null;
    }
    const r = u[p + 0] | u[p + 1] << 8 | u[p + 2] << 16 | u[p + 3] << 24;
    p += 4;
    for (let a = 0; a < r; ++a) {
      if (u.length - p < 3) {
        return null;
      }
      const s = (u[p + 0] | u[p + 1] << 8 | u[p + 2] << 16) - 8388608;
      p += 3;
      if (u.length - p < 3) {
        return null;
      }
      const l = u[p + 0] | u[p + 1] << 8 | u[p + 2] << 16;
      p += 3;
      if (u.length - p < 3) {
        return null;
      }
      const h = (u[p + 0] | u[p + 1] << 8 | u[p + 2] << 16) - 8388608;
      p += 3;
      if (u.length - p < 1) {
        return null;
      }
      const g = u[p + 0];
      p += 1;
      if (g < 0 || g > 3) {
        return null;
      }
      let m = null;
      if (d.bK.includes(e)) {
        if (u.length - p < 2) {
          return null;
        }
        m = u[p + 0] | u[p + 1] << 8;
        p += 2;
      }
      let A = null;
      if (d.l1.includes(e)) {
        A = a == r - 1 ? 1 : 0;
      }
      if (n != null) {
        f.addPart(s * 4 + i.x, l + i.y, h * 4 + i.z, n, g, c.A.YPositive, o.A.Default, null, null);
      }
      f.addPart(s * 4, l, h * 4, e, g, c.A.YPositive, t, m, A);
    }
  }
  return f;
}
export function U(e) {
  if (!e.startsWith("v3")) {
    return null;
  }
  const t = e.substring(2, 4);
  const n = r.D(t);
  if (n == null) {
    return null;
  }
  if (n.length != 1) {
    return null;
  }
  const i = n[0];
  const a = e.substring(4, 4 + i);
  const s = r.D(a);
  if (s == null) {
    return null;
  }
  let o;
  try {
    o = new TextDecoder("utf-8").decode(s);
  } catch {
    return null;
  }
  const l = _(e.substring(4 + i));
  if (l == null) {
    return null;
  } else {
    return {
      trackMetadata: {
        name: o,
        author: null,
        lastModified: null
      },
      trackData: l
    };
  }
}