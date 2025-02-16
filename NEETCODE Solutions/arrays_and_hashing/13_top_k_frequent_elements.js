"use strict";
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const count = {};
  const frequency = Array.from({ length: nums.length + 1 }, () => []);

  for (const n of nums) {
    count[n] = (count[n] || 0) + 1;
  }
  for (const n in count) {
    frequency[count[n]].push(parseInt(n));
  }

  const res = [];
  for (let i = frequency.length - 1; i > 0; i--) {
    for (const n of frequency[i]) {
      res.push(n);
      if (res.length === k) {
        return res;
      }
    }
  }
  // Time: O(N) // for smaller ranges or sub inputs to work with.
  // Space: O(N)
};
