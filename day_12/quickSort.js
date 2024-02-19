/**
 * Quick Sort - You are given an array of integers.
Write a function that will take this array as input and return the sorted array
 using Quick sort.
 */

const swap = (arr, a, b) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

// Pivot is taken at the middle
function partition(arr, start=0, end=arr.length-1) {
  let mid = Math.floor((start + end) / 2);
  swap(arr, start, mid);
  
  let pivot = arr[start];
  let i = start + 1;
  let j = end;

  while (i <= j){
      while(arr[i] <= pivot) {
          i++;
      }
      while(arr[j] > pivot) {
          j--;
      }
      if (i < j){
          swap(arr, i, j);
      }
  }
  swap(arr, start, j);
  return j;
}


function quickSort(arr, start=0, end=arr.length-1) {
  if(start < end) {
    const pIndex = partition(arr, start, end);
    quickSort(arr, start, pIndex - 1);
    quickSort(arr, pIndex + 1, end);
  }
  return arr;
}


debugger;
const array = [5,4,0,3,1];
quickSort(array);
console.log(array);