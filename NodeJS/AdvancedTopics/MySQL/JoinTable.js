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
sql = "SELECT customers.name AS user, products.name AS favorite FROM customers JOIN products ON customers.favorite_product = products.id";
// INNER JOIN
// You can use INNER JOIN instead of JOIN. They will both give you the same result.

// LEFT JOIN
//If you want to return all users, no matter if they have a favorite product or not, use the LEFT JOIN statementIf 
//you want to return all users, no matter if they have a favorite product or not, use the LEFT JOIN statement
//Replace 'JOIN' by 'LEFT JOIN'
/*
[
{ user: 'John', favorite: 'Chocolate Heaven' },
{ user: 'Peter', favorite: 'Chocolate Heaven' },
{ user: 'Amy', favorite: 'Tasty Lemons' },
{ user: 'Hannah', favorite: null },
{ user: 'Michael', favorite: null }
]
*/

// RIGHT JOIN
//If you want to return all products, and the users who have them as their favorite, even if no user have them as their favorite, 
//use the RIGHT JOIN statement
//Replace 'JOIN' by 'RIGHT JOIN'
/*
[
{ user: 'John', favorite: 'Chocolate Heaven' },
{ user: 'Peter', favorite: 'Chocolate Heaven' },
{ user: 'Amy', favorite: 'Tasty Lemons' },
{ user: null, favorite: 'Vanilla Dreams' }
]
*/

querySQL(sql,dbName);

/*
Connected!
Result:
[ RowDataPacket { user: 'Company Inc', favorite: 'Chocolate Ice Cream' },
RowDataPacket { user: 'John', favorite: 'Chocolate Ice Cream' },
RowDataPacket { user: 'Peter', favorite: 'Lemonade' },
RowDataPacket { user: 'Amy', favorite: 'Chocolate Ice Cream' },
RowDataPacket { user: 'Michael', favorite: 'Lemonade' },
RowDataPacket { user: 'Sandy', favorite: 'Lemonade' },
RowDataPacket { user: 'Betty', favorite: 'Chocolate Ice Cream' },
RowDataPacket { user: 'Richard', favorite: 'Chole Bhature' },
RowDataPacket { user: 'Susan', favorite: 'Chocolate Ice Cream' },
RowDataPacket { user: 'Vicky', favorite: 'Chocolate Ice Cream' },
RowDataPacket { user: 'Ben', favorite: 'Chocolate Ice Cream' },
RowDataPacket { user: 'William', favorite: 'Lemonade' },
RowDataPacket { user: 'Chuck', favorite: 'Chole Bhature' },
RowDataPacket { user: 'Viola', favorite: 'Chole Bhature' } ]
Fields:
[ FieldPacket {
    catalog: 'def',
    db: 'nodejsdb',
    table: 'customers',
    orgTable: 'customers',
    name: 'user',
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
    table: 'products',
    orgTable: 'products',
    name: 'favorite',
    orgName: 'name',
    charsetNr: 33,
    length: 765,
    type: 253,
    flags: 4097,
    decimals: 0,
    default: undefined,
    zeroFill: false,
    protocol41: true } ]

*/