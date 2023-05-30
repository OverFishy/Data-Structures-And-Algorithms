// Write a function called productOfArray which takes in an array of numbers and
// returns the product of them all.

//  TEST CASES
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

// SOLUTION
// I use pure reccursion when becase checks to see if my arr.length is 0, if so it returns 1,
// because in x times 1, the 1 dose'nt effect the equasion.
// I will take the first element in arr and multiply it by
// productOfArray(arr - the first element), so logically it's like looping
// and multiplaying each element by the sum of multiplation of elements before it,
// only from the back to the front because recursion.



function productOfArray(arr) {
  if (arr.length === 0) return 1
  return arr[0] * productOfArray(arr.slice(1))
}

// console.log(productOfArray([1,2,3])) // 6
// console.log(productOfArray([1,2,3,10])) // 60
