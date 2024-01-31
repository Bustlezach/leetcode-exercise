/**
 * Longest Unique char Substring - Given a string s, 
 * find the length of the longest substring without repeating characters.
 */

// test case
const a = 'ppppp';
const b = 'abcbccd';
const c = 'pqbrstbuvwpvy';

// function maxLength(s) {
//   let sPointer = 0;
//   const seen = {};
//   let temp;
//   let maxStr = 0;

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] in seen) {
//       temp = s.slice(sPointer, i);
//       maxStr = Math.max(maxStr, temp.length);
//       sPointer = Math.max(sPointer, (seen[s[i]]) + 1);
//     } else {
//       seen[s[i]] = i;
//     }
//   }
//  return maxStr;
// }

function MaxLength(s) {
  const strLen = s.length;
  const seen = {};
  let maxStr = 0;
  let startP = 0;

  for (let i = 0; i < strLen; i++) {
    let char = s[i];
    if (char in seen) {
      maxStr = Math.max(maxStr, i - startP);
      startP = Math.max(startP, seen[char] + 1);
    }
    seen[char] = i;
  }
  return maxStr;
}

// console.log(maxLength(a));
// console.log(maxLength(b));
// console.log(maxLength(c));
console.log(MaxLength(a));
console.log(MaxLength(b));
console.log(MaxLength(c));