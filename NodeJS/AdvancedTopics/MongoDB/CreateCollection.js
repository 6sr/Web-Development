// A collection in MongoDB is the same as a table in MySQL
//In MongoDB, a collection is not created until it gets content!

//MongoDB waits until you have inserted a document before it actually creates the collection.

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true }, 
    function(err, db) {
        if (err) throw err;
        var dbo = db.db("nodejsdb");
        dbo.createCollection("customers", 
            function(err, res) {
                if (err) throw err;
                console.log("Collection created!");
                console.log(res);
                db.close();
            }
        );
        dbo.createCollection("products", 
            function(err, res) {
                if (err) throw err;
                console.log("Products created!");
                console.log(res);
                db.close();
            }
        );
    }
);

/*
Collection created!
Collection {
s:
{ pkFactory:
    { [Function: ObjectID]
        index: 11126451,
        createPk: [Function: createPk],
        createFromTime: [Function: createFromTime],
        createFromHexString: [Function: createFromHexString],
        isValid: [Function: isValid],
        ObjectID: [Circular],
        ObjectId: [Circular] },
    db:
    Db {
        _events: [Object: null prototype] {},
        _eventsCount: 0,
        _maxListeners: undefined,
        s: [Object],
        serverConfig: [Getter],
        bufferMaxEntries: [Getter],
        databaseName: [Getter] },
    topology:
    Server {
        _events: [Object],
        _eventsCount: 25,
        _maxListeners: Infinity,
        clientInfo: [Object],
        s: [Object] },
    dbName: 'nodejsdb',
    options:
    { promiseLibrary: [Function: Promise],
        session: [ClientSession] },
    namespace: 'nodejsdb.customers',
    readPreference: null,
    slaveOk: false,
    serializeFunctions: undefined,
    raw: undefined,
    promoteLongs: undefined,
    promoteValues: undefined,
    promoteBuffers: undefined,
    internalHint: null,
    collectionHint: null,
    name: 'customers',
    promiseLibrary: [Function: Promise],
    readConcern: undefined,
    writeConcern: undefined } }
Products created!
Collection {
s:
{ pkFactory:
    { [Function: ObjectID]
        index: 11126451,
        createPk: [Function: createPk],
        createFromTime: [Function: createFromTime],
        createFromHexString: [Function: createFromHexString],
        isValid: [Function: isValid],
        ObjectID: [Circular],
        ObjectId: [Circular] },
    db:
    Db {
        _events: [Object: null prototype] {},
        _eventsCount: 0,
        _maxListeners: undefined,
        s: [Object],
        serverConfig: [Getter],
        bufferMaxEntries: [Getter],
        databaseName: [Getter] },
    topology:
    Server {
        _events: [Object],
        _eventsCount: 25,
        _maxListeners: Infinity,
        clientInfo: [Object],
        s: [Object] },
    dbName: 'nodejsdb',
    options:
    { promiseLibrary: [Function: Promise],
        session: [ClientSession] },
    namespace: 'nodejsdb.products',
    readPreference: null,
    slaveOk: false,
    serializeFunctions: undefined,
    raw: undefined,
    promoteLongs: undefined,
    promoteValues: undefined,
    promoteBuffers: undefined,
    internalHint: null,
    collectionHint: null,
    name: 'products',
    promiseLibrary: [Function: Promise],
    readConcern: undefined,
    writeConcern: undefined } }

*/