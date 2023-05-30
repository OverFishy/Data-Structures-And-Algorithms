// Write a function called recursiveRange which accepts a number and adds
// up all the numbers from 0 to the number passed to the function.

// TEST CASES
// recursiveRange(6) // 21
// recursiveRange(10) // 55

// SOLUTION
// I'm using reccursion, base case checks if num is 1 or smaller, and returns the num.
// Function returns the num + function with argument of num - 1.

function recursiveRange(num) {
  if (num <= 1) return num
  return num + recursiveRange(num - 1)
}

// console.log(recursiveRange(6)) // 21
// console.log(recursiveRange(10)) // 55
