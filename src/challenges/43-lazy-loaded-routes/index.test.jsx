import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import LazyLoadedRoutes from "./index";
describe("LazyLoadedRoutes", () => {
  it("renders the heading", () => {
    render(<LazyLoadedRoutes />);
    expect(screen.getByText("Lazy Loaded Routes")).toBeInTheDocument();
  });
  it("shows navigation buttons", () => {
    render(<LazyLoadedRoutes />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });
  it("shows the home page by default", () => {
    render(<LazyLoadedRoutes />);
    expect(screen.getByText("Home Page")).toBeInTheDocument();
  });
  it("switches to the about page", () => {
    render(<LazyLoadedRoutes />);
    fireEvent.click(screen.getByText("About"));
    expect(screen.getByText("About Page")).toBeInTheDocument();
  });
  it("switches to the dashboard page", () => {
    render(<LazyLoadedRoutes />);
    fireEvent.click(screen.getByText("Dashboard"));
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });
});
