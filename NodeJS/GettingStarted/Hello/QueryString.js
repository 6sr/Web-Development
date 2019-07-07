//http://localhost:8080/HelloWorld?year=1999&month=12

var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true);
    
    res.write(q.host);
    res.write(q.pathname);
    res.write(q.search);
    var urlQuery = q.query;
    var txt = "<br>" + urlQuery.year + " " + urlQuery.month;

    //Writing on screen
    res.write(req.url);
    res.end(txt);
    //      or
    //res.write(req.url);
    //res.write(txt);
    //res.end();
}).listen(8080);

