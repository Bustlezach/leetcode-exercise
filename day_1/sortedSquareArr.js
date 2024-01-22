function sortSquareArray(arr) {
  const len = arr.length;
  if(len === null) {
    return []
  }

const newArr = [];
let leftPointer = 0;
let rightPointer = len - 1;

for(let i = len - 1; i >= 0; i--) {
  let leftHandSquare = Math.pow(arr[leftPointer], 2);
  let rightHandSquare = Math.pow(arr[rightPointer], 2);
  if(rightHandSquare > leftHandSquare) {
    newArr[i] = rightHandSquare;
    rightPointer--;
  } else {
    newArr[i] = leftHandSquare;
    leftPointer++;
  }
}
  return newArr;
}

const a = [1, 3, 5];
const b = [0, 5, 6];
const c = [-4, -2, 0, 1, 3];
const d = [-8, -4, -2, 0, 1, 3];
const e = []

console.log(sortSquareArray(a));
console.log(sortSquareArray(b));
console.log(sortSquareArray(c));
console.log(sortSquareArray(d));
console.log(sortSquareArray(e));