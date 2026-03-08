function myReduce(arr, callback, initialValue) {
  let startIndex = 0;
  let accumulator;
  if (initialValue !== void 0) {
    accumulator = initialValue;
  } else {
    if (arr.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = arr[0];
    startIndex = 1;
  }
  for (let i = startIndex; i < arr.length; i++) {
    if (i in arr) {
      accumulator = callback(accumulator, arr[i], i, arr);
    }
  }
  return accumulator;
}
export {
  myReduce
};
