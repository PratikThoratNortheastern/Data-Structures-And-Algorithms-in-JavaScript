/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // Brute Force:
  // Time: O(n^2)
  // Space: O(1)
  /*
  let n = nums.length;
      for (let num of nums) {
          let count = nums.reduce((acc, val) => acc + (val === num ? 1 : 0), 0);
          if (count > Math.floor(n / 2)) {
              return num;
          }
      }
  return -1;

  // Hash Map saves the day.
  // Time: O(N);
  // Space: O(N); we use a map for frequency.

  const count = new Map();
      let res = 0, maxCount = 0;

      for (let num of nums) {
          count.set(num, (count.get(num) || 0) + 1);
          if (count.get(num) > maxCount) {
              res = num;
              maxCount = count.get(num);
          }
      }
  return res;
  */
};
