const map1 = new Map();
map1.set('name', 'Hans');
console.log(map1);
//iterate the map
for(let[key,value] of map1) {
    console.log(key + ' - ' + value);
}
map1.forEach(function(key, value){
    console.log(key + ' - ' + value);
})
//get keys
for(let key of map1.keys()){
    console.log(key);
}
//get values
for(let key of map1.values()){
    console.log(key);
}
for(let elem of map1.entries()) {
    console.log(`${elem[0]}: ${elem[1]}`);
}

let map2 = new Map();
map2.set('info', {name: 'Jammy', age: 26});
console.log(map2);
//access Map elements using the get()
console.log(map2.get('info'));
// has() method to check if the element is in a Map.
console.log(map2.has('info'));
console.log(map2.size);
//use the clear() and the delete() method to remove elements
console.log(map2.delete('info'));
