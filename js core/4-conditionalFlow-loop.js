
//For loop
for(var counter = 1; counter < 5; counter++){
  console.log("Hello world - ", counter);
}
//var is global and function scope
console.log('outside of the loop: ' + counter);

for(let count = 1; count < 5; count++){
  console.log('Hello - ', count);
}
//will not compile b/c of LET COUNT being outside of the scope
//console.log('Hello - ', count);

//while loop
var count = 1;
while(count < 5){
  console.log(count);
  count++;
}

//break
for(var i = 1; i < 10; i++){
  if(i % 3 == 0){
    break;
  }
}

//continue
var start = 2;
var sum = 0;
do{
  if(start % 2  == 0){
    console.log('Sum is: ', sum);
    continue;
  }
  sum += start;
} while(++start <= 10);
console.log('Sum is: ', sum);
