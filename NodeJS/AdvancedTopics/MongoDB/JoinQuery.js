// MongoDB is not a relational database, but you can perform a left outer join by using the $lookup stage.
// The $lookup stage lets you specify which collection you want to join with the current collection, 
// and which fields that should match.

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, { useNewUrlParser: true }, 
    function(err, db) {
        if (err) throw err;
        var dbo = db.db("nodejsdb");
        dbo.collection('customers').aggregate([
            { $lookup:
                {
                    from: 'products',
                    localField: 'favorite_product',
                    foreignField: '_id',
                    as: 'customer_favorite'
                }
            }
        ]).toArray(function(err, res) {
            if (err) throw err;
            console.log(JSON.stringify(res));
            db.close();
        });
    }
);


