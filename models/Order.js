const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const OrderSchema = new Schema({
    productInfo: {
        type: Object
    },
    userInfo: {
        type: Object
    }
});
module.exports = mongoose.model('Order', OrderSchema);