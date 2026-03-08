function wordBreakMemo(s, wordDict) {
  const wordSet = new Set(wordDict);
  const memo = /* @__PURE__ */ new Map();
  function dp(start) {
    if (start === s.length) return true;
    if (memo.has(start)) return memo.get(start);
    for (let end = start + 1; end <= s.length; end++) {
      if (wordSet.has(s.slice(start, end)) && dp(end)) {
        memo.set(start, true);
        return true;
      }
    }
    memo.set(start, false);
    return false;
  }
  return dp(0);
}
function wordBreak(s, wordDict) {
  const wordSet = new Set(wordDict);
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordSet.has(s.slice(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
}
export {
  wordBreak,
  wordBreakMemo
};
