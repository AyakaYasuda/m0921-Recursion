'use strict';

function factorialIterative(n) {
  let product = 1;

  for (let i = 2; i <= n; i++) {
    product *= i;
  }
  return product;
}

function factorialRecursive(n) {
  // base case
  if (n === 2) return 2;

  return n * factorialRecursive(n - 1);
}

console.log(factorialIterative(5));
console.log(factorialRecursive(5));
