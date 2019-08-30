const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');
router.get('/blog', (req, res, next) => {
    Blog.find({}, (err, blogs) => {
        if (err) {
            console.log(err)
        } else {
            res.render('blog', { blogs: blogs });
        }
    })
});
router.post('/bloglike/:id', (req, res, next) => {
    Blog.findById(req.params.id, (err, result) => {
        Blog.findByIdAndUpdate(req.params.id, { likecount: result.likecount += 1 }, (err, blogs) => {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/blog');
            }
        })
    })
});

module.exports = router;
