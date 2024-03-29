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
            }
        );
    });
}

dbName = "NodeJSdb";

sql = "DELETE FROM customers WHERE address = 'Mountain 21'";

querySQL(sql,dbName);
// Element with id = 5 is deleted as its address was 'Mountain 21'

/*
console.log(result.affectedRows)
// Prints "1"
Connected!
Result:
OkPacket {
fieldCount: 0,
affectedRows: 1,
insertId: 0,
serverStatus: 34,
warningCount: 0,
message: '',
protocol41: true,
changedRows: 0 }

result object
{
fieldCount: 0,
affectedRows: 1,
insertId: 0,
serverStatus: 34,
warningCount: 0,
message: '',
protocol41: true,
changedRows: 0
}
*/