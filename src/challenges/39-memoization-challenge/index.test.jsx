import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import MemoizationChallenge from "./index";
describe("MemoizationChallenge", () => {
  it("renders the heading and counter", () => {
    render(<MemoizationChallenge />);
    expect(screen.getByText("Memoization Challenge")).toBeInTheDocument();
    expect(screen.getByText("Counter: 0")).toBeInTheDocument();
  });
  it("increments counter without breaking the list", () => {
    render(<MemoizationChallenge />);
    fireEvent.click(screen.getByText("Counter: 0"));
    expect(screen.getByText("Counter: 1")).toBeInTheDocument();
    expect(screen.getByText(/Total value:/)).toBeInTheDocument();
  });
  it("filters items based on input", () => {
    render(<MemoizationChallenge />);
    const input = screen.getByPlaceholderText("Filter items...");
    fireEvent.change(input, { target: { value: "Item 1" } });
    const listItems = screen.getAllByRole("listitem");
    listItems.forEach((li) => {
      expect(li.textContent).toMatch(/Item 1/);
    });
  });
  it("selects an item on click", () => {
    render(<MemoizationChallenge />);
    const listItems = screen.getAllByRole("listitem");
    fireEvent.click(listItems[0]);
    expect(screen.getByText(/Selected: Item/)).toBeInTheDocument();
  });
});
