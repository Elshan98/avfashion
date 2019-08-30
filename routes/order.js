const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const User = require('../models/User');
const Order = require('../models/Order');
router.post('/order/:id', function (req, res, next) {
    Product.findById(req.params.id, (err, resultproduct) => {
        if (err) {
            console.log(err);
        } else {
            User.findById(req.decode.id, (err, resultuser) => {
                if (err) {
                    console.log(err);
                } else {
                    var newOrder = { productInfo: resultproduct, userInfo: resultuser };
                    Order.create(newOrder, (err, success) => {
                        if (err) {
                            console.log(err)
                        } else {
                            res.redirect(`/detail/${req.params.id}`);
                        }
                    })
                }
            })
        }
    })
});

module.exports = router;
