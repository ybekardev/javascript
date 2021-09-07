var one  = 1;
console.log(one  === one);
console.log(one == '1');
console.log(one === '1');

console.log(20 % 2 == 0);
console.log(20 % 2 === 0);

//Check if a variable is a string in JavaScript
//https://www.techiedelight.com/check-if-variable-is-string-javascript/
const str = "hello world";
if(typeof str == 'string'){
  console.log('Variable is a string!');
}else{
  console.log('Variable is NOT a string!');
}

const str2 = new String("Hello");
if(typeof str == 'string' || str instanceof String){
  console.log('Variable is a string!');
}else{
  console.log('Variable is NOT a string!');
}
