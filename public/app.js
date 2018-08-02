//Used "node public/app.js" in terminal/ or "node app"
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

