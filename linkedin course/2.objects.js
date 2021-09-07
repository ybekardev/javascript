var myEmptyObject = {}
console.log(myEmptyObject);

var myObject = {
  'label' : "value1",
  label2 : 212
}
console.log(myObject);

var bird = {
  genus : 'corvus',
  maxOffSpring : 5,
  noisy : true,
  'deadly' : "No",
  "earth" : "Homeless"
};
console.log(bird);
console.log(bird.noisy);
console.log(bird.deadly);

bird.color = "brown";
console.log(bird);
console.log(bird['color']);
console.log(bird['genus']);

delete bird.color
console.log(bird);

//To make a copy of an object safely
var bird2  = JSON.parse(JSON.stringify(bird));
console.log(bird2);

var bird3 = {
  genus : 'raven',
  maxOffSpring : 20,
  noisy : true,
  'deadly' : "Yes",
  "earth" : "Lives on tree"
}
console.log(bird3);
console.log('--------');
bird = bird3;
console.log(bird);
console.log(bird3);
console.log(JSON.parse(JSON.stringify(bird3)));
console.log(JSON.parse(JSON.stringify(bird)));
