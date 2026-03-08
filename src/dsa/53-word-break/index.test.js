import { describe, it, expect } from "vitest";
import { wordBreak } from "./index";
describe("Word Break", () => {
  it('should return true for "leetcode" with ["leet","code"]', () => {
    expect(wordBreak("leetcode", ["leet", "code"])).toBe(true);
  });
  it('should return true for "applepenapple" with ["apple","pen"]', () => {
    expect(wordBreak("applepenapple", ["apple", "pen"])).toBe(true);
  });
  it('should return false for "catsandog" with ["cats","dog","sand","and","cat"]', () => {
    expect(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])).toBe(false);
  });
  it("should return true for empty string", () => {
    expect(wordBreak("", ["a"])).toBe(true);
  });
  it("should return false when no words match", () => {
    expect(wordBreak("abc", ["d", "e", "f"])).toBe(false);
  });
  it("should handle single character words", () => {
    expect(wordBreak("abc", ["a", "b", "c"])).toBe(true);
  });
  it("should handle overlapping dictionary words", () => {
    expect(wordBreak("cars", ["car", "ca", "rs"])).toBe(true);
  });
});
