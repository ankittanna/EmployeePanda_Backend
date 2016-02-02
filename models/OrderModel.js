// Import Mongoose Package
var mongoose = require('mongoose');

// Declare the Order Schema for all the vendors
var OrderSchema = new mongoose.Schema({
    // username
    // item array
    // date time
    // vendor name
    // user phone number
    // order status - can be changed only by vendor
    username:{
        type: String,
        required: true
    },
    orderTime:{
        type: Date,
        required: true
    },
    vendor: {
        type: String,
        required: true
    },
    userPhoneNumber:{
        type: String,
        required: true
    },
    orderStatus:{
        type: String,
        required: true
    }
});

// Export the model schema
module.exports = OrderSchema;