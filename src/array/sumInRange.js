// note that the array is 1 based indexing

import { prefixSumWithOutExtraSpace } from "./prefixSum.js"

let arr = [undefined,1,2,3,4,5]
arr[0] = 0
function sumInRange(arr, q){
let prefix = prefixSumWithOutExtraSpace(arr)
while(q--> 0){            
  let l = 2
  let r = 4
  let sum = prefix[r]- prefix[l-1]
  console.log(sum)
}
}
sumInRange(arr,1)