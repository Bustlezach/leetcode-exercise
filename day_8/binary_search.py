"""
Binary Search - Given an array of integers which is sorted in ascending order, and a target integer, 
write a function to search for whether the target is there in the given array. 
If it is there then return its index. Otherwise, return -1. You must write an algorithm with O(log n) runtime complexity.
"""


def binary_search_iter(arr, target):
  l = 0
  r = len(arr) - 1

  while l <= r:
    m = (l + r) // 2
    if target == arr[m]:
      return m
    
    if target > m:
      l = m + 1
    else:
      r = m - 1

    l+=1
  return -1




def binary_search_recursive(arr, target):
  l = 0
  r = len(arr) - 1

  def recurse(arr, target, l, r):
    if l > r: return -1

    m = (l + r) // 2
    if target == arr[m]:
      return m
    elif target > arr[m]:
      l = m + 1
      return recurse(arr, target, l, r)
    else:
      r = m - 1
      return recurse(arr, target, l, r)
    
  return recurse(arr, target, l, r)



a = [0, 2, 3, 5, 7, 8, 13]
print(binary_search_iter(a, 8))
print(binary_search_recursive(a, 8))