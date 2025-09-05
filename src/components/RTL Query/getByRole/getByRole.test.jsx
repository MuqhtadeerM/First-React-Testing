import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import GetByRole from "./getby";

test("get By Role", () => {
  render(<GetByRole />);
  // testing input fields
  const inputField = screen.getByRole("textbox");
  expect(inputField).toBeInTheDocument();
  expect(inputField).toHaveValue("hii");
  expect(inputField).toBeDisabled();

  // checking or testing burron
  const btn = screen.getByRole("button");
  expect(btn).toBeInTheDocument();
});
