//
// -----***********----------***********-----
//

var players = [{ 
    "name": "Stephen Curry",
    "team": "OKC",
    "gamesPlayed":   40,
    "minutesPerGame": 34.3,
    "trueShootingPercentage": .679,
    "assistRatio": 19.9,
    "turnoverRatio": 10.7,
    "usageRate": 31.4,
    "offsensiveReboundRate": 2.5,
    "defensiveReboundRate":  13.5,
    "reboundRate": 8.3,
    "playerEfficiencyRating": 32.26,
    "valueAdded": 429.6,
    "estimatedWinAverage": 14.3 
},
{ 
    "name": "Russell Westbrook",
    "team": "OKC",
    "gamesPlayed":   43,
    "minutesPerGame": 33.9,
    "trueShootingPercentage": .554,
    "assistRatio": 27.1,
    "turnoverRatio": 11.8,
    "usageRate": 34.2,
    "offsensiveReboundRate": 5.7,
    "defensiveReboundRate":  16.7,
    "reboundRate": 11.5,
    "playerEfficiencyRating": 29.30,
    "valueAdded": 398.2,
    "estimatedWinAverage": 13.3 
},
{ 
    "name": "Kevin Durant",
    "team": "OKC",
    "gamesPlayed": 36,
    "minutesPerGame": 35.6,
    "trueShootingPercentage": .638,
    "assistRatio": 15.6,
    "turnoverRatio": 10.5,
    "usageRate": 28.0,
    "offsensiveReboundRate": 1.4,
    "defensiveReboundRate":  21.8,
    "reboundRate": 12.1,
    "playerEfficiencyRating": 28.35,
    "valueAdded": 341.5,
    "estimatedWinAverage": 11.4
},
{ 
    "name": "Lebron James",
    "team": "CLE",
    "gamesPlayed":  39,
    "minutesPerGame": 35.7,
    "trueShootingPercentage": .572,
    "assistRatio": 19.2,
    "turnoverRatio": 10.7,
    "usageRate": 31.5,
    "offsensiveReboundRate": 3.8,
    "defensiveReboundRate":  18.9,
    "reboundRate": 11.4,
    "playerEfficiencyRating": 26.51,
    "valueAdded": 332.4,
    "estimatedWinAverage": 11.1
},
{ 
    "name": "Kawhi Leonard",
    "team": "SA",
    "gamesPlayed":   40,
    "minutesPerGame": 33.2,
    "trueShootingPercentage": .615,
    "assistRatio": 12.7,
    "turnoverRatio": 6.9,
    "usageRate": 22.9,
    "offsensiveReboundRate": 4.7,
    "defensiveReboundRate":  18.6,
    "reboundRate": 12.0,
    "playerEfficiencyRating": 25.73,
    "valueAdded": 301.4,
    "estimatedWinAverage": 10.0
},
{
   "name": "Anthony Davis",
    "team": "NO",
    "gamesPlayed":   36,
    "minutesPerGame": 35.7,
    "trueShootingPercentage": .557,
    "assistRatio": 6.9,
    "turnoverRatio": 8.7,
    "usageRate": 26.1,
    "offsensiveReboundRate": 26.1,
    "defensiveReboundRate":  6.2,
    "reboundRate": 26.4,
    "playerEfficiencyRating": 24.74,
    "valueAdded": 254.0,
    "estimatedWinAverage": 8.5
},
{ 
    "name": "Chris Paul",
    "team": "LAC",
    "gamesPlayed":  36,
    "minutesPerGame": 32.4,
    "trueShootingPercentage": .557,
    "assistRatio": 33.4,
    "turnoverRatio": 9.6,
    "usageRate": 27.4,
    "offsensiveReboundRate": 2.0,
    "defensiveReboundRate":  10.8,
    "reboundRate": 6.4,
    "playerEfficiencyRating": 24.41,
    "valueAdded": 233.6,
    "estimatedWinAverage": 7.8
},
{ 
    "name": "DeMarcus Cousins",
    "team": "SAC",
    "gamesPlayed":   33,
    "minutesPerGame": 33.4,
    "trueShootingPercentage": .541,
    "assistRatio":  8.9,
    "turnoverRatio": 11.2,
    "usageRate": 32.8,
    "offsensiveReboundRate": 8.2,
    "defensiveReboundRate":  28.0,
    "reboundRate": 18.2,
    "playerEfficiencyRating": 24.15,
    "valueAdded": 222.7,
    "estimatedWinAverage": 7.4 
},
{
    "name": "James Harden",
    "team": "HOU",
    "gamesPlayed":   44,
    "minutesPerGame": 37.5,
    "trueShootingPercentage": .580,
    "assistRatio": 19.5,
    "turnoverRatio": 13.2,
    "usageRate": 32.3,
    "offsensiveReboundRate": 2.4,
    "defensiveReboundRate":  15.5,
    "reboundRate": 9.0,
    "playerEfficiencyRating": 24.06,
    "valueAdded": 334.0,
    "estimatedWinAverage": 11.1
},
{ 
    "name": "Paul Millsap",
    "team": "ATL",
    "gamesPlayed":  43,
    "minutesPerGame": 32.8,
    "trueShootingPercentage": .585,
    "assistRatio": 16.2,
    "turnoverRatio": 10.5,
    "usageRate": 23.2,
    "offsensiveReboundRate": 8.6,
    "defensiveReboundRate": 20.9,
    "reboundRate": 14.8,
    "playerEfficiencyRating": 23.73,
    "valueAdded": 257.3,
    "estimatedWinAverage": 8.6
},
];




