const getDb = require('./db').getDb;

class User {
    constructor({ email, password }) {
        this.email = email;
        this.password = password;
    }

    save = () => {
        const db = getDb();
        return db.collection('users').insertOne({ email: this.email, password: this.password });
    }

    static find = email => {
        const db = getDb();
        return db.collection('users').findOne({ email: email });
    }
}

module.exports = User;