var romanToNum = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000,
  };
 
const romanToInt = function(s) {
  //split the string into array
  var array = s.split('');
  // add variables
    let total = 0;
    let current;
    let currentValue;
    let next;
    let nextValue;

    //loop thru
    for( let i=0; i < array.length; i++){
      current = array[i];
      currentValue = romanToNum[current]
    
      if (i + 1 < array.length) {
        next = array[i+1];
        nextValue = romanToNum[next]
      }
      else {
        nextValue = 0;
      }

      if (currentValue < nextValue) {
        total -= (currentValue);
      } else {
        total += (currentValue);
      }
    }
    return total;
  }


console.log(romanToInt("XXIV")); 