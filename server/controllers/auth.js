const express = require('express');

const User = require('../model/user');

const router = express.Router();

router.post("/signup", (req, res, next) => {
    if(req.body.password !== req.body.confirmPassword) {
        return res.status(403).json({});
    }
    const newUser = new User({
        email: req.body.email,
        password: req.body.password
    });
    User.find(newUser.email)
        .then(user => {
            if(!user) {
                return newUser.save();
            }
            return;
        })
        .then(result => {
            if(!result) {
                return res.status(409).json({});
            }
            return res.status(201).json({});
        })
        .catch(err => console.log(err));
});

router.post("/login", (req, res, next) => {

});

module.exports = router;