/**
 * JavaScript var Vs let
Both var and let are used to declare variables.  It is recommended we use let instead of var.
var is used in the older version 
var is function scoped
let is the new way of declaring variables starting ES6
let is block scoped 
The const keyword was also introduced in the ES6(ES2015) version to create constants. 
Simply, a constant is a type of variable whose value cannot be changed.
Also, you cannot declare a constant without initializing it

Semicolons are usually optional in JavaScript (Google for ASI / automatic semicolon insertion). 
Using them makes the code look much cleaner though and ASI is a horrible mis-feature (at least in my opinion).

There are eight basic data types in JavaScript. They are:

Data Types	Description	Example
String,	represents textual data	'hello', "hello world!" etc
Number,	an integer or a floating-point number	3, 3.234, 3e-2 etc.
BigInt,	an integer with arbitrary precision	900719925124740999n , 1n etc.
Boolean,	Any of two values: true or false	true and false
undefined,	a data type whose variable is not initialized	let a;
null,	denotes a null value	let a = null;
Symbol,	data type whose instances are unique and immutable	let value = Symbol('hello');
Object,	key-value pairs of collection of data	let student = { };

All data types except Object are primitive data types.
The Object data type (non-primitive type) can store collections of data, whereas primitive data type can only store a single data.

*/

let x;
x = 8;
console.log(x);

function add(a,b){
    return a + b;
}

add(3,5);
console.log(add(6,4));

let s;
console.log(s);
s = 'Hello All!'
console.log(s)

const t = 6;
//t = 8;
console.log(t)

const u = 5;
//u = 5;
console.log(u)

//Convert decimals to whole integer
let number = 10;
console.log(9/2);
let rounded = Math.round(number/3);
//Math.ceil(), Math.floor(), Math.trunc()
console.log(10/3)
console.log(rounded);
console.log(parseInt(10/3));

const value = Symbol(4);
console.log(value)

const Student = {
    name: 'Jason',
    lastName: 'Back',
    age: 34
};

console.log(Student);
console.log(Student.age);

//JavaScript is a dynamically typed (loosely typed) language
//It also means that a variable can be of one data type and later it can be changed to another data type.
let data;
data = 4;
data = 'This is a string';
console.log(data);

//To find the type of a variable, you can use the typeof operator.
let dot = '.';
let type = typeof(dot);
console.log(type)

//To convert numeric strings and boolean values to numbers, you can use Number().
let five = '5';
console.log(five);
console.log(Number(five))

//To convert other data types to strings, you can use either String() or toString(). 
let bigNumber = 325435;
console.log(bigNumber.toString())
console.log(String(bigNumber))

//To convert other data types to a boolean, you can use Boolean().
let num1 = 1;
console.log(Boolean(num1)); //true
let num0 = 0;
console.log(Boolean(num0)); //false

// = is assignment, == compare value (!= is opposite), === compare value and the type (!== is opposite)
let first = 8;
let second = 5;
console.log('x + y =', first + second);
console.log('x + y = ' + (first + second));
console.log('x + y = ' + first + second);

console.log(2 == 2); //true
console.log(2 == '2'); //true
console.log(2 === '2'); //false bc the value are the same BUT the type is different

let bool = first > second ? 'Success' : "Failure";
console.log(bool);

//A for loop is usually used when the number of iterations is known. 
//And while and do...while loops are usually used when the number of iterations are unknown.
//The break statement is used to terminate the closest loop immediately when it is encountered.
//If there are nested loops, it will stop/exit from the first loop
//The continue statement is used to skip the current iteration of the loop and the control flow of the program goes to the next iteration.
