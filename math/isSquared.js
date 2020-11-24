//Given an integral number, determine if it's a square number
//return true if yes, false if no
//EXAMPLES
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

var isSquare = function (n) {
  // the % 1 === 0 means is a way to check if it is a decimal
  // e.g  1.2 % 1 === .2 so it's not an integer it's a decimal number
  return Math.sqrt(n) % 1 === 0;
};

const betterSolution = (n) => Number.isInteger(Math.sqrt(n));

//console.log(isSquare(25)); //true

console.log(betterSolution(25)); //true
