import { printArray } from "./2DArray.js";
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
