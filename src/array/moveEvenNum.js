import { swapArrayNumber } from "./swapArrayNum.js"
 let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function moveEvenNumToBeginning(arr){
  // Move all odd numbers to the beginning of the array

 
  let i = 0;
  let j = arr.length - 1;
  while (i <= j) {
    if (arr[i] % 2 != 0 && arr[j]%2 == 0) {
      swapArrayNumber(arr, i, j);
      i++;
      j--;
    }
    if (arr[i] % 2 == 0) {
      i++;
    }
    if (arr[j] % 2 != 0) {
      j--;
    }
  }
  console.log(arr);
}
moveEvenNumToBeginning(arr)