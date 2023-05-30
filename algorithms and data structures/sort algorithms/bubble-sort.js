// Write a function called bubbleSort which sort unsorted array using the bubbleSort
// algorithm

// SOLUTION
// Bubble sort iterate over an array, and check to see if 2 following elements
// are sorted, if so it moves to the next couple, if they are not, it will swap them
// and move to the next couple, like that it "bubble" up the bigger elements
// and with each iteration it takes the biggest element to the end of the array
// there it sets in it's place, and we run the iteration again without the last
// item, because it was already sorted.
// In my solution I have implemented a quick check to see if in a full iteration
// we did'nt swap anything, if so I can tell with certinty that the array is sorted
// and I can break the loop, no need to further loop.

// Using a nested loop
const arr = [1, 11, 3, 9, 22, 8, 2, 2, 4, 3, 5 ,6, 10]

function swap(arr, indx1, indx2) {
  const temp = arr[indx1]
  arr[indx1] = arr[indx2]
  arr[indx2] = temp
}

function bubbleSort(arr) {
  let noSwap;

  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j+1)
        noSwap = false
      }
    }
    if (noSwap) break
  }

  console.log(arr);
  return arr
}

// bubbleSort(arr)
