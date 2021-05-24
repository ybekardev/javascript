var myArray = ["Sunday", 'Monday', 'Tuesday', 3, 7, true];
console.log(myArray);
console.log(myArray[2]);

var stuff = [
  {'name' : 'value'},
  [1,2,3,4],
  true,
  'JS'
];
console.log(stuff);
console.log(stuff[1]);
console.log(stuff[0]);

stuff[4] = 'Hello';
console.log(stuff);
console.log(stuff.length);

stuff.push('END');
console.log(stuff);
stuff.pop();
console.log(stuff);
stuff.splice(2, 3);
console.log(stuff);

var ts  = "This is a string.";
var regex = /This/;
console.log(regex.test(ts));
regex  = /^his/;
console.log(regex.test(ts));
regex = /^this/i; //checking the beginning of the string, i > ignores the casesensitivty
console.log(regex.test(ts));
regex = /string$/i //chacking the end of the string
console.log(regex.test(ts));
regex = /is/i;
console.log(regex.test(ts));
