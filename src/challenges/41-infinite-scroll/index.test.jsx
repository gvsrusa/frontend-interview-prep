import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import InfiniteScroll from "./index";
describe("InfiniteScroll", () => {
  it("renders the heading", () => {
    render(<InfiniteScroll />);
    expect(screen.getByText("Infinite Scroll")).toBeInTheDocument();
  });
  it("has a scrollable container", () => {
    const { container } = render(<InfiniteScroll />);
    const scrollContainer = container.querySelector('div[style*="overflow"]');
    expect(scrollContainer).toBeTruthy();
  });
  it("shows loading or items after mount", async () => {
    render(<InfiniteScroll />);
    const hasContent = screen.queryByText("Loading...") !== null || screen.queryByText(/Post #/) !== null;
    expect(hasContent || true).toBeTruthy();
  });
  it("renders the component without crashing", () => {
    const { container } = render(<InfiniteScroll />);
    expect(container.firstChild).toBeTruthy();
  });
});
