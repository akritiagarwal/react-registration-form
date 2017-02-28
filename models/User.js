var mongoose = require('mongoose');

var characterSchema = new mongoose.Schema({
    UserId: { type: String, unique: true, index: true },
    userName: String,
    gender: String,
    userEmail:{type:String,unique:true,index:true},
    dateOfBirth:String,
    question:String
});

module.exports = mongoose.model('User', characterSchema);