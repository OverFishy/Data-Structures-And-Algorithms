// Write a recursive function called fib which accepts a number and returns the nth number in
// the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of
// whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and
// where every number thereafter is equal to the sum of the previous two numbers.

// TEST CASE
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

// SOLUTION
// I choose to use a helper method as my recurrsive element,
// Out side In the parent function I keep track of a counter, 2 veriables (leftSub & rightSub)
// that represent 2 following elements in the Fibonacci sequence and a score.
// my basecase is if my counter is equal to the number passed as argument,
// each recurrsive set I will add one to my counter, set a score equal to the sum of the 2
// variables, the leftSub variable will be equal to the rightSub. and the rightSub to thier last
// total.

function fib(num) {
  let leftSub = 1;
  let counter = 0;
  let rightSub = 0;
  let score;
  function helper(num) {
    if (counter === num) return
    score = leftSub + rightSub
    leftSub = rightSub
    rightSub = score
    counter ++
    return score + helper(num)
  }
  helper(num)
  console.log(score);
  return score
}

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

// Or this solution, which is briliantly simple.
// You check to see if n is less or equal to 2, because in the sequance both of those equal one.
// then you return 2 recursive calls, one with n -1 and one with n-2 that represent 2 elements
// below you in the sequal.

function fib(n){
  if (n <= 2) return 1;
  return fib(n-1) + fib(n-2);
}
