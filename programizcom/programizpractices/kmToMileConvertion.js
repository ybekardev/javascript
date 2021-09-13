const km = prompt('Enter km value:');
const factor = 0.621371;

const convertToMi = km * factor;
//to convert mi to km, use km = miles / factor
console.log('${km} equals to ${convertToMi} miles');