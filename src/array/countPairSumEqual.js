// Count pairs in an array whose sum is equal to x

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let x = 7;
let count = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] == x) {
      count++;
    }
  }
}
console.log(count);
