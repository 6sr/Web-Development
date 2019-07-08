//Not tested
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
            }
        );
    });
}

dbName = "NodeJSdb";
sql = "DROP TABLE customers";
sql = "DROP TABLE IF EXISTS customers";     // Avoids error while dropping table

querySQL(sql,dbName);

//Result Object
/*
Difference in warningCount i.e. 0 for one and 1 for another
// If table exist
{
  fieldCount: 0,
  affectedRows: 0,
  insertId: 0,
  serverstatus: 2,
  warningCount: 0,
  message: '',
  protocol41: true,
  changedRows: 0
}

// If table does not exist
{
  fieldCount: 0,
  affectedRows: 0,
  insertId: 0,
  serverstatus: 2,
  warningCount: 1,
  message: '',
  protocol41: true,
  changedRows: 0
}
*/

