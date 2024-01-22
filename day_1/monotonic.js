function monotonic(array) {
  const arrLength = array.length;
  if(arrLength <= 1){
    return true;
  }

  if (array[0] === array[-1]) {
    for (let i = 0; i < (arrLength - 1); i++) {
      if (array[i] !== array[i + 1]) return false;
    }
   } 
 else if (array[0] > array[-1]) {
  for (let i = 0; i < (arrLength - 1); i++) {
    if (array[i] < array[i + 1]) return false;
  }
 }
 else {
  for (let i = 0; i < (arrLength - 1); i++) {
    if (array[i] > array[i + 1]) return false;
  }
 }
 return true;
}

const a = [];
const b = [2];
const c = [3, 3, 3, 3];
const d = [4, 5, 6, 7];
const e = [4, 5, 6, 6, 7];
const f = [15, 14, 13, 6, 8];



console.log(monotonic(a));
console.log(monotonic(b));
console.log(monotonic(c));
console.log(monotonic(d));
console.log(monotonic(e));
console.log(monotonic(f));