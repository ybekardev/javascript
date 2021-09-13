let valueA = prompt('Enter value one:');
let valueB = prompt('Enter value two:');

let valueTemp;

valueTemp = valueA;
valueA = valueB;
valueB = temp;

console.log('Swapped values are ${valueA} and ${valueB}');

//another way;
[valueA, valueB] = [valueB, valueA];
//a new es6 feature, called destructuring assignment [a, b] = [b, a], is used to swap the value of two variables.
console.log('Swapped values ${valueA}, and ${valueB}');
