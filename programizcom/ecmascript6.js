/*
JavaScript let is used to declare variables. Previously, variables were declared using the var keyword.
The variables declared using let are block-scoped. This means they are only accessible within a particular block. 
*/
// variable declared using let
let name = 'Sara';
{
    // can be accessed only inside
    let name = 'Peter';

    console.log(name); // Peter
}
console.log(name); // Sara 

//The const statement is used to declare constants in JavaScript.
// name declared with const cannot be changed
const firstName = 'Sara';

//In the ES6 version, you can use arrow functions to create function expressions. 
let arrowfun = function(x,y) {
    return x * y;
}
//this can be written as;
let arrowFun = (x,y) => x * y;
console.log(arrowFun(4,6));

//you can pass default values in the function parameters. 
function sum(a, b = 3) {
    console.log(a + b);
}
sum(5,2);
//In the above example, if you don't pass the parameter for y, it will take 5 by default.
sum(4);

//The template literal has made it easier to include variables inside a string. 
const first_name = "Jack";
const last_name = "Sparrow";
//older
console.log('Hello ' + first_name + ' ' + last_name);
//new version
console.log(`Hello ${first_name} ${last_name}`);

//Destructuring
const studentList = {
    s_name: 'Sara',
    s_age: 25,
    s_gender: 'female'    
}
let name3 = studentList.s_name;
let age3 = studentList.s_age;
let gender3 = studentList.s_gender;
console.log(name3); // Sara
console.log(age3); // 25
console.log(gender3); // female
//Using ES6 Destructuring syntax, the above code can be written as:
let { s_name, s_age, s_gender } = studentList;
console.log(s_name); // Sara
console.log(s_age); // 25
console.log(s_gender); // female

/*
JavaScript import and export
You could export a function or a program and use it in another program by importing it. 
This helps to make reusable components. For example, if you have two JavaScript files named contact.js and home.js.

In contact.js file, you can export the contact() function:

// export
export default function contact(name, age) {
    console.log(`The name is ${name}. And age is ${age}.`);
}
Then when you want to use the contact() function in another file, you can simply import the function. For example, in home.js file:

import contact from './contact.js';

contact('Sara', 25);
// The name is Sara. And age is 25
*/

//You can use the rest parameter to represent an indefinite number of arguments as an array. 
function show(a, b, ...args) {
    console.log(a); // one
    console.log(b); // two
    console.log(args); // ["three", "four", "five", "six"]
  }
  show('one', 'two', 'three', 'four', 'five', 'six')
//You use the spread syntax ... to copy the items into a single array.
  let arr1 = ['one', 'two'];
  let arr2 = [...arr1, 'three', 'four', 'five'];
  console.log(arr2); // ["one", "two", "three", "four", "five"]