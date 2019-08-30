const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
router.get('/shop', (req, res, next) => {
    Product.find({}, (err, products) => {
        if (err) {
            console.log(err);
        } else {
            res.render('shop', { products: products });
        }
    })
});
module.exports = router;
