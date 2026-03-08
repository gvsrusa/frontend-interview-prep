export function myReduce<T, U>(
  arr: T[],
  callback: (accumulator: U, currentValue: T, currentIndex: number, array: T[]) => U,
  initialValue?: U
): U {
  let startIndex = 0;
  let accumulator: U;

  if (initialValue !== undefined) {
    accumulator = initialValue;
  } else {
    if (arr.length === 0) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
    accumulator = arr[0] as unknown as U;
    startIndex = 1;
  }

  for (let i = startIndex; i < arr.length; i++) {
    if (i in arr) {
      accumulator = callback(accumulator, arr[i], i, arr);
    }
  }

  return accumulator;
}
