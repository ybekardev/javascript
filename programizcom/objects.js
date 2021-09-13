//import { greetPerson } from "./functions";

//JavaScript object is a non-primitive data-type that allows you to store multiple collections of data.
//JavaScript objects are a bit different. You do not need to create classes in order to create objects.

const Student= {
    name: 'Amy',
    age: 23,
    student: true,
    classes: {
        science: 80,
        english: 90,
        math: 89
    },
    //In the method greet, while accessing a property of an object, this keyword is used.
    greet: function() {console.log('Hello, ' + this.name)}
}
Student.country = 'US';
console.log(Student);
console.log(typeof(Student));
console.log(Student.classes.science);
Student.greet();

//Aconstructor function is used to create objects.
function Portion() {
    this.name = 'John';
    this.age = 35;
}
const person = new Portion();
console.log(person.name);

function Person(p_name, p_age, p_gender) {
    this.name = p_name;
    this.age = p_age;
    this.gender = p_gender
}
const person1 = new Person('Johny', 45, 'M');
const person2 = new Person('Mary', 52, 'F');
console.log(person1);
console.log(person2);

//Object Literal is generally used to create a single object. 
//The constructor function is useful if you want to create multiple objects.
// using object literal
let pearson = {
    name: 'Sam'
}
// using constructor function
function Pearson () {
    this.name = 'Sam'
}
let pearson1 = new Pearson();
let pearson2 = new Person();

//Each object created from the constructor function is unique. You can have the same properties as the constructor function or add a new property to one particular object. 
pearson1.age = 20;
//Now this age property is unique to person1 object and is not available to person2 object.
//However, if an object is created with an object literal, and if a variable is defined with that object value, any changes in variable value will change the original object. 
console.log(pearson);
pearson.age = 30;
pearson.name = 'John';
console.log(pearson);

//You can also add properties and methods to a constructor function using a prototype.
Pearson.prototype.gender = 'Male';
console.log(pearson1.gender);

//let displayName = greetPerson('Jack');
//console.log(displayName);