// Write a function called selectionSort which sort unsorted array using
// the selectionSort algorithm

// SOLUTION
// I'm using an algorithem called selection sort, to sort the array,
// It works as followed, i have 2 loops, one nested in the other, and I'm
// iterating over the array in constantly comparing all the elements in the iteration
// to see which on is smaller, the smaller one is swaped instead of the first element
// in that iteration, then I continue to a new iteration from starting from the next
// element.

const arr = [1, 11, 3, 9, 22, 8, 2, 2, 4, 3, 5 ,6, 10]

function swap(arr, indx1, indx2) {
  const temp = arr[indx1]
  arr[indx1] = arr[indx2]
  arr[indx2] = temp
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j
    }
    if (minIndex !== i) swap(arr, minIndex, i)
  }
  console.log(arr);
}

selectionSort(arr)
