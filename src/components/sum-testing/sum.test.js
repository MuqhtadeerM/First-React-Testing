import { expect } from "vitest";
import sum from "./sum";

// we use 3 parameters here to test a component

test("testing for sum function", () => {
  // for better conditons we can use this
  let a = 10;
  let b = 20;
  let output = 30;

  expect(sum(a, b)).toBe(output);
});
