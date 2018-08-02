### Learning Node.js through [The Net Ninja's tutorial](https://www.youtube.com/watch?v=w-7RQ46RgxU&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp)

![node JS](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/320px-Node.js_logo.svg.png)
- Function Expression
```
var sayHi = function(){
console.log('hi');
};
```

- callFunction
```
function callFunction (fun){
fun();
};

callFunction(sayHi);
```

- Modules and require()
** In app.js
```
var stuff = require('./stuff');
console.log(stuff.counter(['david', 'tien', 'borland'])); //There are 3 elements in this array
console.log(stuff.adder(5,6)); //5+6=11
console.log(stuff.adder(stuff.pi,5)); //3.142 + 5 = 8.142
```
** In stuff.js
```
var counter = function(arr){
    return 'There are ' + arr.length +' elements in this array';
};

var adder = function(a, b){
    return `The sum of the 2 numbers is ${a+b}`;
};

var pi = 3.142;
```
There are 3 ways to export module:

1st way:
```
module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;
```

2nd way:
```
module.exports = {
    counter : counter,
    adder : adder,
    pi : pi
}
```

3rd way: CHANGING ALL THE VAR TO MODULE.EXPORTS
```
module.exports.counter = function(arr){return 'There are ' + arr.length +' elements in this array';};
module.exports.adder = function(a, b){return `The sum of the 2 numbers is ${a+b}`;};
module.exports.pi = 3.142;
```
- The Node Event Emitter
```
var events = require('events');

var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(mssg){ 
    console.log(mssg);
});
//This is a listener function. It will tell what events happen => to listen for.
//When myEmitter emitted 'someEvent' happened, they will run the function message

myEmitter.emit('someEvent', 'the event was emitted');
//This is an emit function. 
//We let people knows 'someEvent' happens, then the second argument will be the message (what message we want people to know).
```

```
var util = require('util');
util.inherits(myEmitter, events.EventEmitter);
//means COPY
```
