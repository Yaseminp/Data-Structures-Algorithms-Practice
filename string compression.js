//Implement a method to perform a basic string compression using the counts of repeated characters. 
//For example, the string aabccccaaa would become a2b1c4a3. 
//If the compressed string would not become smaller than the original string, your method should return the original string.


function stringCompression(s){
  //traverse string, keep count of repeated chars
  //if cur and next char is the same, inc count
  let out ='';
  let count = 1;

  for(let i=0; i<s.length; i++){
    let cur = s[i];
    let next = s[i+1];
    if(cur === next){
      count++;
    } else {
      out += cur + String(count);
      count = 1;
    }
  }
  return out
};

console.log(stringCompression('aabcccaaa')); //'a2b1c4a3'