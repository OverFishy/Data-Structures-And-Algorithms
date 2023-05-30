// Write a function called insertionSort which sort unsorted array using the
//  insertionSort algorithm

// SOLUTION

const arr = [1, 3, 2, 1, 5, 7, 5, 4, 7]

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] >= arr[j]) break;
      if (arr[i] < arr[j] && arr[i] >= arr[j-1]) {
        // Saving the variable I want to replace before it's gone forever :(
        let temp = arr[i]
        // Remove the element arr[i]
        arr.splice(i, 1)
        // Insert it in the right spot
        arr.splice(j, 0, temp);
      }
    }
  }
  console.log(arr);
}

insertionSort(arr)

const insertionSort2 = (arr) => {
  for (let i = 1; i< arr.length; i++){
    let current = arr[i];
    for(let j = i-1; j >=0 && arr[j] > current; j--){
      arr[j+1] = arr[j];
      arr[j] = current;
    }
  }
  return arr;
}
