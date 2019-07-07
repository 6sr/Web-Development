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

//dbName = "NodeJSdb";
dbName = "votingsystem";

sql = "SELECT * FROM languages";
//sql = "SELECT * FROM customers";
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
/*
console.log(result[2].address);
// Prints "Apple st 652"

// result object returned by select query
[
  { id: 1, name: 'John', address: 'Highway 71'},
  { id: 2, name: 'Peter', address: 'Lowstreet 4'},
  { id: 3, name: 'Amy', address: 'Apple st 652'},
  { id: 4, name: 'Hannah', address: 'Mountain 21'},
  { id: 5, name: 'Michael', address: 'Valley 345'},
  { id: 6, name: 'Sandy', address: 'Ocean blvd 2'},
  { id: 7, name: 'Betty', address: 'Green Grass 1'},
  { id: 8, name: 'Richard', address: 'Sky st 331'},
  { id: 9, name: 'Susan', address: 'One way 98'},
  { id: 10, name: 'Vicky', address: 'Yellow Garden 2'},
  { id: 11, name: 'Ben', address: 'Park Lane 38'},
  { id: 12, name: 'William', address: 'Central st 954'},
  { id: 13, name: 'Chuck', address: 'Main Road 989'},
  { id: 14, name: 'Viola', address: 'Sideway 1633'}
]
*/

/*
console.log(fields[1].name);
// Prints "address"

// The third parameter of the callback function is an array containing information about each field in the result.
[
  {
    catalog: 'def',
    db: 'mydb',
    table: 'customers',
    orgTable: 'customers',
    name: 'name',
    orgName: 'address',
    charsetNr: 33,
    length: 765,
    type: 253,
    flags: 0,
    decimals: 0,
    default: undefined,
    zeroFill: false,
    protocol41: true
  },
  {
    catalog: 'def',
    db: 'mydb',
    table: 'customers',
    orgTable: 'customers',
    name: 'address',
    orgName: 'address',
    charsetNr: 33,
    length: 765,
    type: 253,
    flags: 0,
    decimals: 0,
    default: undefined,
    zeroFill: false,
    protocol41: true
  {
]

*/
