//Lesson 8
//Streams and Buffers

//Buffers = temporary storage spot for a chunk of data that is being transferred from on place to another.
//Buffers = be filled with data, then passed along.
//Buffers = transfer small chunks of data at a time.

//Data => | => Buffer [|||||  ] => (until the buffer full) => Data passed on




//Streams = flow over time from one place to another

//Stream | => | => | => | => | => | => Buffer [|||||  ] => (until the buffer full) => Data downs to the stream to be proccessed => passed on the client

//We can create Stream in Node.js to transfer data and increase performance.

//Writable streams = allow node.js to write data to a stream
//Readable streams = allow node.js to read data to a stream
//Duplex = can read and write data to a stream

var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMeMore.txt', 'utf8');
//without 'utf8', we will get: new chunk received: <Buffer 41 77 65 73 6f 6d 65 2c 20 79 6f 75 20 72 65 61 64 20 6d 65 2e>
//woth 'utf8', they can read the 'readMeMore.txt' and we will get: new chunk received: Awesome, you read me again.

myReadStream.on('data', function(chunk){
    console.log('new chunk received:');
    console.log(chunk);
});
