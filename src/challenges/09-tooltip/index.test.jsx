import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Tooltip from "./index";
describe("Tooltip", () => {
  it("does not show tooltip initially", () => {
    render(<Tooltip text="Help text"><button>Hover me</button></Tooltip>);
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });
  it("shows tooltip on hover", async () => {
    const user = userEvent.setup();
    render(<Tooltip text="Help text"><button>Hover me</button></Tooltip>);
    await user.hover(screen.getByText("Hover me"));
    expect(screen.getByRole("tooltip")).toHaveTextContent("Help text");
  });
  it("hides tooltip on mouse leave", async () => {
    const user = userEvent.setup();
    render(<Tooltip text="Help text"><button>Hover me</button></Tooltip>);
    await user.hover(screen.getByText("Hover me"));
    expect(screen.getByRole("tooltip")).toBeInTheDocument();
    await user.unhover(screen.getByText("Hover me"));
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });
  it("shows tooltip on focus", async () => {
    const user = userEvent.setup();
    render(<Tooltip text="Focus tip"><button>Focus me</button></Tooltip>);
    await user.tab();
    expect(screen.getByRole("tooltip")).toHaveTextContent("Focus tip");
  });
  it("renders with different positions", async () => {
    const user = userEvent.setup();
    const { rerender } = render(
      <Tooltip text="Bottom tip" position="bottom"><button>Hover</button></Tooltip>
    );
    await user.hover(screen.getByText("Hover"));
    expect(screen.getByRole("tooltip")).toBeInTheDocument();
    rerender(
      <Tooltip text="Left tip" position="left"><button>Hover</button></Tooltip>
    );
    expect(screen.getByRole("tooltip")).toHaveTextContent("Left tip");
  });
});
