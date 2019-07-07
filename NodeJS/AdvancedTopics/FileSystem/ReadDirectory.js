function readDirectory() {
    var fs = require("fs");

    console.log("Going to read directory temp");    //  "/tmp"
    //  "/tmp/"
    fs.readdir("temp",
        function(err, files) {
            if (err) {
                return console.error(err);
            }
            files.forEach( 
                function (file) {
                    console.log( file );
                }
            );
        }
    );
}

readDirectory();
//fs.readdir(path, callback)