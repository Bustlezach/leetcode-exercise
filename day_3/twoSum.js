/**
 * Two Sum - You are given an array of integers and another 
 * integer targetValue. 
 * Write a function that will take these inputs and 
 * return the indices of the two integers in the array 
 * that add up the targetValue.
 */

const a = [-5, 2, 1, 16, 7];
const b = [2, 0, 6, 16, 4, 9];
const c =  [2, 7, 3 , -1, 4];
const d =  [25];
const e =  [];


// Brute Force Solution
function twoSum (arr, targetValue) {
  const arrLength = arr.length;
  if (arrLength === null) return [];

  for (let i = 0; i < arrLength - 1; i++) {
    for (let j = i + 1; j < arrLength; j++) {
      if (arr[i] + arr[j] === targetValue) return [i, j];
    }
  }
  return [];
}


// Hashtable Solution
function twoSumV(arr, targetValue) {
  const arrLength = arr.length;
  const hash = {};
  let neededValue;
  for (let i = 0; i < arrLength; i++) {
    neededValue = targetValue - arr[i];
    if (neededValue in hash) return [i, hash[neededValue]];
    hash[arr[i]] = i; 
  }
}

console.log(twoSum(a, 11));
console.log(twoSum(b, 9));
console.log(twoSum(c, 2));
console.log(twoSum(c, 100));
console.log(twoSum(d, 25));
console.log(twoSum(e, 25));
console.log('');
console.log('*************Version two solution *********');
console.log('');
console.log(twoSumV(a, 11));
console.log(twoSumV(b, 9));