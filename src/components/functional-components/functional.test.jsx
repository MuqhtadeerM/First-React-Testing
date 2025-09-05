import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import FunctionalComponents from "./functional";
import handlerData from "./helper";

test("method testing case 1", () => {
  render(<FunctionalComponents />);
  const btn = screen.getByTestId("btn1");
  fireEvent.click(btn);
  //   this is the first method
  expect(screen.getByText("Updated")).toBeInTheDocument();
});

test("method  case 2", () => {
  expect(handlerData()).toMatch("hii");
});
