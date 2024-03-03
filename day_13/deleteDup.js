/**
 * delete duplicates - 
 * You are given the head of a Sorted Singly Linked list. 
 * Write a function that will take the given head as input, 
 * delete all nodes that have a value that is already the value 
 * of another node so that each value appears 1 time only and 
 * return the linked list, which is still to be a sorted linked 
 * list.
 */

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class SinglyList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  get(index){
    if (index < 0 || index >= this.size) {
      return 'Index is out of range';
    }
    let cur = this.head;
    while (cur !== index) {
      cur = cur.next;
      cur++;
    }
    return cur;
  }


  removeDupes(){
    let cur = this.head;
    while(cur){
      let nextDist = cur.next;
      while (nextDist && cur.value === nextDist.value) {
        nextDist = nextDist.next;
      }
      cur.next = nextDist;
      cur = nextDist;
    }
    return this.head;
  }
}

// case: 2 ->  3 -> 3 -> 3 => 5 -> 6 -> 6 -> 7 -> 8
// expected 2 -> 3 -> 5 -> 6 -> 7 -> 8

// Test case
const list = new SinglyList();
list.head = new Node(2);
list.head.next = new Node(3);
list.head.next.next = new Node(3);
list.head.next.next.next = new Node(3);
list.head.next.next.next.next = new Node(5);
list.head.next.next.next.next.next = new Node(6);
list.head.next.next.next.next.next.next = new Node(6);
list.head.next.next.next.next.next.next.next = new Node(7);
list.head.next.next.next.next.next.next.next.next = new Node(8);
list.head.next.next.next.next.next.next.next.next.next = new Node('a');
list.head.next.next.next.next.next.next.next.next.next.next = new Node('a');

list.removeDupes();
