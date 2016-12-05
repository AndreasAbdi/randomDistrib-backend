var mongoose = require('mongoose');

module.exports = mongoose.model('Slice', {
    name: String,
    weight: Number
});