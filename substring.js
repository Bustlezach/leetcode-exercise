// produce all possible sub string of  a given string.
// The time complexity of the solution is O(n^2) and the 
// space complexity is O(n).

function allSubstring(s) {
  const subString = [];
  const strLen = s.length;

  for (let i = 0; i <= strLen; i++) {
    for (let j = i + 1; j <= strLen; j++) {
      subString.push(s.slice(i, j));
    }
  }
  return subString;
}

const a = 'Association';

console.log(allSubstring(a));