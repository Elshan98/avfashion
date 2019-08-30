const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');
router.post('/blog/add', (req, res, next) => {
    const title = req.body.title;
    const description = req.body.description;
    const write = req.body.write;
    const img = req.body.img
    const newblog = { title: title, description: description, write: write, img: img };
    Blog.create(newblog, (err, success) => {
        if (err) {
            console.log(err);
        } else {
            res.json(success);
        }
    })
});

module.exports = router;
