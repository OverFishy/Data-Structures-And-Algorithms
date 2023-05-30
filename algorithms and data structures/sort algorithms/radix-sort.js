// Radix sort- an sorting algorithm that lavrege the fact that the larger digit numbers
// will have larger numeric values.
// In the method the function Radix-sort, the function takes the array of numbers, and
// iterates over it N times (N - largest number of digits out of all the numbers).
// each iteration the numbers are assinged into sub arrays based on their units numeric value,
// and then gets merged into an arary, next iteration will look at the numbers tens value,
// then hundreds value and so on.

// TIME COMPLEXITY (best/ average/ worst) : O(nk) -> n: length of array, k: number of digits.

// Returns a single digit in a number, based on the place you look for, for example:
// getDigit(1234, 1) -> 4, getDigit(1234, 2) -> 3 ... getDigit(1234, 4) -> 1

const arr = [123, 1234, 12345, 123456, 22, 33, 554, 100, 555, 553, 3454, 123, 90];

function getDigit(number, n) {
  return Math.floor((number / Math.pow(10, n - 1)) % 10);
}

// Returns the number of digits in a number
function digitCount(num) {
  if (num == 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Given an array of numbers, returns the largest number of digits out of all the numbers in the arr.
function mostDigits(arr) {
  let maxDigits = 0;
  for(let i = 0; i < arr.length; i++) {
    if (maxDigits < digitCount(arr[i])) {
      maxDigits = digitCount(arr[i])
    }
  }
  return maxDigits;
}

// The function gets an array of numbers, and sort it based on the numeric value.
function radixSort(arr) {
  let numOfIterations = mostDigits(arr);
  for(let i = 1; i <= numOfIterations; i++) {
    let digitBuckets = Array.from({length: 10}, () => []);
    for(let n = 0; n < arr.length; n++) {
      let tempNum = getDigit(arr[n], i);
      digitBuckets[tempNum].push(arr[n]);
    }
    arr = [].concat(...digitBuckets)
  }
  console.log(arr);
  return arr
}

radixSort(arr)
