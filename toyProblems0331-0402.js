//
// -----***********----------***********-----
//
// Character Sum
// Given a string of arbitrary size, convert each character into its integer equivalent and sum the entirety.

function charSum (str) {
	var results = [];
	var total = 0;
	for (var i=0; i < str.length; i++){
		if ( Number(str[i]) > 0) {
			total += Number(str[i]);
		}	
	}
	return total;
}
charSum("123cool!");


function charSum (str) {
	var strArr = [];
	var total = 0;
	for (var i = 0 ; i <str.length; i++){
		strArr.push(Number(str[i]));
		if(strArr[i] > 0) {
			total += strArr[i];
		}
	}
	return total;
}
charSum("123cool!");


function charSum (str) {
	var strArr = [];
	var total = 0;
	for (var i = 0 ; i <str.length; i++){
		strArr.push(Number(str[i]));
		if(isNaN(strArr[i])) {
			strArr[i] = 0;
		}
		total += strArr[i];

	}
	return total;
}
charSum("123cool!");



function charSum (str) {
	var patt1 = /^[0-9]*$/g;
	console.log(patt1);
	var num = str.replace(patt1," ");
	console.log(num);
}
charSum("123cool!");

//
// -----***********----------***********-----
//

// Bubble Sort
// Bubble sort is considered the most basic sorting algorithm in Computer Science. It works by starting at the first element of an array and comparing it to the second element:

// If the first element is greater than the second element, it swaps the two.
// It then compares the second to the third, and the third to the fourth, and so on.
// In this way, the largest values ‘bubble’ to the end of the array.
// Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
// Implement a function that takes an array and sorts it using this technique.

// NOTE: DO NOT use JavaScript’s built-in sorting function (Array.prototype.sort).
var bubbleSort = function(array) {
	var temp1 = 0,temp2 = 0, isSorted = true;

	for (var i = 0; i < array.length; i++) {
		if (array[i] > array[i+1]){
			isSorted = false;
			temp1 = array[i];
			temp2 = array[i+1]
			array[i+1] = temp1;
			array[i] = temp2;
		}
	}
	if(isSorted === false) {
		bubbleSort();
	}
	return array;
}
bubbleSort([20, -10, -10, 2, 4, 299]);



//
// -----***********----------***********-----
//
// Array Middle
// Given an array of negative/positive integers, return the element in the center position of the array.

// If the array has an even number of elements, return the average of the two middle elements instead.
function middle (numbers) {
	var index = Math.floor(numbers.length/2); 
	if (numbers.length % 2 === 1){
		return numbers[index];
	} else {
		return (numbers[index] + 
		numbers[index-1]) /2; 
	}

}
middle([ 200, 5, 10,100 ]);



//
// -----***********----------***********-----
//

// Array Max
// Given an array of negative/positive integers, find the largest element. DO NOT use Math.max
function max (numbers) {
	var biggest = numbers.reduce(function(x,y){
		if (x>y){
			return x;
		} else {
			return y;
		}
	})
	return biggest;
}
max ([ 20]);


//
// -----***********----------***********-----
//
//http://www.codewars.com/kata/remove-the-minimum
//The museum of incredible dull things. The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating. However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task

// Given an array of integers, remove the smallest value. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples

// removeSmallest([1,2,3,4,5]) = [2,3,4,5]
// removeSmallest([5,3,2,1,4]) = [5,3,2,4]
// removeSmallest([2,2,1,2,1]) = [2,2,2,1]




function removeSmallest(numbers) {
	var min = 1;
	for (var i = 0; i < numbers.length; i++){
		if (min > numbers[i]){
			min = numbers[i];
		}
	}
	numbers.splice(numbers.indexOf(min),1);
	return numbers;
}
removeSmallest([1, 2, 3, 4, 5]);


function removeSmallest(numbers) {
	var min = Math.min.apply(Math,numbers);
	numbers.splice(numbers.indexOf(min),1);
	return numbers;
}
removeSmallest([1, 2, 3, 4, 5]);


// useful resource:  http://stackoverflow.com/questions/1986896/what-is-the-difference-between-call-and-apply

function theFunction(name, profession) {
    console.log("My name is " + name + " and I am a " + profession + ".");
}
theFunction("John", "fireman");
theFunction.apply(undefined, ["Susan", "school teacher"]);
theFunction.call(undefined, "Claude", "mathematician");

// My name is John and I am a fireman.
// My name is Susan and I am a school teacher.
// My name is Claude and I am a mathematician.



//
// -----***********----------***********-----
//
//http://www.codewars.com/kata/the-coupon-code
//Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Your mission: 
// Write a function called checkCoupon to verify that a coupon is valid and not expired. If the coupon is good, return true. Otherwise, return false.

// A coupon expires at the END of the expiration date. All dates will be passed in as strings in this format: "June 15, 2014"
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode === correctCode ? (
  		Date.parse(currentDate) < Date.parse(expirationDate)? true : false
  	):(
  	false);
}


