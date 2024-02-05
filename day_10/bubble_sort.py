"""
Bubble Sort - You are given an array of integers.
Write a function that will take this array as input and return the sorted array 
using Bubble sort.
"""

a = [1, 2, 4, 3]
b = [1, 2, 3]
c = [1, 9, 7, 89, 0, 2, 3]

def bubble_sort(arr):
  arr_len = len(arr) - 1
  k = len(arr) - 1

  def sw(arr, l, m):
    arr[l], arr[m] = arr[m], arr[l]
    return arr

  while (k >= 0):
    for i in range(arr_len):
      if(arr[i] > arr[i + 1]):
        j = i+1
        sw(arr, i, j)
    k-=1

  return arr


def buble_sort(arr):
  my_sorted = False
  arr_len = len(arr) - 1
  counter = 0

  def sw(arr, l, m):
    arr[l], arr[m] = arr[m], arr[l]
    return arr
  
  while (my_sorted == False):
    my_sorted = True
    for i in range(arr_len - counter):
      if(arr[i] > arr[i+1]):
        sw(arr, i, i+1)
        my_sorted = False
    counter+=1

  return arr


print(bubble_sort(a))
print(bubble_sort(b))
print(bubble_sort(c))
print(buble_sort(a))
print(bubble_sort(b))
print(buble_sort(c))