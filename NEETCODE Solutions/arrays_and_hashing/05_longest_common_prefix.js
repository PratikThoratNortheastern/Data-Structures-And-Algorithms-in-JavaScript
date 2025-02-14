/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // Horizontal Scanning:
  /*
  let prefix = strs[0];
      for (let i = 1; i < strs.length; i++) {
          let j = 0;
          while (j < Math.min(prefix.length, strs[i].length)) {
              if (prefix[j] !== strs[i][j]) {
                  break;
              }
              j++;
          }
          prefix = prefix.slice(0, j);
      }
      return prefix;
      Time: O(m * n)
      Space: O(1) no extra space used


  // Vertical Scanning
  // Same TC and SC as above
  for (let i = 0; i < strs[0].length; i++) {
          for (let s of strs) {
              if (i === s.length || s[i] !== strs[0][i]) {
                  return s.slice(0, i);
              }
          }
      }
  return strs[0];
  */
};
