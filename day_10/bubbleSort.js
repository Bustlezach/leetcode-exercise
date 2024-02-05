/**
 * Bubble Sort - You are given an array of integers.
* Write a function that will take this array as input and return the sorted array using 
* Bubble sort.
 */

// Test cases:
const a = [1, 2, 4, 3];
const b = [1, 2, 3];
const c = [1, 9, 7, 89, 0, 2, 3];

function bubbleSort(arr) {
  const arrLen = arr.length - 1;
  let k = arr.length - 1;

  const sw = (l, m) => {
    return ([arr[l], arr[m]] = [arr[m], arr[l]]);
  };

  while (k >= 0) {
    for(let i = 0; i <= arrLen; i++) {
      if (arr[i] > arr[i + 1]) {
        let j = i+1;
        sw(i, j);
      }
    }
    k--;
  }

  return arr;
}

function bubblesort(arr) {
  const arrLen = arr.length - 1;
  let sorted = false;
  let counter = 0;

  const sw = (l, m) => {
    return ([arr[l], arr[m]] = [arr[m], arr[l]]);
  };

  while (sorted === false) {
    sorted = true;
    for (let i=0; i < arrLen-counter; i++){
      if(arr[i]>arr[i+1]) {
        let j = i+1;
        sw(i, j);
        sorted = false;
      }
    }
    counter++;
  }
  return arr;
}

console.log(bubbleSort(a));
console.log(bubbleSort(b));
console.log(bubbleSort(c));
console.log(bubblesort(a));
console.log(bubblesort(b));
console.log(bubblesort(c));