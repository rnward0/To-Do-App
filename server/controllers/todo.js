const express = require('express');
const { v4 } = require('uuid');

const router = express.Router();

let itemList = [];

router.get('/items', (req, res, next) => {
    res.status(200).json({ items: itemList });
});

router.post('/add-item', (req, res, next) => {
    const task = {
        content: req.body.content,
        id: v4()
    }
    itemList.unshift(task);
    res.status(201).json({ items: itemList });
});

router.post('/delete-item', (req, res, next) => {
    let index = itemList.map(item => item.id).indexOf(req.body.id);

    itemList.splice(index, 1);
    res.status(200).json({ items: itemList });
});

module.exports = router;