// *****=========================================
// *****=========================================
// *****=========================================
// *****=========================================
// *****=========================================
//http://www.codewars.com/kata/stringing-me-along

var result = [];
function createMessage(str) {

  if(str === undefined) {
  	return result.join(" ");
  } else {
  	result.push(str);
  	return function(next){
  		return createMessage(next);
  	}
  }
}
createMessage("Hello")("World!")("how")("are")("you?")(); 

// other solution
function createMessage(msg) {

  return function helper(str){
    if (str) {
      msg += ' ' + str;
      return helper;
    } else {
      return msg;
    }
  };
}
createMessage("Hello")("World!")("how")("are")("you?")(); 

function createMessage(a) {
	return function (b){
		if (!b) {return a;}
		return createMessage(a+" "+b);

	}
}

createMessage("Hello")("World!")("how")("are")("you?")(); 


// my second try

function createMessage(str) {
  	return function(next){
      if (next === undefined) {return str;}
  		return createMessage(str + " "+ next);
  	}
}


// *****=========================================
// *****=========================================
// *****=========================================
// *****=========================================
// *****=========================================
//http://www.codewars.com/kata/raise-me-to-the-third-power-search-my-divisors-dot-dot-dot-dot-dot-dot-could-you-believe-that


function intCubeSumDiv(n) {
    // your code
}

// *****=========================================
// *****=========================================
// *****=========================================
// *****=========================================
// *****=========================================
// http://www.codewars.com/kata/longest-palindrome

// working but with bugs -- "aab"
longestPalindrome=function(s){
	var highestCount = 0;
	for (var i = 0; i < s.length; i++){
		var reverse = s.split("").reverse();
  		var count = -1;
  		var palinNum = reverse.reduce(function(accValue,currentValue){
		  	count ++; 
		  	if (currentValue === s[count] ){
		  		accValue += currentValue;
		  	}
		  	return accValue;
		  },"").length;
  		if(palinNum > highestCount) {
  			highestCount = palinNum; 
  		}
  		s = s.substring(1);
	}
	return highestCount;
}
longestPalindrome("aab");


// variation: working but with one bug-- cannot solve dcbaabcd
longestPalindrome=function(s){
	var finalPalin = "";
	for (var i = 0; i < s.length; i++){
		var reverse = s.split("").reverse();
  		var count = -1;
  		var palin = reverse.reduce(function(accValue,currentValue){
		  	count ++; 
		  	if (currentValue === s[count] ){
		  		accValue += currentValue;
		  	}
		  	return accValue;
		  },"");
  		if(palin.length > finalPalin.length) {
  			finalPalin = palin; 
  		}
  		s = s.substring(1);
	}
	return finalPalin;

  
}


longestPalindrome("My dad is a racecar athlete")
longestPalindrome("cbaabc");

longestPalindrome("baablkj12345432133d");

longestPalindrome("dcbaabcd345433");




var longestPalindrome = function(s){
	if (s.length === 1){
		return 1;
	} else if (s.length === 2 && s[0] === s[1]){
		return 2;
	}
	var highestCount = 0;
	for (var i = 1, j = 1, k = 1;i < s.length; i++){
		var keepChecking = true;
		var count = 1;
		while (s[i-j] === s[i+j] && keepChecking === true){			
			count += 2;
			j++;

			if (s[i-j] === undefined || s[i+j] === undefined){
				keepChecking = false;
			}
		}
		while (s[i] === s[i-1] && keepChecking === true) {		
			if (s[i+k] === s[i-1-k]){
				console.log(s[i+k]);
				console.log(s[i-1-k])
				count += 2;				
			}
			k++;
			if (s[i+k] === undefined || s[i-1-k] === undefined){
				keepChecking = false;
				count++;
			}
		}
		if (count > highestCount) {
			highestCount = count; 
		}
	}
	return highestCount;
}




// working but fail 1 test case

var longestPalindrome = function(s){
	if (s.length === 1){
		return 1;
	} else if (s.length === 0) {
		return 0;
	}
	var highestCount = 0;
	for (var i = 1, j = 1, k = 1;i < s.length; i++){
		var keepChecking = true;
		var count = 1;
		while (s[i-j] === s[i+j] && keepChecking === true){			
			count += 2;
			j++;

			if (s[i-j] === undefined || s[i+j] === undefined){
				keepChecking = false;
			}
		}
		while (s[i] === s[i-1] && keepChecking === true) {	
			if (s[i+k] === undefined || s[i-1-k] === undefined){
				keepChecking = false;
				count++;
			}	
			if (s[i+k] === s[i-1-k] && keepChecking === true){
				console.log(s[i+k]);
				console.log(s[i-1-k])
				count += 2;				
			}
			k++;			
		}
		if (count > highestCount) {
			highestCount = count; 
		}
	}
	return highestCount;
}

longestPalindrome("I like racecars that go fast")
longestPalindrome("aa");

longestPalindrome("baablkj12345432133d");

longestPalindrome("dcbaabcdlkj3454333d");






