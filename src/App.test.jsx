import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import App from "./App";

test("Test First React app case", () => {
  render(<App />);
  const text = screen.getByText(/First react Test Case/i);
  const title = screen.getByTitle(/this is an ai generated image/i);
  const text2 = screen.getByText(/Muqhtadeer/i);

  expect(text).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
});

test("Test First React app case2", () => {
  render(<App />);
  const text = screen.getByText(/First react Test Case/i);
  const title = screen.getByTitle(/this is an ai generated image/i);
  const text2 = screen.getByText(/Muqhtadeer/i);

  expect(text).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
});
