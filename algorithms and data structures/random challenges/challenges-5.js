// Write a function called minSubArrayLen which accepts two parameters -
// an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which
// the sum is greater than or equal to the integer passed to the function.
// If there isn't one, return 0 instead.

// TEST CASES
// minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

// SOLUTION

// I choose to combine 2 solution methods, sliding window & multiple pointers.
// I will initially loop over the given array, adding to the sum of all the first elements untill
// the sum of them in equal of bigger then n.
// I will also calculate how much elements are inside, and by that create a 'Window' to slide across
// the array.
// on top of that I create two pointers, both points at start of array, the right one moves first
// on initial iteration, and by that creating the "window".
// On second iteration, I'm checking to see if that value of the integers inside window are bigger
// or small then n, if they are smaller, the right pointer will go one index up, and recalcualte
// if bigger then n, the left pointer will go one index up, by that I can check whats the minimum
// required numbers I need in order to create a sum that is bigger or equal to n.

function minSubArrayLen(arr, n) {
  let tempSum = 0;
  let right = 0;
  let left = 0;

  while (tempSum < n) {
    if (right >= arr.length) break;
    tempSum = tempSum + arr[right]
    right ++
  }

  if (tempSum < n) return 0

  right --
  let tempElements = right - left + 1;
  let minElements = tempElements;

  while (right < arr.length) {
    if (tempSum >= n) {
      tempSum = tempSum - arr[left]
      left ++
      if (tempElements < minElements) minElements = tempElements
    } else {
      right ++
      tempElements ++
      tempSum += arr[right]
    }
    tempElements = right - left + 1;
  }

  console.log('minElements :', minElements);
  return minElements
}

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
		// move the window to right
    if(total < sum && end < nums.length){
      total += nums[end];
			end++;
    }
    // if current window adds up to at least the sum given then
		// we can shrink the window
    else if(total >= sum){
      minLen = Math.min(minLen, end-start);
			total -= nums[start];
			start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
