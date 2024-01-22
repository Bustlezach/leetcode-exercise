/**
 * Power Sum - Let's define a peculiar type of array in which each element is either 
  an integer or another peculiar array. Assume that a peculiar array is never empty. 
  Write a function that will take a peculiar array as its input and find the sum of 
  its elements. 
  If an array is an element in the peculiar array you have to convert it to its 
  equivalent value so that you can sum it with the other elements. 
  Equivalent value of an array is the sum of its elements raised to the number which 
  represents how far nested it is. 
  For e.g. [2, 3, [4, 1, 2]] = 2+3+(4+1+2)^2, 
  [1, 2, [7, [3, 4], 2]] = 1+2+(7+(3+4)^3+2)^2
 */

function powerSum(arr, power=1) {
  let sum = 0;
  let addition = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
      addition += arr[i]; 
    } else {
      addition += powerSum(arr[i], power+1);
    }
  }
  sum = Math.pow(addition, power);
  return sum;
}


function powerSummer(arr, power=1) {
  let sum;
  let added = 0;

  for( element of arr) {
      added += typeof element === 'number' ?
          element : powerSum(element, power + 1);
  }
  sum = Math.pow(added, power);
  return sum;
}




console.log(powerSum([2, 3, [4, 1, 2]]));
console.log(powerSum([1, 2, [7, [3, 4], 2]]));

console.log(powerSummer([2, 3, [4, 1, 2]]));
console.log(powerSummer([1, 2, [7, [3, 4], 2]]));