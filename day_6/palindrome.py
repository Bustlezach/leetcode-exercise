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


# Second method

def palindrome_b(str):
  new_str = []
  for i in str:
    new_str.append(i)

  i = 0
  j = len(str) - 1

  while (i < j):
    new_str[i], new_str[j] = new_str[j], new_str[i]
    i+=1
    j-=1

  new_str = ''.join(new_str)
  if (str == new_str):
    return True
  else:
    return False


# Double poiner method

def palindrome(str):
  str_len = len(str) - 1

  i = 0
  j = str_len
  flag = True

  while (i <= j):
    if str[i] == str[j]:
      flag
    else:
      flag = False
      return flag
    i += 1
    j -= 1
  return flag




print(' ')
print('brute force')
print('')

print(brute_palindrome(a))
print(brute_palindrome(b))
print(brute_palindrome(c))
print(brute_palindrome(d))
print(brute_palindrome(e))
print(brute_palindrome(f))

print(' ')
print('Second method')
print('')

print(palindrome_b(a))
print(palindrome_b(b))
print(palindrome_b(c))
print(palindrome_b(d))
print(palindrome_b(e))
print(palindrome_b(f))


print(' ')
print('Two pointer method')
print('')

print(palindrome(a))
print(palindrome(b))
print(palindrome(c))
print(palindrome(d))
print(palindrome(e))
print(palindrome(f))