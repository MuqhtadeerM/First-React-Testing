import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import InputText from "./input";

test("Testing the Input Box Case", () => {
  render(<InputText />);
  let inputCheck = screen.getByRole("textbox");
  let placeholder = screen.getByPlaceholderText("Enter The User");
  expect(inputCheck).toBeInTheDocument();
  expect(placeholder).toBeInTheDocument();
  expect(inputCheck).toHaveAttribute("name", "username");
  expect(inputCheck).toHaveAttribute("id", "userId");
  expect(inputCheck).toHaveAttribute("type", "text");
  expect(inputCheck).toHaveAttribute("value", "Muqhtadeer M");
});

test("Testing the Input Box Case2", () => {
  render(<InputText />);
  let inputCheck = screen.getByRole("textbox");
  let placeholder = screen.getByPlaceholderText("Enter The User");
  expect(inputCheck).toBeInTheDocument();
  expect(placeholder).toBeInTheDocument();
  expect(inputCheck).toHaveAttribute("name", "username");
  expect(inputCheck).toHaveAttribute("id", "userId");
  expect(inputCheck).toHaveAttribute("type", "text");
  expect(inputCheck).toHaveAttribute("value", "Muqhtadeer M");
});

// to Group the multiple test we use the Describe function which contains two parameters

describe("UI test case group", () => {
  test("test case 1", () => {
    render(<InputText />);
    let inputCheck = screen.getByRole("textbox");
    expect(inputCheck).toHaveAttribute("name", "username");
  });
  test("test case 2", () => {
    render(<InputText />);
    let inputCheck = screen.getByRole("textbox");
    expect(inputCheck).toHaveAttribute("name", "username");
  });
  test("test case 3", () => {
    render(<InputText />);
    let inputCheck = screen.getByRole("textbox");
    expect(inputCheck).toHaveAttribute("name", "username");
  });
});

describe("API UI test case group", () => {
  test("api test case 1", () => {
    render(<InputText />);
    let inputCheck = screen.getByRole("textbox");
    expect(inputCheck).toHaveAttribute("name", "username");
  });
  test("api test case 2", () => {
    render(<InputText />);
    let inputCheck = screen.getByRole("textbox");
    expect(inputCheck).toHaveAttribute("name", "username");
  });
  test("api test case 3", () => {
    render(<InputText />);
    let inputCheck = screen.getByRole("textbox");
    expect(inputCheck).toHaveAttribute("name", "username");
  });
});
