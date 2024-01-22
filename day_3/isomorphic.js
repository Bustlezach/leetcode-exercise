/**
 * Isomorphic strings - Given two strings s and t, 
 * determine if they are isomorphic. 
 * Two strings s and t are isomophic if the characters in s can be replaced to get t. 
 * All occurences of a character must be replaced with another character 
 * while preserving the order of characters.
 *  No two characters may map to the same character, but a character may map to itself. s and t consist of any valid ascii character.
 */

function checkIsomorphic(s, t) {
  if(s.length !== t.length) return false;
  const sHash = {};
  const tHash = {};

  for (let i = 0; i < s.length; i++) {
    if (!sHash[s[i]]) sHash[s[i]] = t[i];
    if (!tHash[t[i]]) tHash[t[i]] = s[i];
    if (sHash[s[i]] !== t[i] || tHash[t[i]] !== s[i]) return false;
  }
  return true;
}

const str1 = 'curry';
const str2 = 'larry';

const str3 = 'mapped';
const str4 = 'set';

const str5 = 'green';
const str6 = 'abccd';

const str7 = 'aaca';
const str8 = 'bbdr';

const a = checkIsomorphic(str1, str2);
const b = checkIsomorphic(str3, str4);
const c = checkIsomorphic(str5, str6);
const d = checkIsomorphic(str7, str8);
console.log(a);
console.log(b);
console.log(c);
console.log(d);