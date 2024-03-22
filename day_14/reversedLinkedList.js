/**
 * Reverse SLL - You are given the head of a Singly Linked list. 
 * Write a function that will take the given head as input, 
 * reverse the Linked List and return the new head of the reversed Linked List.
 * 
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  };
}


function reservedLinkedList(head){
  let prev = null;
  let cur = head;
  while(cur) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
}


const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log(reservedLinkedList(head));