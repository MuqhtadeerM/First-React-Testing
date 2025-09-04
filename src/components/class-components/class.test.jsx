import { describe, expect, test } from "vitest";
import Users from "./class";

describe("User Class Component", () => {
  test("This is Class Test", () => {
    const userInstance = new Users();
    const result = userInstance.getUserList();
    expect(result).toBe("user list");
  });
});
