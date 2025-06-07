let sum = 0;
function sumOfArray(arr) {
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
export { sumOfArray };
