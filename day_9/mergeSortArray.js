/**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, 
 * and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
  Merge nums1 and nums2 into a single array sorted in non-deceasing order.
  The final sorted array should not be returned by the function, 
  but instaed should be stored inside the array nums1. To accomodate this, 
  nums1 has a length of m+n, where the first m elements denote the elements that should be merged, 
  and the lst n elements are set to 0 and should be ignored. nums2 has a length of n.
 * @param {*} nums1 
 * @param {*} nums2 
 */



  function mergeSortArray(nums1, nums2) {
    let n = nums1.length - 1;
    let m = nums2.length - 1;

    while(n >= 0 && m >= 0) {
      nums1[n] = nums2[m];
      n--;
      m--;
    }
  
    

    nums1.sort();
    console.log(nums1);
  }
  
  const a = [0,0,3,0,0,0,0,0,0];
  const b = [-1,1,1,1,2,3];
  const c = [1,2,3,0,0,0];
  const d = [2,5,6];
  const e = [1];
  const f = [];
  const g = [0];
  const h = [1];
  
  mergeSortArray(c, d);
  mergeSortArray(e, f);
  mergeSortArray(g, h);
  mergeSortArray(a, b);