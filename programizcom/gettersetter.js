/*
In JavaScript, there are two kinds of object properties:

Data properties
Accessor properties
*/

const student = {

    // data property
    firstName: 'Monica',
    
    // accessor property(getter)
    get getName() {
        return this.firstName;
    },
    //accessor property(setter)
    set changeName(newName) {
        this.firstName = newName;
    }
};

// accessing data property
console.log(student.firstName); // Monica

// accessing getter methods
console.log(student.getName); // Monica
student.changeName = 'Sarah';
// trying to access as a method
//console.log(student.getName()); // error


//JavaScript class is used to create an object. Class is similar to a constructor function.
class Person {
    constructor(age, firstname) {
        this.age = age;
        this.firstname = firstname;
    }
    get getName(){
        return this.firstname;
    }
    set setName(newName){
        this.firstname = newName;
    }
}
let person1 = new Person(23, 'Allison');
console.log(person1.age);
person1.setName = 'Ana';
console.log(person1.getName);



