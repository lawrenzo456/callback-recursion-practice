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

// Problem 4
// Write a function `filterByLength` that takes an array of strings and a number,
// then returns a new array with only strings longer than the given number.
// Use `filter()`.

// Problem 5
// Create a recursive function `reverseString` that reverses any string passed to it.

// Problem 6
// Implement a function `processNumbers` that takes an array of numbers and two callbacks.
//  It should apply the first callback to even numbers and the second to odd numbers, returning
// a new array.

// Problem 7
// Write a function `sumSquares` that uses `reduce()` to calculate the sum of squares of all
//  numbers in an array.

// Problem 8
// Create a function `countdown` that uses recursion to log numbers from a given number down to 0.

// Problem 9
// Implement a higher-order function `applyTwice` that takes a function and a value, and applies the
// function to the value twice.

// Problem 10
// Write a function `findFirstPositive` that uses `find()` to locate the first positive number in an array.

// Problem 11
// Create a recursive function `flattenArray` that takes a nested array and returns a flattened version
// (one level deep).

// Problem 12
// Implement a function `asyncMultiply` that takes two numbers and a callback, then uses `setTimeout` to
//  call the callback with the product after 500ms.

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
