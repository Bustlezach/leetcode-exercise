/**
   Fibonacci - In the Fibonacci sequence, each subsequent term is obtained by
  adding the previous 2 terms. This is true for all numbers except the first 2 
  numbers of the Fibonacci series as they do not have 2 preceeding numbers. 
  The first 2 terms in Fibonacci series are 0 and 1. F(n) = F(n-1) + F(n-2) for n>1. 
  Write a function that finds F(n) given n where n is an integer greater than equal to 0. 
  For the first term n = 0.
 */


// Version 1 -  T=O(n) S=O(n)
function fibonacci(n) {
  if (n <= 1) return n;
  const fibSeries = [0, 1];

  let i = 1;
  while (i < n) {
    let nextTerm = fibSeries[i - 1] + fibSeries[i];
    fibSeries.push(nextTerm);
    i++;
  }
  return fibSeries[fibSeries.length - 1];
}





// Version 2 T=O(2^n) S=O(n) not eficient
function fibonacciV(n){
  if (n <= 1) {
    return n;
  } else {
    return fibonacciV(n-1) + fibonacciV(n-2);
  }
}


// Version 3: Memorization (Dynamic programming)
function fibonacciVerTwo(n) {
  const hashtable = {0:0, 1:1,};
  if (n in hashtable) return hashtable[n];
  hashtable[n] = fibonacciVerTwo(n-1) + fibonacciVerTwo(n - 2);
  return hashtable[n];
}

// Best version
function fibonacciB(n) {
  if (n <= 1) return n;

  let prev = 0;
  let cur = 1;
  let next;
  let i = 1;
  while (i < n) {
    next = prev + cur;
    prev = cur;
    cur = next;
    i++;
  }
  return next;
}

const num = 10;

console.log(fibonacci(num));
console.log(fibonacciB(num));
console.log(fibonacciVerTwo(num));