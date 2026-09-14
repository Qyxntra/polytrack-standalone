export function l(e) {
  let t = "";
  for (const n of e) {
    t += String.fromCharCode(n);
  }
  let n = btoa(t);
  n = n.replace(/\+/g, "-");
  n = n.replace(/\//g, "_");
  n = n.replace(/=/g, "");
  return n;
}
export function D(e) {
  let t;
  e = (e = e.replace(/-/g, "+")).replace(/_/g, "/");
  try {
    t = atob(e);
  } catch {
    return null;
  }
  const n = new Uint8Array(t.length);
  for (let e = 0; e < t.length; ++e) {
    const i = t.charCodeAt(e);
    if (i > 255) {
      return null;
    }
    n[e] = i;
  }
  return n;
}