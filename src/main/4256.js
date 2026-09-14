require("./1635.js");
new WeakMap();
new WeakMap();
new WeakMap();
new WeakMap();
new WeakMap();
new WeakMap();
new WeakMap();
new WeakMap();
new WeakMap();
new WeakMap();
new WeakMap();
new WeakMap();
new WeakMap();
new WeakMap();
new WeakMap();
new WeakSet();
new WeakMap();
new WeakMap();
export function k0(e, t = []) {
  return new Promise((n, i) => {
    const r = document.createElement("script");
    r.addEventListener("load", () => {
      n();
    });
    r.addEventListener("error", e => {
      i(new Error(e.error));
    });
    for (const [e, n] of t) {
      r.setAttribute(e, n);
    }
    r.src = e;
    document.body.appendChild(r);
  });
}
var r;
(function (e) {
  e[e.Loading = 0] = "Loading";
  e[e.Error = 1] = "Error";
  e[e.Ready = 2] = "Ready";
})(r ||= {});
let a = r.Loading;
let s = false;
let o = false;
let l = null;
export async function n_() {
  try {
    "kodub";
    await l?.initialize();
    a = r.Ready;
  } catch (e) {
    a = r.Error;
    console.error(e);
  }
}
export async function TO() {
  if (a != r.Ready) {
    return null;
  }
  try {
    return (await l?.getUsername()) ?? null;
  } catch (e) {
    console.error(e);
    return null;
  }
}
export function r9() {
  if (a != r.Ready) {
    return null;
  }
  try {
    return l?.getMultiplayerInviteCode() ?? null;
  } catch (e) {
    console.error(e);
    return null;
  }
}
export function w9(e) {
  try {
    l?.addMultiplayerJoinListener(e);
  } catch (e) {
    console.error(e);
  }
}
export function XG(e) {
  try {
    l?.removeMultiplayerJoinListener(e);
  } catch (e) {
    console.error(e);
  }
}
export function qb() {
  if (a != r.Ready) {
    return false;
  }
  try {
    return l?.isInstantMultiplayer() ?? false;
  } catch (e) {
    console.error(e);
    return false;
  }
}
export function FP(e, t) {
  if (a == r.Ready) {
    try {
      l?.updateMultiplayerRoom(e, t);
    } catch (e) {
      console.error(e);
    }
  }
}
export function B1() {
  if (a == r.Ready) {
    try {
      l?.leftMultiplayerRoom();
    } catch (e) {
      console.error(e);
    }
  }
}
export function tU() {
  if (a == r.Ready && !s) {
    try {
      l?.gameStart();
      s = true;
    } catch (e) {
      console.error(e);
    }
  }
}
export function bQ() {
  if (a == r.Ready && s) {
    try {
      l?.gameStop();
      s = false;
    } catch (e) {
      console.error(e);
    }
  }
}
export function pS() {
  if (a == r.Ready && !o) {
    try {
      l?.loadingStart();
      o = true;
    } catch (e) {
      console.error(e);
    }
  }
}
export function PM() {
  if (a == r.Ready && o) {
    try {
      l?.loadingStop();
      o = false;
    } catch (e) {
      console.error(e);
    }
  }
}
export function R_() {
  if (a == r.Ready) {
    try {
      l?.initialLoadingStop();
    } catch (e) {
      console.error(e);
    }
  }
}
export async function RN(e, t) {
  if (a == r.Ready) {
    try {
      await l?.requestAd(e, t);
    } catch (e) {
      console.error(e);
    }
  }
}
export function XZ() {
  return a == r.Ready && (l?.hasRewardedAds() ?? false);
}
export async function $L(e, t) {
  if (a != r.Ready) {
    return {
      success: false,
      error: null
    };
  }
  try {
    if (l == null) {
      throw new Error("Called requestRewardedAd on unsupported platform");
    }
    return await l.requestRewardedAd(e, t);
  } catch (e) {
    console.error(e);
    return {
      success: false,
      error: null
    };
  }
}
export function Xx() {
  return a == r.Ready && (l?.isAdLoadingOrPlaying() ?? false);
}
export function ip() {
  return a == r.Ready && (l?.isAdPlaying() ?? false);
}
export function g_() {
  return a == r.Ready && (l?.isGameMuted() ?? false);
}
export function TK() {
  return l?.hasConsentFlow() ?? false;
}
export async function BK() {
  if (a != r.Ready) {
    return false;
  }
  try {
    await l?.openConsentFlow();
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}
export function mm() {
  return l?.hasDebugger() ?? false;
}
export function c2() {
  if (a == r.Ready) {
    try {
      l?.openDebugger();
    } catch (e) {
      console.error(e);
    }
  }
}