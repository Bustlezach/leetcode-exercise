"""
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.
"""

class Solution(object):
    def mergeAlternately(self, word1, word2):
        """
        :type word1: str
        :type word2: str
        :rtype: str
        """
        n = min(len(word1), len(word2))
        container = []
        res = ""

        for i, j in zip(word1, word2):
            container.append(i)
            container.append(j)

        if len(word1) > n:
            for i in range(len(word1)):
                if i >= n:
                    container.append(word1[i])

        if len(word2) > n:
            for i in range(len(word2)):
                if i >= n:
                    container.append(word2[i])
            

        return res.join(container)