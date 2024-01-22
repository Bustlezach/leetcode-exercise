/**
 * palindrome - You are given a string. 
 * Write a function to check whether the string is a parlindrome or not.
 */

// Test cases

const a = 'kayak';
const b = 'custom';
const c = 'malayalam';
const d = 'a';
const e = 'aa';
const f = 'aA';

// brute method

function brutePalindrome (str) {
  const newStr = str.split('').reverse().join('');
  if (str === newStr) return true;
  return false;
}


// Using double pointer technique

function palindrome(str) {
  if (str.length === 0) return null;
  let flag;
  let i = 0;
  
  for (let j = str.length - 1; j >= 0; j--) {
    if (i < str.length && str[i] === str[j]) {
      flag = true;
      i++;
    } else {
      flag = false;
      return flag;
    }
  }
  return flag;
}

console.log(palindrome(a));
console.log(palindrome(b));
console.log(palindrome(c));
console.log(palindrome(d));
console.log(palindrome(e));
console.log(palindrome(f));

console.log(' ');
console.log('brute force');
console.log('');

console.log(brutePalindrome(a));
console.log(brutePalindrome(b));
console.log(brutePalindrome(c));
console.log(brutePalindrome(d));
console.log(brutePalindrome(e));
console.log(brutePalindrome(f));