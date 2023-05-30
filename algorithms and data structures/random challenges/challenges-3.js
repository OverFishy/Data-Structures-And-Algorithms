// Write a function called isSubsequence which takes in two strings and checks
// whether the characters in the first string form a
// subsequence of the characters in the second string.
// In other words, the function should check whether the characters in the first
// string appear somewhere in the second string, without their order changing.

// TEST CASES
// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// isSubsequence('a', 'acb'); // true
// isSubsequence('acab', 'acbd'); // false
// isSubsequence('yo', 'yo'); // true
// isSubsequence('aaa', "Madam, I'm Adam"); // true


// SOLUTION
// My approach is using the multiple pointers, I'm creating 2 pointers one in each string
// first charachter, i'm looping over the two strings, and comparing thier charachters,
// If the two charecters match, both pointers move up one index, if there is no match,
// only the right pointer moves up one index, in search of a match.
// If the right pointer finish to iterate over the right string, I know there is no match.
// If the left pointer finish to iterate over the left string, I know there is a mtach.
// I'm using time complexity of O(n + m) representing the 2 strings,
// And space complexity of O(1) -> I think.

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;

  while (j < str2.length + 1) {
    if (i === str1.length) {
      console.log(true);
      return true
    }
    if (str1[i] === str2[j]) i ++
    j++
  }
  console.log(false);
  return false
}

