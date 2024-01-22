
# You are given an integer array heaight of length n.
# There are n vertical lines drawn such that two end points of the ith 
# line are (i, 0) and (i, height[i]).
# Find two lines that tigether with the x-axis form a container, 
# such that the container  contains the most water (depth is constant
# across the containers). Return the area (that the 2 lines and the X axis make)
# of container which can store the max amount of water.
# Notice that youmay not slant the container.

def water_container_v(arr):
  arr_len = len(arr)
  max_area = 0

  for i in range(arr_len):
    for j in range(i + 1, arr_len):
      h = min(arr[i], arr[j])
      w = j - i
      area = h * w
      max_area = max(area, max_area)

  return max_area


def water_container(arr):
  arr_len = len(arr)
  max_area = 0

  left = 0
  right = arr_len - 1
  while left < right:
    height = min(arr[left], arr[right])
    width = right - left
    area = height * width
    max_area = max(area, max_area)
    if arr[left] > arr[right]:
      right -= 1
    left += 1
  return max_area


h = [9, 3, 2, 1, 10]
a = [4, 9, 15, 3, 9, 1]
b = [1, 2, 3, 5, 2, 6]
c = [1, 1, 1, 1, 1]
d = [3, 7, 5, 6, 8, 4]

print(water_container_v(h))
print(water_container_v(a))
print(water_container_v(b))
print(water_container_v(c))
print(water_container_v(d))

print('')
print('****** version 2 ********')
print('')

print(water_container(h))
print(water_container(a))
print(water_container(b))
print(water_container(c))
print(water_container(d))

    
