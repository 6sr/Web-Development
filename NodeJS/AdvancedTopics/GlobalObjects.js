console.log( __filename );
console.log( __dirname );

function printHello1() {
    console.log( "Hello, User 1");
}
var t1 = setTimeout(printHello1, 2000);   // Now call above function after 2 seconds
//clearTimeout(t1);    // Now clear the timer

function printHello2() {
    console.log( "Hello, User 2");
}
var t2 = setInterval(printHello2, 2000);
clearInterval(t2);

// console - Global object used to print msg to stdout, stderr
    console.log("Hello Console log");
    console.info("Hello Console info");
    console.error("Error Console");
// process - Global object, instance of EventEmitter
    console.log('Current directory: ' + process.cwd());     // Print the current directory
    console.log('Current version: ' + process.version);     // Print the process version
    console.log(process.memoryUsage());     // Print the memory usage

