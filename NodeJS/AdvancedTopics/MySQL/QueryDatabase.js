var sqlModule = require('./ConnectDatabase');
var sql = "";
var dbName = "";
function querySQL(sql,dbName) {
    var con = sqlModule.mysqlConnection(dbName);
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    
        con.query(sql, 
            function (err, result) {
                if (err) throw err;
                //console.log("Result: " + result);     // This prints "Result: [Object object]" 
                console.log("Result: ");
                console.log(result);
                console.log("affectedRows for result : " + result.affectedRows);
            }
        );
    });
}

// Creating Database
dbName = "";
sql = "CREATE DATABASE NodeJSdb";

//For below queries select a database
dbName = "NodeJSdb";

// Creating Table
//sql = "CREATE TABLE customers (id INT, name VARCHAR(255), address VARCHAR(255), favorite_product INT)";
sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255), favorite_product INT)";
sql = "CREATE TABLE products (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))";
//sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";

// Insert into Table
SQL = "INSERT INTO products (name) VALUES ('Chocolate Ice Cream')";
sql = "INSERT INTO customers (name, address, favorite_product) VALUES ('Company Inc', 'Highway 37', 1)";

querySQL(sql,dbName);

//Don't remove comments, below lines are just for understanding
/*
//con.query(sql, function (err, result) {
//        if (err) throw err;
//        console.log("Result: " + result);
//});

// result object returned at Line 11 is as follows -
{
    fieldCount: 0,
    affectedRows: 14,
    insertId: 0,
    serverStatus: 2,
    warningCount: 0,
    message: '\'Records:14  Duplicated: 0  Warnings: 0',
    protocol41: true,
    changedRows: 0
}
// Prints when we run create database query
OkPacket {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 0,
    serverStatus: 2,
    warningCount: 0,
    message: '',
    protocol41: true,
    changedRows: 0 
}
*/
