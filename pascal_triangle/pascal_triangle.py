"""
Pascal Triangle
"""

def pascal_triangle(n):
  list = []

  for i in range(n):
    row_list = []
    for j in range(i + 1):
      if j == 0 or j == i:
        row_list.append(1)
      else:
        col = list[i - 1][j - 1] + list[i - 1][j]
        row_list.append(col)
    list.append(row_list)

  for i in range(n):
    for j in range(n-i-1):
      print(format(' ', '<2'), end='')
    for j in range(i+1):
      print(format(list[i][j], '<3'), end=' ')
    print()



case1 = pascal_triangle(4)
case1 = pascal_triangle(6)
case1 = pascal_triangle(10)