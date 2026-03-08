import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ControlledVsUncontrolled, { ControlledForm, UncontrolledForm } from "./index";
describe("ControlledVsUncontrolled", () => {
  it("renders both forms", () => {
    render(<ControlledVsUncontrolled />);
    expect(screen.getByText("Controlled Form")).toBeInTheDocument();
    expect(screen.getByText("Uncontrolled Form")).toBeInTheDocument();
  });
  it("controlled form has name and email inputs", () => {
    render(<ControlledForm />);
    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  });
  it("uncontrolled form has name and email inputs", () => {
    render(<UncontrolledForm />);
    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  });
  it("controlled form updates input values on change", async () => {
    render(<ControlledForm />);
    const nameInput = screen.getByPlaceholderText("Name");
    await userEvent.type(nameInput, "Alice");
    expect(nameInput).toHaveValue("Alice");
  });
  it("both forms have submit buttons", () => {
    render(<ControlledVsUncontrolled />);
    const buttons = screen.getAllByText("Submit");
    expect(buttons).toHaveLength(2);
  });
});
