//In Node Application, any async function accepts a callback as the last parameter and a callback function accepts an error as 
//the first parameter. Let's revisit the previous example again.

function errorHandlingWithCallback() {
    var fs = require("fs");

    fs.readFile('input.txt', 
        function (err, data) {
            if (err) {
                console.log(err.stack);
                return;
            }
            console.log(data.toString());
        }
    );
    
    console.log("Program Ended");
}

errorHandlingWithCallback();
