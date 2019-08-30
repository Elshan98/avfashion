const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var store = require('store')
router.get('/signin', (req, res, next) => {
    res.render('signin');
});
router.post('/signin', (req, res) => {
    const Username = req.body.username;
    const Password = req.body.password;
    User.findOne({ username: Username }, (err, user) => {
        if (err) {
            throw err;
        } if (!user) {
            res.json({
                status: false,
                message: 'Sign in failed user not found'
            })
        } else {
            bcrypt.compare(Password, user.password).then((result) => {
                if (!result) {
                    res.json({
                        status: false,
                        message: 'Sign in failed wrong password'
                    })
                } else {
                    const payload = {
                        id: user._id,
                        username: Username
                    };
                    const token = jwt.sign(payload, "cemilagasi", {
                        expiresIn: 360
                    });
                    store.set('token', token);
                    res.redirect('/');
                }
            });
        }
    })
});
module.exports = router;
