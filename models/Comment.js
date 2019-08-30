const mongoos = require('mongoose');
const Schema = mongoos.Schema;
const CommentSchema = new Schema({
    productid: {
        type: String,
        required: true,
    },
    userid: {
        type: Object,
        required: true
    },
    review: {
        type: String,
        required: true
    }
});
module.exports = mongoos.model('comment', CommentSchema);