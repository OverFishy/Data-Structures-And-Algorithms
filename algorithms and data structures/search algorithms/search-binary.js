// Write a function binarySearch, accapts a sorted array and value youre looking for.
// The function should return the index of the value if it's in the array, if not return -1.
// Use binary search.

// SOLUTION
// It's a binary search, I have 3 pointers, left right and middle, which points at an array
// respectivly to their names.
// I check the middle pointer value in the arr to see if it's equal to value I search,
// If yes return index, if middle bigger then value, right reassign to point at middle - 1,
// Because we already checked middle, and middle reassign to the current middle between left
// And right. if middle smaller then value, left reassign to middle + 1.
// loop breaks when left is equal or smaller then the right.

function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1
  let middle;

  while (left <= right) {
    middle = Math.floor((left + right) / 2)

    if (arr[middle] === val)    return middle
    else if (arr[middle] > val) right = middle - 1
    else                   left = middle + 1
  }

  return - 1
}

// TEST CASES
console.log(binarySearch([1,2,3,4,5],5)) // 1
// console.log(binarySearch([1,2,3,4,5],3)) // 2
// console.log(binarySearch([1,2,3,4,5],5)) // 4
// console.log(binarySearch([1,2,3,4,5],6)) // -1
// console.log(binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 10)) // 2
// console.log(binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 95)) // 16
// console.log(binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 100)) // -1
