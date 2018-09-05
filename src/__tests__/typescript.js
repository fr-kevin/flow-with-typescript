const { greet } = require("../typescript");

it("tests", () => {
  expect(greet("test")).toEqual("Hello, test!");
});