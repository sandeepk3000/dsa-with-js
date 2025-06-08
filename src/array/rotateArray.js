// Rotate an array by k elements
import { reverseArray } from "./reverseArray.js"

function rotateArrayWithExtraSpace(arr, k){
  k = k % arr.length
  let rotatedArray = new Array(arr.length)
  let j  = 0
  for(let i = arr.length - k ; i < arr.length;i++){
    rotatedArray[j++] = arr[i]
  }
  for(let i = 0; i < arr.length - k ;i++){
    rotatedArray[j++] = arr[i]
  }
  return rotatedArray
}
console.log(rotateArrayWithExtraSpace([1,2,3,4,5,6,7,8,9],3))

function rotateArrayWithOutExtraSpace(arr, k){
  let n = arr.length;
  k = k % n;
  reverseArray(arr, 0, (n - k) - 1);
  reverseArray(arr, n - k, n - 1);
  reverseArray(arr, 0, n - 1);
  return arr;
}

console.log(rotateArrayWithOutExtraSpace([1,2,3,4,5,6,7,8,9],3))