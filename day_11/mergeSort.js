/**
 * Merge Sort-You are given an array of integers. 
 * Write a function that will take this array as input and return the sorted array 
 * using Merge sort.
 */

function mergeSort(arr) {
  if (arr.length > 1){
    const left = 0;
    const right = arr.length;

    const mid = Math.floor((left + right) / 2);

    const leftArr = arr.slice(left, mid);
    const rightArr = arr.slice(mid, right);

    // recursion
    mergeSort(leftArr);
    mergeSort(rightArr);

    let i = 0;
    let j = 0;
    let k = 0;

    while(i < leftArr.length && j < rightArr.length) {
      if(leftArr[i] >= rightArr[j]){
        arr[k++] = rightArr[j++];
      } else {
        arr[k++] = leftArr[i++];
      }
    }

    while (i < leftArr.length) {
      arr[k++] = leftArr[i++];
    }

    while (j < rightArr.length) {
      arr[k++] = rightArr[j++];
    }
  }
  return arr;
}

const a = [4, 56, 34, 10, 77, 51, 93, 30, 5, 52];
const b = [72, 34, 88, 14, 32, 12, 34, 77, 56, 83];
console.log(mergeSort(a));
console.log(mergeSort(b));