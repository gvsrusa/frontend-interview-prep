/** O(n²) DP approach */
export function lengthOfLISDP(nums) {
  if (nums.length === 0) return 0;
  const dp = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

/** O(n log n) patience sorting / binary search approach */
export function lengthOfLIS(nums) {
  if (nums.length === 0) return 0;
  const tails = [];

  for (const num of nums) {
    let lo = 0;
    let hi = tails.length;
    while (lo < hi) {
      const mid = (lo + hi) >>> 1;
      if (tails[mid] < num) lo = mid + 1;
      else hi = mid;
    }
    tails[lo] = num;
  }

  return tails.length;
}
