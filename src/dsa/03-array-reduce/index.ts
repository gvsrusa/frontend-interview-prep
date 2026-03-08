export function myReduce<T, U>(
  arr: T[],
  callback: (accumulator: U, currentValue: T, currentIndex: number, array: T[]) => U,
  initialValue?: U
): U {
  throw new Error('Not implemented');
}
