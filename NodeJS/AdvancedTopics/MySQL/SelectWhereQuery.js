// Using WHERE clause
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

sql = "SELECT * FROM customers WHERE address = 'Park Lane 38'";

//You can also select the records that starts, includes, or ends with a given letter or phrase.
//Use the '%' wildcard to represent zero, one or multiple characters
sql = "SELECT * FROM customers WHERE address LIKE 'S%'";

mysql(sql,dbName);

// Escaping Query Values
// When query values are variables provided by the user, you should escape the values.
// This is to prevent SQL injections, which is a common web hacking technique to destroy or misuse your database.

// The MySQL module has methods to escape query values:
// 1
var adr = 'Mountain 21';
sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
querySQL(sql,dbName);

// 2
adr = 'Mountain 21';
sql = 'SELECT * FROM customers WHERE address = ?';
con.query(sql, [adr], function (err, result) {
    if (err) throw err;
    console.log(result);
});

// 3
var name = 'Amy';
adr = 'Mountain 21';
sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
con.query(sql, [name, adr], function (err, result) {
    if (err) throw err;
    console.log(result);
});

