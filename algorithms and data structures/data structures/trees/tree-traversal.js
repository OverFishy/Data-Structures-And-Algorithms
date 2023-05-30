// 2 main approaches to traverse a tree,
// Breadth-first search: going side ways, going over all the nodes on the same "level".
// Depth-first search: the vertical approach, find a pattern (vertically).

// BFS - Using an array as a queue, and a variable to store
// all the visited nodes.
// starting from the root, going side ways, each node will enter
// the queue, from there one by one will be moved to the variable
// there will be checked for left && right nodes, if founded, those will be
// placed at the queue.

// DFS - treversing the tree, starting from the root and going down.

// Node & Tree set-up
class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let flag = false;
    let current = this.root
    while (!flag) {
      if(val === current.value) break;
      if(val > current.value) {
        if(current.right) {
          current = current.right;
        } else {
          current.right = node;
          flag = true;
        }
      } else {
        if(current.left) {
          current = current.left;
        } else {
          current.left = node;
          flag = true;
        }
      }
    }
    return this;
  }

  find(val) {
    if(!this.root) return false;
    let current = this.root;
    while(true) {
      if(val === current.value) return true;
      if(val < current.value) { // Going left
        if(current.left) {
          current = current.left;
        } else {
          return false;
        }
      } else {
        if(current.right) {
          current = current.right;
        } else {
          return false;
        }
      }
    }
  }

  BFS() {
    if(!this.root) return null;
    let queue = [], data = [];
    let temp = this.root;
    queue.push(temp);
    while(queue.length) {
      temp = queue.shift();
      data.push(temp.value);
      if(temp.left) queue.push(temp.left);
      if(temp.right) queue.push(temp.right);
    }
    return data
  }

  DFSPreOrder() { // Visit the node first, collect value, then recurrevily look at the left, then on the right.
    if(!this.root) return null;
    let data = [];

    function traverse(node) {
      data.push(node.value);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right)
    }
    
    traverse(this.root);
    return data;
  }

  DFSPostOrder() { // Visit node after looking at left & right to it.
    if(!this.root) return null;
    let data = [];

    function traverse(node) {
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      data.push(node.value);
    }

    traverse(this.root);
    return data;
  }

  DFSInOrder() { // Treversing the entire left, visit the nodes & treverse the right side.
    if(!this.root) return null;
    let data = [];

      function traverse(node) {
        if(node.left) traverse(node.left);
        data.push(node.value);
        if(node.right) traverse(node.right);
      }

    traverse(this.root);
    return data;
  }
}

let t = new BinarySearchTree;
t.insert(10);
t.insert(6);
t.insert(15);
t.insert(3);
t.insert(8);
t.insert(20);
t.insert(21);
console.log(t.DFSInOrder());
