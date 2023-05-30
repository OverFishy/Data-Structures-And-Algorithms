class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
    return this
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    while (current.next) {
    newTail = current;
    current = current.next;
    }

    this.tail = newTail;
    newTail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head.next = this.currentHead.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return currentHead;
  }

  unshift(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (this.index < 0 || index >= this.length) return null;
    let nodeToLocate = this.head;
    for (let i = 0; i < index; i++) {
      nodeToLocate = nodeToLocate.next;
    }
    return nodeToLocate;
  }

  set(index, value) {
    let node = this.get(index);
    if(!node) {
      return false;
    } else {
      node.value = value;
      return true;
    }
  }

  insert(index, value) {
    if(this.index < 0 || index > this.length) return false;
    if (index === length) return !!push(value);
    if (index === 0) return !!unshift(value);

    let newNode = new Node(value);
    let beforeNode = this.get(index - 1);
    newNode.next = beforeNode.next;
    beforeNode.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if(index < 0 || index >= this.length) return null;
    if(index === 0) return this.shift();
    if(index === this.length - 1) return this.pop();
    let node = this.get(index - 1);
    let removedNode = node.next
    node.next = removedNode.next;
    this.legnth--;
    return removedNode;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next, prev;
    for(let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }

  
}

let newLinkedList = new SinglyLinkedList;

newLinkedList.push(0).push(1).push(2).push(3).push(4).push(5);
newLinkedList.reverse();
console.log(newLinkedList);
