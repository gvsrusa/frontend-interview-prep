import { describe, it, expect } from "vitest";
import { promiseRace } from "./index";
describe("promiseRace", () => {
  it("should resolve with the first resolved promise", async () => {
    const result = await promiseRace([
      new Promise((r) => setTimeout(() => r("slow"), 100)),
      Promise.resolve("fast")
    ]);
    expect(result).toBe("fast");
  });
  it("should reject with the first rejected promise", async () => {
    await expect(
      promiseRace([
        new Promise((_, rej) => setTimeout(() => rej("slow error"), 100)),
        Promise.reject("fast error")
      ])
    ).rejects.toBe("fast error");
  });
  it("should handle single promise", async () => {
    const result = await promiseRace([Promise.resolve(42)]);
    expect(result).toBe(42);
  });
  it("should handle non-promise values", async () => {
    const result = await promiseRace([1, 2, 3]);
    expect(result).toBe(1);
  });
  it("should resolve with fastest among delayed promises", async () => {
    const result = await promiseRace([
      new Promise((r) => setTimeout(() => r("300ms"), 300)),
      new Promise((r) => setTimeout(() => r("100ms"), 100)),
      new Promise((r) => setTimeout(() => r("200ms"), 200))
    ]);
    expect(result).toBe("100ms");
  });
});
