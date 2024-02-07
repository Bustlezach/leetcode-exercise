/**
 * Selection Sort-You are given an array of integers.
 *  Write a function that will take this array as input and return the sorted array 
 * using Selection sort.
 */

function selectionSort(arr) {
  if (arr.length <= 1) return arr;

  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[smallest] > arr[j]) {
        smallest = j;
      }
    }
    [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
  }
  return arr;
}





const a = [4, 56, 34, 10, 77, 51, 93, 30, 5, 52];
const b = [72, 34, 88, 14, 32, 12, 34, 77, 56, 83];
console.log(selectionSort(a));
console.log(selectionSort(b));;