// question #1 : longest palindrome

// used filter, get " dad  a racecar tlt"
function longestPalindrome(string){
	var reversedStr = "";
	var strArr = string.split(" ");
	
	for (var i = 0; i < strArr.length ; i++){
		for(var j =strArr[i].length-1; j>=0; j--) {
			reversedStr += strArr[i][j];
		}
		reversedStr += " ";
	}
	console.log(reversedStr);

	var palin = [];
	var index = -1;
	return reversedStr.split("").filter(function(letter){
		index++;
		console.log("letter: " + letter);
		console.log("string[index=: " + string[index])
		if(letter === string[index]){
			return palin.push(letter);
		}
	}).join("");

}
longestPalindrome("My dad is a racecar athlete");


//used reduce, "ae"
function longestPalindrome(string) {
  var originalArray = string.split('');
  console.log(originalArray)
//   var reverseArray = string.split('').reverse();
  var reverseArray = string.split(' ').map(function(item) { //item = "My".split('').reverse() => ['y', 'M'].join('') => 'yM' ['yM']
    return item.split('').reverse().join('');
  }).join('')
  
  var otherArray = reverseArray.split('')
  
  console.log(otherArray);
  
  var index = -1;
  return originalArray.reduce(function(acc, cur){
      index++;
      if (cur === reverseArray[index]){
        acc += cur;
      }
    return acc;
  }, "")
  
}

longestPalindrome("My dad is a racecar athlete");


// working... but only allow 1 longest palindrone
function longestPalindrome(string) {
  var strArr = string.split(' '); //["My", "dad", "is", "a", "racecar", "athlete"]
  var ourPalindromes = strArr.filter(function(element){ //["dad", "a", "racecar"]
    return element === element.split("").reverse().join("");
  });
  
  var finalPalin = ourPalindromes.reduce(function(acc,cur){
    if(acc.length > cur.length){
      return acc;
    } else {
      return cur;
    }
  })
  
  //access the index where racecar is

  var indexLeft = string.indexOf(finalPalin)-1;
  var indexRight = string.indexOf(finalPalin)+ finalPalin.length;
  var result = finalPalin.split("");

  while (indexLeft >=0 || indexRight < string.length){
    if(string[indexLeft] === string[indexRight]){
        result.unshift(string[indexLeft]);
        result.push(string[indexRight]);
    }
    indexLeft--;
    indexRight++;
  }
  return result.join("");
}

longestPalindrome("My dad is a racecar athlete");