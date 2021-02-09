// Given an array of numbers, split the array into two where one array contains the sum of n-1 numbers 
// and the other array with all the n-1 elements

const splitArray = (ints) => {
  //sum ints
  let sum = ints.reduce((a,b) => a+b);
  //create two empty arrays; sumAll,elem
  let sumAll=[] , elem=[];
  //loop thru ints
  for(let i=0; i<ints.length; i++){
    //check if the difference of the sum and current element is equal to current element
    let diff = sum-ints[i]
    if(diff ===int[i])
    //push into sum array
    sumAll.push(arr[i]);
    //else push into n-1 elements
   else{elem.push (arr[i]); 
  }
  }
  return[sumAll, elem];
}

splitArray