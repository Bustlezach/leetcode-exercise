/**
 * Find First and Last Position of Element in Sorted Array-
 * You are given an array of integers sorted in non-decreasing order, 
 * find the starting and ending position of a given target value. 
 * If target is not found in the array, return [-1, -1]. 
 * You must write an algorithm with O(log n) runtime complexity.
 */


function leftExtremePosition(arr, l, r, target, range) {
  if (l > r) return;
  let mid = Math.floor((l + r) / 2);
  if(target === arr[mid]) {
      if (mid === 0 || arr[mid - 1] !== target) return range[0] = mid;
      else {
          r = mid - 1;
          leftExtremePosition(arr, l, r, target, range);
      }
  } else if (target < arr[mid]) {
      r = mid - 1;
      leftExtremePosition(arr, l, r, target, range);
  } else {
      l = mid + 1;
      leftExtremePosition(arr, l, r, target, range);
  }
}


function rightExtremePosition(arr, l, r, target, range) {
  if (l > r) return;
  let mid = Math.floor((l + r) / 2);
  if (target === arr[mid]) {
      if (mid === (arr.length - 1) || arr[mid +1] !== target) return range[1] = mid;
      else {
          l = mid + 1;
          rightExtremePosition(arr, l, r, target, range);
      }
  } else if (target > arr[mid]) {
      l = mid + 1;
      rightExtremePosition(arr, l, r, target, range);
  } else {
      r = mid - 1;
      rightExtremePosition(arr, l, r, target, range);
  }
}


function firstLastPosition(arr, target) {
  if (typeof arr !== 'object') return `The array must be a list`;
  if (arr.length === 0) return `The list must not be empty`;
  if (target === 'undefined') return `No target`;

  let left = 0;
  let right = arr.length - 1;
  const range = [-1, -1];
  leftExtremePosition(arr, left, right, target, range);
  rightExtremePosition(arr, left, right, target, range);
  return range;
}


// Test cases:
const a = [0, 1, 2, 3, 3, 3, 4, 6];
console.log(firstLastPosition(a, 3));
console.log(firstLastPosition([3, 5, 7], 3));
console.log(firstLastPosition([3, 5, 7], 7));
