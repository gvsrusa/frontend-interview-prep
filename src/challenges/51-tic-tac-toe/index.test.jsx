import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TicTacToe from "./index";
describe("TicTacToe", () => {
  it("renders the heading", () => {
    render(<TicTacToe />);
    expect(screen.getByText("Tic Tac Toe")).toBeInTheDocument();
  });
  it("renders 9 board cells", () => {
    const { container } = render(<TicTacToe />);
    const cells = container.querySelectorAll("button");
    expect(cells.length).toBeGreaterThanOrEqual(9);
  });
  it("shows next player status", () => {
    render(<TicTacToe />);
    expect(screen.getByText(/Next player: X/)).toBeInTheDocument();
  });
  it("has a reset button", () => {
    render(<TicTacToe />);
    expect(screen.getByText("Reset")).toBeInTheDocument();
  });
  it("shows game start in history", () => {
    render(<TicTacToe />);
    expect(screen.getByText("Game start")).toBeInTheDocument();
  });
});
