function add(a,b){
  console.log('Total is: ', a+b); //6
  console.log('Total is: ' + (a+b)); //6
  console.log('Total is: ' + a+b); //15
}

add(1,5);
add(10,3,9); //will add up only first two digits
add(4); // will return NaN

function addTen(a,b) {
  return (a+b+10);
}

var x  = addTen(2,5);
console.log('a + b + 10 is: ', x);

//Functions are the first-class citizens in JS,
//Functions can be called and manipulated from other functions
//Functions can be stored in variables
var add2 = add;
add2(100,32);

//Annonymous Functions
var show = function(){
  console.log('This is a function');
}

show();

var divide = function(a,b){
  return a / b;
}

var d = divide(10, 2);
console.log(d);

//Passing a fun to another function
function sum(a, b){
  return a + b;
}

function average(a, b, fn){
  return fn(a, b) / 2;
}

var result = average(10, 20, sum)
  console.log(result);

function cmToInch(length){
  return  length / 2.54;
}

function inchToCm(length){
  return length * 2.54;
}

function convert(fn, length){
  return fn(length);
}

var inch = convert(cmToInch, 10)
var cm = convert(inchToCm, 10)

console.log(inch);
console.log(cm);

function myDisplayer(some){
  console.log(some);
}

function myCalculator(num1, num2){
  var sum = num1 + num2;
  myDisplayer(sum);
}

myCalculator(3,6);
var s = myCalculator(7,2);
