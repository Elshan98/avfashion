const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const Comment = require('../models/Comment');
router.get('/detail/:id', function (req, res, next) {
    Product.findById(req.params.id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            Comment.find({ productid: req.params.id }, (err, resultcomment) => {
                if (err) {
                    console.log(err);
                } else {
                    res.render('detail', { result: result, resultcomment: resultcomment });
                }
            });
        }
    })
});

module.exports = router;
