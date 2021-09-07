//unlike an array, a set cannot contain duplicate values.
const set1 = new Set([1, 'hello', {count: true}]);
console.log(set1);

//duplicates will be removed
const set2 = new Set([8,1,2,3,4,3,5,3,6,2,1]);
console.log(set2);
console.log(set2.values());
console.log(set2.has(3));

for(let i of set2){
    console.log(i);
}

set2.add(10);
set2.delete(5);
set2.clear();
console.log(set2);
