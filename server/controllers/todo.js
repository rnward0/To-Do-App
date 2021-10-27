const express = require('express');
const getDb = require('../model/db').getDb;
const mongodb = require('mongodb');

const router = express.Router();

router.get('/items', (req, res, next) => {
    const db = getDb();
    db.collection('items').find().toArray()
        .then(result => {
            res.status(200).json({ items: result });
        })
        .catch(err => console.log(err));
});

router.post('/add-item', (req, res, next) => {
    const db = getDb();
    db.collection('items').insertOne({ content: req.body.content })
        .then(result => {
            res.status(201).json({ items: { _id: result.insertedId.toString(), content: req.body.content } });
        })
        .catch(err => console.log(err));
});

router.post('/delete-item', (req, res, next) => {
    const db = getDb();
    db.collection('items').deleteOne({ _id: new mongodb.ObjectId(req.body.id) })
        .then(() => {
            res.status(200).send();
        })
        .catch(err => console.log(err));
});

module.exports = router;