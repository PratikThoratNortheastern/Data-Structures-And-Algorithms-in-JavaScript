// Traverse the Perimeter of a Matrix

// Print the elements along the outer edge (perimeter) of a 2D array.

/*
matrix = [
[1,2,3],
[4,5,6],
[7,8,9]
]

output: 123 698 741
*/
function traversePerimeter(matrix) {
  if (matrix.length === 0) return [];

  const result = [];
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Traverse the top row
  for (let col = 0; col < cols; col++) {
    result.push(matrix[0][col]);
  }

  // Traverse the right column
  for (let row = 1; row < rows; row++) {
    result.push(matrix[row][cols - 1]);
  }

  // Traverse the bottom row (if there are multiple rows)
  if (rows > 1) {
    for (let col = cols - 2; col >= 0; col--) {
      result.push(matrix[rows - 1][col]);
    }
  }

  // Traverse the left column (if there are multiple columns)
  if (cols > 1) {
    for (let row = rows - 2; row > 0; row--) {
      result.push(matrix[row][0]);
    }
  }

  return result;
}

// Example
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(traversePerimeter(matrix));
// Output: [1, 2, 3, 6, 9, 8, 7, 4]
