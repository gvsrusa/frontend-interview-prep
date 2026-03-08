import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { useMediaQuery } from "./index";
import MediaQueryDemo from "./index";
describe("useMediaQuery", () => {
  let listeners;
  beforeEach(() => {
    listeners = /* @__PURE__ */ new Map();
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn((query) => ({
        matches: false,
        media: query,
        addEventListener: vi.fn((_, handler) => listeners.set(query, handler)),
        removeEventListener: vi.fn((_, handler) => {
          if (listeners.get(query) === handler) listeners.delete(query);
        }),
        dispatchEvent: vi.fn()
      }))
    });
  });
  it("returns the initial match value", () => {
    const { result } = renderHook(() => useMediaQuery("(max-width: 768px)"));
    expect(typeof result.current).toBe("boolean");
  });
  it("returns false when query does not match", () => {
    const { result } = renderHook(() => useMediaQuery("(max-width: 768px)"));
    expect(result.current).toBe(false);
  });
  it("updates when the media query match changes", () => {
    const { result } = renderHook(() => useMediaQuery("(max-width: 768px)"));
    const handler = listeners.get("(max-width: 768px)");
    if (handler) {
      act(() => handler({ matches: true }));
      expect(result.current).toBe(true);
    }
  });
  it("calls matchMedia with the correct query", () => {
    renderHook(() => useMediaQuery("(min-width: 1024px)"));
    expect(window.matchMedia).toHaveBeenCalledWith("(min-width: 1024px)");
  });
  it("renders demo component", () => {
    render(<MediaQueryDemo />);
    expect(screen.getByText(/Mobile viewport:/)).toBeInTheDocument();
    expect(screen.getByText(/Prefers dark mode:/)).toBeInTheDocument();
  });
});
