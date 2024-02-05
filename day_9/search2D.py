"""
Search in 2D Array-Write an efficient algorithm that searches for a value target in an m x n integer matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.

The first integer of each row is greater than the last integer of the previous row.

If the value is there in the matrix return true, else false.
"""


def binary_search(arr, target):
  l = 0
  r = len(arr) - 1

  while(l < r):
    m = (l + r) // 2
    if (target == arr[m]): return True
    elif (target < arr[m]): r = m - 1
    else: l = m + 1
  return False



def recurse(arr, t, b, target):
  if (t > b): return False

  m = (t + b) // 2
  if(target >= arr[m][0] and target <= arr[m][len(arr[m]) - 1]):
    return binary_search(arr[m], target)
  elif (target < arr[m][0]):
    b = m - 1
    return recurse(arr, t, b, target)
  else:
    t = m + 1
    return recurse(arr, t, b, target)
  

def search_matrix(arr, target):
  top = 0
  bottom = len(arr) - 1

  return recurse(arr, top, bottom, target)


a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; # target = 5
b = [
  [1, 5, 7, 11],
  [12, 13, 17, 20], 
  [25, 26, 30, 31], 
  [32, 35, 39, 43], 
  [45, 60, 62, 65]
]; # target 62

print(search_matrix(a, 5))
print(search_matrix(b, 62))
print(search_matrix(b, 19))