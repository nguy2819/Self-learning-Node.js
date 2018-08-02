var counter = function(arr){
    return 'There are ' + arr.length +' elements in this array';
};

//To make all the code in this module available to use outside module "stuff.js", 
//we have to say what part of the module we want to make it availables to all the files, which require this module
//We typed "module.exports" = to the part we want it to be available outside of this module "stuff.js"
module.exports = counter;
//Here, we want the "counter" function to be available outside of this module.




//More variables (to transfer from a module to another module) rather than only counter variable
var adder = function(a, b){
    return `The sum of the 2 numbers is ${a+b}`;
};

var pi = 3.142;

//There are 3 ways to export module:

//1st way:
//module.exports.counter = counter;
//module.exports.adder = adder;
//module.exports.pi = pi;

//OR 2nd way:
module.exports = {
    counter : counter,
    adder : adder,
    pi : pi
}

//OR 3rd way: CHANGING ALL THE VAR TO MODULE.EXPORTS
//module.exports.counter = function(arr){return 'There are ' + arr.length +' elements in this array';};
//module.exports.adder = function(a, b){return `The sum of the 2 numbers is ${a+b}`;};
//module.exports.pi = 3.142;