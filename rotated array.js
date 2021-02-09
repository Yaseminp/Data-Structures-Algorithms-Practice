function searchElem (arr,num){
  let i=0;
  for(let i=0; i<arr.length;i++){
    if (arr[i]===num){
      console.log(i);
    }
    i +=Math.abs(num-arr[i]);
  }
  console.log("number is not" +
    " present!");
  
    return -1;
}

arr = [8, 7, 6, 7, 6, 5, 4, 3, 2, 3, 4, 3]
n = arr.length
num = 3
console.log("Element", num, " is present at index ",
  search(arr, n, 3));