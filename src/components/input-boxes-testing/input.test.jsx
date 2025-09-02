import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import InputText from "./input";

test("Testing the Input Box Case", () => {
  render(<InputText />);
  let inputCheck = screen.getByRole("textox");
  let placeholder = screen.getByPlaceholderText("Enter The User");
  expect(inputCheck).toBeInTheDocument();
  expect(placeholder).toBeInTheDocument();
  expect(inputCheck).toHaveAttribute("name", "username");
  expect(inputCheck).toHaveAttribute("id", "userId");
  expect(inputCheck).toHaveAttribute("type", "text");
  expect(inputCheck).toHaveAttribute("value", "Muqhtadeer M");
});
