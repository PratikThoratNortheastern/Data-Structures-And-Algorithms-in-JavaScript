"use strict";
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  // Time:O(nlogn)
  // Space:O(N) for larger ranges
  // Brute Force
  // return nums.sort((a,b)=>a-b);
  // Optimal approach:
  // Counting Sort.
  // const count = new Int32Array(3);
  //       for (let num of nums) {
  //           count[num]++;
  //       }
  //       let index = 0;
  //       for (let i = 0; i < 3; i++) {
  //           while (count[i]-- > 0) {
  //               nums[index++] = i;
  //           }
  //       }
  // Time: O(N)
  // Space: O(1)
  // Note to Self: This can only be acheived for smaller ranges. In reality it is not possible to get something with this much efficiency.
};
