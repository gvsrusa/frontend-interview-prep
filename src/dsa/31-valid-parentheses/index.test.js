import { describe, it, expect } from "vitest";
import { isValid } from "./index";
describe("Valid Parentheses", () => {
  it("should return true for simple matching pairs", () => {
    expect(isValid("()")).toBe(true);
    expect(isValid("[]")).toBe(true);
    expect(isValid("{}")).toBe(true);
  });
  it("should return true for nested brackets", () => {
    expect(isValid("([{}])")).toBe(true);
    expect(isValid("{[()]}")).toBe(true);
  });
  it("should return true for sequential brackets", () => {
    expect(isValid("(){}[]")).toBe(true);
    expect(isValid("()[]{}")).toBe(true);
  });
  it("should return false for mismatched brackets", () => {
    expect(isValid("(]")).toBe(false);
    expect(isValid("([)]")).toBe(false);
    expect(isValid("{)")).toBe(false);
  });
  it("should return false for unmatched opening brackets", () => {
    expect(isValid("(")).toBe(false);
    expect(isValid("(((")).toBe(false);
    expect(isValid("({[")).toBe(false);
  });
  it("should return false for unmatched closing brackets", () => {
    expect(isValid(")")).toBe(false);
    expect(isValid(")))")).toBe(false);
  });
  it("should return true for empty string", () => {
    expect(isValid("")).toBe(true);
  });
});