checkCoupon('123','123','September 5, 2014','October 1, 2014')


function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  if(enteredCode === correctCode){
  	if (Date.parse(currentDate) < Date.parse(expirationDate)){
  		return true;
  	} else {
  		return false;
  	}
  } else {
  	return false;
  }
}
checkCoupon('123a','123','September 5, 2014','October 1, 2014');


//
// -----***********----------***********-----
//
//http://www.codewars.com/kata/list-to-array
// Lists are data structures composed of nested objects, each containing a single value and a reference to the next object.

// Here's an example of a list in JavaScript:

// {value: 1, next: {value: 2, next: {value: 3, next: null}}}
// In Python, lists will be represented by a preloaded LinkedList class with the members value and next. Here's an example:

// LinkedList(1, LinkedList(2, LinkedList(3)))
// Write a function listToArray (or list_to_array in Python) that converts a list to an array, like this:

// [1, 2, 3]
// Assume all inputs are valid lists with at least one value. For the purpose of simplicity, all values will be either numbers, strings, or Booleans.
function listToArray(list) {
	var results = [];
	for (var key in list) {
		if (typeof list[key] === "number"){
			results.push(list[key]);
		} else {
			results = results.concat(listToArray(list[key]));
		}
	}
	console.log(results);
 	return results;
}
listToArray({value: 1, next: {value: 2, next: {value: 3, next: null}}}
)

// (double)
// single linked list
// guai's solution
function listToArray(list) {
	var results = [];
	var currNode = list;
	while (currNode["next"] != null) {
		results.push(currNode["value"]);
		currNode = currNode["next"];
	}
	results.push(currNode["value"]);
	return results;
}

var node3 = {value: 3, next: null};
var node2 = {value: 2, next: node3};
var node1 = {value: 1, next: node2};
listToArray2(node1);

// original way, not recommended, unnecessary complexity 
function listToArray(list) {
	var results = [];
	for (var key in list) {
		if (typeof list[key] === "number"){
			results.push(list[key]);
		} else {
			results = results.concat(listToArray(list[key]));
		}
	}
	console.log(results);
 	return results;
}
listToArray({value: 1, next: {value: 2, next: {value: 3, next: null}}}
)

// other solution
function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.next)
    array.push(node.value);
  return array;
}
function listToArray(list) {
  let res = [];
  do {
    res.push(list.value);
  } while (list = list.next);
  return res;
}


//
// -----***********----------***********-----
//

// http://www.codewars.com/kata/find-the-next-perfect-square

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square, than -1 should be returned. You may assume the parameter is positive.

// Examples:

// findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfect

function findNextSquare(sq) {
  // Return the next square if sq if a perfect square, -1 otherwise
  var num  = Math.sqrt(sq);
  if (num %1 === 0){
  	return (num + 1) * (num + 1);
  } else {
  	return -1;
  }
}

findNextSquare(114);

//other solution
function findNextSquare(sq) {
  var number = Math.sqrt(sq);
  if(Math.round(number) === number) {
    return Math.pow(++number, 2)
  }
  return -1;
}

function findNextSquare(sq) {
  return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
}
//
// -----***********----------***********-----
//

//http://www.codewars.com/kata/jaden-casing-strings
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function () {
   return this.split(" ").map(function(ele){
   		 return ele[0].toUpperCase() + ele.slice(1);
   }).join(" ");
};

("How can mirrors be real").toJadenCase();

// other solution
String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}

String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
};
// "Find the beginning of the string or the next white space character."



//
// -----***********----------***********-----
//

//http://www.codewars.com/kata/binary-addition
// Implement a function that successfully adds two numbers together and returns their solution in binary. The conversion can be done before, or after the addition of the two.

//The binary number returned should be a string!

function addBinary(a,b){
	return (a+b).toString(2);
}

addBinary(2,1);


//
// -----***********----------***********-----
//

// http://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

// Given two integers, which can be positive and negative, find the sum of all the numbers between including them too and return it. If both numbers are equal return a or b.

// Note! a and b are not ordered!

// Example: 
// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

function GetSum( a,b ){
	var total = 0;
	if (a === b){
		return a;
	} else if (b > a){
		for (var i = a; i <=  b ; i++){
			total += i;
		}
		return total;
	} else {
		for (var i = b; i <=  a ; i++){
			total += i;
		}
	}
}

GetSum(2,5);  


function GetSum( a,b ){
	var total = 0;
	if (a === b){
		return a;
	} else if (b > a){
		for (var i = a; i <=  b ; i++){
			total += i;
		}		
	} else {
		for (var i = b; i <=  a ; i++){
			total += i;
		}
	}
	return total;
}
GetSum((0,-1),-1);  

//other solution 

function GetSum( a,b )
{
   if (a == b) return a;
   else if (a < b) return a + GetSum(a+1, b);
   else return a + GetSum(a-1,b);
}

GetSum(2,5); 

const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}

//
// -----***********----------***********-----
//

