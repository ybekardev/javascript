class Person {
    constructor(name) {
        this.name = name;
        this.occupation = 'unemployed';
    }
    greet() {
        console.log(`Hello ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, age){
        super(name);
        this.age = age;
        this.occupation = 'Student';
        console.log(`${name} - ${age} - ${this.occupation}`);
    }
    greet(){
        console.log('overriding...');
    }
}

let student1 = new Student('Jack', 23);
student1.greet();