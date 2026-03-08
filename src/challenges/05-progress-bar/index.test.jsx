import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ProgressBar from "./index";
describe("ProgressBar", () => {
  it("renders with correct aria attributes", () => {
    render(<ProgressBar value={50} />);
    const bar = screen.getByRole("progressbar");
    expect(bar).toHaveAttribute("aria-valuenow", "50");
    expect(bar).toHaveAttribute("aria-valuemin", "0");
    expect(bar).toHaveAttribute("aria-valuemax", "100");
  });
  it("displays the percentage text", () => {
    render(<ProgressBar value={75} />);
    expect(screen.getByText("75%", { selector: "span" })).toBeInTheDocument();
  });
  it("clamps value to 0 for negative inputs", () => {
    render(<ProgressBar value={-10} />);
    const bar = screen.getByRole("progressbar");
    expect(bar).toHaveAttribute("aria-valuenow", "0");
  });
  it("clamps value to 100 for values over 100", () => {
    render(<ProgressBar value={150} />);
    const bar = screen.getByRole("progressbar");
    expect(bar).toHaveAttribute("aria-valuenow", "100");
  });
  it("renders the label when provided", () => {
    render(<ProgressBar value={60} label="Upload Progress" />);
    expect(screen.getByText("Upload Progress")).toBeInTheDocument();
  });
});
