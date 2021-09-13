const num = prompt('Enter a number');
//The factor of 12 is 1, 2, 3, 4, 6, and 12.
for(let i = 1; i <= num; i++){
    if(num % i == 0){
        console.log(i);
    }
}