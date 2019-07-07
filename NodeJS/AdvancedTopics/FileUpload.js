// Run this command before running this code "npm install formidable"
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(
    function (req, res) {
        if (req.url == '/fileupload') {
            var form = new formidable.IncomingForm();
            form.parse(req, 
                function (err, fields, files) {
                    var oldpath = files.filetoupload.path;
                    var newpath = 'D:/Learn/NodeJS/AdvancedTopics/' + files.filetoupload.name;
                    fs.writeFile(newpath, oldpath, 
                        function(err) {
                            if (err) throw err;
                            res.write('File written at location successfully!');
                        }
                    );
                    fs.unlink(oldpath, 
                        function(err) {
                            if (err) throw err;
                            res.write('Temp file deleted successfully!');
                            res.end();
                        }
                    );
                    /*
                    // Second Way
                    // rename not working when transfering file to D: drive
                    // Temp file copy stores at -
                    //'C:\Users\SACHIN~1\AppData\Local\Temp\upload_bd9049d119f205ccf32691dc90638f91'
                    // Error - EXDEV: cross-device link not permitted, rename '' -> ''
                    fs.rename(oldpath, newpath, 
                        function (err) {
                            if (err) throw err;
                            res.write('File uploaded and moved!');
                            res.end();
                        }
                    );
                    */
                }
            );
        }
        else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
            res.write('<input type="file" name="filetoupload"><br>');
            res.write('<input type="submit">');
            res.write('</form>');
            return res.end();
        }
    }
).listen(8080);