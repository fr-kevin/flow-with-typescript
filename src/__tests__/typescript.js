import { greet } from "../typescript";

it("tests", () => {
  expect(greet("test")).toEqual("Hello, test!");
});