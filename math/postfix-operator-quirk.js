let a = 3;
a++;

console.log(a); // a is 4

let x = 3;
//POSTFIX
let y = x++;

console.log(x); // x is 4
console.log(y); // y is 3 because assignment of y to value of x
// happens BEFORE increment

// JavaScript engine sees y = x and makes the assignment, then continues and evaluates x++

let alpha = 3;
//PREFIX
let beta = ++alpha;

console.log(alpha); // x is 4
console.log(beta); // y is 4 because assignment happens AFTER increment
//JavaScript engine sees y = ++ (something is about to be incremented) x follows increment so JS evaluates and THEN assigns value to y.
