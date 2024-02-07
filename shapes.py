""" Square """ 
print('\n ############### ############# \n')
def square(n):
  for i in range(n):
    x = '* '
    x *= n
    print(x)

square(5)

print('\n ############### ############# \n')
""" Rectangle m*n """

# m is length
# n is breath

def rectangle(m, n):
  for i in range(m):
    x = '* '
    x *= n
    print(x)

rectangle(5, 3)

print('\n ############### ############# \n')

def left_pyramid(n):
  for i in range(n+1):
    x = '* '
    x *= i
    print(x)

left_pyramid(6)

print('\n ############### ############# \n')

def right_pyramid(n):
  for i in range(1, n+1):
    x = '* '
    x *= i
    space = '  ' * (n - i)
    print(space + x)

right_pyramid(6)

print('\n ############### ############# \n')

def pyramid(n):
  for i in range(1, n+1):
    x = '* '
    x *= i
    space = ' ' * (n - i)
    print(space + x)

pyramid(6)

print('\n ############### ############# \n')

def diamond(n):
  for i in range(1, n+1):
    x = '* '
    x *= i
    space = ' ' * (n - i)
    print(space + x)
  for i in reversed(range(n)):
    x = '* '
    x *= i
    space = ' ' * (n - i)
    print(space + x)


diamond(5)

print('\n ############### ############# \n')

def pattern(n):
  for i in reversed(range(1, n+1)):
    x = '* '
    x *= i
    space = ' ' * (n - i)
    print(space + x)
  for i in range(2, n+1):
    x = '* '
    x *= i
    space = ' ' * (n - i)
    print(space + x)

pattern(5)