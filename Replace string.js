//Write a method to replace all spaces in a string with ‘% 20’.

function replaceChar(str){
  if(str ==" ") {
    return '%20';
  }
  let newStr='', len = str.length;

  for(let i=0; i<len; i++) {
    if (str[i] ===" ") {
      newStr += "%20";
    } else {
      newStr += str[i];
    }
  }
  console.log(newStr);
}
replaceChar("we watch");