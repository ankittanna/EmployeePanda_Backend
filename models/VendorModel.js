// Import Mongoose Package
var mongoose = require('mongoose');

// Import Menu Schema
var menuModel = require('./MenuModel.js');

// Declare the Menu Schema for all the restraunts
var VendorSchema = new mongoose.Schema({
    vendorName: {
        type: String,
        required: true,
        default: 'VENDOR_NAME'
    },
    vendorPhoneNumber: {
        type: Number,
        required: true,
        default: '180018001800'
    },
    facility: {
        type: String,
        required: true,
        default: 'PDC1'
    },
    city: {
        type: String,
        required: true,
        default: 'PDC1'
    },
    menu: [menuModel]
});

// Export the model schema
module.exports = VendorSchema;