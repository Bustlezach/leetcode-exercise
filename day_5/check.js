const fac = (n) => {
  if (n === 1) return 1;
  return n * fac(n - 1);
}

console.log(fac(5));

const display = (n) => {
  if (n === 0) return;
  console.log(`${n} before`);
  display(n - 1);
  console.log(`${n} after`);
}

console.log(display(5));

const permutate = (arr) => {
  const permutation = [];
  const arrLen = arr.length - 1;
  const swp = (i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  } ;

  const helper = (i=0) => {
    if (i === arrLen) {
      permutation.push(arr.slice());
      return;
    }
    for (let j = i; j <= arrLen; j++) {
      swp(i, j);
      helper(i + 1);
      swp(i, j);
    }
  };
  helper();
  return permutation;
};

console.log('*************')

const a = ['x', 'y', 'z'];
console.log(permutate(a));

const get = (n) => {
  if (n !== 1) return;
  get(n - 1);
  console.log('boy');
  get(n - 3);
  return n;
}

console.log(get(6));