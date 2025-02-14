/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // Brute Force
  /*
  for (let i = 0; i < nums.length; i++) {
          for (let j = i + 1; j < nums.length; j++) {
              if (nums[i] === nums[j]) {
                  return true;
              }
          }
      }
      return false;
      Time: O(N^2)
      Space: O(1)
  */
  // Sorting method
  /*
  nums.sort((a, b) => a - b);
      for (let i = 1; i < nums.length; i++) {
          if (nums[i] === nums[i - 1]) {
              return true;
          }
      }
  return false;
  Time: O(nlogn)
  Space: O(n) or O(1) depending on the algorithm
  */
  // Optimal Solution:
  /*
  const seen = new Set();
      for (const num of nums) {
          if (seen.has(num)) {
              return true;
          }
          seen.add(num);
      }
      return false;
      Time: O(N)
      Space: O(N)
  */
  // Optimal Solution
  /*
  const seen = new Set(nums);
  return seen.size < nums.length;
  Time: O(N)
  Space: O(N)
  */
};
