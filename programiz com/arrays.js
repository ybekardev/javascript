//Using an array literal - recommended way
const array1 = ['one', 'two', 'three'];
//Using the new keyword
const array2 = new Array('eat', 'sleep', 'study');

const newData = [
    {'task1': 'exercise', task2: 35},
    [1,2,3,4],
    function hello() {console.log("Hello")
}
];
console.log(newData[1]);

const mixData = [1, true, 'eat'];

//Manipulate the array
mixData.push('Running');
//You can also store values by passing a named key in an array.
mixData.name = 'JS';
console.log(mixData);
//The unshift() method adds an element at the beginning of the array. 
mixData.unshift('Work');
mixData[2] = 'Play';
//pop() method to remove the last element from an array. 
mixData.pop()
//shift() method to remove the first element, 
mixData.shift()
let length = mixData.length;
console.log(length);
console.log(mixData);

/*
Some of the commonly used JavaScript array methods are:

Method	Description
concat()	joins two or more arrays and returns a result
indexOf()	searches an element of an array and returns its position
find()	returns the first value of an array element that passes a test
findIndex()	returns the first index of an array element that passes a test
forEach()	calls a function for each element
includes()	checks if an array contains a specified element
push()	aads a new element to the end of an array and returns the new length of an array
unshift()	adds a new element to the beginning of an array and returns the new length of an array
pop()	removes the last element of an array and returns the removed element
shift()	removes the first element of an array and returns the removed element
sort()	sorts the elements alphabetically in strings and in ascending order
slice()	selects the part of an array and returns the new array
splice()	removes or replaces existing elements and/or adds new elements
*/

//To use a multiline string, you can either use the + operator or the \ operator. For example,
// using the + operator
const message1 = 'This is a long message ' +
    'that spans across multiple lines' + 
    'in the code.'

// using the \ operator
const message2 = 'This is a long message \
that spans across multiple lines \
in the code.'

/*
JavaScript String Methods
Here are the commonly used JavaScript String methods:

Method	Description
charAt(index)	returns the character at the specified index
concat()	joins two or more strings
replace()	replaces a string with another string
split()	converts the string to an array of strings
substr(start, length)	returns a part of a string
substring(start,end)	returns a part of a string
slice(start, end)	returns a part of a string
toLowerCase()	returns the passed string in lower case
toUpperCase()	returns the passed string in upper case
trim()	removes whitespace from the strings
includes()	searches for a string and returns a boolean value
search()	searches for a string and returns a position of a match
*/

//Escape Character
//You can use the backslash escape character \ to include special characters in a string. For example,

const peter = 'My name is \'Peter\'.';
console.log(peter);
//Output: My name is 'Peter'.