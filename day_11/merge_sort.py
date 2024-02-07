"""
Merge Sort-You are given an array of integers. 
Write a function that will take this array as input and return the sorted array 
using Merge sort.
"""

def merge_sort(arr):
  if(len(arr) > 1):
    left = 0
    right = len(arr)
    mid = (left + right) // 2

    left_arr = arr[left: mid]
    right_arr = arr[mid: right]

    merge_sort(left_arr)
    merge_sort(right_arr)

    i = 0
    j = 0
    k = 0

    while (i < len(left_arr) and j < len(right_arr)):
      if (left_arr[i] <= right_arr[j]):
        arr[k] = left_arr[i]
        i += 1
      else:
        arr[k] = right_arr[j]
        j += 1
      k += 1

    while (i < len(left_arr)):
      arr[k] = left_arr[i]
      i += 1
      k += 1

    while (j < len(right_arr)):
      arr[k] = right_arr[j]
      j += 1
      k += 1

  return arr

a = [4, 56, 34, 10, 77, 51, 93, 30, 5, 52]
b = [72, 34, 88, 14, 32, 12, 34, 77, 56, 83]
print(merge_sort(a))
print(merge_sort(b))