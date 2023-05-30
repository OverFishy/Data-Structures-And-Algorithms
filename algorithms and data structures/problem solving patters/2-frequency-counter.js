// Write a function named sum, takes 2 arrays and check if all the values in one array
// got corresponding squared values in the other.

const arr1 = [1, 2, 4, 4, 5]
const arr2 = [1, 4, 16, 16, 25]

const same = (arr1, arr2) => {
  // If arrays length isn't same, return false
  if(arr1.length !== arr2.length){
      return false;
  }

  // Create 2 empty objects
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}

  // Fill objects with values from arrays, key is the numeric value,
  // value to the key is how many times this specific numeric value is in array.
  for(let val of arr1){
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for(let val of arr2){
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }

  // To see Objects
  console.log('frequencyCounter1: ', frequencyCounter1);
  console.log('frequencyCounter2: ', frequencyCounter2);
  for(let key in frequencyCounter1){
      if(!(key ** 2 in frequencyCounter2)){
          return false
      }
      if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
          return false
      }
  }
  return true
}

// console.log(same(arr1, arr2))

// Write a function called validAnagram, accapt 2 strings and check to see if the second string is an
// anagram of the first
const str1 = 'hello'
const str2 = 'olelh'

const validAnagram = (str1, str2) => {
  // Check to see i'm working with strings
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    return false
  }

  // Check to see the strings length are the same
  if (str1.length !== str2.length) {
    return false
  }

  // Creating empty object
  let frequencyCounter1 = {}

  // Filling objects with characters from the string.
  for(let char of str1){
      frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1
  }

  // To see Objects
  // console.log('frequencyCounter1: ', frequencyCounter1);

  // Looping over the second string, for each character I check for a match in my object for the first
  // string, if no match, return false, if match, make sure to remove it from object to avoid douplication.
  for(let i = 0; i < str2.length; i++) {
    let char = str2[i]
    if (!frequencyCounter1[char]) {
      return false
    } else {
      frequencyCounter1[char] -= 1
    }
  }

  return true
}

// Test cases and expected results
// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true


// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities: O(n)
const num = 222
const num1 = 345

// A function that takes a number and gives back an object with the deconstructed number given 2,
// Where key is the integer and the value is how many times this numebr appears.
const frequencyCounterMaker = (num) => {
  let frequencyCounter = {};

  const sNumber = num.toString();
  for (let i = 0, len = sNumber.length; i < len; i += 1) {
    let int = sNumber.charAt(i)
    frequencyCounter[int] = (frequencyCounter[int] || 0) + 1
  }

  return frequencyCounter
}

const sameFrequency = (num, num1) => {
  if (num === num1) return true

  // Creating two empty objects that will hold the deconstructed numbers into signle integers
  let frequencyCounter1 = frequencyCounterMaker(num);
  let frequencyCounter2 = frequencyCounterMaker(num1);

  for(let key in frequencyCounter1){
    if(!(key in frequencyCounter2)){
      console.log(false);
      return false
    }
    if(frequencyCounter2[key] !== frequencyCounter1[key]){
      console.log(false);
      return false
    }
  }
  console.log(true);
}


// Test cases
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false
// sameFrequency(num, num1); //false
