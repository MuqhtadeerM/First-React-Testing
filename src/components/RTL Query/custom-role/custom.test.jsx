import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Custom from "./custom";

test("Button testing", () => {
  render(<Custom />);

  // for semantic elements
  const btn1 = screen.getByRole("button", { name: "Click 1" });
  const btn2 = screen.getByRole("button", { name: "Click 2" });
  const input1 = screen.getByRole("textbox", { name: "User Name" });
  const input2 = screen.getByRole("textbox", { name: "User Age" });

  //   for non semantic tags we use role in tag itself
  const div1 = screen.getByRole("dummy");
  expect(div1).toBeInTheDocument();

  expect(btn1).toBeInTheDocument();
  expect(btn2).toBeInTheDocument();
  expect(input1).toBeInTheDocument();
  expect(input2).toBeInTheDocument();
});
