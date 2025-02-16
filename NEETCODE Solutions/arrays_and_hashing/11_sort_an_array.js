/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  // I swear to lord if I wanted to
  // I would have just used nums.sort on this one.
  // even numbers are treated as strings :(.
  // Additionally, using array.prototype.sort(); sucks
  // WHY? because it has O(N) space depending on input.

  // No clue why this works
  return nums.sort((a, b) => a - b);

  // quick or counting sort based on the input
  const n = nums.length;
  let min = nums[0];
  let max = nums[0];

  for (let i = 1; i < n; ++i) {
    min = Math.min(min, nums[i]);
    max = Math.max(max, nums[i]);
  }

  if (n + max - min > n * Math.log2(n)) return nums.sort((a, b) => a - b);

  let i = 0;
  const counts = new Uint32Array(max - min + 1);

  for (let i = 0; i < n; ++i) counts[nums[i] - min]++;

  for (let j = 0; j < counts.length; ++j)
    while (counts[j]--) nums[i++] = j + min;
  return nums;
};
