/**
 * Permutations - Given an array of distinct integers, 
 * return all the possible permutations. You can return the answer in any order.
 */

function allPermutation(arr) {
  permutation = [];
  const arrLength = arr.length - 1;

  const sw = (i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  function helper(arr, i=0) {
    if (i === arrLength) {
      permutation.push(arr.slice());
      return;
    }
    for (let j=i; j <= arrLength; j++) {
      sw(i, j);
      helper(arr, i+1);
      sw(i, j);
    }
  }

  helper(arr);
  return permutation;
}


const a = [1, 2, 3];
console.log(allPermutation(a));
