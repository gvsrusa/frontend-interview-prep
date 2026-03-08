/** Iterative binary search */
export function binarySearch(nums: number[], target: number): number {
  let lo = 0;
  let hi = nums.length - 1;

  while (lo <= hi) {
    const mid = (lo + hi) >>> 1;
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }

  return -1;
}

/** Recursive binary search */
export function binarySearchRecursive(
  nums: number[],
  target: number,
  lo = 0,
  hi = nums.length - 1,
): number {
  if (lo > hi) return -1;
  const mid = (lo + hi) >>> 1;
  if (nums[mid] === target) return mid;
  if (nums[mid] < target) return binarySearchRecursive(nums, target, mid + 1, hi);
  return binarySearchRecursive(nums, target, lo, mid - 1);
}
