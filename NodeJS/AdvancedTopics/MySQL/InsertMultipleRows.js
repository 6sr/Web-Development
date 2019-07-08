var sqlModule = require('./ConnectDatabase');

var dbName = "NodeJSdb";
var con = sqlModule.mysqlConnection(dbName);

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO customers (name, address, favorite_product) VALUES ?";
    var values = [
        ['John', 'Highway 71',1],
        ['Peter', 'Lowstreet 4',2],
        ['Amy', 'Apple st 652',1],
        ['Hannah', 'Mountain 21',3],
        ['Michael', 'Valley 345',2],
        ['Sandy', 'Ocean blvd 2',2],
        ['Betty', 'Green Grass 1',1],
        ['Richard', 'Sky st 331',3],
        ['Susan', 'One way 98',1],
        ['Vicky', 'Yellow Garden 2',1],
        ['Ben', 'Park Lane 38',1],
        ['William', 'Central st 954',2],
        ['Chuck', 'Main Road 989',3],
        ['Viola', 'Sideway 1633',3]
    ];
    con.query(sql, [values], 
        function (err, result) {
            if (err) throw err;
            console.log(result);
            console.log("Number of records inserted: " + result.affectedRows);
        }
    );

    sql = "INSERT INTO products (name) VALUES ?";
    values = [
        ['Lemonade'],
        ['Chole Bhature']
    ];
    con.query(sql, [values], 
        function (err, result) {
            if (err) throw err;
            console.log(result);
            console.log("Number of records inserted: " + result.affectedRows);
        }
    );
    
});

/*
Connected!
OkPacket {
  fieldCount: 0,
  affectedRows: 14,
  insertId: 2,
  serverStatus: 2,
  warningCount: 0,
  message: '\'Records: 14  Duplicates: 0  Warnings: 0',
  protocol41: true,
  changedRows: 0 }
Number of records inserted: 14
OkPacket {
    fieldCount: 0,
    affectedRows: 2,
    insertId: 2,
    serverStatus: 2,
    warningCount: 0,
    message: '&Records: 2  Duplicates: 0  Warnings: 0',
    protocol41: true,
    changedRows: 0 }
  Number of records inserted: 2
*/



