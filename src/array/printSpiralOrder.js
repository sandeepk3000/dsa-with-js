import { printArray } from "./2DArray.js";
function printSpiralOrder(arr, r, c) {
  let topRow = 0;
  let bottomRow = r - 1;
  let leftCol = 0;
  let rightCol = c - 1;
  let current = 0;
  while (current < r * c) {
    // topRow -> leftCol to rightCol
    for (let j = leftCol; j <= rightCol && current < r * c; j++) {
      console.log(arr[topRow][j], "topRow"); // 1 2 3 4
      current++;
    }
    // rightCol -> topRow to bottomRow
    topRow++;
    for (let i = topRow; i <= bottomRow && current < r * c; i++) {
      console.log(arr[i][rightCol], "rightCol"); // 8 12
      current++;
    }
    // bottomRow -> rightCol to leftCol
    rightCol--;
    for (let j = rightCol; j >= leftCol && current < r * c; j--) {
      console.log(arr[bottomRow][j], "bottomRow");
      current++;
    }
    // leftCol -> bottomRow to topRow
    bottomRow--;
    for (let i = bottomRow; i >= topRow && current < r * c; i--) {
      console.log(arr[i][leftCol], "leftCol");
      current++;
    }
    leftCol++;
  }
}
// let arr = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ];
// printSpiralOrder(arr, 4, 4);

// 1 to n * n in spiral order
function printSpiralOrder1(n) {
  let arr = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
  console.log(arr);
  let topRow = 0;
  let bottomRow = n - 1;
  let leftCol = 0;
  let rightCol = n - 1;
  let current = 1;
  while (current <= n * n) {
    // topRow -> leftCol to rightCol
    for (let j = leftCol; j <= rightCol && current <= n * n; j++) {
      arr[topRow][j] = current++; // 1 2 3 4
    }
    // rightCol -> topRow to bottomRow
    topRow++;
    for (let i = topRow; i <= bottomRow && current <= n * n; i++) {
      arr[i][rightCol] = current++;
    }
    // bottomRow -> rightCol to leftCol
    rightCol--;
    for (let j = rightCol; j >= leftCol && current <= n * n; j--) {
      arr[bottomRow][j] = current++;
    }
    // leftCol -> bottomRow to topRow
    bottomRow--;
    for (let i = bottomRow; i >= topRow && current <= n * n; i--) {
      arr[i][leftCol] = current++;
    }
    leftCol++;
  }
  printArray(arr);
}
printSpiralOrder1(2);
