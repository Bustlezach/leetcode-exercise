"""
Group Anagrams - 
Given an array of strings consisting of lower case English letters, 
group the anagrams together. You can return the answer in any order. 
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
using all the original letters exactly once.
"""


def group_anagrams(arr):
  sorted_arr = []
  ht = {}

  for i in range(len(arr)):
    st = sorted(arr[i])
    st = ''.join(st)
    sorted_arr.append(st)

  for i in range(len(arr)):
    if sorted_arr[i] in ht:
      ht[sorted_arr[i]].append(arr[i])
    else:
      ht[sorted_arr[i]] = [arr[i]]

  return list(ht.values())

print(group_anagrams(['arc', 'car', 'cat', 'act', 'atc', 'abc']))
print(group_anagrams([]))