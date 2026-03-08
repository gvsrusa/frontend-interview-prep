function coinChangeMemo(coins, amount) {
  const memo = /* @__PURE__ */ new Map();
  function dp(remaining) {
    if (remaining === 0) return 0;
    if (remaining < 0) return -1;
    if (memo.has(remaining)) return memo.get(remaining);
    let min = Infinity;
    for (const coin of coins) {
      const sub = dp(remaining - coin);
      if (sub >= 0) min = Math.min(min, sub + 1);
    }
    const result = min === Infinity ? -1 : min;
    memo.set(remaining, result);
    return result;
  }
  return dp(amount);
}
function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (coin <= i) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}
export {
  coinChange,
  coinChangeMemo
};
