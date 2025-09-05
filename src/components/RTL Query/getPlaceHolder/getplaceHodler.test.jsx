import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import GetPlaceHolder from "./getPlaceHoder";

test("this is the single input  field", () => {
  render(<GetPlaceHolder />);
  const inputPlace = screen.getByPlaceholderText("Enter username");
  expect(inputPlace).toBeInTheDocument();
});

// also runs for multiple roles
test("this for multiple inputs", () => {
  render(<GetPlaceHolder />);
  const inputs = screen.getAllByPlaceholderText("Enter username");
  for (let i = 0; i < inputs.length; i++) {
    expect(inputs[i]).toBeInTheDocument();
    expect(inputs[i]).toHaveValue("Muqhtadeer");
  }
});



