import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { useFetch } from "./index";
import FetchDemo from "./index";
describe("useFetch", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });
  it("starts in loading state", () => {
    vi.spyOn(globalThis, "fetch").mockImplementation(
      () => new Promise(() => {
      })
    );
    const { result } = renderHook(() => useFetch("/api/test"));
    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBeNull();
    expect(result.current.error).toBeNull();
  });
  it("returns data on successful fetch", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: true,
      json: async () => ({ message: "hello" })
    });
    const { result } = renderHook(() => useFetch("/api/success"));
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
    expect(result.current.data).toEqual({ message: "hello" });
    expect(result.current.error).toBeNull();
  });
  it("handles fetch errors", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: false,
      status: 404
    });
    const { result } = renderHook(() => useFetch("/api/not-found"));
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
    expect(result.current.error).toBe("HTTP 404");
    expect(result.current.data).toBeNull();
  });
  it("handles network errors", async () => {
    vi.spyOn(globalThis, "fetch").mockRejectedValue(new Error("Network error"));
    const { result } = renderHook(() => useFetch("/api/network-fail"));
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
    expect(result.current.error).toBe("Network error");
  });
  it("renders demo component", () => {
    vi.spyOn(globalThis, "fetch").mockImplementation(
      () => new Promise(() => {
      })
    );
    render(<FetchDemo />);
    expect(screen.getByText("Next User")).toBeInTheDocument();
  });
});
