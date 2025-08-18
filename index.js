// Practice Test: Higher Order Functions, Callbacks & Recursion

// Problem 1
// Write a function `capitalizeWords` that takes an array of strings and
// returns a new array with each word capitalized. Use `map()`.

function capitalizeWords(data) {
  const capitalized = data.map((index) => {
    return index[0].toUpperCase() + index.slice(1, index.length);
    console.log(index[0].toUpperCase());
  });

  return capitalized;
}
const testWords = ['egg', 'meat', 'plant'];
// console.log(capitalizeWords(testWords));

// Problem 2
// Create a function `countVowels` that uses recursion to count how
// many vowels are in a string.
function countVowels(word, count = 0) {
  if (word.length <= 0) {
    return count;
  }
  function hasVowel(char) {
    if (
      char === 'a' ||
      char === 'A' ||
      char === 'E' ||
      char === 'e' ||
      char === 'I' ||
      char === 'i' ||
      char === 'o' ||
      char === 'O' ||
      char === 'u' ||
      char === 'U'
    )
      return true;
  }
  if (hasVowel(word[0])) {
    console.log(word);
    count++;
  }
  // console.log(word)
  word = word.slice(1);
  return countVowels(word, count);
}

// function countVowels (word, count=0) {
//     //has vowel works
//     function hasVowel(char) {
//                 if (char === 'a' ||
//                     char === 'A' ||
//                     char === 'E' ||
//                     char === 'e' ||
//                     char === 'I' ||
//                     char === 'i' ||
//                     char === 'o' ||
//                     char === 'O' ||
//                     char === 'u' ||
//                     char === 'U') return true;
//             }
//             //testing with for loop
//         for (let i = 0; i < word.length; i++) {
//             if (hasVowel(word[i])) count++;
//         }
//         return count;
// }
// console.log(countVowels('oval'))
// console.log('egg'.slice(1));

// Problem 3
// Implement a function `delayedGreeting` that takes a name and a callback
// function, then executes the callback after a 1-second delay with the greeting
// "Hello, [name]!".

// function delayedGreeting (name, callback) {
//   console.log("Hello, " +name);
//   setTimeout(callback(name),1000);
// }

// function testName(name) {console.log("your dog is a cat!");}
// console.log(delayedGreeting('Jack', testName('egg')));
// Problem 4

// Write a function `filterByLength` that takes an array of strings and a number,
// then returns a new array with only strings longer than the given number.
// Use `filter()`.
function filterByLength(array, stringLength = 1) {
  //filter the array to put strings, maybe typeof string && string.length > x
  const longString = array.filter(
    (item) => typeof item === 'string' && item.length > stringLength
  );
  return longString;
}

const arr4 = ['egg', 'a', 3, 7, 'b', 'potato', {}, []];
// console.log(filterByLength(arr4, 0))

// Problem 5
// Create a recursive function `reverseString` that reverses any string passed to it.
/*will take in a string and reverse it, insteda of charat use string[0], break case is string size = 0 cause keep slicing the string, instead of splicing, passing in the index of 0, and need to use the method that adds a letter to the beginning of the string
single recursion seems easier
apple should go to elppa, so apple char[length-1] = newstring [0]
if index is 0 for new string, then that'll be iterated

*/
function reverseString(string, newString = '', index = string.length - 1) {
  if (string.length <= 0) {
    return newString;
  }
  newString = newString + string[string.length - 1];
  console.log(newString);
  console.log(string);
  console.log(string.slice(0, -1));
  return reverseString(string.slice(0, -1), newString, index);
}

let word = 'apple';
// console.log(reverseString(word));

// Problem 6
// Implement a function `processNumbers` that takes an array of numbers and two callbacks.
//  It should apply the first callback to even numbers and the second to odd numbers, returning
// a new array.
/*array of numbers, two callbacks, returning new array to even # and odd #, so even +2, odd+2
 */
