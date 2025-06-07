// Count occurrences of a number in an array
let arr1 = [1, 2, 2, 2, 3, 3, 4, 6, 6];
let count1 = 0;
let x1 = 2;
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] == x1) {
    count1++;
  }
}
console.log(count1);
