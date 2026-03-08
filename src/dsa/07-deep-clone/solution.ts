export function deepClone<T>(value: T, seen = new WeakMap()): T {
  if (value === null || typeof value !== 'object') {
    return value;
  }

  if (seen.has(value as object)) {
    return seen.get(value as object);
  }

  if (value instanceof Date) {
    return new Date(value.getTime()) as T;
  }

  if (value instanceof RegExp) {
    return new RegExp(value.source, value.flags) as T;
  }

  if (value instanceof Map) {
    const map = new Map();
    seen.set(value as object, map);
    value.forEach((v, k) => {
      map.set(deepClone(k, seen), deepClone(v, seen));
    });
    return map as T;
  }

  if (value instanceof Set) {
    const set = new Set();
    seen.set(value as object, set);
    value.forEach((v) => {
      set.add(deepClone(v, seen));
    });
    return set as T;
  }

  if (Array.isArray(value)) {
    const arr: unknown[] = [];
    seen.set(value as object, arr);
    for (let i = 0; i < value.length; i++) {
      arr[i] = deepClone(value[i], seen);
    }
    return arr as T;
  }

  const obj = Object.create(Object.getPrototypeOf(value));
  seen.set(value as object, obj);
  for (const key of Object.keys(value as object)) {
    obj[key] = deepClone((value as Record<string, unknown>)[key], seen);
  }
  return obj;
}
