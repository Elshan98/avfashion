const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');
const User = require('../models/User');
const Product = require('../models/Product');
router.post('/comment/:id', function (req, res, next) {
    Product.findById(req.params.id, (err, resultproduct) => {
        if (err) {
            console.log(err)
        } else {
            User.findById(req.decode.id, (err, resultuser) => {
                var comment = req.body.review;
                var newComment = { review: comment, productid: resultproduct._id, userid: resultuser };
                Comment.create(newComment, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        res.redirect(`/detail/${req.params.id}`);
                    }
                })
            })
        }
    })
});

module.exports = router;
