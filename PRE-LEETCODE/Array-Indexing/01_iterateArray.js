// #1 ITERATE OVER AN ARRAY
// Write a function that prints each element in an array in order from the first to the last.

// Base conditions:
// Check if Array
// check for empty arrays.

function iterateArray(array) {
  if (!Array.isArray(array)) {
    console.error("Input is not an array");
    return;
  }

  if (array.length === 0) {
    console.log("empty array");
    return;
  }
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

iterateArray(123); // Logs: Input is not an array
iterateArray([1, 2, 3]); // Logs: 1, 2, 3
iterateArray([]);
