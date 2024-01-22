/**
 * Non repeating character - 
 * You are given a string consist of only lower case and upper case English Alphabets 
 * and integers 0 to 9. Write a function that will take this string as input and return 
 * the index of the first character that is non-repeating. 
 */


// USING BRUTE FORCE

function nonRepeatingChar (str) {
  let flag;
  for (let i = 0; i < str.length; i++) {
    flag = false;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j] && i !== j ) {
        flag = true;
      } 
    }
    if ( flag === false) {
      return i;
    }
  }
  return null;
}


// USING HASH TABLE

function firstNonRepeating(str) {
  const hashTable = {};
  for (let i = 0; i< str.length; i++) {
    if(!hashTable[str[i]]) {
      hashTable[str[i]] = 1;
    } else {
      hashTable[str[i]] += 1;
    }
  }
  for (let i = 0; i< str.length; i++) {
    if (hashTable[str[i]] === 1) {
      return i;
    }
  }
  return null;
  // return hashTable;
}

function firstNonRepeatingChar (str) {
  const hashTable = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] in hashTable) {
      hashTable[str[i]] += 1;
    } else {
      hashTable[str[i]] = 1;
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (hashTable[str[i]] === 1) return i;
  }
  return null;
}



const a = 'a123412a';
// const a = 'abcdbad';
console.log(nonRepeatingChar(a));
console.log(firstNonRepeating(a));
console.log(firstNonRepeatingChar(a));
// console.log(a.count('b'));