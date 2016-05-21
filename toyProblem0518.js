// http://www.codewars.com/kata/a-chain-adding-function

function add(num1) {
	function helper(num1){
		return function(num2){
			if(num2 === undefined){
				num2 = 0;
			} else {
				return helper(num1 + num2)
			}
			return num1+ num2			
		}		
	}
	return helper(num1);
}

function add(n1) {
	return function(n2) {
		return n1 + n2;
	}
}

add(1)(2)(3); // 6
add(1)(2)(3)(4); // 10
add(1)(2)(3)(4)(5); // 15
function add(num1) {
	function helper(num1){
		return function(num2){
			if(num2 === undefined){
				num2 = 0;
			} else {
				return helper(num1 + num2)
			}
			return num1+ num2			
		}		
	}
	return helper(num1);
}
add(1)(2)(3); // 6
add(1)(2)(3)(4); // 10
add(1)(2)(3)(4)(5); // 15


// function add(num1) {
// 	var helper = function(num2){
// 		return add(num1+num2);
// 	};
// 	helper.valueOf = function(){
// 		return num1;
// 	}

// 	return helper(num1);
// }


// function add(n){
//   var fn = function(x) {
//     return add(n + x);
//   };
  
//   fn.valueOf = function() {
//     return n;
//   };
  
//   return fn;
// }







// http://www.codewars.com/kata/sum-of-pairs

var sum_pairs=function(ints, s){
	var resultArr= [];
	for(var i = 0; i <ints.length; i++){
		var newArr = ints.slice(i+1);
		var isFound = false;
		var result = newArr.reduce(function(accV,currV,index){
			if(ints[i] + currV === s && isFound === false){
				accV.push(ints[i],currV,index+i+1);
				isFound = true;
			}
			return accV;
		},[]);
		if(result.length >0) {
			resultArr.push(result);
		}		
	}

	if(resultArr.length===0){
		return undefined;
	} else if (resultArr.length === 1){
		return resultArr[0].slice(0,2);
	} else {
		var min = resultArr[0];
		for (var i =1; i < resultArr.length; i++){
			if(min[2] > resultArr[i][2]){
				min = resultArr[i];
			}
		}
		return min.slice(0,2);
	}	
}
sum_pairs([10,5,2,3,7,5],10) //[5,5,5],[3,7,4]
sum_pairs([4,3,2,3,4],6) // [3,7] 

// other solutions
var sum_pairs=function(ints, s){
  var seen = {}
  for (var i = 0; i < ints.length; ++i) {
    if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
    seen[ints[i]] = true
  }
}





// http://www.codewars.com/kata/merged-string-checker


function isMerge(s, part1, part2) {

  if (s.length !== part1.length + part2.length) {
  	return false;
  } else if (s.split('').sort().join('') !== (part1+part2).split('').sort().join('')){
  		return false;
  }
 
  var calLength = function(str){
	return s.split('').reduce(function(accVal,currentVal,index){
	  	if(currentVal === str[0]){
	  		accVal++;
	  		str = str.substring(1);
	  	}
	  	return accVal;
	},0)
  }	

  if(calLength(part1) + calLength(part2) >= s.length){
  	return true;
  } else {
  	return false;
  }
}
isMerge('','s','')
isMerge('codewars', 'cdw', 'oears');
isMerge("Bananas from Bahamas", "Bahas", "Bananas from am")

// other solution
function isMerge(s, part1, part2) {
  return !s ? !(part1 || part2) :
    s[0] == part1[0] && isMerge(s.slice(1), part1.slice(1), part2) ||
    s[0] == part2[0] && isMerge(s.slice(1), part1, part2.slice(1));
}

// #return !s ? !(part1 || part2) :#
// This is saying, "is s an empty string?" If it is, we check "!(part1 || part2)". Now, if part1 or part2 is anything other than an empty string, "(part1 || part2)" will evaluate to TRUE, and "!(part1 || part2)" -- which is what we're returning -- will be FALSE. You cannot have an empty string that's comprised of non-empty strings.

// BUT if s is not an empty string, we don't even do that "!(part1 || part2)" check, we move on along to the code after the ":".

// #s[0] == part1[0] && isMerge(s.slice(1), part1.slice(1), part2) # 

// Here's the tricky part, so hang on. We check the logical evaluation of "Is the first character of my target string equal to the first character in part1? AND is the recursive call AS FAR DOWN AS WE CAN GO also TRUE? And look at that isMerge() call. We send it s with 1 character removed, part1 with 1 character removed, and part2 unchanged. Imagine what that next call would look like. If originally we have:

