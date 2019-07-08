// The first argument of the find() method is a query object, and is used to limit the search.

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true }, 
    function(err, db) {
        if (err) throw err;
        var dbo = db.db("nodejsdb");
        var query = { address: "Park Lane 38" };
        
        // Regular expressions can only be used to query strings.
        query = { address: /^S/ };              //Starting with letter 'S'
        query = { name: /^R/, address: /^S/ };              //address starting with letter 'S' and name with 'R'

        dbo.collection("customers").find(query).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    }
);

