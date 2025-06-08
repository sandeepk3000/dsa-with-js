// Swap two numbers
function swapNumber(a, b) {
  let temp = a;
  a = b;
  b = temp;
  console.log("the value of a is ", a);
  console.log("the value of b is ", b);
}
swapNumber(10, 4);

// Swap two numbers without using a third variable
function swapNumberUsingDifference(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
  console.log("the value of a is ", a);
  console.log("the value of b is ", b);
}
swapNumberUsingDifference(10, 4);
