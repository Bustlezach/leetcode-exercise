/**
 * Binary Search - Given an array of integers which is sorted in ascending order, 
 * and a target integer, 
 * write a function to search for whether the target is there in the given array. 
 * If it is there then return its index. Otherwise, return -1. 
 * You must write an algorithm with O(log n) runtime complexity.
 */

// Using divide and conquer method iteratively

function binarySearch (arr, tValue) {
  let l = 0;
  const r = arr.length - 1;
  let m;

  while (l <= r){
    m = Math.floor((l + r) / 2);
    if (tValue === arr[m]) {
      return m;
    }

    if (tValue > m) {
      l = m + 1;
    } else {
      r = m - 1;
    }
    l++;
  }
  return -1;
}

function binarySearchR(arr, target) {
  function recurse(arr, target, l, r) {
    if (l > r) return -1;
    const m = Math.floor((l+r)/2);

    if (target === arr[m]) return m;
    else if (target > arr[m]) return recurse(arr, target, m+1, r);
    else return recurse(arr, target, l, m -1);
  }

  return recurse(arr, target, 0, arr.length - 1);
}

const a = [0, 2, 3, 5, 7, 8, 13];
console.log(binarySearch(a, 8));
console.log(binarySearchR(a, 8));