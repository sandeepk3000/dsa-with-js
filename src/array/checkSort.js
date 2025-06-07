// Check if an array is sorted
let arr = [1, 2,3,4,5,6,7,8,9];
let isSorted = true;
for (let i = 1; i < arr.length; i++) {
  if (arr[i - 1] > arr[i]) {
    isSorted = false;
    break;
  }
}
console.log(isSorted);