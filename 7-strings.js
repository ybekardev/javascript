var str = 'Java Script';
console.log(str.length);
console.log(str.charAt(3));
console.log(str.includes('Java'));
console.log(str.indexOf('a'));
console.log(str.indexOf('z', 4));
console.log(str.replace('a', 'z'));
console.log(str.replaceAll('a', 'z'));
console.log(str.substring(0,4)); //from to
console.log(str.substr(3,6)); //from length
console.log((str.toLowerCase()));
console.log(str.toUpperCase());
console.log(str.trim());

var array = str.split(' ');
console.log(array);
