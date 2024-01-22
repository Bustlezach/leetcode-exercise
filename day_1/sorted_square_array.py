def sorted_square(arr):
  if len(arr) == None:
    return []
  
  arr_length = len(arr)
  new_arr = [0] * arr_length

  left_pointer = 0
  right_pointer = arr_length -1

  for i in reversed(range(arr_length)):
    left_squared = arr[left_pointer]**2
    right_squared = arr[right_pointer]**2
    if left_squared > right_pointer:
      new_arr[i] = left_squared
      left_pointer += 1
    else:
      new_arr[i] = right_squared
      right_pointer -= 1

  return new_arr


a = [1, 3, 5]
b = [0, 5, 6]
c = [-4, -2, 0, 1, 3]
d = [-8, -4, -2, 0, 1, 3]
e = []



print(sorted_square(a))
print(sorted_square(b))
print(sorted_square(c))
print(sorted_square(d))
print(sorted_square(e))