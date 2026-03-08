import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useToggle } from "./index";
import ToggleDemo from "./index";
describe("useToggle", () => {
  it("defaults to false", () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current[0]).toBe(false);
  });
  it("accepts an initial value", () => {
    const { result } = renderHook(() => useToggle(true));
    expect(result.current[0]).toBe(true);
  });
  it("toggles from false to true", () => {
    const { result } = renderHook(() => useToggle());
    act(() => result.current[1]());
    expect(result.current[0]).toBe(true);
  });
  it("toggles back and forth", () => {
    const { result } = renderHook(() => useToggle());
    act(() => result.current[1]());
    act(() => result.current[1]());
    expect(result.current[0]).toBe(false);
  });
  it("renders demo component", async () => {
    render(<ToggleDemo />);
    const btn = screen.getByText("Toggle");
    expect(screen.getByText("State: OFF")).toBeInTheDocument();
    await userEvent.click(btn);
    expect(screen.getByText("State: ON")).toBeInTheDocument();
  });
});
