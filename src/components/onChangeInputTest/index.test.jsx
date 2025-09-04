import { expect, test } from "vitest";
import OnChange from ".";
import { fireEvent, render, screen } from "@testing-library/react";

test("on Change event testing", () => {
  render(<OnChange />);
  let input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "a" } });
  expect(input.value).toBe("a");
});

test("Click event test code", () => {
  render(<OnChange />);
  const btn = screen.getByRole("button");
  fireEvent.click(btn);
  expect(screen.getByText("updated Data")).toBeInTheDocument();
});
