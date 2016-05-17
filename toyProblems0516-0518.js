// *****=========================================
// *****=========================================
// *****=========================================
// *****=========================================
// *****=========================================
// http://www.codewars.com/kata/your-order-please

function order(words){
  if(words === "" || words === null){
    return "";
  }
  var arr = words.split(' ');
  console.log(arr)
  var numArr = [];
  for (var i =0 ; i<arr.length; i++){
    numArr[(Number(arr[i].match(/\d+/g).join([])))-1] = arr[i];
  }
  return numArr.join(' ');
}


order("is2 This1 a3 test4")

// *****=========================================
// *****=========================================
// *****=========================================
// *****=========================================
// *****=========================================
// http://www.codewars.com/kata/take-a-ten-minute-walk

function isValidWalk(walk) {
  if (walk.length % 2 !== 0 || walk.length !== 10){
    return false;
  }
  var resultObj = {};
  walk.forEach(function(dir){
    if(!resultObj[dir]){
      resultObj[dir] = 1;
    } else {
      resultObj[dir]++;
    }
  })
  if(resultObj['n'] === resultObj['s'] && resultObj['w'] === resultObj['e']){
    return true;
  } else {
    return false;
  }
}
isValidWalk(['n','n','n','s','n','s','n','s','n','s'])
isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])
isValidWalk(['w'])


// *****=========================================
// *****=========================================
// *****=========================================
// *****=========================================
// *****=========================================
// http://www.codewars.com/kata/weird-string-case

function toWeirdCase(string){
  var newString = "";
  string.split(' ').forEach(function(element){
    for(var i =0; i<element.length; i++){
      if(i%2===0){
        newString += element[i].toUpperCase();
      }else{
        newString += element[i].toLowerCase();
      }
    }
    newString+= " ";
  })
  return newString.trim(" ");
}

toWeirdCase('word awesome');

// other solution
function toWeirdCase(string){
  return string.split(' ').map(function(word){
    return word.split('').map(function(letter, index){
      return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
    }).join('');
  }).join(' ');
}



// *****=========================================
// *****=========================================
// *****=========================================
// *****=========================================
// *****=========================================
// http://www.codewars.com/kata/tribonacci-sequence

function tribonacci(signature,n){
	var array = signature;
	if(n < 4 && n >= 0){
		return array.slice(0,n);
	}
	function helper(array,n) {
		if(array[n] !== undefined) {
			return array[n];
		}
		if (n <= 2){
  			return array[n];
  		} else {
  			return array[n] = helper(array,n-1) + helper(array,n-2) + helper(array,n-3);
  		}
	}
	helper(array,n-1);
	return array;  
}
tribonacci([1,1,1],1)
tribonacci([1,1,1],10) // [1,1,1,3,5,9,17,31,57,105]
tribonacci([0,0,1],10) // [0,0,1,1,2,4,7,13,24,44]
 //[1]
tribonacci([300,200,100],0) //[]
tribonacci([1,2,3],10) // [1,2,3,6,11,20,37,68,125,230])

tribonacci([0.5,0.5,0.5],30) // [0.5,0.5,0.5,1.5,2.5,4.5,8.5,15.5,28.5,52.5,96.5,177.5,326.5,600.5,1104.5,2031.5,3736.5,6872.5,12640.5,23249.5,42762.5,78652.5,144664.5,266079.5,489396.5,900140.5,1655616.5,3045153.5,5600910.5,10301680.5])

// other solution, efficient
function tribonacci(signature,n){  
  for (var i = 0; i < n-3; i++) { // iterate n times
    signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
  }
  return signature.slice(0, n); //return trib - length of n
}




// *****=========================================
// *****=========================================
// *****=========================================
// *****=========================================
// *****=========================================
// http://www.codewars.com/kata/find-the-divisors

function divisors(integer) {
  var result = [];
  for(var i = 2; i <= Math.floor(integer/2) ; i++){
  	if(integer % i ===0){
  		result.push(i);
  	}
  }
  if(result.length === 0){
  	return integer + " is prime"
  } else {
  	return result;
  }
};

divisors(12) // [2,3,4,6]
divisors(13) // "13 is prime"





// *****=========================================
// *****=========================================
// *****=========================================
// *****=========================================
// *****=========================================
// http://www.codewars.com/kata/title-case  

function titleCase(title, minorWords) {
  if(title === undefined || title === "") {
  	return "";
  } else {
  	return title.toLowerCase().split(' ').map(function(word,index){ 	
	  	if (minorWords !== undefined && index > 0 && minorWords.toLowerCase().split(' ').indexOf(word) > -1){
	  		word = word.toLowerCase();
	  	} else {
	  		word = word.substring(0,1).toUpperCase()+ word.substring(1).toLowerCase();
	  	}
	  	return word;
  	}).join(' ');
  } 
}

titleCase("a clash of KINGS","a an the of");  // A Clash of Kings
titleCase('THE WIND IN THE WILLOWS','The In') // The Wind in the Willows









