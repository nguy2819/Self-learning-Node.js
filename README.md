### Learning Node.js through [The Net Ninja's tutorial](https://www.youtube.com/watch?v=w-7RQ46RgxU&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp)

![node JS](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/320px-Node.js_logo.svg.png)
- [x] Function Expression
```
var sayHi = function(){
console.log('hi');
};
```

- [x] callFunction
```
function callFunction (fun){
fun();
};

callFunction(sayHi);
```

- [x] Modules and require()
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
- [x] The Node Event Emitter
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
- [x] Read and Write Files
```
var fs = require('fs');

var readMe = fs.readFileSync('readMe.txt', 'utf8');
console.log(readMe);
fs.writeFileSync('writeMe.txt', readMe);
```
OR
```
fs.readFile('readMe.txt', 'utf8', function(err, data){
    console.log(data); //this one they are checking to read data "Awesome, you read me." from readMe.txt
    fs.writeFile('writeMeMore.txt', data); //we just created another "writeMemOre.txt" with the data from readMe.txt "Awesome, you read me."
});
//this is an asynchronous code (two or more objects or events-not existing or happening at the same time.)
```
- [x] Creating & Removing Directories
```
var fs = require('fs');

//To delete/unlink a file
fs.unlink('writeMeMore.txt');

//To create a directory
fs.mkdirSync('things'); //like directory public => they appear a directory things

//To delete/remove a directory
fs.rmdirSync('things'); //the directory "things" just created above is being removed
```
```
fs.mkdir('private', function(){
    fs.readFile('readMe.txt', 'utf8', function(err, data){
        fs.writeFile('./private/writeMeInPrivate.txt', data);
    });
});
//So what I did was make a directory, named "private", read the readMe.txt, and lastly write a file, named "writeMeInPrivate.txt" inside private directory, with the same data as the readMe.txt



fs.unlink('./private/writeMeInPrivate.txt', function(){
    fs.rmdir('private');
});
//so I unlink/delete the writeMeInPrivate.txt in private directory
//Then I delete/remove the private directory
```

- [x] Creating a server
- Client => request + request headers => Server
- Client <= response data + response headers <= Server
```
var http = require('http');

//Write response headers
var server = http.createServer(function(req,res){
    console.log('request was made: ' + req.url); //request was made: /heydavid/iloveyou from 127.0.0.1:3000/heydavid/iloveyou
    res.writeHead(200, {'Content-Type': 'text/plain'}); //this is the way we write response header
    res.end('Hi Tien') //end with the content of the response and send it out to the browser
});
server.listen(3000, '127.0.0.1'); //this will start the server and very important.
```
