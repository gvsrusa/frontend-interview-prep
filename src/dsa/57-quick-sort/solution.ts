export function quickSort(nums: number[]): number[] {
  const arr = [...nums];
  sort(arr, 0, arr.length - 1);
  return arr;
}

function sort(arr: number[], lo: number, hi: number): void {
  if (lo >= hi) return;
  const pivotIdx = partition(arr, lo, hi);
  sort(arr, lo, pivotIdx - 1);
  sort(arr, pivotIdx + 1, hi);
}

/** Lomuto partition scheme — pivot is the last element */
function partition(arr: number[], lo: number, hi: number): number {
  const pivot = arr[hi];
  let i = lo;

  for (let j = lo; j < hi; j++) {
    if (arr[j] <= pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  [arr[i], arr[hi]] = [arr[hi], arr[i]];
  return i;
}
