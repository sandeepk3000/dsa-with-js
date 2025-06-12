import { printArray } from "./2DArray.js";
import { reverseArray } from "./reverseArray.js";
  
// Transpose of a matrix
function transposeMatrix(matrix, row, col) {
  let transpose = Array.from({ length: row }, () =>
    Array.from({ length: col }, () => 0),
  );
  console.log(transpose);

  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      transpose[i][j] = matrix[j][i];
    }
  }
  printArray(transpose);
}
transposeMatrix(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  3,
  3,
);

// Transpose of a matrix in place
function transposeInPlace(matrix, row, col) {
  for (let i = 0; i < row; i++) {
    for (let j = i; j < col; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  printArray(matrix);
}
transposeInPlace(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  3,
  3,
);

// Rotate a matrix by 90 degrees
function rotate(matrix, n) {
  transposeInPlace(matrix, n, n);
  for (let i = 0; i < n; i++) {
    reverseArray(matrix[i]);
  }
  printArray(matrix);
}
rotate(
  [
    [1, 2],
    [4, 5],
  ],
  2,
);
export { transposeMatrix, transposeInPlace, rotate, printArray };
