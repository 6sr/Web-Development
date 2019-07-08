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
                console.log("Result: ");
                console.log(result);
                console.log(result.affectedRows + " record(s) updated");
            }
        );
    });
}

dbName = "NodeJSdb";
sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";

querySQL(sql,dbName);
// Address of element at id = 6 is changed to 'Canyon 123' from 'Valley 345'

/*
console.log(result.affectedRows)
// Prints "1"

// Output
Connected!
Result:
OkPacket {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  serverStatus: 34,
  warningCount: 0,
  message: '(Rows matched: 1  Changed: 1  Warnings: 0',
  protocol41: true,
  changedRows: 1 }
1 record(s) updated

*/