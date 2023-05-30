// BST structure:
// Every parent node has the most two children.
// Every node to the left of a parent node is always
// less than then parent.
// Every node to the right of a parent is alwayw
// greater than the parent.

// A point where BTS excells is in searching things up,
// because of the unique structure and division of nodes
// based on value.
// Same goes to inserting things, to find a place for a node.

// BIG O notation:
// Insesrtion: O(log N);
// Searching: O(log N);

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

  findRecursive(value, node=this.root) {
    if (!node) return false;
    if (node.value === value) return true;
    if (value < node.value) {
      return this.find(value, node.left);
    } else {
      return this.find(value, node.right);
    }
  }
}

let t = new BinarySearchTree();
t.insert(10);
t.insert(5);
t.insert(13);
t.insert(2);
t.insert(7);
t.insert(11);
t.insert(16);
console.log(t.find(700));
