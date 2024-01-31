/**
 * Group Anagrams - Given an array of strings consisting of lower case English letters, 
 * group the anagrams together. You can return the answer in any order. 
 * An Anagram is a word or phrase formed by rearranging the letters of a different 
 * word or phrase, using all the original letters exactly once.
 */

function anagrams(arr) {
  const result = [];
  const same = [];
  const hashTable = {};

  for (const i in arr) {
    let word = arr[i];
    let sorted = word.split('').sort().join('');
    same.push(sorted);
  }

  for (let i = 0; i < arr.length; i++) {
    let phrase = same[i];

    if (phrase in hashTable) {
      hashTable[phrase].push(arr[i]);
    } else {
      hashTable[phrase] = [arr[i]];
    }
  }

  for(i in hashTable) {
    result.push(hashTable[i]);
  }

  return result;
}

const a = ['arc', 'car', 'cat', 'act', 'atc', 'abc'];
console.log(anagrams(a));
console.log(anagrams([]));