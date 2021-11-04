const express = require('express');
const bcrypt = require('bcryptjs');

const User = require('../model/user');

const router = express.Router();

router.post("/signup", (req, res, next) => {
    if(req.body.password !== req.body.confirmPassword) {
        return res.status(403).json({});
    }
    User.find(req.body.email)
        .then(user => {
            if(user) {
                return;
            }
            bcrypt.hash(req.body.password, 12)
                .then(hashedPassword => {
                    const newUser = new User({
                        email: req.body.email,
                        password: hashedPassword
                    });
                    return newUser.save();
                })
                .catch(err => console.log(err));
        })
        .then(result => {
            if(!result) {
                return res.status(409).json({});
            }
            res.status(201).json({});
        })
        .catch(err => console.log(err));
});

router.post("/login", (req, res, next) => {
    User.find(req.body.email)
        .then(user => {
            if(!user) {
                return res.status(400).json({}); //TODO: check status code
            }
            bcrypt.compare(req.body.password, user.password)
                .then(match => {
                    if(match) {
                        return res.status(200).json({});
                    }
                    res.status(400).json({});
                })
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
});

module.exports = router;