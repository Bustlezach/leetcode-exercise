"""
Longest Unique char Substring - Given a string s, find the length of the longest substring without repeating characters.
"""

def MaxLength(s):
  seen = {}
  str_len = len(s)
  max_len = 0
  start_p = 0

  for i in range(str_len):
    char = s[i]
    if char in seen:
      max_len = max(max_len, i - start_p)
      start_p = max(start_p, seen[char] +1)
    seen[char] = i

  return max_len


a = 'ppppp'
b = 'abcbccd'
c = 'pqbrstbuvwpvy'

print(MaxLength(a))
print(MaxLength(b))
print(MaxLength(c))