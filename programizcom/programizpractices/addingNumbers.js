const num1 = 4;
const num2 = 6;
const num3  = num1 + num2;

console.log(num3);
//In VS Code, which uses the Electron environment, the prompt function is not support as it is UI blocking. 
//You will need to run your example in a browser 
const number1 = parseInt(prompt('Enter the first number:'));
const number2 = parseInt(prompt('Enter the second number:'));
const number3 = number1 + number2;

console.log('The sum is ${number1} and ${number2} is ${number3}');

const sqrt = Math.sqrt(number3);
console.log('The sqrt of the number is ${sqrt}');