// Write a recursive function called nestedEvenSum. Return the sum of all
// even numbers in an object which may contain nested objects.

// TEST CASES:

// OBJECTS
const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

// OUTCOMES:
// nestedEvenSum(obj1); // 6
// nestedEvenSum(obj2); // 10

// SOLUTION:
// my solution is using a helper loop that holds the recursive call,
// I take the object and loop over the keys in it, if the value to a key is also
// an object, I will pass that object recusivly, if the value is a number,
// I check to see if it's even, if so I add it to the countdown variable that I habe
// created outside loop.



function nestedEvenSum(obj) {
  let countdown = 0;

  for (const key in obj) {

    if (typeof obj[key] === 'object') {
      countdown += nestedEvenSum(obj[key])

    } else if (typeof obj[key] === 'number') {
      if(obj[key] % 2 === 0) {
        countdown += obj[key]
      }
    }
  }
  return countdown
}
