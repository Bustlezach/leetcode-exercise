"""
delete duplicates - 
You are given the head of a Sorted Singly Linked list. 
Write a function that will take the given head as input, 
delete all nodes that have a value that is already the value of another node so that 
each value appears 1 time only and return the linked list, 
which is still to be a sorted linked list.
"""

class Node:
  def __init__(self, value) -> None:
    self.value = value
    self.next = None

class singly_list:
  def __init__(self) -> None:
    self.head = None
    self.tail = None
    self.size = 0

  def remove_dups(self):
    cur = self.head
    while cur:
      next_dist = cur.next
      while next_dist and cur.value == next_dist.value:
        next_dist = next_dist.next
      cur.next = next_dist
      cur = next_dist

    return self.head