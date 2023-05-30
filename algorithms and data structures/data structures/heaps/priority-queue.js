// A data structure where each element has a priority.
// Elements with higher priorities are served before
// elements with lower priorities.

// Important point, a priority queue are separate from heaps, they are more of
// an abstract concept, and could be executed by an array or a list.

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    let node = new Node(value, priority);
    this.values.push(node);
    let nodeIdx = this.values.length - 1;
    let parentIdx = this.parentIndex(nodeIdx);
    let parent = this.values[parentIdx];

    while(parent && node.priority < parent.priority) {
      this.swap(nodeIdx, parentIdx);
      nodeIdx = parentIdx;
      node = this.values[nodeIdx];
      parentIdx = this.parentIndex(nodeIdx);
      parent = this.values[parentIdx];
    }
  }

  dequeue() {
    if(!this.values.length) return;

    this.swap(0, this.values.length - 1);
    const extracted = this.values.pop();

    // trikle down
    let parent = 0, childLeft = 1, childRight = 2;
    // Math.min returns Nan if one of the arguments is underfined.
    let min = this.min(childLeft, childRight);



    while(this.values[parent].priority > min) {
      let child = this.values[childLeft] === min ? childLeft : childRight;
      this.swap(parent, child);
      parent = child;

      childLeft = parent * 2 + 1;
      childRight = parent * 2 + 2;

      min = this.min(childLeft, childRight);
    }
    return extracted;
  }

  swap(indx1, indx2) {
    [this.values[indx1], this.values[indx2]] =
    [this.values[indx2], this.values[indx1]];
  }

  parentIndex(index) { // Helper method, calculate the index of a parent.
    return Math.floor((index-1) / 2);
  }

  min(childLeft, childRight) { // Helper method, checks which value is bigger, no error if one is NaN.
    return Math.min(this.values[childLeft].priority, this.values[childRight].priority || -Infinity);
  }
}

const que = new PriorityQueue();
que.enqueue(41, 41);
que.enqueue(42, 42);
que.enqueue(33, 33);
que.enqueue(18 ,18);
que.enqueue(27 ,27);
que.enqueue(12, 12);
que.enqueue(55, 55);
que.enqueue(44 ,44);
que.enqueue(40 ,40);
que.enqueue(9, 9);
que.enqueue(10, 10);
que.enqueue(45 ,45);

console.log(que.dequeue());
console.log(que);
