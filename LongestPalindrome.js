//Given a string S, find the longest palindromic substring in S. Input: "babad" Output: "bab" Note: "aba" is also a valid answer.

//Expand from center Using two loops, with outer loop determining the center points for a palindromic sequence
// and inner loop to expand and check from that center selected. - for selecting center for odd length string, expand from the character 
//at i. - for checking even length string, expand between i and i+1 index.


//when the given string is empty or is a single character, we can just return the string 
//and not go through the program at all.
const findlongestPalindrome = s => {
  if (!s || s.length <= 1) {
    return s
  }
 // initialize the longest palindrome as an empty string
//loop over the string once and find the largest possible palindrome for each character at the center.
 
  let longest = s.substring(0, 1);
  for (let i = 0 ; i < s.length ; i++) {

//If the current palindrome has a greater length then we can set it as the current longest palindrome.
//Also, since there could be two centers in a palindrome, we will have to repeat the process for the next character that follows the current character.
//get longest palindrome with center of i
    let temp = expand(s , i, i);
    if (temp.length > longest.length) {
      longest = temp
    }
    //get longest palindrome with center of i, i+1
    temp = expand(s, i, i + 1)
    if (temp.length > longest.length) {
      longest = temp
    }
  }
  return longest;
}

//s:given string,
//start:the index of the current character in the string
//end: the index of the current character first, and the index of the next character for a possible center with two characters
const expand = (s, start, end) => {
  while (start >= 0 && end <= s.length-1 ) {
    //If the start and end characters are equal, then we have a palindrome.
    //if not we break 
    if (s[start] !== s[end]){
      break;
    }
    //we will decrement the start and increment the end indexes and execute the while loop again
    start--
    end++
  }
  //While the start and end characters are equal, the palindrome can keep expanding.
  //When it's not, we will exit the while loop and return a substring of the string with the expanded start and end indexes.
  return s.substring(start +1, end);
}

