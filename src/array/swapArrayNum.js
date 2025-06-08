// // Rotate an array by k elements without using extra space
function swapArrayNumber(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
export{
  swapArrayNumber
}