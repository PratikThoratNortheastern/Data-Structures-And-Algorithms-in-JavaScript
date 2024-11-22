// #2 Iterate Over an Array in Reverse
// Modify the previous function to print the elements in reverse order, from the last to the first.

const array_one = [1, 2, 3, 4, 5];
const array_two = [43];
const array_three = [7, 7, 7, 7];
const array_four = [1, "two", 3.0, true];
const array_five = [];

function reverseIterateArray(array) {
  if (!Array.isArray(array)) console.log("Error, not an Array :(");

  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
}
console.log(" ");
reverseIterateArray(array_one);
console.log(" ");
reverseIterateArray(array_two);
console.log(" ");
reverseIterateArray(array_three);
console.log(" ");
reverseIterateArray(array_four);
console.log(" ");
reverseIterateArray(array_five);
