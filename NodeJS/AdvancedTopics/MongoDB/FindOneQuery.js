// In MongoDB we use the find and findOne methods to find data in a collection.

// Just like the SELECT statement is used to find data in a table in a MySQL 
// database.var MongoClient = require('mongodb').MongoClient;

// To select data from a collection in MongoDB, we can use the findOne() method.
// The findOne() method returns the first occurrence in the selection.
// The first parameter of the findOne() method is a query object. 
// In this example we use an empty query object, which selects all documents 
// in a collection (but returns only the first document).

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true }, 
    function(err, db) {
        if (err) throw err;
        var dbo = db.db("nodejsdb");
        dbo.collection("customers").findOne({}, 
            function(err, result) {
                if (err) throw err;
                console.log(result.name);
                db.close();
            }
        );
    }
);

