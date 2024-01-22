"""
palindrome - You are given a string. 
Write a function to check whether the string is a parlindrome or not.
"""

# Test cases

a = 'kayak'
b = 'custom'
c = 'malayalam'
d = 'a'
e = 'aa'
f = 'aA'


# Brute fore method

def brute_palindrome(str):
  new_str = ''.join(reversed(str))
  if str == new_str:
    return True
  return False


# Double poiner method

def palindrome(str):
  str_len = len(str) - 1

  i = 0
  j = str_len
  flag = True

  while (i < j):
    if str[i] == str[j]:
      flag
    else:
      flag = False
      return flag
    i += 1
    j -= 1
  return flag



print(palindrome(a))
print(palindrome(b))
print(palindrome(c))
print(palindrome(d))
print(palindrome(e))
print(palindrome(f))

print(' ')
print('brute force')
print('')

print(brute_palindrome(a))
print(brute_palindrome(b))
print(brute_palindrome(c))
print(brute_palindrome(d))
print(brute_palindrome(e))
print(brute_palindrome(f))