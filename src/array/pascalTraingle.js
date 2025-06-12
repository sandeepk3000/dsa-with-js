import {printArray} from "./2DArray.js";
function pascalTraingle(n) {
  let ans = new Array(n);
  for (let i = 0; i < n; i++) {
    ans[i] = new Array(i + 1);
    ans[i][0] = ans[i][i] = 1;
    for (let j = 1; j < i; j++) {
      ans[i][j] = ans[i - 1][j] + ans[i - 1][j - 1];
    }
  }
  return ans;
}
printArray(pascalTraingle(5));