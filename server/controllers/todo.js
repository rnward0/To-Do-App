const express = require('express');
const db = require('../model/db');

const router = express.Router();

router.get('/items', (req, res, next) => {
    const query = 'SELECT * FROM items';
    db.query(query, (err, result) => {
        if(err) {
            console.log(err);
            res.status(500).json({});
        }
        res.status(200).json({ items: result.rows });
    });
});

router.post('/add-item', (req, res, next) => {
    let query = `INSERT INTO items (content)
                    VALUES ('${req.body.content}')`;
    db.query(query, (err, result) => {
        if(err) {
            console.log(err);
            res.status(500).json({});
        }
        res.status(201).json({});
    });
});

router.post('/delete-item', (req, res, next) => {
    let query = `DELETE FROM items 
                WHERE id = ${req.body.id}`;
    db.query(query, (err, result) => {
        if(err) {
            console.log(err);
            res.status(500).json({});
        }
        res.status(200).json({});
    });
});

module.exports = router;