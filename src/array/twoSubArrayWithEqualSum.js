// question :

// check if there are two subarrays with equal sum
import { prefixSumWithOutExtraSpace } from "./prefixSum.js";
let arr = [1,3,5,6,2,1];
function checkTwoSubArrayWithEqualSum(arr) {
  let prefix = prefixSumWithOutExtraSpace(arr);
  for (let i = 0; i < arr.length - 2; i++) {
    let suffix = prefix[arr.length - 1] - prefix[i];
    if (prefix[i] == suffix) {
      return true;
    }
  }
  return false;
}
console.log(checkTwoSubArrayWithEqualSum(arr));
