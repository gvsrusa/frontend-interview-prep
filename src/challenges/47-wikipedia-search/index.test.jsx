import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import WikipediaSearch from "./index";
describe("WikipediaSearch", () => {
  it("renders the heading", () => {
    render(<WikipediaSearch />);
    expect(screen.getByText("Wikipedia Search")).toBeInTheDocument();
  });
  it("has a search input", () => {
    render(<WikipediaSearch />);
    expect(screen.getByPlaceholderText("Search articles...")).toBeInTheDocument();
  });
  it("accepts user input", () => {
    render(<WikipediaSearch />);
    const input = screen.getByPlaceholderText("Search articles...");
    fireEvent.change(input, { target: { value: "javascript" } });
    expect(input).toHaveValue("javascript");
  });
  it("starts with empty results", () => {
    render(<WikipediaSearch />);
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });
});
