var mongoose = require('mongoose');

var tagSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model('tags', tagSchema);