//require Mongoose

const mongoose = require('mongoose');



const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    cohortNumber: {type: String, required: true},
    participation: {type: Number, default: 0}
})

const Userdb = mongoose.model('userdb', UserSchema);

module.exports = Userdb;