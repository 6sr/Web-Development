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
sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";

querySQL(sql,dbName);
