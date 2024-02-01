"""
Find First and Last Position of Element in Sorted Array-
You are given an array of integers sorted in non-decreasing order, 
find the starting and ending position of a given target value. 
If target is not found in the array, return [-1, -1]. 
You must write an algorithm with O(log n) runtime complexity.
"""

def leftextreme(arr, l, r, target, result):
  if (l > r): return
  m = (l + r) // 2
  if (arr[m] == target):
    if (m == 0 or arr[m - 1] != target):
      result[0] = m
      return result
    else:
      r = m -1
      leftextreme(arr, l, r, target, result)
  elif (target < arr[m]):
    r = m - 1
    leftextreme(arr, l, r, target, result)
  else:
    l = m + 1
    leftextreme(arr, l, r, target, result)


def rightextreme(arr, l, r, target, result):
  if (l > r): return
  m = (l + r) // 2
  if (arr[m] == target):
    if(m == (len(arr)-1) or arr[m + 1] != target):
      result[1] = m
      return result
    else:
      l = m + 1
      rightextreme(arr, l, r, target, result)
  elif (target > arr[m]):
    l = m + 1
    rightextreme(arr, l, r, target, result)
  else:
    r = m - 1
    rightextreme(arr, l, r, target, result)


def left_right_position(arr, target):
  if (type(arr) != list): return 'List is required.'
  if (len(arr) == 0): return 'List is empty'
  if (target == None): return 'No target'

  left = 0
  right = len(arr) - 1
  result = [-1, -1]

  leftextreme(arr, left, right, target, result)
  rightextreme(arr, left, right, target, result)

  return result


# Test cases:
a = [0, 1, 2, 3, 3, 3, 4, 6]
print(left_right_position(a, 3))
print(left_right_position([3, 5, 7], 3))
print(left_right_position([3, 5, 7], 7))