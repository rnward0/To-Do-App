//Users:
//Ryan: secure_mongo_pass

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const uri = 'mongodb+srv://Ryan:secure_mongo_pass@cluster0.boyzc.mongodb.net/todo?retryWrites=true&w=majority';

const mongoConnect = cb => {
    MongoClient.connect(uri)
    .then(client => {
        console.log('Connected to db!');
        _db = client.db();
        cb(client);
    })
    .catch(err => console.log(err));
}

const getDb = () => {
    if(_db) {
        return _db;
    }
    console.log('No database found!');
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;