function processNumbers(
  arr = [],
  callbackEven,
  callbackOdd,
  indexE = 0,
  indexO = 1,
  newArr = []
) {
  if (arr.length <= 1) {
    return newArr;
  }
  newArr.push(callbackEven(arr[indexE]));
  console.log(callbackEven(arr[indexE]));
  newArr.push(callbackOdd(arr[indexO]));
  console.log(callbackOdd(arr[indexO]));

  console.log(arr);
  // console.log(arr.length)
  console.log(newArr);
  arr.shift();
  // console.log(arr.length)
  // console.log(arr);
  // console.log(newArr);
  arr.shift();
  console.log(arr.length);

  console.log(arr);

  return (
    arr,
    callbackEven(arr[indexE]),
    callbackOdd(arr[indexO]),
    indexE,
    indexO,
    newArr
  );
}

function adjustE(number) {
  return number + 2;
}
function adjustO(number) {
  return number + 4;
}

const num6 = [1, 2, 3, 4, 5, 10];
// console.log(processNumbers(num6, adjustE, adjustO));

// Problem 7
// Write a function `sumSquares` that uses `reduce()` to calculate the sum of squares of all
//  numbers in an array.
/*
 */
function sumSquares(arr) {
  const sum = arr.reduce((total, currentValue) => total + currentValue ** 2, 0);
  return sum;
}

const arr7 = [2, 3, 4];
// console.log(arr7.reduce((total, currentValue)=> total+currentValue**2,0));
// console.log(sumSquares(arr7));

// Problem 8
// Create a function `countdown` that uses recursion to log numbers from a given number down to 0.
/*
 */

function countdown(num, output = '') {
  if (num === 0) {
    output += 'boom!';
    return output;
  }
  if (!num > 0) return 'pos number needed';
  else {
    output += `${num} `;
    return countdown(num - 1, output);
  }
}
// console.log(countdown(8))

// Problem 9
// Implement a higher-order function `applyTwice` that takes a function and a value, and applies the
// function to the value twice.
/*
 */
function applyTwice(value, callback) {
  return callback(callback(value));
}
// console.log(applyTwice(4, x=>x*2));

// Problem 10
// Write a function `findFirstPositive` that uses `find()` to locate the first positive number in an array.
/*
 */
function findFirstPositive(arr) {
  return arr.find((x) => x > 0);
}
const arr10 = [2, 4, 5];
// console.log(findFirstPositive(arr10));

// Problem 11
// Create a recursive function `flattenArray` that takes a nested array and returns a flattened version
// (one level deep).
/*
 */

// Problem 12
// Implement a function `asyncMultiply` that takes two numbers and a callback, then uses `setTimeout` to
//  call the callback with the product after 500ms.
/*
 */

// Problem 13
// Write a function `allTruthy` that uses `every()` to check if all elements in an array are truthy.

// Problem 14
// Create a function `alternateCaps` that takes a string and a callback, then applies the callback to alternate
// characters (odd-indexed characters uppercase, even-indexed lowercase).

// Problem 15
// Write a recursive function `sumDigits` that takes a positive integer and returns the sum of its digits.
//num.toString().length;

// Problem 16
// Create a recursive function `countOccurrences` that takes an array and a target value, returning how many times the target appears in the array.

// Problem 17
// Implement a recursive function `range` that takes two numbers (a, b) and returns an array of all integers between them, inclusive.

//would this be tree recursion?
// Problem 18
// Write a recursive function `deepCount` that returns the number of elements in a nested array (counting all elements at all levels).

// Problem 19
// Create a recursive function `binarySearch` that implements the binary search algorithm on a sorted array, returning the index of the target element or -1 if not found.

// Problem 20 (Advanced, please dont stress this is just for us to get comfortable with not knowing something)
// Implement a memoized recursive Fibonacci function that uses tail call optimization principles. The function
// should efficiently calculate Fibonacci numbers without redundant calculations or stack overflow.
