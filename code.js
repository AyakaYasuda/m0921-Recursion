'use strict';

function sumRangeIterative(n) {
  let arr = [1];
  for (let i = 2; i <= n; i++) {
    arr.push(i + arr[i - 2]);
  }
  return arr[n - 1];
}
console.log(sumRangeIterative(4));
// [1, 3, 6, 10]

function sumRangeRicursive(n) {
  if (n === 1) return 1;
  return n + sumRangeRicursive(n - 1);
}

console.log(sumRangeRicursive(4));

// sumRicursive(1): 1
// sumRicursive(2): 2 + sumRicursive(1) => 2 + 1 = 3
// sumRicursive(3): 3 + sumRicursive(2) => 3 + 3 = 6
// sumRicursive(4): 4 + sumRicursive(2) => 4 + 6 = 10
