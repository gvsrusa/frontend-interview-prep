import { describe, it, expect } from "vitest";
import { productExceptSelf } from "./index";
describe("productExceptSelf", () => {
  it("should compute products for basic case", () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });
  it("should handle zeros", () => {
    const result = productExceptSelf([-1, 1, 0, -3, 3]);
    expect(result.map((v) => Object.is(v, -0) ? 0 : v)).toEqual([0, 0, 9, 0, 0]);
  });
  it("should handle two elements", () => {
    expect(productExceptSelf([2, 3])).toEqual([3, 2]);
  });
  it("should handle array with one zero", () => {
    expect(productExceptSelf([1, 2, 0, 4])).toEqual([0, 0, 8, 0]);
  });
  it("should handle all ones", () => {
    expect(productExceptSelf([1, 1, 1, 1])).toEqual([1, 1, 1, 1]);
  });
  it("should handle negative numbers", () => {
    expect(productExceptSelf([-1, -2, -3])).toEqual([6, 3, 2]);
  });
});
