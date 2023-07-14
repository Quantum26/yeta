// Load required packages
var mongoose = require('mongoose');

// Define our task schema
var UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    votes: {type: Array, default:[]}
})

// Export the Mongoose model
module.exports = mongoose.model('User', UserSchema);