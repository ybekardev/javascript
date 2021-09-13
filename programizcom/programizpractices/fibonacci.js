function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num-2);
    }
}

const nTerms = 8 //prompt('Enter the number:');
let result;
if(nTerms <= 0){
    console.log('Enter a positive number!')
}else {
    for (let i = 0; i < nTerms; i++){
        console.log(fibonacci(i));
         result = (i % 2 == 0) ? 'even' : 'odd';
        console.log(`The i is:', ${result}`);
    }
}