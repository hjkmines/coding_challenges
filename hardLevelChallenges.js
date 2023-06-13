// Write a function that finds the longest increasing subsequence in an array. A subsequence is a sequence of elements from the array that are in increasing order, but not necessarily adjacent.

function findLongestIncreasingSubsequence(arr) {
    const n = arr.length;
    const dp = Array(n).fill(1);
    
    for (let i = 1; i < n; i++) {
      for (let j = 0; j < i; j++) {
        if (arr[i] > arr[j] && dp[i] < dp[j] + 1) {
          dp[i] = dp[j] + 1;
        }
      }
    }
    
    return Math.max(...dp);
  }

// Write a function that finds the longest common subsequence between two strings. A subsequence is a sequence of characters that appears in the same relative order, but not necessarily contiguous.
function findLongestCommonSubsequence(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));
    
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (str1[i - 1] === str2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }
    
    let lcs = '';
    let i = m, j = n;
    
    while (i > 0 && j > 0) {
      if (str1[i - 1] === str2[j - 1]) {
        lcs = str1[i - 1] + lcs;
        i--;
        j--;
      } else if (dp[i - 1][j] > dp[i][j - 1]) {
        i--;
      } else {
        j--;
      }
    }
    
    return lcs;
  }


// Write a function that checks if a string is a valid palindrome, considering only alphanumeric characters and ignoring cases.
function isPalindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
  }

// Write a function that calculates the number of ways to climb a staircase with n steps, where you can either climb 1 or 2 steps at a time.
function climbStairs(n) {
    if (n <= 2) {
      return n;
    }
    
    let prev = 1;
    let curr = 2;
    
    for (let i = 3; i <= n; i++) {
      const next = prev + curr;
      prev = curr;
      curr = next;
    }
    
    return curr;
  }

// Write a function that calculates the maximum sum of a subarray with a constraint that no two elements in the subarray are adjacent.
function maxSumWithNoAdjacent(arr) {
    let inclusive = 0;
    let exclusive = 0;
    
    for (let i = 0; i < arr.length; i++) {
      const temp = Math.max(inclusive, exclusive);
      inclusive = exclusive + arr[i];
      exclusive = temp;
    }
    
    return Math.max(inclusive, exclusive);
  }

// Write a function that calculates the total number of ways to make change for a given amount using a set of coins.
function makeChange(amount, coins) {
    const ways = Array(amount + 1).fill(0);
    ways[0] = 1;
    
    for (let coin of coins) {
      for (let i = coin; i <= amount; i++) {
        ways[i] += ways[i - coin];
      }
    }
    
    return ways[amount];
  }

// Write a function that generates all possible combinations of a given array of elements.
function generateCombinations(arr) {
    const combinations = [];
    
    function generateHelper(current, index) {
      combinations.push(current);
      
      for (let i = index; i < arr.length; i++) {
        generateHelper(current.concat(arr[i]), i + 1);
      }
    }
    
    generateHelper([], 0);
    return combinations;
  }


// Write a function that performs a binary search on a sorted array and returns the index of the target element. If the target element is not found, return -1.
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    
    return -1;
  }

// Write a function that checks if a given number is a happy number. A happy number is defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1.
function isHappyNumber(num) {
    const seen = new Set();
    
    while (num !== 1 && !seen.has(num)) {
      seen.add(num);
      num = String(num).split('').reduce((sum, digit) => sum + Math.pow(Number(digit), 2), 0);
    }
    
    return num === 1;
  }
  