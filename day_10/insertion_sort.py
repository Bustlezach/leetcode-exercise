"""
Insertion Sort - You are given an array of integers.
Write a function that will take this array as input and return the sorted array 
using Insertion sort.
"""

def insertion_sort(arr):
  arr_len = len(arr)

  for i in range(arr_len):
    cur = arr[i]
    j = i - 1

    while(j >= 0 and arr[j] > cur):
      arr[j+1] = arr[j]
      j-=1

    arr[j+1] = cur

  return arr

a = [1, 2, 4, 3]
b = [1, 2, 3]
c = [1, 9, 7, 89, 0, 2, 3]

print(insertion_sort(a))
print(insertion_sort(b))
print(insertion_sort(c))