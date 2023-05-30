// Write a recursive function called capitalizeWords. Given an array of words,
// return a new array containing each word capitalized.

// TEST CASES
let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

// SOLUTION
// Using pure recursion, I'm creating a new array, and pushing into it the capitalized
// first element from my given array.
// I'm returing a newArr concataneted with recursive call when the next arr is
// missing the first element, base case is if arr got last element, then I will
// return that element with uppercases.

function capitalizeWords (arr) {
  if (arr.length === 1) {
    return arr[0].toUpperCase()
  }

  let newArr = [];
  newArr.push(arr[0].toUpperCase())
  return newArr.concat(capitalizeWords(arr.slice(1)))
}
