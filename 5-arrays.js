var scores = new Array(); //empty Array
var numbers = new Array(10); //array size 10
var myNums = new Array(1,2,3,4,5); //array with the initial elements

var nums = Array(3); //array initial size 3
var num = Array('Red'); //array with one elements

var emptyArray = [];
var colors = ('Red', 'Green', 'Blue'); //() or [] works the same
console.log(colors);
console.log(colors[0]);

var names = ['Tim', 'Mike', 'Jake'];
console.log(names);

names.push('Emma'); // add element to the end
console.log(names);

names.unshift('Adam'); //adds element to the beginning
console.log(names);

names.pop(); //removes element from the end of the Array\
console.log(names);

names.shift(); //removes element from the beginning of the Array
console.log(names);

var index = names.indexOf('Mike');
console.log(index);

names.splice(0,1); //delete elements in array, 1st array the 1st element to be deleted
console.log(names);

names.splice(2,0, 'Matt'); //inserts elements, 0-ZERO means don't delete but add the item on the index two-2
console.log(names);

names.splice(1,1, 'Haily');
console.log(names);

var numbers = [39,6,1,3,7,53,9];
console.log(numbers.sort());

var months = [1, 'march', 'jan', 23, 'dec', 'may', 8];
console.log(months.sort());
