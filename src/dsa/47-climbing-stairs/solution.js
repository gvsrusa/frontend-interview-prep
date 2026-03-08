function climbStairsMemo(n, memo = /* @__PURE__ */ new Map()) {
  if (n <= 1) return 1;
  if (memo.has(n)) return memo.get(n);
  const result = climbStairsMemo(n - 1, memo) + climbStairsMemo(n - 2, memo);
  memo.set(n, result);
  return result;
}
function climbStairs(n) {
  if (n <= 1) return 1;
  let prev2 = 1;
  let prev1 = 1;
  for (let i = 2; i <= n; i++) {
    const current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }
  return prev1;
}
export {
  climbStairs,
  climbStairsMemo
};
