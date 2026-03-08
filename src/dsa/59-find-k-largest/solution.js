function findKLargest(nums, k) {
  const heap = new MinHeap();
  for (const num of nums) {
    heap.push(num);
    if (heap.size() > k) heap.pop();
  }
  const result = [];
  while (heap.size() > 0) result.push(heap.pop());
  return result.sort((a, b) => b - a);
}
class MinHeap {
  data = [];
  size() {
    return this.data.length;
  }
  push(val) {
    this.data.push(val);
    this.bubbleUp(this.data.length - 1);
  }
  pop() {
    if (this.data.length === 0) return void 0;
    const top = this.data[0];
    const last = this.data.pop();
    if (this.data.length > 0) {
      this.data[0] = last;
      this.sinkDown(0);
    }
    return top;
  }
  bubbleUp(i) {
    while (i > 0) {
      const parent = i - 1 >>> 1;
      if (this.data[parent] <= this.data[i]) break;
      [this.data[parent], this.data[i]] = [this.data[i], this.data[parent]];
      i = parent;
    }
  }
  sinkDown(i) {
    const n = this.data.length;
    while (true) {
      let smallest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      if (left < n && this.data[left] < this.data[smallest]) smallest = left;
      if (right < n && this.data[right] < this.data[smallest]) smallest = right;
      if (smallest === i) break;
      [this.data[smallest], this.data[i]] = [this.data[i], this.data[smallest]];
      i = smallest;
    }
  }
}
function findKLargestQuickSelect(nums, k) {
  const arr = [...nums];
  const targetIdx = arr.length - k;
  quickSelect(arr, 0, arr.length - 1, targetIdx);
  return arr.slice(targetIdx).sort((a, b) => b - a);
}
function quickSelect(arr, lo, hi, k) {
  if (lo >= hi) return;
  const pivotIdx = partition(arr, lo, hi);
  if (pivotIdx === k) return;
  if (pivotIdx < k) quickSelect(arr, pivotIdx + 1, hi, k);
  else quickSelect(arr, lo, pivotIdx - 1, k);
}
function partition(arr, lo, hi) {
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
export {
  findKLargest,
  findKLargestQuickSelect
};
