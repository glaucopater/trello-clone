import { generateRandomId, sortArrayById } from ".";
import { randomOrderState } from "../store/fixtures";

describe("utils", () => {
  it("should generateRandomId greater then 5 chars", () => {
    const result = generateRandomId();
    expect(result.length).toBeGreaterThanOrEqual(5);
  });

  it("should sort an array of objects by id", () => {
    const result = sortArrayById(randomOrderState).map(
      (swimlane) => swimlane.id
    );
    expect(result).toMatchObject(["1", "2", "3"]);
  });
});
