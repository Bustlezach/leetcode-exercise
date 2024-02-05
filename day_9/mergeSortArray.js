/**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, 
 * and two integers m and n, representing the number of elements in num1 and num2 respectively.
  Merge nums1 and nums2 into a single array sorted in non-deceasing order.
  The final sorted array should not be returned by the function, 
  but instaed should be stored inside the array nums1. To accomodate this, 
  nums1 has a length of m+n, where the first m elements denote the elements that should be merged, 
  and the lst n elements are set to 0 and should be ignored. num2 has a length of n.
 * @param {*} num1 
 * @param {*} num2 
 */


function mergeSortArray(num1, num2) {
  const n = num1.length;
  const m = num2.length;
  let i = n - 1;
  let j = m -1;
  let k = m + n -1;
  num1 = num1.concat(new Array(m).fill(0));

  while (j >= 0) {
      if (num1[i] > num2[j]) {
          num1[k] = num1[i];
          i--;
      } else {
          num1[k] = num2[j];
      }
      k--;
      j--;
  }
  console.log(num1);
}

const a = [1, 2, 3];
const b = [2, 5, 6];
mergeSortArray(a, b);