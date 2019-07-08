var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true }, 
    function(err, db) {
        if (err) throw err;
        var dbo = db.db("nodejsdb");

        // Inserting rows without user defined _id
        var myobj = [
            { name: 'John', address: 'Highway 71', favorite_product: 1},
            { name: 'Peter', address: 'Lowstreet 4', favorite_product: 2},
            { name: 'Amy', address: 'Apple st 652', favorite_product: 1},
            { name: 'Hannah', address: 'Mountain 21', favorite_product: 3},
            { name: 'Michael', address: 'Valley 345', favorite_product: 2},
            { name: 'Sandy', address: 'Ocean blvd 2', favorite_product: 2},
            { name: 'Betty', address: 'Green Grass 1', favorite_product: 1},
            { name: 'Richard', address: 'Sky st 331', favorite_product: 3},
            { name: 'Susan', address: 'One way 98', favorite_product: 1},
            { name: 'Vicky', address: 'Yellow Garden 2', favorite_product: 1},
            { name: 'Ben', address: 'Park Lane 38', favorite_product: 1},
            { name: 'William', address: 'Central st 954', favorite_product: 2},
            { name: 'Chuck', address: 'Main Road 989', favorite_product: 3},
            { name: 'Viola', address: 'Sideway 1633', favorite_product: 3}
        ];
        dbo.collection("customers").insertMany(myobj, 
            function(err, res) {
                if (err) throw err;
                console.log(res);
                console.log("Number of documents inserted: " + res.insertedCount);
                db.close();
            }
        );

        // Inserting rows with user defined _id
        var myobj = [
            { _id: 1, name: 'Chocolate Ice Cream'},
            { _id: 2, name: 'Lemonade'},
            { _id: 3, name: 'Chole Bhature'}
        ];
        dbo.collection("products").insertMany(myobj, 
            function(err, res) {
                if (err) throw err;
                console.log(res);
                console.log("Number of documents inserted: " + res.insertedCount);
                db.close();
            }
        );
    }
);

/*
//Output for without _id
{ result: { ok: 1, n: 14 },
ops:
[ { name: 'John',
    address: 'Highway 71',
    favorite_product: 1,
    _id: 5d23663faabd611888c2d6a3 },
    { name: 'Peter',
    address: 'Lowstreet 4',
    favorite_product: 2,
    _id: 5d23663faabd611888c2d6a4 },
    { name: 'Amy',
    address: 'Apple st 652',
    favorite_product: 1,
    _id: 5d23663faabd611888c2d6a5 },
    { name: 'Hannah',
    address: 'Mountain 21',
    favorite_product: 3,
    _id: 5d23663faabd611888c2d6a6 },
    { name: 'Michael',
    address: 'Valley 345',
    favorite_product: 2,
    _id: 5d23663faabd611888c2d6a7 },
    { name: 'Sandy',
    address: 'Ocean blvd 2',
    favorite_product: 2,
    _id: 5d23663faabd611888c2d6a8 },
    { name: 'Betty',
    address: 'Green Grass 1',
    favorite_product: 1,
    _id: 5d23663faabd611888c2d6a9 },
    { name: 'Richard',
    address: 'Sky st 331',
    favorite_product: 3,
    _id: 5d23663faabd611888c2d6aa },
    { name: 'Susan',
    address: 'One way 98',
    favorite_product: 1,
    _id: 5d23663faabd611888c2d6ab },
    { name: 'Vicky',
    address: 'Yellow Garden 2',
    favorite_product: 1,
    _id: 5d23663faabd611888c2d6ac },
    { name: 'Ben',
    address: 'Park Lane 38',
    favorite_product: 1,
    _id: 5d23663faabd611888c2d6ad },
    { name: 'William',
    address: 'Central st 954',
    favorite_product: 2,
    _id: 5d23663faabd611888c2d6ae },
    { name: 'Chuck',
    address: 'Main Road 989',
    favorite_product: 3,
    _id: 5d23663faabd611888c2d6af },
    { name: 'Viola',
    address: 'Sideway 1633',
    favorite_product: 3,
    _id: 5d23663faabd611888c2d6b0 } ],
insertedCount: 14,
insertedIds:
{ '0': 5d23663faabd611888c2d6a3,
    '1': 5d23663faabd611888c2d6a4,
    '2': 5d23663faabd611888c2d6a5,
    '3': 5d23663faabd611888c2d6a6,
    '4': 5d23663faabd611888c2d6a7,
    '5': 5d23663faabd611888c2d6a8,
    '6': 5d23663faabd611888c2d6a9,
    '7': 5d23663faabd611888c2d6aa,
    '8': 5d23663faabd611888c2d6ab,
    '9': 5d23663faabd611888c2d6ac,
    '10': 5d23663faabd611888c2d6ad,
    '11': 5d23663faabd611888c2d6ae,
    '12': 5d23663faabd611888c2d6af,
    '13': 5d23663faabd611888c2d6b0 } }
Number of documents inserted: 14

//Output for with _id
{ result: { ok: 1, n: 3 },
ops:
[ { _id: 1, name: 'Chocolate Ice Cream' },
    { _id: 2, name: 'Lemonade' },
    { _id: 3, name: 'Chole Bhature' } ],
insertedCount: 3,
insertedIds: { '0': 1, '1': 2, '2': 3 } }
Number of documents inserted: 3

*/

