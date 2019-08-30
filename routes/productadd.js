const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
router.post('/shop/product', (req, res) => {
    const title = req.body.title;
    const amount = req.body.amount;
    const description = req.body.description;
    const category = req.body.category;
    const specification = req.body.specification;
    const img = req.body.img;
    const newproduct = { title: title, amount: amount, description: description, img: img, category: category, specification: specification };
    Product.create(newproduct, (err, success) => {
        if (err) {
            console.log(err)
        } else {
            res.json(success);
        }
    })
})
module.exports = router;
