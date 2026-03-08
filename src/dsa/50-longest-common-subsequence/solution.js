/** Top-down (memoization) */
export function longestCommonSubsequenceMemo(text1, text2) {
  const memo = new Map();

  function dp(i, j) {
    if (i === text1.length || j === text2.length) return 0;
    const key = `${i},${j}`;
    if (memo.has(key)) return memo.get(key);

    let result;
    if (text1[i] === text2[j]) {
      result = 1 + dp(i + 1, j + 1);
    } else {
      result = Math.max(dp(i + 1, j), dp(i, j + 1));
    }
    memo.set(key, result);
    return result;
  }

  return dp(0, 0);
}

/** Bottom-up (tabulation) */
export function longestCommonSubsequence(text1, text2) {
  const m = text1.length;
  const n = text2.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}
