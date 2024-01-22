def monotonic(arr):
  arr_length = len(arr)
  if arr_length <= 1:
    return True
  
  first = arr[0]
  last = arr[-1]

  if first == last:
    for i in range(arr_length - 1):
      if arr[i] != arr[i + 1]:
        return False
  elif first < last:
    for i in range(arr_length - 1):
      if arr[i] > arr[i + 1]:
        return False
  else:
    for i in range(arr_length - 1):
      if arr[i] < arr[i + 1]:
        return False
  return True


a = []
b = [2]
c = [3, 3, 3, 3]
d = [4, 5, 6, 7]
e = [4, 5, 6, 6, 7]
f = [15, 14, 13, 6, 8]



print(monotonic(a))
print(monotonic(b))
print(monotonic(c))
print(monotonic(d))
print(monotonic(e))
print(monotonic(f))