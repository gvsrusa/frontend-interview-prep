/** Dutch National Flag — one-pass, O(1) space, in-place */
export function sortColors(nums) {
  let lo = 0;
  let mid = 0;
  let hi = nums.length - 1;

  while (mid <= hi) {
    if (nums[mid] === 0) {
      [nums[lo], nums[mid]] = [nums[mid], nums[lo]];
      lo++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      [nums[mid], nums[hi]] = [nums[hi], nums[mid]];
      hi--;
    }
  }
}
