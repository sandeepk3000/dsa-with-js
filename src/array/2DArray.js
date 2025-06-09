// declare 2d array

const arr = [
  [1, 2],
  [4, 5],
];
const secondArr = [
  [1, 2],
  [4, 5],
];
function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
    console.log();
  }
}
// printArray(arr);

// why multidimensional array?

// graphs - 2d
//grid
//fast and easy to access arr[1][1]

function addTwoMarice(arr1, r1, c1, arr2, r2, c2) {
  if (r1 != r2 || c1 != c2) {
    console.log("not possible");
    return;
  }
  let sumArray = [[], []];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < c1; j++) {
      sumArray[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  printArray(sumArray);
}
// addTwoMarice(arr, 2, 2, secondArr, 3, 3);

function multiplyTwoMatrice(arr1, r1, c1, arr2, r2, c2) {
  if (c1 != r2) {
    console.log("not possible");
    return;
  }
  let mulArray = [[], []];
  for (let i = 0; i < r1; i++) {
    //row of arr1
    for (let j = 0; j < c2; j++) {
      // col of arr2
      mulArray[i][j] = 0;
      for (let k = 0; k < c1; k++) {
        // col of arr1 and row of arr2

        mulArray[i][j] += arr1[[i]][k] * arr2[k][j];
      }
    }
  }
  printArray(mulArray);
}
multiplyTwoMatrice(arr, 2, 2, secondArr, 2, 2);
