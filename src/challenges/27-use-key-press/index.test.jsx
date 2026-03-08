import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useKeyPress } from "./index";
import KeyPressDemo from "./index";
describe("useKeyPress", () => {
  it("returns false initially", () => {
    const { result } = renderHook(() => useKeyPress("Enter"));
    expect(result.current).toBe(false);
  });
  it("returns true when the target key is pressed", () => {
    const { result } = renderHook(() => useKeyPress("Enter"));
    act(() => {
      fireEvent.keyDown(window, { key: "Enter" });
    });
    expect(result.current).toBe(true);
  });
  it("returns false when the target key is released", () => {
    const { result } = renderHook(() => useKeyPress("Enter"));
    act(() => {
      fireEvent.keyDown(window, { key: "Enter" });
    });
    act(() => {
      fireEvent.keyUp(window, { key: "Enter" });
    });
    expect(result.current).toBe(false);
  });
  it("ignores other keys", () => {
    const { result } = renderHook(() => useKeyPress("Enter"));
    act(() => {
      fireEvent.keyDown(window, { key: "Escape" });
    });
    expect(result.current).toBe(false);
  });
  it("renders demo component and reacts to key presses", () => {
    render(<KeyPressDemo />);
    expect(screen.getByText("Enter: Released")).toBeInTheDocument();
    act(() => {
      fireEvent.keyDown(window, { key: "Enter" });
    });
    expect(screen.getByText("Enter: Pressed")).toBeInTheDocument();
  });
});
