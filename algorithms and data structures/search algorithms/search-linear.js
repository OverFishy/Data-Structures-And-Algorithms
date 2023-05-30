// Write a function called linearSearch who accapte an array and a value.
// if the value is in the array, return it's index, if not return -1

// SOLUTION
// Looping over given arr, for each element checking if equal to value, if so returns
// index in array, if loop in done, I have'nt found the value I was looking for and returning
// -1.

arr = [0, 1, 2, 3]

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i ++) {
    if (arr[i] === val) return i
  }
  return -1
}

console.log(linearSearch(arr, 3)) // 3
