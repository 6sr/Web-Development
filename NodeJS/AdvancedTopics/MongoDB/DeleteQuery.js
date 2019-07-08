// To delete a record, or document as it is called in MongoDB, we use the deleteOne() method.
// The first parameter of the deleteOne() method is a query object defining which document to delete.
// Note: If the query finds more than one document, only the first occurrence is deleted.

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true }, 
    function(err, db) {
        if (err) throw err;
        var dbo = db.db("nodejsdb");

        // Delete One
        var myquery = { address: 'Mountain 21' };
        dbo.collection("customers").deleteOne(myquery, 
            function(err, obj) {
                if (err) throw err;
                console.log("1 document deleted");      // i.e. 1 record (row) deleted
                db.close();
            }
        );

        // Delete Many - This was not executed on my sample database
        var myquery = { address: /^O/ };
        dbo.collection("customers").deleteMany(myquery, 
            function(err, obj) {
                if (err) throw err;
                console.log(obj.result.n + " document(s) deleted");
                db.close();
            }
        );
    }
);

// Result object for delete many
// { n: 2, ok: 1 }

// console.log(obj.result.n);
// Prints 2
