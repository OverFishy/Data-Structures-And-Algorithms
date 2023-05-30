// Adding numbers up to a specific number
//
function addUpTo(num) {
  let sum = 0;
  for (let i = 0; i <= num; i ++) {
    sum += i
  }

  return sum
}

function addUpTo2(num) {
  return num * (num + 1) / 2
}

let t1 = performance.now()
addUpTo2(1000000000)
let t2 = performance.now()

console.log(`time elapsed: ${(t2 - t1) / 1000 } seconds.`);
