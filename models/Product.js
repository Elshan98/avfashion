const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    category: {
        type: String,
        required: true
    },
    specification: {
        width: String,
        height: String,
        Depth: String,
        Weight: String,
    },
    img: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Product', ProductSchema);