"""
Construct Singly Linked List - Design a Singly linked list class that has a head and tail. Every node is to have two attributes: value:  the value of the current node, and next: a pointer to the next node. The linked list is to be 0-indexed. The class should support the following:

"""

class Node:
  def __init__(self, value) -> None:
    self.value = value
    self.next = None


class Singly_linked_list:
  def __init__(self) -> None:
    self.head = None
    self.tail = None
    self.size = 0


  def get(self, index):
    if index < 0 or index >= self.size: return -1
    counter = 0
    current = self.head
    while counter != index:
      current = current.next
      counter += 1
    return current
  
  def add_at_head(self, value):
    node = Node(value)
    if self.head == None:
      self.head = node
      self.tail = node
    else:
      old_head = self.head
      self.head = node
      self.head.next = old_head
    self.size += 1
    return self
  
  def add_at_tail(self, value):
    node = Node(value)
    if self.size == 0:
      self.head = node
      self.tail = node
    else:
      self.tail = node
      self.tail.next = None
    self.size += 1