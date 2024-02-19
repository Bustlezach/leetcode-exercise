"""
Quick Sort - You are given an array of integers.
Write a function that will take this array as input and return the sorted array using
 Quick sort.
"""

def swap(array, a, b):
    array[a], array[b] = array[b], array[a]

def partition(array, start, end):
    mid = (start + end) // 2
    swap(array, start, mid)

    pivot = array[start]
    i = start + 1
    j = end
    while i <= j:
        while i <= j and array[i] <= pivot:
            i += 1
        while i <= j and array[j] > pivot:
            j -= 1
        if i < j:
            swap(array, i, j)
    swap(array, start, j)
    return j

def quick_sort(array, start, end):
    if start < end:
        pIndex = partition(array, start, end)
        quick_sort(array, start, pIndex - 1)
        quick_sort(array, pIndex + 1, end)
    return array




arr = [3, 1, 0, 7, 6, 2]
print(quick_sort(arr, 0, len(arr)-1))