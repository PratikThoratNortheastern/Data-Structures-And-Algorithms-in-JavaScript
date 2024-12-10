/**
 * @param {number[]} nums
 * @return {boolean}
Brute Force. Time Complexity: O(n^2) O(1) 
let containsDuplicate = function (nums) {
  // Handling the case where array is empty.
  if (nums.length < 1) {
    return false;
  }

  // Checking duplicates.
  for (let i = 0; i < nums.length; i++) {
    let j = i + 1; //updates by i+1 to go into the next index.
    while (j < nums.length) {
      if (nums[i] === nums[j]) {
        return true;
      }
      j++;
    }
  }
  return false;
};
*/
