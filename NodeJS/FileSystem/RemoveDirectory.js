function removeDirectory() {
    var fs = require("fs");

    console.log("Going to delete directory temp");  //  "/tmp/test"
    //  "/tmp/test"
    fs.rmdir("temp", 
        function(err) {
            if (err) {
                return console.error(err);
            }
            console.log("Going to read directory /tmp");
            
            fs.readdir("/tmp/", 
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
    );
}

removeDirectory();
//fs.rmdir(path, callback)