// Using the JavaScript language, have the function ExOh(str) take the str parameter being passed and return the string true if there is an equal number of x's and o's, otherwise return the string false. Only these two letters will be entered in the string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's. 

function ExOh(str) { 
	var xCount = 0, oCount = 0;
	for(var i=0; i<str.length; i++){
		if(str[i]=== "x"){
			xCount++;
		} else{
			oCount++;
		}
	}
	if (xCount === oCount){
		return true;
	} else {
		return false;
	}
}
ExOh("xooxxo");

// official solution
function WordCount(str) { 

  // we split the string with the separator being
  // the x's and o's and compare them

  // this returns a string containing only o's
  var x = str.split("x").join("");

  // this returns a string containing only x's
  var o = str.split("o").join("");

  // see if their lengths are equal
  return x.length === o.length;
         
}
   
WordCount("xooox"); 

//
// -----***********----------***********-----
//

// Using the JavaScript language, have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string. 

function Palindrome(str) { 
	var checker = true;
	var newStr = str.split(" ").join("");
	for (var i = 0; i<newStr.length; i++){
		if (newStr[i] !== newStr[newStr.length-1-i]){
			checker = false; 
		}
	}
	return checker;        
}
   
Palindrome("never odd or even");


//
// -----***********----------***********-----
//


// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// doubleChar("String") ==> "SSttrriinngg"

// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

// doubleChar("1234!_ ") ==> "11223344!!__  "

function doubleChar(str) {
  	var newStr = "" ; 
  	for (var i =0; i<str.length; i++){
  		newStr += str[i] + str[i];
  	}
  	return newStr;
}
doubleChar("String");

// other solution
function doubleChar(str) {
  return str.split("").map(function (c) {
    return c + c;
  }).join("");
}

function doubleChar(str) {
  return str.replace(/(.)/g, "$1$1")
}
doubleChar("String");


//
// -----***********----------***********-----
//

//Each year, Society for Exciting Computer Science Research (SECSR) organizes several conferences around the world. Lucy always picks one conference from that list that is hosted in a city she hasn't been to before, and if that leaves her with more than one option, she picks the conference that she thinks would be most relevant for her field of research. Write a function conferencePicker that takes in two arguments:

//citiesVisited, a list of cities that Lucy has visited before, given as an array of strings.
//citiesOffered, a list of cities that will host SECSR conferences this year, given as an array of strings. citiesOffered will already be ordered in terms of the relevance of the conferences for Lucy's research (from the most to the least relevant).
//The function should return the city that Lucy should visit, as a string.

// citiesVisited = ['Mexico City','Johannesburg','Stockholm','Osaka','Saint Petersburg','London'];
// citiesOffered = ['Stockholm','Paris','Melbourne'];

// conferencePicker (citiesVisited, citiesOffered);
// ---> 'Paris'

function conferencePicker (citiesVisited, citiesOffered) {
	var results = [];
	for ( var i = 0; i < citiesOffered. length; i++){
		if (citiesVisited.indexOf(citiesOffered[i])=== -1){
			results.push(citiesOffered[i]);
		}
	}
	console.log(results);
	if (results.length === 0) {
		return "No worthwhile conferences this year!"
	} else {
		return results[0];
	}
}

conferencePicker(['Mexico City','Johannesburg','Stockholm','Osaka','Saint Petersburg','London'],['Stockholm','Paris','Melbourne']);


//
// -----***********----------***********-----
//

// As a part of this Kata, you need to create three functions that one needs to be able to call upon an array:

// all

// This function returns true only if the predicate supplied returns true for all the items in the array

// [1, 2, 3].all(isGreaterThanZero) => true
// [-1, 0, 2].all(isGreaterThanZero) => false
// none

// This function returns true only if the predicate supplied returns false for all the items in the array

// [-1, 2, 3].none(isLessThanZero) => false
// [-1, -2, -3].none(isGreaterThanZero) => true
// any

// This function returns true if at least one of the items in the array returns true for the predicate supplied

// [-1, 2, 3].any(isGreaterThanZero) => true
// [-1, -2, -3].any(isGreaterThanZero) => false
// You do not need to worry about the data supplied, it will be an array at all times.

Array.prototype.all = function (p) {
	for (var i = 0; i < this.length; i++){
		if (!p(this[i])){
			return false;
		}
	}
	return true;
};

Array.prototype.none = function (p) {
	for (var i = 0; i < this.length; i++){
		if (p(this[i])){
			return false;
		}
	}
	return true;
};

Array.prototype.any = function (p) {
  for (var i = 0; i < this.length; i++){
		if (p(this[i])){
			return true;
		}
	}
   return false;
};

function isGreaterThanZero (num) {
  return num > 0;
}

function isLessThanZero (num) {
  return num < 0;
}

[-1, -2, 3].any(isGreaterThanZero)

// great solution 
Array.prototype.all = function (p) {
  return this.filter(p).length == this.length;
};

Array.prototype.none = function (p) {
  return this.filter(p).length == 0;
};

Array.prototype.any = function (p) {
  return this.filter(p).length > 0;
};



