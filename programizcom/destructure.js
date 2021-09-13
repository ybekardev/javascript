// assigning object attributes to variables
const person = {
    name: 'Sara',
    age: 25,
    gender: 'female'    
}

let name = person.name;
let age = person.age;
let gender = person.gender;

console.log(name); // Sara
console.log(age); // 25
console.log(gender); // female

//From ES6:
const person2 = {
    p_name: 'Jack',
    p_age: 34,
    p_gender: 'F'
}
let {p_name, p_age, p_gender} = person2;
console.log(p_name);
console.log(p_age);
console.log(p_gender);
//The order of the name does not matter in object destructuring.
//When destructuring objects, you should use the same name for the variable as the corresponding object key.

//Array Destructuring
const arrValue = ['one', 'two', 'three'];
// destructuring assignment in arrays
const [x, y, z] = arrValue;

console.log(x); // one
console.log(y); // two
console.log(z); // three


const person3 = {
    name3: 'Sara',
    age3: 25,
    gender3: 'female'    
}

// destructuring assignment
// assigning remaining properties to rest
let { name3, ...rest3 } = person3;

console.log(name3); // Sara
console.log(rest3); // {age: 25, gender: "female"}

//nested destructure
const person4 = {
    name4: 'Jack',
    age4: 26,
    hobbies4: {
        read4: true,
        playGame4: true
    }
}
// nested destructuring 
const {name4, hobbies4: {read4, playGame4}} = person4;
console.log(name4); // Jack
console.log(read4); // true
console.log(playGame4); // true