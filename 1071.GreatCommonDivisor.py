"""
For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""
 
"""

class Solution(object):
    def gcdOfStrings(self, str1, str2):
        """
        :type str1: str
        :type str2: str
        :rtype: str
        """
        
        numerator = ''
        divisor = ''

        if len(str1) > len(str2):
            numerator = str1
            divisor = str2
        else:
            numerator = str2
            divisor = str1

        numerator_sub = []
        for i in divisor:
            if i in numerator:
                numerator_sub.append(i)

        sub_set = sorted(list(set(numerator_sub)))

        sub = ''.join(sub_set)
        if len(sub) < 2:
            return ''
        else:
            return sub