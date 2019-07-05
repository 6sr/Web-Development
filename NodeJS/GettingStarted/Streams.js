//Streams are objects that let you read data from a source or write data to a destination in continuous fashion.
//Readable, Writable, Duplex
//Transform - duplex stream where the output is computed based on input

//https://github.com/nodejs/node/issues/21122

function readStream() {
    var fs = require("fs");
    var data = '';

    // Create a readable stream
    var readerStream = fs.createReadStream('input.txt');
    // Set the encoding to be utf8. 
    readerStream.setEncoding('UTF8');

    // Handle stream events --> data, end, and error
    readerStream.on('data', 
        function(chunk) {
            data += chunk;
        }
    );
    readerStream.on('end', 
        function() {
            console.log(data);
        }
    );
    readerStream.on('error', 
        function(err) {
            console.log(err.stack);
        }
    );
    readerStream.on('finish', 
        function() {  //finish event not fired why?
            console.log("Write completed.");
        }
    );
    console.log("Stream Reading Ended");
}

function writeStream() {
    var fs = require("fs");
    var data = 'Welcome to the world of NodeJS';
    
    // Create a writable stream
    var writerStream = fs.createWriteStream('output.txt');
    
    // Write the data to stream with encoding to be utf8
    writerStream.write(data,'UTF8');
    
    // Mark the end of file
    writerStream.end();
    
    // Handle stream events --> finish, and error
    writerStream.on('finish', 
        function() {
            console.log("Write completed.");
        }
    );
    writerStream.on('error', 
        function(err) {
            console.log(err.stack);
        }
    );
    console.log("Stream Writing Ended");
}

function pipingStream() {
    var fs = require("fs");

    // Create a readable stream
    var readerStream = fs.createReadStream('input.txt');

    // Create a writable stream
    var writerStream = fs.createWriteStream('output.txt');

    // Pipe the read and write operations
    // read input.txt and write data to output.txt
    readerStream.pipe(writerStream);

    console.log("Stream Piping Ended");
}

//Chaining is a mechanism to connect the output of one stream to another stream and create a chain of 
//multiple stream operations. It is normally used with piping operations. Now we'll use piping and 
//chaining to first compress a file and then decompress the same.
function compressFile() {
    var fs = require("fs");
    var zlib = require('zlib');
    
    // Compress the file input.txt to input.txt.gz
    fs.createReadStream('input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt.gz'));
      
    console.log("File Compressed");
}

function decompressFile() {
    var fs = require("fs");
    var zlib = require('zlib');
    
    // Decompress the file input.txt.gz to input.txt
    fs.createReadStream('input.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('input.txt'));
      
    console.log("File Decompressed");
}

readStream();
//writeStream();
//pipingStream();
//compressFile();
//decompressFile();
