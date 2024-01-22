"""
  Non repeating character - 
  You are given a string consist of only lower case and upper case English 
  Alphabets and integers 0 to 9. Write a function that will take this string 
  as input and return the index of the first character that is non-repeating.
"""

# USING BRUTE FORCE

def find_first_non_repeating_char(str):
  for i in range(len(str)):
    flag = False
    for j in range(len(str)):
      if (str[i] == str[j] and i != j):
        flag = True
    
    if flag == False:
      return i
  
  return None


# UPTIMA METHOD

def firstNonRepeating(str):
  hashtable = {}

  for i in str:
    if i not in hashtable:
      hashtable[i] = 1
    else:
      hashtable[i] += 1

  for i in range(len(str)):
    if hashtable[str[i]] == 1:
      return i
  return None
  # return hashtable
  

a = 'a123412a'
print(find_first_non_repeating_char(a))
print(firstNonRepeating(a))