/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // Brute force: Problem asked us not to use a new array so this solution sucks.
  /*
  const tmp = [];
      for (const num of nums) {
          if (num !== val) {
              tmp.push(num);
          }
      }
      for (let i = 0; i < tmp.length; i++) {
          nums[i] = tmp[i];
      }
  return tmp.length;
  Time: O(n)
  Space O(n)


  // Using Two Pointers

  let k = 0;
      for (let i = 0; i < nums.length; i++) {
          if (nums[i] !== val) {
              nums[k++] = nums[i];
          }
      }
  return k;
  Time: O(N)
  Space: O(1)
  */
};
