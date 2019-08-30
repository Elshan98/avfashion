const express = require('express');
const router = express.Router();
const Request = require('../models/Request');
router.post('/request', (req, res, next) => {
    const name = req.body.Ad;
    const email = req.body.email;
    const phone = req.body.telefon;
    const text = req.body.text;
    const gender = req.body.selector;
    const newrequest = { name: name, email: email, phone: phone, text: text, gender: gender };
    Request.create(newrequest, (err, success) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    })
});

module.exports = router;
