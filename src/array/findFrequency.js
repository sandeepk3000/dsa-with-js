function findFrequency(arr,x){
  // Search an element in an array using frequency array
  let frequencyArray = makeFrequencyArray(arr);
  let noOfQueries = 1;
  while (noOfQueries > 0) {
    console.log("Enter the number to be searched");
  
    if (frequencyArray[x] == undefined) {
      console.log("Number not found");
    } else {
      console.log(`Number found and frequency is ${frequencyArray[x]}`);
    }
    noOfQueries--;
  }
}
// Find the frequency of each element in an array
function makeFrequencyArray(arr) {
  let frequencyArray = new Array(100005);
  for (let i = 0; i < arr.length; i++) {
    if (frequencyArray[arr[i]] == undefined) {
      frequencyArray[arr[i]] = 0;
    }
    frequencyArray[arr[i]]++;
  }
  return frequencyArray;
}
findFrequency([1, 2, 2, 2, 3, 3, 4, 6, 6],1)
