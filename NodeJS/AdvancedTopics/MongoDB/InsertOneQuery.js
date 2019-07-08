// A document in MongoDB is the same as a record in MySQL
//If you try to insert documents in a collection that do not exist, MongoDB will create the collection automatically.
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true }, 
    function(err, db) {
        if (err) throw err;
        var dbo = db.db("nodejsdb");
        var myobj = { name: "Company Inc", address: "Highway 37", favorite_product: 1};
        dbo.collection("customers").insertOne(myobj, 
            function(err, res) {
                if (err) throw err;
                console.log("1 document inserted");
                console.log(res);
                db.close();
            }
        );
    }
);

// Output
/*
1 document inserted
CommandResult {
result: { n: 1, ok: 1 },
connection:
Connection {
    _events:
    [Object: null prototype] {
        error: [Function],
        close: [Function],
        timeout: [Function],
        parseError: [Function],
        message: [Function] },
    _eventsCount: 5,
    _maxListeners: undefined,
    id: 0,
    options:
    { host: 'localhost',
        port: 27017,
        size: 5,
        minSize: 0,
        connectionTimeout: 30000,
        socketTimeout: 360000,
        keepAlive: true,
        keepAliveInitialDelay: 300000,
        noDelay: true,
        ssl: false,
        checkServerIdentity: true,
        ca: null,
        crl: null,
        cert: null,
        key: null,
        passPhrase: null,
        rejectUnauthorized: false,
        promoteLongs: true,
        promoteValues: true,
        promoteBuffers: false,
        reconnect: true,
        reconnectInterval: 1000,
        reconnectTries: 30,
        domainsEnabled: false,
        disconnectHandler: [Store],
        cursorFactory: [Function],
        emitError: true,
        monitorCommands: false,
        promiseLibrary: [Function: Promise],
        clientInfo: [Object],
        servers: [Array],
        caseTranslate: true,
        useNewUrlParser: true,
        socketTimeoutMS: 360000,
        connectTimeoutMS: 30000,
        bson: BSON {} },
    logger: Logger { className: 'Connection' },
    bson: BSON {},
    tag: undefined,
    maxBsonMessageSize: 67108864,
    port: 27017,
    host: 'localhost',
    socketTimeout: 360000,
    keepAlive: true,
    keepAliveInitialDelay: 300000,
    connectionTimeout: 30000,
    responseOptions:
    { promoteLongs: true,
        promoteValues: true,
        promoteBuffers: false },
    flushing: false,
    queue: [],
    writeStream: null,
    destroyed: false,
    hashedName: '29bafad3b32b11dc7ce934204952515ea5984b3c',
    workItems: [],
    socket:
    Socket {
        connecting: false,
        _hadError: false,
        _handle: [TCP],
        _parent: null,
        _host: 'localhost',
        _readableState: [ReadableState],
        readable: true,
        _events: [Object],
        _eventsCount: 5,
        _maxListeners: undefined,
        _writableState: [WritableState],
        writable: true,
        allowHalfOpen: false,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: null,
        _server: null,
        timeout: 360000,
        [Symbol(asyncId)]: 12,
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]:
        Timeout {
        _called: false,
        _idleTimeout: 360000,
        _idlePrev: [TimersList],
        _idleNext: [TimersList],
        _idleStart: 1685,
        _onTimeout: [Function: bound ],
        _timerArgs: undefined,
        _repeat: null,
        _destroyed: false,
        [Symbol(unrefed)]: true,
        [Symbol(asyncId)]: 22,
        [Symbol(triggerId)]: 12 },
        [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0 },
    buffer: null,
    sizeOfMessage: 0,
    bytesRead: 0,
    stubBuffer: null,
    ismaster:
    { ismaster: true,
        maxBsonObjectSize: 16777216,
        maxMessageSizeBytes: 48000000,
        maxWriteBatchSize: 100000,
        localTime: 2019-07-08T15:41:54.662Z,
        logicalSessionTimeoutMinutes: 30,
        minWireVersion: 0,
        maxWireVersion: 7,
        readOnly: false,
        ok: 1 },
    lastIsMasterMS: 26 },
message:
BinMsg {
    parsed: true,
    raw:
    <Buffer 2d 00 00 00 40 00 00 00 01 00 00 00 dd 07 00 00 00 00 00 00 00 18 00 00 00 10 6e 00 01 00 00 00 01 6f 6b 00 00 00 00 00 00 00 f0 3f 00>,
    data:
    <Buffer 00 00 00 00 00 18 00 00 00 10 6e 00 01 00 00 00 01 6f 6b 00 00 00 00 00 00 00 f0 3f 00>,
    bson: BSON {},
    opts:
    { promoteLongs: true,
        promoteValues: true,
        promoteBuffers: false },
    length: 45,
    requestId: 64,
    responseTo: 1,
    opCode: 2013,
    fromCompressed: undefined,
    responseFlags: 0,
    checksumPresent: false,
    moreToCome: false,
    exhaustAllowed: false,
    promoteLongs: true,
    promoteValues: true,
    promoteBuffers: false,
    documents: [ [Object] ],
    index: 29,
    hashedName: '29bafad3b32b11dc7ce934204952515ea5984b3c' },
ops:
[ { name: 'Company Inc',
    address: 'Highway 37',
    favorite_product: 1,
    _id: 5d2364420ed7ee05b8debaad } ],
insertedCount: 1,
insertedId: 5d2364420ed7ee05b8debaad }

*/


