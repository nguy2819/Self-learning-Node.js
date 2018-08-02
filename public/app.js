//Used "node public/app.js" in terminal/ or "node app"
//Lesson 1

console.log('hey tien');

setTimeout(function(){
    console.log('3 seconds have passed')
}, 3000);
//3 seconds have passed

console.log(__dirname); //shows the direction to the file like Users/borlandtien/Projects/node-js-playlist/public
console.log(__filename); //Users/borlandtien/Projects/node-js-playlist/public/app.js

var time = 0;
var timer = setInterval(function (){
    time +=2;
    console.log(time + ' seconds have passed');
    if (time >5){
        clearInterval(timer);
    }
}, 2000);
//2 seconds have passed
//4 seconds have passed
//6 seconds have passed
// The counting process is stopped after 6 seconds have passed.



//Lesson 2

//NORMAL FUNCTION STATEMENT
function sayHi(){
    console.log('hi');
};
sayHi();

//FUNCTION EXPRESSION --- //We will see this type of function a lot in node.js
var sayBye = function(){
    console.log('bye');
}; //the whole function(){} is an anonymous function and it's equal to a variable "sayBye"
sayBye(); 

//CALLFUNCTION
function callFunction (fun){ //with the first "fun" - we can pass a function into another function
    fun(); //and then call that function
};

//For example: 
//function callFunction (sayBye){
    //sayBye();
//};

callFunction(sayBye); //so the variable "sayBye" will be passed in the first "fun" function and then be called sayBye() like the function expression



//Lesson 3 (Modules and require())

var counter = require('./stuff');
console.log(counter(['david', 'tien', 'borland']));
//before we added var counter = require('./stuff'), the method "counter" in console.log does not available to app.js
//the method "counter" in console.log (before added var counter) is only available in the module "stuff.js"
//so that all the code: var counter = function(arr){return...}; (in module stuff.js) does not available to run outside of the module "stuff.js"

//After we decided what part and function we want to be available outside "stuff.js" under module.exports = counter;
//Then we can added var counter = require('./stuff')
//Which means the variable counter will run the requirement code "var counter = function(arr){return...}; (in module stuff.js)" in app.js
//Answer: There are 3 elements in this array




//Lesson 4 (More variables to transfer from a module to another module)
var stuff = require('./stuff'); //we "var stuff" because we will used all 3 module exports in the module "stuff.js"
//stuff will be considered module.exports (including .counter, .adder, .pi)
console.log(stuff.counter(['david', 'tien', 'borland'])); //There are 3 elements in this array
console.log(stuff.adder(5,6)); //5+6=11
console.log(stuff.adder(stuff.pi,5)); //3.142 + 5 = 8.142
