// In MongoDB, a database is not created until it gets content!

// MongoDB waits until you have created a collection (table), with at least one 
// document (record) before it actually creates the database (and collection).

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/nodejsdb";

MongoClient.connect(url, { useNewUrlParser: true }, 
    function(err, db) {
        if (err) throw err;
        console.log("Database created!");
        db.close();
    }
);

// Error when i remove { useNewUrlParser: true } parameter from connect function

//(node:8220) DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. 
//To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.

