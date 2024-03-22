"""
Reverse SLL - You are given the head of a Singly Linked list. 
Write a function that will take the given head as input, 
reverse the Linked List and return the new head of the reversed Linked List.
"""

class Node:
  def __init__(self, value) -> None:
    self.value = value
    self.next = None

def reversed_linked_list(head):
  prev = None
  cur = head
  while cur:
    next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  return prev


head = Node(1)
head.next = Node(2)
head.next.next = Node(3)
head.next.next.next = Node(4)
head.next.next.next.next = Node(5)


reversed_head = reversed_linked_list(head)

# Print the reversed linked list
while reversed_head:
  print(reversed_head.value)
  reversed_head = reversed_head.next