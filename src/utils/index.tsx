import { initialState } from "../store";

export const generateRandomInt = (maxInt = 50) => {
  return Math.ceil(Math.random() * maxInt);
};

export const generateRandomArray = (maxItems = 10) => {
  return Array.from(Array(generateRandomInt(maxItems)).keys());
};

export const generateRandomId = (): string => {
  return String(generateRandomInt());
};

export const generateRandomContent = (maxRepeat: number) =>
  "This is the card content. ".repeat(generateRandomInt(maxRepeat));

export const sortArrayById = (arr: any[]) => {
  arr.sort((a, b) => a.id.charCodeAt(0) - b.id.charCodeAt(0));
  return arr;
};

export const getInitialState = () => {
  const store = localStorage.getItem("state");
  if (store) {
    return JSON.parse(store);
  } else return initialState;
};
