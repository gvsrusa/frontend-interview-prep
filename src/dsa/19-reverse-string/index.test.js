import { describe, it, expect } from "vitest";
import { reverseString } from "./index";
describe("reverseString", () => {
  it("should reverse a basic string", () => {
    const s = ["h", "e", "l", "l", "o"];
    reverseString(s);
    expect(s).toEqual(["o", "l", "l", "e", "h"]);
  });
  it("should reverse a palindrome", () => {
    const s = ["r", "a", "c", "e", "c", "a", "r"];
    reverseString(s);
    expect(s).toEqual(["r", "a", "c", "e", "c", "a", "r"]);
  });
  it("should handle single character", () => {
    const s = ["a"];
    reverseString(s);
    expect(s).toEqual(["a"]);
  });
  it("should handle two characters", () => {
    const s = ["a", "b"];
    reverseString(s);
    expect(s).toEqual(["b", "a"]);
  });
  it("should handle empty array", () => {
    const s = [];
    reverseString(s);
    expect(s).toEqual([]);
  });
  it("should modify in place", () => {
    const s = ["H", "a", "n", "n", "a", "h"];
    const ref = s;
    reverseString(s);
    expect(s).toBe(ref);
    expect(s).toEqual(["h", "a", "n", "n", "a", "H"]);
  });
});
