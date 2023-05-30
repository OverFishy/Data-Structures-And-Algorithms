// Write a function called averagePair.
// Given a sorted array of integers and a target average,
// determine if there is a pair of values in the array where the average of
// the pair equals the target average.
// There may be more than one pair that matches the average target.

// TEST CASES
// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

// SOLUTION

// in my solution, I'm using the multiple pointers method, I've created 2 pointers,
// one points at the beggining of arr and the other at the ending,
// I'm taking the average value of the pointers and comparing it to the average value im looking for,
// If the average is below the target average, I will take the left pointer one index up, because bigger
// Values lay there, and if the average is above the target value, I will take the right pointer
// one index down, because smaller values lay there.
// Using time complexity of O(n) and space complexity of O(n) / O(1) -> I'm not quite sure about space
// complexity.

function averagePair(arr, avrgTarget) {
  if (arr.length < 1) {
    console.log(false);
    return false
  }

  let left = 0;
  let right = arr.length - 1

  while (left < right) {
    let avrgSum = (arr[left] + arr[right]) / 2
    if (avrgSum === avrgTarget) {
      console.log(true);
      return true
    }
    else if (avrgSum < avrgTarget) left ++
    else right --
  }
  console.log(false);
  return false
}

