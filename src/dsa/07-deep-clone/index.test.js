import { describe, it, expect } from "vitest";
import { deepClone } from "./index";
describe("deepClone", () => {
  it("should clone primitive values", () => {
    expect(deepClone(42)).toBe(42);
    expect(deepClone("hello")).toBe("hello");
    expect(deepClone(null)).toBe(null);
    expect(deepClone(void 0)).toBe(void 0);
  });
  it("should deep clone nested objects", () => {
    const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
    const cloned = deepClone(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
    expect(cloned.b).not.toBe(obj.b);
    expect(cloned.b.d).not.toBe(obj.b.d);
  });
  it("should deep clone arrays", () => {
    const arr = [1, [2, [3, 4]], 5];
    const cloned = deepClone(arr);
    expect(cloned).toEqual(arr);
    expect(cloned).not.toBe(arr);
    expect(cloned[1]).not.toBe(arr[1]);
  });
  it("should clone Date objects", () => {
    const date = /* @__PURE__ */ new Date("2024-01-15");
    const cloned = deepClone(date);
    expect(cloned).toEqual(date);
    expect(cloned).not.toBe(date);
    expect(cloned instanceof Date).toBe(true);
  });
  it("should clone Map and Set", () => {
    const map = /* @__PURE__ */ new Map([["a", 1], ["b", 2]]);
    const set = /* @__PURE__ */ new Set([1, 2, 3]);
    const clonedMap = deepClone(map);
    const clonedSet = deepClone(set);
    expect(clonedMap).toEqual(map);
    expect(clonedMap).not.toBe(map);
    expect(clonedSet).toEqual(set);
    expect(clonedSet).not.toBe(set);
  });
  it("should handle circular references", () => {
    const obj = { a: 1 };
    obj.self = obj;
    const cloned = deepClone(obj);
    expect(cloned.a).toBe(1);
    expect(cloned.self).toBe(cloned);
    expect(cloned).not.toBe(obj);
  });
  it("should clone empty objects and arrays", () => {
    expect(deepClone({})).toEqual({});
    expect(deepClone([])).toEqual([]);
  });
});
