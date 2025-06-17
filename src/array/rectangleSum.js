let arr = [
  [1, 2, 2, 2, 3],
  [1, 2, 2, 2, 3],
  [1, 2, 2, 2, 3],
  [1, 2, 2, 2, 3],
];

function rectangleSumM1(arr, l1, r1, l2, r2) {
  let sum = 0;
  for (let i = l1; i <= l2; i++) {
    for (let j = r1; j <= r2; j++) {
      sum += arr[i][j];
    }
  }
  console.log(sum);
}
function prefixSum(arr, n, m) {
  for (let i = 0; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      arr[i][j] += arr[i][j - 1];
    }
  }
}
function rectangleSumM2(arr, l1, r1, l2, r2) {
  let sum = 0;
  prefixSum(arr, l2, r2);
  console.log(arr);
  for (let i = l1; i <= l2; i++) {
    sum += arr[i][r2] - arr[i][r1 - 1];
  }
  console.log(sum);
}
function prefixSum2D(arr, n, m) {
  for (let i = 0; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      arr[i][j] += arr[i][j - 1];
    }
  }
  // console.log(arr)
  for (let j = 0; j <= m; j++) {
    for (let i = 1; i <= n; i++) {
      arr[i][j] += arr[i - 1][j];
    }
  }
  // console.log(arr);
}
function rectangleSumM3(arr, l1, r1, l2, r2) {
  let up = 0,
    left = 0,
    leftup = 0,
    ans = 0;
  prefixSum2D(arr, l2, r2);
  console.log(arr);
  let sum = arr[l2][r2];
  if (l1 >= 1 && r1 >= 1) {
    left = arr[l2][r1 - 1];
    up = arr[l1 - 1][r2];
    leftup = arr[l1 - 1][r1 - 1];
  }
  ans = sum - left - up + leftup;
  console.log(ans);
}
//rectangleSumM1(arr, 1, 2, 3, 4);
//rectangleSumM2(arr, 1, 2, 3, 4);
rectangleSumM3(arr, 1, 2, 3, 4);
