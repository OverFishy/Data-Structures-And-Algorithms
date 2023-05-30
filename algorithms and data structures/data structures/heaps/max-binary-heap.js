// 1 method I created is called insert, which insert a value to our heap
// that is levreging an array behind the scenes.
// The method takes a value, pushs it to the back of an array, and then calculates
// where it "parent" node is located AKA the index of it in the arr.
// because of how binary heaps are built, where each parent node got to have two
// children nodes, we could easily located the index of the parent node using math
// (index-1) / 2.
// Then I compare values, if the added value is smaller then the value of the parent
// all is good, if it's higher, I'll swap and try again!

// 2 method called extractMax, takes out the first value out of a heap - the biggest value,
// after that action the binary heap loses balance, in order to restore it we take the last value in the heap
// and we put it in the top of the heap, after that we will start to trikle it down untill
// we locate it's currect spot.
// check both children, if parent is bigger than both the heap is sorted.
// if the parent is smaller than both children, swap it with the bigger one and start checks again.
// if the parent is smaller than one of the children, swap and start checks again.

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    let index = this.values.indexOf(value);
    let parentIndex = this.parentIndex(index);

    while(value > this.values[parentIndex]) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = this.parentIndex(index);
    }
  }

  extractMax() {
    if(!this.values.length) return;

    this.swap(0, this.values.length - 1);
    const extracted = this.values.pop();

    // trikle down
    let parent = 0, childLeft = 1, childRight = 2;
    // Math.max returns Nan if one of the arguments is underfined.
    let max = this.max(childLeft, childRight)

    while(this.values[parent] < max) {
      let child = this.values[childLeft] === max ? childLeft : childRight;
      this.swap(parent, child);
      parent = child;

      childLeft = parent * 2 + 1;
      childRight = parent * 2 + 2;

      max = this.max(childLeft, childRight)
    }
    return extracted;
  }

  swap(index, replacingIndex) { // Helper method swap 2 elements in array.
    const temp = this.values[replacingIndex];
    this.values[replacingIndex] = this.values[index];
    this.values[index] = temp;
  }

  parentIndex(index) { // Helper method, calculate the index of a parent.
    return Math.floor((index-1) / 2);
  }

  max(childLeft, childRight) { // Helper method, checks which value is bigger, no error if one is NaN.
    return Math.max(this.values[childLeft], this.values[childRight] || -Infinity);
  }

}

let heap = new MaxBinaryHeap;
heap.insert(41);
heap.insert(39);
heap.insert(55);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(33);
heap.insert(100);
heap.insert(1);
heap.insert(45);
heap.insert(26);
heap.insert(260);
console.log(heap.values);
heap.extractMax();
console.log(heap.values);
