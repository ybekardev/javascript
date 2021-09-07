var pages = [
  "home", "About Us", "Blog", "Contact Us"
]

for(var index in pages){
  console.log(index, pages[index]);
}

var page = {
  first : "Home",
  second : "About Us",
  third : "Blog",
  fourth : "Contact Us"
}
for(var index in page){
console.log(index, page[index]);
console.log('The index has the property - ', page.hasOwnProperty(index));
}

var counter  = 0;
var array = [true, true, false, true, false, false];
while(array[0] == true){
  console.log("Hello");
  console.log(array.length);
  console.log(array[counter]);
  console.log(counter);
  array.pop();
  counter++;
}
