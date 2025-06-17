
function printNaturalNo(n){
  if(n===1){//base case
    console.log(1)
    return;
  }
  printNaturalNo(n-1) //assume
  console.log(n)//self work
}
printNaturalNo(5)