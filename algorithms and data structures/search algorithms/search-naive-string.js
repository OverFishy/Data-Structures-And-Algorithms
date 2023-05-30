// Define a function that takes two strings, a larger string and a pattern,
// check how many times is a the pattern show up in the large string

// TESTCASE
// naiveSearch('omaoma omg, i think that i like oh my ghod') // 1

// SOLUTION
function naiveSearch(str, pattern) {
  let count = 0;
  for (let i = 0; i < str.length - pattern.length; i ++) {
    for (let j = 0; j < pattern.length; j++) {
      if (str[i + j] !== pattern[j]) break
      if (j === pattern.length - 1) count++
    }
  }
  console.log(count);
  return count
}

naiveSearch('omaoma omg, i think that i like oh my ghod', 'omg') // 1
naiveSearch('omaoma omg, i think that i like oh my ghod', 'om') // 3
naiveSearch('omaoma omg, i think that i like oh my ghod', 'o') // 5
