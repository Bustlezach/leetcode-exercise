def sort_square(arr):
  if arr == None:
    return []
  new_arr = []
  for i in arr:
    new_arr.append(i * i)

  new_arr.sort()
  return new_arr


a = [1, 3, 5]
b = [0, 5, 6];
c = [-4, -2, 0, 1, 3];

print(sort_square(a))
print(sort_square(b))
print(sort_square(c))