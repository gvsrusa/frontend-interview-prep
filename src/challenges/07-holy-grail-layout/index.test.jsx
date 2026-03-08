import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HolyGrailLayout from "./index";
describe("HolyGrailLayout", () => {
  it("renders a header", () => {
    render(<HolyGrailLayout />);
    expect(screen.getByText(/header/i)).toBeInTheDocument();
  });
  it("renders a footer", () => {
    render(<HolyGrailLayout />);
    expect(screen.getByText(/footer/i)).toBeInTheDocument();
  });
  it("renders navigation", () => {
    render(<HolyGrailLayout />);
    expect(screen.getByText(/navigation/i)).toBeInTheDocument();
  });
  it("renders main content area", () => {
    render(<HolyGrailLayout />);
    expect(screen.getByText(/main content/i)).toBeInTheDocument();
  });
  it("renders sidebar", () => {
    render(<HolyGrailLayout />);
    expect(screen.getByText(/sidebar/i)).toBeInTheDocument();
  });
});
