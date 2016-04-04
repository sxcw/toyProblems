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