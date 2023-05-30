// Write a recursive function called someRecursive which accepts an array and a callback.
// The function returns true if a single value in the array returns true when passed to the
// callback. Otherwise it returns false.

// TEST CASES
// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

// SOLUTION
// I used a recursive helper method, I created the father function, who's whole job is to
// hold the value, and inside i'm running the helper recursive function.
// the function checks the value of callback together with the first element of the arr.
// if the value is positive, change the value variable to true, if not, do nothing.
// next recursive call will be with the arr - first element.
// base case is if array length is 0.

function someRecursive(arr, callback) {
  let value = false;

  function helper(arr, callback) {
    if (arr.length === 0) return true
    if (callback(arr[0])) value = true;
    return helper(arr.slice(1), callback)
  }

  helper(arr, callback)
  return value
}
