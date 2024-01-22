"""
Permutations - Given an array of distinct integers, 
return all the possible permutations. You can return the answer in any order.
"""

def all_permutation(arr):
  arr_len = len(arr) - 1
  permutation = []

  def sw(i, j):
    arr[i], arr[j] = arr[j], arr[i]

  def helper(arr, i=0):
    if i == arr_len:
      permutation.append(arr.copy())
      return
    for j in range(i, len(arr)):
      sw(i, j)
      helper(arr, i+1)
      sw(i, j)

  helper(arr, 0)
  return permutation

print(all_permutation([1, 2, 3]))