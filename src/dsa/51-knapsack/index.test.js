import { describe, it, expect } from "vitest";
import { knapsack } from "./index";
describe("0/1 Knapsack", () => {
  it("should return max value for basic case", () => {
    expect(knapsack([1, 2, 3], [6, 10, 12], 5)).toBe(22);
  });
  it("should return 0 for capacity 0", () => {
    expect(knapsack([1, 2, 3], [10, 20, 30], 0)).toBe(0);
  });
  it("should return 0 for empty items", () => {
    expect(knapsack([], [], 10)).toBe(0);
  });
  it("should handle single item that fits", () => {
    expect(knapsack([5], [10], 5)).toBe(10);
  });
  it("should handle single item that does not fit", () => {
    expect(knapsack([10], [100], 5)).toBe(0);
  });
  it("should pick the most valuable combination", () => {
    expect(knapsack([2, 3, 4, 5], [3, 4, 5, 6], 5)).toBe(7);
  });
  it("should handle all items fitting", () => {
    expect(knapsack([1, 1, 1], [10, 20, 30], 10)).toBe(60);
  });
});
