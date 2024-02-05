/**
 * Search in 2D Array-Write an efficient algorithm that searches for a value target in an m x n integer matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.

The first integer of each row is greater than the last integer of the previous row.

If the value is there in the matrix return true, else false.
 */

// Test cases:
const  a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; // target = 5
const b = [[1, 5, 7, 11], [12, 13, 17, 20], [25, 26, 30, 31], [32, 35, 39, 43], [45, 60, 62, 65]]; // target 62

function binarySearch(arr, target) {
  let l = 0;
  let r = arr.length - 1;
  let m;

  while(l <= r){
    m = Math.floor((l + r) / 2);
    if(target === arr[m]) return true;
    else if(target < arr[m]) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return false;
}

function recurse(arr, l, r, target) {
  if (l > r) return false;

  let m = Math.floor((l + r) / 2);
  if (target >= arr[m][0] && target <= arr[m][arr[m].length - 1] ) {
    return binarySearch(arr[m], target);
  } else if (target < arr[m][0]) {
    r = m - 1;
    return recurse(arr, l, r, target);
  } else {
    l = m + 1;
    return recurse(arr, l, r, target);
  }
}


function searchMatrix(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  return recurse(arr, left, right, target);
}

console.log(searchMatrix(a, 5));
console.log(searchMatrix(b, 62));
console.log(searchMatrix(b, 19));