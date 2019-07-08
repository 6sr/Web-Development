// You can update a record, or document as it is called in MongoDB, by using the updateOne() method.
// The first parameter of the updateOne() method is a query object defining which document to update.
// The second parameter is an object defining the new values of the document.

// Note: If the query finds more than one record, only the first occurrence is updated.

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, { useNewUrlParser: true }, 
    function(err, db) {
        if (err) throw err;
        var dbo = db.db("nodejsdb");

        var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };

        var newvalues = { $set: { address: "Canyon 123" } };        // For updating only Specific fields

        // Updating only one document
        var myquery = { address: "Valley 345" };
        dbo.collection("customers").updateOne(myquery, newvalues, 
            function(err, res) {
                if (err) throw err;
                console.log("1 document updated");
                db.close();
            }
        );

        // Updating many documents - This was not executed on my sample database
        var myquery = { address: /^S/ };        // Selects many documents
        dbo.collection("customers").updateMany(myquery, newvalues, 
            function(err, res) {
                if (err) throw err;
                console.log(res.result.nModified + " document(s) updated");
                db.close();
            }
        );
    }
);

// Result object
// { n: 1, nModified: 2, ok: 1 }
// console.log(res.result.nModified);   // Prints '2'

