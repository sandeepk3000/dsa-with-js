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

// Count pairs in an array whose sum is equal to x

let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let x6 = 7;
let count6= 0;
for(let i = 0; i < arr6.length; i++){
  for(let j = i+1; j < arr6.length; j++){
    if(arr6[i]+arr6[j] == x6){
      count6++;
    }
  }
}
console.log(count6);

// Remove duplicates from an array
let arr7 = [1,2,3,1,2,5,4,3]

for(let i = 0; i < arr7.length; i++){
  for(let j = i+1; j < arr7.length; j++){
    if(arr7[i] == arr7[j]){
      arr7[j] = -1;
      arr7[i] = -1;
    }
  }
}
console.log(arr7)

// Find the first and second largest number in an array
let arr8 = [8, 1, 2, 3, 4, 10, 5, 6, 7, 9];
let firstLarget = -Infinity;
let secondLarget = -Infinity;
for (let i = 0; i < arr8.length; i++) {
  if (arr8[i] > firstLarget) {
    secondLarget = firstLarget;
    firstLarget = arr8[i];
  }
}
console.log(firstLarget, secondLarget);

// Swap two numbers
function swapNumber(a, b) {
  let temp = a;
  a = b;
  b = temp;
  console.log("the value of a is ", a);
  console.log("the value of b is ", b);
}
swapNumber(10,4)

// Swap two numbers without using a third variable
function swapNumberUsingDifference(a, b) {
  a = a + b
  b = a - b
  a = a - b
  console.log("the value of a is ", a);
  console.log("the value of b is ", b);
}
swapNumberUsingDifference(10,4)

// Rotate an array by k elements
let arr9 = [1,2,3,4,5,6,7,8,9]
let k1 = 3
k1 = k1 % arr9.length
let ans7 = new Array(arr9.length)
let j2 = 0
for(let i = arr9.length - k1 ; i < arr9.length;i++){
  ans7[j2++] = arr9[i]
}
for(let i = 0; i < arr9.length - k1 ;i++){
  ans7[j2++] = arr9[i]
}
console.log(ans7)

// // Rotate an array by k elements without using extra space
function swapArrayNumber(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


function reverseArray(arr, start, end) {
  while (start < end) {
    swapArrayNumber(arr, start, end);
    start++;
    end--;
  }
}

let arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let n = arr10.length;
let k2 = 10;
k2 = k2 % n;
reverseArray(arr10, 0, (n - k2) - 1);
reverseArray(arr10, n - k2, n - 1);
reverseArray(arr10, 0, n - 1);
console.log(arr10);

// Move all zeros to the end of the array
let arr11 = [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]

let arr12 = new Array(arr11.length)
let zeros = 0
for(let i = 0; i < arr11.length; i++){
  if(arr11[i] == 0){
    arr12[zeros++] = 0
  }
}
console.log(zeros)
for(let i = 0; i < arr11.length; i++){
  if(arr11[i] == 1){
    arr12[zeros++] = 1
  }
}
console.log(arr12)

// Move all zeros to the end of the array without using extra space
let arr13 = [
  1,1,0,0,0,1,0,1,1
];
let j1 = arr13.length - 1;
let i1 = 0
while (i1 <= j1) {
  if (arr13[i1] > arr13[j1]) {
    swapArrayNumber(arr13, i1, j1);
    i1++
  }if(arr13[i1]==0){
    i1++
  }
  j1--
}
console.log(arr13)

// Find the frequency of each element in an array
function makeFrequencyArray(arr) {
  let frequencyArray = new Array(100005);
  for (let i = 0; i < arr.length; i++) {
    if (frequencyArray[arr[i]] == undefined) {
      frequencyArray[arr[i]] = 0;
    }
    frequencyArray[arr[i]]++;
  }
  return frequencyArray;
}
let frequencyArray = makeFrequencyArray([1, 2, 2, 2, 3, 3, 4, 6]);

// Search an element in an array using frequency array
let noOfQueries = 1;
while (noOfQueries > 0) {
  console.log("Enter the number to be searched");
  let x = 3;
  if (frequencyArray[x] == undefined) {
    console.log("Number not found");
  } else {
    console.log(`Number found and frequency is ${frequencyArray[x]}`);
  }
  noOfQueries--;
}

// Move all odd numbers to the beginning of the array

let arr14 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let i2 = 0;
let j3 = arr14.length - 1;
while (i2 <= j3) {
  if (arr14[i2] % 2 != 0 && arr14[j3]%2 == 0) {
    swapArrayNumber(arr14, i2, j3);
    i2++;
    j3--;
  }
  if (arr14[i2] % 2 == 0) {
    i2++;
  }
  if (arr14[j3] % 2 != 0) {
    j3--;
  }
}
console.log(arr14);

let arr15 =[-10,-3,-2,-1,-0.1,0,0,0,1,2,3]




// Sort an array  of squares of numbers
function sortArray(arr){
  let arr16 = new Array(arr.length)
  let i = 0;
  let k = 0
  let j = arr.length - 1;
  while (i <= j){
    let firstSqrt = Math.pow(Math.abs(arr[i]),2)
    let lastSqrt = Math.pow(Math.abs(arr[j]),2)
    if(firstSqrt > lastSqrt){
      arr16[k] = firstSqrt
      i++
    }else{
      arr16[k] = lastSqrt
      j--
    }
    k++
  }
  reverseArray(arr16,0,arr16.length-1)
  return arr16
}

console.log(sortArray(arr15))