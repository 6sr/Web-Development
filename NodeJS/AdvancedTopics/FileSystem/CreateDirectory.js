function createDirectory() {
    var fs = require("fs");

    console.log("Going to create directory temp");  //  "/tmp/test"
    //  "/tmp/test"
    fs.mkdir('temp', 
    function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("Directory created successfully!");
        }
    );
}

createDirectory();
//fs.mkdir(path[, mode], callback)
