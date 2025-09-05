import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import GetAllRole from "./getAllby";

test("Test for Get All Role", () => {
  render(<GetAllRole />);

  const btns = screen.getAllByRole("button");
  const options = screen.getAllByRole("option");

  for (let o = 0; o < options.length; o++) {
    expect(options[o]).toBeInTheDocument();
  }

  // instead of giving array inside the expect in btns this for loops print till the endq
  for (let i = 0; i < btns.length; i++) {
    expect(btns[i]).toBeInTheDocument();
  }
});
