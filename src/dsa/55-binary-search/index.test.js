import { describe, it, expect } from "vitest";
import { binarySearch } from "./index";
describe("Binary Search", () => {
  it("should find target in sorted array", () => {
    expect(binarySearch([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
  });
  it("should return -1 when target is not found", () => {
    expect(binarySearch([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
  });
  it("should find target at the beginning", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0);
  });
  it("should find target at the end", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
  });
  it("should return -1 for empty array", () => {
    expect(binarySearch([], 5)).toBe(-1);
  });
  it("should handle single element found", () => {
    expect(binarySearch([7], 7)).toBe(0);
  });
  it("should handle single element not found", () => {
    expect(binarySearch([7], 3)).toBe(-1);
  });
});
