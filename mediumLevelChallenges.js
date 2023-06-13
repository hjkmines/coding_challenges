// Write a function that finds the first non-repeating character in a string.
function findFirstNonRepeatingChar(str) {
    const charCount = {};
    
    for (let char of str) {
      charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }
    
    for (let char of str) {
      if (charCount[char] === 1) {
        return char;
      }
    }
    
    return null;
}

// Write a function that checks if two strings are anagrams.
function areAnagrams(str1, str2) {
    const sortedStr1 = str1.toLowerCase().split('').sort().join('');
    const sortedStr2 = str2.toLowerCase().split('').sort().join('');
    
    return sortedStr1 === sortedStr2;
}

// Write a function that sorts an array of numbers in ascending order.
function sortNumbersAscending(arr) {
    return arr.sort((a, b) => a - b);
}
  
// Write a function that removes duplicates from an array.
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
  
// Write a function that checks if a given number is a prime number.
function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    
    return true;
  }

// Write a function that returns the Fibonacci sequence up to a given number of terms.
function fibonacciSequence(num) {
    const sequence = [0, 1];
    
    for (let i = 2; i < num; i++) {
      const nextNum = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextNum);
    }
    
    return sequence;
  }

// Write a function that finds the longest word in a sentence.
function findLongestWord(sentence) {
    const words = sentence.split(' ');
    let longestWord = '';
    
    for (let word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    
    return longestWord;
  }

// Write a function that calculates the factorial of a large number (more than 100).
function calculateFactorial(num) {
    let factorial = BigInt(1);
    
    for (let i = 2; i <= num; i++) {
      factorial *= BigInt(i);
    }
    
    return factorial.toString();
  }
  
// Write a function that returns the most frequent element in an array.
function findMostFrequentElement(arr) {
    const frequencyMap = {};
    
    for (let element of arr) {
      frequencyMap[element] = frequencyMap[element] ? frequencyMap[element] + 1 : 1;
    }
    
    let mostFrequentElement = null;
    let maxFrequency = 0;
    
    for (let key in frequencyMap) {
      if (frequencyMap[key] > maxFrequency) {
        mostFrequentElement = key;
        maxFrequency = frequencyMap[key];
      }
    }
    
    return mostFrequentElement;
  }

//  Write a function that removes falsy values from an array (e.g., null, undefined, 0).
function removeFalsyValues(arr) {
    return arr.filter(Boolean);
  }

// Write a function that converts a number to its Roman numeral representation.
function convertToRoman(num) {
    const romanNumerals = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
    
    let result = '';
    
    for (let key in romanNumerals) {
      while (num >= romanNumerals[key]) {
        result += key;
        num -= romanNumerals[key];
      }
    }
    
    return result;
  }

// Write a function that finds the second smallest element in an array.
function findSecondSmallest(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    return sortedArr[1];
  }

// Write a function that finds the sum of all numbers in a nested array.
function sumNestedArray(arr) {
    let sum = 0;
    
    for (let element of arr) {
      if (Array.isArray(element)) {
        sum += sumNestedArray(element);
      } else {
        sum += element;
      }
    }
    
    return sum;
  }

// Write a function that converts a binary number to its decimal representation.
function convertToDecimal(binary) {
    return parseInt(binary, 2);
  }

// Write a function that calculates the square root of a number without using the built-in Math.sqrt() function.
function squareRoot(num) {
    let guess = num;
    const precision = 0.0001;
    
    while (Math.abs(guess * guess - num) > precision) {
      guess = (guess + num / guess) / 2;
    }
    
    return guess;
  }


// Write a function that checks if a string is a palindrome without considering spaces and punctuation.
function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[\W_]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
  }

// Write a function that generates all possible combinations of a given string.
function generateStringCombinations(str) {
    const combinations = [];
    
    function generateHelper(current, remaining) {
      if (remaining.length === 0) {
        combinations.push(current);
      } else {
        for (let i = 0; i < remaining.length; i++) {
          generateHelper(current + remaining[i], remaining.slice(0, i) + remaining.slice(i + 1));
        }
      }
    }
    
    generateHelper('', str);
    return combinations;
  }

// Write a function that finds the missing number in a sequence of numbers.
function findMissingNumber(arr) {
    const n = arr.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    
    return expectedSum - actualSum;
  }
  
// Write a function that sorts an array of objects based on a specified property.
function sortByProperty(arr, property) {
    return arr.sort((a, b) => a[property] - b[property]);
  }

// Write a function that finds the intersection of two arrays.
function findIntersection(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const intersection = [];
    
    for (let element of set1) {
      if (set2.has(element)) {
        intersection.push(element);
      }
    }
    
    return intersection;
  }

// Write a function that finds the common elements between two arrays.
function findCommonElements(arr1, arr2) {
    const set1 = new Set(arr1);
    const commonElements = [];
    
    for (let element of arr2) {
      if (set1.has(element)) {
        commonElements.push(element);
      }
    }
    
    return commonElements;
  }

// Write a function that checks if a given string is a palindrome using recursion.
function isPalindrome(str) {
    if (str.length <= 1) {
      return true;
    }
    
    if (str[0] !== str[str.length - 1]) {
      return false;
    }
    
    return isPalindrome(str.slice(1, -1));
  }

// Write a function that finds the maximum subarray sum in an array.
function findMaxSubarraySum(arr) {
    let maxSum = 0;
    let currentSum = 0;
    
    for (let num of arr) {
      currentSum = Math.max(num, currentSum + num);
      maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
  }
  