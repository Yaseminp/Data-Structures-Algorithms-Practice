function search (arr,low=0,high=arr.length-1){
 if (low ===high){ //
   return arr[low];
 }
  let mid = (low+high) /2; //find the mid point
  //search the value
  if (low < high){
    
    if(mid %2 !=0){  // if mid is odd, mid is pointing to second element of some pair
      if(arr[mid-1] === arr[mid]) //so check mid-1 and mid are equal
      return search(arr,mid+1,high); //set start as mid+1 and continue
      else{
        return search(arr,low,mid-1);
      } //set end as a md point and continue
    }
    if (mid %2 === 0){ //if it is even,mid is pointing to first element of some pair
    if(arr[mid] === arr[mid+1]) // so check mid and mid+1 are equal
    return search(arr,mid+2,high)
    else{
      return search(arr,low,mid);
    } 
   }
  }
  return[low]
}
console.log(search([1,1,3,3,4,5,5,7,7,8,8])); 