// s: "FOOD", part1: "FOO", part2: "D"
// Our first call goes in, says "no, we're not an empty string", sees that s[0] == part10, and calls isMerge("OOD", "OO", "D"). This now runs the exact same checks on these slightly modified variables, finds that again, s[0] == part10, and we do isMerge("OD", "O", "D). And we do it again!

// This time, however, part1 is empty, and the last character is in part2. And that brings us to the last line of this elegant code:

// # || s[0] == part2[0] && isMerge(s.slice(1), part1, part2.slice(1)); #
// Here we finally check the part2 substring. We do it the exact same way as part1, and look how it's joined to part1, as an OR ( || ). So the way this is traversing our recursion is at every letter it's going one letter "into" part1, and one letter "into" part2, creating two paths.

// When does this crazy recursion end?! Simple. One of two things will happen first:

// 1) We get to a place where s[0] != part1[0] AND s[0] != part2[0]. Since JS is efficient in logical operators, it sees

// s[0] == part1[0] && isMerge(s.slice(1), part1.slice(1), part2)
// and just stops at the "&&". It already knows this "AND" is false, no need to go into more recursion.

// 2) We get to a point where there are no more characters to check in s, we've built s out of our crazxy recursion! We're done! WAIT! We need to make sure we don't have any extra characters in part1 or part2... oh yeah! That's the very first thing our program checks for! Hooray!

// And all these TRUE/FALSE checks suddenly propogate back up to the parent functions that called them, and we've got our answer.


// http://www.codewars.com/kata/moving-zeros-to-the-end
var moveZeros = function (arr) {
  var newArr = [];
  var zeroArr = [];
  arr.forEach(function(element){
  	if(element === 0){
  		zeroArr.push(element);
  	} else {
  		newArr.push(element);
  	}
  })
  return newArr.concat(zeroArr);
}
moveZeros([1,2,0,1,0,1,0,3,0,1]) //[ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]


// http://www.codewars.com/kata/directions-reduction
function dirReduc(arr){
	console.log(arr)
	var nArr = [arr[0]];
	for(var i = 1; i <arr.length; i++){		
		if(nArr.length === 0 || !isOpposite(nArr[nArr.length-1],arr[i])){
			nArr.push(arr[i]);
		} else {
			nArr.pop();
		}		
	}

	function isOpposite(dir1,dir2) {
		var northSouth = ['NORTH','SOUTH'], eastWest = ['EAST','WEST'];
		if(dir1 === dir2){
			return false;
		} else if(northSouth.indexOf(dir1) !== -1 && northSouth.indexOf(dir2) !== -1){
			return true;
		} else if (eastWest.indexOf(dir1) !== -1 && eastWest.indexOf(dir2) !== -1){
			return true;
		} else {
			return false;
		}
	}
	return nArr;
}
dirReduc([ 'EAST','EAST','WEST','NORTH','WEST','EAST','EAST',
'SOUTH','NORTH','WEST' ])
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);


// other solutions


function dirReduc(plan) {
  var opposite = {
    'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
  return plan.reduce(function(dirs, dir){
      if (dirs[dirs.length - 1] === opposite[dir])
        dirs.pop();
      else
        dirs.push(dir);
      return dirs;
    }, []);
}

// another
function isOppo(dir1,dir2) {
    if (dir1 + dir2 === 'SOUTHNORTH') return true;
    if (dir1 + dir2 === 'NORTHSOUTH') return true;
    if (dir1 + dir2 === 'EASTWEST') return true;
    if (dir1 + dir2 === 'WESTEAST') return true;
    return false;
}
  
function dirReduc(arr){
  var len = arr.length
  for (var i = 0; i < len - 1; i++) {
    if (isOppo(arr[i], arr[i+1])) {
      arr.splice(i,2);
      return dirReduc(arr);
    }
  }
  return arr;
}

// http://www.codewars.com/kata/evil-autocorrect-prank
function autocorrect(input){
	console.log(input)
  var target = /\b(you+|u)\b/ig; 
  var last = input.substring(input.length-1);
  return input.substring(0,input.length-1).split(' ').map(function(element){
  	if(element.match(target) !== null){
  		element = 'your sister';
  	}
  	return element;
  }).join(' ') + last;
}

function autocorrect(input){
	console.log(input.split(' '))
  var target = /\b(you+|u)\b/ig;
  var punc = /[!?.,~]/g; 
  return input.split(' ').map(function(element){
  	if(element.match(target) !== null){
  		if (element.match(punc)!== null) {
  			element = 'your sister' + element.substring(element.length-1);
  		} else {
  			element = 'your sister';
  		} 		
  	} 
  	return element;
  }).join(' ');
}

//other solution
function autocorrect(input){
  return input.replace(/\b(you+|u)\b/gi, "your sister");
}
autocorrect('Can\'t wait to see youuuuu!') // ['i','miss','you','today!']