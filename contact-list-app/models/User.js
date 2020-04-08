const mongoose = require("mongoose");
const Schema   = mongoose.Schema;


const userSchema = new Schema({
    name: {
        type: String,
        maxlength: 15,
        required: true
    },
    mobile: {
        type: String,
        maxlength: 14,
        required: true
    },
    address: {
        type: String,
        maxlength: 40
    },
    birthDate: {
        type: String
    }
});

module.exports = User = mongoose.model('user', userSchema);