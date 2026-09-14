Object.create;
Object.create;
export function gn(e, t, n, i) {
  if (n === "a" && !i) {
    throw new TypeError("Private accessor was defined without a getter");
  }
  if (typeof t == "function" ? e !== t || !i : !t.has(e)) {
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  }
  if (n === "m") {
    return i;
  } else if (n === "a") {
    return i.call(e);
  } else if (i) {
    return i.value;
  } else {
    return t.get(e);
  }
}
export function GG(e, t, n, i, r) {
  if (i === "m") {
    throw new TypeError("Private method is not writable");
  }
  if (i === "a" && !r) {
    throw new TypeError("Private accessor was defined without a setter");
  }
  if (typeof t == "function" ? e !== t || !r : !t.has(e)) {
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  }
  if (i === "a") {
    r.call(e, n);
  } else if (r) {
    r.value = n;
  } else {
    t.set(e, n);
  }
  return n;
}
if (typeof SuppressedError == "function") {
  SuppressedError;
}