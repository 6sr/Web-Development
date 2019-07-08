// To select data from a table in MongoDB, we can also use the find() method.
// The find() method returns all occurrences in the selection.
// The first parameter of the find() method is a query object. 
// In this example we use an empty query object, which selects all documents in the collection.
// No parameters in the find() method gives you the same result as SELECT * in MySQL.
// projection is used for selecting columns

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true }, 
    function(err, db) {
        if (err) throw err;
        var dbo = db.db("nodejsdb");
        dbo.collection("customers").find({}).toArray(function(err, result) {        // selects all columns
            if (err) throw err;
            console.log(result);
            db.close();
        });
        dbo.collection("customers").find({}, { projection: { _id: 0, name: 1, address: 1 } }).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
        // find({}, { projection: { address: 0 } })                           // Excludes address column

        // To exclude the _id field, you must set its value to 0
        // find({}, { projection: { _id: 0, name: 1 } })                      // Only name column

        // find({}, { projection: { _id: 0 } })                               // All except _id

        // find({}, { projection: { name: 1, address: 0 } })                  //Error
    }
);


// The second parameter of the find() method is the projection object that describes which fields to include in the result.
// You are not allowed to specify both 0 and 1 values in the same object (except if one of the fields is the _id field). 
// If you specify a field with the value 0, all other fields get the value 1, and vice versa

/*
console.log(result[2].address);         // Prints 'Apple st 652'

// Output
[ { _id: 5d2364420ed7ee05b8debaad,
    name: 'Company Inc',
    address: 'Highway 37',
    favorite_product: 1 },
  { _id: 5d23663faabd611888c2d6a3,
    name: 'John',
    address: 'Highway 71',
    favorite_product: 1 },
  { _id: 5d23663faabd611888c2d6a4,
    name: 'Peter',
    address: 'Lowstreet 4',
    favorite_product: 2 },
  { _id: 5d23663faabd611888c2d6a5,
    name: 'Amy',
    address: 'Apple st 652',
    favorite_product: 1 },
  { _id: 5d23663faabd611888c2d6a6,
    name: 'Hannah',
    address: 'Mountain 21',
    favorite_product: 3 },
  { _id: 5d23663faabd611888c2d6a7,
    name: 'Michael',
    address: 'Valley 345',
    favorite_product: 2 },
  { _id: 5d23663faabd611888c2d6a8,
    name: 'Sandy',
    address: 'Ocean blvd 2',
    favorite_product: 2 },
  { _id: 5d23663faabd611888c2d6a9,
    name: 'Betty',
    address: 'Green Grass 1',
    favorite_product: 1 },
  { _id: 5d23663faabd611888c2d6aa,
    name: 'Richard',
    address: 'Sky st 331',
    favorite_product: 3 },
  { _id: 5d23663faabd611888c2d6ab,
    name: 'Susan',
    address: 'One way 98',
    favorite_product: 1 },
  { _id: 5d23663faabd611888c2d6ac,
    name: 'Vicky',
    address: 'Yellow Garden 2',
    favorite_product: 1 },
  { _id: 5d23663faabd611888c2d6ad,
    name: 'Ben',
    address: 'Park Lane 38',
    favorite_product: 1 },
  { _id: 5d23663faabd611888c2d6ae,
    name: 'William',
    address: 'Central st 954',
    favorite_product: 2 },
  { _id: 5d23663faabd611888c2d6af,
    name: 'Chuck',
    address: 'Main Road 989',
    favorite_product: 3 },
  { _id: 5d23663faabd611888c2d6b0,
    name: 'Viola',
    address: 'Sideway 1633',
    favorite_product: 3 } ]
[ { name: 'Company Inc', address: 'Highway 37' },
  { name: 'John', address: 'Highway 71' },
  { name: 'Peter', address: 'Lowstreet 4' },
  { name: 'Amy', address: 'Apple st 652' },
  { name: 'Hannah', address: 'Mountain 21' },
  { name: 'Michael', address: 'Valley 345' },
  { name: 'Sandy', address: 'Ocean blvd 2' },
  { name: 'Betty', address: 'Green Grass 1' },
  { name: 'Richard', address: 'Sky st 331' },
  { name: 'Susan', address: 'One way 98' },
  { name: 'Vicky', address: 'Yellow Garden 2' },
  { name: 'Ben', address: 'Park Lane 38' },
  { name: 'William', address: 'Central st 954' },
  { name: 'Chuck', address: 'Main Road 989' },
  { name: 'Viola', address: 'Sideway 1633' } ]

*/