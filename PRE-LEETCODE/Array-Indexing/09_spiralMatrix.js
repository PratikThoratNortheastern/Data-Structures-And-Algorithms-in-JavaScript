// Traverse Elements in Spiral Order

// Print elements of a 2D array in spiral order, starting from the top-left corner and moving inward.
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const result = [];
let left = 0;
let top = 0;
let right = matrix[0].length;
let bottom = matrix.length - 1;

let direction = "right";
while (left <= right && top <= bottom) {}
