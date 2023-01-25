export const colors = [
  "#264653",
  "#2a9d8f",
  "#e9c46a",
  "#f4a261",
  "#e76f51",
  "#e63946",
  "#f1faee",
  "#a8dadc",
  "#457b9d",
  "#1d3557",
  "#f4f1de",
  "#e07a5f",
  "#3d405b",
  "#81b29a",
  "#f2cc8f",
];

export const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

export const btn = document.getElementById("btn");
export const color = document.querySelector(".color");

const getRandomNumber = (arr) => Math.floor(Math.random() * arr.length);

export const getHexColor = (arr) => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += arr[getRandomNumber(arr)];
  }
  return hexColor;
};

export const getPredifinedColor = (arr) => {
  return arr[getRandomNumber(arr)];
};
