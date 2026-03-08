function deepClone(value, seen = /* @__PURE__ */ new WeakMap()) {
  if (value === null || typeof value !== "object") {
    return value;
  }
  if (seen.has(value)) {
    return seen.get(value);
  }
  if (value instanceof Date) {
    return new Date(value.getTime());
  }
  if (value instanceof RegExp) {
    return new RegExp(value.source, value.flags);
  }
  if (value instanceof Map) {
    const map = /* @__PURE__ */ new Map();
    seen.set(value, map);
    value.forEach((v, k) => {
      map.set(deepClone(k, seen), deepClone(v, seen));
    });
    return map;
  }
  if (value instanceof Set) {
    const set = /* @__PURE__ */ new Set();
    seen.set(value, set);
    value.forEach((v) => {
      set.add(deepClone(v, seen));
    });
    return set;
  }
  if (Array.isArray(value)) {
    const arr = [];
    seen.set(value, arr);
    for (let i = 0; i < value.length; i++) {
      arr[i] = deepClone(value[i], seen);
    }
    return arr;
  }
  const obj = Object.create(Object.getPrototypeOf(value));
  seen.set(value, obj);
  for (const key of Object.keys(value)) {
    obj[key] = deepClone(value[key], seen);
  }
  return obj;
}
export {
  deepClone
};
