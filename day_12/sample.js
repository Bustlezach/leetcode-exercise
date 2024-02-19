// use case
const a = [123, 78, 63, 19, 5, 764];

function radixSort(arr){
  if (arr.length < 1) return 'Empty array';

  // largest number
  let numMax = arr[0];
  for(let i = 0; i < arr.length; i++){ // Fixed 'a' to 'arr' here
    numMax = Math.max(numMax, arr[i]); // Fixed 'a' to 'arr' here
  }

  // Number of digits in maximum number
  const numDigits = Math.floor(Math.log10(numMax)) + 1;
  
  // counting sort has to be done in the number of the digit
  // of the largest value in the given array.
  for (let i = 0; i < numDigits; i++) {
    countingSort(arr, i);
  }
  return arr;
}

function countingSort(arr, nD){
  const temp = new Array(10).fill(0);
  const output = new Array(arr.length).fill(0);
  const digitPlace = Math.pow(10, nD);

  for(const num of arr){
    // each digit of each number
    let digit = Math.floor(num / digitPlace) % 10;
    temp[digit] += 1;
  }

  for (let i = 1; i < 10; i++){ // Fixed starting index to 1
    temp[i] = temp[i] + temp[i-1];
  }
  
  for(let j = arr.length - 1; j >= 0; j--){
    let currDigit = Math.floor(arr[j] / digitPlace) % 10;
    temp[currDigit]--;
    let insertPosition = temp[currDigit];
    output[insertPosition] = arr[j];
  }

  arr.splice(0, arr.length, ...output);
}

console.log(radixSort(a));
