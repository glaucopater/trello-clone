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

export const sortArrayById = (arr: any[]) => {
  return sortArrayByProperty(arr, "id");
};

export const sortArrayByProperty = (arr: any[], property: string) => {
  arr.sort((a, b) => a[property].charCodeAt(0) - b[property].charCodeAt(0));
  return arr;
};

export const getInitialState = () => {
  const store = localStorage.getItem("state");
  if (store) {
    return JSON.parse(store);
  } else return initialState;
};
