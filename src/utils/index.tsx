import { LOCALSTORAGE_STATE_KEY } from "../config";
import { initialState } from "../store";

export const generateRandomInt = () => {
  const array = new Uint32Array(1);
  self.crypto.getRandomValues(array);
  return array[0];
};

export const generateRandomId = (): string => {
  return String(generateRandomInt());
};

export const sortArrayById = (arr: any[]) => {
  const tempArray = [...arr];
  tempArray.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
  return tempArray; // sortArrayByProperty(arr, "id");
};

export const sortArrayByProperty = (arr: any[], property: string) => {
  console.log(arr, property);
  arr.sort((a, b) => a[property].charCodeAt(0) - b[property].charCodeAt(0));
  return arr;
};

export const getInitialState = () => {
  const store = localStorage.getItem(LOCALSTORAGE_STATE_KEY);
  if (store) {
    return JSON.parse(store);
  }
  return initialState;
};
