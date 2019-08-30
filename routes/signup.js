const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
router.get('/signup', (req, res) => {
    res.render('signup');
})
router.post('/signup', (req, res) => {
    const Username = req.body.name;
    bcrypt.hash(req.body.password, 10).then(function (hash) {
        const newUser = {
            username: Username,
            password: hash,
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            phonenumber: req.body.phonenumber,
            location: req.body.location
        };
        User.create(newUser, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/signin')
            }
        })
    });
});
module.exports = router;