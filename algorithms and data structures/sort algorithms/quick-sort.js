// Write a function called pivot which picks a first element in an arr,
// sort it to it's fixed place in the arr, and return the modified arr & the index of the pivot.

// Write a function called quickSort, that will take an arr as argument, and will use
// pivot recurrsivley on the left/right part of the arr, as it was part of a subArr.

// Reccursion works while the left pointer is smaller then the right pointer, if not, then It's an
// indication the part of the arr im looking at has only one element and by default, is sorted.

// SOLUTION

const arr = [7, 11, 3, 9, 22, 8, 2, 2, 4, 3, 5 ,6, 10];

function swap(arr, indx1, indx2) {
  const temp = arr[indx1];
  arr[indx1] = arr[indx2];
  arr[indx2] = temp;
}

function pivot(arr, start = 0, end = arr.length-1) {
  let pivot = arr[start];
  let swapIndex = start;
  for(let i = start + 1; i < arr.length; i++) {
    if(pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    // Starting point
    let pivotIdxx = pivot(arr, left, right);

    // Left side
    quickSort(arr, left, pivotIdxx - 1);

    // Right side
    quickSort(arr, pivotIdxx+1, right);
  }
  return arr
}

quickSort(arr)
console.log(arr);
