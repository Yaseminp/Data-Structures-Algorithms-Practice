 // Given a string, recursively remove adjacent duplicate characters from string. The output string should not have any adjacent duplicates. See following examples. 
// Input: azxxzy Output: ay First "azxxzy" is reduced to "azzy". The string "azzy" contains duplicates, so it is further reduced to "ay".

function RemoveDup(str) {

  //initialize firstChar
 let firstChar = str.substring(0, 1);
 //if length of the string if greater than 1 
 if(str.length > 1){
   //drop first char and recursivly call again
    returned = RemoveDup(str.substring(1));
   
   //firstchar is same in the returned substring
   if(returned!="" && firstChar == returned.substring(0,1)){
     //then remove both
     return returned.substring(1);
   }
   else{
     //else add firstChar+returned 
     return firstChar + returned;
   }
  }
  return str;
}

console.log(RemoveDup("azxxzy"));