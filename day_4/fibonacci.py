"""
Fibonacci - In the Fibonacci sequence, each subsequent term is obtained by
adding the previous 2 terms. This is true for all numbers except the first 
2 numbers of the Fibonacci series as they do not have 2 preceeding numbers. 
The first 2 terms in Fibonacci series are 0 and 1. F(n) = F(n-1) + F(n-2) for n>1.
 Write a function that finds F(n) given n where n is an integer greater than equal
 to 0. For the first term n = 0.
"""


# Version 1: Iteration - 

def fibonacciSeries(n):
  if n <= 0: return n

  seq = [0, 1]
  i = 1
  while i < n:
    nextTerm = seq[i - 1] + seq[i]
    seq.append(nextTerm)
    i+=1
  return seq[-1]

# Best version 

def fibonacciB(n):
  if n <= 1: return n

  prev = 0
  cur = 1
  i = 1
  while i < n:
    next = prev + cur
    prev = cur
    cur = next
    i+=1
  return next





# version 2
def fiboSequence(n):
  if n <= 1: return n
  return fiboSequence(n -1) + fiboSequence(n -2)


# version 3
def fibonacci(n):
  hashtable = {0:0, 1:1,}
  if n in hashtable: return hashtable[n]
  hashtable[n] = fibonacci(n-1) + fibonacci(n-2)
  return hashtable[n]



a = fiboSequence(9)
b = fibonacciSeries(9)
c = fibonacci(9)
d = fibonacciB(9)
print(a)
print(b)
print(c)
print(d)