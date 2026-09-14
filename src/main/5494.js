var i = require("./4922.js");
var r = require("./7781.js");
const a = [[new i.PTz(0, 0, 0, 1), new i.PTz(0, 0.7071067811865475, 0, 0.7071067811865476), new i.PTz(0, 1, 0, 0), new i.PTz(0, 0.7071067811865476, 0, -0.7071067811865475)], [new i.PTz(0, 0, 1, 0), new i.PTz(0.7071067811865475, 0, 0.7071067811865476, 0), new i.PTz(1, 0, 0, 0), new i.PTz(0.7071067811865476, 0, -0.7071067811865475, 0)], [new i.PTz(0, 0, -0.7071067811865477, 0.7071067811865475), new i.PTz(0.5, 0.5, -0.5, 0.5), new i.PTz(0.7071067811865475, 0.7071067811865477, 0, 0), new i.PTz(0.5, 0.5, 0.5, -0.5)], [new i.PTz(0, 0, 0.7071067811865475, 0.7071067811865476), new i.PTz(0.5, -0.5, 0.5, 0.5), new i.PTz(0.7071067811865476, -0.7071067811865475, 0, 0), new i.PTz(0.5, -0.5, -0.5, -0.5)], [new i.PTz(0.7071067811865475, 0, 0, 0.7071067811865476), new i.PTz(0.5, 0.5, 0.5, 0.5), new i.PTz(0, 0.7071067811865476, 0.7071067811865475, 0), new i.PTz(-0.5, 0.5, 0.5, -0.5)], [new i.PTz(-0.7071067811865477, 0, 0, 0.7071067811865475), new i.PTz(-0.5, -0.5, 0.5, 0.5), new i.PTz(0, -0.7071067811865475, 0.7071067811865477, 0), new i.PTz(0.5, -0.5, 0.5, -0.5)]];
export function hT(e, t) {
  return a[t][e].clone();
}
export function sR(e, t, n, i, a) {
  if (a == r.A.YNegative || a == r.A.XNegative || a == r.A.ZNegative) {
    switch (i) {
      case 0:
        break;
      case 1:
        [e, n] = [-n - 1, e];
        break;
      case 2:
        [e, n] = [-e - 1, -n - 1];
        break;
      case 3:
        [e, n] = [n, -e - 1];
        break;
      default:
        throw new Error("Invalid rotation");
    }
  } else {
    switch (i) {
      case 0:
        break;
      case 1:
        [e, n] = [n, -e - 1];
        break;
      case 2:
        [e, n] = [-e - 1, -n - 1];
        break;
      case 3:
        [e, n] = [-n - 1, e];
        break;
      default:
        throw new Error("Invalid rotation");
    }
  }
  if (a != r.A.YPositive) {
    if (a == r.A.YNegative) {
      [e, t] = [-e - 1, -t - 1];
    } else if (a == r.A.XPositive) {
      [e, t] = [t, -e - 1];
    } else if (a == r.A.XNegative) {
      [e, t] = [-t - 1, e];
    } else if (a == r.A.ZPositive) {
      [t, n] = [-n - 1, t];
    } else {
      [t, n] = [n, -t - 1];
    }
  }
  return [e, t, n];
}
export function yV(e, t, n, i, a) {
  if (a == r.A.YNegative || a == r.A.XNegative || a == r.A.ZNegative) {
    switch (i) {
      case 0:
        break;
      case 1:
        [e, n] = [-n, e];
        break;
      case 2:
        [e, n] = [-e, -n];
        break;
      case 3:
        [e, n] = [n, -e];
        break;
      default:
        throw new Error("Invalid rotation");
    }
  } else {
    switch (i) {
      case 0:
        break;
      case 1:
        [e, n] = [n, -e];
        break;
      case 2:
        [e, n] = [-e, -n];
        break;
      case 3:
        [e, n] = [-n, e];
        break;
      default:
        throw new Error("Invalid rotation");
    }
  }
  if (a != r.A.YPositive) {
    if (a == r.A.YNegative) {
      [e, t] = [-e, -t];
    } else if (a == r.A.XPositive) {
      [e, t] = [t, -e];
    } else if (a == r.A.XNegative) {
      [e, t] = [-t, e];
    } else if (a == r.A.ZPositive) {
      [t, n] = [-n, t];
    } else {
      [t, n] = [n, -t];
    }
  }
  return [e, t, n];
}
export function Dr(e, t, n, i) {
  let a;
  let s;
  switch (i) {
    case r.A.YPositive:
      switch (t) {
        case r.A.YPositive:
          s = r.A.YPositive;
          break;
        case r.A.YNegative:
          s = r.A.YNegative;
          break;
        case r.A.XPositive:
          s = [r.A.XPositive, r.A.ZNegative, r.A.XNegative, r.A.ZPositive][n];
          break;
        case r.A.XNegative:
          s = [r.A.XNegative, r.A.ZPositive, r.A.XPositive, r.A.ZNegative][n];
          break;
        case r.A.ZPositive:
          s = [r.A.ZPositive, r.A.XPositive, r.A.ZNegative, r.A.XNegative][n];
          break;
        case r.A.ZNegative:
          s = [r.A.ZNegative, r.A.XNegative, r.A.ZPositive, r.A.XPositive][n];
      }
      a = s == r.A.XNegative || s == r.A.ZNegative ? -n : n;
      break;
    case r.A.YNegative:
      switch (t) {
        case r.A.YPositive:
          s = r.A.YNegative;
          break;
        case r.A.YNegative:
          s = r.A.YPositive;
          break;
        case r.A.XPositive:
          s = [r.A.XNegative, r.A.ZPositive, r.A.XPositive, r.A.ZNegative][n];
          break;
        case r.A.XNegative:
          s = [r.A.XPositive, r.A.ZNegative, r.A.XNegative, r.A.ZPositive][n];
          break;
        case r.A.ZPositive:
          s = [r.A.ZPositive, r.A.XPositive, r.A.ZNegative, r.A.XNegative][n];
          break;
        case r.A.ZNegative:
          s = [r.A.ZNegative, r.A.XNegative, r.A.ZPositive, r.A.XPositive][n];
      }
      a = t == r.A.ZNegative ? -n : n;
      if (t != r.A.XPositive && t != r.A.XNegative || s != r.A.ZNegative) {
        if (t == r.A.ZPositive && s != r.A.XNegative || t == r.A.ZNegative && s != r.A.XPositive) {
          a += 2;
        }
      } else {
        a += 2;
      }
      break;
    case r.A.XPositive:
      switch (t) {
        case r.A.YPositive:
          s = r.A.XPositive;
          break;
        case r.A.YNegative:
          s = r.A.XNegative;
          break;
        case r.A.XPositive:
          s = [r.A.YNegative, r.A.ZNegative, r.A.YPositive, r.A.ZPositive][n];
          break;
        case r.A.XNegative:
          s = [r.A.YPositive, r.A.ZPositive, r.A.YNegative, r.A.ZNegative][n];
          break;
        case r.A.ZPositive:
          s = [r.A.ZPositive, r.A.YNegative, r.A.ZNegative, r.A.YPositive][n];
          break;
        case r.A.ZNegative:
          s = [r.A.ZNegative, r.A.YPositive, r.A.ZPositive, r.A.YNegative][n];
      }
      a = n;
      if (s == r.A.ZPositive) {
        a -= 1;
      } else if (s == r.A.ZNegative) {
        a += 1;
      }
      if ((t == r.A.ZPositive || t == r.A.ZNegative) && s == r.A.YNegative || (t == r.A.ZPositive || t == r.A.ZNegative) && s == r.A.ZNegative) {
        a += 2;
      }
      break;
    case r.A.XNegative:
      switch (t) {
        case r.A.YPositive:
          s = r.A.XNegative;
          break;
        case r.A.YNegative:
          s = r.A.XPositive;
          break;
        case r.A.XPositive:
          s = [r.A.YPositive, r.A.ZPositive, r.A.YNegative, r.A.ZNegative][n];
          break;
        case r.A.XNegative:
          s = [r.A.YNegative, r.A.ZNegative, r.A.YPositive, r.A.ZPositive][n];
          break;
        case r.A.ZPositive:
          s = [r.A.ZPositive, r.A.YNegative, r.A.ZNegative, r.A.YPositive][n];
          break;
        case r.A.ZNegative:
          s = [r.A.ZNegative, r.A.YPositive, r.A.ZPositive, r.A.YNegative][n];
      }
      a = n;
      if (s == r.A.ZPositive) {
        a -= 1;
      } else if (s == r.A.ZNegative) {
        a += 1;
      }
      if ((t == r.A.ZPositive || t == r.A.ZNegative) && s == r.A.YPositive || (t == r.A.ZPositive || t == r.A.ZNegative) && s == r.A.ZPositive) {
        a += 2;
      }
      break;
    case r.A.ZPositive:
      switch (t) {
        case r.A.YPositive:
          s = r.A.ZPositive;
          break;
        case r.A.YNegative:
          s = r.A.ZNegative;
          break;
        case r.A.XPositive:
          s = [r.A.XPositive, r.A.YPositive, r.A.XNegative, r.A.YNegative][n];
          break;
        case r.A.XNegative:
          s = [r.A.XNegative, r.A.YNegative, r.A.XPositive, r.A.YPositive][n];
          break;
        case r.A.ZPositive:
          s = [r.A.YNegative, r.A.XPositive, r.A.YPositive, r.A.XNegative][n];
          break;
        case r.A.ZNegative:
          s = [r.A.YPositive, r.A.XNegative, r.A.YNegative, r.A.XPositive][n];
      }
      a = n;
      if (t == r.A.XPositive && (s == r.A.XPositive || s == r.A.XNegative)) {
        a += 1;
      }
      if (t == r.A.XNegative && (s == r.A.XPositive || s == r.A.XNegative)) {
        a += 1;
      }
      if (t == r.A.ZPositive || t == r.A.ZNegative) {
        if (s == r.A.YNegative) {
          a += 2;
        } else if (s == r.A.XPositive) {
          a += 1;
        } else if (s == r.A.XNegative) {
          a -= 1;
        }
      }
      if (t == r.A.YNegative) {
        a += 2;
      }
      break;
    case r.A.ZNegative:
      switch (t) {
        case r.A.YPositive:
          s = r.A.ZNegative;
          break;
        case r.A.YNegative:
          s = r.A.ZPositive;
          break;
        case r.A.XPositive:
          s = [r.A.XPositive, r.A.YPositive, r.A.XNegative, r.A.YNegative][n];
          break;
        case r.A.XNegative:
          s = [r.A.XNegative, r.A.YNegative, r.A.XPositive, r.A.YPositive][n];
          break;
        case r.A.ZPositive:
          s = [r.A.YPositive, r.A.XNegative, r.A.YNegative, r.A.XPositive][n];
          break;
        case r.A.ZNegative:
          s = [r.A.YNegative, r.A.XPositive, r.A.YPositive, r.A.XNegative][n];
      }
      a = n;
      if (t == r.A.XPositive || t == r.A.XNegative) {
        if (s == r.A.YPositive || s == r.A.YNegative) {
          a += 2;
        } else if (s == r.A.XPositive || s == r.A.XNegative) {
          a -= 1;
        }
      }
      if (t == r.A.ZPositive || t == r.A.ZNegative) {
        if (s == r.A.YNegative) {
          a += 2;
        } else if (s == r.A.XPositive) {
          a += 1;
        } else if (s == r.A.XNegative) {
          a -= 1;
        }
      }
      if (t == r.A.YNegative) {
        a += 2;
      }
  }
  if ((t == r.A.YNegative || t == r.A.XNegative || t == r.A.ZNegative) == (s == r.A.YNegative || s == r.A.XNegative || s == r.A.ZNegative)) {
    a += e;
  } else {
    a -= e;
  }
  return {
    rotation: (a % 4 + 4) % 4,
    rotationAxis: s
  };
}