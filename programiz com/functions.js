
let gloabalVar = 'Hi';

function sayHello() {
    console.log('Hello');
}
//call the function
sayHello()

function sayHello(name) {
    console.log('Hello ' + name);
}
sayHello('Amy');

function sayHelloReturn(name) {
    return 'Hello ' + name;
}
console.log(sayHelloReturn("Ana"));

//In Javascript, functions can also be defined as expressions.
let functionIsRunning = function (number) { return number * number };
console.log(functionIsRunning(8));

//JavaScript Variable Scope
//Global Scope
//A variable declared at the top of a program or outside of a function is considered a global scope variable.
//In the above program, variable gloabalVar is declared at the top of a program and is a global variable. It means the variable gloabalVar can be used anywhere in the program.
//The value of a global variable can be changed inside a function
//If a variable is used without declaring it, that variable automatically becomes a global variable.
//"strict mode"; in which a variable cannot be used without declaring it.

//Local Scope
//A variable can also have a local scope, i.e it can only be accessed within a function.

function greet() {
    globalVariable = 'Global Variable can be call anywhere in the program'
    gloabalVar = 'Hello';
    console.log(gloabalVar);
    let localVar = 6;
    console.log(localVar);
}
greet()
console.log(globalVariable)
//console.log(localVar) can't be called a local var here

//Block Scope
//The let keyword is block-scoped (variable can be accessed only in the immediate block).
function greeting() {
    //local var
    let a = 'a'
    console.log(a);
    if(a == 'a') {
        let b = 'b'
        console.log(b);
    }
    //variable c can't be accessed here!
    //console.log(a + b);
}
greeting()

//Variable Hoisting
//In terms of variables and constants, keyword var is hoisted and let and const does not allow hoisting.
console.log(test);
var test = 'Hi';

//Recursion is a process of calling itself. 
//A recursive function must have a condition to stop calling itself. Otherwise, the function is called indefinitely.
/*
function recurse() {
    // code ...
    recurse();
    // code...
}
recurse();
*/

function countDown(number) {
    console.log(number);
    const Newnumber = number - 1;
    if(Newnumber > 0) {
        countDown(Newnumber);
    }
}
countDown(4);

// exporting a function
export function greetPerson(name) {
    return `Hello ${name}`;
}

function callMe(){
    console.log('I am a callback function');
}
function greetingCall2(name, callMe){
    console.log('Hello' + name);
}
greeting2();

// Callback Function Example
function greet(name, myFunction) {
    console.log('Hello world');

    // callback function
    // executed only after the greet() is executed
    myFunction(name);
}

// callback function
function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function after 2 seconds
setTimeout(greet, 2000, 'John', sayName);