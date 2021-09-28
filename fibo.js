'use strict';

function fiboIterative(n) {
  let arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr[n];
}

// [0, 1, 1, 2, 3, 5]

function fiboRecursion(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fiboRecursion(n - 1) + fiboRecursion(n - 2);
}

console.log(fiboIterative(4));
console.log(fiboRecursion(4));
