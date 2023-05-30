// Write a recursive function called capitalizeFirst.
// Given an array of strings, capitalize the first letter of each string in the array.

// TEST CASES
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

// SOLUTION
// I choose to use a helper method, I tried to go pure recursion but was a bit to tired.
// Im building an empty array, then in my recursive helper function I'm taking the first
// element in the arr, making the first letter capital and pushing into outside newArr.
// After that I'm returning a call to the helper function with an array passed to it,
// who I've taken out the first element, base case is empty arr.

function capitalizeFirst(arr) {
  let newArr = [];

  function helper(arr) {
    if (arr.length < 1) return
    let string = arr[0]
    newArr.push(string.charAt(0).toUpperCase() + string.slice(1));
    return helper(arr.slice(1))
  }

  helper(arr)

  return(newArr)
}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']
