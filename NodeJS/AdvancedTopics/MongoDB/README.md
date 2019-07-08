[Downlaod MongoDB](https://www.mongodb.com/download-center/community)
```npm install mongodb```
[MongoDB Docs](https://docs.mongodb.com/manual/)

Open command prompt as administrator  
Going to the directory of mongo.exe
```cd ..\..\Program Files\MongoDB\Server\4.0\bin```
Exporting 'customers' collection from 'nodejsdb' database to nodejsdbCustomersMongo.json
```mongoexport --db nodejsdb --collection customers --out nodejsdbCustomersMongo.json```

## Order of code
- CreateDatabase
- CreateCollection
- InsertOneQuery
- InsertManyQuery
- FindOneQuery
- FindAllQuery
- FindSomeQuery
- SortQuery
- DeleteQuery
- DeleteCollectionQuery
- UpdateQuery
- LimitQuery
- JoinQuery

