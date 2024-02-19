/**
 * Radix Sort - You are given an array of integers.
 * Write a function that will take this array as input and return the sorted array using Radix sort.
 */

// use case
const a = [123, 78, 63, 19, 5];


const radixSort = function(array){
  if(array.length===0) return 'empty array';
  const greatestNumber = Math.max(...array);//spread operator
  //find number of digits in the greatest number
  const numberOfDigits = Math.floor(Math.log10(greatestNumber)) +1;
  //number of times counting sort needs to be done = digits in greatest number
  for(let i=0;i<numberOfDigits;i++){
      countingSort(array,i);
  }
  return array;
}

const countingSort = function (array,place){
  const output = new Array(array.length).fill(0);
  const temp = new Array(10).fill(0);
  const digitPlace = Math.pow(10,place);

  for(let num of array){
      let digit = Math.floor((num/digitPlace))%10;
      temp[digit]++;
  }

  for(let i=1;i<10;i++){
      temp[i]=temp[i]+temp[i-1];
  }

  for(let j = array.length-1;j>=0;j--){
      let currDigit = Math.floor(array[j]/digitPlace)%10;
      temp[currDigit]--;
      let insertPosition = temp[currDigit];
      output[insertPosition] = array[j];
  }
  //return output;
  array.splice(0, array.length, ...output);
}


console.log(radixSort(a));