var longestPalindrome = function(s) {
  console.log(s);
	if (s.length == 0) {
		return 0;
	}
	var maxPal = 1;
	for (var i = 1; i < s.length; i++) {
		var currPal = 1;
		var li = i - 1;
		if (s[i - 1] == s[i]) {
			li--;
			currPal++;
		}
		var ri = i + 1;
		while (li >= 0 && ri <= s.length && s[li] == s[ri]) {
			currPal += 2;
			li--;
			ri++;
		}
		if (currPal > maxPal) {
			maxPal = currPal;
		}
	}
	return maxPal;
}
longestPalindrome("3454333d");



// *****=========================================
// *****=========================================
// *****=========================================
// *****=========================================
// *****=========================================
//http://www.codewars.com/kata/triangle-type

/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/

function triangleType(a, b, c){
	var newArr = [a,b,c].sort(function(x,y){
		return x-y;
	});
	var max = newArr [2];
	var sq1 = newArr[0] * newArr[0];
	var sq2 = newArr[1] * newArr[1];
	if (max >= newArr[0] + newArr[1]){
		return 0;
	}
	if (max * max < sq1 + sq2) {
		return 1;
	} else if(max*max === sq1 + sq2){
		return 2;
	} else if (max * max > sq1 + sq2) {
		return 3;
	}
}
triangleType(7,3,2);


// other solution
function triangleType(a, b, c){
  var max = Math.max(a,b,c);
  
  if (a+b+c <= 2*max) return 0;
  if (2*max*max == a*a+b*b+c*c) return 2;
  if (2*max*max >  a*a+b*b+c*c) return 3;
  return 1;
}


function triangleType(a, b, c){
var radC = Math.acos((c*c - a*a - b*b)/(-2*a*b));
var radB = Math.acos((b*b - a*a - c*c)/(-2*a*c));
var radA = Math.acos((a*a - c*c - b*b)/(-2*c*b));
if (radA === 0 || radB === 0 || radC === 0) return 0;
else if ( radA < Math.PI/2 && radB < Math.PI/2 && radC < Math.PI/2) return 1;
else if ( radA === Math.PI/2 || radB === Math.PI/2 || radC === Math.PI/2) return 2;
else if ( radA > Math.PI/2 || radB > Math.PI/2 || radC > Math.PI/2) return 3;
else return 0;
}

// *****=========================================
// *****=========================================
// *****=========================================
// *****=========================================
// *****=========================================
// http://www.codewars.com/kata/unique-in-order

var uniqueInOrder = function(iterable){
	if (iterable.length === 0){
		return [];
	}
	var count = 0;
  	return [].reduce.call(iterable,function(accValue,currentValue){
	  	count++;
	  	if (iterable[count] === undefined){
	  		return accValue;
	  	}
	  	if (currentValue !== iterable[count]){
	  		accValue.push(iterable[count]); 
	  	}
	  	return accValue;

	  },[iterable[count]])
}

uniqueInOrder('AAAABBBCCDAABBB'); // ['A', 'B', 'C', 'D', 'A', 'B']

var uniqueInOrder = function(iterable){
	return [].reduce.call(iterable,function(a,b){
		console.log(a[a.length-1]);
		console.log(b)
		if(a[a.length-1] !== b){
			a.push(b);
		}
		return a;
	},[])
}
uniqueInOrder('AAAABBBCCDAABBB'); 


// other solution
function uniqueInOrder(it) {
  var result = []
  var last
  
  for (var i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      result.push(last = it[i])
    }
  }
  
  return result
}

// *****=========================================
// *****=========================================
// *****=========================================
// *****=========================================
// *****=========================================
//http://www.codewars.com/kata/harshad-or-niven-numbers

/**
 * Utility class for Harshad numbers (also called Niven numbers).
 *
 * @namespace Harshad
 */

var Harshad = ( function() {
  'use strict';

  return {
    /**
     * Returns true when the given number is a valid Harshad number.
     *
     * @param {Number} number The given number
     * @returns {Boolean}
     * @function Harshad.isValid
     */
    isValid: function( number ) {
      // Your implementation goes here
      var result = 0;
      number.toString().split("").forEach(function(element){
      	 	result += Number(element);
      });
      return number % result === 0 ? true: false; 
    },
    /**
     * Gets the next Harshad number after the given number.
     *
     * @param {Number} number The given number
     * @returns {Number}
     * @function Harshad.getNext
     */
    getNext: function( number ) {
      // Your implementation goes here
      do{
      		number++;
      } while(!this.isValid(number));
      return number;

    },
    /**
     * Returns the suite of Harshad numbers, starting after a given number.
     *
     * @param {Number} count The number of elements to return
     * @param {Number} start The number after which the serie should start;
     *  defaults to 0
     * @returns {Array}
     * @function Harshad.getSerie
     */
    getSerie: function( count, start ) {
      // Your implementation goes here
     if (start === undefined) {
      	start = 0;
      }
      var result = [];
      for (var i = 0; i < count; i++){
      	result.push(this.getNext(start));
      	start = result[i];
      }
      return result;
    }
  };

} () );

//Harshad.isValid(23);
//Harshad.getNext(28);
Harshad.getSerie(10);
