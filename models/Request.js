const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RequestSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    text: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    }
});
module.exports = mongoose.model('Request', RequestSchema);