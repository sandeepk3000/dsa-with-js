// Find the first and second largest number in an array
let arr = [8, 1, 2, 3, 4, 10, 5, 6, 7, 9];
let firstLarget = -Infinity;
let secondLarget = -Infinity;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > firstLarget) {
    secondLarget = firstLarget;
    firstLarget = arr[i];
  }
}
console.log(firstLarget, secondLarget);
