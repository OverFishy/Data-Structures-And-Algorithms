// Queue structure work as follow, first in first out.
// Like every line you can imagine, unless people pass and that's unqueue behaviour.
// 2 main methods in a queue is add & remove, you add to the last of the queue,
// and remove from the start.

// BIG O of Queues: (Not in arrays.)
// Insertion - O(1);
// Removal - O(1);
// Searching O(N);
// Access - O(N);

// One method to create queue using arrays.
// Could use the combination unshift() && pop()
// Or push() && shift().
// Both give the the queue functionality, only thing to take into considaration
// is when working with Arrays, adding/removing items from the start of the array cause a chain reaction
// of reindexing all of the items behind it, so preformance wise its lacking.

// Creating own Queue class out of SLL.

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enQeueue(val) {
    let node = new Node(val);
    if(this.size ===0) {
      this.first = node;
    } else {
      this.last.next = node;
    }
    this.last = node;
    return ++this.size;
  }

  deQueue() {
    if(!this.first) return null;
    let removedNode = this.first;
    if(this.length ===1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return removedNode.value;
  }
}
