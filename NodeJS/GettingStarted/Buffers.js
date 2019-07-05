//Buffer class is a global class that can be accessed in an application without importing the buffer module.

function bufferWrite() {
    //Writing to buffers
    //buf.write(string[, offset][, length][, encoding])
    console.log("\nWriting to buffer");
    var buf = new Buffer(256);      //create an uninitiated Buffer of 256 octets
    len = buf.write("Welcome to my World",2);
    console.log("Octets written : "+  len);
}

function bufferRead() {
    //Reading from buffers
    //buf.toString([encoding][, start][, end])
    console.log("\nReading from buffer");
    var buf = new Buffer(26);
    for (var i = 0 ; i < 26 ; i++) {
        buf[i] = i + 97;
    }
    console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
    console.log( buf.toString('ascii',0,5));   // outputs: abcde
    console.log( buf.toString('utf8',0,5));    // outputs: abcde
    console.log( buf.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde
}

function bufferToJSON() {
    //Convert Buffer to JSON
    console.log("\nConverting buffer to json");
    var buf = new Buffer('Welcome to my World');
    var json = buf.toJSON(buf);
    console.log(json);
}

function bufferConcatenate() {
    //Concatenate Buffers
    //Buffer.concat(list[, totalLength])
    console.log("\nConcatenating buffers");
    var buffer1 = new Buffer('Hello User ');
    var buffer2 = new Buffer('Welcome to my World');
    var buffer3 = Buffer.concat([buffer1,buffer2]);
    console.log("buffer3 content: " + buffer3.toString());
}

function bufferCompare() {
    //Compare Buffers
    //buf.compare(otherBuffer)
    console.log("\nComparing buffers");
    var buffer1 = new Buffer('ABC');
    var buffer2 = new Buffer('ABCD');
    var result = buffer1.compare(buffer2);
    if(result < 0) {
        console.log(buffer1 +" comes before " + buffer2);
    }
    else if(result === 0) {
        console.log(buffer1 +" is same as " + buffer2);
    }
    else {
        console.log(buffer1 +" comes after " + buffer2);
    }
}

function bufferCopy() {
    //Copy Buffer
    //buf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd])
    console.log("\nCopying buffer");
    var buffer1 = new Buffer('ABC');
    var buffer2 = new Buffer(3);
    buffer1.copy(buffer2);
    console.log("buffer2 content: " + buffer2.toString());
}

function bufferSlice() {
    //Slice Buffer
    //buf.slice([startIndex][, endIndex])
    console.log("\nSlicing buffer");
    var buffer1 = new Buffer('Welcome to my World');
    var buffer2 = buffer1.slice(14,19);
    console.log("buffer2 content: " + buffer2.toString());
}

function bufferLength() {
    //Buffer Length
    //buf.length;
    console.log("\nLength of buffer in bytes");
    var buffer = new Buffer('Welcome to my World');
    console.log("buffer length: " + buffer.length);
}

//                   Class Methods

//Buffer.isEncoding(encoding)               Returns true if the encoding is a valid encoding argument, false otherwise.

//Buffer.isBuffer(obj)                      Tests if obj is a Buffer.

//Buffer.byteLength(string[, encoding])     Gives actual byte length of string. encoding defaults to 'utf8'. It is not the same as
//                                          String.prototype.length, since String.prototype.length returns the number of characters 
//                                          in a string.

//Buffer.concat(list[, totalLength])        Returns a buffer which is the result of concatenating all the buffers in the list together.

//Buffer.compare(buf1, buf2)                The same as buf1.compare(buf2). Useful for sorting an array of buffers.

bufferWrite();
bufferRead();
//bufferToJSON();
bufferConcatenate();
bufferCompare();
bufferCopy();
bufferSlice();
bufferLength();

//Prints at end of output
//    (node:7804) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. 
//    Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
