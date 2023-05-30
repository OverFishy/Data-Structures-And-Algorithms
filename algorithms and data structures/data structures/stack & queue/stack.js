// Stack structure work as follow, first in last out && last in first out.
// Imagine a clip/magazine & bullets would act as nodes.
// 2 main methods - push & pop, that add a node to the start & remove a node from the start respectuflly.
// Important point is to make sure push & pop both run on constant time O(1).
// All n all a simple structure designed for speed.

// Big O of stacks:
// Insertion - O(1);
// Removal - O(1);
// Searching - O(N);
// Access - O(N);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let node = new Node(val);
    if(this.size === 0) {
      this.first = node, this.last = node;
    } else {
      let temp = this.first;
      this.first = node;
      this.first.next = temp;
    }
    return ++this.size
  }

  pop() {
    if(!this.first) return null;
    let removedNode = this.first;
    if(this.size === 1) {
      this.first = null, this.last = null;
    } else {
      this.first = removedNode.next;
      removedNode.next = null;
    }
    this.size--;
    return removedNode.value;
  }
}
