
import { reverseArray } from "./reverseArray.js"
let arr =[-10,-3,-2,-1,-0.1,0,0,0,1,2,3]
// Sort an array  of squares of numbers
function sortArray(arr){
  let sortedArray = new Array(arr.length)
  let i = 0;
  let k = 0
  let j = arr.length - 1;
  while (i <= j){
    let firstSqrt = Math.pow(Math.abs(arr[i]),2)
    let lastSqrt = Math.pow(Math.abs(arr[j]),2)
    if(firstSqrt > lastSqrt){
      sortedArray[k] = firstSqrt
      i++
    }else{
      sortedArray[k] = lastSqrt
      j--
    }
    k++
  }
  reverseArray(sortedArray,0,sortedArray.length-1)
  return sortedArray
}

console.log(sortArray(arr))