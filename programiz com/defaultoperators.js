function sum(x = 3, y = 5) {
    return x + y;
}
console.log(sum(5, 15));  // 20 
console.log(sum(7));        // 12
console.log(sum());          // 8

// Passing Parameter as Default Values
function sum2(x = 1, y = x,  z = x + y) {
    console.log( x + y + z );
}
sum2(); // 4

//Passing Function Value as Default Value
const sum3 = () => 15;
const calc = function(a, b = a * sum3()) {
    return a + b;
}
const result = calc(10);
console.log(result);


const str1 = 'This is a string';

// cannot use the same quotes
const str2 = 'A "quote" inside a string';  // valid code
//const str3 = 'A 'quote' inside a string';  // Error

const str4 = "Another 'quote' inside a string"; // valid code
//const str5 = "Another "quote" inside a string"; // Error

//To use the same quotations inside the string, you can use the escape character \.
// escape characters using \
const str3 = 'A \'quote\' inside a string';  // valid code
const str5 = "Another \"quote\" inside a string"; // valid code

//Instead of using escape characters
const str6 = `This is a string`;
const str7 = `This is a string with a 'quote' in it`;
const str8 = `This is a string with a "double quote" in it`;

//Using template literals, you can replace using the + operator
const message1 = 'This is a long message\n' + 
'that spans across multiple lines\n' + 
'in the code.'

console.log(message1)

const message2 = `This is a long message
that spans across multiple lines
in the code.`

console.log(message2)