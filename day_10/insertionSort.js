/**
 * Insertion Sort - You are given an array of integers.
Write a function that will take this array as input and return the sorted 
array using Insertion sort.
 */

const a = [1, 2, 4, 3];
const b = [1, 2, 3];
const c = [1, 9, 7, 89, 0, 2, 3];

const insertionSort = (arr) => {
  const arrLen = arr.length;
  
  
  for(let i = 1; i < arrLen; i++) {
    let j = i - 1;
    let cur = arr[i];

    while(j >= 0 && arr[j] > cur) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = cur;
  }
  return arr;
};

console.log(insertionSort(a));
console.log(insertionSort(b));
console.log(insertionSort(c));