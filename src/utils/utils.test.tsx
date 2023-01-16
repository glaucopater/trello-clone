import {
  generateRandomId,
  getInitialState,
  sortArrayById,
  sortArrayByProperty,
} from ".";
import { LOCALSTORAGE_STATE_KEY } from "../config";
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
    expect(result).toMatchObject([1, 2, 3]);
  });
});

describe("sortArrayByProperty", () => {
  it("should sort an array by the given property", () => {
    const arr = [
      { id: 1, name: "Zebra" },
      { id: 2, name: "Apple" },
      { id: 3, name: "Banana" },
    ];
    const property = "name";
    const expectedResult = [
      { id: 2, name: "Apple" },
      { id: 3, name: "Banana" },
      { id: 1, name: "Zebra" },
    ];
    expect(sortArrayByProperty(arr, property)).toEqual(expectedResult);
  });
});

describe("getInitialState", () => {
  it("should return the initial state if no store is found in local storage", () => {
    const initialState = [
      { cards: [], id: 1, name: "To Do" },
      { cards: [], id: 2, name: "In progress" },
      { cards: [], id: 3, name: "Done" },
    ];

    localStorage.removeItem(LOCALSTORAGE_STATE_KEY);
    expect(getInitialState()).toEqual(initialState);
  });

  it("should return the state stored in local storage if it exists", () => {
    const store = {
      swimlanes: [
        [
          { cards: [], id: 1, name: "To Do" },
          { cards: [], id: 2, name: "In progress" },
          { cards: [], id: 3, name: "Done" },
        ],
      ],
      cards: [],
    };

    localStorage.setItem(LOCALSTORAGE_STATE_KEY, JSON.stringify(store));
    expect(getInitialState()).toEqual(store);
  });
});
