def rotateArray(arr, k=0):
  arr_length = len(arr)
  if arr_length == 0:
    return []
  if k == 0:
    return arr
  if k % arr_length == 0:
    return arr
  
  k %= arr_length

  while(k > 0):
    val = arr[arr_length - 1]
    arr.pop()
    arr.insert(0, val)
    k -= 1

  return arr


a = [0, 1, 2, 3, 4, 5, 7]
b = []
c = [6, 8, 3]


print(rotateArray(a, 2))
print(rotateArray(b, 2))
print(rotateArray(c))