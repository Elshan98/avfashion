const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BlogSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    write: {
        type: String
    },
    img: {
        type: String
    },
    time: {
        type: Date,
        default: Date.now
    },
    likecount: {
        type: Number,
        default: 0
    }, 
});
module.exports = mongoose.model('Blog', BlogSchema);