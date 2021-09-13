/*
syntax:
let myfun = (arg1, arg2, arg3, arguments) => {
    //statement
}

You should not use arrow functions to create methods inside objects.
You cannot use an arrow function as a constructor.

*/

//version-1:
let af = function(a, b) {
    return a * b;
}
//version-2:
let arrowfun = (a,b) => a * b;
console.log(arrowfun(2, 7));

let greet = () => console.log('Hello');
greet();

let greeting = arg => console.log(arg);
greeting('Hello');

let age = 5;
let welcome = (age < 18) ? () => console.log('Baby') : () => console.log('Adult');
welcome(9);

//code v-1:
function returnSum(c, b) {
    return c + b;
}
console.log(returnSum(2,9));
//code v-2:
let sum = (x, y) => {
    return x + y;
}
let result1 = sum(4,8);
console.log(result1);

let arg = function() {
    console.log(arguments);
}
arg(2,5,8);

let arg2 = (...n) => {
    console.log(n);
}
arg2(3,6,0);
/*
Just above method won't work like below, but need to work like above
let x = () => {
    console.log(arguments);
}
x(4,6,7); 
// ReferenceError: Can't find variable: arguments
*/