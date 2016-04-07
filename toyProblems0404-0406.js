//
// -----***********----------***********-----
//
//Given an array, find the length of the longest increasing sequence.

function longestImprovement (numbers) {
	var counter = 1; 
	var max = 1;
	for (var i = 0; i < numbers.length ; i++){
		if (numbers[i] < numbers [i+1]){
			counter ++;
		}
		else {
			counter = 1;
		}
		if (max < counter){
			max = counter;
		}
	}
	return max; 
}
longestImprovement([ 10, 20, 30, 10, 20 ]);


//
// -----***********----------***********-----
//
// Looping Through Arrays
// Write a function that will create an array with every even number between 0 and a provided length (including 0 and not including the length), and then return an array with every one of those numbers multiplied by 3.

function looper (len) {
	var results = [];
	for (var i = 0; i < len -1; i+=2){
		results.push(i);
	};
	return results.map(function(element){
		return element * 3;
	})
}

looper(100);

//
// -----***********----------***********-----
//
// Zero Sum
// Given an array of negative/positive integers, return true if there exists two numbers whose sum is zero.

function zeroSum (numbers) {
	var checker = false;
	for (var i = 0; i < numbers.length; i++){
		for (var j = 1; j < numbers.length; j++){
			if (numbers[i] + numbers[j] === 0){
				checker = true;
			}
		}
	}
	return checker;
}

zeroSum([0,7,7,0])


//
// -----***********----------***********-----
//
// Highest Frequency
// Given a string of only lowercase alphabet characters, find the character that occurs the highest number of times. If any characters tie, return them all in alphabetical order.

function highestFreq (str) {
	var strObj = {}; 
	var max = 0;
	var results = [];
	for (var i = 0; i< str.length; i++){
		if (strObj[str[i]]!== undefined){
			strObj[str[i]]++; 
		}
		else {
			strObj[str[i]] = 1;
		}
	}
	console.log(strObj);
	for (var key in strObj){
		if( strObj[key] > max){
			max = strObj[key];
		}
	}
	 for(var key in strObj){
	 	if (strObj[key] === max){
	 		results.push(key);
	 	}
	 }
	 return results.sort().join(""); 

}


//{a:1,b:1,c:2,d:1}
//2

highestFreq("abcdc");

//
// -----***********----------***********-----
//

// write a function called each that loops through either an object or an array and runs a callback on each value in that collection
// write a function called map. Map will return a new array with each value in the collection after it has been ran through the callback.  Write a function named map that operates on an array, takes a callback, returns an array. What you return becomes the value of the element at that position on the new array.
//Write a function named filter that operates on an array. It takes a callback (sometimes called a predicate) that returns true or false. It returns an array composed of each element for which the callback returns true.
// Implement the built in javascript method reduce so that it can operate on arrays and objects...

var each = function(collection,callback){
	if (Array.isArray(collection)){
		for (var i = 0; i < collection.length; i++){
			callback(collection[i]);
		}
	} else {
		for (var key in collection){
			callback(collection[key]);
		}
	}
};

var map = function(collection, callback){
	var results = [];
	each(collection, function(element){
		results.push(callback(element));
	})
	return results; 
};

var filter = function(collection,predicate){
	var results = [];
	each(collection,function(element){
		if(predicate(element)){
			results.push(element);
		}
	})
	return results;
};

var reduce = function(collection,accumulator, startValue){
	each(collection,function(value){
		if(startValue === undefined){
			startValue = value; 
		} else {
			startValue = accumulator (startValue, value);
		}
	})
	return startValue; 
}

reduce([1,2,3,4], function(x,y){
	return x+y; 
})

//
// -----***********----------***********-----
//
// Mini puzzles:
// write a function that takes an array, add all the values which are greater than 3 and return the sum. 

var add3 = function(arr){
	return arr.filter(function(element){
				return element > 3
			}). reduce (function(x,y){
				return x+y;
			})
};
add3([1,2,3,4]);

//Make a for loop that console.logs all of the keys inside the object in the 2nd index of myArray

var myObject = {
  red: "red", 
  blue: "blue", 
  white: "white",
  silver: [2,3,4]
}

var myArray = [1, true, myObject, "hey"];

for (var key in myArray[2]){
	console.log(key);
}
// Write a function that takes in an object and returns an array of all keys whose values are an array or an object
var myfun = function(obj){
	var results= [];
	for (var key in obj){
		if (typeof obj[key] === "object"){
			results.push(key);
		}
	}
	return results;
}
myfun(myObject);

// Write code below that would remove the last value in myArray. Then add the removed value as the first value in myArray
var myArray = [true, 1, 2, "horse"];
myArray.unshift(myArray.pop());

// write a function that returns the sum of even numbers
var addEven = function(arr){
	return arr.filter(function(element){
		if (element % 2 === 0){
			return element;
		}
	}).reduce(function(num1,num2){
		return num1+num2;
	})
}

var addEven2 = function (arr){
	var results = [];
	var total = 0; 
	for (var i =0; i<arr.length; i++){
		if (arr[i] %2 === 0) {
			results.push(arr[i]);
		}		
	}
	for (var i = 0; i <results.length; i++){
		total += results[i];
	}
	return total;
}

addEven2([1,2,3,4]);

// check if any item in the array is a boolean value
function returnBoo (arr) { 
	return arr.filter(function(element){
		return typeof element === "boolean";
	})
}

