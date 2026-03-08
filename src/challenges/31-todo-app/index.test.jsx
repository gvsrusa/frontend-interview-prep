import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoApp from "./index";
describe("TodoApp", () => {
  beforeEach(() => {
    localStorage.clear();
  });
  it("renders the todo input and add button", () => {
    render(<TodoApp />);
    expect(screen.getByPlaceholderText("Add a todo...")).toBeInTheDocument();
    expect(screen.getByText("Add")).toBeInTheDocument();
  });
  it("adds a new todo", async () => {
    render(<TodoApp />);
    const input = screen.getByPlaceholderText("Add a todo...");
    await userEvent.type(input, "Buy milk");
    await userEvent.click(screen.getByText("Add"));
    expect(screen.getByText("Buy milk")).toBeInTheDocument();
  });
  it("toggles a todo completed state", async () => {
    render(<TodoApp />);
    const input = screen.getByPlaceholderText("Add a todo...");
    await userEvent.type(input, "Test todo");
    await userEvent.click(screen.getByText("Add"));
    const checkbox = screen.getByRole("checkbox");
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
  it("deletes a todo", async () => {
    render(<TodoApp />);
    const input = screen.getByPlaceholderText("Add a todo...");
    await userEvent.type(input, "Delete me");
    await userEvent.click(screen.getByText("Add"));
    expect(screen.getByText("Delete me")).toBeInTheDocument();
    await userEvent.click(screen.getByText("Delete"));
    expect(screen.queryByText("Delete me")).not.toBeInTheDocument();
  });
  it("filters todos by active/completed", async () => {
    render(<TodoApp />);
    const input = screen.getByPlaceholderText("Add a todo...");
    await userEvent.type(input, "Task A");
    await userEvent.click(screen.getByText("Add"));
    await userEvent.type(input, "Task B");
    await userEvent.click(screen.getByText("Add"));
    const checkboxes = screen.getAllByRole("checkbox");
    await userEvent.click(checkboxes[0]);
    await userEvent.click(screen.getByText("Active"));
    expect(screen.queryByText("Task A")).not.toBeInTheDocument();
    expect(screen.getByText("Task B")).toBeInTheDocument();
    await userEvent.click(screen.getByText("Completed"));
    expect(screen.getByText("Task A")).toBeInTheDocument();
    expect(screen.queryByText("Task B")).not.toBeInTheDocument();
  });
});
