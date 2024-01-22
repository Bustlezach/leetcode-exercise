/**
 * Given an integer of array of unique elements, 
 * return all the possible subsets (the power set). 
 * The solution set must not contain duplicate subsets . 
 * Return the solution in any order.
 */

// function subSet(arr) {
//   const result = [];

//   for (element of arr) {
//     if (Array.isArray(element)) {
//       for (let i = 0; i < element.length; i++) {
//         if (! result[element[i]]) result.push(element[i]);
//       }
//     }
//   }
//   return result;
// }

// const a = [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]];
// const b = [[], [9]];
// console.log(subSet(a));
// console.log(subSet(b));


function powerSet(arr) {
  const output = [];

  const helper = (arr, i, subset) => {
    if (i === arr.length) {
      output.push([...subset]);
      return;
    }
    helper(arr, i + 1, subset);
    subset.push(arr[i]);
    helper(arr, i + 1, subset);
    subset.pop();
  }

  helper(arr, 0, []);
  return output;
}

const c = [1, 2, 3];
console.log(powerSet(c));