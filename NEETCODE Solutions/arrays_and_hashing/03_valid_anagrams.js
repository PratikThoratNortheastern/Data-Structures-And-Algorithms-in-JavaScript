/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // brute force
  //base case.
  if (s.length !== t.length) {
    return false;
  }
  /*
  let sortedS = s.split('').sort().join();
  let sortedT = t.split('').sort().join();
  return sortedT === sortedS;
  Time: O(nlogn + mlogm)
  Space: O(m + n)


  // Optimal using HashMaps
  const countS = {};
  const countT = {};
  for(let i = 0; i < s.length; i++){
      countS[s[i]] = (countS[s[i]] || 0) + 1;
      countT[t[i]] = (countT[t[i]] || 0) + 1;
  }

  // if keys don't match it ain't a valid anagram
  for(const key in countS) {
      if(countS[key] !== countT[key]) {
          return false
      }
  }
  return true;
  Time: O(N)
  Space: O(N)
  */
};
