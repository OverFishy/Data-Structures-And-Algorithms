// Write a recursive function called reverse which accepts a string and
// returns a new string in reverse.

// TEST CASES
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

// SOLUTION
// I'm using pure recursion, my basecase is if the string that have been passed to the function
// is empty to return. The function takes the last char from the string, and returning it
// while concatinating on top of it the return value from
// reverse(string with out the last charachter).

function reverse(string) {
  if (string.length === 0) return ''
  let lastChar = string.charAt(string.length - 1)
  return lastChar.concat(reverse(string.slice(0, string.length - 1)))
}
