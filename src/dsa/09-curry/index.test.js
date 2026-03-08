import { describe, it, expect } from "vitest";
import { curry } from "./index";
describe("curry", () => {
  it("should curry a two-argument function", () => {
    const add = (a, b) => a + b;
    const curried = curry(add);
    expect(curried(1)(2)).toBe(3);
  });
  it("should accept all arguments at once", () => {
    const add = (a, b, c) => a + b + c;
    const curried = curry(add);
    expect(curried(1, 2, 3)).toBe(6);
  });
  it("should accept arguments in groups", () => {
    const fn = (a, b, c, d) => a + b + c + d;
    const curried = curry(fn);
    expect(curried(1, 2)(3, 4)).toBe(10);
  });
  it("should handle single-argument function", () => {
    const identity = (x) => x;
    const curried = curry(identity);
    expect(curried(42)).toBe(42);
  });
  it("should handle zero-argument function", () => {
    const greet = () => "hello";
    const curried = curry(greet);
    expect(curried()).toBe("hello");
  });
  it("should work with string arguments", () => {
    const join = (a, b, c) => `${a}-${b}-${c}`;
    const curried = curry(join);
    expect(curried("a")("b")("c")).toBe("a-b-c");
  });
});
