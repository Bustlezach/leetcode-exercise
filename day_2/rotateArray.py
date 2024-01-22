def reversal (arr, start, end):
    while(start < end):
      [arr[start], arr[end]] = [arr[end], arr[start]]
      start += 1
      end -= 1

    return arr


def rotate_array(arr, k=0):
  arr_length = len(arr)
  if arr_length == 0: return []

  if k == 0: return arr

  if k % arr_length == 0: return arr

  k %= arr_length
  
  reversal(arr, 0, (len(arr) - 1))
  reversal(arr, k, (len(arr) - 1))
  return arr



a = [0, 1, 2, 3, 4, 5, 7]
b = []
c = [6, 8, 3]


print(rotate_array(a, 2))
print(rotate_array(b, 2))
print(rotate_array(c))