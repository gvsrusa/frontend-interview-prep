import { describe, it, expect } from "vitest";
import { coinChange } from "./index";
describe("Coin Change", () => {
  it("should return 3 for coins [1,2,5] and amount 11", () => {
    expect(coinChange([1, 2, 5], 11)).toBe(3);
  });
  it("should return -1 when amount cannot be made", () => {
    expect(coinChange([2], 3)).toBe(-1);
  });
  it("should return 0 for amount 0", () => {
    expect(coinChange([1], 0)).toBe(0);
  });
  it("should return 1 when a single coin matches the amount", () => {
    expect(coinChange([1, 5, 10], 10)).toBe(1);
  });
  it("should handle single denomination", () => {
    expect(coinChange([3], 9)).toBe(3);
  });
  it("should return -1 for empty coins array", () => {
    expect(coinChange([], 5)).toBe(-1);
  });
  it("should handle large amount efficiently", () => {
    expect(coinChange([1, 5, 10, 25], 100)).toBe(4);
  });
});
