// Write a function called sumZero, it accapt an assorted array of integers, and check for the first
// pait it finds where the sum of both integers are zero, if found, return an array containing those
// numbers, if no, return undefined.
const arr = [-7 ,-2, -1, 0, 1, 2, 3, 6]

const sumZero = (arr) => {
  // Declarin 2 pointers, one in the start of arr, second in the end
  let left = 0;
  let right = arr.length - 1

  // Looping while the left pointer didn't pass the right pointer when they do,
  // we crossed all possibilities for a match.
  while (left < right) {
    // Creating sum to look for a pair that equals 0.
    let sum = arr[left] + arr[right]

    // To check mid work progress
    console.log('left: ', left, 'right: ', right, 'sum: ', sum);
    if (sum === 0) {
      console.log('Bingo, we found the matching pair!');
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      // If sum is bigger then 0, I should try to search a match with a smaller integer, aka, shift
      // right pointer one position to the left.
      right --
      console.log(`Taking -1 from right: ${right}`);
    } else {
      // If sum is smaller then 0, I should try to search a match with a bigger integer, aka, shift
      // left pointer one position to the right.
      left ++
      console.log(`adding +1 to left: ${left}`);
    }
  }

  return undefined
}

// console.log(sumZero(arr));

// Write a function called countUniqueValues, it accapte a sorted array and counts the unique
// values in it, there can be negative numbers.

// My attempt, time complexity O(n)
const arr2 = [1,2,3,4,4,4,7,7,12,12,13]
const constUniqueValuesTest = (arr) => {
  if (arr.length === 0) {
    return 0
  }

  // Creating empty object
  let frequencyCounter1 = {}

  arr2.forEach((num) => {
    frequencyCounter1[num] ? '' : frequencyCounter1[num] = 1;
  })

  return Object.keys(frequencyCounter1).length;
}

// console.log(constUniqueValuesTest(arr2))

// My attempt, using the multiple-pointer technique
// The logic is as followed, there are 2 pointers running over the array, and im checking to see if
// Their values are equal, if values are equal seeker moves on index up, if values are not equal,
// the seeker moves one index up, the swapper moves one index up, and switches the value of it's
// current index value in the value of the seeker index value.
// After seeker got no where to go anymore, we count the index swapper at, adding one, and that is
// The amount of unique values in a given array.

const constUniqueValues = (arr) => {
  if (arr.length === 0) {
    return 0
  }

  // Creating 2 pointers
  let swapper = 0
  let seeker = 1

  console.log('Index of swapper: ', swapper, 'Index of seeker: ', seeker);

  while (seeker < arr.length) {
    // Equal
    if (arr[swapper] === arr[seeker]) {
      console.log('Values of swapper & seeker are equal');
      seeker ++
      console.log('Index of swapper: ', swapper, 'Index of seeker: ', seeker);
    } else {
      console.log('Values of swapper & seeker are not equal, new unique value was found');
      swapper ++
      arr[swapper] = arr[seeker]
      seeker ++
      console.log('Index of swapper: ', swapper, 'Index of seeker: ', seeker);
    }
  }

  return swapper + 1
}

console.log(constUniqueValues(arr2));

//   i
// 1,2,3,4,4,4,7,7,12,12,13
//     j
