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

function divisionStringified2(num1, num2) {
	var currValue = Math.round(num1 / num2);
	var result = "";
	var count = 0;
	while (currValue > 0) {
		if (count == 3) {
			result = "," + result;
			count = 0;
		}
		result = (currValue % 10) + result;
		currValue = Math.floor(currValue / 10);
		count++
	}
	return result;
}

divisionStringified2(503394930,43);


//
// -----***********----------***********-----
//

// Counting Minutes I
// Using the JavaScript language, have the function CountingMinutesI(str) take the str parameter being passed which will be two times (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output should be 1320. 


function CountingMinutesI(str) { 
    var hours = 0, minutes = 0;
    var time = str.split("-");
    var colon1 = time[0].indexOf(":");
    var colon2 = time[1].indexOf(":");
    var startHour = Number(time[0].slice(0,colon1));
    var startMin = Number(time[0].slice(colon1+1,colon1+3));
    var endHour = Number(time[1].slice(0,colon2));
    var endMin = Number(time[1].slice(colon2+1,colon2+3));

    if (time[0].indexOf('pm') >-1){
        startHour += 12; 
        if(startHour === 24){
            startHour = 12;
        }
    } else {
        if(startHour === 12){
            startHour = 0;
        }
    }

    if (time[1].indexOf('pm') >-1){
        endHour += 12; 
        if(endHour === 24){
            endHour = 12;
        }
    } else {
        if(endHour === 12){
            endHour = 0;
        }
    }
    var startTotal = startHour * 60 + startMin;
    var endTotal = endHour * 60 + endMin;
    var result = endTotal - startTotal;
    if (result < 0) {
    	result += 24 * 60;
    }
    return result;  
}
   
// time = ['12:30pm' ,'12:00am']
//CountingMinutesI("1:03pm-1:00pm");
CountingMinutesI("12:30pm-12:00am"); 690
//CountingMinutesI("1:23am-1:24am"); //1425