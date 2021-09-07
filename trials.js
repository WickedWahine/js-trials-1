'use strict';

// Print each item in the given array.
//
// Ex.:
//   > outputAllItems([1, 'hello', true]);
//   1
//   hello
//   true
function outputAllItems(items) {
  for (const item of items) {
    console.log(item);
  }
}

outputAllItems([1, 'hello', true])

// Given an array of numbers, return an array of all even numbers.
//
// Ex.:
//   > getAllEvens([7, 8, 10, 1, 2, 2]);
//   [8, 10, 2, 2]
function getAllEvens(nums) {
  const evenNums = [];

  for (const num of nums) {
    if (num % 2 === 0) {
      evenNums.push(num);
    }
  }

  return evenNums;
}

console.log(getAllEvens([7, 8, 10, 1, 2, 2]))

// Given an array, return all elements at odd numbered indices.
//
// Ex.:
//   > getOddIndices([1, 'hello', true, 500]);
//   ['hello', 500]
function getOddIndices(items) {
  const result = [];

  for (const idx in items) {
    if (idx % 2 !== 0) {
      result.push(items[idx]);
    }
  }

  return result;
}

console.log(getOddIndices([1, 'hello', true, 500]))

// Given an array, output a numbered list.
//
// Ex.:
// > printAsNumberedList([1, 'hello', true]);
// 1. 1
// 2. hello
// 3. true
function printAsNumberedList(items) {
  let i = 1;

  for (const item of items) {
    console.log(`${i}. ${item}`);
    i += 1;
  }
}

printAsNumberedList([1, 'hello', true])

// Return an array of numbers in a certain range.
//
// Ex.:
// > getRange(0, 5);
// [0, 1, 2, 3, 4]
//
// > getRange(1, 3);
// [1, 2]
function getRange(start, stop) {
  const nums = [];

  for (let num = start; num < stop; num += 1) {
    nums.push(num);
  }
  return nums
}

console.log(getRange(0, 5))
console.log(getRange(1, 3))

// Given a string, return a string where vowels are replaced with '*'.
//
// Ex.:
//   > censorVowels('hello world');
//   'h*ll* w*rld'
function censorVowels(word) {
  const vowels = 'aeiou'

  for (const letter of word) {
    if (vowels.includes(letter)) {
      word = word.replace(letter, '*');
    }
  }
  return word
}

console.log(censorVowels('hello world'))

// Given a string in snake case, return a string in upper camel case.
//
// Ex.:
//   > snakeToCamel('hello_world');
//   'HelloWorld'
function snakeToCamel(string) {
  const camelCase = [];

  for (const word of string.split('_')) {
    camelCase.push(`${word[0].toUpperCase()}${word.slice(1)}`);
  }

  return camelCase.join('');
}

console.log(snakeToCamel('hello_world'))

// Return the length of the longest word in the given array of words.
//
// Ex.:
//   > longestWordLength(['hello', 'world']);
//   5
//
//   > longestWordLength(['jellyfish', 'zebra']);
//   9
function longestWordLength(words) {
  let longest = words[0].length;

  for (const word of words) {
    if (longest < word.length) {
      longest = word.length;
    }
  }

  return longest;
}

console.log(longestWordLength(['hello', 'world']))
console.log(longestWordLength(['jellyfish', 'zebra']))

// Truncate repeating characters into one character.
//
// Ex.:
//   > truncate('aaaabbbbcccca');
//   'abca'
//
//   > truncate('hi***!!!! wooow');
//   'hi*! wow'
function truncate(string) {
  const result = [];

  for (const char of string) {
    if (result.length === 0 || char !== result[result.length - 1]) {
      result.push(char);
    }
  }

  return result.join('');
}

console.log(truncate('aaaabbbbcccca'))
console.log(truncate('hi***!!!! wooow'))

// Return true if all parentheses in a given string are balanced.
//
// Ex.:
// > hasBalancedParens('()');
// true
//
// > hasBalancedParens('((This) (is) (good))');
// true
//
// > hasBalancedParens('(Oh no!)(');
// false
function hasBalancedParens(string) {
  let parens = 0;

  for (const char of string) {
    if (char === '(') {
      parens += 1;
    } else if (char === ')') {
      parens -= 1;

      if (parens < 0) {
        return false;
      }
    }
  }

  return parens === 0;
}

console.log(hasBalancedParens('()'))
console.log(hasBalancedParens('((This) (is) (good))'))
console.log(hasBalancedParens('(Oh no!)('))

// Return a compressed version of the given string.
//
// Ex.:
//   > compress('aabbaabb');
//   'a2b2a2b2'
//
// If a character appears once, it shouldn't be followed by a number:
//   > compress('abc');
//   'abc'
//
// The function should handle all types of characters:
//   > compress('Hello, world! Cows go moooo...');
//   'Hel2o, world! Cows go mo4.3'
function compress(string) {
  const compressed = [];

  let currChar = '';
  let charCount = 0;
  for (const char of string) {
    if (char !== currChar) {
      compressed.push(currChar);

      if (charCount > 1) {
        compressed.push(charCount.toString());
      }

      currChar = char;
      charCount = 0;
    }

    charCount += 1;
  }

  compressed.push(currChar);
  if (charCount > 1) {
    compressed.push(charCount.toString());
  }

  return compressed.join('');
}

console.log(compress('aabbaabb'))
console.log(compress('abc'))