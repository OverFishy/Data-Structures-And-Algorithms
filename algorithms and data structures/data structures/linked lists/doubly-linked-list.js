class Node {
  // static counter = 0;
  constructor(value) {
    // this.id = Node.counter;
    this.value = value;
    this.previous = null;
    this.next = null;
    // Node.counter++;
  }

}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let node = new Node(value);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return null;

    let removedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.previous;
      this.tail.next = null;
      removedNode.previous = null;
    }

    this.length--;
    return removedNode
  }

  shift() {
    if (this.length === 0) return null;

    let removedNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      this.head.previous = null;
      removedNode.next = null;
    }

    this.length--;
    return removedNode;
  }

  unshift(value) {
    let node = new Node(value);
    if(this.length === 0) {
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.previous = node;
    }
    this.head = node;
    this.length++;
    return this;
  }

  get(index){
    if(index < 0 || index >= this.length) return null;
    let count, current;
    if(index <= this.length/2){
        count = 0;
        current = this.head;
        while(count !== index){
            current = current.next;
            count++;
        }
    } else {
        count = this.length - 1;
        current = this.tail;
        while(count !== index){
            current = current.previous;
            count--;
        }
    }
    return current;
  }

  set(index, value) {
    let nodeToSet = this.get(index);

    if(nodeToSet) {
      nodeToSet.value = value;
      return true;
    }
    return false;
  }

  insert(index, value){
    if(index < 0 || index > this.length) return false;
    if(index === 0) return !!this.unshift(value);
    if(index === this.length) return !!this.push(value);

    let newNode = new Node(value);
    let beforeNode = this.get(index-1);
    let afterNode = beforeNode.next;

    beforeNode.next = newNode, newNode.previous = beforeNode;
    newNode.next = afterNode, afterNode.previous = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if(index < 0 || index > this.length) return false;
    if(index === 0) return !!this.shift();
    if(index === this.length - 1) return !!this.pop();

    let removedNode = this.get(index);
    let beforeNode = removedNode.previous;
    let afterNode = removedNode.next;

    beforeNode.next = afterNode, afterNode.previous = beforeNode;
    removedNode.next = null, removedNode.previous = null;
    this.length--;
    return removedNode;
  }

  iterate() {
    let node = this.head
    let counter = 0;
    while (counter < this.length) {
      console.log(node.value);
      node = node.next;
      counter++;
    }
  }
}
