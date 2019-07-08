var sqlModule = require('./ConnectDatabase');
var sql = "";
var dbName = "";
function querySQL(sql,dbName) {
    var con = sqlModule.mysqlConnection(dbName);
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    
        con.query(sql, 
            function (err, result, fields) {
                if (err) throw err;
                console.log("Result: ");
                console.log(result);
                console.log("Fields: ");
                console.log(fields);
            }
        );
    });
}

dbName = "NodeJSdb";

sql = "SELECT * FROM customers";
//sql = "SELECT name, address FROM customers";

// Order By
//sql = "SELECT * FROM customers ORDER BY name";
//sql = "SELECT * FROM customers ORDER BY name DESC";

// Limit
// sql = "SELECT * FROM customers LIMIT 5";
// sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";
// sql = "SELECT * FROM customers LIMIT 2, 5";
// "LIMIT 2, 5" and "LIMIT 5 OFFSET 2" are same - starts selecting after first 2 rows i.e. from 3rd row

querySQL(sql,dbName);

//Don't remove comments, below lines are just for understanding

// The third parameter of the callback function is an array containing information about each field in the result.
//console.log(result[2].address);     // Prints "Apple st 652"
//console.log(fields[1].name);      // Prints "address"

//Output for SELECT * FROM customers
/*
Connected!
Result:
[ RowDataPacket {
    id: 1,
    name: 'Company Inc',
    address: 'Highway 37',
    favorite_product: 1 },
  RowDataPacket {
    id: 2,
    name: 'John',
    address: 'Highway 71',
    favorite_product: 1 },
  RowDataPacket {
    id: 3,
    name: 'Peter',
    address: 'Lowstreet 4',
    favorite_product: 2 },
  RowDataPacket {
    id: 4,
    name: 'Amy',
    address: 'Apple st 652',
    favorite_product: 1 },
  RowDataPacket {
    id: 5,
    name: 'Hannah',
    address: 'Mountain 21',
    favorite_product: 3 },
  RowDataPacket {
    id: 6,
    name: 'Michael',
    address: 'Valley 345',
    favorite_product: 2 },
  RowDataPacket {
    id: 7,
    name: 'Sandy',
    address: 'Ocean blvd 2',
    favorite_product: 2 },
  RowDataPacket {
    id: 8,
    name: 'Betty',
    address: 'Green Grass 1',
    favorite_product: 1 },
  RowDataPacket {
    id: 9,
    name: 'Richard',
    address: 'Sky st 331',
    favorite_product: 3 },
  RowDataPacket {
    id: 10,
    name: 'Susan',
    address: 'One way 98',
    favorite_product: 1 },
  RowDataPacket {
    id: 11,
    name: 'Vicky',
    address: 'Yellow Garden 2',
    favorite_product: 1 },
  RowDataPacket {
    id: 12,
    name: 'Ben',
    address: 'Park Lane 38',
    favorite_product: 1 },
  RowDataPacket {
    id: 13,
    name: 'William',
    address: 'Central st 954',
    favorite_product: 2 },
  RowDataPacket {
    id: 14,
    name: 'Chuck',
    address: 'Main Road 989',
    favorite_product: 3 },
  RowDataPacket {
    id: 15,
    name: 'Viola',
    address: 'Sideway 1633',
    favorite_product: 3 } ]
Fields:
[ FieldPacket {
    catalog: 'def',
    db: 'nodejsdb',
    table: 'customers',
    orgTable: 'customers',
    name: 'id',
    orgName: 'id',
    charsetNr: 63,
    length: 11,
    type: 3,
    flags: 16899,
    decimals: 0,
    default: undefined,
    zeroFill: false,
    protocol41: true },
  FieldPacket {
    catalog: 'def',
    db: 'nodejsdb',
    table: 'customers',
    orgTable: 'customers',
    name: 'name',
    orgName: 'name',
    charsetNr: 33,
    length: 765,
    type: 253,
    flags: 4097,
    decimals: 0,
    default: undefined,
    zeroFill: false,
    protocol41: true },
  FieldPacket {
    catalog: 'def',
    db: 'nodejsdb',
    table: 'customers',
    orgTable: 'customers',
    name: 'address',
    orgName: 'address',
    charsetNr: 33,
    length: 765,
    type: 253,
    flags: 4097,
    decimals: 0,
    default: undefined,
    zeroFill: false,
    protocol41: true },
  FieldPacket {
    catalog: 'def',
    db: 'nodejsdb',
    table: 'customers',
    orgTable: 'customers',
    name: 'favorite_product',
    orgName: 'favorite_product',
    charsetNr: 63,
    length: 11,
    type: 3,
    flags: 4097,
    decimals: 0,
    default: undefined,
    zeroFill: false,
    protocol41: true } ]

*/