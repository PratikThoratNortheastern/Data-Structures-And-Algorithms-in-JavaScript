// Traverse the Main Diagonal of a Matrix
// Print the elements along the main diagonal of a square matrix, where the row and column indices are equal.

"use strict";
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function getDiagonals(matrix) {
  const primaryDiagonal = []; //where row === column
  const secondaryDiagonal = []; // where row === matrix.length - row - 1;

  for (let row = 0; row < matrix.length; row++) {
    primaryDiagonal.push(matrix[row][row]);
    secondaryDiagonal.push(matrix[row][matrix.length - row - 1]);
  }

  return [primaryDiagonal, secondaryDiagonal];
}

const diagonals = getDiagonals(matrix);
console.log(diagonals);
