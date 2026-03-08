function twoSum(nums, target) {
  const map = /* @__PURE__ */ new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  throw new Error("No two sum solution found");
}
export {
  twoSum
};
