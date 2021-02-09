function FirstNotRepeatingChar(str) {
  let countmap = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (countmap.hasOwnProperty(char)) {
      countmap[char] = countmap[char] + 1;
    } else {
      countmap[char] = 1;
    }

    var nonRepeatingFound = false;

    for (var key in countmap) {
      if (countmap[key] == 1) {
        console.log(key);
        nonRepeatingFound = true;
        break;
      }
    }

    if (!nonRepeatingFound) {
      console.log(-1);
    }
  }
}

FirstNotRepeatingChar("aabc"); //a,-1,b,b
