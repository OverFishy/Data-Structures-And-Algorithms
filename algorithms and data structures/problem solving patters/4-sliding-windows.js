// Write a function called maxSubarraySum, which accapts an array of integers and a number
// called N.
// The function should calculate the maximum sum of N consecutive elements in the array.
// time complexity O(n^2) -> Whack
const arr = [2, 6, 9, 2, 1, 8, 5, 6, 4]
const n = 3
const maxSubarraySumTest = (arr, n) => {
  if (arr.length < 1) {
    return null
  }

  let max = - Infinity;
  for (let i = 0; i < arr.length - n + 1; i++ ) {
    let temporary = 0
    for (let j = 0; j < n; j++) {
      temporary +=  arr[i + j]
    }
    if (max < temporary) {
      max = temporary
    }
    console.log('max: ', max, 'temp: ', temporary);
  }

  return max
}

// console.log(maxSubarraySumTest(arr, n))

// More efficient approach using the sliding-window method
// In this approach we are going to create a 'Screen', we are going to loop at the array
// n first numbers, add the sum of them, and then continue to loop the array, adding the value
// of the next index and substracting the value of the index out side of the window covrage.
const maxSubarraySum = (arr, n) => {
  if (arr.length < 1 || arr.length < n) return null ;

  let maxSum = 0;
  let tempsum = 0;

  // Creating first loop, that created my window
  for (let i = 0; i < n; i++) {
    maxSum += arr[i]
  }
  tempsum = maxSum
  // continue the loop, adding the next index's valus and reducing the last index's value
  for (let i = n; i < arr.length; i++) {
    const addedValue = arr[i];
    const removedValue = arr[i - n];
    tempsum = tempsum + addedValue - removedValue
    console.log('tempsum :', tempsum, 'maxSum :', maxSum);
    maxSum = Math.max(maxSum, tempsum)
  }

  return maxSum
}

console.log(maxSubarraySum(arr, n))
