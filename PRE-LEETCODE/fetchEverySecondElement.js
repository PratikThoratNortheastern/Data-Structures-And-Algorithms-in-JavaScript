// #3 Fetch Every Second Element
// Write a function that accesses every other element in the array, starting from the first element.

// First Draft
// function fetchEverySecondElement(array) {
//   if (!Array.isArray(array)) {
//     console.log("Invalid Array");
//     return -1;
//   }
//   for (let i = 0; i < array.length; i++) {
//     if (array.indexOf(array[i]) % 2 === 0) {
//       console.log(array[i]);
//     } else {
//       console.log("");
//     }
//   }
// }

// A much cleaner version
function fetchEverySecondElement(array) {
  if (!Array.isArray(array)) {
    return -1;
  }
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      result.push(array[i]);
    }
  }

  return result;
}

const validateEmptyArray = fetchEverySecondElement([]);
console.log(validateEmptyArray);

const invalidArray = fetchEverySecondElement(22);
console.log(invalidArray);

const newArray = fetchEverySecondElement([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(newArray);
