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

function AllSubstring(s) {
  const substring = [];
  strLen = s.length;

  function recurse(i) {
    if (i !== strLen) {
      for (let j = i + 1; j <= strLen; j++) {
        substring.push(s.slice(i, j));
      }
      recurse(i+1);
    }
  }
  
  recurse(0);
  return substring;
}

function allSubString(s) {
  const strLen = s.length;
  const substring = [];

  function recurse(l, r) {
    if (r === strLen) {
      return;
    }
    if (l > r) {
      recurse(0, r + 1);
    } else {
      substring.push(s.slice(l, r + 1));
      recurse(l + 1, r);
    }
  }
  
  recurse(0, 0);
  return substring;
}

const a = 'abc';

console.log(allSubstring(a));
console.log(allSubString(a));
console.log(AllSubstring(a));