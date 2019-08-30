const jwt = require('jsonwebtoken');
var store = require('store');
module.exports = (req, res, next) => {
    if (store.get('token')) {
        jwt.verify(store.get('token'), "cemilagasi", (err, decoded) => {
            if (err) {
                res.redirect('/signin');
            } else {
                req.decode = decoded;
                next();
            }
        });
    } else {
        res.redirect('/signin');
    }
};