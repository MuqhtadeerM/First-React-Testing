import { render, screen } from "@testing-library/react";
import GetLabel from "./getLabel";
import { expect, test } from "vitest";

test("getByText test case 1", () => {
  render(<GetLabel />);
  const Input = screen.getByLabelText("Username");
  expect(Input).toBeInTheDocument();
  expect(Input).toHaveValue("muqhtadeer");
});

test("test case 2", () => {
  render(<GetLabel />);
  const checkbox = screen.getByLabelText("Skills");
  expect(checkbox).toBeInTheDocument();
  expect(checkbox).toBeChecked();
});
