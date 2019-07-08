var mysql = require('mysql');

exports.mysqlConnection = function (dbName) {
    var con = mysql.createConnection(
        {
            host: "localhost",
            user: "root",
            password: "",
            database: dbName
        }
    );
    return con;
};

/*
var mysql = require('mysql');

var con = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: ""
    }
);
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
*/



