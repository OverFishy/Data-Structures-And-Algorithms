// Write a function called stringifyNumbers which takes in an object and finds
// all of the values which are numbers and converts them to strings.
// Recursion would be a great way to solve this!

// TEST OBJECTS

// let obj = {
//     num: 1,
//     test: [],
//     data: {
//         val: 4,
//         info: {
//             isRight: true,
//             random: 66
//         }
//     }
// }

// let obj1 = {
//     num: "1",
//     test: [],
//     data: {
//         val: "4",
//         info: {
//             isRight: true,
//             random: "66"
//         }
//     }
// }

// SOLUTION
// Using pure recursion, I'm looping over the keys in object, if the
// value is number, stringfy and reassign, if the value is object,
// recursive call the function with the value (object) as the argument.
// if any other type of data ignore, in the end of function return object.

function stringifyNumbers(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] = obj[key].toString()
    } else if (typeof obj[key] === 'object' &&
               !Array.isArray(obj[key])) {
      obj[key] = stringifyNumbers(obj[key])
    }
  }

  return obj
}
