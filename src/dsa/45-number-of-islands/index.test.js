import { describe, it, expect } from "vitest";
import { numIslands } from "./index";
function parseGrid(rows) {
  return rows.map((row) => row.split(""));
}
describe("Number of Islands", () => {
  it("should count one island", () => {
    const grid = parseGrid([
      "11110",
      "11010",
      "11000",
      "00000"
    ]);
    expect(numIslands(grid)).toBe(1);
  });
  it("should count three islands", () => {
    const grid = parseGrid([
      "11000",
      "11000",
      "00100",
      "00011"
    ]);
    expect(numIslands(grid)).toBe(3);
  });
  it("should return 0 for all water", () => {
    const grid = parseGrid([
      "000",
      "000",
      "000"
    ]);
    expect(numIslands(grid)).toBe(0);
  });
  it("should return 1 for all land", () => {
    const grid = parseGrid([
      "111",
      "111",
      "111"
    ]);
    expect(numIslands(grid)).toBe(1);
  });
  it("should handle a single cell island", () => {
    const grid = parseGrid(["1"]);
    expect(numIslands(grid)).toBe(1);
  });
  it("should handle empty grid", () => {
    expect(numIslands([])).toBe(0);
  });
  it("should count diagonal land as separate islands", () => {
    const grid = parseGrid([
      "10",
      "01"
    ]);
    expect(numIslands(grid)).toBe(2);
  });
});
export {
  parseGrid
};
