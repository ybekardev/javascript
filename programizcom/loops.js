//JavaScript for...in loop
const student = {
    name: 'Monica',
    age: 34,
    gender: 'F'
}
for(let key in student) {
    console.log(key + ' is ' + student[key]);
    console.log(`${key} is ${student[key]}`);
}

const numerator= 100, denominator = 'a';

try {
     console.log(numerator/denominator);
     console.log(a);
}
catch(error) {
    console.log('An error caught'); 
    console.log('Error message: ' + error);  
}
finally {
     console.log('Finally will execute every time');
}

try {
    setTimeout(function() {
        // error in the code
    }, 3000);
} catch (e) {
  console.log( "won't work" );
}

//The syntax of try...catch...throw is:
try {
    // body of try
    throw exception;
} 
catch(error) {
    // body of catch  
}

/*
for...of VS	for...in
The for...of loop is used to iterate through the values of an iterable.	
The for...of loop cannot be used to iterate over an object.	

The for...in loop is used to iterate through the keys of an object.
You can use for...in to iterate over an iterable such arrays and strings but you should avoid using for...in for iterables.
*/