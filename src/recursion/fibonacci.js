function fibonacci(n) {
  if (n === 0 || n === 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
} // time complexity O(n) space O(n)
console.log(fibonacci(9));
