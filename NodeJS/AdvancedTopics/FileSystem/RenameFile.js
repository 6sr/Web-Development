function renameFile() {
    var fs = require("fs");

    console.log("Going to delete an existing file");
    fs.rename('temp.txt', 'temp1.txt', 
    function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("File renamed successfully!");
        }
    );
}

renameFile();
//fs.rename(name, newName, callback)
