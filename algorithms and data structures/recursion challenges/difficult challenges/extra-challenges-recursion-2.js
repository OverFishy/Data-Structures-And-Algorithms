// Write a recursive function called isPalindrome which returns true if
// the string passed to it is a palindrome
// (reads the same forward and backward).
// Otherwise it returns false.

// TEST CASES
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

// SOLUTION
// I'm using pure recursion, im constantly checking to see if the first and last char
// on the string are equal or not
// basecase contains 2 seprate cases, one if the string length
// is smaller or equal to 1, becuase a char = char.
// second base case is if the first and last char are not equal and then its not a palindrome.
// I'm returning a recursive call, when i'm passing it the original string, with out the first
// and last chars.

function isPalindrome(str) {
  if (str <= 1) return true
  if (str[0] !== str[str.length - 1]) return false
  return isPalindrome(str.slice(1, -1))
}