function returnBoo2(arr) {
	var results = [];
	for (var i = 0; i < arr.length; i++){
		if (typeof arr[i] === "boolean"){
			results.push (arr[i]);
		}
	}
	return results;
}
var myArray = ["cat", "dog", false, true, "bird", 2];	

returnBoo2(myArray);

//charSum: Given a string of arbitrary size, convert each character into its integer equivalent and sum the entirety.

function charSum (str) {
	var total = 0;
	for (var i = 0; i < str.length; i++){
		if(Number(str[i])> 0){
			total += Number(str[i]);
		}
	}
	return total;
}

charSum("123"); 
charSum("cool2"); 


// Given a string, return true if it’s a palindrome, and false otherwise. Only consider alphabet characters as part of the word.


function isPalindrome (str) {
 	var checker = true;
	for (var i = 0; i < str.length; i++ ) {
		if(str[i] !== str [str.length-1-i]) {
			return false;
		}
	}
	return checker;
}

isPalindrome("kayak");
isPalindrome("racr");

//
// -----***********----------***********-----
//
// Arith Geo
// Using the JavaScript language, have the function ArithGeo(arr) take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements. 


function ArithGeo(arr) { 
	var checker = -1; 
	for(var i = 0; i < arr.length-2; i ++){
		if (arr[i+1] - arr[i] === arr[i+2] - arr[i+1]){
			checker = "Arithmetic";
		} else if (arr[i+1]/ arr[i] === arr[i+2] / arr[i+1]) {
			checker = "Geometric";
		} else {
			return -1; 
		}
	}
	return checker;
}
   
ArithGeo([1,2,3]);
ArithGeo([2,4,16,24]);
ArithGeo([5,10,15]);


//
// -----***********----------***********-----
//
// Array Addition I -- not solved
// Using the JavaScript language, have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers. 

function ArrayAdditionI(arr) { 
	var max = Math.max.apply(Math,arr);
	arr.splice(arr.indexOf(max),1);
	console.log(arr);
	var total = 0;
	var checker = "false";
	for(var i = 0; i< arr.length; i++){
		total += arr[i];
		if(total === max){
			checker = "true";
		}
	}
	return checker;        
}
ArrayAdditionI([3,5,-1,8,12]);


//
// -----***********----------***********-----
//
//Letter Count I
// Using the JavaScript language, have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces. 

function LetterCountI(str) { 
	var strArray = str.split(" ");
	var results = [];
	var max = 1;
	for (var i = 0; i < strArray.length; i++){
		results.splice(i,0,{});
		for (var j = 0; j<strArray[i].length; j++){

			if (results[i][strArray[i][j]] !== undefined){
				results[i][strArray[i][j]]++;
			} else {
				results[i][strArray[i][j]] = 1;
			}			
		}
	}
	for (var i = 0; i < results.length; i++){
		for (var key in results[i]){
			if (max <= results[i][key]){
				max = results[i][key];
			}
		}
	}
	if (max === 1) {
		return -1;
	} else {
		for (var i = 0; i < results.length; i++){
		for (var key in results[i]){
			if (max === results[i][key]){
				return strArray[i];
			}
		}
		} 
	}	       
}

LetterCountI("Hello apple pie");
LetterCountI("No words");

//
// -----***********----------***********-----
//
// Second GreatLow
// Using the JavaScript language, have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second lowest and second greatest numbers, respectively, separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers! 

function SecondGreatLow(arr) { 
	if (arr.length === 2){
		if(arr[0] > arr[1]) {
			return arr[0] + " " + arr[1];
		} else {
			return arr[1] + " " + arr[0];
		}
	} else {
		var greatest = Math.max.apply(Math, arr);
		var lowest = Math.min.apply(Math, arr);
		var newArr = [];
		for (var i = 0; i<arr.length; i++) {
			if (arr[i] !== greatest && arr[i] !== lowest){
				newArr.push(arr[i]);
			}
		}		
		console.log(newArr);
		if (newArr.length === 1){
			return newArr + " " + newArr;
		} else {
			var secondGreatest = Math.max.apply(Math, newArr);
			var secondLowest = Math.min.apply(Math, newArr);
			return secondLowest + " " + secondGreatest;
		}
	}         
}

SecondGreatLow( [10,30,6]);

//
// -----***********----------***********-----
//
// Count occurrences of a letter in a string

function countOcc (str,letter) {
	var count = 0;
	for (var i = 0 ; i< str.length; i++){
		if (str[i] === letter) {
			count ++; 
		}
	}
	return count; 
}

countOcc('hello world','l');

//
// -----***********----------***********-----
//
// Division Stringified
// Using the JavaScript language, have the function DivisionStringified(num1,num2) take both parameters being passed, divide num1 by num2, and return the result as a string with properly formatted commas. If an answer is only 3 digits long, return the number with no commas (ie. 2 / 3 should output "1"). For example: if num1 is 123456789 and num2 is 10000 the output should be "12,346". 

function DivisionStringified(num1,num2) {
	var factor = (Math.round(num1 / num2)).toString().split("").reverse();
  	var n = factor.length;
  	if(n >3) {
  		for (var i =3; i<n; i+=4){
  			factor.splice(i , 0, ",");
  		}		
  	}
  	console.log(factor);
  	return factor.reverse().join("");        
}

DivisionStringified(503394930,43);
