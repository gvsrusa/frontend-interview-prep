function memoize(fn, keyResolver) {
  const cache = /* @__PURE__ */ new Map();
  const memoized = function(...args) {
    const key = keyResolver ? keyResolver(...args) : JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
  return memoized;
}
export {
  memoize
};
