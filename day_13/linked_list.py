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


  def __str__(self):
    if self.head is None:
        return "Singly linked list: []"
    current = self.head
    nodes = []
    while current:
        nodes.append(str(current.value))
        current = current.next
    return "Singly linked list: [" + " -> ".join(nodes) + "]"

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
      node.next = old_head
    self.size += 1
    return self
  
  def add_at_tail(self, value):
    node = Node(value)
    if self.size == 0:
      self.head = node
      self.tail = node
    else:
      self.tail.next = node
      self.tail = node
    self.size += 1
    return self
  
  def add_at_index(self, index, value):
    if index < 0 or index >= self.size: return 'Invalid index'
    if index == 0: return self.add_at_head(value)
    if index == self.size: return self.add_at_tail(value)
    node = Node(value)
    prev = self.get(index - 1)
    temp = prev.next
    prev.next = node
    node.next = temp
    self.size += 1
    return self
  
  def delete_at_index(self, index):
    if index < 0 or index >= self.size: return 'Invalid index'
    if index == 0:
      temp = self.head
      self.head = temp.next
      self.size -= 1
      return self

    if index == self.size - 1:
      temp = self.tail
      prev = self.get(index - 1)
      self.tail = prev
      prev.next = None
      self.size -= 1
      return self
    
    prev = self.get(index - 1)
    up_next = self.get(index + 1)
    deletedNote = prev.next
    prev.next = up_next
    return self


sl = Singly_linked_list()
result = sl.add_at_head(4)
result = sl.add_at_head(16)
result = sl.add_at_tail(9)
result = sl.add_at_index(1, 12)
result = sl.add_at_tail(183)
result = sl.add_at_tail(0)
result = sl.add_at_tail(20)
print(result)
result = sl.delete_at_index(3)
print(result)
