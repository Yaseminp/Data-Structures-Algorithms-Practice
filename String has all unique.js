//Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

// check each character and store  in a hash table
//if we find that the character is already there, return false
//when done checking, return true which means its all unique

function uniqueChar(str){

  var map={}; len= str.length;
  for (var i = 0; i < len; i++) {
  if (map[str[i]]) {
    return false;
    } else {
      map[str[i]] = true;
    
    }
 }
  return true;
}
console.log(uniqueChar('abcdef'));

//What if you cannot use additional data structures?


//function hasUniqueChars(string) {
  //var i = 0;
// while (string[i] != null) {
//   if (string[i] == string[i + 1]) {
//      console.log('is not unique!');
//      return false;
//    }
//    else{
  
//  console.log('is unique!');
//  return true;
//  }
//}
//}


//hasUniqueChars('basicString');