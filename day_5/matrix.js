const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// function matrix(arr) {
//   const result = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
//   for(let i=0; i<arr.length; i++) {
//     for(let j=0; j<arr.length; j++) {
//       result[i][j] = arr[j][i];
//     }
//   }
  
//   return result;
// }

function matrix(arr) {
  const result = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  let j =0;
  
  while (j < arr.length) {
    for(let i = 0; i< arr.length; i++) {
      result[i][j] = arr[j][i];
    }
    j += 1;
  }
  return result;
}

console.log(matrix(a));