import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DropdownSelect from "./index";
const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" }
];
describe("DropdownSelect", () => {
  it("renders with placeholder text", () => {
    render(<DropdownSelect options={options} placeholder="Pick a fruit" />);
    expect(screen.getByText("Pick a fruit")).toBeInTheDocument();
  });
  it("opens the dropdown on click", async () => {
    const user = userEvent.setup();
    render(<DropdownSelect options={options} />);
    await user.click(screen.getByRole("button"));
    expect(screen.getByRole("listbox")).toBeInTheDocument();
    expect(screen.getByText("Apple")).toBeInTheDocument();
  });
  it("selects an option on click", async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(<DropdownSelect options={options} onChange={onChange} />);
    await user.click(screen.getByRole("button"));
    await user.click(screen.getByText("Banana"));
    expect(onChange).toHaveBeenCalledWith("banana");
  });
  it("filters options by search input", async () => {
    const user = userEvent.setup();
    render(<DropdownSelect options={options} />);
    await user.click(screen.getByRole("button"));
    await user.type(screen.getByPlaceholderText("Search..."), "ch");
    expect(screen.getByText("Cherry")).toBeInTheDocument();
    expect(screen.queryByText("Apple")).not.toBeInTheDocument();
  });
  it("shows selected value instead of placeholder", () => {
    render(<DropdownSelect options={options} value="cherry" />);
    expect(screen.getByText("Cherry")).toBeInTheDocument();
  });
});
