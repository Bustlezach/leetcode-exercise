"""
Isomorphic strings - Given two strings s and t, determine if they are isomorphic. 
Two strings s and t are isomophic if the characters in s can be replaced to get t. 
All occurences of a character must be replaced with another character while preserving 
the order of characters. No two characters may map to the same character, 
but a character may map to itself. s and t consist of any valid ascii character.
"""

def check_isomorphic(s, t):
  if len(s) != len(t): return False

  s_hash = {}
  t_hash = {}

  for i in range(len(s)):
    if s[i] not in s_hash:
      s_hash[s[i]] = t[i]
    if t[i] not in t_hash:
      t_hash[t[i]] = s[i]
    if s_hash[s[i]] != t[i] or t_hash[t[i]] != s[i]:
      return False
  return True

str1 = 'aa'
str2 = 'bb'

str3 = 'mapped'
str4 = 'set'

str5 = 'green'
str6 = 'abccd'

str7 = 'aaca'
str8 = 'bbdr'

a = check_isomorphic(str1, str2)
b = check_isomorphic(str3, str4)
c = check_isomorphic(str5, str6)
d = check_isomorphic(str7, str8)

print(a)
print(b)
print(c)
print(d)