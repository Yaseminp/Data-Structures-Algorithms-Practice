//Given two strings, write a method to decide if one is a permutation of the other?

// if two strings have diff lengths, automatically return false
//we can make a map of one string and check the second string

function checkPerm(s1, s2) {
  var hash ={};
  if(s1.length !== s2.length){
    return false;
  }
  for(var i=0; i<s1.length; i++){
    var c = s1[i];
    if(hash[c]) { // if it is in the hash
      hash[c++]; //increase the count
    } else{
      hash[c] =1; //storre that character
    }
  }

  for( var i=0; i<s2.length;i++){
    var c = s2[i];
    if(hash[c] && hash[c] !==0){ //if it is the hash and not equal to zero
      hash[c]--; //substract
    } else{
      return false;
    }
  }
  return true; //if we haven't return false yet,then we return true
};
console.log(checkPerm('restful','fluster')); //true
console.log(checkPerm('abc', 'abz')); //false 