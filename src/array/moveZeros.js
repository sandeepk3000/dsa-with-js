import { swapArrayNumber} from "./swapArrayNum.js"
let arr= [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]
// Move all zeros to the start of the array
function moveZeroWithExtraSpace(arr){

  let movedArray = []
  let zeros = 0
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == 0){
      movedArray[zeros++] = 0
    }
  }
  console.log(zeros)
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == 1){
      movedArray[zeros++] = 1
    }
  }
  console.log(movedArray)
}
moveZeroWithExtraSpace(arr)

function moveZeroWithOutExtraSpace(arr){
  // Move all zeros to the end of the array without using extra space
  let j = arr.length - 1;
  let i = 0
  while (i <= j) {
    if (arr[i] > arr[j]) {
      swapArrayNumber(arr, i, j);
      i++
    }if(arr[i]==0){
      i++
    }
    j--
  }
  console.log(arr)
}
moveZeroWithOutExtraSpace(arr)