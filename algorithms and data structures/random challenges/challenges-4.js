// Given an array of integers and a number, write a function called maxSubarraySum,
// which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array.
// In the first example below, [100, 200, 300] is a subarray of the original array,
// but [100, 300] is not.

// TEXT CASES
// maxSubarraySum([100,200,300,400], 2) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39
// maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
// maxSubarraySum([2,3], 3) // null

// SOLUTION
// In my solution, I'm using the sliding window method, I'm iterating the given array the first time
// n times and calculating the sum of the first n numbers, that sum is then stored in a variable.
// next up I'm iterating second time, from the first number that was not calculated in the initial sum,
// and removing the number that is out side the scope of the silding window.
// I constantly check if the new sum of the window in bigger then the biggest sum so far, if so
// I'm updating the new maximum sum.
// I'm using time complexity of O(n), and space complexity of O(1) ?

function maxSubarraySum (arr, n) {
  if (n > arr.length) return (null)

  let tempSum = 0;
  for (let i = 0; i < n; i++) {
    tempSum += arr[i]
  }

  let maxSum = tempSum;
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum + arr[i] - arr[i - n]
    if (tempSum > maxSum) maxSum = tempSum
  }

  console.log(maxSum);
  return maxSum
}
