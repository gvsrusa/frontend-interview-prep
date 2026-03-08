import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, act } from "@testing-library/react";
import TrafficLight from "./index";
describe("TrafficLight", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });
  const config = { red: 2e3, yellow: 500, green: 1500 };
  it("renders the traffic light", () => {
    render(<TrafficLight config={config} />);
    expect(screen.getByLabelText("traffic light")).toBeInTheDocument();
  });
  it("starts with red light active", () => {
    render(<TrafficLight config={config} />);
    expect(screen.getByLabelText(/red light active/)).toBeInTheDocument();
  });
  it("transitions from red to green after red duration", () => {
    render(<TrafficLight config={config} />);
    act(() => {
      vi.advanceTimersByTime(2e3);
    });
    expect(screen.getByLabelText(/green light active/)).toBeInTheDocument();
  });
  it("transitions from green to yellow after green duration", () => {
    render(<TrafficLight config={config} />);
    act(() => {
      vi.advanceTimersByTime(2e3);
    });
    act(() => {
      vi.advanceTimersByTime(1500);
    });
    expect(screen.getByLabelText(/yellow light active/)).toBeInTheDocument();
  });
  it("completes a full cycle back to red", () => {
    render(<TrafficLight config={config} />);
    act(() => {
      vi.advanceTimersByTime(2e3);
    });
    act(() => {
      vi.advanceTimersByTime(1500);
    });
    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(screen.getByLabelText(/red light active/)).toBeInTheDocument();
  });
});
