function writingFile() {
    var fs = require("fs");

    console.log("Going to write into existing file");
    fs.writeFile('output.txt', 'Simply Easy Learning!', 
        function(err) {
            if (err) {
                return console.error(err);
            }

            console.log("Data written successfully!");
            console.log("Let's read newly written data");

            //Reading written data
            fs.readFile('output.txt', 
                function (err, data) {
                    if (err) {
                        return console.error(err);
                    }
                    console.log("Asynchronous read: " + data.toString());
                }
            );
        }
    );
}

writingFile();
//fs.writeFile(filename, data[, options], callback)


