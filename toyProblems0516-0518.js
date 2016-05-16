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