// Write a function factorial which accepts a number and returns the factorial of that number.
// A factorial is the product of an integer and all the integers below it; e.g.,
// factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.
// factorial zero (0!) is always 1.

// TEST CASES
//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

// SOLUTION
// Pure reccursion, base case checks if num = 1, to return 1 to be multiplied, or smaller then 1
// because factorial of 0 is 1.
// I'm returning the num times factorial of num - 1, by that creating a chain of functions that
// multiply num by num - 1.

function factorial(num) {
  if (num <= 1) return 1
  return num * factorial(num - 1)
}

// console.log(factorial(1)) // 1
// console.log(factorial(2)) // 2
// console.log(factorial(4)) // 24
// console.log(factorial(7)) // 5040
