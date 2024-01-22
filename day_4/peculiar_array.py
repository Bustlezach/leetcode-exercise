"""
Power Sum - Let's define a peculiar type of array in which each element is either an integer 
or another peculiar array. Assume that a peculiar array is neve empty. Write a function that 
will take a peculiar array as its input and find the sum of its elements. If an array is an 
element in the peculiar array you have to convert it to its equivalent value so that you can 
sum it with the other elements. Equivalent value of an array is the sum of its elements raised 
to the number which represents how far nested it is. 
For e.g. [2, 3, [4, 1, 2]] = 2+3+(4+1+2)^2, [1, 2, [7, [3, 4], 2]] = 1+2+(7+(3+4)^3+2)^2
"""


def power_sum(array,power=1):
    #write code here
    sum = 0
    addition = 0
    for i in range(len(array)):
        if isinstance(array[i], int):
            addition += array[i]
        else:
            addition += power_sum(array[i], power+1)
    sum = pow(addition, power)
    return sum


def power_summer(arr, power=1):
    added = 0
    for i in arr:
        added += i if type(i) is int else power_summer(i, power+1)
    sum = pow(added, power)
    return sum
    


print(power_sum([2, 3, [4, 1, 2]]))
print(power_sum([1, 2, [7, [3, 4], 2]]))


print(power_summer([2, 3, [4, 1, 2]]))
print(power_summer([1, 2, [7, [3, 4], 2]]))