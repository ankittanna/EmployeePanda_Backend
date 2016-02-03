// Import Mongoose Package
var mongoose = require('mongoose');

var EmployeeSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    mobile:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: false
    },
    loginType:{
        type: String,
        required: true
    } // ADFS, Social, App
});

module.exports = EmployeeSchema;