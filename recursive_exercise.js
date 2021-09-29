/* 01-----------------------Power---------------------------------------------------------------------
Write a function called power which accepts a base and an exponent. 
The function should return the power of the base to the exponent. 
This function should mimic the functionality of Math.pow()  
        - do not worry about negative bases and exponents.
*/
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(n, m) {
  if (m === 0) return 1;
  return n * power(n, m - 1);
}
console.log(power(2, 4));

// power(2, 4) : 2 * power(2, 3)
// power(2, 3) : 2 * power(2, 2)
// power(2, 2) : 2 * power(2, 1)
// power(2, 1) : 2 * power(2, 0)
// => 2 * 1 = 2
// => 2 * 2 = 4
// => 2 * 4 = 8
// => 2 * 8 = 16

/* 02-----------------------productOfArray---------------------------------------------------------------------
Write a function called 'productOfArray' which takes in an array of numbers and 
returns the product of them all.
*/
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(array) {
  if (array.length === 1) return array[0];
  return array.pop() * productOfArray(array);
}

console.log(productOfArray([1, 2, 3, 10, 11]));
console.log('------------------------------')

// productOfArray([1, 2, 3, 10]) : 10 * productOfArray([1, 2, 3])
// productOfArray([1, 2, 3]) : 3 * productOfArray([1, 2])
// productOfArray([1, 2]) : 2 * productOfArray([1])
// => 2 * 1 = 2
// => 2 * 3 = 6
// => 6 * 10 = 60

/*
another solution
*/

function productOfArray2(array) {
  if (array.length === 0) return 1;
  return array[0] * productOfArray2(array.slice(1));
}

console.log(productOfArray2([1, 2, 3, 10, 11]));

// productOfArray([1, 2, 3, 10])
// => [1] * productOfArray([2, 3, 10])
// => [1] * [2] * productOfArray([3, 10])
// => [1] * [2] * [3] * productOfArray([10])
// => [1] * [2] * [3] * [10] * productOfArray([])
// => [1] * [2] * [3] * [10] * 1

/* 03-----------------------reverse---------------------------------------------------------------------
Write a recursive function called 'reverse' which accepts a string and returns 
a new string in reverse.
*/
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverse(str) {
  // add whatever parameters you deem necessary - good luck!
  const strArray = str.split('');
  // console.log(strArray);
  // console.log(strArray.join(''));

  if (strArray.length === 1) return str;

  return strArray.pop() + reverse(strArray.join(''));
}
console.log(reverse('awesome'));
console.log(reverse('rithmschool'));
console.log('------------------------------')

// 'map' => 'pam'
// reverse('map') : p + reverse('ma')
// reverse('ma') : a + reverse('m')
// => reverse('m') = strArray.join('')
// => strArray.join('') + strArray.pop()

/*
another solution
*/

function reverse2(str) {
  if (str.length === 1) return str;
  return reverse2(str.slice(1)) + str[0];
}
console.log(reverse2('awesome'));
console.log(reverse2('rithmschool'));

/* 04-----------------------isPalindrome---------------------------------------------------------------------
Write a recursive function called 'isPalindrome' which returns true if the string 
passed to it is a palindrome (reads the same forward and backward). 
Otherwise it returns false.
*/
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
  // add whatever parameters you deem necessary - good luck!
  return str === reverse(str);
}

console.log(isPalindrome('awesome'));
console.log(isPalindrome('foobar'));
console.log(isPalindrome('tacocat'));
console.log(isPalindrome('amanaplanacanalpanama'));
console.log(isPalindrome('amanaplanacanalpandemonium'));
console.log('------------------------------')

/*
another solution
*/

function isPalindrome2(str) {
  // base case
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome2(str.slice(1, -1));

  return false;
}

console.log(isPalindrome2('awesome'));
console.log(isPalindrome2('foobar'));
console.log(isPalindrome2('tacocat'));
console.log(isPalindrome2('amanaplanacanalpanama'));
console.log(isPalindrome2('amanaplanacanalpandemonium'));
