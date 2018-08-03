//Lesson 6
//Creating & Removing Directories

var fs = require('fs');

// //To delete/unlink a file
// fs.unlink('writeMeMore.txt'); 
// //I used to have readMe.txt, writeMe.txt, and writeMeMore.txt 
// //this will delete the writeMeMore.txt after I run node public/createremovedirectories.js
// //and the writeMeMore.txt is disappearred.

// //To create a directory
// fs.mkdirSync('things'); //like directory public => they appear a directory things

// //To delete/remove a directory
// fs.rmdirSync('things'); //the directory "things" just created above is being removed

// //The asynchronous function will block every codes after it



//Now, we create a directory without asynchronous "Sync".
//Without Sync, we need to use a callback function
fs.mkdir('private', function(){
    fs.readFile('readMe.txt', 'utf8', function(err, data){
        fs.writeFile('./private/writeMeInPrivate.txt', data);
    });
});
//So what I did was make a directory, named "private", read the readMe.txt, and lastly write a file, named "writeMeInPrivate.txt" inside private directory, with the same data as the readMe.txt

//Without Sync, we delete the private directory with the writeMeInPriviate.txt in it
fs.unlink('./private/writeMeInPrivate.txt', function(){
    fs.rmdir('private');
});
//so I unlink/delete the writeMeInPrivate.txt in private directory
//Then I delete/remove the private directory