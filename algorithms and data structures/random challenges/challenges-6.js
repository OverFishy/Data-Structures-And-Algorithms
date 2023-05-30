// Write a function called findLongestSubstring, which accepts a string and returns the
// length of the longest substring with all distinct characters.

// TEST CASES
// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6

// SOLUTION

// For the solution I went with a combination of multiple pointers and frequency counter.
// I'm starting by creating an empty object, and couple of pointers that point to the same element
// on a string, (left & right), I'm also creating a variable to store the tempCount and maxCount
// In those I will count how many unique charachters I have before running into a duplicate.
// I'm iterating over the string, checking to see if a charachter i currently iterate is a key in
// the object, if no, it's a unique char and will be added and the value is the index of that char
// in the string, and add one to my tempCounter.
// If it's not unique, I know I have duplicates, I will move my left pointer to the index where the
// duplicate char was found + 1 so I will not include it again.
// after that I move my right pointer one index up, and checking if my tempCounter is bigger then
// maxCounter, if so, reassign the value.

function findLongestSubstring (string) {
  if (string.length === 0) return 0

  let chars = {};
  let tempCounter = 0;
  let maxCounter = tempCounter;
  let left = 0;
  let right = 0;

  while (right < string.length) {
    if (!chars.hasOwnProperty(string[right])) {
      // When new char
      tempCounter ++
      chars[string[right]] = right
    } else {
      // When repedetive char
      if (left < chars[string[right]] + 1) left = chars[string[right]] + 1
      tempCounter = right - left + 1
    }
    chars[string[right]] = right
    right ++
    if (tempCounter > maxCounter) maxCounter = tempCounter
  }

  console.log(maxCounter);
  return maxCounter;
}

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}
