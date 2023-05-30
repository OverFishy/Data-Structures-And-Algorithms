// Write a function called collectStrings which accepts an object
// and returns an array of all the values in the object that have a typeof string

// TEST CASES
// const obj = {
//   stuff: "foo",
//   data: {
//       val: {
//           thing: {
//               info: "bar",
//               moreInfo: {
//                   evenMoreInfo: {
//                       weMadeIt: "baz"
//                   }
//               }
//           }
//       }
//   }
// }
// collectStrings(obj) // ["foo", "bar", "baz"])

// SOLUTION
// Choose to do a pure recursion, I'm defining an arr to whome I'm going to shove
// all the strings on the object, I iterate the object keys, if value is string
// I push it to the arr, if value to key is object, I re assign value of arr
// to itself, and concat on it the recursive call for the inner object.
// In the end of function I return the arr

function collectStrings(obj) {
  let arr = [];

  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      arr.push(obj[key])
    } else if ( typeof obj[key] === 'object' &&
                !Array.isArray(obj[key])) {
      arr = arr.concat(collectStrings(obj[key]))
    }
  }
  return arr
}
