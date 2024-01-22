const permutate = (arr) => {
  const arrLen = arr.length;
  const allPermutations = [];
  const swp = (i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };

  function helper (i=0) {
  if ( i === (arrLen - 1) ) {
      allPermutations.push(arr.slice());
      return;
    }
    for (let j = i; j < arrLen; j++) {
      swp(i, j);
      helper(i+1);
      swp(i, j); //Reset or back tracking
    }
  }
  helper();
  return allPermutations;
}

const a = [1, 2, 3];
const b = [1, 2, 3, 4];
const c = [1, 2, 3, 4, 5];
const d = [1, 2, 3, 4, 5, 6];
console.log(permutate(a));
console.log(permutate(b));
console.log(permutate(c));
console.log(permutate(d));