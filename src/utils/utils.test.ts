import { generateRandomArray } from "./index";

describe("Utils", () => {
  it("should generate an array", () => {
    expect(generateRandomArray(1)).toHaveLength(1);
  });
});
