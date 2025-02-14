"use strict";
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  // We need to append the input array to the input array itself.
  // [1,2,1] => [1,2,1,1,2,1]. We push the elements to itseld
  // using spread operator
  // return [...nums, ...nums];
  // Using loops 2-pass solution
  // Time Complexity: O(N)
  // Space O(N) for output array
  // let ans = [];
  // for(let i = 0;i<2;i++){
  //     for(num of nums){
  //         ans.push(num);
  //     }
  // }
  // return ans;
  // Single pass solution
  // let n = nums.length;
  // let ans = new Array(2 * n);
  // for (i = 0; i < n; i++) {
  //   ans[i] = ans[i + n] = nums[i];
  // }
  // return ans;
  // Time Complexity: O(N)
  // Space Complexity: O(N) //for the output array.
};
