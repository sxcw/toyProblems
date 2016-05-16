// *****=========================================
// *****=========================================
// *****=========================================
// *****=========================================
// *****=========================================
// http://www.codewars.com/kata/number-climber

function climb(n,results){
	results = results || [n];
    n = Math.floor(n/2);
    if(n === 1){
    	return results.unshift(1);
    } else {
    	results.unshift(n);
    	climb(n,results);
    }
    return results;
}
climb(10) //[1,2,5,10]

// Ryan's solution
function climb(n){
  var result = [n]
  if (n === 1) {
    return result;
  }
  return climb(Math.floor(n/2)).concat(result); 
}

climb(10)