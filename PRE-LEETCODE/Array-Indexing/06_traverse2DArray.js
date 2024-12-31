// #6 Traverse a Two-Dimensional Array
// Write a function to print all elements of a 2D array (matrix), row by row.

// A new fun concept YAY!

// What are Two Dimensional Arrays?
// -> An array full of arrays. They are used in mathematical problems like Matrices or grids (In context of Leetcode). We can also use them in image/speech processing.

// Syntax:
// 1) Array of arrays. Most used way.
// let twoDArray = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let row = 0; row < matrix.length; row++) {
  for (let col = 0; col < matrix[row].length; col++) {
    console.log(matrix[row][col]);
  }
}
