export function myMap<T, U>(
  arr: T[],
  callback: (value: T, index: number, array: T[]) => U,
  thisArg?: unknown
): U[] {
  const result: U[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      result[i] = callback.call(thisArg, arr[i], i, arr);
    }
  }
  return result;
}
