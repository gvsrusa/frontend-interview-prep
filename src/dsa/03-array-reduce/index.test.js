import { describe, it, expect } from "vitest";
import { myReduce } from "./index";
describe("myReduce", () => {
  it("should sum an array with initial value", () => {
    expect(myReduce([1, 2, 3, 4], (acc, val) => acc + val, 0)).toBe(10);
  });
  it("should sum an array without initial value", () => {
    expect(myReduce([1, 2, 3, 4], (acc, val) => acc + val)).toBe(10);
  });
  it("should throw TypeError on empty array with no initial value", () => {
    expect(() => myReduce([], (acc, val) => acc + val)).toThrow(TypeError);
  });
  it("should return initial value for empty array", () => {
    expect(myReduce([], (acc, val) => acc + val, 42)).toBe(42);
  });
  it("should flatten an array of arrays", () => {
    const result = myReduce(
      [[1, 2], [3, 4], [5]],
      (acc, val) => [...acc, ...val],
      []
    );
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
  it("should pass correct index to callback", () => {
    const indices = [];
    myReduce([10, 20, 30], (acc, _, idx) => {
      indices.push(idx);
      return acc;
    }, 0);
    expect(indices).toEqual([0, 1, 2]);
  });
  it("should handle single-element array without initial value", () => {
    expect(myReduce([99], (acc, val) => acc + val)).toBe(99);
  });
});
