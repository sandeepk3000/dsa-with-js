// Find the index of a number in an array
let arr = [1,2,2,2,3,3,4,6,6]
let ans = -1;
let x = 1;
for(let i = 0; i < arr.length; i++){
  if(arr[i] == x){
    ans = i;
  }
}
console.log(ans)