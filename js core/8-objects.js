var person = {
  firstName : 'Mike',
  lastName : 'Smith'
}

console.log(person);
console.log(person.firstName);

var address = {
  'building no': 3451,
  street : 'N Tullis Ave',
  state : 'NC',
  country : 'USA'
}

console.log(address.['building no']);
console.log(address.state);

person.age = 30; // adding more items to the json
console.log(person);
console.log(person.age);

delete person.state
console.log(person);

console.log('street' in address); //check if the preoperty exists

//iterating over object
var course = {
  name : 'Javascript',
  subjects : ['ES5', 'ES6', 'TS', 'JS']
}

for(var key in course){
  console.log(key);
  console.log(key + ' : ' + course[key]);
  console.log("Next Loop...");
}

var myHonda = {
  color : 'red',
  wheels : 4,
  engine : {
    cylinders : 4,
    size : 2.2
  },
  hp : [300, 500, 1000]
}
console.log(myHonda.hp[2]);
console.log(myHonda.engine.cylinders);

var car = {
  make : 'Honda',
  model : 'Civic',
  year : 2000,
  color : 'Red',
  mialage: 75000,
  started : false,
  start : function(){
    this.started = true;
  },
  drive : function(){
    if(this.started){
    console.log('Driving my Honda');
    }else {
      console.log('Please start the engine!');
    }
  }
}
car.start();
car.drive();
