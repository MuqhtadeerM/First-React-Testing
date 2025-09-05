import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import GetByText from "./getByText";

test("button testing", () => {
  render(<GetByText />);
  const btn = screen.getByText("Login");
  expect(btn).toBeInTheDocument();
});

test("p tag testing", () => {
  render(<GetByText />);
  const pTag = screen.getByText("P Tag Testing");
  expect(pTag).toBeInTheDocument();
  expect(pTag).toHaveClass("paraStyle");
  expect(pTag).toHaveAttribute("id");
});

test("testing the h1 tags", () => {
  render(<GetByText />);
  const hTags = screen.getAllByText("React 1");
  for (let i = 0; i < hTags.length; i++) {
    expect(hTags[i]).toBeInTheDocument();
  }
});
