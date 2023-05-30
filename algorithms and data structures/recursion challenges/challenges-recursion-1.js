// Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent.
// This function should mimic the functionality of
// Math.pow()  - do not worry about negative bases and exponents.

// TEST CASES
// power(2, 3) // 8
// power(4, 5) // 1024
// power(10, 0) // 1

// SOLUTION
// I used pure reccursion, base case checks if my exponent is 0 -> anything to the power of 0 is 1
// And if exponent is 1, then it will return the base -> num to the power of one is num.
// And I will multiply my base with itslf recurrsivley, everytime will reduce one from the exponent
// untill basecase is met.


function power(base, exponent) {
  if (exponent === 0) return 1
  if (exponent === 1) return base
  return base * power(base, exponent - 1)
}

console.log(power(2, 3)) // 8
console.log(power(4, 5)) // 1024
console.log(power(10, 0)) // 1
