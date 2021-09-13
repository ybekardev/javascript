let root1, root2;
let a = promt('Enter first numer:');
let b = prompt('Enter second number:');
let c = prompt('Enter thrid number');

let discriminant = b * b - 4 * a * c;
if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log('The roots: ${root1} and ${root2}');
}
else if (discriminant == 0) {
    root1 = root2 -b / (2 * a);
    console.log('Roots are ${root1} and ${root2}');
}
else {
let realPart = (-b / (2 * a)).toFixed(2);
let imgPart = (Math.sqrt(-discriminant) / (2 * a).toFixed(2));
console.log('The roots are: ${realPart} and ${imgPart}');
}

