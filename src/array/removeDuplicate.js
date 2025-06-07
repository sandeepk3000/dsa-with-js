// Remove duplicates from an array
let arr = [1,2,3,1,2,5,4,3]

for(let i = 0; i < arr.length; i++){
  for(let j = i+1; j < arr.length; j++){
    if(arr[i] == arr[j]){
      arr[j] = -1;
      arr[i] = -1;
    }
  }
}
console.log(arr)