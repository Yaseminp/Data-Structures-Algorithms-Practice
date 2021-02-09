function findMagicIndex(arr,low=0,high=arr.length-1){
  
//get middle index
    let mid= Math.floor((low+high)/2)

  if (low <= high){
     if (arr[mid] ==mid){ //check for magic index
       console.log(mid);
     }
     //checking the right
     if(mid > arr[mid]){
       return findMagicIndex(arr, mid+1,high);
     }else{
       //checking the left
       return findMagicIndex(arr, low,mid-1) 
     }
    }
     return -1;
  }

findMagicIndex([-1, -2, 0, 2, 4, 8, 9, 10]); //4