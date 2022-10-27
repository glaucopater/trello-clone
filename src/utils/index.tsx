export const generateRandomInt = (maxInt = 50) => {
  return Math.ceil(Math.random() * maxInt);
};

export const generateRandomArray = (maxItems = 10) => {
  return Array.from(Array(generateRandomInt(maxItems)).keys());
};
