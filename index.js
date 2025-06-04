// Count occurrences of a number in an array
let arr1 = [1,2,2,2,3,3,4,6,6]
let count1 = 0;
let x1 = 2;
for(let i = 0; i < arr1.length; i++){
  if(arr1[i] == x1){
    count1++;
  }
}
console.log(count1)

// Find the index of a number in an array
let arr2 = [1,2,2,2,3,3,4,6,6]
let ans = -1;
let x2 = 1;
for(let i = 0; i < arr2.length; i++){
  if(arr2[i] == x2){
    ans = i;
  }
}
console.log(ans)

// Find the last index of a number in an array
let arr = [1,2,2,2,3,3,4,6,6]
let lastIndex = -1;
let x3 = 2;
for(let i = 0; i < arr.length; i++){
  if(arr[i] == x3){
    lastIndex = i;
  }
}
console.log(lastIndex)

// Count numbers greater than x
let arr3 = [1,2,2,2,3,3,4,6,6]
let count3 = 0;
let x = 2;
for(let i = 0; i < arr3.length; i++){
  if(arr3[i] > x){
    count3++;
  }
}
console.log(count3)

// Check if an array is sorted
let arr4 = [1, 2,3,4,5,6,7,8,9];
let isSorted = true;
for (let i = 1; i < arr4.length; i++) {
  if (arr4[i - 1] > arr4[i]) {
    isSorted = false;
    break;
  }
}
console.log(isSorted);

// Find the minimum and maximum number in an array
let min = Infinity;
let max = -Infinity;
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < arr.length; i++) {
  if (arr5[i] > max) {
    max = arr5[i];
  }
  if (arr5[i] < min) {
    min = arr5[i];
  }
}
console.log(max, min);