// MAP
// ===
//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// Map, operates on an array, takes a callback, returns an array.  What you return becomes the value of the element at that position on the new array.
//     Map Exercise
//     ============
//     Apply map to the players array and return an array of two-element arrays.  The two-element arrays should be composed of each player's name and their player efficiency rating.

map(players,function(player){
	return [player.name, player.playerEfficiencyRating];
})

players.map(function(player){
	return [player.name, player.playerEfficiencyRating];
})

// FILTER
// ======
//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// Filter operates on an array.  It takes a callback (sometimes called a predicate) that returns true or false.  It returns an array composed of each element for which the callback returns true.
// Apply filter on the players array to return an array of player objects who average at least 35 minutes per game.

filter(players, function(player){
	if(player.minutesPerGame > 35) {
		return player
	}
})

players.filter(function(player){
    if(player.minutesPerGame > 35) {
        return player
    }
})

// Mac's solution:
filter(players, function(player){
    return player["minutesPerGame"] >= 35;
})






// REDUCE
// ======
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// Reduce operates on an array.  It takes a callback (sometimes called an accumulator) that builds up a value.  You can also think of the function as a whole "reducing" the array to a value.
//     Reduce Exercises
//     ================
//     1.  Apply reduce on the players array in order to return the sum of their true shooting percentages.  Then average those shooting percentages.  Finally, convert the numberical average of the form .673 into a string of the form "67.3%".  Finally, wrap all of this in a re-usable function that takes an array of players as a parameter.

//     2.  Create a function called "getLowestEWI".  It should take an array of player objects as a parameter.  Use reduce on the players array to find the player with the lowest estimated win average.  Then return the player's name from the function

var reduce = function (collection, accumulator, startValue) {
	each (collection, function(current){
		if (startValue === undefined) {
			startValue = current; 
		} else {
			startValue= accumulator(startValue, current);
		}
	})
	return startValue; 
}

function getAverage(arr) {
	var total = reduce(players,function(sum,player){
		return sum+= player.trueShootingPercentage;
	},0);
	return total/players.length *100 + "%"
}

function getAverage(arr) {

	var total = arr.reduce(function(sum,player){
		return sum += player.trueShootingPercentage;
	},0);
	return total/players.length *100 + "%"
}
getAverage(players);

// Mac's solution

var total = players.map(function(element){ return element.trueShootingPercentage;}).reduce(function(x,y){return x+y;});
var avg = total/players.length;

var percent = avg.toString().substring(2)
var firstHalf = percent.slice(0,2)
var secondHalf = percent.slice(2)
var final  = firstHalf + "." +secondHalf+ "%"  //-------> This would be your final answer. 

//------------------------

function getLowestEWI(arr){
	return reduce(players,function(player1,player2){
		if (player1.estimatedWinAverage > player2.estimatedWinAverage){
			return player2;
		} else {
			return player1;
		}
	})["name"];
}

getLowestEWI(players);

// Mac's solution
function findLowest(players){
    return players.reduce(function(lowestEWA, player){
        if(player["estimatedWinAverage"] < lowestEWA["estimatedWinAverage"]){
            return player;
        } else {
            return lowestEWA;
        }
    })['name']
  }

//
// -----***********----------***********-----
//

