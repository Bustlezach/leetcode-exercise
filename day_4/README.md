# RECURSION

## QUESTION1: 
Fibonacci - In the Fibonacci sequence, each subsequent term is obtained by
adding the previous 2 terms. This is true for all numbers except the first 2 numbers of the Fibonacci series as they do not have 2 preceeding numbers. The first 2 terms in Fibonacci series are 0 and 1. F(n) = F(n-1) + F(n-2) for n>1. Write a function that finds F(n) given n where n is an integer greater than equal to 0. For the first term n = 0.

## QUESTION 2: 
Power Sum - Let's define a peculiar type of array in which each element is either an integer or another peculiar array. Assume that a peculiar array is neve empty. Write a function that will take a peculiar array as its input and find the sum of its elements. If an array is an element in the peculiar array you have to convert it to its equivalent value so that you can sum it with the other elements. Equivalent value of an array is the sum of its elements raised to the number which represents how far nested it is. For e.g. [2, 3, [4, 1, 2]] = 2+3+(4+1+2)^2, [1, 2, [7, [3, 4], 2]] = 1+2+(7+(3+4)^3+2)^2

