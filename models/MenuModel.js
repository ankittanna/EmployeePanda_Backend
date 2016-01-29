// Import Mongoose Package
var mongoose = require('mongoose');

// Declare the Menu Schema for all the restraunts
var MenuSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false  
    },
    category: {
        type: 'String',
        required: true
    },
    imageUrl: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    isAvailable: {
        type: Boolean,
        required: true
    },
    rating: {
        type: Number,
        required: false
    }
});

// Export the model schema
module.exports = MenuSchema;