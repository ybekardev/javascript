//Ways to use the Terminal for JS
//Type 'node' on terminal after installing
/*
Yasins-MBP:~ yasinbekar$ node
Welcome to Node.js v14.2.0.
Type ".help" for more information.
> 3 + 3
6
> console.log('Hi')
Hi
undefined
>
*/

//Ways to use console on browser
//... menu on the browser > More Tools > Developer Tools > Console

//More tools: Atom, Submime, VS Code, JetBrains and more...

var x = 32;
console.log(x);

var y = 'Santa Barbara';
console.log(y);

y = "California";
console.log(y);

y = 'San Antonio';
console.log(y);

var monster1 = "Grover", monster2  = 'Cookie Monster';
console.log(monster1, monster2);
console.log(monster1 + monster2);

//STRINGS
//we can use single or double quotes for strings '' or ""
var str = "This is a \"wonderful\" string";
console.log(str);

// a backslash will give whitespace
str = "This \
is \
a \
string"
console.log(str);

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.length);

//NUMBERS
var i = 2.5343;
console.log(i);

//NaN not a numbers

console.log(Math.random());
console.log(Math.ceil(Math.random() * 5)) + 1;

//BOOLEAN
var bool1 = true;
console.log(bool1);
var bool2 = false;
console.log(bool2);

var myLocation = "San Antonio";
var mylocation = "San Antonio";
var myloc = "Santa Barbara"

console.log(myLocation == mylocation);
console.log(myLocation === mylocation);
console.log(myLocation == myloc);
console.log(myLocation === myloc);
