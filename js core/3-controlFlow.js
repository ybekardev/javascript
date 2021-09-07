var num1  = 40;
var num2 = 40

if(num1 > num2){
  console.log('num1 is greater');
}else {
  console.log('num2 is greater or eaqual');
}

//Ternary
var age = 25;
var allowRegister = age > 18 ? true : false
console.log(allowRegister);

var month =2;
var dayCount;

switch (month) {
  case 1: case 3: case 5: case 7: case 8: case 10: case 12:
  dayCount = 31;
  break;
  case 4: case 6: case 9: case 11:
  dayCount = 30;
  break;
  default:
  dayCount = -1 // invalid month
}
