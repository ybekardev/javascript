function makeSound(){
  console.log("Dog is barking!");
};
makeSound();

function funny(speach){
  if(typeof speach != "string"){
    console.error("Try again!");
    return;
  }
};
funny("hi");
funny(3);

function evenOrOdd(num){
  if(num % 2 == 0){
    console.log("even");
  }else {
    console.log("Odd");
  }
};
evenOrOdd(4);
evenOrOdd(5);

function speakSomething(what, howMany){
  var what = (typeof what !== "undefined") ? what : "Default";
  var howMany = (typeof howMany !== "undefined") ? howMany : 5;
  for(var i =0; i < howMany; i++){
    console.log(what + " - " + i);
  }
};
speakSomething();
speakSomething("Hello");
speakSomething("Hi", 3);

var obj = {
  sayHi : function(){
    console.log("Hi!");
  }
};
console.log(obj);

//var - global variables
//let and const are non-global
function increment(){
  let arm = 3; // let can be used in global classes
  arm++;
  const leg = 5;
  console.log(arm);
  //leg++;
  //console.log(leg=6);
  console.log(leg);
}
increment();

/*
jQuery.get("https://www.google.com");

async function getOneThing(){
  var response = await axios.get("https://www.google.com")
}

getOneThing();
*/
