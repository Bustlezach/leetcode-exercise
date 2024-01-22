function squareSort(arr) {
  const lng = arr.length;
  if (lng === null) {
    return [];
  }
  const newArr = [];
  for (let i = 0; i < lng; i++) {
    newArr[i] = Math.pow(arr[i], 2);
  }

  newArr.sort((a, b) => a - b);
  return newArr;
}

const a = [1, 3, 5];
const b = [0, 5, 6];
const c = [-4, -2, 0, 1, 3];

console.log(squareSort(a));
console.log(squareSort(b));
console.log(squareSort(c));