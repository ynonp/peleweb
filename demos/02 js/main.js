
/**
 * Variables
 * Data Types
 * Loops
 * If
 * Arrays
 * Objects
 *
 * Functions
 * Input/Output
 * Events
*/



var x = 10;
var y = 20;

var z = x + y;

console.log(z);

// Strings
var name = "ynon";


if ( a == b ) {
  if ( b == c ) {
    // expected: a == c
  }
}



if ( 2 < 5 ) {
  // 2 is less than 5
}

for ( var i=0; i < 10; i++ ) {
  console.log('i = ' + i);
}

var hash = { name: 'ynon', email: 'ynon@ynonperek.com' };
var keys = Object.keys(hash);

for ( var i=0; i < keys.length; i++ ) {
  var key = keys[i];
  var val = hash[key];

  console.log('key = ' + key, ', val = ' + val);
}

function count(n) {
  var sum = 0;
  for ( var i=0; i < n; i++ ) {
    sum += i;
  }
  return sum;
}


function add(x,y) {
  return x+y;
}













