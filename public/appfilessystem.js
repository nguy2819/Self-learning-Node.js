//Lesson 5
// Reading & Writing Files (fs)

var fs = require('fs');

var readMe = fs.readFileSync('readMe.txt', 'utf8');
console.log(readMe);
// the ".readFileSync()"" will block any code below it from being read 
//until they finished reading anything inside ".readFileSync()"
//and it also allows the appfilessystem.js to go out and search for readMe.txt and read it.
//For ex: it needs to finish reading the "readMe.txt" before reading anything else.

//We also stored the content of readMe.txt in the variable readMe.

fs.writeFileSync('writeMe.txt', readMe);
//when we assigned where we want to write a file, under named writeMe.txt => it will created the writeMe.txt automatically
//and the second argument "readMe" (is the variable of the readMe.txt) will be the content of readMe.txt transfers over writeMe.txt OR what you want to write in writeMe.txt


fs.readFile('readMe.txt', 'utf8', function(err, data){
    console.log(data); //this one they are checking to read data "Awesome, you read me." from readMe.txt
    fs.writeFile('writeMeMore.txt', data); //we just created another "writeMemOre.txt" with the data from readMe.txt "Awesome, you read me."
});
//this is an asynchronous code (two or more objects or events-not existing or happening at the same time.)