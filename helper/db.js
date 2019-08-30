const mongoose = require('mongoose');
module.exports = () => {
    mongoose.connect('mongodb://Elsen:01111998a@ds357955.mlab.com:57955/av', { useNewUrlParser: true });
    mongoose.connection.on('open', () => {
        console.log("Mongoose connect success");
    });
    mongoose.connection.on('error', () => {
        console.log("Mongoose connect error");
    });
}