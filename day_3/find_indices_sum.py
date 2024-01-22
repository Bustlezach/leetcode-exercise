"""
Two Sum - You are given an array of integers and another integer targetValue. 
Write a function that will take these inputs and return the indices of the two 
integers in the array that add up the targetValue.
"""

# Brute Force Solution
def find_indices_sum(arr, targetValue):
  arr_len = len(arr)
  if arr_len == 0: return []

  for i in range(arr_len - 1):
    for j in range(i + 1, arr_len):
      if arr[i] + arr[j] == targetValue: return [i, j]
  return []
  





a = [-5, 2, 1, 16, 7]
b = [2, 0, 6, 16, 4, 9]
c =  [2, 7, 3 , -1, 4]
d =  [25]
e =  []

print(find_indices_sum(a, 11))
print(find_indices_sum(b, 9))
print(find_indices_sum(c, 2))
print(find_indices_sum(c, 100))
print(find_indices_sum(d, 25))
print(find_indices_sum(e, 25))


# Hashtable Solution
def two_sum(arr, target_value):
  arr_len = len(arr)
  if arr_len == 0: return []

  hashtable = {}
  needed_value = 0

  for i in range(arr_len):
    needed_value = target_value - arr[i]

    if needed_value in hashtable:
      return [i, hashtable[needed_value]]
    hashtable[arr[i]] = i
  return []

print ('')
print ('***** Version 2 ************')
print('')

print(two_sum(a, 11))
print(two_sum(b, 9))
print(two_sum(c, 2))
print(two_sum(c, 100))
print(two_sum(d, 25))
print(two_sum(e, 25))