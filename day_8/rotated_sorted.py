def search_rotate_sorted_array(arr, target):
  l = 0
  r = len(arr) - 1
  
  while (l <= r):
    m = (l + r) // 2
    if target == arr[m]: return m
    if arr[l] <= arr[m]:
      if target < arr[m] and target >= arr[l]:
        r = m - 1
      else:
        l = m + 1
    else:
      if target <= arr[r] and target > arr[m]:
        l = m + 1
      else:
        r = m - 1
  
  return -1

def search_rotate_sorted_array_iter(arr, target):
  l = 0
  r = len(arr) - 1

  def recurse(arr, l, r):
    if (l > r): return -1
    m = (l +r) // 2
    if (arr[m] == target):
      return m
    elif (arr[l] <= arr[m]):
      # left is sorted
      if (target >= arr[l] and target < arr[m]):
        r = m - 1
        return recurse(arr, l, r)
      else:
        l = m + 1
        return recurse(arr, l, r)
    else:
      # right is sorted
      if(target <= arr[r] and target > arr[m]):
        l = m + 1
        return recurse(arr, l, r)
      else:
        r = m - 1
        return recurse(arr, l, r)
  return recurse(arr, l, r)


print(search_rotate_sorted_array([1, 2, 3, 4, 5, 6], 4))
print(search_rotate_sorted_array([5, 6, 7, 0, 1, 2], 6))
print(search_rotate_sorted_array_iter([1, 2, 3, 4, 5, 6], 4))
print(search_rotate_sorted_array_iter([5, 6, 7, 0, 1, 2], 16))