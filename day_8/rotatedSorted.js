/**
 * Search in Rotated Sorted array - 
 * You are given an integer array nums sorted in ascending order 
 * (with distinct values). Prior to being passed to your function, 
 * nums is possibly rotated at an unknown pivot index k 
 * (1 <= k < nums.length) such that the resulting array is 
 * [nums[k], nums[k + 1], ..., nums[n - 1], nums[0], nums[1], ..., 
 * nums[k  - 1]](0 - indexed). 
  * For example, [0, 1, 2, 4, 5, 6, 7] might be rotated at pivot 
  * index 3 and become [4, 5, 6, 7, 0, 1, 2]. Given an integer 
  * target, 
  * reurn the index of target if it is in the array, 
  * else return -1. You must write an algorithm with O(log n) 
  * runtime complexity.
 */

const sw = (arr, i, j) => {
  while(i <= j) {
    [[arr[i], arr[j]] = [arr[j], arr[i]]];
    j--;
    i++;
  }
  return arr;
}

const biSearch = (arr, target) => {
  let r = arr.length;
  let l = 0;

  function recurse(arr, l, r, target) {
    let m = Math.floor((l + r) / 2);
    if (l > r) return -1;
    if (arr[m] === target) return m;
    if (arr[l] <= arr[m]) {
      // left part is sorted
      if (target >= arr[l] && target < arr[m]){
        r = m - 1;
        return recurse(arr, l, r, target);
      } else {
        l = m + 1;
        return recurse(arr, l, r, target);
      }
    } else {
      // right part is sorted
      if (target <= arr[r] && target > arr[m]) {
        l = m + 1;
        return recurse(arr, l, r, target);
      } else {
        r = m - 1;
        return recurse(arr, l, r, target);
      }
    }
  }
  return recurse(arr, l, r, target);
};


function biSearchIter(arr, target) {
  let l = 0;
  let r = arr.length - 1;
  let m;

  // while (l <= r) {
  //   m = Math.floor((l+r) / 2);
  //   if (target === arr[m]) {
  //     return m;
  //   } else if (target < arr[m]) {
  //     r = m -1;
  //   } else {
  //     l = m + 1;
  //   }
  // }

  while (l <= r) {
    m = Math.floor((l+r)/2);
    if (target === arr[m]) return m;
    if (arr[l] <= arr[m]) {
      // left is sorted
      if(target >= arr[l] && target < arr[m]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    } else {
      // right is sorted
      if (target > arr[m] && target <= arr[r]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
  }

  return -1;
};


function rotateSorted(arr, index, target) {
  let i = 0;
  let j = arr.length - 1;

  sw(arr, 0, j-1-index);
  sw(arr, index, j);
  sw(arr, i, j);
  
  return biSearchIter(arr, target);
}

const a = [0, 1, 2, 4, 5, 6, 7];
console.log(rotateSorted(a, 3, 5));
console.log(biSearchIter([1, 2, 3, 4, 5], 5));
console.log(biSearch([1, 2, 3, 4, 5], 5));