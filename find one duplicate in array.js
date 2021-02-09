function FindDupe(arr) {
  if (arr==null || arr.length<=1)
  return -1;

  var n = arr.length;
  //find the exp. sum by formula 
  var exp = n*(n-1)/2;
  var actual = 0;
  //loop thru the array and add them all
  for (let i=0; i<n; i++){
    actual += arr[i]; 
  }
  //subtract two sums to find the duplicate 
  console.log(actual-exp);
}



  FindDupe([1, 2, 2, 3, 4, 5]); //2