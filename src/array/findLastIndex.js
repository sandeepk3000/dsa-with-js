// Find the last index of a number in an array
let arr = [1, 2, 2, 2, 3, 3, 4, 6, 6];
let lastIndex = -1;
let x = 2;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == x) {
    lastIndex = i;
  }
}
console.log(lastIndex);
