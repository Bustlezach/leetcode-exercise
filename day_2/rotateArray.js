function rotate(arr, k) {
  let arrLength = arr.length;
  if (arrLength === null) return [];

  if (k === 0) return arr;
  if (k % arrLength === 0) return arr;

  k %= arrLength;

  while(k > 0) {
    let value = arr[arrLength - 1];
    arr.pop();
    arr.unshift(value);
    k--;
  }

  return arr
}

const a = [0, 1, 2, 3, 4, 5, 7];
const b = [];
const c = [6, 8, 3];


console.log(rotate(a, 2));
console.log(rotate(b, 2));
console.log(rotate(c));