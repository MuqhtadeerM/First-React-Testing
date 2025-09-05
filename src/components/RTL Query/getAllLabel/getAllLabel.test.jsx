import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import GetAllLabel from "./getAllLabel";

test("input case 1", () => {
  render(<GetAllLabel />);

  const inputs = screen.getAllByLabelText("UserName");
  for (let i = 0; i < inputs.length; i++) {
    expect(inputs[i]).toBeInTheDocument();
    expect(inputs[i]).toBeInTheDocument("muqhtadeer");
  }
});

test("checkbox case 1", () => {
  render(<GetAllLabel />);
  const checkbox = screen.getAllByLabelText("skills");
  for (let i = 0; i < checkbox.length; i++) {
    expect(checkbox[i]).toBeInTheDocument();
    expect(checkbox[i]).toBeInTheDocument("skills");
  }
});
