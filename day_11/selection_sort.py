"""
Selection Sort-You are given an array of integers. 
Write a function that will take this array as input and return the sorted array 
using Selection sort.
"""

def selection_sort(arr):
  if (len(arr) <= 1): return arr

  for i in range(len(arr)):
    smallest = i
    for j in range(i+1, len(arr)):
      if (arr[smallest] > arr[j]):
        smallest = j
    [arr[i], arr[smallest]] = [arr[smallest], arr[i]]
  return arr



a = [4, 56, 34, 10, 77, 51, 93, 30, 5, 52]
b = [72, 34, 88, 14, 32, 12, 34, 77, 56, 83]
print(selection_sort(a))
print(selection_sort(b))