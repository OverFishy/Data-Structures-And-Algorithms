// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// TEST CASES
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true
// areThereDuplicates(1, 2, 3, 1, 5, 6) // true

// SOLUTIONS

// My solution uses Frequency counter patters, where I'm creating an empty object,
// which is filled with value from given arguments.
// Uses time complexity O(n), space complexity O(n)

function areThereDuplicates() {
  let collection = {}
  for(let val in arguments){
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }

  for(let key in collection) {
    if (collection[key] > 1) {
      console.log(true);
      return true
    }
  }

  console.log(false);
  return false
}

// In that solution I've choose the pointer method in order to get a solution,
// I'm starting by sorting the arguments, if they are a string or integer they need diffrent care.
// Then i'm iterating over the array, checking to see if two consecutive numbers are equal or not.

function areThereDuplicates(...args) {
  if (typeof args[0] === "string") {
    args.sort()
  } else {
    args.sort((a, b) => a - b)
  }
  for (let i = 0; i < args.length; i++) {
    if (args[i] === args[i + 1]) {
      console.log(true);
      return true
    }
  }
  console.log(false);
  return false
}

// In this solution we are using the Set object given by JS (I assume)
// The Set object can only store value one AKA, if it's unique in say set.
// I think that this function have space complexity of O(1), and time complexity of O(n)
// Because that's what the course said so, but I'm not sure of it myself.

// Basically I'm iterating over all the arguments, set checks if there are unique values,
// if so it stores, the we compare it to arguments.length, if they dont match, we had some
// duplicates values that set didn't save, if they are equal, then all the values set iterated
// Were unique.

function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
