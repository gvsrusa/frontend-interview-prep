function groupAnagrams(strs) {
  const map = /* @__PURE__ */ new Map();
  for (const str of strs) {
    const key = str.split("").sort().join("");
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(str);
  }
  return Array.from(map.values());
}
export {
  groupAnagrams
};
