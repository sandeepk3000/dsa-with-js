// Count numbers greater than x
let arr = [1, 2, 2, 2, 3, 3, 4, 6, 6];
let count = 0;
let x = 2;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > x) {
    count++;
  }
}
console.log(count);
