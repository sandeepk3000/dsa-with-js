// Prefix Sum with extra space

function prefixSumWithExtraSpace(arr) {
  let prefix = new Array(arr.length);
  prefix[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    prefix[i] = prefix[i - 1] + arr[i];
  }
  return prefix;
}
console.log(prefixSumWithExtraSpace([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Prefix Sum without extra space
function prefixSumWithOutExtraSpace(arr) {
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i - 1] + arr[i];
  }
  return arr;
}
console.log(prefixSumWithOutExtraSpace([1, 2, 3, 4, 5, 6, 7, 8, 9]));

export { prefixSumWithExtraSpace, prefixSumWithOutExtraSpace };
