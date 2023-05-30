// Write a function named search, accapts an array of sorted integerns, and an integer value.
// The function needs to return the index of the given value if found in the array, if not return -1.
const arr = [1, 4, 5, 7, 8, 11, 14, 16, 20, 33, 34, 54]
const num = 20

// The approach i'm taking the the approach of the binary search algorithem,
// because the array is sorted, im going to pick the middle of it, and check if the numeric value
// is the same as the value im searchig, if the numeric value is too high, I will check the middle
// of the left side (where numbers with smaller value lays) if too low, I will check the middle
// of the right side (where numbers with higher value lays).
const search = (arr, num) => {
  // Creating 2 pointers
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2)
    let currentElement = arr[middle]
    if (currentElement === num) {
      return `The current value lays in index ${middle}`
    } else if (currentElement > num) {
      max = middle - 1
    } else {
      min = middle + 1
    }
  }

  return - 1
}

console.log(search(arr, num));
