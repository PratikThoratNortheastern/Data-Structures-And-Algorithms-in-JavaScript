// #4 Find the Index of a Target Element
// Write a function that searches for a specific element in an array and returns its index. If the element is not found, return -1.
"use strict";

// Requirements
// We have an array.
// We need to find the index of target element. Basically we have to implement array.prototype.indexOf

// We linearly search for the element and try to match it with target.
// If found we return the index or else we return -1.

function indexOfTarget(array, target) {
  if (!Array.isArray(array)) return "Invalid";

  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

const caseNotFound = indexOfTarget([1, 2, 3, 4, 5], 8);
console.log(caseNotFound);

const caseFound = indexOfTarget([1, 2, 3, 4, 5], 1);
console.log(caseFound);
